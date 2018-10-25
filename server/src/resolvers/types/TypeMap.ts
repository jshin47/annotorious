import { ITypeMap } from "../../generated/resolvers";

import { QueryParent } from "../Query";
import { MutationParent } from "../Mutation";
import { AuthPayloadParent } from "../AuthPayload";
import { UserParent } from "../User";
import { AnnotationTaskParent } from "../AnnotationTask";
import { AnnotationParent } from "../Annotation";
import { SystemLoginParent } from "../SystemLogin";
import { LocalLoginParent } from "../LocalLogin";
import { AnnotatableParent } from "../Annotatable";
import { ImageParent } from "../Image";

import { Context } from "./context";

export interface TypeMap extends ITypeMap {
  Context: Context;
  QueryParent: QueryParent;
  MutationParent: MutationParent;
  AuthPayloadParent: AuthPayloadParent;
  UserParent: UserParent;
  AnnotationTaskParent: AnnotationTaskParent;
  AnnotationParent: AnnotationParent;
  SystemLoginParent: SystemLoginParent;
  LocalLoginParent: LocalLoginParent;
  AnnotatableParent: AnnotatableParent;
  ImageParent: ImageParent;
}
