import { AnnotationResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { UserParent } from "./User";
import { AnnotatableParent } from "./Annotatable";
import { AnnotationTaskParent } from "./AnnotationTask";
import { ClassificationLabelParent } from "./ClassificationLabel";
import { CgPointParent } from "./CgPoint";
import { GroupParent } from "./Group";

export interface AnnotationParent {
  id: string;
  annotator: UserParent;
  subject: AnnotatableParent;
  task?: AnnotationTaskParent;
  data?: string;
  classificationLabels: ClassificationLabelParent[];
  svgBounds?: string;
  convexHull: CgPointParent[];
  owner?: UserParent;
  group?: GroupParent;
  anyoneCanView: boolean;
  anyoneCanSuggestRevision: boolean;
  creator?: UserParent;
  createdAt: string;
  updatedAt: string;
}

export const Annotation: AnnotationResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  annotator: parent => parent.annotator,
  subject: parent => parent.subject,
  task: parent => parent.task,
  data: parent => parent.data,
  classificationLabels: (parent, args) => parent.classificationLabels,
  svgBounds: parent => parent.svgBounds,
  convexHull: (parent, args) => parent.convexHull,
  owner: parent => parent.owner,
  group: parent => parent.group,
  anyoneCanView: parent => parent.anyoneCanView,
  anyoneCanSuggestRevision: parent => parent.anyoneCanSuggestRevision,
  creator: parent => parent.creator,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt
};
