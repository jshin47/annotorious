import { ImageEdgeResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { ImageParent } from "./Image";

export interface ImageEdgeParent {
  node: ImageParent;
  cursor: string;
}

export const ImageEdge: ImageEdgeResolvers.Type<TypeMap> = {
  node: parent => parent.node,
  cursor: parent => parent.cursor
};
