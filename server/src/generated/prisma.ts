import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    systemUserLogins: <T = SystemUserLogin[]>(args: { where?: SystemUserLoginWhereInput, orderBy?: SystemUserLoginOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    systemUserLogin: <T = SystemUserLogin | null>(args: { where: SystemUserLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    systemUserLoginsConnection: <T = SystemUserLoginConnection>(args: { where?: SystemUserLoginWhereInput, orderBy?: SystemUserLoginOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createSystemUserLogin: <T = SystemUserLogin>(args: { data: SystemUserLoginCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSystemUserLogin: <T = SystemUserLogin | null>(args: { data: SystemUserLoginUpdateInput, where: SystemUserLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSystemUserLogin: <T = SystemUserLogin | null>(args: { where: SystemUserLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSystemUserLogin: <T = SystemUserLogin>(args: { where: SystemUserLoginWhereUniqueInput, create: SystemUserLoginCreateInput, update: SystemUserLoginUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySystemUserLogins: <T = BatchPayload>(args: { data: SystemUserLoginUpdateInput, where?: SystemUserLoginWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySystemUserLogins: <T = BatchPayload>(args: { where?: SystemUserLoginWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    systemUserLogin: <T = SystemUserLoginSubscriptionPayload | null>(args: { where?: SystemUserLoginSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  SystemUserLogin: (where?: SystemUserLoginWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateSystemUserLogin {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createSystemUserLogin(data: SystemUserLoginCreateInput!): SystemUserLogin!
  createUser(data: UserCreateInput!): User!
  updateSystemUserLogin(data: SystemUserLoginUpdateInput!, where: SystemUserLoginWhereUniqueInput!): SystemUserLogin
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteSystemUserLogin(where: SystemUserLoginWhereUniqueInput!): SystemUserLogin
  deleteUser(where: UserWhereUniqueInput!): User
  upsertSystemUserLogin(where: SystemUserLoginWhereUniqueInput!, create: SystemUserLoginCreateInput!, update: SystemUserLoginUpdateInput!): SystemUserLogin!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManySystemUserLogins(data: SystemUserLoginUpdateInput!, where: SystemUserLoginWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  deleteManySystemUserLogins(where: SystemUserLoginWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  systemUserLogins(where: SystemUserLoginWhereInput, orderBy: SystemUserLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SystemUserLogin]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  systemUserLogin(where: SystemUserLoginWhereUniqueInput!): SystemUserLogin
  user(where: UserWhereUniqueInput!): User
  systemUserLoginsConnection(where: SystemUserLoginWhereInput, orderBy: SystemUserLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SystemUserLoginConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  systemUserLogin(where: SystemUserLoginSubscriptionWhereInput): SystemUserLoginSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type SystemUserLogin implements Node {
  id: ID!
  user: User!
  environmentVariable: String!
  systemUsername: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type SystemUserLoginConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SystemUserLoginEdge]!
  aggregate: AggregateSystemUserLogin!
}

input SystemUserLoginCreateInput {
  environmentVariable: String!
  systemUsername: String!
  user: UserCreateOneInput!
}

"""An edge in a connection."""
type SystemUserLoginEdge {
  """The item at the end of the edge."""
  node: SystemUserLogin!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SystemUserLoginOrderByInput {
  id_ASC
  id_DESC
  environmentVariable_ASC
  environmentVariable_DESC
  systemUsername_ASC
  systemUsername_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SystemUserLoginPreviousValues {
  id: ID!
  environmentVariable: String!
  systemUsername: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type SystemUserLoginSubscriptionPayload {
  mutation: MutationType!
  node: SystemUserLogin
  updatedFields: [String!]
  previousValues: SystemUserLoginPreviousValues
}

input SystemUserLoginSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SystemUserLoginSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SystemUserLoginSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SystemUserLoginSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: SystemUserLoginWhereInput
}

input SystemUserLoginUpdateInput {
  environmentVariable: String
  systemUsername: String
  user: UserUpdateOneRequiredInput
}

input SystemUserLoginWhereInput {
  """Logical AND on all given filters."""
  AND: [SystemUserLoginWhereInput!]

  """Logical OR on all given filters."""
  OR: [SystemUserLoginWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SystemUserLoginWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  environmentVariable: String

  """All values that are not equal to given value."""
  environmentVariable_not: String

  """All values that are contained in given list."""
  environmentVariable_in: [String!]

  """All values that are not contained in given list."""
  environmentVariable_not_in: [String!]

  """All values less than the given value."""
  environmentVariable_lt: String

  """All values less than or equal the given value."""
  environmentVariable_lte: String

  """All values greater than the given value."""
  environmentVariable_gt: String

  """All values greater than or equal the given value."""
  environmentVariable_gte: String

  """All values containing the given string."""
  environmentVariable_contains: String

  """All values not containing the given string."""
  environmentVariable_not_contains: String

  """All values starting with the given string."""
  environmentVariable_starts_with: String

  """All values not starting with the given string."""
  environmentVariable_not_starts_with: String

  """All values ending with the given string."""
  environmentVariable_ends_with: String

  """All values not ending with the given string."""
  environmentVariable_not_ends_with: String
  systemUsername: String

  """All values that are not equal to given value."""
  systemUsername_not: String

  """All values that are contained in given list."""
  systemUsername_in: [String!]

  """All values that are not contained in given list."""
  systemUsername_not_in: [String!]

  """All values less than the given value."""
  systemUsername_lt: String

  """All values less than or equal the given value."""
  systemUsername_lte: String

  """All values greater than the given value."""
  systemUsername_gt: String

  """All values greater than or equal the given value."""
  systemUsername_gte: String

  """All values containing the given string."""
  systemUsername_contains: String

  """All values not containing the given string."""
  systemUsername_not_contains: String

  """All values starting with the given string."""
  systemUsername_starts_with: String

  """All values not starting with the given string."""
  systemUsername_not_starts_with: String

  """All values ending with the given string."""
  systemUsername_ends_with: String

  """All values not ending with the given string."""
  systemUsername_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  user: UserWhereInput
}

input SystemUserLoginWhereUniqueInput {
  id: ID
  environmentVariable: String
  systemUsername: String
}

type User implements Node {
  id: ID!
  displayName: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  displayName: String!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  displayName_ASC
  displayName_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  displayName: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  displayName: String
}

input UserUpdateInput {
  displayName: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  displayName: String

  """All values that are not equal to given value."""
  displayName_not: String

  """All values that are contained in given list."""
  displayName_in: [String!]

  """All values that are not contained in given list."""
  displayName_not_in: [String!]

  """All values less than the given value."""
  displayName_lt: String

  """All values less than or equal the given value."""
  displayName_lte: String

  """All values greater than the given value."""
  displayName_gt: String

  """All values greater than or equal the given value."""
  displayName_gte: String

  """All values containing the given string."""
  displayName_contains: String

  """All values not containing the given string."""
  displayName_not_contains: String

  """All values starting with the given string."""
  displayName_starts_with: String

  """All values not starting with the given string."""
  displayName_not_starts_with: String

  """All values ending with the given string."""
  displayName_ends_with: String

  """All values not ending with the given string."""
  displayName_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
}

input UserWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type SystemUserLoginOrderByInput =   'id_ASC' |
  'id_DESC' |
  'environmentVariable_ASC' |
  'environmentVariable_DESC' |
  'systemUsername_ASC' |
  'systemUsername_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'displayName_ASC' |
  'displayName_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export interface SystemUserLoginCreateInput {
  environmentVariable: String
  systemUsername: String
  user: UserCreateOneInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
}

export interface SystemUserLoginWhereInput {
  AND?: SystemUserLoginWhereInput[] | SystemUserLoginWhereInput
  OR?: SystemUserLoginWhereInput[] | SystemUserLoginWhereInput
  NOT?: SystemUserLoginWhereInput[] | SystemUserLoginWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  environmentVariable?: String
  environmentVariable_not?: String
  environmentVariable_in?: String[] | String
  environmentVariable_not_in?: String[] | String
  environmentVariable_lt?: String
  environmentVariable_lte?: String
  environmentVariable_gt?: String
  environmentVariable_gte?: String
  environmentVariable_contains?: String
  environmentVariable_not_contains?: String
  environmentVariable_starts_with?: String
  environmentVariable_not_starts_with?: String
  environmentVariable_ends_with?: String
  environmentVariable_not_ends_with?: String
  systemUsername?: String
  systemUsername_not?: String
  systemUsername_in?: String[] | String
  systemUsername_not_in?: String[] | String
  systemUsername_lt?: String
  systemUsername_lte?: String
  systemUsername_gt?: String
  systemUsername_gte?: String
  systemUsername_contains?: String
  systemUsername_not_contains?: String
  systemUsername_starts_with?: String
  systemUsername_not_starts_with?: String
  systemUsername_ends_with?: String
  systemUsername_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  user?: UserWhereInput
}

export interface UserUpdateDataInput {
  displayName?: String
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  displayName?: String
  displayName_not?: String
  displayName_in?: String[] | String
  displayName_not_in?: String[] | String
  displayName_lt?: String
  displayName_lte?: String
  displayName_gt?: String
  displayName_gte?: String
  displayName_contains?: String
  displayName_not_contains?: String
  displayName_starts_with?: String
  displayName_not_starts_with?: String
  displayName_ends_with?: String
  displayName_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
}

export interface UserUpdateInput {
  displayName?: String
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateInput {
  displayName: String
}

export interface SystemUserLoginUpdateInput {
  environmentVariable?: String
  systemUsername?: String
  user?: UserUpdateOneRequiredInput
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface SystemUserLoginSubscriptionWhereInput {
  AND?: SystemUserLoginSubscriptionWhereInput[] | SystemUserLoginSubscriptionWhereInput
  OR?: SystemUserLoginSubscriptionWhereInput[] | SystemUserLoginSubscriptionWhereInput
  NOT?: SystemUserLoginSubscriptionWhereInput[] | SystemUserLoginSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: SystemUserLoginWhereInput
}

export interface SystemUserLoginWhereUniqueInput {
  id?: ID_Input
  environmentVariable?: String
  systemUsername?: String
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface SystemUserLogin extends Node {
  id: ID_Output
  user: User
  environmentVariable: String
  systemUsername: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface UserPreviousValues {
  id: ID_Output
  displayName: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface BatchPayload {
  count: Long
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface SystemUserLoginSubscriptionPayload {
  mutation: MutationType
  node?: SystemUserLogin
  updatedFields?: String[]
  previousValues?: SystemUserLoginPreviousValues
}

export interface SystemUserLoginPreviousValues {
  id: ID_Output
  environmentVariable: String
  systemUsername: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface AggregateSystemUserLogin {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface User extends Node {
  id: ID_Output
  displayName: String
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface SystemUserLoginConnection {
  pageInfo: PageInfo
  edges: SystemUserLoginEdge[]
  aggregate: AggregateSystemUserLogin
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

/*
 * An edge in a connection.

 */
export interface SystemUserLoginEdge {
  node: SystemUserLogin
  cursor: String
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

export type DateTime = Date | string