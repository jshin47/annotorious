/**
 *
 * Experimental
 *
 */

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ensureAuthentication, setCurrentUser } from '../App/actions';
import ListOfAnnotatables from '../AnnotationTaskDesk/ListOfAnnotatables';
import { Box, Flex } from 'rebass';

import { ImageAnnotationTool } from '../ImageAnnotationTool/ImageAnnotationTool';

function Experimental({ dispatch }) {

  const [labelTool, setLabelTool] = useState('entireImage');

  const [boxes, setBoxes] = useState([
    {
      x: 10,
      y: 10,
      width: 100,
      height: 100,
    }
  ]);

  const [labels, setLabels] = useState([
    {
      label: 'Yo',
      fill: 'purple'
    },
    {
      label: 'Mama',
      fill: 'green'
    },
  ]);

  const doSomething = () => dispatch(ensureAuthentication({
    authenticatedAction: setCurrentUser({ token: null, user: null })
  }))

  return (
    <Flex style={{height: '500px'}}>
      <Box width={1}>
        <button onClick={() => setLabelTool('entireImage')}>Entire image</button>
        <button onClick={() => setLabelTool('boundingBox')}>Bounding box</button>
        <button onClick={() => setLabelTool('vectorDrawing')}>Vector</button>
      </Box>
      <Box width={1/4}>
        <ListOfAnnotatables annotatables={[{ title: 'Hello', thumbnailUri: 'https://picsum.photos/300/300/?random' }, { title: 'World', thumbnailUri: 'https://picsum.photos/300/300/?random' }]} onSelectRow={console.log} selectedRowIndex={0} />
      </Box>
      <Box width={3/4}>
        <ImageAnnotationTool
          width={500}
          height={500}
          image={{ uri: 'https://picsum.photos/500/500/?random' }}
          boundingBoxClassifications={boxes}
          entireImageClassifications={labels}
          onClassifyEntireImage={() => setLabels([...labels, { label: 'new', fill: 'black' }])}
          onCreateBoundingBox={(box) => setBoxes([...boxes, box])}
          labelTool={labelTool}
        />
      </Box>
    </Flex>
  );
}

Experimental.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Experimental);
