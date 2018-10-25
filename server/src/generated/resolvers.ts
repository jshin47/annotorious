import { GraphQLResolveInfo } from "graphql";

export interface ITypeMap {
  Context: any;
  AnnotationTaskOrderByInput: any;
  AnnotationOrderByInput: any;
  UserOrderByInput: any;
  AnnotatableOrderByInput: any;

  QueryParent: any;
  MutationParent: any;
  AuthPayloadParent: any;
  UserParent: any;
  AnnotationTaskParent: any;
  AnnotationParent: any;
  SystemLoginParent: any;
  LocalLoginParent: any;
  AnnotatableParent: any;
  ImageParent: any;
}

export interface AnnotateImageInput {
  subjectId: string;
  data: string;
  taskId: string;
}
export interface DefineImageAnnotationTaskInput {
  assignees: string;
  subjects: string;
  requirements: string;
}
export interface AnnotatableImageInput {
  id: string;
  imageUri: string;
}
export interface AnnotationTaskWhereInput {
  AND: string;
  OR: string;
  NOT: string;
  id: string;
  id_not: string;
  id_in: string;
  id_not_in: string;
  id_lt: string;
  id_lte: string;
  id_gt: string;
  id_gte: string;
  id_contains: string;
  id_not_contains: string;
  id_starts_with: string;
  id_not_starts_with: string;
  id_ends_with: string;
  id_not_ends_with: string;
  displayName: string;
  displayName_not: string;
  displayName_in: string;
  displayName_not_in: string;
  displayName_lt: string;
  displayName_lte: string;
  displayName_gt: string;
  displayName_gte: string;
  displayName_contains: string;
  displayName_not_contains: string;
  displayName_starts_with: string;
  displayName_not_starts_with: string;
  displayName_ends_with: string;
  displayName_not_ends_with: string;
  assignees_every: string;
  assignees_some: string;
  assignees_none: string;
  subjects_every: string;
  subjects_some: string;
  subjects_none: string;
}
export interface AnnotationWhereInput {
  AND: string;
  OR: string;
  NOT: string;
  id: string;
  id_not: string;
  id_in: string;
  id_not_in: string;
  id_lt: string;
  id_lte: string;
  id_gt: string;
  id_gte: string;
  id_contains: string;
  id_not_contains: string;
  id_starts_with: string;
  id_not_starts_with: string;
  id_ends_with: string;
  id_not_ends_with: string;
  annotator: string;
  subject: string;
  task: string;
}
export interface UserWhereInput {
  AND: string;
  OR: string;
  NOT: string;
  id: string;
  id_not: string;
  id_in: string;
  id_not_in: string;
  id_lt: string;
  id_lte: string;
  id_gt: string;
  id_gte: string;
  id_contains: string;
  id_not_contains: string;
  id_starts_with: string;
  id_not_starts_with: string;
  id_ends_with: string;
  id_not_ends_with: string;
  displayName: string;
  displayName_not: string;
  displayName_in: string;
  displayName_not_in: string;
  displayName_lt: string;
  displayName_lte: string;
  displayName_gt: string;
  displayName_gte: string;
  displayName_contains: string;
  displayName_not_contains: string;
  displayName_starts_with: string;
  displayName_not_starts_with: string;
  displayName_ends_with: string;
  displayName_not_ends_with: string;
  createdAt: string;
  createdAt_not: string;
  createdAt_in: string;
  createdAt_not_in: string;
  createdAt_lt: string;
  createdAt_lte: string;
  createdAt_gt: string;
  createdAt_gte: string;
  updatedAt: string;
  updatedAt_not: string;
  updatedAt_in: string;
  updatedAt_not_in: string;
  updatedAt_lt: string;
  updatedAt_lte: string;
  updatedAt_gt: string;
  updatedAt_gte: string;
  systemLogin: string;
  localLogin: string;
  assignedAnnotationTasks_every: string;
  assignedAnnotationTasks_some: string;
  assignedAnnotationTasks_none: string;
  annotations_every: string;
  annotations_some: string;
  annotations_none: string;
}
export interface AnnotatableWhereInput {
  AND: string;
  OR: string;
  NOT: string;
  id: string;
  id_not: string;
  id_in: string;
  id_not_in: string;
  id_lt: string;
  id_lte: string;
  id_gt: string;
  id_gte: string;
  id_contains: string;
  id_not_contains: string;
  id_starts_with: string;
  id_not_starts_with: string;
  id_ends_with: string;
  id_not_ends_with: string;
  displayName: string;
  displayName_not: string;
  displayName_in: string;
  displayName_not_in: string;
  displayName_lt: string;
  displayName_lte: string;
  displayName_gt: string;
  displayName_gte: string;
  displayName_contains: string;
  displayName_not_contains: string;
  displayName_starts_with: string;
  displayName_not_starts_with: string;
  displayName_ends_with: string;
  displayName_not_ends_with: string;
  text: string;
  text_not: string;
  text_in: string;
  text_not_in: string;
  text_lt: string;
  text_lte: string;
  text_gt: string;
  text_gte: string;
  text_contains: string;
  text_not_contains: string;
  text_starts_with: string;
  text_not_starts_with: string;
  text_ends_with: string;
  text_not_ends_with: string;
  image: string;
  tasks_every: string;
  tasks_some: string;
  tasks_none: string;
}
export interface SystemLoginWhereInput {
  AND: string;
  OR: string;
  NOT: string;
  id: string;
  id_not: string;
  id_in: string;
  id_not_in: string;
  id_lt: string;
  id_lte: string;
  id_gt: string;
  id_gte: string;
  id_contains: string;
  id_not_contains: string;
  id_starts_with: string;
  id_not_starts_with: string;
  id_ends_with: string;
  id_not_ends_with: string;
  username: string;
  username_not: string;
  username_in: string;
  username_not_in: string;
  username_lt: string;
  username_lte: string;
  username_gt: string;
  username_gte: string;
  username_contains: string;
  username_not_contains: string;
  username_starts_with: string;
  username_not_starts_with: string;
  username_ends_with: string;
  username_not_ends_with: string;
  passwordEnvironmentVariable: string;
  passwordEnvironmentVariable_not: string;
  passwordEnvironmentVariable_in: string;
  passwordEnvironmentVariable_not_in: string;
  passwordEnvironmentVariable_lt: string;
  passwordEnvironmentVariable_lte: string;
  passwordEnvironmentVariable_gt: string;
  passwordEnvironmentVariable_gte: string;
  passwordEnvironmentVariable_contains: string;
  passwordEnvironmentVariable_not_contains: string;
  passwordEnvironmentVariable_starts_with: string;
  passwordEnvironmentVariable_not_starts_with: string;
  passwordEnvironmentVariable_ends_with: string;
  passwordEnvironmentVariable_not_ends_with: string;
  createdAt: string;
  createdAt_not: string;
  createdAt_in: string;
  createdAt_not_in: string;
  createdAt_lt: string;
  createdAt_lte: string;
  createdAt_gt: string;
  createdAt_gte: string;
  updatedAt: string;
  updatedAt_not: string;
  updatedAt_in: string;
  updatedAt_not_in: string;
  updatedAt_lt: string;
  updatedAt_lte: string;
  updatedAt_gt: string;
  updatedAt_gte: string;
  user: string;
}
export interface LocalLoginWhereInput {
  AND: string;
  OR: string;
  NOT: string;
  id: string;
  id_not: string;
  id_in: string;
  id_not_in: string;
  id_lt: string;
  id_lte: string;
  id_gt: string;
  id_gte: string;
  id_contains: string;
  id_not_contains: string;
  id_starts_with: string;
  id_not_starts_with: string;
  id_ends_with: string;
  id_not_ends_with: string;
  username: string;
  username_not: string;
  username_in: string;
  username_not_in: string;
  username_lt: string;
  username_lte: string;
  username_gt: string;
  username_gte: string;
  username_contains: string;
  username_not_contains: string;
  username_starts_with: string;
  username_not_starts_with: string;
  username_ends_with: string;
  username_not_ends_with: string;
  hashword: string;
  hashword_not: string;
  hashword_in: string;
  hashword_not_in: string;
  hashword_lt: string;
  hashword_lte: string;
  hashword_gt: string;
  hashword_gte: string;
  hashword_contains: string;
  hashword_not_contains: string;
  hashword_starts_with: string;
  hashword_not_starts_with: string;
  hashword_ends_with: string;
  hashword_not_ends_with: string;
  createdAt: string;
  createdAt_not: string;
  createdAt_in: string;
  createdAt_not_in: string;
  createdAt_lt: string;
  createdAt_lte: string;
  createdAt_gt: string;
  createdAt_gte: string;
  updatedAt: string;
  updatedAt_not: string;
  updatedAt_in: string;
  updatedAt_not_in: string;
  updatedAt_lt: string;
  updatedAt_lte: string;
  updatedAt_gt: string;
  updatedAt_gte: string;
  user: string;
}
export interface ImageWhereInput {
  AND: string;
  OR: string;
  NOT: string;
  id: string;
  id_not: string;
  id_in: string;
  id_not_in: string;
  id_lt: string;
  id_lte: string;
  id_gt: string;
  id_gte: string;
  id_contains: string;
  id_not_contains: string;
  id_starts_with: string;
  id_not_starts_with: string;
  id_ends_with: string;
  id_not_ends_with: string;
  uri: string;
  uri_not: string;
  uri_in: string;
  uri_not_in: string;
  uri_lt: string;
  uri_lte: string;
  uri_gt: string;
  uri_gte: string;
  uri_contains: string;
  uri_not_contains: string;
  uri_starts_with: string;
  uri_not_starts_with: string;
  uri_ends_with: string;
  uri_not_ends_with: string;
  thumbnailUri: string;
  thumbnailUri_not: string;
  thumbnailUri_in: string;
  thumbnailUri_not_in: string;
  thumbnailUri_lt: string;
  thumbnailUri_lte: string;
  thumbnailUri_gt: string;
  thumbnailUri_gte: string;
  thumbnailUri_contains: string;
  thumbnailUri_not_contains: string;
  thumbnailUri_starts_with: string;
  thumbnailUri_not_starts_with: string;
  thumbnailUri_ends_with: string;
  thumbnailUri_not_ends_with: string;
  caption: string;
  caption_not: string;
  caption_in: string;
  caption_not_in: string;
  caption_lt: string;
  caption_lte: string;
  caption_gt: string;
  caption_gte: string;
  caption_contains: string;
  caption_not_contains: string;
  caption_starts_with: string;
  caption_not_starts_with: string;
  caption_ends_with: string;
  caption_not_ends_with: string;
}

export namespace QueryResolvers {
  export type MeType<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;

  export interface Type<T extends ITypeMap> {
    me: (
      parent: T["QueryParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
  }
}

export namespace MutationResolvers {
  export interface ArgsLogin {
    username: string;
    password: string;
  }

  export type LoginType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsLogin,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AuthPayloadParent"] | Promise<T["AuthPayloadParent"]>;

  export interface ArgsCreateUser {
    username: string;
    password: string;
  }

  export type CreateUserType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsCreateUser,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AuthPayloadParent"] | Promise<T["AuthPayloadParent"]>;

  export interface ArgsDefineImageAnnotationTask {
    data: DefineImageAnnotationTaskInput;
  }

  export type DefineImageAnnotationTaskType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsDefineImageAnnotationTask,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AnnotationTaskParent"] | Promise<T["AnnotationTaskParent"]>;

  export interface ArgsAnnotateImage {
    data: AnnotateImageInput;
  }

  export type AnnotateImageType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsAnnotateImage,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AnnotationParent"] | Promise<T["AnnotationParent"]>;

  export interface Type<T extends ITypeMap> {
    login: (
      parent: T["MutationParent"],
      args: ArgsLogin,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AuthPayloadParent"] | Promise<T["AuthPayloadParent"]>;
    createUser: (
      parent: T["MutationParent"],
      args: ArgsCreateUser,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AuthPayloadParent"] | Promise<T["AuthPayloadParent"]>;
    defineImageAnnotationTask: (
      parent: T["MutationParent"],
      args: ArgsDefineImageAnnotationTask,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AnnotationTaskParent"] | Promise<T["AnnotationTaskParent"]>;
    annotateImage: (
      parent: T["MutationParent"],
      args: ArgsAnnotateImage,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AnnotationParent"] | Promise<T["AnnotationParent"]>;
  }
}

export namespace AuthPayloadResolvers {
  export type TokenType<T extends ITypeMap> = (
    parent: T["AuthPayloadParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UserType<T extends ITypeMap> = (
    parent: T["AuthPayloadParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | Promise<T["UserParent"]>;

  export interface Type<T extends ITypeMap> {
    token: (
      parent: T["AuthPayloadParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    user: (
      parent: T["AuthPayloadParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | Promise<T["UserParent"]>;
  }
}

export namespace UserResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type DisplayNameType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type SystemLoginType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["SystemLoginParent"] | null | Promise<T["SystemLoginParent"] | null>;

  export type LocalLoginType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["LocalLoginParent"] | null | Promise<T["LocalLoginParent"] | null>;

  export interface ArgsAssignedAnnotationTasks {
    where: AnnotationTaskWhereInput | null;
    orderBy: T["AnnotationTaskOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type AssignedAnnotationTasksType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: ArgsAssignedAnnotationTasks,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AnnotationTaskParent"][] | Promise<T["AnnotationTaskParent"][]>;

  export interface ArgsAnnotations {
    where: AnnotationWhereInput | null;
    orderBy: T["AnnotationOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type AnnotationsType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: ArgsAnnotations,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AnnotationParent"][] | Promise<T["AnnotationParent"][]>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    displayName: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    createdAt: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    updatedAt: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    systemLogin: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["SystemLoginParent"] | null | Promise<T["SystemLoginParent"] | null>;
    localLogin: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["LocalLoginParent"] | null | Promise<T["LocalLoginParent"] | null>;
    assignedAnnotationTasks: (
      parent: T["UserParent"],
      args: ArgsAssignedAnnotationTasks,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AnnotationTaskParent"][] | Promise<T["AnnotationTaskParent"][]>;
    annotations: (
      parent: T["UserParent"],
      args: ArgsAnnotations,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AnnotationParent"][] | Promise<T["AnnotationParent"][]>;
  }
}

export namespace AnnotationTaskResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["AnnotationTaskParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface ArgsAssignees {
    where: UserWhereInput | null;
    orderBy: T["UserOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type AssigneesType<T extends ITypeMap> = (
    parent: T["AnnotationTaskParent"],
    args: ArgsAssignees,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"][] | Promise<T["UserParent"][]>;

  export type DisplayNameType<T extends ITypeMap> = (
    parent: T["AnnotationTaskParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface ArgsSubjects {
    where: AnnotatableWhereInput | null;
    orderBy: T["AnnotatableOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type SubjectsType<T extends ITypeMap> = (
    parent: T["AnnotationTaskParent"],
    args: ArgsSubjects,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AnnotatableParent"][] | Promise<T["AnnotatableParent"][]>;

  export type RequirementsType<T extends ITypeMap> = (
    parent: T["AnnotationTaskParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["AnnotationTaskParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    assignees: (
      parent: T["AnnotationTaskParent"],
      args: ArgsAssignees,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"][] | Promise<T["UserParent"][]>;
    displayName: (
      parent: T["AnnotationTaskParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    subjects: (
      parent: T["AnnotationTaskParent"],
      args: ArgsSubjects,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AnnotatableParent"][] | Promise<T["AnnotatableParent"][]>;
    requirements: (
      parent: T["AnnotationTaskParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
  }
}

export namespace AnnotationResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["AnnotationParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type AnnotatorType<T extends ITypeMap> = (
    parent: T["AnnotationParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | Promise<T["UserParent"]>;

  export type SubjectType<T extends ITypeMap> = (
    parent: T["AnnotationParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AnnotatableParent"] | Promise<T["AnnotatableParent"]>;

  export type TaskType<T extends ITypeMap> = (
    parent: T["AnnotationParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) =>
    | T["AnnotationTaskParent"]
    | null
    | Promise<T["AnnotationTaskParent"] | null>;

  export type DataType<T extends ITypeMap> = (
    parent: T["AnnotationParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["AnnotationParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    annotator: (
      parent: T["AnnotationParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | Promise<T["UserParent"]>;
    subject: (
      parent: T["AnnotationParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AnnotatableParent"] | Promise<T["AnnotatableParent"]>;
    task: (
      parent: T["AnnotationParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) =>
      | T["AnnotationTaskParent"]
      | null
      | Promise<T["AnnotationTaskParent"] | null>;
    data: (
      parent: T["AnnotationParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
  }
}

export namespace SystemLoginResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["SystemLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UserType<T extends ITypeMap> = (
    parent: T["SystemLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | Promise<T["UserParent"]>;

  export type UsernameType<T extends ITypeMap> = (
    parent: T["SystemLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type PasswordEnvironmentVariableType<T extends ITypeMap> = (
    parent: T["SystemLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T["SystemLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtType<T extends ITypeMap> = (
    parent: T["SystemLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["SystemLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    user: (
      parent: T["SystemLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | Promise<T["UserParent"]>;
    username: (
      parent: T["SystemLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    passwordEnvironmentVariable: (
      parent: T["SystemLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    createdAt: (
      parent: T["SystemLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    updatedAt: (
      parent: T["SystemLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace LocalLoginResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["LocalLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UserType<T extends ITypeMap> = (
    parent: T["LocalLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | Promise<T["UserParent"]>;

  export type UsernameType<T extends ITypeMap> = (
    parent: T["LocalLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type HashwordType<T extends ITypeMap> = (
    parent: T["LocalLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T["LocalLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtType<T extends ITypeMap> = (
    parent: T["LocalLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["LocalLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    user: (
      parent: T["LocalLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | Promise<T["UserParent"]>;
    username: (
      parent: T["LocalLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    hashword: (
      parent: T["LocalLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    createdAt: (
      parent: T["LocalLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    updatedAt: (
      parent: T["LocalLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace AnnotatableResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["AnnotatableParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type DisplayNameType<T extends ITypeMap> = (
    parent: T["AnnotatableParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type TextType<T extends ITypeMap> = (
    parent: T["AnnotatableParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type ImageType<T extends ITypeMap> = (
    parent: T["AnnotatableParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ImageParent"] | null | Promise<T["ImageParent"] | null>;

  export interface ArgsTasks {
    where: AnnotationTaskWhereInput | null;
    orderBy: T["AnnotationTaskOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type TasksType<T extends ITypeMap> = (
    parent: T["AnnotatableParent"],
    args: ArgsTasks,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AnnotationTaskParent"][] | Promise<T["AnnotationTaskParent"][]>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["AnnotatableParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    displayName: (
      parent: T["AnnotatableParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    text: (
      parent: T["AnnotatableParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    image: (
      parent: T["AnnotatableParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ImageParent"] | null | Promise<T["ImageParent"] | null>;
    tasks: (
      parent: T["AnnotatableParent"],
      args: ArgsTasks,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AnnotationTaskParent"][] | Promise<T["AnnotationTaskParent"][]>;
  }
}

export namespace ImageResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["ImageParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UriType<T extends ITypeMap> = (
    parent: T["ImageParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ThumbnailUriType<T extends ITypeMap> = (
    parent: T["ImageParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type CaptionType<T extends ITypeMap> = (
    parent: T["ImageParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["ImageParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    uri: (
      parent: T["ImageParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    thumbnailUri: (
      parent: T["ImageParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    caption: (
      parent: T["ImageParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
  }
}

export interface IResolvers<T extends ITypeMap> {
  Query: QueryResolvers.Type<T>;
  Mutation: MutationResolvers.Type<T>;
  AuthPayload: AuthPayloadResolvers.Type<T>;
  User: UserResolvers.Type<T>;
  AnnotationTask: AnnotationTaskResolvers.Type<T>;
  Annotation: AnnotationResolvers.Type<T>;
  SystemLogin: SystemLoginResolvers.Type<T>;
  LocalLogin: LocalLoginResolvers.Type<T>;
  Annotatable: AnnotatableResolvers.Type<T>;
  Image: ImageResolvers.Type<T>;
}
