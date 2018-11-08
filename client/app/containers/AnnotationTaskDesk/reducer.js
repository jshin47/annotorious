/*
 *
 * AnnotationTaskDesk reducer
 *
 */

import { fromJS } from 'immutable';
import { CREATE_ANNOTATION_TASK_DESK, DEFAULT_ACTION } from './constants';

export const initialState = fromJS({});

function annotationTaskDeskReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case CREATE_ANNOTATION_TASK_DESK:
      const { deskId: id, taskId } = action;
      console.log(id)
      return state.set(id, {
        id,
        taskId,
      });
    default:
      return state;
  }
}

export default annotationTaskDeskReducer;
