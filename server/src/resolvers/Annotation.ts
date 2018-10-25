import { AnnotationResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { UserParent } from "./User";
import { AnnotatableParent } from "./Annotatable";
import { AnnotationTaskParent } from "./AnnotationTask";

export interface AnnotationParent {
  id: string;
  annotator: UserParent;
  subject: AnnotatableParent;
  task?: AnnotationTaskParent;
  data?: string;
}

export const Annotation: AnnotationResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  annotator: (parent, args, context: any) => context.db.annotation({id: parent.id}).annotator(),
  subject: (parent, args, context: any) => context.db.annotation({id: parent.id}).subject(),
  task: (parent, args, context: any) => context.db.annotation({id: parent.id}).task(),
  data: parent => parent.data
};
