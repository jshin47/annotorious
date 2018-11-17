import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Konva from 'konva';
import { Stage, Layer, Image, Rect, Label, Path } from 'react-konva';

import { AnnotatableImage } from './AnnotatableImage';
import { getOffsetCoordinates, getRectFromTwoPoints } from './calculationUtilities';

export class ImageAnnotationTool extends Component {
  state = {

  };

  componentDidMount() {
    document.addEventListener('mousemove', this.handleDocumentMouseMove);
    document.addEventListener('mouseup', this.handleDocumentMouseUp);

    if (this.drawingCanvas && !this.drawingContext) {
      this.drawingContext = this.drawingCanvas.getContext('2d');
      this.drawingContext.strokeStyle = "#df4b26";
      this.drawingContext.lineJoin = "round";
      this.drawingContext.lineWidth = 50;
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleDocumentMouseUp);
    document.removeEventListener('mousemove', this.handleDocumentMouseMove);
  }

  handleDocumentMouseUp = (e) => {
    if (this.state.dragging) return;

    switch (this.props.labelTool) {
      case ImageAnnotationTool.Tools.entireImage:
        break;
      case ImageAnnotationTool.Tools.boundingBox:
        if (this.drawingNewBoundingBox()) {
          this.createNewBoundingBox();
        }
        break;
      case ImageAnnotationTool.Tools.vectorDrawing:
      case ImageAnnotationTool.Tools.vectorErasing:
        this.setState(() => ({
          drawing: false,
        }));
        break;
      default:
        console.warn('No label tool is selected.');
    }
  };

  handleDocumentMouseMove = (e) => {
    if (this.state.dragging) return;

    switch (this.props.labelTool) {
      case ImageAnnotationTool.Tools.entireImage:
        break;
      case ImageAnnotationTool.Tools.boundingBox:
        if (!this.drawingNewBoundingBox()) return;
        const lastMousePosition = getOffsetCoordinates({
          pageCoordinates: e,
          referenceCoordinates: this.state.newBoundingBox.firstPoint,
          width: this.props.width,
          height: this.props.height,
        });

        this.setState(({ newBoundingBox }) => ({
          lastMousePosition,
          newBoundingBox: (newBoundingBox) ? { firstPoint: newBoundingBox.firstPoint, secondPoint: lastMousePosition } : null,
        }));
        break;
      case ImageAnnotationTool.Tools.vectorDrawing:
      case ImageAnnotationTool.Tools.vectorErasing:
        if (!this.state.drawing) return;
        this.drawingContext.globalCompositeOperation = (this.props.labelTool === ImageAnnotationTool.Tools.vectorDrawing) ? 'source-over' : 'destination-out';
        this.drawingContext.beginPath();
        const lastPointerPosition = this.state.lastDrawingPointerPosition;
        if (!lastPointerPosition) return;
        let localPos = {
          x: lastPointerPosition.x - this.elDrawingCanvas.x(),
          y: lastPointerPosition.y - this.elDrawingCanvas.y()
        };
        this.drawingContext.moveTo(localPos.x, localPos.y);
        const pos = this.elStage.getPointerPosition();
        localPos = {
          x: pos.x - this.elDrawingCanvas.x(),
          y: pos.y - this.elDrawingCanvas.y()
        };
        this.drawingContext.lineTo(localPos.x, localPos.y);
        this.drawingContext.closePath();
        this.drawingContext.stroke();
        this.setState(() => ({
          lastDrawingPointerPosition: pos,
        }));
        this.elDrawingLayer.batchDraw();
        break;
      default:
        console.warn('No label tool is selected.');
    }
  }

  handleStageMouseDown = (e) => {
    if (this.state.dragging) return;

    switch (this.props.labelTool) {
      case ImageAnnotationTool.Tools.entireImage:
        break;
      case ImageAnnotationTool.Tools.boundingBox:
        const firstPoint = {
          x: e.evt.offsetX,
          y: e.evt.offsetY,
          pageX: e.evt.pageX,
          pageY: e.evt.pageY,
        };
        this.setState(() => ({ newBoundingBox: { firstPoint } }));
        break;
      case ImageAnnotationTool.Tools.vectorDrawing:
      case ImageAnnotationTool.Tools.vectorErasing:
        break;
      default:
        console.warn('No label tool is selected.');
    }
  };

  handleStageClick = (e) => {
    if (this.state.dragging) return;

    switch (this.props.labelTool) {
      case ImageAnnotationTool.Tools.entireImage:
        this.labelEntireImage();
        break;
      case ImageAnnotationTool.Tools.boundingBox:
        break;
      case ImageAnnotationTool.Tools.vectorDrawing:
      case ImageAnnotationTool.Tools.vectorErasing:
        break;
      default:
        console.warn('No label tool is selected.');
    }
  };

  handleDragRect = (dragging) => {
    this.setState({
      dragging,
      newBoundingBox: null,
    })
  };
  handleDragRectStart = () => this.handleDragRect(true);
  handleDragRectStop = () => this.handleDragRect(false);

  handleDrawingCanvasMouseDown = (e) => {
    if (this.state.dragging) return;

    switch (this.props.labelTool) {
      case ImageAnnotationTool.Tools.entireImage:
        this.labelEntireImage();
        break;
      case ImageAnnotationTool.Tools.boundingBox:
        break;
      case ImageAnnotationTool.Tools.vectorDrawing:
      case ImageAnnotationTool.Tools.vectorErasing:
        this.setState(() => ({
          drawing: true,
          lastDrawingPointerPosition: this.elStage.getPointerPosition(),
        }));
        break;
      default:
        console.warn('No label tool is selected.');
    }
  }

  drawingNewBoundingBox = () => !!this.state.newBoundingBox;
  newBoundingBox = () => this.state.newBoundingBox;
  newBoundingBoxRect = () => {
    if (!this.drawingNewBoundingBox()) return false;
    const { firstPoint, secondPoint } = this.newBoundingBox();
    if (!firstPoint || !secondPoint) return false;
    const { x: x1, y: y1 } = firstPoint;
    const { x: x2, y: y2 } = secondPoint;
    if (typeof x1 !== 'number' || typeof x2 !== 'number' || typeof y1 !== 'number' || typeof 72 !== 'number') return false;
    return getRectFromTwoPoints(firstPoint, secondPoint);
  };

  labelEntireImage = () => {
    const labelEntireImage = this.props.onClassifyEntireImage || (() => console.log(`Cannot label entire image because no function.`));
    labelEntireImage();
  };

  createNewBoundingBox = () => {
    const newRectangle = this.newBoundingBoxRect();
    if (!newRectangle) return false;

    const createBoundingBox = this.props.onCreateBoundingBox || ((rect) => console.log(`Cannot create new bounding box ${rect} because no function is defined to do so.`));
    createBoundingBox(newRectangle);

    this.setState(() => ({
      newBoundingBox: null,
    }));
  };

  render() {
    const {
      width,
      height,
      image,
      entireImageClassifications,
      boundingBoxClassifications,
      vectorDrawingClassifications,
    } = this.props;

    if (!this.drawingCanvas) {
      this.drawingCanvas = document.createElement('canvas');
      this.drawingCanvas.width = this.props.width;
      this.drawingCanvas.height = this.props.height;
    }

    const newBoundingBoxRect = this.newBoundingBoxRect();
    console.log(newBoundingBoxRect);

    return (
      <div
        style={{ width, height }}
      >
        <Stage
          ref={(elStage) => { this.elStage = elStage; }}
          width={width}
          height={height}
          onMouseDown={this.handleStageMouseDown}
          onClick={this.handleStageClick}
        >
          <Layer>
            <AnnotatableImage src={image.uri} />
          </Layer>
          <Layer>
            {entireImageClassifications.map(({ fill = "red" }, index) => (
              <Rect
                x={0}
                y={0}
                width={width}
                height={height}
                fill={fill}
                opacity={0.2}
                key={index}
              />
            ))}
          </Layer>
          <Layer>
            {boundingBoxClassifications.map(({ x, y, width, height, fill = "red" }, index) => (
              <Rect
                draggable
                onDragStart={this.handleDragRectStart}
                onDragEnd={this.handleDragRectStop}
                x={x}
                y={y}
                width={width}
                height={height}
                fill={fill}
                opacity={0.2}
                key={index}
              />
            ))}
          </Layer>
          <Layer>
            {this.drawingNewBoundingBox() &&
            (
              <Rect
                x={newBoundingBoxRect.x}
                y={newBoundingBoxRect.y}
                width={newBoundingBoxRect.width}
                height={newBoundingBoxRect.height}
                fill="blue"
              />
            )
            }
          </Layer>
          <Layer ref={(elDrawingLayer) => { this.elDrawingLayer = elDrawingLayer; }}>
            <Image
              ref={(elDrawingCanvas) => { this.elDrawingCanvas = elDrawingCanvas; }}
              image={this.drawingCanvas}
              x={0}
              y={0}
              shadowBlur={0}
              onMouseDown={this.handleDrawingCanvasMouseDown}
            />
          </Layer>
        </Stage>
      </div>
    )

  }

}

ImageAnnotationTool.Tools = {
  entireImage: 'entireImage',
  boundingBox: 'boundingBox',
  vectorDrawing: 'vectorDrawing',
  vectorErasing: 'vectorErasing',
};

ImageAnnotationTool.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  image: PropTypes.shape({
    uri: PropTypes.string.isRequired,
  }).isRequired,
  entireImageClassifications: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    fill: PropTypes.string,
  })),
  boundingBoxClassifications: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    fill: PropTypes.string,
  })),
  onClassifyEntireImage: PropTypes.func,
  onClassifyBoundingBox: PropTypes.func,
  onClassifyVectorDrawing: PropTypes.func,
  labelTool: PropTypes.oneOf([...Object.values(ImageAnnotationTool.Tools)]),
};

export default ImageAnnotationTool;
