import { ITypeMap } from "../../generated/resolvers";

import { QueryParent } from "../Query";
import { MutationParent } from "../Mutation";
import { AuthPayloadParent } from "../AuthPayload";
import { UserParent } from "../User";
import { SystemUserLoginParent } from "../SystemUserLogin";
import { LocalLoginParent } from "../LocalLogin";

import { Context } from "./context";

export interface TypeMap extends ITypeMap {
  Context: Context;
  QueryParent: QueryParent;
  MutationParent: MutationParent;
  AuthPayloadParent: AuthPayloadParent;
  UserParent: UserParent;
  SystemUserLoginParent: SystemUserLoginParent;
  LocalLoginParent: LocalLoginParent;
}
