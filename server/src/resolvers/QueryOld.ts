import { QueryResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import {me} from './query/me';

export interface QueryParent {}

export const Query: QueryResolvers.Type<TypeMap> = {
  me,
};
