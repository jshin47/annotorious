import { AnnotatableResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { ImageParent } from "./Image";
import { AnnotationTaskParent } from "./AnnotationTask";
import { UserParent } from "./User";
import { GroupParent } from "./Group";

export interface AnnotatableParent {
  id: string;
  displayName?: string;
  text?: string;
  image?: ImageParent;
  tasks: AnnotationTaskParent[];
  owner?: UserParent;
  group?: GroupParent;
  anyoneCanView: boolean;
  anyoneCanAnnotate: boolean;
  creator?: UserParent;
  createdAt: string;
  updatedAt: string;
}

export const Annotatable: AnnotatableResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  displayName: parent => parent.displayName,
  text: parent => parent.text,
  image: parent => parent.image,
  tasks: (parent, args) => parent.tasks,
  owner: parent => parent.owner,
  group: parent => parent.group,
  anyoneCanView: parent => parent.anyoneCanView,
  anyoneCanAnnotate: parent => parent.anyoneCanAnnotate,
  creator: parent => parent.creator,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt
};
