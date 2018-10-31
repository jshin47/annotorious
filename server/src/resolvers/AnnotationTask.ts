import { AnnotationTaskResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { UserParent } from "./User";
import { AnnotatableParent } from "./Annotatable";
import {ClassificationLabelParent} from '../resolvers_generated/ClassificationLabel';
import {GroupParent} from '../resolvers_generated/Group';
import {ClassificationContextParent} from '../resolvers_generated/ClassificationContext';

export interface AnnotationTaskParent {
  id: string;
  assignees: UserParent[];
  displayName: string;
  subjects: AnnotatableParent[];
  requirements?: string;
  classificationContexts: ClassificationContextParent[];
  classificationLabels: ClassificationLabelParent[];
  owner?: UserParent;
  group?: GroupParent;
  anyoneCanView: boolean;
  anyoneCanJoin: boolean;
  creator?: UserParent;
  createdAt: string;
  updatedAt: string;
}

export const AnnotationTask: AnnotationTaskResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  assignees: (parent, args, context: any) => context.db.annotationTask({id: parent.id}).assignees(),
  displayName: parent => parent.displayName,
  subjects: (parent, args, context: any) => context.db.annotationTask({id: parent.id}).subjects(),
  requirements: parent => parent.requirements,
  classificationContexts: (parent, args) => parent.classificationContexts,
  classificationLabels: (parent, args) => parent.classificationLabels,
  owner: parent => parent.owner,
  group: parent => parent.group,
  anyoneCanView: parent => parent.anyoneCanView,
  anyoneCanJoin: parent => parent.anyoneCanJoin,
  creator: parent => parent.creator,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt
};
