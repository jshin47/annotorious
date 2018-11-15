import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the imageAnnotationTool state domain
 */

const selectImageAnnotationToolDomain = state =>
  state.get('imageAnnotationTool', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ImageAnnotationTool
 */

const makeSelectImageAnnotationTool = () =>
  createSelector(selectImageAnnotationToolDomain, substate => substate.toJS());

export default makeSelectImageAnnotationTool;
export { selectImageAnnotationToolDomain };
