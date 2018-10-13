import { SystemUserLoginResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { UserParent } from "./User";
// import {Prisma} from "../generated/prisma-client";

export interface SystemUserLoginParent {
  id: string;
  user: UserParent;
  environmentVariable: string;
  systemUsername: string;
  createdAt: string;
  updatedAt: string;
}

export const SystemUserLogin: SystemUserLoginResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  user: (parent, args, ctx: any) => {
    console.log('resolving')
    return ctx.db.systemUserLogin({id: parent.id}).user()
  },
  environmentVariable: parent => parent.environmentVariable,
  systemUsername: parent => parent.systemUsername,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt
};
