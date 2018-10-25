import { AnnotateImageInputResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface AnnotateImageInputParent {
  subjectId: string;
  data: string;
  taskId?: string;
}

export const AnnotateImageInput: AnnotateImageInputResolvers.Type<TypeMap> = {
  subjectId: parent => parent.subjectId,
  data: parent => parent.data,
  taskId: parent => parent.taskId
};
