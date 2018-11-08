/*
 *
 * AnnotationTaskDesk actions
 *
 */

import { CREATE_ANNOTATION_TASK_DESK, DEFAULT_ACTION } from './constants';
import { randomId } from 'utils/uuid';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function createAnnotationTaskDesk(deskId, taskId = null) {
  deskId = deskId || randomId();
  return {
    type: CREATE_ANNOTATION_TASK_DESK,
    deskId,
    taskId
  };
}
