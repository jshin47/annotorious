import { DefineImageAnnotationTaskInputResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { AnnotatableImageParent } from "./AnnotatableImage";

export interface DefineImageAnnotationTaskInputParent {
  assignees: string[];
  subjects: AnnotatableImageParent[];
  requirements: string;
}

export const DefineImageAnnotationTaskInput: DefineImageAnnotationTaskInputResolvers.Type<
  TypeMap
> = {
  assignees: parent => parent.assignees,
  subjects: parent => parent.subjects,
  requirements: parent => parent.requirements
};
