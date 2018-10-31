import { ImageResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { UserParent } from "./User";
import { GroupParent } from "./Group";

export interface ImageParent {
  id: string;
  uri: string;
  thumbnailUri?: string;
  caption?: string;
  digestSha3?: string;
  digestSha2?: string;
  digestSha1?: string;
  digestMd5?: string;
  sizeInBytes?: number;
  width?: number;
  height?: number;
  owner?: UserParent;
  group?: GroupParent;
  anyoneCanView: boolean;
  creator?: UserParent;
  createdAt: string;
  updatedAt: string;
}

export const Image: ImageResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  uri: parent => parent.uri,
  thumbnailUri: parent => parent.thumbnailUri,
  caption: parent => parent.caption,
  digestSha3: parent => parent.digestSha3,
  digestSha2: parent => parent.digestSha2,
  digestSha1: parent => parent.digestSha1,
  digestMd5: parent => parent.digestMd5,
  sizeInBytes: parent => parent.sizeInBytes,
  width: parent => parent.width,
  height: parent => parent.height,
  owner: parent => parent.owner,
  group: parent => parent.group,
  anyoneCanView: parent => parent.anyoneCanView,
  creator: parent => parent.creator,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt
};
