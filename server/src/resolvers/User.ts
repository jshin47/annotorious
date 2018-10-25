import { UserResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { SystemLoginParent } from "./SystemLogin";
import { LocalLoginParent } from "./LocalLogin";
import { AnnotationTaskParent } from "./AnnotationTask";
import { AnnotationParent } from "./Annotation";

export interface UserParent {
  id: string;
  displayName: string;
  createdAt: string;
  updatedAt: string;
  systemLogin?: SystemLoginParent;
  localLogin?: LocalLoginParent;
  assignedAnnotationTasks: AnnotationTaskParent[];
  annotations: AnnotationParent[];
}

export const User: UserResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  displayName: parent => parent.displayName,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt,
  systemLogin: (parent, args, context: any) => context.db.user({id: parent.id}).systemLogin(),
  localLogin: parent => parent.localLogin,
  assignedAnnotationTasks: (parent, args) => parent.assignedAnnotationTasks,
  annotations: (parent, args) => parent.annotations
};
