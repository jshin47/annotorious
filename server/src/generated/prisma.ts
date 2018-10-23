import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    systemUserLogins: <T = SystemUserLogin[]>(args: { where?: SystemUserLoginWhereInput, orderBy?: SystemUserLoginOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    localLogins: <T = LocalLogin[]>(args: { where?: LocalLoginWhereInput, orderBy?: LocalLoginOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    systemUserLogin: <T = SystemUserLogin | null>(args: { where: SystemUserLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    localLogin: <T = LocalLogin | null>(args: { where: LocalLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    systemUserLoginsConnection: <T = SystemUserLoginConnection>(args: { where?: SystemUserLoginWhereInput, orderBy?: SystemUserLoginOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    localLoginsConnection: <T = LocalLoginConnection>(args: { where?: LocalLoginWhereInput, orderBy?: LocalLoginOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSystemUserLogin: <T = SystemUserLogin>(args: { data: SystemUserLoginCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLocalLogin: <T = LocalLogin>(args: { data: LocalLoginCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSystemUserLogin: <T = SystemUserLogin | null>(args: { data: SystemUserLoginUpdateInput, where: SystemUserLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLocalLogin: <T = LocalLogin | null>(args: { data: LocalLoginUpdateInput, where: LocalLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSystemUserLogin: <T = SystemUserLogin | null>(args: { where: SystemUserLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLocalLogin: <T = LocalLogin | null>(args: { where: LocalLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSystemUserLogin: <T = SystemUserLogin>(args: { where: SystemUserLoginWhereUniqueInput, create: SystemUserLoginCreateInput, update: SystemUserLoginUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLocalLogin: <T = LocalLogin>(args: { where: LocalLoginWhereUniqueInput, create: LocalLoginCreateInput, update: LocalLoginUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySystemUserLogins: <T = BatchPayload>(args: { data: SystemUserLoginUpdateInput, where?: SystemUserLoginWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLocalLogins: <T = BatchPayload>(args: { data: LocalLoginUpdateInput, where?: LocalLoginWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySystemUserLogins: <T = BatchPayload>(args: { where?: SystemUserLoginWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLocalLogins: <T = BatchPayload>(args: { where?: LocalLoginWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    systemUserLogin: <T = SystemUserLoginSubscriptionPayload | null>(args: { where?: SystemUserLoginSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    localLogin: <T = LocalLoginSubscriptionPayload | null>(args: { where?: LocalLoginSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  SystemUserLogin: (where?: SystemUserLoginWhereInput) => Promise<boolean>
  LocalLogin: (where?: LocalLoginWhereInput) => Promise<boolean>
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

const typeDefs = `type AggregateLocalLogin {
  count: Int!
}

type AggregateSystemUserLogin {
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

type LocalLogin implements Node {
  id: ID!
  user: User!
  username: String!
  hashword: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type LocalLoginConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LocalLoginEdge]!
  aggregate: AggregateLocalLogin!
}

input LocalLoginCreateInput {
  username: String!
  hashword: String!
  user: UserCreateOneWithoutLocalLoginInput!
}

input LocalLoginCreateOneWithoutUserInput {
  create: LocalLoginCreateWithoutUserInput
  connect: LocalLoginWhereUniqueInput
}

input LocalLoginCreateWithoutUserInput {
  username: String!
  hashword: String!
}

"""An edge in a connection."""
type LocalLoginEdge {
  """The item at the end of the edge."""
  node: LocalLogin!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LocalLoginOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  hashword_ASC
  hashword_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LocalLoginPreviousValues {
  id: ID!
  username: String!
  hashword: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type LocalLoginSubscriptionPayload {
  mutation: MutationType!
  node: LocalLogin
  updatedFields: [String!]
  previousValues: LocalLoginPreviousValues
}

input LocalLoginSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LocalLoginSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LocalLoginSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LocalLoginSubscriptionWhereInput!]

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
  node: LocalLoginWhereInput
}

input LocalLoginUpdateInput {
  username: String
  hashword: String
  user: UserUpdateOneRequiredWithoutLocalLoginInput
}

input LocalLoginUpdateOneWithoutUserInput {
  create: LocalLoginCreateWithoutUserInput
  connect: LocalLoginWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: LocalLoginUpdateWithoutUserDataInput
  upsert: LocalLoginUpsertWithoutUserInput
}

input LocalLoginUpdateWithoutUserDataInput {
  username: String
  hashword: String
}

input LocalLoginUpsertWithoutUserInput {
  update: LocalLoginUpdateWithoutUserDataInput!
  create: LocalLoginCreateWithoutUserInput!
}

input LocalLoginWhereInput {
  """Logical AND on all given filters."""
  AND: [LocalLoginWhereInput!]

  """Logical OR on all given filters."""
  OR: [LocalLoginWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LocalLoginWhereInput!]
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
  username: String

  """All values that are not equal to given value."""
  username_not: String

  """All values that are contained in given list."""
  username_in: [String!]

  """All values that are not contained in given list."""
  username_not_in: [String!]

  """All values less than the given value."""
  username_lt: String

  """All values less than or equal the given value."""
  username_lte: String

  """All values greater than the given value."""
  username_gt: String

  """All values greater than or equal the given value."""
  username_gte: String

  """All values containing the given string."""
  username_contains: String

  """All values not containing the given string."""
  username_not_contains: String

  """All values starting with the given string."""
  username_starts_with: String

  """All values not starting with the given string."""
  username_not_starts_with: String

  """All values ending with the given string."""
  username_ends_with: String

  """All values not ending with the given string."""
  username_not_ends_with: String
  hashword: String

  """All values that are not equal to given value."""
  hashword_not: String

  """All values that are contained in given list."""
  hashword_in: [String!]

  """All values that are not contained in given list."""
  hashword_not_in: [String!]

  """All values less than the given value."""
  hashword_lt: String

  """All values less than or equal the given value."""
  hashword_lte: String

  """All values greater than the given value."""
  hashword_gt: String

  """All values greater than or equal the given value."""
  hashword_gte: String

  """All values containing the given string."""
  hashword_contains: String

  """All values not containing the given string."""
  hashword_not_contains: String

  """All values starting with the given string."""
  hashword_starts_with: String

  """All values not starting with the given string."""
  hashword_not_starts_with: String

  """All values ending with the given string."""
  hashword_ends_with: String

  """All values not ending with the given string."""
  hashword_not_ends_with: String
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

input LocalLoginWhereUniqueInput {
  id: ID
  username: String
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createSystemUserLogin(data: SystemUserLoginCreateInput!): SystemUserLogin!
  createLocalLogin(data: LocalLoginCreateInput!): LocalLogin!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateSystemUserLogin(data: SystemUserLoginUpdateInput!, where: SystemUserLoginWhereUniqueInput!): SystemUserLogin
  updateLocalLogin(data: LocalLoginUpdateInput!, where: LocalLoginWhereUniqueInput!): LocalLogin
  deleteUser(where: UserWhereUniqueInput!): User
  deleteSystemUserLogin(where: SystemUserLoginWhereUniqueInput!): SystemUserLogin
  deleteLocalLogin(where: LocalLoginWhereUniqueInput!): LocalLogin
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertSystemUserLogin(where: SystemUserLoginWhereUniqueInput!, create: SystemUserLoginCreateInput!, update: SystemUserLoginUpdateInput!): SystemUserLogin!
  upsertLocalLogin(where: LocalLoginWhereUniqueInput!, create: LocalLoginCreateInput!, update: LocalLoginUpdateInput!): LocalLogin!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManySystemUserLogins(data: SystemUserLoginUpdateInput!, where: SystemUserLoginWhereInput): BatchPayload!
  updateManyLocalLogins(data: LocalLoginUpdateInput!, where: LocalLoginWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManySystemUserLogins(where: SystemUserLoginWhereInput): BatchPayload!
  deleteManyLocalLogins(where: LocalLoginWhereInput): BatchPayload!
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
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  systemUserLogins(where: SystemUserLoginWhereInput, orderBy: SystemUserLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SystemUserLogin]!
  localLogins(where: LocalLoginWhereInput, orderBy: LocalLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LocalLogin]!
  user(where: UserWhereUniqueInput!): User
  systemUserLogin(where: SystemUserLoginWhereUniqueInput!): SystemUserLogin
  localLogin(where: LocalLoginWhereUniqueInput!): LocalLogin
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  systemUserLoginsConnection(where: SystemUserLoginWhereInput, orderBy: SystemUserLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SystemUserLoginConnection!
  localLoginsConnection(where: LocalLoginWhereInput, orderBy: LocalLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocalLoginConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  systemUserLogin(where: SystemUserLoginSubscriptionWhereInput): SystemUserLoginSubscriptionPayload
  localLogin(where: LocalLoginSubscriptionWhereInput): LocalLoginSubscriptionPayload
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
  user: UserCreateOneWithoutSystemUserLoginInput!
}

input SystemUserLoginCreateOneWithoutUserInput {
  create: SystemUserLoginCreateWithoutUserInput
  connect: SystemUserLoginWhereUniqueInput
}

input SystemUserLoginCreateWithoutUserInput {
  environmentVariable: String!
  systemUsername: String!
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
  user: UserUpdateOneRequiredWithoutSystemUserLoginInput
}

input SystemUserLoginUpdateOneWithoutUserInput {
  create: SystemUserLoginCreateWithoutUserInput
  connect: SystemUserLoginWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: SystemUserLoginUpdateWithoutUserDataInput
  upsert: SystemUserLoginUpsertWithoutUserInput
}

input SystemUserLoginUpdateWithoutUserDataInput {
  environmentVariable: String
  systemUsername: String
}

input SystemUserLoginUpsertWithoutUserInput {
  update: SystemUserLoginUpdateWithoutUserDataInput!
  create: SystemUserLoginCreateWithoutUserInput!
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
  systemUserLogin: SystemUserLogin
  localLogin: LocalLogin
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
  systemUserLogin: SystemUserLoginCreateOneWithoutUserInput
  localLogin: LocalLoginCreateOneWithoutUserInput
}

input UserCreateOneWithoutLocalLoginInput {
  create: UserCreateWithoutLocalLoginInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutSystemUserLoginInput {
  create: UserCreateWithoutSystemUserLoginInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutLocalLoginInput {
  displayName: String!
  systemUserLogin: SystemUserLoginCreateOneWithoutUserInput
}

input UserCreateWithoutSystemUserLoginInput {
  displayName: String!
  localLogin: LocalLoginCreateOneWithoutUserInput
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

input UserUpdateInput {
  displayName: String
  systemUserLogin: SystemUserLoginUpdateOneWithoutUserInput
  localLogin: LocalLoginUpdateOneWithoutUserInput
}

input UserUpdateOneRequiredWithoutLocalLoginInput {
  create: UserCreateWithoutLocalLoginInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutLocalLoginDataInput
  upsert: UserUpsertWithoutLocalLoginInput
}

input UserUpdateOneRequiredWithoutSystemUserLoginInput {
  create: UserCreateWithoutSystemUserLoginInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutSystemUserLoginDataInput
  upsert: UserUpsertWithoutSystemUserLoginInput
}

input UserUpdateWithoutLocalLoginDataInput {
  displayName: String
  systemUserLogin: SystemUserLoginUpdateOneWithoutUserInput
}

input UserUpdateWithoutSystemUserLoginDataInput {
  displayName: String
  localLogin: LocalLoginUpdateOneWithoutUserInput
}

input UserUpsertWithoutLocalLoginInput {
  update: UserUpdateWithoutLocalLoginDataInput!
  create: UserCreateWithoutLocalLoginInput!
}

input UserUpsertWithoutSystemUserLoginInput {
  update: UserUpdateWithoutSystemUserLoginDataInput!
  create: UserCreateWithoutSystemUserLoginInput!
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
  systemUserLogin: SystemUserLoginWhereInput
  localLogin: LocalLoginWhereInput
}

input UserWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'displayName_ASC' |
  'displayName_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

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

export type LocalLoginOrderByInput =   'id_ASC' |
  'id_DESC' |
  'username_ASC' |
  'username_DESC' |
  'hashword_ASC' |
  'hashword_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface SystemUserLoginCreateInput {
  environmentVariable: String
  systemUsername: String
  user: UserCreateOneWithoutSystemUserLoginInput
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
  systemUserLogin?: SystemUserLoginWhereInput
  localLogin?: LocalLoginWhereInput
}

export interface LocalLoginCreateInput {
  username: String
  hashword: String
  user: UserCreateOneWithoutLocalLoginInput
}

export interface LocalLoginWhereInput {
  AND?: LocalLoginWhereInput[] | LocalLoginWhereInput
  OR?: LocalLoginWhereInput[] | LocalLoginWhereInput
  NOT?: LocalLoginWhereInput[] | LocalLoginWhereInput
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
  username?: String
  username_not?: String
  username_in?: String[] | String
  username_not_in?: String[] | String
  username_lt?: String
  username_lte?: String
  username_gt?: String
  username_gte?: String
  username_contains?: String
  username_not_contains?: String
  username_starts_with?: String
  username_not_starts_with?: String
  username_ends_with?: String
  username_not_ends_with?: String
  hashword?: String
  hashword_not?: String
  hashword_in?: String[] | String
  hashword_not_in?: String[] | String
  hashword_lt?: String
  hashword_lte?: String
  hashword_gt?: String
  hashword_gte?: String
  hashword_contains?: String
  hashword_not_contains?: String
  hashword_starts_with?: String
  hashword_not_starts_with?: String
  hashword_ends_with?: String
  hashword_not_ends_with?: String
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

export interface LocalLoginUpsertWithoutUserInput {
  update: LocalLoginUpdateWithoutUserDataInput
  create: LocalLoginCreateWithoutUserInput
}

export interface SystemUserLoginUpdateOneWithoutUserInput {
  create?: SystemUserLoginCreateWithoutUserInput
  connect?: SystemUserLoginWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: SystemUserLoginUpdateWithoutUserDataInput
  upsert?: SystemUserLoginUpsertWithoutUserInput
}

export interface LocalLoginUpdateWithoutUserDataInput {
  username?: String
  hashword?: String
}

export interface UserCreateOneWithoutLocalLoginInput {
  create?: UserCreateWithoutLocalLoginInput
  connect?: UserWhereUniqueInput
}

export interface LocalLoginUpdateOneWithoutUserInput {
  create?: LocalLoginCreateWithoutUserInput
  connect?: LocalLoginWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: LocalLoginUpdateWithoutUserDataInput
  upsert?: LocalLoginUpsertWithoutUserInput
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

export interface UserCreateInput {
  displayName: String
  systemUserLogin?: SystemUserLoginCreateOneWithoutUserInput
  localLogin?: LocalLoginCreateOneWithoutUserInput
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

export interface SystemUserLoginCreateOneWithoutUserInput {
  create?: SystemUserLoginCreateWithoutUserInput
  connect?: SystemUserLoginWhereUniqueInput
}

export interface SystemUserLoginWhereUniqueInput {
  id?: ID_Input
  environmentVariable?: String
  systemUsername?: String
}

export interface SystemUserLoginCreateWithoutUserInput {
  environmentVariable: String
  systemUsername: String
}

export interface UserUpsertWithoutLocalLoginInput {
  update: UserUpdateWithoutLocalLoginDataInput
  create: UserCreateWithoutLocalLoginInput
}

export interface LocalLoginCreateOneWithoutUserInput {
  create?: LocalLoginCreateWithoutUserInput
  connect?: LocalLoginWhereUniqueInput
}

export interface UserUpdateOneRequiredWithoutLocalLoginInput {
  create?: UserCreateWithoutLocalLoginInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutLocalLoginDataInput
  upsert?: UserUpsertWithoutLocalLoginInput
}

export interface LocalLoginCreateWithoutUserInput {
  username: String
  hashword: String
}

export interface UserUpsertWithoutSystemUserLoginInput {
  update: UserUpdateWithoutSystemUserLoginDataInput
  create: UserCreateWithoutSystemUserLoginInput
}

export interface SystemUserLoginUpsertWithoutUserInput {
  update: SystemUserLoginUpdateWithoutUserDataInput
  create: SystemUserLoginCreateWithoutUserInput
}

export interface UserUpdateOneRequiredWithoutSystemUserLoginInput {
  create?: UserCreateWithoutSystemUserLoginInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutSystemUserLoginDataInput
  upsert?: UserUpsertWithoutSystemUserLoginInput
}

export interface UserCreateOneWithoutSystemUserLoginInput {
  create?: UserCreateWithoutSystemUserLoginInput
  connect?: UserWhereUniqueInput
}

export interface LocalLoginSubscriptionWhereInput {
  AND?: LocalLoginSubscriptionWhereInput[] | LocalLoginSubscriptionWhereInput
  OR?: LocalLoginSubscriptionWhereInput[] | LocalLoginSubscriptionWhereInput
  NOT?: LocalLoginSubscriptionWhereInput[] | LocalLoginSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LocalLoginWhereInput
}

export interface UserCreateWithoutSystemUserLoginInput {
  displayName: String
  localLogin?: LocalLoginCreateOneWithoutUserInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateWithoutLocalLoginDataInput {
  displayName?: String
  systemUserLogin?: SystemUserLoginUpdateOneWithoutUserInput
}

export interface UserUpdateInput {
  displayName?: String
  systemUserLogin?: SystemUserLoginUpdateOneWithoutUserInput
  localLogin?: LocalLoginUpdateOneWithoutUserInput
}

export interface UserCreateWithoutLocalLoginInput {
  displayName: String
  systemUserLogin?: SystemUserLoginCreateOneWithoutUserInput
}

export interface SystemUserLoginUpdateWithoutUserDataInput {
  environmentVariable?: String
  systemUsername?: String
}

export interface LocalLoginUpdateInput {
  username?: String
  hashword?: String
  user?: UserUpdateOneRequiredWithoutLocalLoginInput
}

export interface LocalLoginWhereUniqueInput {
  id?: ID_Input
  username?: String
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

export interface SystemUserLoginUpdateInput {
  environmentVariable?: String
  systemUsername?: String
  user?: UserUpdateOneRequiredWithoutSystemUserLoginInput
}

export interface UserUpdateWithoutSystemUserLoginDataInput {
  displayName?: String
  localLogin?: LocalLoginUpdateOneWithoutUserInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface LocalLoginPreviousValues {
  id: ID_Output
  username: String
  hashword: String
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface User extends Node {
  id: ID_Output
  displayName: String
  createdAt: DateTime
  updatedAt: DateTime
  systemUserLogin?: SystemUserLogin
  localLogin?: LocalLogin
}

export interface BatchPayload {
  count: Long
}

export interface AggregateLocalLogin {
  count: Int
}

export interface SystemUserLogin extends Node {
  id: ID_Output
  user: User
  environmentVariable: String
  systemUsername: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface LocalLogin extends Node {
  id: ID_Output
  user: User
  username: String
  hashword: String
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * An edge in a connection.

 */
export interface LocalLoginEdge {
  node: LocalLogin
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface LocalLoginConnection {
  pageInfo: PageInfo
  edges: LocalLoginEdge[]
  aggregate: AggregateLocalLogin
}

export interface AggregateSystemUserLogin {
  count: Int
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
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  displayName: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
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

export interface LocalLoginSubscriptionPayload {
  mutation: MutationType
  node?: LocalLogin
  updatedFields?: String[]
  previousValues?: LocalLoginPreviousValues
}

export interface AggregateUser {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface SystemUserLoginEdge {
  node: SystemUserLogin
  cursor: String
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
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

export type DateTime = Date | string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string