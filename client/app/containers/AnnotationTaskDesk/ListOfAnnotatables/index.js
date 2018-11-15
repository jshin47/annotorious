/**
 *
 * ListOfAnnotatables
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { AutoSizer, List } from 'react-virtualized';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ListOfAnnotatablesListItem from './ListOfAnnotatablesListItem';

function ListOfAnnotatables({ annotatables, selectedRowIndex, onSelectRow }) {
  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          style={{}}
          height={height}
          overscanRowCount={10}
          noRowsRenderer={() => <span>No rows</span>}
          rowCount={annotatables.length}
          rowHeight={50}
          rowRenderer={({ index, style, key }) => (
              <ListOfAnnotatablesListItem key={key} style={style} {...annotatables[index]} />
          )}
          scrollToIndex={selectedRowIndex}
          width={width}
        />
      )}
    </AutoSizer>
  );
}

ListOfAnnotatables.propTypes = {
  annotatables: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnailUri: PropTypes.string,
  }).isRequired,
  selectedRowIndex: PropTypes.number,
  onSelectRow: PropTypes.func.isRequired,
};

export default ListOfAnnotatables;
