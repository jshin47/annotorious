import { IResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

import { AuthPayload } from "./AuthPayload";
import { User } from "./User";

export const resolvers: IResolvers<TypeMap> = {
  AuthPayload,
  User
};
