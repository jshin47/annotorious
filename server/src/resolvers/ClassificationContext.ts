import { ClassificationContextResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { ClassificationLabelParent } from "./ClassificationLabel";
import { UserParent } from "./User";
import { GroupParent } from "./Group";

export interface ClassificationContextParent {
  id: string;
  slug: string;
  displayName: string;
  infoHtml?: string;
  infoData?: string;
  labels: ClassificationLabelParent[];
  owner?: UserParent;
  group?: GroupParent;
  anyoneCanUse: boolean;
  anyoneCanAddLabels: boolean;
  anyoneCanEditLabels: boolean;
  anyoneCanUpdateInfo: boolean;
  creator?: UserParent;
  createdAt: string;
  updatedAt: string;
}

export const ClassificationContext: ClassificationContextResolvers.Type<
  TypeMap
> = {
  id: parent => parent.id,
  slug: parent => parent.slug,
  displayName: parent => parent.displayName,
  infoHtml: parent => parent.infoHtml,
  infoData: parent => parent.infoData,
  labels: (parent, args) => parent.labels,
  owner: parent => parent.owner,
  group: parent => parent.group,
  anyoneCanUse: parent => parent.anyoneCanUse,
  anyoneCanAddLabels: parent => parent.anyoneCanAddLabels,
  anyoneCanEditLabels: parent => parent.anyoneCanEditLabels,
  anyoneCanUpdateInfo: parent => parent.anyoneCanUpdateInfo,
  creator: parent => parent.creator,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt
};
