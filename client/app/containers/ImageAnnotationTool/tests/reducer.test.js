import { fromJS } from 'immutable';
import imageAnnotationToolReducer from '../reducer';

describe('imageAnnotationToolReducer', () => {
  it('returns the initial state', () => {
    expect(imageAnnotationToolReducer(undefined, {})).toEqual(fromJS({}));
  });
});
