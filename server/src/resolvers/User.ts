import { UserResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { SystemLoginParent } from "./SystemLogin";
import { LocalLoginParent } from "./LocalLogin";
import { AnnotationTaskParent } from "./AnnotationTask";
import { AnnotationParent } from "./Annotation";
import {ClassificationLabelParent} from './ClassificationLabel';
import {AnnotatableParent} from './Annotatable';
import {ImageParent} from './Image';
import {GroupParent} from './Group';
import {ClassificationContextParent} from './ClassificationContext';

export interface UserParent {
  id: string;
  displayName: string;
  systemLogin?: SystemLoginParent;
  localLogin?: LocalLoginParent;
  assignedAnnotationTasks: AnnotationTaskParent[];
  annotations: AnnotationParent[];
  ownedGroups: GroupParent[];
  createdGroups: GroupParent[];
  memberOfGroups: GroupParent[];
  managerOfGroups: GroupParent[];
  ownedAnnotatables: AnnotatableParent[];
  createdAnnotatables: AnnotatableParent[];
  ownedImages: ImageParent[];
  createdImages: ImageParent[];
  ownedAnnotations: AnnotationParent[];
  createdAnnotations: AnnotationParent[];
  ownedAnnotationTasks: AnnotationTaskParent[];
  createdAnnotationTasks: AnnotationTaskParent[];
  ownedClassificationContexts: ClassificationContextParent[];
  createdClassificationContexts: ClassificationContextParent[];
  ownedClassificationLabels: ClassificationLabelParent[];
  createdClassificationLabels: ClassificationLabelParent[];
  createdAt: string;
  updatedAt: string;
}

export const User: UserResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  displayName: parent => parent.displayName,
  systemLogin: (parent, args, context: any) => context.db.user({id: parent.id}).systemLogin(),
  localLogin: (parent, args, context: any) => context.db.user({id: parent.id}).localLogin(),
  assignedAnnotationTasks: (parent, args) => parent.assignedAnnotationTasks,
  annotations: (parent, args) => parent.annotations,
  ownedGroups: (parent, args) => parent.ownedGroups,
  createdGroups: (parent, args) => parent.createdGroups,
  memberOfGroups: (parent, args) => parent.memberOfGroups,
  managerOfGroups: (parent, args) => parent.managerOfGroups,
  ownedAnnotatables: (parent, args) => parent.ownedAnnotatables,
  createdAnnotatables: (parent, args) => parent.createdAnnotatables,
  ownedImages: (parent, args) => parent.ownedImages,
  createdImages: (parent, args) => parent.createdImages,
  ownedAnnotations: (parent, args) => parent.ownedAnnotations,
  createdAnnotations: (parent, args) => parent.createdAnnotations,
  ownedAnnotationTasks: (parent, args) => parent.ownedAnnotationTasks,
  createdAnnotationTasks: (parent, args) => parent.createdAnnotationTasks,
  ownedClassificationContexts: (parent, args) =>
    parent.ownedClassificationContexts,
  createdClassificationContexts: (parent, args) =>
    parent.createdClassificationContexts,
  ownedClassificationLabels: (parent, args) => parent.ownedClassificationLabels,
  createdClassificationLabels: (parent, args) =>
    parent.createdClassificationLabels,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt,
};
