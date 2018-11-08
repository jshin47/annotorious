import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the annotationTaskDesk state domain
 */

const makeSelectAnnotationTaskDeskDomain = (deskId) => (state) =>
  state.getIn(['annotationTaskDesk', deskId]);

/**
 * Other specific selectors
*/

/**
 * Default selector used by AnnotationTaskDesk
 */

const makeSelectAnnotationTaskDesk = (deskId) =>
  createSelector(makeSelectAnnotationTaskDeskDomain(deskId), substate => substate);

export default makeSelectAnnotationTaskDesk;
