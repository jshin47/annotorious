import { LocalLoginResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { UserParent } from "./User";

export interface LocalLoginParent {
  id: string;
  user: UserParent;
  username: string;
  hashword: string;
  createdAt: string;
  updatedAt: string;
}

export const LocalLogin: LocalLoginResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  user: parent => parent.user,
  username: parent => parent.username,
  hashword: parent => parent.hashword,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt
};
