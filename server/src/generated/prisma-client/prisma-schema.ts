export const typeDefs = /* GraphQL */ `type AggregateLocalLogin {
  count: Int!
}

type AggregateSystemUserLogin {
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
  createSystemUserLogin(data: SystemUserLoginCreateInput!): SystemUserLogin!
  updateSystemUserLogin(data: SystemUserLoginUpdateInput!, where: SystemUserLoginWhereUniqueInput!): SystemUserLogin
  updateManySystemUserLogins(data: SystemUserLoginUpdateInput!, where: SystemUserLoginWhereInput): BatchPayload!
  upsertSystemUserLogin(where: SystemUserLoginWhereUniqueInput!, create: SystemUserLoginCreateInput!, update: SystemUserLoginUpdateInput!): SystemUserLogin!
  deleteSystemUserLogin(where: SystemUserLoginWhereUniqueInput!): SystemUserLogin
  deleteManySystemUserLogins(where: SystemUserLoginWhereInput): BatchPayload!
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
  systemUserLogin(where: SystemUserLoginWhereUniqueInput!): SystemUserLogin
  systemUserLogins(where: SystemUserLoginWhereInput, orderBy: SystemUserLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SystemUserLogin]!
  systemUserLoginsConnection(where: SystemUserLoginWhereInput, orderBy: SystemUserLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SystemUserLoginConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  localLogin(where: LocalLoginSubscriptionWhereInput): LocalLoginSubscriptionPayload
  systemUserLogin(where: SystemUserLoginSubscriptionWhereInput): SystemUserLoginSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type SystemUserLogin {
  id: ID!
  user: User!
  environmentVariable: String!
  systemUsername: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type SystemUserLoginConnection {
  pageInfo: PageInfo!
  edges: [SystemUserLoginEdge]!
  aggregate: AggregateSystemUserLogin!
}

input SystemUserLoginCreateInput {
  user: UserCreateOneWithoutSystemUserLoginInput!
  environmentVariable: String!
  systemUsername: String!
}

input SystemUserLoginCreateOneWithoutUserInput {
  create: SystemUserLoginCreateWithoutUserInput
  connect: SystemUserLoginWhereUniqueInput
}

input SystemUserLoginCreateWithoutUserInput {
  environmentVariable: String!
  systemUsername: String!
}

type SystemUserLoginEdge {
  node: SystemUserLogin!
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
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SystemUserLoginWhereInput
  AND: [SystemUserLoginSubscriptionWhereInput!]
  OR: [SystemUserLoginSubscriptionWhereInput!]
  NOT: [SystemUserLoginSubscriptionWhereInput!]
}

input SystemUserLoginUpdateInput {
  user: UserUpdateOneRequiredWithoutSystemUserLoginInput
  environmentVariable: String
  systemUsername: String
}

input SystemUserLoginUpdateOneWithoutUserInput {
  create: SystemUserLoginCreateWithoutUserInput
  update: SystemUserLoginUpdateWithoutUserDataInput
  upsert: SystemUserLoginUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: SystemUserLoginWhereUniqueInput
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
  environmentVariable: String
  environmentVariable_not: String
  environmentVariable_in: [String!]
  environmentVariable_not_in: [String!]
  environmentVariable_lt: String
  environmentVariable_lte: String
  environmentVariable_gt: String
  environmentVariable_gte: String
  environmentVariable_contains: String
  environmentVariable_not_contains: String
  environmentVariable_starts_with: String
  environmentVariable_not_starts_with: String
  environmentVariable_ends_with: String
  environmentVariable_not_ends_with: String
  systemUsername: String
  systemUsername_not: String
  systemUsername_in: [String!]
  systemUsername_not_in: [String!]
  systemUsername_lt: String
  systemUsername_lte: String
  systemUsername_gt: String
  systemUsername_gte: String
  systemUsername_contains: String
  systemUsername_not_contains: String
  systemUsername_starts_with: String
  systemUsername_not_starts_with: String
  systemUsername_ends_with: String
  systemUsername_not_ends_with: String
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
  AND: [SystemUserLoginWhereInput!]
  OR: [SystemUserLoginWhereInput!]
  NOT: [SystemUserLoginWhereInput!]
}

input SystemUserLoginWhereUniqueInput {
  id: ID
  environmentVariable: String
  systemUsername: String
}

type User {
  id: ID!
  displayName: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  systemUserLogin: SystemUserLogin
  localLogin: LocalLogin
}

type UserConnection {
  pageInfo: PageInfo!
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
  systemUserLogin: SystemUserLoginUpdateOneWithoutUserInput
  localLogin: LocalLoginUpdateOneWithoutUserInput
}

input UserUpdateOneRequiredWithoutLocalLoginInput {
  create: UserCreateWithoutLocalLoginInput
  update: UserUpdateWithoutLocalLoginDataInput
  upsert: UserUpsertWithoutLocalLoginInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutSystemUserLoginInput {
  create: UserCreateWithoutSystemUserLoginInput
  update: UserUpdateWithoutSystemUserLoginDataInput
  upsert: UserUpsertWithoutSystemUserLoginInput
  connect: UserWhereUniqueInput
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
  systemUserLogin: SystemUserLoginWhereInput
  localLogin: LocalLoginWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`