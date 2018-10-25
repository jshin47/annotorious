import { AnnotatableResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { ImageParent } from "./Image";
import { AnnotationTaskParent } from "./AnnotationTask";

export interface AnnotatableParent {
  id: string;
  displayName?: string;
  text?: string;
  image?: ImageParent;
  tasks: AnnotationTaskParent[];
}

export const Annotatable: AnnotatableResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  displayName: parent => parent.displayName,
  text: parent => parent.text,
  image: (parent, args, context:any) => context.db.annotatable({ id: parent.id }).image(),
  tasks: (parent, args) => parent.tasks
};
