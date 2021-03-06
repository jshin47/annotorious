import { AnnotatableResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";
import { ImageParent } from "./Image";
import { AnnotationTaskParent } from "./AnnotationTask";
import {GroupParent} from '../resolvers_generated/Group';
import {UserParent} from '../resolvers_generated/User';

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
  tasks: (parent, args) => parent.tasks,
  owner: parent => parent.owner,
  group: parent => parent.group,
  anyoneCanView: parent => parent.anyoneCanView,
  anyoneCanAnnotate: parent => parent.anyoneCanAnnotate,
  creator: parent => parent.creator,
  createdAt: parent => parent.createdAt,
  updatedAt: parent => parent.updatedAt,
  image: (parent, args, context:any) => context.db.annotatable({ id: parent.id }).image(),
};
