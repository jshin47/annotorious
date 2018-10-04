import { GraphQLResolveInfo } from "graphql";

export interface ITypeMap {
  Context: any;

  AuthPayloadParent: any;
  UserParent: any;
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

  export type EmailAddressType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type HashwordType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
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
    emailAddress: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    hashword: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export interface IResolvers<T extends ITypeMap> {
  AuthPayload: AuthPayloadResolvers.Type<T>;
  User: UserResolvers.Type<T>;
}
