export const typeDefs = /* GraphQL */ `type AggregateSystemUserLogin {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
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
  systemUserLogin(where: SystemUserLoginWhereUniqueInput!): SystemUserLogin
  systemUserLogins(where: SystemUserLoginWhereInput, orderBy: SystemUserLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SystemUserLogin]!
  systemUserLoginsConnection(where: SystemUserLoginWhereInput, orderBy: SystemUserLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SystemUserLoginConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
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
  user: UserCreateOneInput!
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
  user: UserUpdateOneRequiredInput
  environmentVariable: String
  systemUsername: String
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
}

type UserConnection {
  pageInfo: PageInfo!
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

input UserUpdateDataInput {
  displayName: String
}

input UserUpdateInput {
  displayName: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
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
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`