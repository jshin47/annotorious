import { ImageConnectionResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { PageInfoParent } from "./PageInfo";
import { ImageEdgeParent } from "./ImageEdge";
import { AggregateImageParent } from "./AggregateImage";

export interface ImageConnectionParent {
  pageInfo: PageInfoParent;
  edges: ImageEdgeParent[];
  aggregate: AggregateImageParent;
}

export const ImageConnection: ImageConnectionResolvers.Type<TypeMap> = {
  pageInfo: parent => parent.pageInfo,
  edges: parent => parent.edges,
  aggregate: parent => parent.aggregate
};
