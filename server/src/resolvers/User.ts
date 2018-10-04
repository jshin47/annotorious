import { UserResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface UserParent {
  id: string;
  createdAt: string;
  updatedAt: string;
  emailAddress: string;
  hashword: string;
}

export const User: UserResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt,
  emailAddress: parent => parent.emailAddress,
  hashword: parent => parent.hashword
};
