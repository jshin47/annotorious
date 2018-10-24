export const typeDefs = /* GraphQL */ `type AggregateLocalLogin {
  count: Int!
}

type AggregateSystemLogin {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type LocalLogin {
  id: ID!
  user: User!
  username: String!
  hashword: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type LocalLoginConnection {
  pageInfo: PageInfo!
  edges: [LocalLoginEdge]!
  aggregate: AggregateLocalLogin!
}

input LocalLoginCreateInput {
  user: UserCreateOneWithoutLocalLoginInput!
  username: String!
  hashword: String!
}

input LocalLoginCreateOneWithoutUserInput {
  create: LocalLoginCreateWithoutUserInput
  connect: LocalLoginWhereUniqueInput
}

input LocalLoginCreateWithoutUserInput {
  username: String!
  hashword: String!
}

type LocalLoginEdge {
  node: LocalLogin!
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
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LocalLoginWhereInput
  AND: [LocalLoginSubscriptionWhereInput!]
  OR: [LocalLoginSubscriptionWhereInput!]
  NOT: [LocalLoginSubscriptionWhereInput!]
}

input LocalLoginUpdateInput {
  user: UserUpdateOneRequiredWithoutLocalLoginInput
  username: String
  hashword: String
}

input LocalLoginUpdateOneWithoutUserInput {
  create: LocalLoginCreateWithoutUserInput
  update: LocalLoginUpdateWithoutUserDataInput
  upsert: LocalLoginUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: LocalLoginWhereUniqueInput
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  hashword: String
  hashword_not: String
  hashword_in: [String!]
  hashword_not_in: [String!]
  hashword_lt: String
  hashword_lte: String
  hashword_gt: String
  hashword_gte: String
  hashword_contains: String
  hashword_not_contains: String
  hashword_starts_with: String
  hashword_not_starts_with: String
  hashword_ends_with: String
  hashword_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [LocalLoginWhereInput!]
  OR: [LocalLoginWhereInput!]
  NOT: [LocalLoginWhereInput!]
}

input LocalLoginWhereUniqueInput {
  id: ID
  username: String
}

scalar Long

type Mutation {
  createLocalLogin(data: LocalLoginCreateInput!): LocalLogin!
  updateLocalLogin(data: LocalLoginUpdateInput!, where: LocalLoginWhereUniqueInput!): LocalLogin
  updateManyLocalLogins(data: LocalLoginUpdateInput!, where: LocalLoginWhereInput): BatchPayload!
  upsertLocalLogin(where: LocalLoginWhereUniqueInput!, create: LocalLoginCreateInput!, update: LocalLoginUpdateInput!): LocalLogin!
  deleteLocalLogin(where: LocalLoginWhereUniqueInput!): LocalLogin
  deleteManyLocalLogins(where: LocalLoginWhereInput): BatchPayload!
  createSystemLogin(data: SystemLoginCreateInput!): SystemLogin!
  updateSystemLogin(data: SystemLoginUpdateInput!, where: SystemLoginWhereUniqueInput!): SystemLogin
  updateManySystemLogins(data: SystemLoginUpdateInput!, where: SystemLoginWhereInput): BatchPayload!
  upsertSystemLogin(where: SystemLoginWhereUniqueInput!, create: SystemLoginCreateInput!, update: SystemLoginUpdateInput!): SystemLogin!
  deleteSystemLogin(where: SystemLoginWhereUniqueInput!): SystemLogin
  deleteManySystemLogins(where: SystemLoginWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  localLogin(where: LocalLoginWhereUniqueInput!): LocalLogin
  localLogins(where: LocalLoginWhereInput, orderBy: LocalLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LocalLogin]!
  localLoginsConnection(where: LocalLoginWhereInput, orderBy: LocalLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocalLoginConnection!
  systemLogin(where: SystemLoginWhereUniqueInput!): SystemLogin
  systemLogins(where: SystemLoginWhereInput, orderBy: SystemLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SystemLogin]!
  systemLoginsConnection(where: SystemLoginWhereInput, orderBy: SystemLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SystemLoginConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  localLogin(where: LocalLoginSubscriptionWhereInput): LocalLoginSubscriptionPayload
  systemLogin(where: SystemLoginSubscriptionWhereInput): SystemLoginSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type SystemLogin {
  id: ID!
  user: User!
  username: String!
  passwordEnvironmentVariable: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type SystemLoginConnection {
  pageInfo: PageInfo!
  edges: [SystemLoginEdge]!
  aggregate: AggregateSystemLogin!
}

input SystemLoginCreateInput {
  user: UserCreateOneWithoutSystemLoginInput!
  username: String!
  passwordEnvironmentVariable: String!
}

input SystemLoginCreateOneWithoutUserInput {
  create: SystemLoginCreateWithoutUserInput
  connect: SystemLoginWhereUniqueInput
}

input SystemLoginCreateWithoutUserInput {
  username: String!
  passwordEnvironmentVariable: String!
}

type SystemLoginEdge {
  node: SystemLogin!
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
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SystemLoginWhereInput
  AND: [SystemLoginSubscriptionWhereInput!]
  OR: [SystemLoginSubscriptionWhereInput!]
  NOT: [SystemLoginSubscriptionWhereInput!]
}

input SystemLoginUpdateInput {
  user: UserUpdateOneRequiredWithoutSystemLoginInput
  username: String
  passwordEnvironmentVariable: String
}

input SystemLoginUpdateOneWithoutUserInput {
  create: SystemLoginCreateWithoutUserInput
  update: SystemLoginUpdateWithoutUserDataInput
  upsert: SystemLoginUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: SystemLoginWhereUniqueInput
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  passwordEnvironmentVariable: String
  passwordEnvironmentVariable_not: String
  passwordEnvironmentVariable_in: [String!]
  passwordEnvironmentVariable_not_in: [String!]
  passwordEnvironmentVariable_lt: String
  passwordEnvironmentVariable_lte: String
  passwordEnvironmentVariable_gt: String
  passwordEnvironmentVariable_gte: String
  passwordEnvironmentVariable_contains: String
  passwordEnvironmentVariable_not_contains: String
  passwordEnvironmentVariable_starts_with: String
  passwordEnvironmentVariable_not_starts_with: String
  passwordEnvironmentVariable_ends_with: String
  passwordEnvironmentVariable_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [SystemLoginWhereInput!]
  OR: [SystemLoginWhereInput!]
  NOT: [SystemLoginWhereInput!]
}

input SystemLoginWhereUniqueInput {
  id: ID
  username: String
  passwordEnvironmentVariable: String
}

type User {
  id: ID!
  displayName: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  systemLogin: SystemLogin
  localLogin: LocalLogin
}

type UserConnection {
  pageInfo: PageInfo!
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

type UserEdge {
  node: User!
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
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  displayName: String
  systemLogin: SystemLoginUpdateOneWithoutUserInput
  localLogin: LocalLoginUpdateOneWithoutUserInput
}

input UserUpdateOneRequiredWithoutLocalLoginInput {
  create: UserCreateWithoutLocalLoginInput
  update: UserUpdateWithoutLocalLoginDataInput
  upsert: UserUpsertWithoutLocalLoginInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutSystemLoginInput {
  create: UserCreateWithoutSystemLoginInput
  update: UserUpdateWithoutSystemLoginDataInput
  upsert: UserUpsertWithoutSystemLoginInput
  connect: UserWhereUniqueInput
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
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  displayName: String
  displayName_not: String
  displayName_in: [String!]
  displayName_not_in: [String!]
  displayName_lt: String
  displayName_lte: String
  displayName_gt: String
  displayName_gte: String
  displayName_contains: String
  displayName_not_contains: String
  displayName_starts_with: String
  displayName_not_starts_with: String
  displayName_ends_with: String
  displayName_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  systemLogin: SystemLoginWhereInput
  localLogin: LocalLoginWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`