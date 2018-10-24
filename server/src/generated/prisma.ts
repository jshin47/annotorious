import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    systemLogins: <T = SystemLogin[]>(args: { where?: SystemLoginWhereInput, orderBy?: SystemLoginOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    localLogins: <T = LocalLogin[]>(args: { where?: LocalLoginWhereInput, orderBy?: LocalLoginOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    systemLogin: <T = SystemLogin | null>(args: { where: SystemLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    localLogin: <T = LocalLogin | null>(args: { where: LocalLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    systemLoginsConnection: <T = SystemLoginConnection>(args: { where?: SystemLoginWhereInput, orderBy?: SystemLoginOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    localLoginsConnection: <T = LocalLoginConnection>(args: { where?: LocalLoginWhereInput, orderBy?: LocalLoginOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSystemLogin: <T = SystemLogin>(args: { data: SystemLoginCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLocalLogin: <T = LocalLogin>(args: { data: LocalLoginCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSystemLogin: <T = SystemLogin | null>(args: { data: SystemLoginUpdateInput, where: SystemLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLocalLogin: <T = LocalLogin | null>(args: { data: LocalLoginUpdateInput, where: LocalLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSystemLogin: <T = SystemLogin | null>(args: { where: SystemLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLocalLogin: <T = LocalLogin | null>(args: { where: LocalLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSystemLogin: <T = SystemLogin>(args: { where: SystemLoginWhereUniqueInput, create: SystemLoginCreateInput, update: SystemLoginUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLocalLogin: <T = LocalLogin>(args: { where: LocalLoginWhereUniqueInput, create: LocalLoginCreateInput, update: LocalLoginUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySystemLogins: <T = BatchPayload>(args: { data: SystemLoginUpdateInput, where?: SystemLoginWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLocalLogins: <T = BatchPayload>(args: { data: LocalLoginUpdateInput, where?: LocalLoginWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySystemLogins: <T = BatchPayload>(args: { where?: SystemLoginWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLocalLogins: <T = BatchPayload>(args: { where?: LocalLoginWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    systemLogin: <T = SystemLoginSubscriptionPayload | null>(args: { where?: SystemLoginSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    localLogin: <T = LocalLoginSubscriptionPayload | null>(args: { where?: LocalLoginSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  SystemLogin: (where?: SystemLoginWhereInput) => Promise<boolean>
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

type AggregateSystemLogin {
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
  createSystemLogin(data: SystemLoginCreateInput!): SystemLogin!
  createLocalLogin(data: LocalLoginCreateInput!): LocalLogin!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateSystemLogin(data: SystemLoginUpdateInput!, where: SystemLoginWhereUniqueInput!): SystemLogin
  updateLocalLogin(data: LocalLoginUpdateInput!, where: LocalLoginWhereUniqueInput!): LocalLogin
  deleteUser(where: UserWhereUniqueInput!): User
  deleteSystemLogin(where: SystemLoginWhereUniqueInput!): SystemLogin
  deleteLocalLogin(where: LocalLoginWhereUniqueInput!): LocalLogin
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertSystemLogin(where: SystemLoginWhereUniqueInput!, create: SystemLoginCreateInput!, update: SystemLoginUpdateInput!): SystemLogin!
  upsertLocalLogin(where: LocalLoginWhereUniqueInput!, create: LocalLoginCreateInput!, update: LocalLoginUpdateInput!): LocalLogin!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManySystemLogins(data: SystemLoginUpdateInput!, where: SystemLoginWhereInput): BatchPayload!
  updateManyLocalLogins(data: LocalLoginUpdateInput!, where: LocalLoginWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManySystemLogins(where: SystemLoginWhereInput): BatchPayload!
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
  systemLogins(where: SystemLoginWhereInput, orderBy: SystemLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SystemLogin]!
  localLogins(where: LocalLoginWhereInput, orderBy: LocalLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LocalLogin]!
  user(where: UserWhereUniqueInput!): User
  systemLogin(where: SystemLoginWhereUniqueInput!): SystemLogin
  localLogin(where: LocalLoginWhereUniqueInput!): LocalLogin
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  systemLoginsConnection(where: SystemLoginWhereInput, orderBy: SystemLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SystemLoginConnection!
  localLoginsConnection(where: LocalLoginWhereInput, orderBy: LocalLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocalLoginConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  systemLogin(where: SystemLoginSubscriptionWhereInput): SystemLoginSubscriptionPayload
  localLogin(where: LocalLoginSubscriptionWhereInput): LocalLoginSubscriptionPayload
}

type SystemLogin implements Node {
  id: ID!
  user: User!
  username: String!
  passwordEnvironmentVariable: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type SystemLoginConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SystemLoginEdge]!
  aggregate: AggregateSystemLogin!
}

input SystemLoginCreateInput {
  username: String!
  passwordEnvironmentVariable: String!
  user: UserCreateOneWithoutSystemLoginInput!
}

input SystemLoginCreateOneWithoutUserInput {
  create: SystemLoginCreateWithoutUserInput
  connect: SystemLoginWhereUniqueInput
}

input SystemLoginCreateWithoutUserInput {
  username: String!
  passwordEnvironmentVariable: String!
}

"""An edge in a connection."""
type SystemLoginEdge {
  """The item at the end of the edge."""
  node: SystemLogin!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SystemLoginOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  passwordEnvironmentVariable_ASC
  passwordEnvironmentVariable_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SystemLoginPreviousValues {
  id: ID!
  username: String!
  passwordEnvironmentVariable: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type SystemLoginSubscriptionPayload {
  mutation: MutationType!
  node: SystemLogin
  updatedFields: [String!]
  previousValues: SystemLoginPreviousValues
}

input SystemLoginSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SystemLoginSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SystemLoginSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SystemLoginSubscriptionWhereInput!]

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
  node: SystemLoginWhereInput
}

input SystemLoginUpdateInput {
  username: String
  passwordEnvironmentVariable: String
  user: UserUpdateOneRequiredWithoutSystemLoginInput
}

input SystemLoginUpdateOneWithoutUserInput {
  create: SystemLoginCreateWithoutUserInput
  connect: SystemLoginWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: SystemLoginUpdateWithoutUserDataInput
  upsert: SystemLoginUpsertWithoutUserInput
}

input SystemLoginUpdateWithoutUserDataInput {
  username: String
  passwordEnvironmentVariable: String
}

input SystemLoginUpsertWithoutUserInput {
  update: SystemLoginUpdateWithoutUserDataInput!
  create: SystemLoginCreateWithoutUserInput!
}

input SystemLoginWhereInput {
  """Logical AND on all given filters."""
  AND: [SystemLoginWhereInput!]

  """Logical OR on all given filters."""
  OR: [SystemLoginWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SystemLoginWhereInput!]
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
  passwordEnvironmentVariable: String

  """All values that are not equal to given value."""
  passwordEnvironmentVariable_not: String

  """All values that are contained in given list."""
  passwordEnvironmentVariable_in: [String!]

  """All values that are not contained in given list."""
  passwordEnvironmentVariable_not_in: [String!]

  """All values less than the given value."""
  passwordEnvironmentVariable_lt: String

  """All values less than or equal the given value."""
  passwordEnvironmentVariable_lte: String

  """All values greater than the given value."""
  passwordEnvironmentVariable_gt: String

  """All values greater than or equal the given value."""
  passwordEnvironmentVariable_gte: String

  """All values containing the given string."""
  passwordEnvironmentVariable_contains: String

  """All values not containing the given string."""
  passwordEnvironmentVariable_not_contains: String

  """All values starting with the given string."""
  passwordEnvironmentVariable_starts_with: String

  """All values not starting with the given string."""
  passwordEnvironmentVariable_not_starts_with: String

  """All values ending with the given string."""
  passwordEnvironmentVariable_ends_with: String

  """All values not ending with the given string."""
  passwordEnvironmentVariable_not_ends_with: String
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

input SystemLoginWhereUniqueInput {
  id: ID
  username: String
  passwordEnvironmentVariable: String
}

type User implements Node {
  id: ID!
  displayName: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  systemLogin: SystemLogin
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
  systemLogin: SystemLoginCreateOneWithoutUserInput
  localLogin: LocalLoginCreateOneWithoutUserInput
}

input UserCreateOneWithoutLocalLoginInput {
  create: UserCreateWithoutLocalLoginInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutSystemLoginInput {
  create: UserCreateWithoutSystemLoginInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutLocalLoginInput {
  displayName: String!
  systemLogin: SystemLoginCreateOneWithoutUserInput
}

input UserCreateWithoutSystemLoginInput {
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
  systemLogin: SystemLoginUpdateOneWithoutUserInput
  localLogin: LocalLoginUpdateOneWithoutUserInput
}

input UserUpdateOneRequiredWithoutLocalLoginInput {
  create: UserCreateWithoutLocalLoginInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutLocalLoginDataInput
  upsert: UserUpsertWithoutLocalLoginInput
}

input UserUpdateOneRequiredWithoutSystemLoginInput {
  create: UserCreateWithoutSystemLoginInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutSystemLoginDataInput
  upsert: UserUpsertWithoutSystemLoginInput
}

input UserUpdateWithoutLocalLoginDataInput {
  displayName: String
  systemLogin: SystemLoginUpdateOneWithoutUserInput
}

input UserUpdateWithoutSystemLoginDataInput {
  displayName: String
  localLogin: LocalLoginUpdateOneWithoutUserInput
}

input UserUpsertWithoutLocalLoginInput {
  update: UserUpdateWithoutLocalLoginDataInput!
  create: UserCreateWithoutLocalLoginInput!
}

input UserUpsertWithoutSystemLoginInput {
  update: UserUpdateWithoutSystemLoginDataInput!
  create: UserCreateWithoutSystemLoginInput!
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
  systemLogin: SystemLoginWhereInput
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

export type SystemLoginOrderByInput =   'id_ASC' |
  'id_DESC' |
  'username_ASC' |
  'username_DESC' |
  'passwordEnvironmentVariable_ASC' |
  'passwordEnvironmentVariable_DESC' |
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

export interface SystemLoginCreateInput {
  username: String
  passwordEnvironmentVariable: String
  user: UserCreateOneWithoutSystemLoginInput
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
  systemLogin?: SystemLoginWhereInput
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

export interface SystemLoginUpdateOneWithoutUserInput {
  create?: SystemLoginCreateWithoutUserInput
  connect?: SystemLoginWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: SystemLoginUpdateWithoutUserDataInput
  upsert?: SystemLoginUpsertWithoutUserInput
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

export interface SystemLoginSubscriptionWhereInput {
  AND?: SystemLoginSubscriptionWhereInput[] | SystemLoginSubscriptionWhereInput
  OR?: SystemLoginSubscriptionWhereInput[] | SystemLoginSubscriptionWhereInput
  NOT?: SystemLoginSubscriptionWhereInput[] | SystemLoginSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: SystemLoginWhereInput
}

export interface UserCreateInput {
  displayName: String
  systemLogin?: SystemLoginCreateOneWithoutUserInput
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

export interface SystemLoginCreateOneWithoutUserInput {
  create?: SystemLoginCreateWithoutUserInput
  connect?: SystemLoginWhereUniqueInput
}

export interface SystemLoginWhereUniqueInput {
  id?: ID_Input
  username?: String
  passwordEnvironmentVariable?: String
}

export interface SystemLoginCreateWithoutUserInput {
  username: String
  passwordEnvironmentVariable: String
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

export interface UserUpsertWithoutSystemLoginInput {
  update: UserUpdateWithoutSystemLoginDataInput
  create: UserCreateWithoutSystemLoginInput
}

export interface SystemLoginUpsertWithoutUserInput {
  update: SystemLoginUpdateWithoutUserDataInput
  create: SystemLoginCreateWithoutUserInput
}

export interface UserUpdateOneRequiredWithoutSystemLoginInput {
  create?: UserCreateWithoutSystemLoginInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutSystemLoginDataInput
  upsert?: UserUpsertWithoutSystemLoginInput
}

export interface UserCreateOneWithoutSystemLoginInput {
  create?: UserCreateWithoutSystemLoginInput
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

export interface UserCreateWithoutSystemLoginInput {
  displayName: String
  localLogin?: LocalLoginCreateOneWithoutUserInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateWithoutLocalLoginDataInput {
  displayName?: String
  systemLogin?: SystemLoginUpdateOneWithoutUserInput
}

export interface UserUpdateInput {
  displayName?: String
  systemLogin?: SystemLoginUpdateOneWithoutUserInput
  localLogin?: LocalLoginUpdateOneWithoutUserInput
}

export interface UserCreateWithoutLocalLoginInput {
  displayName: String
  systemLogin?: SystemLoginCreateOneWithoutUserInput
}

export interface SystemLoginUpdateWithoutUserDataInput {
  username?: String
  passwordEnvironmentVariable?: String
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

export interface SystemLoginWhereInput {
  AND?: SystemLoginWhereInput[] | SystemLoginWhereInput
  OR?: SystemLoginWhereInput[] | SystemLoginWhereInput
  NOT?: SystemLoginWhereInput[] | SystemLoginWhereInput
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
  passwordEnvironmentVariable?: String
  passwordEnvironmentVariable_not?: String
  passwordEnvironmentVariable_in?: String[] | String
  passwordEnvironmentVariable_not_in?: String[] | String
  passwordEnvironmentVariable_lt?: String
  passwordEnvironmentVariable_lte?: String
  passwordEnvironmentVariable_gt?: String
  passwordEnvironmentVariable_gte?: String
  passwordEnvironmentVariable_contains?: String
  passwordEnvironmentVariable_not_contains?: String
  passwordEnvironmentVariable_starts_with?: String
  passwordEnvironmentVariable_not_starts_with?: String
  passwordEnvironmentVariable_ends_with?: String
  passwordEnvironmentVariable_not_ends_with?: String
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

export interface SystemLoginUpdateInput {
  username?: String
  passwordEnvironmentVariable?: String
  user?: UserUpdateOneRequiredWithoutSystemLoginInput
}

export interface UserUpdateWithoutSystemLoginDataInput {
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
  systemLogin?: SystemLogin
  localLogin?: LocalLogin
}

export interface BatchPayload {
  count: Long
}

export interface AggregateLocalLogin {
  count: Int
}

export interface SystemLogin extends Node {
  id: ID_Output
  user: User
  username: String
  passwordEnvironmentVariable: String
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

export interface AggregateSystemLogin {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface SystemLoginConnection {
  pageInfo: PageInfo
  edges: SystemLoginEdge[]
  aggregate: AggregateSystemLogin
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

export interface SystemLoginSubscriptionPayload {
  mutation: MutationType
  node?: SystemLogin
  updatedFields?: String[]
  previousValues?: SystemLoginPreviousValues
}

export interface SystemLoginPreviousValues {
  id: ID_Output
  username: String
  passwordEnvironmentVariable: String
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
export interface SystemLoginEdge {
  node: SystemLogin
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