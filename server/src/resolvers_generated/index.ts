import { IResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

import { Query } from "./Query";
import { Mutation } from "./Mutation";
import { AuthPayload } from "./AuthPayload";
import { User } from "./User";
import { AnnotationTask } from "./AnnotationTask";
import { Annotation } from "./Annotation";
import { SystemLogin } from "./SystemLogin";
import { LocalLogin } from "./LocalLogin";
import { Group } from "./Group";
import { Annotatable } from "./Annotatable";
import { Image } from "./Image";
import { ClassificationContext } from "./ClassificationContext";
import { ClassificationLabel } from "./ClassificationLabel";
import { CgPoint } from "./CgPoint";

export const resolvers: IResolvers<TypeMap> = {
  Query,
  Mutation,
  AuthPayload,
  User,
  AnnotationTask,
  Annotation,
  SystemLogin,
  LocalLogin,
  Group,
  Annotatable,
  Image,
  ClassificationContext,
  ClassificationLabel,
  CgPoint
};
