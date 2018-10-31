import { MutationResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface MutationParent {}

export const Mutation: MutationResolvers.Type<TypeMap> = {
  login: (parent, args) => {
    throw new Error("Resolver not implemented");
  },
  createUser: (parent, args) => {
    throw new Error("Resolver not implemented");
  },
  defineImageAnnotationTask: (parent, args) => {
    throw new Error("Resolver not implemented");
  },
  annotateImage: (parent, args) => {
    throw new Error("Resolver not implemented");
  }
};
