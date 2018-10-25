import { AnnotatableImageResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { ImageParent } from "./Image";

export interface AnnotatableImageParent {
  id: string;
  image: ImageParent;
}

export const AnnotatableImage: AnnotatableImageResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  image: parent => parent.image
};
