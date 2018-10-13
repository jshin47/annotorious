import { IResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

import { Query } from "./Query";
import { Mutation } from "./Mutation";
import { AuthPayload } from "./AuthPayload";
import { User } from "./User";
import { SystemUserLogin } from "./SystemUserLogin";

export const resolvers: IResolvers<TypeMap> = {
  Query,
  Mutation,
  AuthPayload,
  User,
  SystemUserLogin
};
