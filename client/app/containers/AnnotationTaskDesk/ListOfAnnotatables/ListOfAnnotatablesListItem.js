/**
 *
 * ListOfAnnotatables
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Box, Flex, Image } from 'rebass';

function ListOfAnnotatablesListItem({ thumbnailUri, title, style }) {
  return (
    <Flex style={style} p={2} my={2}>
      <Box width={1/4} p={2}>
        <Image width={1} src={thumbnailUri} />
      </Box>
      <Box width={3/4}>
        <h5>
          {title}
        </h5>
      </Box>
    </Flex>
  );
}

ListOfAnnotatablesListItem.propTypes = {
  thumbnailUri: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default ListOfAnnotatablesListItem;
