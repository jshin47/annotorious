import { SystemLoginResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { UserParent } from "./User";

export interface SystemLoginParent {
  id: string;
  user: UserParent;
  username: string;
  passwordEnvironmentVariable: string;
  createdAt: string;
  updatedAt: string;
}

export const SystemLogin: SystemLoginResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  user: parent => parent.user,
  username: parent => parent.username,
  passwordEnvironmentVariable: parent => parent.passwordEnvironmentVariable,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt
};
