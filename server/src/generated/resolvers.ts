import { GraphQLResolveInfo } from "graphql";

export interface ITypeMap {
  Context: any;

  QueryParent: any;
  MutationParent: any;
  AuthPayloadParent: any;
  UserParent: any;
  SystemUserLoginParent: any;
  LocalLoginParent: any;
}

export interface UserCreateInput {
  displayName: string;
  systemUserLogin: string;
  localLogin: string;
}
export interface SystemUserLoginCreateOneWithoutUserInput {
  create: string;
  connect: string;
}
export interface LocalLoginCreateOneWithoutUserInput {
  create: string;
  connect: string;
}
export interface SystemUserLoginCreateWithoutUserInput {
  environmentVariable: string;
  systemUsername: string;
}
export interface SystemUserLoginWhereUniqueInput {
  id: string;
  environmentVariable: string;
  systemUsername: string;
}
export interface LocalLoginCreateWithoutUserInput {
  username: string;
  hashword: string;
}
export interface LocalLoginWhereUniqueInput {
  id: string;
  username: string;
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
    user: string;
    password: string;
  }

  export type LoginType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsLogin,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AuthPayloadParent"] | null | Promise<T["AuthPayloadParent"] | null>;

  export interface ArgsCreateUser {
    input: UserCreateInput;
  }

  export type CreateUserType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsCreateUser,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;

  export interface Type<T extends ITypeMap> {
    login: (
      parent: T["MutationParent"],
      args: ArgsLogin,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AuthPayloadParent"] | null | Promise<T["AuthPayloadParent"] | null>;
    createUser: (
      parent: T["MutationParent"],
      args: ArgsCreateUser,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
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

  export type SystemUserLoginType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) =>
    | T["SystemUserLoginParent"]
    | null
    | Promise<T["SystemUserLoginParent"] | null>;

  export type LocalLoginType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["LocalLoginParent"] | null | Promise<T["LocalLoginParent"] | null>;

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
    systemUserLogin: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) =>
      | T["SystemUserLoginParent"]
      | null
      | Promise<T["SystemUserLoginParent"] | null>;
    localLogin: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["LocalLoginParent"] | null | Promise<T["LocalLoginParent"] | null>;
  }
}

export namespace SystemUserLoginResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["SystemUserLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UserType<T extends ITypeMap> = (
    parent: T["SystemUserLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | Promise<T["UserParent"]>;

  export type EnvironmentVariableType<T extends ITypeMap> = (
    parent: T["SystemUserLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type SystemUsernameType<T extends ITypeMap> = (
    parent: T["SystemUserLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T["SystemUserLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtType<T extends ITypeMap> = (
    parent: T["SystemUserLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["SystemUserLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    user: (
      parent: T["SystemUserLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | Promise<T["UserParent"]>;
    environmentVariable: (
      parent: T["SystemUserLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    systemUsername: (
      parent: T["SystemUserLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    createdAt: (
      parent: T["SystemUserLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    updatedAt: (
      parent: T["SystemUserLoginParent"],
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

export interface IResolvers<T extends ITypeMap> {
  Query: QueryResolvers.Type<T>;
  Mutation: MutationResolvers.Type<T>;
  AuthPayload: AuthPayloadResolvers.Type<T>;
  User: UserResolvers.Type<T>;
  SystemUserLogin: SystemUserLoginResolvers.Type<T>;
  LocalLogin: LocalLoginResolvers.Type<T>;
}
