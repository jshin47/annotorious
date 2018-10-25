import { ImageResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface ImageParent {
  id: string;
  uri: string;
  thumbnailUri?: string;
  caption?: string;
}

export const Image: ImageResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  uri: parent => parent.uri,
  thumbnailUri: parent => parent.thumbnailUri,
  caption: parent => parent.caption
};
