export const typeDefs = /* GraphQL */ `type AggregateAnnotatable {
  count: Int!
}

type AggregateAnnotation {
  count: Int!
}

type AggregateAnnotationTask {
  count: Int!
}

type AggregateImage {
  count: Int!
}

type AggregateLocalLogin {
  count: Int!
}

type AggregateSystemLogin {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Annotatable {
  id: ID!
  displayName: String
  text: String
  image: Image
  tasks(where: AnnotationTaskWhereInput, orderBy: AnnotationTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AnnotationTask!]
}

type AnnotatableConnection {
  pageInfo: PageInfo!
  edges: [AnnotatableEdge]!
  aggregate: AggregateAnnotatable!
}

input AnnotatableCreateInput {
  displayName: String
  text: String
  image: ImageCreateOneInput
  tasks: AnnotationTaskCreateManyWithoutSubjectsInput
}

input AnnotatableCreateManyWithoutTasksInput {
  create: [AnnotatableCreateWithoutTasksInput!]
  connect: [AnnotatableWhereUniqueInput!]
}

input AnnotatableCreateOneInput {
  create: AnnotatableCreateInput
  connect: AnnotatableWhereUniqueInput
}

input AnnotatableCreateWithoutTasksInput {
  displayName: String
  text: String
  image: ImageCreateOneInput
}

type AnnotatableEdge {
  node: Annotatable!
  cursor: String!
}

enum AnnotatableOrderByInput {
  id_ASC
  id_DESC
  displayName_ASC
  displayName_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AnnotatablePreviousValues {
  id: ID!
  displayName: String
  text: String
}

type AnnotatableSubscriptionPayload {
  mutation: MutationType!
  node: Annotatable
  updatedFields: [String!]
  previousValues: AnnotatablePreviousValues
}

input AnnotatableSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AnnotatableWhereInput
  AND: [AnnotatableSubscriptionWhereInput!]
  OR: [AnnotatableSubscriptionWhereInput!]
  NOT: [AnnotatableSubscriptionWhereInput!]
}

input AnnotatableUpdateDataInput {
  displayName: String
  text: String
  image: ImageUpdateOneInput
  tasks: AnnotationTaskUpdateManyWithoutSubjectsInput
}

input AnnotatableUpdateInput {
  displayName: String
  text: String
  image: ImageUpdateOneInput
  tasks: AnnotationTaskUpdateManyWithoutSubjectsInput
}

input AnnotatableUpdateManyWithoutTasksInput {
  create: [AnnotatableCreateWithoutTasksInput!]
  delete: [AnnotatableWhereUniqueInput!]
  connect: [AnnotatableWhereUniqueInput!]
  disconnect: [AnnotatableWhereUniqueInput!]
  update: [AnnotatableUpdateWithWhereUniqueWithoutTasksInput!]
  upsert: [AnnotatableUpsertWithWhereUniqueWithoutTasksInput!]
}

input AnnotatableUpdateOneRequiredInput {
  create: AnnotatableCreateInput
  update: AnnotatableUpdateDataInput
  upsert: AnnotatableUpsertNestedInput
  connect: AnnotatableWhereUniqueInput
}

input AnnotatableUpdateWithoutTasksDataInput {
  displayName: String
  text: String
  image: ImageUpdateOneInput
}

input AnnotatableUpdateWithWhereUniqueWithoutTasksInput {
  where: AnnotatableWhereUniqueInput!
  data: AnnotatableUpdateWithoutTasksDataInput!
}

input AnnotatableUpsertNestedInput {
  update: AnnotatableUpdateDataInput!
  create: AnnotatableCreateInput!
}

input AnnotatableUpsertWithWhereUniqueWithoutTasksInput {
  where: AnnotatableWhereUniqueInput!
  update: AnnotatableUpdateWithoutTasksDataInput!
  create: AnnotatableCreateWithoutTasksInput!
}

input AnnotatableWhereInput {
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
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  image: ImageWhereInput
  tasks_every: AnnotationTaskWhereInput
  tasks_some: AnnotationTaskWhereInput
  tasks_none: AnnotationTaskWhereInput
  AND: [AnnotatableWhereInput!]
  OR: [AnnotatableWhereInput!]
  NOT: [AnnotatableWhereInput!]
}

input AnnotatableWhereUniqueInput {
  id: ID
}

type Annotation {
  id: ID!
  annotator: User!
  subject: Annotatable!
  task: AnnotationTask
  data: Json
}

type AnnotationConnection {
  pageInfo: PageInfo!
  edges: [AnnotationEdge]!
  aggregate: AggregateAnnotation!
}

input AnnotationCreateInput {
  annotator: UserCreateOneWithoutAnnotationsInput!
  subject: AnnotatableCreateOneInput!
  task: AnnotationTaskCreateOneInput
  data: Json
}

input AnnotationCreateManyWithoutAnnotatorInput {
  create: [AnnotationCreateWithoutAnnotatorInput!]
  connect: [AnnotationWhereUniqueInput!]
}

input AnnotationCreateWithoutAnnotatorInput {
  subject: AnnotatableCreateOneInput!
  task: AnnotationTaskCreateOneInput
  data: Json
}

type AnnotationEdge {
  node: Annotation!
  cursor: String!
}

enum AnnotationOrderByInput {
  id_ASC
  id_DESC
  data_ASC
  data_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AnnotationPreviousValues {
  id: ID!
  data: Json
}

type AnnotationSubscriptionPayload {
  mutation: MutationType!
  node: Annotation
  updatedFields: [String!]
  previousValues: AnnotationPreviousValues
}

input AnnotationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AnnotationWhereInput
  AND: [AnnotationSubscriptionWhereInput!]
  OR: [AnnotationSubscriptionWhereInput!]
  NOT: [AnnotationSubscriptionWhereInput!]
}

type AnnotationTask {
  id: ID!
  assignees(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  displayName: String!
  subjects(where: AnnotatableWhereInput, orderBy: AnnotatableOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Annotatable!]
  requirements: Json
}

type AnnotationTaskConnection {
  pageInfo: PageInfo!
  edges: [AnnotationTaskEdge]!
  aggregate: AggregateAnnotationTask!
}

input AnnotationTaskCreateInput {
  assignees: UserCreateManyWithoutAssignedAnnotationTasksInput
  displayName: String!
  subjects: AnnotatableCreateManyWithoutTasksInput
  requirements: Json
}

input AnnotationTaskCreateManyWithoutAssigneesInput {
  create: [AnnotationTaskCreateWithoutAssigneesInput!]
  connect: [AnnotationTaskWhereUniqueInput!]
}

input AnnotationTaskCreateManyWithoutSubjectsInput {
  create: [AnnotationTaskCreateWithoutSubjectsInput!]
  connect: [AnnotationTaskWhereUniqueInput!]
}

input AnnotationTaskCreateOneInput {
  create: AnnotationTaskCreateInput
  connect: AnnotationTaskWhereUniqueInput
}

input AnnotationTaskCreateWithoutAssigneesInput {
  displayName: String!
  subjects: AnnotatableCreateManyWithoutTasksInput
  requirements: Json
}

input AnnotationTaskCreateWithoutSubjectsInput {
  assignees: UserCreateManyWithoutAssignedAnnotationTasksInput
  displayName: String!
  requirements: Json
}

type AnnotationTaskEdge {
  node: AnnotationTask!
  cursor: String!
}

enum AnnotationTaskOrderByInput {
  id_ASC
  id_DESC
  displayName_ASC
  displayName_DESC
  requirements_ASC
  requirements_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AnnotationTaskPreviousValues {
  id: ID!
  displayName: String!
  requirements: Json
}

type AnnotationTaskSubscriptionPayload {
  mutation: MutationType!
  node: AnnotationTask
  updatedFields: [String!]
  previousValues: AnnotationTaskPreviousValues
}

input AnnotationTaskSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AnnotationTaskWhereInput
  AND: [AnnotationTaskSubscriptionWhereInput!]
  OR: [AnnotationTaskSubscriptionWhereInput!]
  NOT: [AnnotationTaskSubscriptionWhereInput!]
}

input AnnotationTaskUpdateDataInput {
  assignees: UserUpdateManyWithoutAssignedAnnotationTasksInput
  displayName: String
  subjects: AnnotatableUpdateManyWithoutTasksInput
  requirements: Json
}

input AnnotationTaskUpdateInput {
  assignees: UserUpdateManyWithoutAssignedAnnotationTasksInput
  displayName: String
  subjects: AnnotatableUpdateManyWithoutTasksInput
  requirements: Json
}

input AnnotationTaskUpdateManyWithoutAssigneesInput {
  create: [AnnotationTaskCreateWithoutAssigneesInput!]
  delete: [AnnotationTaskWhereUniqueInput!]
  connect: [AnnotationTaskWhereUniqueInput!]
  disconnect: [AnnotationTaskWhereUniqueInput!]
  update: [AnnotationTaskUpdateWithWhereUniqueWithoutAssigneesInput!]
  upsert: [AnnotationTaskUpsertWithWhereUniqueWithoutAssigneesInput!]
}

input AnnotationTaskUpdateManyWithoutSubjectsInput {
  create: [AnnotationTaskCreateWithoutSubjectsInput!]
  delete: [AnnotationTaskWhereUniqueInput!]
  connect: [AnnotationTaskWhereUniqueInput!]
  disconnect: [AnnotationTaskWhereUniqueInput!]
  update: [AnnotationTaskUpdateWithWhereUniqueWithoutSubjectsInput!]
  upsert: [AnnotationTaskUpsertWithWhereUniqueWithoutSubjectsInput!]
}

input AnnotationTaskUpdateOneInput {
  create: AnnotationTaskCreateInput
  update: AnnotationTaskUpdateDataInput
  upsert: AnnotationTaskUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: AnnotationTaskWhereUniqueInput
}

input AnnotationTaskUpdateWithoutAssigneesDataInput {
  displayName: String
  subjects: AnnotatableUpdateManyWithoutTasksInput
  requirements: Json
}

input AnnotationTaskUpdateWithoutSubjectsDataInput {
  assignees: UserUpdateManyWithoutAssignedAnnotationTasksInput
  displayName: String
  requirements: Json
}

input AnnotationTaskUpdateWithWhereUniqueWithoutAssigneesInput {
  where: AnnotationTaskWhereUniqueInput!
  data: AnnotationTaskUpdateWithoutAssigneesDataInput!
}

input AnnotationTaskUpdateWithWhereUniqueWithoutSubjectsInput {
  where: AnnotationTaskWhereUniqueInput!
  data: AnnotationTaskUpdateWithoutSubjectsDataInput!
}

input AnnotationTaskUpsertNestedInput {
  update: AnnotationTaskUpdateDataInput!
  create: AnnotationTaskCreateInput!
}

input AnnotationTaskUpsertWithWhereUniqueWithoutAssigneesInput {
  where: AnnotationTaskWhereUniqueInput!
  update: AnnotationTaskUpdateWithoutAssigneesDataInput!
  create: AnnotationTaskCreateWithoutAssigneesInput!
}

input AnnotationTaskUpsertWithWhereUniqueWithoutSubjectsInput {
  where: AnnotationTaskWhereUniqueInput!
  update: AnnotationTaskUpdateWithoutSubjectsDataInput!
  create: AnnotationTaskCreateWithoutSubjectsInput!
}

input AnnotationTaskWhereInput {
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
  assignees_every: UserWhereInput
  assignees_some: UserWhereInput
  assignees_none: UserWhereInput
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
  subjects_every: AnnotatableWhereInput
  subjects_some: AnnotatableWhereInput
  subjects_none: AnnotatableWhereInput
  AND: [AnnotationTaskWhereInput!]
  OR: [AnnotationTaskWhereInput!]
  NOT: [AnnotationTaskWhereInput!]
}

input AnnotationTaskWhereUniqueInput {
  id: ID
}

input AnnotationUpdateInput {
  annotator: UserUpdateOneRequiredWithoutAnnotationsInput
  subject: AnnotatableUpdateOneRequiredInput
  task: AnnotationTaskUpdateOneInput
  data: Json
}

input AnnotationUpdateManyWithoutAnnotatorInput {
  create: [AnnotationCreateWithoutAnnotatorInput!]
  delete: [AnnotationWhereUniqueInput!]
  connect: [AnnotationWhereUniqueInput!]
  disconnect: [AnnotationWhereUniqueInput!]
  update: [AnnotationUpdateWithWhereUniqueWithoutAnnotatorInput!]
  upsert: [AnnotationUpsertWithWhereUniqueWithoutAnnotatorInput!]
}

input AnnotationUpdateWithoutAnnotatorDataInput {
  subject: AnnotatableUpdateOneRequiredInput
  task: AnnotationTaskUpdateOneInput
  data: Json
}

input AnnotationUpdateWithWhereUniqueWithoutAnnotatorInput {
  where: AnnotationWhereUniqueInput!
  data: AnnotationUpdateWithoutAnnotatorDataInput!
}

input AnnotationUpsertWithWhereUniqueWithoutAnnotatorInput {
  where: AnnotationWhereUniqueInput!
  update: AnnotationUpdateWithoutAnnotatorDataInput!
  create: AnnotationCreateWithoutAnnotatorInput!
}

input AnnotationWhereInput {
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
  annotator: UserWhereInput
  subject: AnnotatableWhereInput
  task: AnnotationTaskWhereInput
  AND: [AnnotationWhereInput!]
  OR: [AnnotationWhereInput!]
  NOT: [AnnotationWhereInput!]
}

input AnnotationWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Image {
  id: ID!
  uri: String!
  thumbnailUri: String
  caption: String
}

type ImageConnection {
  pageInfo: PageInfo!
  edges: [ImageEdge]!
  aggregate: AggregateImage!
}

input ImageCreateInput {
  uri: String!
  thumbnailUri: String
  caption: String
}

input ImageCreateOneInput {
  create: ImageCreateInput
  connect: ImageWhereUniqueInput
}

type ImageEdge {
  node: Image!
  cursor: String!
}

enum ImageOrderByInput {
  id_ASC
  id_DESC
  uri_ASC
  uri_DESC
  thumbnailUri_ASC
  thumbnailUri_DESC
  caption_ASC
  caption_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ImagePreviousValues {
  id: ID!
  uri: String!
  thumbnailUri: String
  caption: String
}

type ImageSubscriptionPayload {
  mutation: MutationType!
  node: Image
  updatedFields: [String!]
  previousValues: ImagePreviousValues
}

input ImageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ImageWhereInput
  AND: [ImageSubscriptionWhereInput!]
  OR: [ImageSubscriptionWhereInput!]
  NOT: [ImageSubscriptionWhereInput!]
}

input ImageUpdateDataInput {
  uri: String
  thumbnailUri: String
  caption: String
}

input ImageUpdateInput {
  uri: String
  thumbnailUri: String
  caption: String
}

input ImageUpdateOneInput {
  create: ImageCreateInput
  update: ImageUpdateDataInput
  upsert: ImageUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ImageWhereUniqueInput
}

input ImageUpsertNestedInput {
  update: ImageUpdateDataInput!
  create: ImageCreateInput!
}

input ImageWhereInput {
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
  uri: String
  uri_not: String
  uri_in: [String!]
  uri_not_in: [String!]
  uri_lt: String
  uri_lte: String
  uri_gt: String
  uri_gte: String
  uri_contains: String
  uri_not_contains: String
  uri_starts_with: String
  uri_not_starts_with: String
  uri_ends_with: String
  uri_not_ends_with: String
  thumbnailUri: String
  thumbnailUri_not: String
  thumbnailUri_in: [String!]
  thumbnailUri_not_in: [String!]
  thumbnailUri_lt: String
  thumbnailUri_lte: String
  thumbnailUri_gt: String
  thumbnailUri_gte: String
  thumbnailUri_contains: String
  thumbnailUri_not_contains: String
  thumbnailUri_starts_with: String
  thumbnailUri_not_starts_with: String
  thumbnailUri_ends_with: String
  thumbnailUri_not_ends_with: String
  caption: String
  caption_not: String
  caption_in: [String!]
  caption_not_in: [String!]
  caption_lt: String
  caption_lte: String
  caption_gt: String
  caption_gte: String
  caption_contains: String
  caption_not_contains: String
  caption_starts_with: String
  caption_not_starts_with: String
  caption_ends_with: String
  caption_not_ends_with: String
  AND: [ImageWhereInput!]
  OR: [ImageWhereInput!]
  NOT: [ImageWhereInput!]
}

input ImageWhereUniqueInput {
  id: ID
  uri: String
}

scalar Json

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
  createAnnotatable(data: AnnotatableCreateInput!): Annotatable!
  updateAnnotatable(data: AnnotatableUpdateInput!, where: AnnotatableWhereUniqueInput!): Annotatable
  updateManyAnnotatables(data: AnnotatableUpdateInput!, where: AnnotatableWhereInput): BatchPayload!
  upsertAnnotatable(where: AnnotatableWhereUniqueInput!, create: AnnotatableCreateInput!, update: AnnotatableUpdateInput!): Annotatable!
  deleteAnnotatable(where: AnnotatableWhereUniqueInput!): Annotatable
  deleteManyAnnotatables(where: AnnotatableWhereInput): BatchPayload!
  createAnnotation(data: AnnotationCreateInput!): Annotation!
  updateAnnotation(data: AnnotationUpdateInput!, where: AnnotationWhereUniqueInput!): Annotation
  updateManyAnnotations(data: AnnotationUpdateInput!, where: AnnotationWhereInput): BatchPayload!
  upsertAnnotation(where: AnnotationWhereUniqueInput!, create: AnnotationCreateInput!, update: AnnotationUpdateInput!): Annotation!
  deleteAnnotation(where: AnnotationWhereUniqueInput!): Annotation
  deleteManyAnnotations(where: AnnotationWhereInput): BatchPayload!
  createAnnotationTask(data: AnnotationTaskCreateInput!): AnnotationTask!
  updateAnnotationTask(data: AnnotationTaskUpdateInput!, where: AnnotationTaskWhereUniqueInput!): AnnotationTask
  updateManyAnnotationTasks(data: AnnotationTaskUpdateInput!, where: AnnotationTaskWhereInput): BatchPayload!
  upsertAnnotationTask(where: AnnotationTaskWhereUniqueInput!, create: AnnotationTaskCreateInput!, update: AnnotationTaskUpdateInput!): AnnotationTask!
  deleteAnnotationTask(where: AnnotationTaskWhereUniqueInput!): AnnotationTask
  deleteManyAnnotationTasks(where: AnnotationTaskWhereInput): BatchPayload!
  createImage(data: ImageCreateInput!): Image!
  updateImage(data: ImageUpdateInput!, where: ImageWhereUniqueInput!): Image
  updateManyImages(data: ImageUpdateInput!, where: ImageWhereInput): BatchPayload!
  upsertImage(where: ImageWhereUniqueInput!, create: ImageCreateInput!, update: ImageUpdateInput!): Image!
  deleteImage(where: ImageWhereUniqueInput!): Image
  deleteManyImages(where: ImageWhereInput): BatchPayload!
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
  annotatable(where: AnnotatableWhereUniqueInput!): Annotatable
  annotatables(where: AnnotatableWhereInput, orderBy: AnnotatableOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Annotatable]!
  annotatablesConnection(where: AnnotatableWhereInput, orderBy: AnnotatableOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AnnotatableConnection!
  annotation(where: AnnotationWhereUniqueInput!): Annotation
  annotations(where: AnnotationWhereInput, orderBy: AnnotationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Annotation]!
  annotationsConnection(where: AnnotationWhereInput, orderBy: AnnotationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AnnotationConnection!
  annotationTask(where: AnnotationTaskWhereUniqueInput!): AnnotationTask
  annotationTasks(where: AnnotationTaskWhereInput, orderBy: AnnotationTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AnnotationTask]!
  annotationTasksConnection(where: AnnotationTaskWhereInput, orderBy: AnnotationTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AnnotationTaskConnection!
  image(where: ImageWhereUniqueInput!): Image
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image]!
  imagesConnection(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ImageConnection!
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
  annotatable(where: AnnotatableSubscriptionWhereInput): AnnotatableSubscriptionPayload
  annotation(where: AnnotationSubscriptionWhereInput): AnnotationSubscriptionPayload
  annotationTask(where: AnnotationTaskSubscriptionWhereInput): AnnotationTaskSubscriptionPayload
  image(where: ImageSubscriptionWhereInput): ImageSubscriptionPayload
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
  assignedAnnotationTasks(where: AnnotationTaskWhereInput, orderBy: AnnotationTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AnnotationTask!]
  annotations(where: AnnotationWhereInput, orderBy: AnnotationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Annotation!]
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
  assignedAnnotationTasks: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations: AnnotationCreateManyWithoutAnnotatorInput
}

input UserCreateManyWithoutAssignedAnnotationTasksInput {
  create: [UserCreateWithoutAssignedAnnotationTasksInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutAnnotationsInput {
  create: UserCreateWithoutAnnotationsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutLocalLoginInput {
  create: UserCreateWithoutLocalLoginInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutSystemLoginInput {
  create: UserCreateWithoutSystemLoginInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutAnnotationsInput {
  displayName: String!
  systemLogin: SystemLoginCreateOneWithoutUserInput
  localLogin: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskCreateManyWithoutAssigneesInput
}

input UserCreateWithoutAssignedAnnotationTasksInput {
  displayName: String!
  systemLogin: SystemLoginCreateOneWithoutUserInput
  localLogin: LocalLoginCreateOneWithoutUserInput
  annotations: AnnotationCreateManyWithoutAnnotatorInput
}

input UserCreateWithoutLocalLoginInput {
  displayName: String!
  systemLogin: SystemLoginCreateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations: AnnotationCreateManyWithoutAnnotatorInput
}

input UserCreateWithoutSystemLoginInput {
  displayName: String!
  localLogin: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations: AnnotationCreateManyWithoutAnnotatorInput
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
  assignedAnnotationTasks: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations: AnnotationUpdateManyWithoutAnnotatorInput
}

input UserUpdateManyWithoutAssignedAnnotationTasksInput {
  create: [UserCreateWithoutAssignedAnnotationTasksInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutAssignedAnnotationTasksInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutAssignedAnnotationTasksInput!]
}

input UserUpdateOneRequiredWithoutAnnotationsInput {
  create: UserCreateWithoutAnnotationsInput
  update: UserUpdateWithoutAnnotationsDataInput
  upsert: UserUpsertWithoutAnnotationsInput
  connect: UserWhereUniqueInput
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

input UserUpdateWithoutAnnotationsDataInput {
  displayName: String
  systemLogin: SystemLoginUpdateOneWithoutUserInput
  localLogin: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskUpdateManyWithoutAssigneesInput
}

input UserUpdateWithoutAssignedAnnotationTasksDataInput {
  displayName: String
  systemLogin: SystemLoginUpdateOneWithoutUserInput
  localLogin: LocalLoginUpdateOneWithoutUserInput
  annotations: AnnotationUpdateManyWithoutAnnotatorInput
}

input UserUpdateWithoutLocalLoginDataInput {
  displayName: String
  systemLogin: SystemLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations: AnnotationUpdateManyWithoutAnnotatorInput
}

input UserUpdateWithoutSystemLoginDataInput {
  displayName: String
  localLogin: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations: AnnotationUpdateManyWithoutAnnotatorInput
}

input UserUpdateWithWhereUniqueWithoutAssignedAnnotationTasksInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutAssignedAnnotationTasksDataInput!
}

input UserUpsertWithoutAnnotationsInput {
  update: UserUpdateWithoutAnnotationsDataInput!
  create: UserCreateWithoutAnnotationsInput!
}

input UserUpsertWithoutLocalLoginInput {
  update: UserUpdateWithoutLocalLoginDataInput!
  create: UserCreateWithoutLocalLoginInput!
}

input UserUpsertWithoutSystemLoginInput {
  update: UserUpdateWithoutSystemLoginDataInput!
  create: UserCreateWithoutSystemLoginInput!
}

input UserUpsertWithWhereUniqueWithoutAssignedAnnotationTasksInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutAssignedAnnotationTasksDataInput!
  create: UserCreateWithoutAssignedAnnotationTasksInput!
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
  assignedAnnotationTasks_every: AnnotationTaskWhereInput
  assignedAnnotationTasks_some: AnnotationTaskWhereInput
  assignedAnnotationTasks_none: AnnotationTaskWhereInput
  annotations_every: AnnotationWhereInput
  annotations_some: AnnotationWhereInput
  annotations_none: AnnotationWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`