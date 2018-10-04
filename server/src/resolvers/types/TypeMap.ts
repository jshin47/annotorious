import { ITypeMap } from "../../generated/resolvers";

import { AuthPayloadParent } from "../AuthPayload";
import { UserParent } from "../User";

import { Context } from "./context";

export interface TypeMap extends ITypeMap {
  Context: Context;
  AuthPayloadParent: AuthPayloadParent;
  UserParent: UserParent;
}
