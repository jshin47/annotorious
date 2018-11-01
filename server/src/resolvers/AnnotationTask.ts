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

const getAnnotationTaskMember = (memberName) => (parent, args, context: any) => context.db.annotationTask({id: parent.id})[memberName]()

export const AnnotationTask: AnnotationTaskResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  assignees: getAnnotationTaskMember('assignees'),
  displayName: parent => parent.displayName,
  subjects: getAnnotationTaskMember('subjects'),
  requirements: parent => parent.requirements,
  classificationContexts: getAnnotationTaskMember('classificationContexts'),
  classificationLabels: getAnnotationTaskMember('classificationLabels'),
  owner: getAnnotationTaskMember('owner'),
  group: getAnnotationTaskMember('group'),
  anyoneCanView: parent => parent.anyoneCanView,
  anyoneCanJoin: parent => parent.anyoneCanJoin,
  creator: getAnnotationTaskMember('creator'),
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt
};
