import { GroupResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { UserParent } from "./User";
import { GroupParent } from "./Group";
import { AnnotatableParent } from "./Annotatable";
import { ImageParent } from "./Image";
import { AnnotationParent } from "./Annotation";
import { AnnotationTaskParent } from "./AnnotationTask";
import { ClassificationContextParent } from "./ClassificationContext";
import { ClassificationLabelParent } from "./ClassificationLabel";

export interface GroupParent {
  id: string;
  displayName: string;
  memberUsers: UserParent[];
  memberGroups: GroupParent[];
  memberOfGroups: GroupParent[];
  ownedAnnotatables: AnnotatableParent[];
  ownedImages: ImageParent[];
  ownedAnnotations: AnnotationParent[];
  ownedAnnotationTasks: AnnotationTaskParent[];
  ownedClassificationContexts: ClassificationContextParent[];
  ownedClassificationLabels: ClassificationLabelParent[];
  owner?: UserParent;
  managerUsers: UserParent[];
  managerGroups: GroupParent[];
  managerOfGroups: GroupParent[];
  creator?: UserParent;
  createdAt: string;
  updatedAt: string;
}

export const Group: GroupResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  displayName: parent => parent.displayName,
  memberUsers: (parent, args) => parent.memberUsers,
  memberGroups: (parent, args) => parent.memberGroups,
  memberOfGroups: (parent, args) => parent.memberOfGroups,
  ownedAnnotatables: (parent, args) => parent.ownedAnnotatables,
  ownedImages: (parent, args) => parent.ownedImages,
  ownedAnnotations: (parent, args) => parent.ownedAnnotations,
  ownedAnnotationTasks: (parent, args) => parent.ownedAnnotationTasks,
  ownedClassificationContexts: (parent, args) =>
    parent.ownedClassificationContexts,
  ownedClassificationLabels: (parent, args) => parent.ownedClassificationLabels,
  owner: parent => parent.owner,
  managerUsers: (parent, args) => parent.managerUsers,
  managerGroups: (parent, args) => parent.managerGroups,
  managerOfGroups: (parent, args) => parent.managerOfGroups,
  creator: parent => parent.creator,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt
};
