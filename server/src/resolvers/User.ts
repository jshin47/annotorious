import { UserResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { SystemLoginParent } from "./SystemLogin";
import { LocalLoginParent } from "./LocalLogin";

export interface UserParent {
  id: string;
  displayName: string;
  createdAt: string;
  updatedAt: string;
  systemLogin?: SystemLoginParent;
  localLogin?: LocalLoginParent;
}

export const User: UserResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  displayName: parent => parent.displayName,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt,
  systemLogin: parent => parent.systemLogin,
  localLogin: parent => parent.localLogin
};
