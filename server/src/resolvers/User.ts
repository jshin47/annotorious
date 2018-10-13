import { UserResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface UserParent {
  id: string;
  displayName: string;
  createdAt: string;
  updatedAt: string;
}

export const User: UserResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  displayName: parent => parent.displayName,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt
};
