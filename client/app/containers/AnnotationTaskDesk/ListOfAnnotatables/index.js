/**
 *
 * ListOfAnnotatables
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { AutoSizer, List } from 'react-virtualized';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ListOfAnnotatablesListItem from './ListOfAnnotatablesListItem';

function ListOfAnnotatables() {
  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          style={{}}
          height={height}
          overscanRowCount={0}
          noRowsRenderer={() => <span>No rows</span>}
          rowCount={100000}
          rowHeight={50}
          rowRenderer={({ index, style, key }) => (
            <ListOfAnnotatablesListItem key={key} style={style} title={"Test " + index} thumbnailUri="https://picsum.photos/200" />
          )}
          scrollToIndex={0}
          width={width}
        />
      )}
    </AutoSizer>
  );
}

ListOfAnnotatables.propTypes = {};

export default ListOfAnnotatables;
