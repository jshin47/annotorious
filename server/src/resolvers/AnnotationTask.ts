import { AnnotationTaskResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { UserParent } from "./User";
import { AnnotatableParent } from "./Annotatable";

export interface AnnotationTaskParent {
  id: string;
  assignees: UserParent[];
  displayName: string;
  subjects: AnnotatableParent[];
  requirements?: string;
}

export const AnnotationTask: AnnotationTaskResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  assignees: (parent, args, context: any) => context.db.annotationTask({id: parent.id}).assignees(),
  displayName: parent => parent.displayName,
  subjects: (parent, args, context: any) => context.db.annotationTask({id: parent.id}).subjects(),
  requirements: parent => parent.requirements
};
