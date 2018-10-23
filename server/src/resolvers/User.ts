import { UserResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { SystemUserLoginParent } from "./SystemUserLogin";
import { LocalLoginParent } from "./LocalLogin";

export interface UserParent {
  id: string;
  displayName: string;
  createdAt: string;
  updatedAt: string;
  systemUserLogin?: SystemUserLoginParent;
  localLogin?: LocalLoginParent;
}

export const User: UserResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  displayName: parent => parent.displayName,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt,
  systemUserLogin: parent => parent.systemUserLogin,
  localLogin: parent => parent.localLogin
};
