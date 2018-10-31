import { CgPointResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface CgPointParent {
  id: string;
  x: number;
  y: number;
  xMin?: number;
  yMin?: number;
  xMax?: number;
  yMax?: number;
  createdAt: string;
  updatedAt: string;
}

export const CgPoint: CgPointResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  x: parent => parent.x,
  y: parent => parent.y,
  xMin: parent => parent.xMin,
  yMin: parent => parent.yMin,
  xMax: parent => parent.xMax,
  yMax: parent => parent.yMax,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt
};
