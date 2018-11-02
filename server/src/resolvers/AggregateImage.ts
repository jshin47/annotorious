import { AggregateImageResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface AggregateImageParent {
  count: number;
}

export const AggregateImage: AggregateImageResolvers.Type<TypeMap> = {
  count: parent => parent.count
};
