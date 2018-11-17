/**
 *
 * ImageAnnotationTool
 *
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Konva from 'konva';
import { Stage, Layer, Image, Rect } from 'react-konva';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectImageAnnotationTool from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const ANNOTATION_TOOL_TYPES = {
  LABEL: 'LABEL',
  BOUNDING_BOX: 'BOUNDING_BOX',
  VECTOR: 'VECTOR',
};

class AnnotatableImage extends PureComponent {
  state = {};

  componentDidMount() {
    const image = new window.Image();
    image.src = this.props.src;
    image.onload = () => {
      this.setState(() => ({ image }));
    };
  }

  render() {
    return (
      <Image image={this.state.image} />
    )
  }
}

function getRectFromTwoPoints(point1, point2) {
  const leftX = Math.min(point1.x, point2.x);
  const rightX = Math.max(point1.x, point2.x);
  const topY = Math.min(point1.y, point2.y);
  const bottomY = Math.max(point1.y, point2.y);

  const newRectangle = {
    x: leftX,
    y: topY,
    width: rightX - leftX,
    height: bottomY - topY,
  };

  return newRectangle;
}

export class ImageAnnotationTool extends PureComponent {
  state = {
    mouseDownPosition: null,
    mouseUpPosition: null,
    lastMousePosition: null,
    dragging: false,
  };

  componentDidMount() {
    document.addEventListener('mouseup', this.onMouseUp);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.onMouseUp);
  }

  setMouseDownPosition = (e) => {
    if (this.props.tool === ANNOTATION_TOOL_TYPES.BOUNDING_BOX) {
      if (!this.state.dragging) {
        const mouseDownPosition = {
          x: e.evt.offsetX,
          y: e.evt.offsetY
        }
        this.setState(() => ({ mouseDownPosition }));
      } else {
        this.setState(() => ({
          mouseDownPosition: null,
          mouseUpPosition: null,
          lastMousePosition: null
        }));
      }
    }
  }
  setLastMousePosition = (e) => {
    if (this.props.tool === ANNOTATION_TOOL_TYPES.BOUNDING_BOX) {
      if (!this.state.dragging) {
        const lastMousePosition = {
          x: e.evt.offsetX,
          y: e.evt.offsetY
        };
        this.setState(() => ({ lastMousePosition }));
      } else {
        this.setState(() => ({
          mouseDownPosition: null,
          mouseUpPosition: null,
          lastMousePosition: null
        }));
      }
    }
  };

  onMouseUp = (e) => {
    if (this.props.tool === ANNOTATION_TOOL_TYPES.BOUNDING_BOX) {
      if (!this.state.dragging) {
        let mouseUpPosition = (e.evt) ? {
          x: e.evt.offsetX,
          y: e.evt.offsetY
        } : this.state.mouseUpPosition;

        mouseUpPosition = mouseUpPosition || this.state.lastMousePosition;

        const mouseDownPosition = this.state.mouseDownPosition;

        if (mouseDownPosition && mouseUpPosition) {
          this.props.onCreateBoundingBox(getRectFromTwoPoints(mouseDownPosition, mouseUpPosition));
        } else {
          this.setState(() => ({
            mouseDownPosition: null,
            mouseUpPosition: null,
            lastMousePosition: null
          }));
        }
      }

      this.setState(() => ({
        mouseDownPosition: null,
        mouseUpPosition: null,
        lastMousePosition: null
      }));
    }
  };

  onMouseEnter = (e) => {
    if (this.props.tool === ANNOTATION_TOOL_TYPES.BOUNDING_BOX) {
      if (!this.state.dragging && this.state.mouseDownPosition) {
        this.setState({ left: false });
      }
    }
  }

  onMouseOut = (e) => {
    if (this.props.tool === ANNOTATION_TOOL_TYPES.BOUNDING_BOX) {
      if (!this.state.dragging && this.state.mouseDownPosition) {
        this.setState({ left: true });
      }
    }
  };

  onTouchTap = (e) => {
    console.log('yo')
    if (this.props.tool === ANNOTATION_TOOL_TYPES.LABEL) {
      this.props.onClassifyEntireImage({
        
      })
    }
  };

  render() {
    const {
      width,
      height,
      image,
      tool = ANNOTATION_TOOL_TYPES.LABEL,
      entireImageClassifications = [],
      boundingBoxClassifications = [],
      layerMaskClassifications = [],
      onCreateBoundingBox,
      onClassifyEntireImage,
    } = this.props;

    const newBoundingBox = (this.state.mouseDownPosition) ? getRectFromTwoPoints(this.state.mouseDownPosition, this.state.lastMousePosition) : null;

    return (
      <div
        style={{ width, height }}
        onMouseLeave={this.onMouseOut}
        onMouseEnter={this.onMouseEnter}
      >
        <Stage
          width={width}
          height={height}
          onMouseDown={this.setMouseDownPosition}
          onMouseMove={this.setLastMousePosition}
          onMouseUp={this.onMouseUp}
          onClick={this.onTouchTap}
        >
          <Layer>
            <AnnotatableImage src={image.uri} />
          </Layer>
          <Layer>
            {boundingBoxClassifications.map(({ x, y, width, height, fill = "red" }) => (
              <Rect
                draggable
                onDragStart={(e) => {
                  this.setState(() => ({
                    dragging: true,
                    mouseDownPosition: null,
                    mouseUpPosition: null,
                    lastMousePosition: null
                  }));
                }}
                onDragEnd={(e) => {
                  this.setState(() => ({
                    dragging: false,
                    mouseDownPosition: null,
                    mouseUpPosition: null,
                    lastMousePosition: null
                  }));
                }}
                x={x}
                y={y}
                width={width}
                height={height}
                fill={fill}
              />
            ))}
          </Layer>
          <Layer>
            {newBoundingBox &&
              (
                <Rect
                  x={newBoundingBox.x}
                  y={newBoundingBox.y}
                  width={newBoundingBox.width}
                  height={newBoundingBox.height}
                  fill="blue"
                />
              )
            }
          </Layer>
        </Stage>
      </div>
    );
  }
}


ImageAnnotationTool.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  image: PropTypes.shape({
    uri: PropTypes.string.isRequired,
  }).isRequired,
  boundingBoxClassifications: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    fill: PropTypes.string,
  })),
  onCreateBoundingBox: PropTypes.func,
  onClassifyEntireImage: PropTypes.func,
  tool: PropTypes.oneOf([ANNOTATION_TOOL_TYPES.LABEL, ANNOTATION_TOOL_TYPES.BOUNDING_BOX]),
};

ImageAnnotationTool.defaultProps = {
  tool: ANNOTATION_TOOL_TYPES.LABEL,
}

const mapStateToProps = createStructuredSelector({
  imageAnnotationTool: makeSelectImageAnnotationTool(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'imageAnnotationTool', reducer });
const withSaga = injectSaga({ key: 'imageAnnotationTool', saga });

const ConnectedImageAnnotationTool = compose(
  withReducer,
  withSaga,
  withConnect,
)(ImageAnnotationTool);

export default ConnectedImageAnnotationTool;
