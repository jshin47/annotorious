import { fromJS } from 'immutable';
import annotationTaskDeskReducer from '../reducer';

describe('annotationTaskDeskReducer', () => {
  it('returns the initial state', () => {
    expect(annotationTaskDeskReducer(undefined, {})).toEqual(fromJS({}));
  });
});
