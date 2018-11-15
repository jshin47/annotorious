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
    <Flex style={style}>
      <Box width={1/4}>
        <Image width={1} src={thumbnailUri} />
      </Box>
      <Box width={3/4}>
        <span>
          {title}
        </span>
      </Box>
    </Flex>
  );
}

ListOfAnnotatablesListItem.propTypes = {
  thumbnailUri: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default ListOfAnnotatablesListItem;
