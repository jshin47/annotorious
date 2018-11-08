/**
 *
 * AnnotationTaskDesk
 *
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { graphql, compose as apolloCompose } from 'react-apollo';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAnnotationTaskDesk from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { createAnnotationTaskDesk } from './actions';
import { GET_ANNOTATION_TASK_QUERY } from 'data/graphql/queries';

export class AnnotationTaskDesk extends PureComponent {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    deskId: PropTypes.string.isRequired,
  }

  componentDidMount() {
    if (!this.props.annotationTaskDesk)
      this.props.dispatch(createAnnotationTaskDesk(this.props.deskId));
  }

  render() {

    if (!this.props.annotationTaskDesk || this.props.getAnnotationTaskQuery.loading)
      return (<div>Loading</div>)

    if (this.props.getAnnotationTaskQuery.error)
      return (<span>{this.props.getAnnotationTaskQuery.error.toString()}</span>)

    return (
      <div>
        <FormattedMessage {...messages.header} />
        <h1>{this.props.annotationTaskDesk.id}</h1>
      </div>
    );
  }
}

const withGraphql = graphql(GET_ANNOTATION_TASK_QUERY, {
  name: 'getAnnotationTaskQuery',
  fetchPolicy: 'network-only',
  options: (props) => ({
    variables: {
      id: 'abc' // props.taskId
    }
  })
})

const mapStateToProps = (state, ownProps) => createStructuredSelector({
  annotationTaskDesk: makeSelectAnnotationTaskDesk(ownProps.deskId),
})(state, ownProps);

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'annotationTaskDesk', reducer });
const withSaga = injectSaga({ key: 'annotationTaskDesk', saga });

export const ConnectedAnnotationTaskDesk = compose(
  withReducer,
  withSaga,
  withConnect,
  withGraphql,
)(AnnotationTaskDesk);

ConnectedAnnotationTaskDesk.defaultProps = {
  deskId: 'defaultDesk',
};

export default ConnectedAnnotationTaskDesk;
