import { AbcResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface AbcParent {
  id: string;
}

export const Abc: AbcResolvers.Type<TypeMap> = {
  id: parent => parent.id
};
