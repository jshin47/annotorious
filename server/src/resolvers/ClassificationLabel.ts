import { ClassificationLabelResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { ClassificationContextParent } from "./ClassificationContext";
import { UserParent } from "./User";
import { GroupParent } from "./Group";

export interface ClassificationLabelParent {
  id: string;
  slug: string;
  displayName: string;
  infoHtml?: string;
  infoData?: string;
  contexts: ClassificationContextParent[];
  owner?: UserParent;
  group?: GroupParent;
  anyoneCanUse: boolean;
  anyoneCanEditInfo: boolean;
  creator?: UserParent;
  createdAt: string;
  updatedAt: string;
}

export const ClassificationLabel: ClassificationLabelResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  slug: parent => parent.slug,
  displayName: parent => parent.displayName,
  infoHtml: parent => parent.infoHtml,
  infoData: parent => parent.infoData,
  contexts: (parent, args) => parent.contexts,
  owner: parent => parent.owner,
  group: parent => parent.group,
  anyoneCanUse: parent => parent.anyoneCanUse,
  anyoneCanEditInfo: parent => parent.anyoneCanEditInfo,
  creator: parent => parent.creator,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt
};
