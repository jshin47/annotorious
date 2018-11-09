import { QueryResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import {me} from './query/me';
import {images} from './query/images';
import {imagesConnection} from './query/imagesConnection';
import assignedAnnotationTasks from './query/assignedAnnotationTasks';

export interface QueryParent {}

export const Query: QueryResolvers.Type<TypeMap> = {
  me,
  images,
  imagesConnection,
  assignedAnnotationTasks,
};
