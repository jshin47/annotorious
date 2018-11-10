import { MutationResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import login from './mutation/login';
import defineImageAnnotationTask from './mutation/defineImageAnnotationTask';
import signup from './mutation/signup';
import annotateImage from './mutation/annotateImage';
import importImages from './mutation/importImages';

export interface MutationParent {}

export const Mutation: MutationResolvers.Type<TypeMap> = {
  login,
  signup,
  defineImageAnnotationTask,
  annotateImage,
  importImages,
};
