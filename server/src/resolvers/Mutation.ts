import { MutationResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import login from './mutation/login';

export interface MutationParent {}

export const Mutation: MutationResolvers.Type<TypeMap> = {
  login,
  createUser: (parent, args) => null
};
