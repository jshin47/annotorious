export const typeDefs = /* GraphQL */ `type AggregateAnnotatable {
  count: Int!
}

type AggregateAnnotation {
  count: Int!
}

type AggregateAnnotationTask {
  count: Int!
}

type AggregateCgPoint {
  count: Int!
}

type AggregateClassificationContext {
  count: Int!
}

type AggregateClassificationLabel {
  count: Int!
}

type AggregateGroup {
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
  owner: User
  group: Group
  anyoneCanView: Boolean!
  anyoneCanAnnotate: Boolean!
  creator: User
  createdAt: DateTime!
  updatedAt: DateTime!
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
  owner: UserCreateOneWithoutOwnedAnnotatablesInput
  group: GroupCreateOneWithoutOwnedAnnotatablesInput
  anyoneCanView: Boolean
  anyoneCanAnnotate: Boolean
  creator: UserCreateOneWithoutCreatedAnnotatablesInput
}

input AnnotatableCreateManyWithoutCreatorInput {
  create: [AnnotatableCreateWithoutCreatorInput!]
  connect: [AnnotatableWhereUniqueInput!]
}

input AnnotatableCreateManyWithoutGroupInput {
  create: [AnnotatableCreateWithoutGroupInput!]
  connect: [AnnotatableWhereUniqueInput!]
}

input AnnotatableCreateManyWithoutOwnerInput {
  create: [AnnotatableCreateWithoutOwnerInput!]
  connect: [AnnotatableWhereUniqueInput!]
}

input AnnotatableCreateManyWithoutTasksInput {
  create: [AnnotatableCreateWithoutTasksInput!]
  connect: [AnnotatableWhereUniqueInput!]
}

input AnnotatableCreateOneInput {
  create: AnnotatableCreateInput
  connect: AnnotatableWhereUniqueInput
}

input AnnotatableCreateWithoutCreatorInput {
  displayName: String
  text: String
  image: ImageCreateOneInput
  tasks: AnnotationTaskCreateManyWithoutSubjectsInput
  owner: UserCreateOneWithoutOwnedAnnotatablesInput
  group: GroupCreateOneWithoutOwnedAnnotatablesInput
  anyoneCanView: Boolean
  anyoneCanAnnotate: Boolean
}

input AnnotatableCreateWithoutGroupInput {
  displayName: String
  text: String
  image: ImageCreateOneInput
  tasks: AnnotationTaskCreateManyWithoutSubjectsInput
  owner: UserCreateOneWithoutOwnedAnnotatablesInput
  anyoneCanView: Boolean
  anyoneCanAnnotate: Boolean
  creator: UserCreateOneWithoutCreatedAnnotatablesInput
}

input AnnotatableCreateWithoutOwnerInput {
  displayName: String
  text: String
  image: ImageCreateOneInput
  tasks: AnnotationTaskCreateManyWithoutSubjectsInput
  group: GroupCreateOneWithoutOwnedAnnotatablesInput
  anyoneCanView: Boolean
  anyoneCanAnnotate: Boolean
  creator: UserCreateOneWithoutCreatedAnnotatablesInput
}

input AnnotatableCreateWithoutTasksInput {
  displayName: String
  text: String
  image: ImageCreateOneInput
  owner: UserCreateOneWithoutOwnedAnnotatablesInput
  group: GroupCreateOneWithoutOwnedAnnotatablesInput
  anyoneCanView: Boolean
  anyoneCanAnnotate: Boolean
  creator: UserCreateOneWithoutCreatedAnnotatablesInput
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
  anyoneCanView_ASC
  anyoneCanView_DESC
  anyoneCanAnnotate_ASC
  anyoneCanAnnotate_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AnnotatablePreviousValues {
  id: ID!
  displayName: String
  text: String
  anyoneCanView: Boolean!
  anyoneCanAnnotate: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
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
  owner: UserUpdateOneWithoutOwnedAnnotatablesInput
  group: GroupUpdateOneWithoutOwnedAnnotatablesInput
  anyoneCanView: Boolean
  anyoneCanAnnotate: Boolean
  creator: UserUpdateOneWithoutCreatedAnnotatablesInput
}

input AnnotatableUpdateInput {
  displayName: String
  text: String
  image: ImageUpdateOneInput
  tasks: AnnotationTaskUpdateManyWithoutSubjectsInput
  owner: UserUpdateOneWithoutOwnedAnnotatablesInput
  group: GroupUpdateOneWithoutOwnedAnnotatablesInput
  anyoneCanView: Boolean
  anyoneCanAnnotate: Boolean
  creator: UserUpdateOneWithoutCreatedAnnotatablesInput
}

input AnnotatableUpdateManyWithoutCreatorInput {
  create: [AnnotatableCreateWithoutCreatorInput!]
  delete: [AnnotatableWhereUniqueInput!]
  connect: [AnnotatableWhereUniqueInput!]
  disconnect: [AnnotatableWhereUniqueInput!]
  update: [AnnotatableUpdateWithWhereUniqueWithoutCreatorInput!]
  upsert: [AnnotatableUpsertWithWhereUniqueWithoutCreatorInput!]
}

input AnnotatableUpdateManyWithoutGroupInput {
  create: [AnnotatableCreateWithoutGroupInput!]
  delete: [AnnotatableWhereUniqueInput!]
  connect: [AnnotatableWhereUniqueInput!]
  disconnect: [AnnotatableWhereUniqueInput!]
  update: [AnnotatableUpdateWithWhereUniqueWithoutGroupInput!]
  upsert: [AnnotatableUpsertWithWhereUniqueWithoutGroupInput!]
}

input AnnotatableUpdateManyWithoutOwnerInput {
  create: [AnnotatableCreateWithoutOwnerInput!]
  delete: [AnnotatableWhereUniqueInput!]
  connect: [AnnotatableWhereUniqueInput!]
  disconnect: [AnnotatableWhereUniqueInput!]
  update: [AnnotatableUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [AnnotatableUpsertWithWhereUniqueWithoutOwnerInput!]
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

input AnnotatableUpdateWithoutCreatorDataInput {
  displayName: String
  text: String
  image: ImageUpdateOneInput
  tasks: AnnotationTaskUpdateManyWithoutSubjectsInput
  owner: UserUpdateOneWithoutOwnedAnnotatablesInput
  group: GroupUpdateOneWithoutOwnedAnnotatablesInput
  anyoneCanView: Boolean
  anyoneCanAnnotate: Boolean
}

input AnnotatableUpdateWithoutGroupDataInput {
  displayName: String
  text: String
  image: ImageUpdateOneInput
  tasks: AnnotationTaskUpdateManyWithoutSubjectsInput
  owner: UserUpdateOneWithoutOwnedAnnotatablesInput
  anyoneCanView: Boolean
  anyoneCanAnnotate: Boolean
  creator: UserUpdateOneWithoutCreatedAnnotatablesInput
}

input AnnotatableUpdateWithoutOwnerDataInput {
  displayName: String
  text: String
  image: ImageUpdateOneInput
  tasks: AnnotationTaskUpdateManyWithoutSubjectsInput
  group: GroupUpdateOneWithoutOwnedAnnotatablesInput
  anyoneCanView: Boolean
  anyoneCanAnnotate: Boolean
  creator: UserUpdateOneWithoutCreatedAnnotatablesInput
}

input AnnotatableUpdateWithoutTasksDataInput {
  displayName: String
  text: String
  image: ImageUpdateOneInput
  owner: UserUpdateOneWithoutOwnedAnnotatablesInput
  group: GroupUpdateOneWithoutOwnedAnnotatablesInput
  anyoneCanView: Boolean
  anyoneCanAnnotate: Boolean
  creator: UserUpdateOneWithoutCreatedAnnotatablesInput
}

input AnnotatableUpdateWithWhereUniqueWithoutCreatorInput {
  where: AnnotatableWhereUniqueInput!
  data: AnnotatableUpdateWithoutCreatorDataInput!
}

input AnnotatableUpdateWithWhereUniqueWithoutGroupInput {
  where: AnnotatableWhereUniqueInput!
  data: AnnotatableUpdateWithoutGroupDataInput!
}

input AnnotatableUpdateWithWhereUniqueWithoutOwnerInput {
  where: AnnotatableWhereUniqueInput!
  data: AnnotatableUpdateWithoutOwnerDataInput!
}

input AnnotatableUpdateWithWhereUniqueWithoutTasksInput {
  where: AnnotatableWhereUniqueInput!
  data: AnnotatableUpdateWithoutTasksDataInput!
}

input AnnotatableUpsertNestedInput {
  update: AnnotatableUpdateDataInput!
  create: AnnotatableCreateInput!
}

input AnnotatableUpsertWithWhereUniqueWithoutCreatorInput {
  where: AnnotatableWhereUniqueInput!
  update: AnnotatableUpdateWithoutCreatorDataInput!
  create: AnnotatableCreateWithoutCreatorInput!
}

input AnnotatableUpsertWithWhereUniqueWithoutGroupInput {
  where: AnnotatableWhereUniqueInput!
  update: AnnotatableUpdateWithoutGroupDataInput!
  create: AnnotatableCreateWithoutGroupInput!
}

input AnnotatableUpsertWithWhereUniqueWithoutOwnerInput {
  where: AnnotatableWhereUniqueInput!
  update: AnnotatableUpdateWithoutOwnerDataInput!
  create: AnnotatableCreateWithoutOwnerInput!
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
  owner: UserWhereInput
  group: GroupWhereInput
  anyoneCanView: Boolean
  anyoneCanView_not: Boolean
  anyoneCanAnnotate: Boolean
  anyoneCanAnnotate_not: Boolean
  creator: UserWhereInput
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
  classificationLabels(where: ClassificationLabelWhereInput, orderBy: ClassificationLabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassificationLabel!]
  svgBounds: String
  convexHull(where: CgPointWhereInput, orderBy: CgPointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CgPoint!]
  owner: User
  group: Group
  anyoneCanView: Boolean!
  anyoneCanSuggestRevision: Boolean!
  creator: User
  createdAt: DateTime!
  updatedAt: DateTime!
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
  classificationLabels: ClassificationLabelCreateManyInput
  svgBounds: String
  convexHull: CgPointCreateManyInput
  owner: UserCreateOneWithoutOwnedAnnotationsInput
  group: GroupCreateOneWithoutOwnedAnnotationsInput
  anyoneCanView: Boolean
  anyoneCanSuggestRevision: Boolean
  creator: UserCreateOneWithoutCreatedAnnotationsInput
}

input AnnotationCreateManyWithoutAnnotatorInput {
  create: [AnnotationCreateWithoutAnnotatorInput!]
  connect: [AnnotationWhereUniqueInput!]
}

input AnnotationCreateManyWithoutCreatorInput {
  create: [AnnotationCreateWithoutCreatorInput!]
  connect: [AnnotationWhereUniqueInput!]
}

input AnnotationCreateManyWithoutGroupInput {
  create: [AnnotationCreateWithoutGroupInput!]
  connect: [AnnotationWhereUniqueInput!]
}

input AnnotationCreateManyWithoutOwnerInput {
  create: [AnnotationCreateWithoutOwnerInput!]
  connect: [AnnotationWhereUniqueInput!]
}

input AnnotationCreateWithoutAnnotatorInput {
  subject: AnnotatableCreateOneInput!
  task: AnnotationTaskCreateOneInput
  data: Json
  classificationLabels: ClassificationLabelCreateManyInput
  svgBounds: String
  convexHull: CgPointCreateManyInput
  owner: UserCreateOneWithoutOwnedAnnotationsInput
  group: GroupCreateOneWithoutOwnedAnnotationsInput
  anyoneCanView: Boolean
  anyoneCanSuggestRevision: Boolean
  creator: UserCreateOneWithoutCreatedAnnotationsInput
}

input AnnotationCreateWithoutCreatorInput {
  annotator: UserCreateOneWithoutAnnotationsInput!
  subject: AnnotatableCreateOneInput!
  task: AnnotationTaskCreateOneInput
  data: Json
  classificationLabels: ClassificationLabelCreateManyInput
  svgBounds: String
  convexHull: CgPointCreateManyInput
  owner: UserCreateOneWithoutOwnedAnnotationsInput
  group: GroupCreateOneWithoutOwnedAnnotationsInput
  anyoneCanView: Boolean
  anyoneCanSuggestRevision: Boolean
}

input AnnotationCreateWithoutGroupInput {
  annotator: UserCreateOneWithoutAnnotationsInput!
  subject: AnnotatableCreateOneInput!
  task: AnnotationTaskCreateOneInput
  data: Json
  classificationLabels: ClassificationLabelCreateManyInput
  svgBounds: String
  convexHull: CgPointCreateManyInput
  owner: UserCreateOneWithoutOwnedAnnotationsInput
  anyoneCanView: Boolean
  anyoneCanSuggestRevision: Boolean
  creator: UserCreateOneWithoutCreatedAnnotationsInput
}

input AnnotationCreateWithoutOwnerInput {
  annotator: UserCreateOneWithoutAnnotationsInput!
  subject: AnnotatableCreateOneInput!
  task: AnnotationTaskCreateOneInput
  data: Json
  classificationLabels: ClassificationLabelCreateManyInput
  svgBounds: String
  convexHull: CgPointCreateManyInput
  group: GroupCreateOneWithoutOwnedAnnotationsInput
  anyoneCanView: Boolean
  anyoneCanSuggestRevision: Boolean
  creator: UserCreateOneWithoutCreatedAnnotationsInput
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
  svgBounds_ASC
  svgBounds_DESC
  anyoneCanView_ASC
  anyoneCanView_DESC
  anyoneCanSuggestRevision_ASC
  anyoneCanSuggestRevision_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AnnotationPreviousValues {
  id: ID!
  data: Json
  svgBounds: String
  anyoneCanView: Boolean!
  anyoneCanSuggestRevision: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
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
  classificationContexts(where: ClassificationContextWhereInput, orderBy: ClassificationContextOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassificationContext!]
  classificationLabels(where: ClassificationLabelWhereInput, orderBy: ClassificationLabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassificationLabel!]
  owner: User
  group: Group
  anyoneCanView: Boolean!
  anyoneCanJoin: Boolean!
  creator: User
  createdAt: DateTime!
  updatedAt: DateTime!
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
  classificationContexts: ClassificationContextCreateManyInput
  classificationLabels: ClassificationLabelCreateManyInput
  owner: UserCreateOneWithoutOwnedAnnotationTasksInput
  group: GroupCreateOneWithoutOwnedAnnotationTasksInput
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
  creator: UserCreateOneWithoutCreatedAnnotationTasksInput
}

input AnnotationTaskCreateManyWithoutAssigneesInput {
  create: [AnnotationTaskCreateWithoutAssigneesInput!]
  connect: [AnnotationTaskWhereUniqueInput!]
}

input AnnotationTaskCreateManyWithoutCreatorInput {
  create: [AnnotationTaskCreateWithoutCreatorInput!]
  connect: [AnnotationTaskWhereUniqueInput!]
}

input AnnotationTaskCreateManyWithoutGroupInput {
  create: [AnnotationTaskCreateWithoutGroupInput!]
  connect: [AnnotationTaskWhereUniqueInput!]
}

input AnnotationTaskCreateManyWithoutOwnerInput {
  create: [AnnotationTaskCreateWithoutOwnerInput!]
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
  classificationContexts: ClassificationContextCreateManyInput
  classificationLabels: ClassificationLabelCreateManyInput
  owner: UserCreateOneWithoutOwnedAnnotationTasksInput
  group: GroupCreateOneWithoutOwnedAnnotationTasksInput
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
  creator: UserCreateOneWithoutCreatedAnnotationTasksInput
}

input AnnotationTaskCreateWithoutCreatorInput {
  assignees: UserCreateManyWithoutAssignedAnnotationTasksInput
  displayName: String!
  subjects: AnnotatableCreateManyWithoutTasksInput
  requirements: Json
  classificationContexts: ClassificationContextCreateManyInput
  classificationLabels: ClassificationLabelCreateManyInput
  owner: UserCreateOneWithoutOwnedAnnotationTasksInput
  group: GroupCreateOneWithoutOwnedAnnotationTasksInput
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
}

input AnnotationTaskCreateWithoutGroupInput {
  assignees: UserCreateManyWithoutAssignedAnnotationTasksInput
  displayName: String!
  subjects: AnnotatableCreateManyWithoutTasksInput
  requirements: Json
  classificationContexts: ClassificationContextCreateManyInput
  classificationLabels: ClassificationLabelCreateManyInput
  owner: UserCreateOneWithoutOwnedAnnotationTasksInput
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
  creator: UserCreateOneWithoutCreatedAnnotationTasksInput
}

input AnnotationTaskCreateWithoutOwnerInput {
  assignees: UserCreateManyWithoutAssignedAnnotationTasksInput
  displayName: String!
  subjects: AnnotatableCreateManyWithoutTasksInput
  requirements: Json
  classificationContexts: ClassificationContextCreateManyInput
  classificationLabels: ClassificationLabelCreateManyInput
  group: GroupCreateOneWithoutOwnedAnnotationTasksInput
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
  creator: UserCreateOneWithoutCreatedAnnotationTasksInput
}

input AnnotationTaskCreateWithoutSubjectsInput {
  assignees: UserCreateManyWithoutAssignedAnnotationTasksInput
  displayName: String!
  requirements: Json
  classificationContexts: ClassificationContextCreateManyInput
  classificationLabels: ClassificationLabelCreateManyInput
  owner: UserCreateOneWithoutOwnedAnnotationTasksInput
  group: GroupCreateOneWithoutOwnedAnnotationTasksInput
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
  creator: UserCreateOneWithoutCreatedAnnotationTasksInput
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
  anyoneCanView_ASC
  anyoneCanView_DESC
  anyoneCanJoin_ASC
  anyoneCanJoin_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AnnotationTaskPreviousValues {
  id: ID!
  displayName: String!
  requirements: Json
  anyoneCanView: Boolean!
  anyoneCanJoin: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
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
  classificationContexts: ClassificationContextUpdateManyInput
  classificationLabels: ClassificationLabelUpdateManyInput
  owner: UserUpdateOneWithoutOwnedAnnotationTasksInput
  group: GroupUpdateOneWithoutOwnedAnnotationTasksInput
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
  creator: UserUpdateOneWithoutCreatedAnnotationTasksInput
}

input AnnotationTaskUpdateInput {
  assignees: UserUpdateManyWithoutAssignedAnnotationTasksInput
  displayName: String
  subjects: AnnotatableUpdateManyWithoutTasksInput
  requirements: Json
  classificationContexts: ClassificationContextUpdateManyInput
  classificationLabels: ClassificationLabelUpdateManyInput
  owner: UserUpdateOneWithoutOwnedAnnotationTasksInput
  group: GroupUpdateOneWithoutOwnedAnnotationTasksInput
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
  creator: UserUpdateOneWithoutCreatedAnnotationTasksInput
}

input AnnotationTaskUpdateManyWithoutAssigneesInput {
  create: [AnnotationTaskCreateWithoutAssigneesInput!]
  delete: [AnnotationTaskWhereUniqueInput!]
  connect: [AnnotationTaskWhereUniqueInput!]
  disconnect: [AnnotationTaskWhereUniqueInput!]
  update: [AnnotationTaskUpdateWithWhereUniqueWithoutAssigneesInput!]
  upsert: [AnnotationTaskUpsertWithWhereUniqueWithoutAssigneesInput!]
}

input AnnotationTaskUpdateManyWithoutCreatorInput {
  create: [AnnotationTaskCreateWithoutCreatorInput!]
  delete: [AnnotationTaskWhereUniqueInput!]
  connect: [AnnotationTaskWhereUniqueInput!]
  disconnect: [AnnotationTaskWhereUniqueInput!]
  update: [AnnotationTaskUpdateWithWhereUniqueWithoutCreatorInput!]
  upsert: [AnnotationTaskUpsertWithWhereUniqueWithoutCreatorInput!]
}

input AnnotationTaskUpdateManyWithoutGroupInput {
  create: [AnnotationTaskCreateWithoutGroupInput!]
  delete: [AnnotationTaskWhereUniqueInput!]
  connect: [AnnotationTaskWhereUniqueInput!]
  disconnect: [AnnotationTaskWhereUniqueInput!]
  update: [AnnotationTaskUpdateWithWhereUniqueWithoutGroupInput!]
  upsert: [AnnotationTaskUpsertWithWhereUniqueWithoutGroupInput!]
}

input AnnotationTaskUpdateManyWithoutOwnerInput {
  create: [AnnotationTaskCreateWithoutOwnerInput!]
  delete: [AnnotationTaskWhereUniqueInput!]
  connect: [AnnotationTaskWhereUniqueInput!]
  disconnect: [AnnotationTaskWhereUniqueInput!]
  update: [AnnotationTaskUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [AnnotationTaskUpsertWithWhereUniqueWithoutOwnerInput!]
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
  classificationContexts: ClassificationContextUpdateManyInput
  classificationLabels: ClassificationLabelUpdateManyInput
  owner: UserUpdateOneWithoutOwnedAnnotationTasksInput
  group: GroupUpdateOneWithoutOwnedAnnotationTasksInput
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
  creator: UserUpdateOneWithoutCreatedAnnotationTasksInput
}

input AnnotationTaskUpdateWithoutCreatorDataInput {
  assignees: UserUpdateManyWithoutAssignedAnnotationTasksInput
  displayName: String
  subjects: AnnotatableUpdateManyWithoutTasksInput
  requirements: Json
  classificationContexts: ClassificationContextUpdateManyInput
  classificationLabels: ClassificationLabelUpdateManyInput
  owner: UserUpdateOneWithoutOwnedAnnotationTasksInput
  group: GroupUpdateOneWithoutOwnedAnnotationTasksInput
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
}

input AnnotationTaskUpdateWithoutGroupDataInput {
  assignees: UserUpdateManyWithoutAssignedAnnotationTasksInput
  displayName: String
  subjects: AnnotatableUpdateManyWithoutTasksInput
  requirements: Json
  classificationContexts: ClassificationContextUpdateManyInput
  classificationLabels: ClassificationLabelUpdateManyInput
  owner: UserUpdateOneWithoutOwnedAnnotationTasksInput
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
  creator: UserUpdateOneWithoutCreatedAnnotationTasksInput
}

input AnnotationTaskUpdateWithoutOwnerDataInput {
  assignees: UserUpdateManyWithoutAssignedAnnotationTasksInput
  displayName: String
  subjects: AnnotatableUpdateManyWithoutTasksInput
  requirements: Json
  classificationContexts: ClassificationContextUpdateManyInput
  classificationLabels: ClassificationLabelUpdateManyInput
  group: GroupUpdateOneWithoutOwnedAnnotationTasksInput
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
  creator: UserUpdateOneWithoutCreatedAnnotationTasksInput
}

input AnnotationTaskUpdateWithoutSubjectsDataInput {
  assignees: UserUpdateManyWithoutAssignedAnnotationTasksInput
  displayName: String
  requirements: Json
  classificationContexts: ClassificationContextUpdateManyInput
  classificationLabels: ClassificationLabelUpdateManyInput
  owner: UserUpdateOneWithoutOwnedAnnotationTasksInput
  group: GroupUpdateOneWithoutOwnedAnnotationTasksInput
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
  creator: UserUpdateOneWithoutCreatedAnnotationTasksInput
}

input AnnotationTaskUpdateWithWhereUniqueWithoutAssigneesInput {
  where: AnnotationTaskWhereUniqueInput!
  data: AnnotationTaskUpdateWithoutAssigneesDataInput!
}

input AnnotationTaskUpdateWithWhereUniqueWithoutCreatorInput {
  where: AnnotationTaskWhereUniqueInput!
  data: AnnotationTaskUpdateWithoutCreatorDataInput!
}

input AnnotationTaskUpdateWithWhereUniqueWithoutGroupInput {
  where: AnnotationTaskWhereUniqueInput!
  data: AnnotationTaskUpdateWithoutGroupDataInput!
}

input AnnotationTaskUpdateWithWhereUniqueWithoutOwnerInput {
  where: AnnotationTaskWhereUniqueInput!
  data: AnnotationTaskUpdateWithoutOwnerDataInput!
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

input AnnotationTaskUpsertWithWhereUniqueWithoutCreatorInput {
  where: AnnotationTaskWhereUniqueInput!
  update: AnnotationTaskUpdateWithoutCreatorDataInput!
  create: AnnotationTaskCreateWithoutCreatorInput!
}

input AnnotationTaskUpsertWithWhereUniqueWithoutGroupInput {
  where: AnnotationTaskWhereUniqueInput!
  update: AnnotationTaskUpdateWithoutGroupDataInput!
  create: AnnotationTaskCreateWithoutGroupInput!
}

input AnnotationTaskUpsertWithWhereUniqueWithoutOwnerInput {
  where: AnnotationTaskWhereUniqueInput!
  update: AnnotationTaskUpdateWithoutOwnerDataInput!
  create: AnnotationTaskCreateWithoutOwnerInput!
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
  classificationContexts_every: ClassificationContextWhereInput
  classificationContexts_some: ClassificationContextWhereInput
  classificationContexts_none: ClassificationContextWhereInput
  classificationLabels_every: ClassificationLabelWhereInput
  classificationLabels_some: ClassificationLabelWhereInput
  classificationLabels_none: ClassificationLabelWhereInput
  owner: UserWhereInput
  group: GroupWhereInput
  anyoneCanView: Boolean
  anyoneCanView_not: Boolean
  anyoneCanJoin: Boolean
  anyoneCanJoin_not: Boolean
  creator: UserWhereInput
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
  classificationLabels: ClassificationLabelUpdateManyInput
  svgBounds: String
  convexHull: CgPointUpdateManyInput
  owner: UserUpdateOneWithoutOwnedAnnotationsInput
  group: GroupUpdateOneWithoutOwnedAnnotationsInput
  anyoneCanView: Boolean
  anyoneCanSuggestRevision: Boolean
  creator: UserUpdateOneWithoutCreatedAnnotationsInput
}

input AnnotationUpdateManyWithoutAnnotatorInput {
  create: [AnnotationCreateWithoutAnnotatorInput!]
  delete: [AnnotationWhereUniqueInput!]
  connect: [AnnotationWhereUniqueInput!]
  disconnect: [AnnotationWhereUniqueInput!]
  update: [AnnotationUpdateWithWhereUniqueWithoutAnnotatorInput!]
  upsert: [AnnotationUpsertWithWhereUniqueWithoutAnnotatorInput!]
}

input AnnotationUpdateManyWithoutCreatorInput {
  create: [AnnotationCreateWithoutCreatorInput!]
  delete: [AnnotationWhereUniqueInput!]
  connect: [AnnotationWhereUniqueInput!]
  disconnect: [AnnotationWhereUniqueInput!]
  update: [AnnotationUpdateWithWhereUniqueWithoutCreatorInput!]
  upsert: [AnnotationUpsertWithWhereUniqueWithoutCreatorInput!]
}

input AnnotationUpdateManyWithoutGroupInput {
  create: [AnnotationCreateWithoutGroupInput!]
  delete: [AnnotationWhereUniqueInput!]
  connect: [AnnotationWhereUniqueInput!]
  disconnect: [AnnotationWhereUniqueInput!]
  update: [AnnotationUpdateWithWhereUniqueWithoutGroupInput!]
  upsert: [AnnotationUpsertWithWhereUniqueWithoutGroupInput!]
}

input AnnotationUpdateManyWithoutOwnerInput {
  create: [AnnotationCreateWithoutOwnerInput!]
  delete: [AnnotationWhereUniqueInput!]
  connect: [AnnotationWhereUniqueInput!]
  disconnect: [AnnotationWhereUniqueInput!]
  update: [AnnotationUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [AnnotationUpsertWithWhereUniqueWithoutOwnerInput!]
}

input AnnotationUpdateWithoutAnnotatorDataInput {
  subject: AnnotatableUpdateOneRequiredInput
  task: AnnotationTaskUpdateOneInput
  data: Json
  classificationLabels: ClassificationLabelUpdateManyInput
  svgBounds: String
  convexHull: CgPointUpdateManyInput
  owner: UserUpdateOneWithoutOwnedAnnotationsInput
  group: GroupUpdateOneWithoutOwnedAnnotationsInput
  anyoneCanView: Boolean
  anyoneCanSuggestRevision: Boolean
  creator: UserUpdateOneWithoutCreatedAnnotationsInput
}

input AnnotationUpdateWithoutCreatorDataInput {
  annotator: UserUpdateOneRequiredWithoutAnnotationsInput
  subject: AnnotatableUpdateOneRequiredInput
  task: AnnotationTaskUpdateOneInput
  data: Json
  classificationLabels: ClassificationLabelUpdateManyInput
  svgBounds: String
  convexHull: CgPointUpdateManyInput
  owner: UserUpdateOneWithoutOwnedAnnotationsInput
  group: GroupUpdateOneWithoutOwnedAnnotationsInput
  anyoneCanView: Boolean
  anyoneCanSuggestRevision: Boolean
}

input AnnotationUpdateWithoutGroupDataInput {
  annotator: UserUpdateOneRequiredWithoutAnnotationsInput
  subject: AnnotatableUpdateOneRequiredInput
  task: AnnotationTaskUpdateOneInput
  data: Json
  classificationLabels: ClassificationLabelUpdateManyInput
  svgBounds: String
  convexHull: CgPointUpdateManyInput
  owner: UserUpdateOneWithoutOwnedAnnotationsInput
  anyoneCanView: Boolean
  anyoneCanSuggestRevision: Boolean
  creator: UserUpdateOneWithoutCreatedAnnotationsInput
}

input AnnotationUpdateWithoutOwnerDataInput {
  annotator: UserUpdateOneRequiredWithoutAnnotationsInput
  subject: AnnotatableUpdateOneRequiredInput
  task: AnnotationTaskUpdateOneInput
  data: Json
  classificationLabels: ClassificationLabelUpdateManyInput
  svgBounds: String
  convexHull: CgPointUpdateManyInput
  group: GroupUpdateOneWithoutOwnedAnnotationsInput
  anyoneCanView: Boolean
  anyoneCanSuggestRevision: Boolean
  creator: UserUpdateOneWithoutCreatedAnnotationsInput
}

input AnnotationUpdateWithWhereUniqueWithoutAnnotatorInput {
  where: AnnotationWhereUniqueInput!
  data: AnnotationUpdateWithoutAnnotatorDataInput!
}

input AnnotationUpdateWithWhereUniqueWithoutCreatorInput {
  where: AnnotationWhereUniqueInput!
  data: AnnotationUpdateWithoutCreatorDataInput!
}

input AnnotationUpdateWithWhereUniqueWithoutGroupInput {
  where: AnnotationWhereUniqueInput!
  data: AnnotationUpdateWithoutGroupDataInput!
}

input AnnotationUpdateWithWhereUniqueWithoutOwnerInput {
  where: AnnotationWhereUniqueInput!
  data: AnnotationUpdateWithoutOwnerDataInput!
}

input AnnotationUpsertWithWhereUniqueWithoutAnnotatorInput {
  where: AnnotationWhereUniqueInput!
  update: AnnotationUpdateWithoutAnnotatorDataInput!
  create: AnnotationCreateWithoutAnnotatorInput!
}

input AnnotationUpsertWithWhereUniqueWithoutCreatorInput {
  where: AnnotationWhereUniqueInput!
  update: AnnotationUpdateWithoutCreatorDataInput!
  create: AnnotationCreateWithoutCreatorInput!
}

input AnnotationUpsertWithWhereUniqueWithoutGroupInput {
  where: AnnotationWhereUniqueInput!
  update: AnnotationUpdateWithoutGroupDataInput!
  create: AnnotationCreateWithoutGroupInput!
}

input AnnotationUpsertWithWhereUniqueWithoutOwnerInput {
  where: AnnotationWhereUniqueInput!
  update: AnnotationUpdateWithoutOwnerDataInput!
  create: AnnotationCreateWithoutOwnerInput!
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
  classificationLabels_every: ClassificationLabelWhereInput
  classificationLabels_some: ClassificationLabelWhereInput
  classificationLabels_none: ClassificationLabelWhereInput
  svgBounds: String
  svgBounds_not: String
  svgBounds_in: [String!]
  svgBounds_not_in: [String!]
  svgBounds_lt: String
  svgBounds_lte: String
  svgBounds_gt: String
  svgBounds_gte: String
  svgBounds_contains: String
  svgBounds_not_contains: String
  svgBounds_starts_with: String
  svgBounds_not_starts_with: String
  svgBounds_ends_with: String
  svgBounds_not_ends_with: String
  convexHull_every: CgPointWhereInput
  convexHull_some: CgPointWhereInput
  convexHull_none: CgPointWhereInput
  owner: UserWhereInput
  group: GroupWhereInput
  anyoneCanView: Boolean
  anyoneCanView_not: Boolean
  anyoneCanSuggestRevision: Boolean
  anyoneCanSuggestRevision_not: Boolean
  creator: UserWhereInput
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

type CgPoint {
  id: ID!
  x: Float!
  y: Float!
  xMin: Float
  yMin: Float
  xMax: Float
  yMax: Float
  createdAt: DateTime!
  updatedAt: DateTime!
}

type CgPointConnection {
  pageInfo: PageInfo!
  edges: [CgPointEdge]!
  aggregate: AggregateCgPoint!
}

input CgPointCreateInput {
  x: Float!
  y: Float!
  xMin: Float
  yMin: Float
  xMax: Float
  yMax: Float
}

input CgPointCreateManyInput {
  create: [CgPointCreateInput!]
  connect: [CgPointWhereUniqueInput!]
}

type CgPointEdge {
  node: CgPoint!
  cursor: String!
}

enum CgPointOrderByInput {
  id_ASC
  id_DESC
  x_ASC
  x_DESC
  y_ASC
  y_DESC
  xMin_ASC
  xMin_DESC
  yMin_ASC
  yMin_DESC
  xMax_ASC
  xMax_DESC
  yMax_ASC
  yMax_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CgPointPreviousValues {
  id: ID!
  x: Float!
  y: Float!
  xMin: Float
  yMin: Float
  xMax: Float
  yMax: Float
  createdAt: DateTime!
  updatedAt: DateTime!
}

type CgPointSubscriptionPayload {
  mutation: MutationType!
  node: CgPoint
  updatedFields: [String!]
  previousValues: CgPointPreviousValues
}

input CgPointSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CgPointWhereInput
  AND: [CgPointSubscriptionWhereInput!]
  OR: [CgPointSubscriptionWhereInput!]
  NOT: [CgPointSubscriptionWhereInput!]
}

input CgPointUpdateDataInput {
  x: Float
  y: Float
  xMin: Float
  yMin: Float
  xMax: Float
  yMax: Float
}

input CgPointUpdateInput {
  x: Float
  y: Float
  xMin: Float
  yMin: Float
  xMax: Float
  yMax: Float
}

input CgPointUpdateManyInput {
  create: [CgPointCreateInput!]
  delete: [CgPointWhereUniqueInput!]
  connect: [CgPointWhereUniqueInput!]
  disconnect: [CgPointWhereUniqueInput!]
  update: [CgPointUpdateWithWhereUniqueNestedInput!]
  upsert: [CgPointUpsertWithWhereUniqueNestedInput!]
}

input CgPointUpdateWithWhereUniqueNestedInput {
  where: CgPointWhereUniqueInput!
  data: CgPointUpdateDataInput!
}

input CgPointUpsertWithWhereUniqueNestedInput {
  where: CgPointWhereUniqueInput!
  update: CgPointUpdateDataInput!
  create: CgPointCreateInput!
}

input CgPointWhereInput {
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
  x: Float
  x_not: Float
  x_in: [Float!]
  x_not_in: [Float!]
  x_lt: Float
  x_lte: Float
  x_gt: Float
  x_gte: Float
  y: Float
  y_not: Float
  y_in: [Float!]
  y_not_in: [Float!]
  y_lt: Float
  y_lte: Float
  y_gt: Float
  y_gte: Float
  xMin: Float
  xMin_not: Float
  xMin_in: [Float!]
  xMin_not_in: [Float!]
  xMin_lt: Float
  xMin_lte: Float
  xMin_gt: Float
  xMin_gte: Float
  yMin: Float
  yMin_not: Float
  yMin_in: [Float!]
  yMin_not_in: [Float!]
  yMin_lt: Float
  yMin_lte: Float
  yMin_gt: Float
  yMin_gte: Float
  xMax: Float
  xMax_not: Float
  xMax_in: [Float!]
  xMax_not_in: [Float!]
  xMax_lt: Float
  xMax_lte: Float
  xMax_gt: Float
  xMax_gte: Float
  yMax: Float
  yMax_not: Float
  yMax_in: [Float!]
  yMax_not_in: [Float!]
  yMax_lt: Float
  yMax_lte: Float
  yMax_gt: Float
  yMax_gte: Float
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
  AND: [CgPointWhereInput!]
  OR: [CgPointWhereInput!]
  NOT: [CgPointWhereInput!]
}

input CgPointWhereUniqueInput {
  id: ID
}

type ClassificationContext {
  id: ID!
  slug: String!
  displayName: String!
  infoHtml: String
  infoData: Json
  labels(where: ClassificationLabelWhereInput, orderBy: ClassificationLabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassificationLabel!]
  owner: User
  group: Group
  anyoneCanUse: Boolean!
  anyoneCanAddLabels: Boolean!
  anyoneCanEditLabels: Boolean!
  anyoneCanUpdateInfo: Boolean!
  creator: User
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ClassificationContextConnection {
  pageInfo: PageInfo!
  edges: [ClassificationContextEdge]!
  aggregate: AggregateClassificationContext!
}

input ClassificationContextCreateInput {
  slug: String!
  displayName: String!
  infoHtml: String
  infoData: Json
  labels: ClassificationLabelCreateManyWithoutContextsInput
  owner: UserCreateOneWithoutOwnedClassificationContextsInput
  group: GroupCreateOneWithoutOwnedClassificationContextsInput
  anyoneCanUse: Boolean
  anyoneCanAddLabels: Boolean
  anyoneCanEditLabels: Boolean
  anyoneCanUpdateInfo: Boolean
  creator: UserCreateOneWithoutCreatedClassificationContextsInput
}

input ClassificationContextCreateManyInput {
  create: [ClassificationContextCreateInput!]
  connect: [ClassificationContextWhereUniqueInput!]
}

input ClassificationContextCreateManyWithoutCreatorInput {
  create: [ClassificationContextCreateWithoutCreatorInput!]
  connect: [ClassificationContextWhereUniqueInput!]
}

input ClassificationContextCreateManyWithoutGroupInput {
  create: [ClassificationContextCreateWithoutGroupInput!]
  connect: [ClassificationContextWhereUniqueInput!]
}

input ClassificationContextCreateManyWithoutLabelsInput {
  create: [ClassificationContextCreateWithoutLabelsInput!]
  connect: [ClassificationContextWhereUniqueInput!]
}

input ClassificationContextCreateManyWithoutOwnerInput {
  create: [ClassificationContextCreateWithoutOwnerInput!]
  connect: [ClassificationContextWhereUniqueInput!]
}

input ClassificationContextCreateWithoutCreatorInput {
  slug: String!
  displayName: String!
  infoHtml: String
  infoData: Json
  labels: ClassificationLabelCreateManyWithoutContextsInput
  owner: UserCreateOneWithoutOwnedClassificationContextsInput
  group: GroupCreateOneWithoutOwnedClassificationContextsInput
  anyoneCanUse: Boolean
  anyoneCanAddLabels: Boolean
  anyoneCanEditLabels: Boolean
  anyoneCanUpdateInfo: Boolean
}

input ClassificationContextCreateWithoutGroupInput {
  slug: String!
  displayName: String!
  infoHtml: String
  infoData: Json
  labels: ClassificationLabelCreateManyWithoutContextsInput
  owner: UserCreateOneWithoutOwnedClassificationContextsInput
  anyoneCanUse: Boolean
  anyoneCanAddLabels: Boolean
  anyoneCanEditLabels: Boolean
  anyoneCanUpdateInfo: Boolean
  creator: UserCreateOneWithoutCreatedClassificationContextsInput
}

input ClassificationContextCreateWithoutLabelsInput {
  slug: String!
  displayName: String!
  infoHtml: String
  infoData: Json
  owner: UserCreateOneWithoutOwnedClassificationContextsInput
  group: GroupCreateOneWithoutOwnedClassificationContextsInput
  anyoneCanUse: Boolean
  anyoneCanAddLabels: Boolean
  anyoneCanEditLabels: Boolean
  anyoneCanUpdateInfo: Boolean
  creator: UserCreateOneWithoutCreatedClassificationContextsInput
}

input ClassificationContextCreateWithoutOwnerInput {
  slug: String!
  displayName: String!
  infoHtml: String
  infoData: Json
  labels: ClassificationLabelCreateManyWithoutContextsInput
  group: GroupCreateOneWithoutOwnedClassificationContextsInput
  anyoneCanUse: Boolean
  anyoneCanAddLabels: Boolean
  anyoneCanEditLabels: Boolean
  anyoneCanUpdateInfo: Boolean
  creator: UserCreateOneWithoutCreatedClassificationContextsInput
}

type ClassificationContextEdge {
  node: ClassificationContext!
  cursor: String!
}

enum ClassificationContextOrderByInput {
  id_ASC
  id_DESC
  slug_ASC
  slug_DESC
  displayName_ASC
  displayName_DESC
  infoHtml_ASC
  infoHtml_DESC
  infoData_ASC
  infoData_DESC
  anyoneCanUse_ASC
  anyoneCanUse_DESC
  anyoneCanAddLabels_ASC
  anyoneCanAddLabels_DESC
  anyoneCanEditLabels_ASC
  anyoneCanEditLabels_DESC
  anyoneCanUpdateInfo_ASC
  anyoneCanUpdateInfo_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ClassificationContextPreviousValues {
  id: ID!
  slug: String!
  displayName: String!
  infoHtml: String
  infoData: Json
  anyoneCanUse: Boolean!
  anyoneCanAddLabels: Boolean!
  anyoneCanEditLabels: Boolean!
  anyoneCanUpdateInfo: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ClassificationContextSubscriptionPayload {
  mutation: MutationType!
  node: ClassificationContext
  updatedFields: [String!]
  previousValues: ClassificationContextPreviousValues
}

input ClassificationContextSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ClassificationContextWhereInput
  AND: [ClassificationContextSubscriptionWhereInput!]
  OR: [ClassificationContextSubscriptionWhereInput!]
  NOT: [ClassificationContextSubscriptionWhereInput!]
}

input ClassificationContextUpdateDataInput {
  slug: String
  displayName: String
  infoHtml: String
  infoData: Json
  labels: ClassificationLabelUpdateManyWithoutContextsInput
  owner: UserUpdateOneWithoutOwnedClassificationContextsInput
  group: GroupUpdateOneWithoutOwnedClassificationContextsInput
  anyoneCanUse: Boolean
  anyoneCanAddLabels: Boolean
  anyoneCanEditLabels: Boolean
  anyoneCanUpdateInfo: Boolean
  creator: UserUpdateOneWithoutCreatedClassificationContextsInput
}

input ClassificationContextUpdateInput {
  slug: String
  displayName: String
  infoHtml: String
  infoData: Json
  labels: ClassificationLabelUpdateManyWithoutContextsInput
  owner: UserUpdateOneWithoutOwnedClassificationContextsInput
  group: GroupUpdateOneWithoutOwnedClassificationContextsInput
  anyoneCanUse: Boolean
  anyoneCanAddLabels: Boolean
  anyoneCanEditLabels: Boolean
  anyoneCanUpdateInfo: Boolean
  creator: UserUpdateOneWithoutCreatedClassificationContextsInput
}

input ClassificationContextUpdateManyInput {
  create: [ClassificationContextCreateInput!]
  delete: [ClassificationContextWhereUniqueInput!]
  connect: [ClassificationContextWhereUniqueInput!]
  disconnect: [ClassificationContextWhereUniqueInput!]
  update: [ClassificationContextUpdateWithWhereUniqueNestedInput!]
  upsert: [ClassificationContextUpsertWithWhereUniqueNestedInput!]
}

input ClassificationContextUpdateManyWithoutCreatorInput {
  create: [ClassificationContextCreateWithoutCreatorInput!]
  delete: [ClassificationContextWhereUniqueInput!]
  connect: [ClassificationContextWhereUniqueInput!]
  disconnect: [ClassificationContextWhereUniqueInput!]
  update: [ClassificationContextUpdateWithWhereUniqueWithoutCreatorInput!]
  upsert: [ClassificationContextUpsertWithWhereUniqueWithoutCreatorInput!]
}

input ClassificationContextUpdateManyWithoutGroupInput {
  create: [ClassificationContextCreateWithoutGroupInput!]
  delete: [ClassificationContextWhereUniqueInput!]
  connect: [ClassificationContextWhereUniqueInput!]
  disconnect: [ClassificationContextWhereUniqueInput!]
  update: [ClassificationContextUpdateWithWhereUniqueWithoutGroupInput!]
  upsert: [ClassificationContextUpsertWithWhereUniqueWithoutGroupInput!]
}

input ClassificationContextUpdateManyWithoutLabelsInput {
  create: [ClassificationContextCreateWithoutLabelsInput!]
  delete: [ClassificationContextWhereUniqueInput!]
  connect: [ClassificationContextWhereUniqueInput!]
  disconnect: [ClassificationContextWhereUniqueInput!]
  update: [ClassificationContextUpdateWithWhereUniqueWithoutLabelsInput!]
  upsert: [ClassificationContextUpsertWithWhereUniqueWithoutLabelsInput!]
}

input ClassificationContextUpdateManyWithoutOwnerInput {
  create: [ClassificationContextCreateWithoutOwnerInput!]
  delete: [ClassificationContextWhereUniqueInput!]
  connect: [ClassificationContextWhereUniqueInput!]
  disconnect: [ClassificationContextWhereUniqueInput!]
  update: [ClassificationContextUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [ClassificationContextUpsertWithWhereUniqueWithoutOwnerInput!]
}

input ClassificationContextUpdateWithoutCreatorDataInput {
  slug: String
  displayName: String
  infoHtml: String
  infoData: Json
  labels: ClassificationLabelUpdateManyWithoutContextsInput
  owner: UserUpdateOneWithoutOwnedClassificationContextsInput
  group: GroupUpdateOneWithoutOwnedClassificationContextsInput
  anyoneCanUse: Boolean
  anyoneCanAddLabels: Boolean
  anyoneCanEditLabels: Boolean
  anyoneCanUpdateInfo: Boolean
}

input ClassificationContextUpdateWithoutGroupDataInput {
  slug: String
  displayName: String
  infoHtml: String
  infoData: Json
  labels: ClassificationLabelUpdateManyWithoutContextsInput
  owner: UserUpdateOneWithoutOwnedClassificationContextsInput
  anyoneCanUse: Boolean
  anyoneCanAddLabels: Boolean
  anyoneCanEditLabels: Boolean
  anyoneCanUpdateInfo: Boolean
  creator: UserUpdateOneWithoutCreatedClassificationContextsInput
}

input ClassificationContextUpdateWithoutLabelsDataInput {
  slug: String
  displayName: String
  infoHtml: String
  infoData: Json
  owner: UserUpdateOneWithoutOwnedClassificationContextsInput
  group: GroupUpdateOneWithoutOwnedClassificationContextsInput
  anyoneCanUse: Boolean
  anyoneCanAddLabels: Boolean
  anyoneCanEditLabels: Boolean
  anyoneCanUpdateInfo: Boolean
  creator: UserUpdateOneWithoutCreatedClassificationContextsInput
}

input ClassificationContextUpdateWithoutOwnerDataInput {
  slug: String
  displayName: String
  infoHtml: String
  infoData: Json
  labels: ClassificationLabelUpdateManyWithoutContextsInput
  group: GroupUpdateOneWithoutOwnedClassificationContextsInput
  anyoneCanUse: Boolean
  anyoneCanAddLabels: Boolean
  anyoneCanEditLabels: Boolean
  anyoneCanUpdateInfo: Boolean
  creator: UserUpdateOneWithoutCreatedClassificationContextsInput
}

input ClassificationContextUpdateWithWhereUniqueNestedInput {
  where: ClassificationContextWhereUniqueInput!
  data: ClassificationContextUpdateDataInput!
}

input ClassificationContextUpdateWithWhereUniqueWithoutCreatorInput {
  where: ClassificationContextWhereUniqueInput!
  data: ClassificationContextUpdateWithoutCreatorDataInput!
}

input ClassificationContextUpdateWithWhereUniqueWithoutGroupInput {
  where: ClassificationContextWhereUniqueInput!
  data: ClassificationContextUpdateWithoutGroupDataInput!
}

input ClassificationContextUpdateWithWhereUniqueWithoutLabelsInput {
  where: ClassificationContextWhereUniqueInput!
  data: ClassificationContextUpdateWithoutLabelsDataInput!
}

input ClassificationContextUpdateWithWhereUniqueWithoutOwnerInput {
  where: ClassificationContextWhereUniqueInput!
  data: ClassificationContextUpdateWithoutOwnerDataInput!
}

input ClassificationContextUpsertWithWhereUniqueNestedInput {
  where: ClassificationContextWhereUniqueInput!
  update: ClassificationContextUpdateDataInput!
  create: ClassificationContextCreateInput!
}

input ClassificationContextUpsertWithWhereUniqueWithoutCreatorInput {
  where: ClassificationContextWhereUniqueInput!
  update: ClassificationContextUpdateWithoutCreatorDataInput!
  create: ClassificationContextCreateWithoutCreatorInput!
}

input ClassificationContextUpsertWithWhereUniqueWithoutGroupInput {
  where: ClassificationContextWhereUniqueInput!
  update: ClassificationContextUpdateWithoutGroupDataInput!
  create: ClassificationContextCreateWithoutGroupInput!
}

input ClassificationContextUpsertWithWhereUniqueWithoutLabelsInput {
  where: ClassificationContextWhereUniqueInput!
  update: ClassificationContextUpdateWithoutLabelsDataInput!
  create: ClassificationContextCreateWithoutLabelsInput!
}

input ClassificationContextUpsertWithWhereUniqueWithoutOwnerInput {
  where: ClassificationContextWhereUniqueInput!
  update: ClassificationContextUpdateWithoutOwnerDataInput!
  create: ClassificationContextCreateWithoutOwnerInput!
}

input ClassificationContextWhereInput {
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
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
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
  infoHtml: String
  infoHtml_not: String
  infoHtml_in: [String!]
  infoHtml_not_in: [String!]
  infoHtml_lt: String
  infoHtml_lte: String
  infoHtml_gt: String
  infoHtml_gte: String
  infoHtml_contains: String
  infoHtml_not_contains: String
  infoHtml_starts_with: String
  infoHtml_not_starts_with: String
  infoHtml_ends_with: String
  infoHtml_not_ends_with: String
  labels_every: ClassificationLabelWhereInput
  labels_some: ClassificationLabelWhereInput
  labels_none: ClassificationLabelWhereInput
  owner: UserWhereInput
  group: GroupWhereInput
  anyoneCanUse: Boolean
  anyoneCanUse_not: Boolean
  anyoneCanAddLabels: Boolean
  anyoneCanAddLabels_not: Boolean
  anyoneCanEditLabels: Boolean
  anyoneCanEditLabels_not: Boolean
  anyoneCanUpdateInfo: Boolean
  anyoneCanUpdateInfo_not: Boolean
  creator: UserWhereInput
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
  AND: [ClassificationContextWhereInput!]
  OR: [ClassificationContextWhereInput!]
  NOT: [ClassificationContextWhereInput!]
}

input ClassificationContextWhereUniqueInput {
  id: ID
}

type ClassificationLabel {
  id: ID!
  slug: String!
  displayName: String!
  infoHtml: String
  infoData: Json
  contexts(where: ClassificationContextWhereInput, orderBy: ClassificationContextOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassificationContext!]
  owner: User
  group: Group
  anyoneCanUse: Boolean!
  anyoneCanEditInfo: Boolean!
  creator: User
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ClassificationLabelConnection {
  pageInfo: PageInfo!
  edges: [ClassificationLabelEdge]!
  aggregate: AggregateClassificationLabel!
}

input ClassificationLabelCreateInput {
  slug: String!
  displayName: String!
  infoHtml: String
  infoData: Json
  contexts: ClassificationContextCreateManyWithoutLabelsInput
  owner: UserCreateOneWithoutOwnedClassificationLabelsInput
  group: GroupCreateOneWithoutOwnedClassificationLabelsInput
  anyoneCanUse: Boolean
  anyoneCanEditInfo: Boolean
  creator: UserCreateOneWithoutCreatedClassificationLabelsInput
}

input ClassificationLabelCreateManyInput {
  create: [ClassificationLabelCreateInput!]
  connect: [ClassificationLabelWhereUniqueInput!]
}

input ClassificationLabelCreateManyWithoutContextsInput {
  create: [ClassificationLabelCreateWithoutContextsInput!]
  connect: [ClassificationLabelWhereUniqueInput!]
}

input ClassificationLabelCreateManyWithoutCreatorInput {
  create: [ClassificationLabelCreateWithoutCreatorInput!]
  connect: [ClassificationLabelWhereUniqueInput!]
}

input ClassificationLabelCreateManyWithoutGroupInput {
  create: [ClassificationLabelCreateWithoutGroupInput!]
  connect: [ClassificationLabelWhereUniqueInput!]
}

input ClassificationLabelCreateManyWithoutOwnerInput {
  create: [ClassificationLabelCreateWithoutOwnerInput!]
  connect: [ClassificationLabelWhereUniqueInput!]
}

input ClassificationLabelCreateWithoutContextsInput {
  slug: String!
  displayName: String!
  infoHtml: String
  infoData: Json
  owner: UserCreateOneWithoutOwnedClassificationLabelsInput
  group: GroupCreateOneWithoutOwnedClassificationLabelsInput
  anyoneCanUse: Boolean
  anyoneCanEditInfo: Boolean
  creator: UserCreateOneWithoutCreatedClassificationLabelsInput
}

input ClassificationLabelCreateWithoutCreatorInput {
  slug: String!
  displayName: String!
  infoHtml: String
  infoData: Json
  contexts: ClassificationContextCreateManyWithoutLabelsInput
  owner: UserCreateOneWithoutOwnedClassificationLabelsInput
  group: GroupCreateOneWithoutOwnedClassificationLabelsInput
  anyoneCanUse: Boolean
  anyoneCanEditInfo: Boolean
}

input ClassificationLabelCreateWithoutGroupInput {
  slug: String!
  displayName: String!
  infoHtml: String
  infoData: Json
  contexts: ClassificationContextCreateManyWithoutLabelsInput
  owner: UserCreateOneWithoutOwnedClassificationLabelsInput
  anyoneCanUse: Boolean
  anyoneCanEditInfo: Boolean
  creator: UserCreateOneWithoutCreatedClassificationLabelsInput
}

input ClassificationLabelCreateWithoutOwnerInput {
  slug: String!
  displayName: String!
  infoHtml: String
  infoData: Json
  contexts: ClassificationContextCreateManyWithoutLabelsInput
  group: GroupCreateOneWithoutOwnedClassificationLabelsInput
  anyoneCanUse: Boolean
  anyoneCanEditInfo: Boolean
  creator: UserCreateOneWithoutCreatedClassificationLabelsInput
}

type ClassificationLabelEdge {
  node: ClassificationLabel!
  cursor: String!
}

enum ClassificationLabelOrderByInput {
  id_ASC
  id_DESC
  slug_ASC
  slug_DESC
  displayName_ASC
  displayName_DESC
  infoHtml_ASC
  infoHtml_DESC
  infoData_ASC
  infoData_DESC
  anyoneCanUse_ASC
  anyoneCanUse_DESC
  anyoneCanEditInfo_ASC
  anyoneCanEditInfo_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ClassificationLabelPreviousValues {
  id: ID!
  slug: String!
  displayName: String!
  infoHtml: String
  infoData: Json
  anyoneCanUse: Boolean!
  anyoneCanEditInfo: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ClassificationLabelSubscriptionPayload {
  mutation: MutationType!
  node: ClassificationLabel
  updatedFields: [String!]
  previousValues: ClassificationLabelPreviousValues
}

input ClassificationLabelSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ClassificationLabelWhereInput
  AND: [ClassificationLabelSubscriptionWhereInput!]
  OR: [ClassificationLabelSubscriptionWhereInput!]
  NOT: [ClassificationLabelSubscriptionWhereInput!]
}

input ClassificationLabelUpdateDataInput {
  slug: String
  displayName: String
  infoHtml: String
  infoData: Json
  contexts: ClassificationContextUpdateManyWithoutLabelsInput
  owner: UserUpdateOneWithoutOwnedClassificationLabelsInput
  group: GroupUpdateOneWithoutOwnedClassificationLabelsInput
  anyoneCanUse: Boolean
  anyoneCanEditInfo: Boolean
  creator: UserUpdateOneWithoutCreatedClassificationLabelsInput
}

input ClassificationLabelUpdateInput {
  slug: String
  displayName: String
  infoHtml: String
  infoData: Json
  contexts: ClassificationContextUpdateManyWithoutLabelsInput
  owner: UserUpdateOneWithoutOwnedClassificationLabelsInput
  group: GroupUpdateOneWithoutOwnedClassificationLabelsInput
  anyoneCanUse: Boolean
  anyoneCanEditInfo: Boolean
  creator: UserUpdateOneWithoutCreatedClassificationLabelsInput
}

input ClassificationLabelUpdateManyInput {
  create: [ClassificationLabelCreateInput!]
  delete: [ClassificationLabelWhereUniqueInput!]
  connect: [ClassificationLabelWhereUniqueInput!]
  disconnect: [ClassificationLabelWhereUniqueInput!]
  update: [ClassificationLabelUpdateWithWhereUniqueNestedInput!]
  upsert: [ClassificationLabelUpsertWithWhereUniqueNestedInput!]
}

input ClassificationLabelUpdateManyWithoutContextsInput {
  create: [ClassificationLabelCreateWithoutContextsInput!]
  delete: [ClassificationLabelWhereUniqueInput!]
  connect: [ClassificationLabelWhereUniqueInput!]
  disconnect: [ClassificationLabelWhereUniqueInput!]
  update: [ClassificationLabelUpdateWithWhereUniqueWithoutContextsInput!]
  upsert: [ClassificationLabelUpsertWithWhereUniqueWithoutContextsInput!]
}

input ClassificationLabelUpdateManyWithoutCreatorInput {
  create: [ClassificationLabelCreateWithoutCreatorInput!]
  delete: [ClassificationLabelWhereUniqueInput!]
  connect: [ClassificationLabelWhereUniqueInput!]
  disconnect: [ClassificationLabelWhereUniqueInput!]
  update: [ClassificationLabelUpdateWithWhereUniqueWithoutCreatorInput!]
  upsert: [ClassificationLabelUpsertWithWhereUniqueWithoutCreatorInput!]
}

input ClassificationLabelUpdateManyWithoutGroupInput {
  create: [ClassificationLabelCreateWithoutGroupInput!]
  delete: [ClassificationLabelWhereUniqueInput!]
  connect: [ClassificationLabelWhereUniqueInput!]
  disconnect: [ClassificationLabelWhereUniqueInput!]
  update: [ClassificationLabelUpdateWithWhereUniqueWithoutGroupInput!]
  upsert: [ClassificationLabelUpsertWithWhereUniqueWithoutGroupInput!]
}

input ClassificationLabelUpdateManyWithoutOwnerInput {
  create: [ClassificationLabelCreateWithoutOwnerInput!]
  delete: [ClassificationLabelWhereUniqueInput!]
  connect: [ClassificationLabelWhereUniqueInput!]
  disconnect: [ClassificationLabelWhereUniqueInput!]
  update: [ClassificationLabelUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [ClassificationLabelUpsertWithWhereUniqueWithoutOwnerInput!]
}

input ClassificationLabelUpdateWithoutContextsDataInput {
  slug: String
  displayName: String
  infoHtml: String
  infoData: Json
  owner: UserUpdateOneWithoutOwnedClassificationLabelsInput
  group: GroupUpdateOneWithoutOwnedClassificationLabelsInput
  anyoneCanUse: Boolean
  anyoneCanEditInfo: Boolean
  creator: UserUpdateOneWithoutCreatedClassificationLabelsInput
}

input ClassificationLabelUpdateWithoutCreatorDataInput {
  slug: String
  displayName: String
  infoHtml: String
  infoData: Json
  contexts: ClassificationContextUpdateManyWithoutLabelsInput
  owner: UserUpdateOneWithoutOwnedClassificationLabelsInput
  group: GroupUpdateOneWithoutOwnedClassificationLabelsInput
  anyoneCanUse: Boolean
  anyoneCanEditInfo: Boolean
}

input ClassificationLabelUpdateWithoutGroupDataInput {
  slug: String
  displayName: String
  infoHtml: String
  infoData: Json
  contexts: ClassificationContextUpdateManyWithoutLabelsInput
  owner: UserUpdateOneWithoutOwnedClassificationLabelsInput
  anyoneCanUse: Boolean
  anyoneCanEditInfo: Boolean
  creator: UserUpdateOneWithoutCreatedClassificationLabelsInput
}

input ClassificationLabelUpdateWithoutOwnerDataInput {
  slug: String
  displayName: String
  infoHtml: String
  infoData: Json
  contexts: ClassificationContextUpdateManyWithoutLabelsInput
  group: GroupUpdateOneWithoutOwnedClassificationLabelsInput
  anyoneCanUse: Boolean
  anyoneCanEditInfo: Boolean
  creator: UserUpdateOneWithoutCreatedClassificationLabelsInput
}

input ClassificationLabelUpdateWithWhereUniqueNestedInput {
  where: ClassificationLabelWhereUniqueInput!
  data: ClassificationLabelUpdateDataInput!
}

input ClassificationLabelUpdateWithWhereUniqueWithoutContextsInput {
  where: ClassificationLabelWhereUniqueInput!
  data: ClassificationLabelUpdateWithoutContextsDataInput!
}

input ClassificationLabelUpdateWithWhereUniqueWithoutCreatorInput {
  where: ClassificationLabelWhereUniqueInput!
  data: ClassificationLabelUpdateWithoutCreatorDataInput!
}

input ClassificationLabelUpdateWithWhereUniqueWithoutGroupInput {
  where: ClassificationLabelWhereUniqueInput!
  data: ClassificationLabelUpdateWithoutGroupDataInput!
}

input ClassificationLabelUpdateWithWhereUniqueWithoutOwnerInput {
  where: ClassificationLabelWhereUniqueInput!
  data: ClassificationLabelUpdateWithoutOwnerDataInput!
}

input ClassificationLabelUpsertWithWhereUniqueNestedInput {
  where: ClassificationLabelWhereUniqueInput!
  update: ClassificationLabelUpdateDataInput!
  create: ClassificationLabelCreateInput!
}

input ClassificationLabelUpsertWithWhereUniqueWithoutContextsInput {
  where: ClassificationLabelWhereUniqueInput!
  update: ClassificationLabelUpdateWithoutContextsDataInput!
  create: ClassificationLabelCreateWithoutContextsInput!
}

input ClassificationLabelUpsertWithWhereUniqueWithoutCreatorInput {
  where: ClassificationLabelWhereUniqueInput!
  update: ClassificationLabelUpdateWithoutCreatorDataInput!
  create: ClassificationLabelCreateWithoutCreatorInput!
}

input ClassificationLabelUpsertWithWhereUniqueWithoutGroupInput {
  where: ClassificationLabelWhereUniqueInput!
  update: ClassificationLabelUpdateWithoutGroupDataInput!
  create: ClassificationLabelCreateWithoutGroupInput!
}

input ClassificationLabelUpsertWithWhereUniqueWithoutOwnerInput {
  where: ClassificationLabelWhereUniqueInput!
  update: ClassificationLabelUpdateWithoutOwnerDataInput!
  create: ClassificationLabelCreateWithoutOwnerInput!
}

input ClassificationLabelWhereInput {
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
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
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
  infoHtml: String
  infoHtml_not: String
  infoHtml_in: [String!]
  infoHtml_not_in: [String!]
  infoHtml_lt: String
  infoHtml_lte: String
  infoHtml_gt: String
  infoHtml_gte: String
  infoHtml_contains: String
  infoHtml_not_contains: String
  infoHtml_starts_with: String
  infoHtml_not_starts_with: String
  infoHtml_ends_with: String
  infoHtml_not_ends_with: String
  contexts_every: ClassificationContextWhereInput
  contexts_some: ClassificationContextWhereInput
  contexts_none: ClassificationContextWhereInput
  owner: UserWhereInput
  group: GroupWhereInput
  anyoneCanUse: Boolean
  anyoneCanUse_not: Boolean
  anyoneCanEditInfo: Boolean
  anyoneCanEditInfo_not: Boolean
  creator: UserWhereInput
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
  AND: [ClassificationLabelWhereInput!]
  OR: [ClassificationLabelWhereInput!]
  NOT: [ClassificationLabelWhereInput!]
}

input ClassificationLabelWhereUniqueInput {
  id: ID
}

scalar DateTime

type Group {
  id: ID!
  displayName: String!
  memberUsers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  memberGroups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group!]
  memberOfGroups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group!]
  ownedAnnotatables(where: AnnotatableWhereInput, orderBy: AnnotatableOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Annotatable!]
  ownedImages(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image!]
  ownedAnnotations(where: AnnotationWhereInput, orderBy: AnnotationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Annotation!]
  ownedAnnotationTasks(where: AnnotationTaskWhereInput, orderBy: AnnotationTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AnnotationTask!]
  ownedClassificationContexts(where: ClassificationContextWhereInput, orderBy: ClassificationContextOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassificationContext!]
  ownedClassificationLabels(where: ClassificationLabelWhereInput, orderBy: ClassificationLabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassificationLabel!]
  owner: User
  managerUsers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  managerGroups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group!]
  managerOfGroups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group!]
  creator: User
  createdAt: DateTime!
  updatedAt: DateTime!
}

type GroupConnection {
  pageInfo: PageInfo!
  edges: [GroupEdge]!
  aggregate: AggregateGroup!
}

input GroupCreateInput {
  displayName: String!
  memberUsers: UserCreateManyWithoutMemberOfGroupsInput
  memberGroups: GroupCreateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupCreateManyWithoutMemberGroupsInput
  ownedAnnotatables: AnnotatableCreateManyWithoutGroupInput
  ownedImages: ImageCreateManyWithoutGroupInput
  ownedAnnotations: AnnotationCreateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutGroupInput
  owner: UserCreateOneWithoutOwnedGroupsInput
  managerUsers: UserCreateManyWithoutManagerOfGroupsInput
  managerGroups: GroupCreateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupCreateManyWithoutManagerGroupsInput
  creator: UserCreateOneWithoutCreatedGroupsInput
}

input GroupCreateManyWithoutCreatorInput {
  create: [GroupCreateWithoutCreatorInput!]
  connect: [GroupWhereUniqueInput!]
}

input GroupCreateManyWithoutManagerGroupsInput {
  create: [GroupCreateWithoutManagerGroupsInput!]
  connect: [GroupWhereUniqueInput!]
}

input GroupCreateManyWithoutManagerOfGroupsInput {
  create: [GroupCreateWithoutManagerOfGroupsInput!]
  connect: [GroupWhereUniqueInput!]
}

input GroupCreateManyWithoutManagerUsersInput {
  create: [GroupCreateWithoutManagerUsersInput!]
  connect: [GroupWhereUniqueInput!]
}

input GroupCreateManyWithoutMemberGroupsInput {
  create: [GroupCreateWithoutMemberGroupsInput!]
  connect: [GroupWhereUniqueInput!]
}

input GroupCreateManyWithoutMemberOfGroupsInput {
  create: [GroupCreateWithoutMemberOfGroupsInput!]
  connect: [GroupWhereUniqueInput!]
}

input GroupCreateManyWithoutMemberUsersInput {
  create: [GroupCreateWithoutMemberUsersInput!]
  connect: [GroupWhereUniqueInput!]
}

input GroupCreateManyWithoutOwnerInput {
  create: [GroupCreateWithoutOwnerInput!]
  connect: [GroupWhereUniqueInput!]
}

input GroupCreateOneWithoutOwnedAnnotatablesInput {
  create: GroupCreateWithoutOwnedAnnotatablesInput
  connect: GroupWhereUniqueInput
}

input GroupCreateOneWithoutOwnedAnnotationsInput {
  create: GroupCreateWithoutOwnedAnnotationsInput
  connect: GroupWhereUniqueInput
}

input GroupCreateOneWithoutOwnedAnnotationTasksInput {
  create: GroupCreateWithoutOwnedAnnotationTasksInput
  connect: GroupWhereUniqueInput
}

input GroupCreateOneWithoutOwnedClassificationContextsInput {
  create: GroupCreateWithoutOwnedClassificationContextsInput
  connect: GroupWhereUniqueInput
}

input GroupCreateOneWithoutOwnedClassificationLabelsInput {
  create: GroupCreateWithoutOwnedClassificationLabelsInput
  connect: GroupWhereUniqueInput
}

input GroupCreateOneWithoutOwnedImagesInput {
  create: GroupCreateWithoutOwnedImagesInput
  connect: GroupWhereUniqueInput
}

input GroupCreateWithoutCreatorInput {
  displayName: String!
  memberUsers: UserCreateManyWithoutMemberOfGroupsInput
  memberGroups: GroupCreateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupCreateManyWithoutMemberGroupsInput
  ownedAnnotatables: AnnotatableCreateManyWithoutGroupInput
  ownedImages: ImageCreateManyWithoutGroupInput
  ownedAnnotations: AnnotationCreateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutGroupInput
  owner: UserCreateOneWithoutOwnedGroupsInput
  managerUsers: UserCreateManyWithoutManagerOfGroupsInput
  managerGroups: GroupCreateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupCreateManyWithoutManagerGroupsInput
}

input GroupCreateWithoutManagerGroupsInput {
  displayName: String!
  memberUsers: UserCreateManyWithoutMemberOfGroupsInput
  memberGroups: GroupCreateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupCreateManyWithoutMemberGroupsInput
  ownedAnnotatables: AnnotatableCreateManyWithoutGroupInput
  ownedImages: ImageCreateManyWithoutGroupInput
  ownedAnnotations: AnnotationCreateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutGroupInput
  owner: UserCreateOneWithoutOwnedGroupsInput
  managerUsers: UserCreateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupCreateManyWithoutManagerGroupsInput
  creator: UserCreateOneWithoutCreatedGroupsInput
}

input GroupCreateWithoutManagerOfGroupsInput {
  displayName: String!
  memberUsers: UserCreateManyWithoutMemberOfGroupsInput
  memberGroups: GroupCreateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupCreateManyWithoutMemberGroupsInput
  ownedAnnotatables: AnnotatableCreateManyWithoutGroupInput
  ownedImages: ImageCreateManyWithoutGroupInput
  ownedAnnotations: AnnotationCreateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutGroupInput
  owner: UserCreateOneWithoutOwnedGroupsInput
  managerUsers: UserCreateManyWithoutManagerOfGroupsInput
  managerGroups: GroupCreateManyWithoutManagerOfGroupsInput
  creator: UserCreateOneWithoutCreatedGroupsInput
}

input GroupCreateWithoutManagerUsersInput {
  displayName: String!
  memberUsers: UserCreateManyWithoutMemberOfGroupsInput
  memberGroups: GroupCreateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupCreateManyWithoutMemberGroupsInput
  ownedAnnotatables: AnnotatableCreateManyWithoutGroupInput
  ownedImages: ImageCreateManyWithoutGroupInput
  ownedAnnotations: AnnotationCreateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutGroupInput
  owner: UserCreateOneWithoutOwnedGroupsInput
  managerGroups: GroupCreateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupCreateManyWithoutManagerGroupsInput
  creator: UserCreateOneWithoutCreatedGroupsInput
}

input GroupCreateWithoutMemberGroupsInput {
  displayName: String!
  memberUsers: UserCreateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupCreateManyWithoutMemberGroupsInput
  ownedAnnotatables: AnnotatableCreateManyWithoutGroupInput
  ownedImages: ImageCreateManyWithoutGroupInput
  ownedAnnotations: AnnotationCreateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutGroupInput
  owner: UserCreateOneWithoutOwnedGroupsInput
  managerUsers: UserCreateManyWithoutManagerOfGroupsInput
  managerGroups: GroupCreateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupCreateManyWithoutManagerGroupsInput
  creator: UserCreateOneWithoutCreatedGroupsInput
}

input GroupCreateWithoutMemberOfGroupsInput {
  displayName: String!
  memberUsers: UserCreateManyWithoutMemberOfGroupsInput
  memberGroups: GroupCreateManyWithoutMemberOfGroupsInput
  ownedAnnotatables: AnnotatableCreateManyWithoutGroupInput
  ownedImages: ImageCreateManyWithoutGroupInput
  ownedAnnotations: AnnotationCreateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutGroupInput
  owner: UserCreateOneWithoutOwnedGroupsInput
  managerUsers: UserCreateManyWithoutManagerOfGroupsInput
  managerGroups: GroupCreateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupCreateManyWithoutManagerGroupsInput
  creator: UserCreateOneWithoutCreatedGroupsInput
}

input GroupCreateWithoutMemberUsersInput {
  displayName: String!
  memberGroups: GroupCreateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupCreateManyWithoutMemberGroupsInput
  ownedAnnotatables: AnnotatableCreateManyWithoutGroupInput
  ownedImages: ImageCreateManyWithoutGroupInput
  ownedAnnotations: AnnotationCreateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutGroupInput
  owner: UserCreateOneWithoutOwnedGroupsInput
  managerUsers: UserCreateManyWithoutManagerOfGroupsInput
  managerGroups: GroupCreateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupCreateManyWithoutManagerGroupsInput
  creator: UserCreateOneWithoutCreatedGroupsInput
}

input GroupCreateWithoutOwnedAnnotatablesInput {
  displayName: String!
  memberUsers: UserCreateManyWithoutMemberOfGroupsInput
  memberGroups: GroupCreateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupCreateManyWithoutMemberGroupsInput
  ownedImages: ImageCreateManyWithoutGroupInput
  ownedAnnotations: AnnotationCreateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutGroupInput
  owner: UserCreateOneWithoutOwnedGroupsInput
  managerUsers: UserCreateManyWithoutManagerOfGroupsInput
  managerGroups: GroupCreateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupCreateManyWithoutManagerGroupsInput
  creator: UserCreateOneWithoutCreatedGroupsInput
}

input GroupCreateWithoutOwnedAnnotationsInput {
  displayName: String!
  memberUsers: UserCreateManyWithoutMemberOfGroupsInput
  memberGroups: GroupCreateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupCreateManyWithoutMemberGroupsInput
  ownedAnnotatables: AnnotatableCreateManyWithoutGroupInput
  ownedImages: ImageCreateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutGroupInput
  owner: UserCreateOneWithoutOwnedGroupsInput
  managerUsers: UserCreateManyWithoutManagerOfGroupsInput
  managerGroups: GroupCreateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupCreateManyWithoutManagerGroupsInput
  creator: UserCreateOneWithoutCreatedGroupsInput
}

input GroupCreateWithoutOwnedAnnotationTasksInput {
  displayName: String!
  memberUsers: UserCreateManyWithoutMemberOfGroupsInput
  memberGroups: GroupCreateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupCreateManyWithoutMemberGroupsInput
  ownedAnnotatables: AnnotatableCreateManyWithoutGroupInput
  ownedImages: ImageCreateManyWithoutGroupInput
  ownedAnnotations: AnnotationCreateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutGroupInput
  owner: UserCreateOneWithoutOwnedGroupsInput
  managerUsers: UserCreateManyWithoutManagerOfGroupsInput
  managerGroups: GroupCreateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupCreateManyWithoutManagerGroupsInput
  creator: UserCreateOneWithoutCreatedGroupsInput
}

input GroupCreateWithoutOwnedClassificationContextsInput {
  displayName: String!
  memberUsers: UserCreateManyWithoutMemberOfGroupsInput
  memberGroups: GroupCreateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupCreateManyWithoutMemberGroupsInput
  ownedAnnotatables: AnnotatableCreateManyWithoutGroupInput
  ownedImages: ImageCreateManyWithoutGroupInput
  ownedAnnotations: AnnotationCreateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutGroupInput
  owner: UserCreateOneWithoutOwnedGroupsInput
  managerUsers: UserCreateManyWithoutManagerOfGroupsInput
  managerGroups: GroupCreateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupCreateManyWithoutManagerGroupsInput
  creator: UserCreateOneWithoutCreatedGroupsInput
}

input GroupCreateWithoutOwnedClassificationLabelsInput {
  displayName: String!
  memberUsers: UserCreateManyWithoutMemberOfGroupsInput
  memberGroups: GroupCreateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupCreateManyWithoutMemberGroupsInput
  ownedAnnotatables: AnnotatableCreateManyWithoutGroupInput
  ownedImages: ImageCreateManyWithoutGroupInput
  ownedAnnotations: AnnotationCreateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutGroupInput
  owner: UserCreateOneWithoutOwnedGroupsInput
  managerUsers: UserCreateManyWithoutManagerOfGroupsInput
  managerGroups: GroupCreateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupCreateManyWithoutManagerGroupsInput
  creator: UserCreateOneWithoutCreatedGroupsInput
}

input GroupCreateWithoutOwnedImagesInput {
  displayName: String!
  memberUsers: UserCreateManyWithoutMemberOfGroupsInput
  memberGroups: GroupCreateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupCreateManyWithoutMemberGroupsInput
  ownedAnnotatables: AnnotatableCreateManyWithoutGroupInput
  ownedAnnotations: AnnotationCreateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutGroupInput
  owner: UserCreateOneWithoutOwnedGroupsInput
  managerUsers: UserCreateManyWithoutManagerOfGroupsInput
  managerGroups: GroupCreateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupCreateManyWithoutManagerGroupsInput
  creator: UserCreateOneWithoutCreatedGroupsInput
}

input GroupCreateWithoutOwnerInput {
  displayName: String!
  memberUsers: UserCreateManyWithoutMemberOfGroupsInput
  memberGroups: GroupCreateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupCreateManyWithoutMemberGroupsInput
  ownedAnnotatables: AnnotatableCreateManyWithoutGroupInput
  ownedImages: ImageCreateManyWithoutGroupInput
  ownedAnnotations: AnnotationCreateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutGroupInput
  managerUsers: UserCreateManyWithoutManagerOfGroupsInput
  managerGroups: GroupCreateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupCreateManyWithoutManagerGroupsInput
  creator: UserCreateOneWithoutCreatedGroupsInput
}

type GroupEdge {
  node: Group!
  cursor: String!
}

enum GroupOrderByInput {
  id_ASC
  id_DESC
  displayName_ASC
  displayName_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GroupPreviousValues {
  id: ID!
  displayName: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type GroupSubscriptionPayload {
  mutation: MutationType!
  node: Group
  updatedFields: [String!]
  previousValues: GroupPreviousValues
}

input GroupSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GroupWhereInput
  AND: [GroupSubscriptionWhereInput!]
  OR: [GroupSubscriptionWhereInput!]
  NOT: [GroupSubscriptionWhereInput!]
}

input GroupUpdateInput {
  displayName: String
  memberUsers: UserUpdateManyWithoutMemberOfGroupsInput
  memberGroups: GroupUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupUpdateManyWithoutMemberGroupsInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutGroupInput
  ownedImages: ImageUpdateManyWithoutGroupInput
  ownedAnnotations: AnnotationUpdateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutGroupInput
  owner: UserUpdateOneWithoutOwnedGroupsInput
  managerUsers: UserUpdateManyWithoutManagerOfGroupsInput
  managerGroups: GroupUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupUpdateManyWithoutManagerGroupsInput
  creator: UserUpdateOneWithoutCreatedGroupsInput
}

input GroupUpdateManyWithoutCreatorInput {
  create: [GroupCreateWithoutCreatorInput!]
  delete: [GroupWhereUniqueInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutCreatorInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutCreatorInput!]
}

input GroupUpdateManyWithoutManagerGroupsInput {
  create: [GroupCreateWithoutManagerGroupsInput!]
  delete: [GroupWhereUniqueInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutManagerGroupsInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutManagerGroupsInput!]
}

input GroupUpdateManyWithoutManagerOfGroupsInput {
  create: [GroupCreateWithoutManagerOfGroupsInput!]
  delete: [GroupWhereUniqueInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutManagerOfGroupsInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutManagerOfGroupsInput!]
}

input GroupUpdateManyWithoutManagerUsersInput {
  create: [GroupCreateWithoutManagerUsersInput!]
  delete: [GroupWhereUniqueInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutManagerUsersInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutManagerUsersInput!]
}

input GroupUpdateManyWithoutMemberGroupsInput {
  create: [GroupCreateWithoutMemberGroupsInput!]
  delete: [GroupWhereUniqueInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutMemberGroupsInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutMemberGroupsInput!]
}

input GroupUpdateManyWithoutMemberOfGroupsInput {
  create: [GroupCreateWithoutMemberOfGroupsInput!]
  delete: [GroupWhereUniqueInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutMemberOfGroupsInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutMemberOfGroupsInput!]
}

input GroupUpdateManyWithoutMemberUsersInput {
  create: [GroupCreateWithoutMemberUsersInput!]
  delete: [GroupWhereUniqueInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutMemberUsersInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutMemberUsersInput!]
}

input GroupUpdateManyWithoutOwnerInput {
  create: [GroupCreateWithoutOwnerInput!]
  delete: [GroupWhereUniqueInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutOwnerInput!]
}

input GroupUpdateOneWithoutOwnedAnnotatablesInput {
  create: GroupCreateWithoutOwnedAnnotatablesInput
  update: GroupUpdateWithoutOwnedAnnotatablesDataInput
  upsert: GroupUpsertWithoutOwnedAnnotatablesInput
  delete: Boolean
  disconnect: Boolean
  connect: GroupWhereUniqueInput
}

input GroupUpdateOneWithoutOwnedAnnotationsInput {
  create: GroupCreateWithoutOwnedAnnotationsInput
  update: GroupUpdateWithoutOwnedAnnotationsDataInput
  upsert: GroupUpsertWithoutOwnedAnnotationsInput
  delete: Boolean
  disconnect: Boolean
  connect: GroupWhereUniqueInput
}

input GroupUpdateOneWithoutOwnedAnnotationTasksInput {
  create: GroupCreateWithoutOwnedAnnotationTasksInput
  update: GroupUpdateWithoutOwnedAnnotationTasksDataInput
  upsert: GroupUpsertWithoutOwnedAnnotationTasksInput
  delete: Boolean
  disconnect: Boolean
  connect: GroupWhereUniqueInput
}

input GroupUpdateOneWithoutOwnedClassificationContextsInput {
  create: GroupCreateWithoutOwnedClassificationContextsInput
  update: GroupUpdateWithoutOwnedClassificationContextsDataInput
  upsert: GroupUpsertWithoutOwnedClassificationContextsInput
  delete: Boolean
  disconnect: Boolean
  connect: GroupWhereUniqueInput
}

input GroupUpdateOneWithoutOwnedClassificationLabelsInput {
  create: GroupCreateWithoutOwnedClassificationLabelsInput
  update: GroupUpdateWithoutOwnedClassificationLabelsDataInput
  upsert: GroupUpsertWithoutOwnedClassificationLabelsInput
  delete: Boolean
  disconnect: Boolean
  connect: GroupWhereUniqueInput
}

input GroupUpdateOneWithoutOwnedImagesInput {
  create: GroupCreateWithoutOwnedImagesInput
  update: GroupUpdateWithoutOwnedImagesDataInput
  upsert: GroupUpsertWithoutOwnedImagesInput
  delete: Boolean
  disconnect: Boolean
  connect: GroupWhereUniqueInput
}

input GroupUpdateWithoutCreatorDataInput {
  displayName: String
  memberUsers: UserUpdateManyWithoutMemberOfGroupsInput
  memberGroups: GroupUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupUpdateManyWithoutMemberGroupsInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutGroupInput
  ownedImages: ImageUpdateManyWithoutGroupInput
  ownedAnnotations: AnnotationUpdateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutGroupInput
  owner: UserUpdateOneWithoutOwnedGroupsInput
  managerUsers: UserUpdateManyWithoutManagerOfGroupsInput
  managerGroups: GroupUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupUpdateManyWithoutManagerGroupsInput
}

input GroupUpdateWithoutManagerGroupsDataInput {
  displayName: String
  memberUsers: UserUpdateManyWithoutMemberOfGroupsInput
  memberGroups: GroupUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupUpdateManyWithoutMemberGroupsInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutGroupInput
  ownedImages: ImageUpdateManyWithoutGroupInput
  ownedAnnotations: AnnotationUpdateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutGroupInput
  owner: UserUpdateOneWithoutOwnedGroupsInput
  managerUsers: UserUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupUpdateManyWithoutManagerGroupsInput
  creator: UserUpdateOneWithoutCreatedGroupsInput
}

input GroupUpdateWithoutManagerOfGroupsDataInput {
  displayName: String
  memberUsers: UserUpdateManyWithoutMemberOfGroupsInput
  memberGroups: GroupUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupUpdateManyWithoutMemberGroupsInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutGroupInput
  ownedImages: ImageUpdateManyWithoutGroupInput
  ownedAnnotations: AnnotationUpdateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutGroupInput
  owner: UserUpdateOneWithoutOwnedGroupsInput
  managerUsers: UserUpdateManyWithoutManagerOfGroupsInput
  managerGroups: GroupUpdateManyWithoutManagerOfGroupsInput
  creator: UserUpdateOneWithoutCreatedGroupsInput
}

input GroupUpdateWithoutManagerUsersDataInput {
  displayName: String
  memberUsers: UserUpdateManyWithoutMemberOfGroupsInput
  memberGroups: GroupUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupUpdateManyWithoutMemberGroupsInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutGroupInput
  ownedImages: ImageUpdateManyWithoutGroupInput
  ownedAnnotations: AnnotationUpdateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutGroupInput
  owner: UserUpdateOneWithoutOwnedGroupsInput
  managerGroups: GroupUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupUpdateManyWithoutManagerGroupsInput
  creator: UserUpdateOneWithoutCreatedGroupsInput
}

input GroupUpdateWithoutMemberGroupsDataInput {
  displayName: String
  memberUsers: UserUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupUpdateManyWithoutMemberGroupsInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutGroupInput
  ownedImages: ImageUpdateManyWithoutGroupInput
  ownedAnnotations: AnnotationUpdateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutGroupInput
  owner: UserUpdateOneWithoutOwnedGroupsInput
  managerUsers: UserUpdateManyWithoutManagerOfGroupsInput
  managerGroups: GroupUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupUpdateManyWithoutManagerGroupsInput
  creator: UserUpdateOneWithoutCreatedGroupsInput
}

input GroupUpdateWithoutMemberOfGroupsDataInput {
  displayName: String
  memberUsers: UserUpdateManyWithoutMemberOfGroupsInput
  memberGroups: GroupUpdateManyWithoutMemberOfGroupsInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutGroupInput
  ownedImages: ImageUpdateManyWithoutGroupInput
  ownedAnnotations: AnnotationUpdateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutGroupInput
  owner: UserUpdateOneWithoutOwnedGroupsInput
  managerUsers: UserUpdateManyWithoutManagerOfGroupsInput
  managerGroups: GroupUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupUpdateManyWithoutManagerGroupsInput
  creator: UserUpdateOneWithoutCreatedGroupsInput
}

input GroupUpdateWithoutMemberUsersDataInput {
  displayName: String
  memberGroups: GroupUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupUpdateManyWithoutMemberGroupsInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutGroupInput
  ownedImages: ImageUpdateManyWithoutGroupInput
  ownedAnnotations: AnnotationUpdateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutGroupInput
  owner: UserUpdateOneWithoutOwnedGroupsInput
  managerUsers: UserUpdateManyWithoutManagerOfGroupsInput
  managerGroups: GroupUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupUpdateManyWithoutManagerGroupsInput
  creator: UserUpdateOneWithoutCreatedGroupsInput
}

input GroupUpdateWithoutOwnedAnnotatablesDataInput {
  displayName: String
  memberUsers: UserUpdateManyWithoutMemberOfGroupsInput
  memberGroups: GroupUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupUpdateManyWithoutMemberGroupsInput
  ownedImages: ImageUpdateManyWithoutGroupInput
  ownedAnnotations: AnnotationUpdateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutGroupInput
  owner: UserUpdateOneWithoutOwnedGroupsInput
  managerUsers: UserUpdateManyWithoutManagerOfGroupsInput
  managerGroups: GroupUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupUpdateManyWithoutManagerGroupsInput
  creator: UserUpdateOneWithoutCreatedGroupsInput
}

input GroupUpdateWithoutOwnedAnnotationsDataInput {
  displayName: String
  memberUsers: UserUpdateManyWithoutMemberOfGroupsInput
  memberGroups: GroupUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupUpdateManyWithoutMemberGroupsInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutGroupInput
  ownedImages: ImageUpdateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutGroupInput
  owner: UserUpdateOneWithoutOwnedGroupsInput
  managerUsers: UserUpdateManyWithoutManagerOfGroupsInput
  managerGroups: GroupUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupUpdateManyWithoutManagerGroupsInput
  creator: UserUpdateOneWithoutCreatedGroupsInput
}

input GroupUpdateWithoutOwnedAnnotationTasksDataInput {
  displayName: String
  memberUsers: UserUpdateManyWithoutMemberOfGroupsInput
  memberGroups: GroupUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupUpdateManyWithoutMemberGroupsInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutGroupInput
  ownedImages: ImageUpdateManyWithoutGroupInput
  ownedAnnotations: AnnotationUpdateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutGroupInput
  owner: UserUpdateOneWithoutOwnedGroupsInput
  managerUsers: UserUpdateManyWithoutManagerOfGroupsInput
  managerGroups: GroupUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupUpdateManyWithoutManagerGroupsInput
  creator: UserUpdateOneWithoutCreatedGroupsInput
}

input GroupUpdateWithoutOwnedClassificationContextsDataInput {
  displayName: String
  memberUsers: UserUpdateManyWithoutMemberOfGroupsInput
  memberGroups: GroupUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupUpdateManyWithoutMemberGroupsInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutGroupInput
  ownedImages: ImageUpdateManyWithoutGroupInput
  ownedAnnotations: AnnotationUpdateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutGroupInput
  owner: UserUpdateOneWithoutOwnedGroupsInput
  managerUsers: UserUpdateManyWithoutManagerOfGroupsInput
  managerGroups: GroupUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupUpdateManyWithoutManagerGroupsInput
  creator: UserUpdateOneWithoutCreatedGroupsInput
}

input GroupUpdateWithoutOwnedClassificationLabelsDataInput {
  displayName: String
  memberUsers: UserUpdateManyWithoutMemberOfGroupsInput
  memberGroups: GroupUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupUpdateManyWithoutMemberGroupsInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutGroupInput
  ownedImages: ImageUpdateManyWithoutGroupInput
  ownedAnnotations: AnnotationUpdateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutGroupInput
  owner: UserUpdateOneWithoutOwnedGroupsInput
  managerUsers: UserUpdateManyWithoutManagerOfGroupsInput
  managerGroups: GroupUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupUpdateManyWithoutManagerGroupsInput
  creator: UserUpdateOneWithoutCreatedGroupsInput
}

input GroupUpdateWithoutOwnedImagesDataInput {
  displayName: String
  memberUsers: UserUpdateManyWithoutMemberOfGroupsInput
  memberGroups: GroupUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupUpdateManyWithoutMemberGroupsInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutGroupInput
  ownedAnnotations: AnnotationUpdateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutGroupInput
  owner: UserUpdateOneWithoutOwnedGroupsInput
  managerUsers: UserUpdateManyWithoutManagerOfGroupsInput
  managerGroups: GroupUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupUpdateManyWithoutManagerGroupsInput
  creator: UserUpdateOneWithoutCreatedGroupsInput
}

input GroupUpdateWithoutOwnerDataInput {
  displayName: String
  memberUsers: UserUpdateManyWithoutMemberOfGroupsInput
  memberGroups: GroupUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups: GroupUpdateManyWithoutMemberGroupsInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutGroupInput
  ownedImages: ImageUpdateManyWithoutGroupInput
  ownedAnnotations: AnnotationUpdateManyWithoutGroupInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutGroupInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutGroupInput
  managerUsers: UserUpdateManyWithoutManagerOfGroupsInput
  managerGroups: GroupUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups: GroupUpdateManyWithoutManagerGroupsInput
  creator: UserUpdateOneWithoutCreatedGroupsInput
}

input GroupUpdateWithWhereUniqueWithoutCreatorInput {
  where: GroupWhereUniqueInput!
  data: GroupUpdateWithoutCreatorDataInput!
}

input GroupUpdateWithWhereUniqueWithoutManagerGroupsInput {
  where: GroupWhereUniqueInput!
  data: GroupUpdateWithoutManagerGroupsDataInput!
}

input GroupUpdateWithWhereUniqueWithoutManagerOfGroupsInput {
  where: GroupWhereUniqueInput!
  data: GroupUpdateWithoutManagerOfGroupsDataInput!
}

input GroupUpdateWithWhereUniqueWithoutManagerUsersInput {
  where: GroupWhereUniqueInput!
  data: GroupUpdateWithoutManagerUsersDataInput!
}

input GroupUpdateWithWhereUniqueWithoutMemberGroupsInput {
  where: GroupWhereUniqueInput!
  data: GroupUpdateWithoutMemberGroupsDataInput!
}

input GroupUpdateWithWhereUniqueWithoutMemberOfGroupsInput {
  where: GroupWhereUniqueInput!
  data: GroupUpdateWithoutMemberOfGroupsDataInput!
}

input GroupUpdateWithWhereUniqueWithoutMemberUsersInput {
  where: GroupWhereUniqueInput!
  data: GroupUpdateWithoutMemberUsersDataInput!
}

input GroupUpdateWithWhereUniqueWithoutOwnerInput {
  where: GroupWhereUniqueInput!
  data: GroupUpdateWithoutOwnerDataInput!
}

input GroupUpsertWithoutOwnedAnnotatablesInput {
  update: GroupUpdateWithoutOwnedAnnotatablesDataInput!
  create: GroupCreateWithoutOwnedAnnotatablesInput!
}

input GroupUpsertWithoutOwnedAnnotationsInput {
  update: GroupUpdateWithoutOwnedAnnotationsDataInput!
  create: GroupCreateWithoutOwnedAnnotationsInput!
}

input GroupUpsertWithoutOwnedAnnotationTasksInput {
  update: GroupUpdateWithoutOwnedAnnotationTasksDataInput!
  create: GroupCreateWithoutOwnedAnnotationTasksInput!
}

input GroupUpsertWithoutOwnedClassificationContextsInput {
  update: GroupUpdateWithoutOwnedClassificationContextsDataInput!
  create: GroupCreateWithoutOwnedClassificationContextsInput!
}

input GroupUpsertWithoutOwnedClassificationLabelsInput {
  update: GroupUpdateWithoutOwnedClassificationLabelsDataInput!
  create: GroupCreateWithoutOwnedClassificationLabelsInput!
}

input GroupUpsertWithoutOwnedImagesInput {
  update: GroupUpdateWithoutOwnedImagesDataInput!
  create: GroupCreateWithoutOwnedImagesInput!
}

input GroupUpsertWithWhereUniqueWithoutCreatorInput {
  where: GroupWhereUniqueInput!
  update: GroupUpdateWithoutCreatorDataInput!
  create: GroupCreateWithoutCreatorInput!
}

input GroupUpsertWithWhereUniqueWithoutManagerGroupsInput {
  where: GroupWhereUniqueInput!
  update: GroupUpdateWithoutManagerGroupsDataInput!
  create: GroupCreateWithoutManagerGroupsInput!
}

input GroupUpsertWithWhereUniqueWithoutManagerOfGroupsInput {
  where: GroupWhereUniqueInput!
  update: GroupUpdateWithoutManagerOfGroupsDataInput!
  create: GroupCreateWithoutManagerOfGroupsInput!
}

input GroupUpsertWithWhereUniqueWithoutManagerUsersInput {
  where: GroupWhereUniqueInput!
  update: GroupUpdateWithoutManagerUsersDataInput!
  create: GroupCreateWithoutManagerUsersInput!
}

input GroupUpsertWithWhereUniqueWithoutMemberGroupsInput {
  where: GroupWhereUniqueInput!
  update: GroupUpdateWithoutMemberGroupsDataInput!
  create: GroupCreateWithoutMemberGroupsInput!
}

input GroupUpsertWithWhereUniqueWithoutMemberOfGroupsInput {
  where: GroupWhereUniqueInput!
  update: GroupUpdateWithoutMemberOfGroupsDataInput!
  create: GroupCreateWithoutMemberOfGroupsInput!
}

input GroupUpsertWithWhereUniqueWithoutMemberUsersInput {
  where: GroupWhereUniqueInput!
  update: GroupUpdateWithoutMemberUsersDataInput!
  create: GroupCreateWithoutMemberUsersInput!
}

input GroupUpsertWithWhereUniqueWithoutOwnerInput {
  where: GroupWhereUniqueInput!
  update: GroupUpdateWithoutOwnerDataInput!
  create: GroupCreateWithoutOwnerInput!
}

input GroupWhereInput {
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
  memberUsers_every: UserWhereInput
  memberUsers_some: UserWhereInput
  memberUsers_none: UserWhereInput
  memberGroups_every: GroupWhereInput
  memberGroups_some: GroupWhereInput
  memberGroups_none: GroupWhereInput
  memberOfGroups_every: GroupWhereInput
  memberOfGroups_some: GroupWhereInput
  memberOfGroups_none: GroupWhereInput
  ownedAnnotatables_every: AnnotatableWhereInput
  ownedAnnotatables_some: AnnotatableWhereInput
  ownedAnnotatables_none: AnnotatableWhereInput
  ownedImages_every: ImageWhereInput
  ownedImages_some: ImageWhereInput
  ownedImages_none: ImageWhereInput
  ownedAnnotations_every: AnnotationWhereInput
  ownedAnnotations_some: AnnotationWhereInput
  ownedAnnotations_none: AnnotationWhereInput
  ownedAnnotationTasks_every: AnnotationTaskWhereInput
  ownedAnnotationTasks_some: AnnotationTaskWhereInput
  ownedAnnotationTasks_none: AnnotationTaskWhereInput
  ownedClassificationContexts_every: ClassificationContextWhereInput
  ownedClassificationContexts_some: ClassificationContextWhereInput
  ownedClassificationContexts_none: ClassificationContextWhereInput
  ownedClassificationLabels_every: ClassificationLabelWhereInput
  ownedClassificationLabels_some: ClassificationLabelWhereInput
  ownedClassificationLabels_none: ClassificationLabelWhereInput
  owner: UserWhereInput
  managerUsers_every: UserWhereInput
  managerUsers_some: UserWhereInput
  managerUsers_none: UserWhereInput
  managerGroups_every: GroupWhereInput
  managerGroups_some: GroupWhereInput
  managerGroups_none: GroupWhereInput
  managerOfGroups_every: GroupWhereInput
  managerOfGroups_some: GroupWhereInput
  managerOfGroups_none: GroupWhereInput
  creator: UserWhereInput
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
  AND: [GroupWhereInput!]
  OR: [GroupWhereInput!]
  NOT: [GroupWhereInput!]
}

input GroupWhereUniqueInput {
  id: ID
}

type Image {
  id: ID!
  uri: String!
  thumbnailUri: String
  caption: String
  digestSha3: String
  digestSha2: String
  digestSha1: String
  digestMd5: String
  sizeInBytes: Int
  width: Int
  height: Int
  owner: User
  group: Group
  anyoneCanView: Boolean!
  creator: User
  createdAt: DateTime!
  updatedAt: DateTime!
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
  digestSha3: String
  digestSha2: String
  digestSha1: String
  digestMd5: String
  sizeInBytes: Int
  width: Int
  height: Int
  owner: UserCreateOneWithoutOwnedImagesInput
  group: GroupCreateOneWithoutOwnedImagesInput
  anyoneCanView: Boolean
  creator: UserCreateOneWithoutCreatedImagesInput
}

input ImageCreateManyWithoutCreatorInput {
  create: [ImageCreateWithoutCreatorInput!]
  connect: [ImageWhereUniqueInput!]
}

input ImageCreateManyWithoutGroupInput {
  create: [ImageCreateWithoutGroupInput!]
  connect: [ImageWhereUniqueInput!]
}

input ImageCreateManyWithoutOwnerInput {
  create: [ImageCreateWithoutOwnerInput!]
  connect: [ImageWhereUniqueInput!]
}

input ImageCreateOneInput {
  create: ImageCreateInput
  connect: ImageWhereUniqueInput
}

input ImageCreateWithoutCreatorInput {
  uri: String!
  thumbnailUri: String
  caption: String
  digestSha3: String
  digestSha2: String
  digestSha1: String
  digestMd5: String
  sizeInBytes: Int
  width: Int
  height: Int
  owner: UserCreateOneWithoutOwnedImagesInput
  group: GroupCreateOneWithoutOwnedImagesInput
  anyoneCanView: Boolean
}

input ImageCreateWithoutGroupInput {
  uri: String!
  thumbnailUri: String
  caption: String
  digestSha3: String
  digestSha2: String
  digestSha1: String
  digestMd5: String
  sizeInBytes: Int
  width: Int
  height: Int
  owner: UserCreateOneWithoutOwnedImagesInput
  anyoneCanView: Boolean
  creator: UserCreateOneWithoutCreatedImagesInput
}

input ImageCreateWithoutOwnerInput {
  uri: String!
  thumbnailUri: String
  caption: String
  digestSha3: String
  digestSha2: String
  digestSha1: String
  digestMd5: String
  sizeInBytes: Int
  width: Int
  height: Int
  group: GroupCreateOneWithoutOwnedImagesInput
  anyoneCanView: Boolean
  creator: UserCreateOneWithoutCreatedImagesInput
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
  digestSha3_ASC
  digestSha3_DESC
  digestSha2_ASC
  digestSha2_DESC
  digestSha1_ASC
  digestSha1_DESC
  digestMd5_ASC
  digestMd5_DESC
  sizeInBytes_ASC
  sizeInBytes_DESC
  width_ASC
  width_DESC
  height_ASC
  height_DESC
  anyoneCanView_ASC
  anyoneCanView_DESC
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
  digestSha3: String
  digestSha2: String
  digestSha1: String
  digestMd5: String
  sizeInBytes: Int
  width: Int
  height: Int
  anyoneCanView: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
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
  digestSha3: String
  digestSha2: String
  digestSha1: String
  digestMd5: String
  sizeInBytes: Int
  width: Int
  height: Int
  owner: UserUpdateOneWithoutOwnedImagesInput
  group: GroupUpdateOneWithoutOwnedImagesInput
  anyoneCanView: Boolean
  creator: UserUpdateOneWithoutCreatedImagesInput
}

input ImageUpdateInput {
  uri: String
  thumbnailUri: String
  caption: String
  digestSha3: String
  digestSha2: String
  digestSha1: String
  digestMd5: String
  sizeInBytes: Int
  width: Int
  height: Int
  owner: UserUpdateOneWithoutOwnedImagesInput
  group: GroupUpdateOneWithoutOwnedImagesInput
  anyoneCanView: Boolean
  creator: UserUpdateOneWithoutCreatedImagesInput
}

input ImageUpdateManyWithoutCreatorInput {
  create: [ImageCreateWithoutCreatorInput!]
  delete: [ImageWhereUniqueInput!]
  connect: [ImageWhereUniqueInput!]
  disconnect: [ImageWhereUniqueInput!]
  update: [ImageUpdateWithWhereUniqueWithoutCreatorInput!]
  upsert: [ImageUpsertWithWhereUniqueWithoutCreatorInput!]
}

input ImageUpdateManyWithoutGroupInput {
  create: [ImageCreateWithoutGroupInput!]
  delete: [ImageWhereUniqueInput!]
  connect: [ImageWhereUniqueInput!]
  disconnect: [ImageWhereUniqueInput!]
  update: [ImageUpdateWithWhereUniqueWithoutGroupInput!]
  upsert: [ImageUpsertWithWhereUniqueWithoutGroupInput!]
}

input ImageUpdateManyWithoutOwnerInput {
  create: [ImageCreateWithoutOwnerInput!]
  delete: [ImageWhereUniqueInput!]
  connect: [ImageWhereUniqueInput!]
  disconnect: [ImageWhereUniqueInput!]
  update: [ImageUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [ImageUpsertWithWhereUniqueWithoutOwnerInput!]
}

input ImageUpdateOneInput {
  create: ImageCreateInput
  update: ImageUpdateDataInput
  upsert: ImageUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ImageWhereUniqueInput
}

input ImageUpdateWithoutCreatorDataInput {
  uri: String
  thumbnailUri: String
  caption: String
  digestSha3: String
  digestSha2: String
  digestSha1: String
  digestMd5: String
  sizeInBytes: Int
  width: Int
  height: Int
  owner: UserUpdateOneWithoutOwnedImagesInput
  group: GroupUpdateOneWithoutOwnedImagesInput
  anyoneCanView: Boolean
}

input ImageUpdateWithoutGroupDataInput {
  uri: String
  thumbnailUri: String
  caption: String
  digestSha3: String
  digestSha2: String
  digestSha1: String
  digestMd5: String
  sizeInBytes: Int
  width: Int
  height: Int
  owner: UserUpdateOneWithoutOwnedImagesInput
  anyoneCanView: Boolean
  creator: UserUpdateOneWithoutCreatedImagesInput
}

input ImageUpdateWithoutOwnerDataInput {
  uri: String
  thumbnailUri: String
  caption: String
  digestSha3: String
  digestSha2: String
  digestSha1: String
  digestMd5: String
  sizeInBytes: Int
  width: Int
  height: Int
  group: GroupUpdateOneWithoutOwnedImagesInput
  anyoneCanView: Boolean
  creator: UserUpdateOneWithoutCreatedImagesInput
}

input ImageUpdateWithWhereUniqueWithoutCreatorInput {
  where: ImageWhereUniqueInput!
  data: ImageUpdateWithoutCreatorDataInput!
}

input ImageUpdateWithWhereUniqueWithoutGroupInput {
  where: ImageWhereUniqueInput!
  data: ImageUpdateWithoutGroupDataInput!
}

input ImageUpdateWithWhereUniqueWithoutOwnerInput {
  where: ImageWhereUniqueInput!
  data: ImageUpdateWithoutOwnerDataInput!
}

input ImageUpsertNestedInput {
  update: ImageUpdateDataInput!
  create: ImageCreateInput!
}

input ImageUpsertWithWhereUniqueWithoutCreatorInput {
  where: ImageWhereUniqueInput!
  update: ImageUpdateWithoutCreatorDataInput!
  create: ImageCreateWithoutCreatorInput!
}

input ImageUpsertWithWhereUniqueWithoutGroupInput {
  where: ImageWhereUniqueInput!
  update: ImageUpdateWithoutGroupDataInput!
  create: ImageCreateWithoutGroupInput!
}

input ImageUpsertWithWhereUniqueWithoutOwnerInput {
  where: ImageWhereUniqueInput!
  update: ImageUpdateWithoutOwnerDataInput!
  create: ImageCreateWithoutOwnerInput!
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
  digestSha3: String
  digestSha3_not: String
  digestSha3_in: [String!]
  digestSha3_not_in: [String!]
  digestSha3_lt: String
  digestSha3_lte: String
  digestSha3_gt: String
  digestSha3_gte: String
  digestSha3_contains: String
  digestSha3_not_contains: String
  digestSha3_starts_with: String
  digestSha3_not_starts_with: String
  digestSha3_ends_with: String
  digestSha3_not_ends_with: String
  digestSha2: String
  digestSha2_not: String
  digestSha2_in: [String!]
  digestSha2_not_in: [String!]
  digestSha2_lt: String
  digestSha2_lte: String
  digestSha2_gt: String
  digestSha2_gte: String
  digestSha2_contains: String
  digestSha2_not_contains: String
  digestSha2_starts_with: String
  digestSha2_not_starts_with: String
  digestSha2_ends_with: String
  digestSha2_not_ends_with: String
  digestSha1: String
  digestSha1_not: String
  digestSha1_in: [String!]
  digestSha1_not_in: [String!]
  digestSha1_lt: String
  digestSha1_lte: String
  digestSha1_gt: String
  digestSha1_gte: String
  digestSha1_contains: String
  digestSha1_not_contains: String
  digestSha1_starts_with: String
  digestSha1_not_starts_with: String
  digestSha1_ends_with: String
  digestSha1_not_ends_with: String
  digestMd5: String
  digestMd5_not: String
  digestMd5_in: [String!]
  digestMd5_not_in: [String!]
  digestMd5_lt: String
  digestMd5_lte: String
  digestMd5_gt: String
  digestMd5_gte: String
  digestMd5_contains: String
  digestMd5_not_contains: String
  digestMd5_starts_with: String
  digestMd5_not_starts_with: String
  digestMd5_ends_with: String
  digestMd5_not_ends_with: String
  sizeInBytes: Int
  sizeInBytes_not: Int
  sizeInBytes_in: [Int!]
  sizeInBytes_not_in: [Int!]
  sizeInBytes_lt: Int
  sizeInBytes_lte: Int
  sizeInBytes_gt: Int
  sizeInBytes_gte: Int
  width: Int
  width_not: Int
  width_in: [Int!]
  width_not_in: [Int!]
  width_lt: Int
  width_lte: Int
  width_gt: Int
  width_gte: Int
  height: Int
  height_not: Int
  height_in: [Int!]
  height_not_in: [Int!]
  height_lt: Int
  height_lte: Int
  height_gt: Int
  height_gte: Int
  owner: UserWhereInput
  group: GroupWhereInput
  anyoneCanView: Boolean
  anyoneCanView_not: Boolean
  creator: UserWhereInput
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
  createCgPoint(data: CgPointCreateInput!): CgPoint!
  updateCgPoint(data: CgPointUpdateInput!, where: CgPointWhereUniqueInput!): CgPoint
  updateManyCgPoints(data: CgPointUpdateInput!, where: CgPointWhereInput): BatchPayload!
  upsertCgPoint(where: CgPointWhereUniqueInput!, create: CgPointCreateInput!, update: CgPointUpdateInput!): CgPoint!
  deleteCgPoint(where: CgPointWhereUniqueInput!): CgPoint
  deleteManyCgPoints(where: CgPointWhereInput): BatchPayload!
  createClassificationContext(data: ClassificationContextCreateInput!): ClassificationContext!
  updateClassificationContext(data: ClassificationContextUpdateInput!, where: ClassificationContextWhereUniqueInput!): ClassificationContext
  updateManyClassificationContexts(data: ClassificationContextUpdateInput!, where: ClassificationContextWhereInput): BatchPayload!
  upsertClassificationContext(where: ClassificationContextWhereUniqueInput!, create: ClassificationContextCreateInput!, update: ClassificationContextUpdateInput!): ClassificationContext!
  deleteClassificationContext(where: ClassificationContextWhereUniqueInput!): ClassificationContext
  deleteManyClassificationContexts(where: ClassificationContextWhereInput): BatchPayload!
  createClassificationLabel(data: ClassificationLabelCreateInput!): ClassificationLabel!
  updateClassificationLabel(data: ClassificationLabelUpdateInput!, where: ClassificationLabelWhereUniqueInput!): ClassificationLabel
  updateManyClassificationLabels(data: ClassificationLabelUpdateInput!, where: ClassificationLabelWhereInput): BatchPayload!
  upsertClassificationLabel(where: ClassificationLabelWhereUniqueInput!, create: ClassificationLabelCreateInput!, update: ClassificationLabelUpdateInput!): ClassificationLabel!
  deleteClassificationLabel(where: ClassificationLabelWhereUniqueInput!): ClassificationLabel
  deleteManyClassificationLabels(where: ClassificationLabelWhereInput): BatchPayload!
  createGroup(data: GroupCreateInput!): Group!
  updateGroup(data: GroupUpdateInput!, where: GroupWhereUniqueInput!): Group
  updateManyGroups(data: GroupUpdateInput!, where: GroupWhereInput): BatchPayload!
  upsertGroup(where: GroupWhereUniqueInput!, create: GroupCreateInput!, update: GroupUpdateInput!): Group!
  deleteGroup(where: GroupWhereUniqueInput!): Group
  deleteManyGroups(where: GroupWhereInput): BatchPayload!
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
  cgPoint(where: CgPointWhereUniqueInput!): CgPoint
  cgPoints(where: CgPointWhereInput, orderBy: CgPointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CgPoint]!
  cgPointsConnection(where: CgPointWhereInput, orderBy: CgPointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CgPointConnection!
  classificationContext(where: ClassificationContextWhereUniqueInput!): ClassificationContext
  classificationContexts(where: ClassificationContextWhereInput, orderBy: ClassificationContextOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassificationContext]!
  classificationContextsConnection(where: ClassificationContextWhereInput, orderBy: ClassificationContextOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClassificationContextConnection!
  classificationLabel(where: ClassificationLabelWhereUniqueInput!): ClassificationLabel
  classificationLabels(where: ClassificationLabelWhereInput, orderBy: ClassificationLabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassificationLabel]!
  classificationLabelsConnection(where: ClassificationLabelWhereInput, orderBy: ClassificationLabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClassificationLabelConnection!
  group(where: GroupWhereUniqueInput!): Group
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group]!
  groupsConnection(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GroupConnection!
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
  cgPoint(where: CgPointSubscriptionWhereInput): CgPointSubscriptionPayload
  classificationContext(where: ClassificationContextSubscriptionWhereInput): ClassificationContextSubscriptionPayload
  classificationLabel(where: ClassificationLabelSubscriptionWhereInput): ClassificationLabelSubscriptionPayload
  group(where: GroupSubscriptionWhereInput): GroupSubscriptionPayload
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
  emailAddress: String
  systemLogin: SystemLogin
  localLogin: LocalLogin
  assignedAnnotationTasks(where: AnnotationTaskWhereInput, orderBy: AnnotationTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AnnotationTask!]
  annotations(where: AnnotationWhereInput, orderBy: AnnotationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Annotation!]
  ownedGroups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group!]
  createdGroups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group!]
  memberOfGroups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group!]
  managerOfGroups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group!]
  ownedAnnotatables(where: AnnotatableWhereInput, orderBy: AnnotatableOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Annotatable!]
  createdAnnotatables(where: AnnotatableWhereInput, orderBy: AnnotatableOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Annotatable!]
  ownedImages(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image!]
  createdImages(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image!]
  ownedAnnotations(where: AnnotationWhereInput, orderBy: AnnotationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Annotation!]
  createdAnnotations(where: AnnotationWhereInput, orderBy: AnnotationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Annotation!]
  ownedAnnotationTasks(where: AnnotationTaskWhereInput, orderBy: AnnotationTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AnnotationTask!]
  createdAnnotationTasks(where: AnnotationTaskWhereInput, orderBy: AnnotationTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AnnotationTask!]
  ownedClassificationContexts(where: ClassificationContextWhereInput, orderBy: ClassificationContextOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassificationContext!]
  createdClassificationContexts(where: ClassificationContextWhereInput, orderBy: ClassificationContextOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassificationContext!]
  ownedClassificationLabels(where: ClassificationLabelWhereInput, orderBy: ClassificationLabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassificationLabel!]
  createdClassificationLabels(where: ClassificationLabelWhereInput, orderBy: ClassificationLabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassificationLabel!]
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
  emailAddress: String
  systemLogin: SystemLoginCreateOneWithoutUserInput
  localLogin: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups: GroupCreateManyWithoutOwnerInput
  createdGroups: GroupCreateManyWithoutCreatorInput
  memberOfGroups: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableCreateManyWithoutCreatorInput
  ownedImages: ImageCreateManyWithoutOwnerInput
  createdImages: ImageCreateManyWithoutCreatorInput
  ownedAnnotations: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelCreateManyWithoutCreatorInput
}

input UserCreateManyWithoutAssignedAnnotationTasksInput {
  create: [UserCreateWithoutAssignedAnnotationTasksInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutManagerOfGroupsInput {
  create: [UserCreateWithoutManagerOfGroupsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutMemberOfGroupsInput {
  create: [UserCreateWithoutMemberOfGroupsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutAnnotationsInput {
  create: UserCreateWithoutAnnotationsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCreatedAnnotatablesInput {
  create: UserCreateWithoutCreatedAnnotatablesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCreatedAnnotationsInput {
  create: UserCreateWithoutCreatedAnnotationsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCreatedAnnotationTasksInput {
  create: UserCreateWithoutCreatedAnnotationTasksInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCreatedClassificationContextsInput {
  create: UserCreateWithoutCreatedClassificationContextsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCreatedClassificationLabelsInput {
  create: UserCreateWithoutCreatedClassificationLabelsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCreatedGroupsInput {
  create: UserCreateWithoutCreatedGroupsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCreatedImagesInput {
  create: UserCreateWithoutCreatedImagesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutLocalLoginInput {
  create: UserCreateWithoutLocalLoginInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOwnedAnnotatablesInput {
  create: UserCreateWithoutOwnedAnnotatablesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOwnedAnnotationsInput {
  create: UserCreateWithoutOwnedAnnotationsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOwnedAnnotationTasksInput {
  create: UserCreateWithoutOwnedAnnotationTasksInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOwnedClassificationContextsInput {
  create: UserCreateWithoutOwnedClassificationContextsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOwnedClassificationLabelsInput {
  create: UserCreateWithoutOwnedClassificationLabelsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOwnedGroupsInput {
  create: UserCreateWithoutOwnedGroupsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOwnedImagesInput {
  create: UserCreateWithoutOwnedImagesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutSystemLoginInput {
  create: UserCreateWithoutSystemLoginInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutAnnotationsInput {
  displayName: String!
  emailAddress: String
  systemLogin: SystemLoginCreateOneWithoutUserInput
  localLogin: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskCreateManyWithoutAssigneesInput
  ownedGroups: GroupCreateManyWithoutOwnerInput
  createdGroups: GroupCreateManyWithoutCreatorInput
  memberOfGroups: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableCreateManyWithoutCreatorInput
  ownedImages: ImageCreateManyWithoutOwnerInput
  createdImages: ImageCreateManyWithoutCreatorInput
  ownedAnnotations: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelCreateManyWithoutCreatorInput
}

input UserCreateWithoutAssignedAnnotationTasksInput {
  displayName: String!
  emailAddress: String
  systemLogin: SystemLoginCreateOneWithoutUserInput
  localLogin: LocalLoginCreateOneWithoutUserInput
  annotations: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups: GroupCreateManyWithoutOwnerInput
  createdGroups: GroupCreateManyWithoutCreatorInput
  memberOfGroups: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableCreateManyWithoutCreatorInput
  ownedImages: ImageCreateManyWithoutOwnerInput
  createdImages: ImageCreateManyWithoutCreatorInput
  ownedAnnotations: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelCreateManyWithoutCreatorInput
}

input UserCreateWithoutCreatedAnnotatablesInput {
  displayName: String!
  emailAddress: String
  systemLogin: SystemLoginCreateOneWithoutUserInput
  localLogin: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups: GroupCreateManyWithoutOwnerInput
  createdGroups: GroupCreateManyWithoutCreatorInput
  memberOfGroups: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableCreateManyWithoutOwnerInput
  ownedImages: ImageCreateManyWithoutOwnerInput
  createdImages: ImageCreateManyWithoutCreatorInput
  ownedAnnotations: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelCreateManyWithoutCreatorInput
}

input UserCreateWithoutCreatedAnnotationsInput {
  displayName: String!
  emailAddress: String
  systemLogin: SystemLoginCreateOneWithoutUserInput
  localLogin: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups: GroupCreateManyWithoutOwnerInput
  createdGroups: GroupCreateManyWithoutCreatorInput
  memberOfGroups: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableCreateManyWithoutCreatorInput
  ownedImages: ImageCreateManyWithoutOwnerInput
  createdImages: ImageCreateManyWithoutCreatorInput
  ownedAnnotations: AnnotationCreateManyWithoutOwnerInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelCreateManyWithoutCreatorInput
}

input UserCreateWithoutCreatedAnnotationTasksInput {
  displayName: String!
  emailAddress: String
  systemLogin: SystemLoginCreateOneWithoutUserInput
  localLogin: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups: GroupCreateManyWithoutOwnerInput
  createdGroups: GroupCreateManyWithoutCreatorInput
  memberOfGroups: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableCreateManyWithoutCreatorInput
  ownedImages: ImageCreateManyWithoutOwnerInput
  createdImages: ImageCreateManyWithoutCreatorInput
  ownedAnnotations: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutOwnerInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelCreateManyWithoutCreatorInput
}

input UserCreateWithoutCreatedClassificationContextsInput {
  displayName: String!
  emailAddress: String
  systemLogin: SystemLoginCreateOneWithoutUserInput
  localLogin: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups: GroupCreateManyWithoutOwnerInput
  createdGroups: GroupCreateManyWithoutCreatorInput
  memberOfGroups: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableCreateManyWithoutCreatorInput
  ownedImages: ImageCreateManyWithoutOwnerInput
  createdImages: ImageCreateManyWithoutCreatorInput
  ownedAnnotations: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutOwnerInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelCreateManyWithoutCreatorInput
}

input UserCreateWithoutCreatedClassificationLabelsInput {
  displayName: String!
  emailAddress: String
  systemLogin: SystemLoginCreateOneWithoutUserInput
  localLogin: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups: GroupCreateManyWithoutOwnerInput
  createdGroups: GroupCreateManyWithoutCreatorInput
  memberOfGroups: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableCreateManyWithoutCreatorInput
  ownedImages: ImageCreateManyWithoutOwnerInput
  createdImages: ImageCreateManyWithoutCreatorInput
  ownedAnnotations: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutOwnerInput
}

input UserCreateWithoutCreatedGroupsInput {
  displayName: String!
  emailAddress: String
  systemLogin: SystemLoginCreateOneWithoutUserInput
  localLogin: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups: GroupCreateManyWithoutOwnerInput
  memberOfGroups: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableCreateManyWithoutCreatorInput
  ownedImages: ImageCreateManyWithoutOwnerInput
  createdImages: ImageCreateManyWithoutCreatorInput
  ownedAnnotations: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelCreateManyWithoutCreatorInput
}

input UserCreateWithoutCreatedImagesInput {
  displayName: String!
  emailAddress: String
  systemLogin: SystemLoginCreateOneWithoutUserInput
  localLogin: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups: GroupCreateManyWithoutOwnerInput
  createdGroups: GroupCreateManyWithoutCreatorInput
  memberOfGroups: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableCreateManyWithoutCreatorInput
  ownedImages: ImageCreateManyWithoutOwnerInput
  ownedAnnotations: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelCreateManyWithoutCreatorInput
}

input UserCreateWithoutLocalLoginInput {
  displayName: String!
  emailAddress: String
  systemLogin: SystemLoginCreateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups: GroupCreateManyWithoutOwnerInput
  createdGroups: GroupCreateManyWithoutCreatorInput
  memberOfGroups: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableCreateManyWithoutCreatorInput
  ownedImages: ImageCreateManyWithoutOwnerInput
  createdImages: ImageCreateManyWithoutCreatorInput
  ownedAnnotations: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelCreateManyWithoutCreatorInput
}

input UserCreateWithoutManagerOfGroupsInput {
  displayName: String!
  emailAddress: String
  systemLogin: SystemLoginCreateOneWithoutUserInput
  localLogin: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups: GroupCreateManyWithoutOwnerInput
  createdGroups: GroupCreateManyWithoutCreatorInput
  memberOfGroups: GroupCreateManyWithoutMemberUsersInput
  ownedAnnotatables: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableCreateManyWithoutCreatorInput
  ownedImages: ImageCreateManyWithoutOwnerInput
  createdImages: ImageCreateManyWithoutCreatorInput
  ownedAnnotations: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelCreateManyWithoutCreatorInput
}

input UserCreateWithoutMemberOfGroupsInput {
  displayName: String!
  emailAddress: String
  systemLogin: SystemLoginCreateOneWithoutUserInput
  localLogin: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups: GroupCreateManyWithoutOwnerInput
  createdGroups: GroupCreateManyWithoutCreatorInput
  managerOfGroups: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableCreateManyWithoutCreatorInput
  ownedImages: ImageCreateManyWithoutOwnerInput
  createdImages: ImageCreateManyWithoutCreatorInput
  ownedAnnotations: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelCreateManyWithoutCreatorInput
}

input UserCreateWithoutOwnedAnnotatablesInput {
  displayName: String!
  emailAddress: String
  systemLogin: SystemLoginCreateOneWithoutUserInput
  localLogin: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups: GroupCreateManyWithoutOwnerInput
  createdGroups: GroupCreateManyWithoutCreatorInput
  memberOfGroups: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups: GroupCreateManyWithoutManagerUsersInput
  createdAnnotatables: AnnotatableCreateManyWithoutCreatorInput
  ownedImages: ImageCreateManyWithoutOwnerInput
  createdImages: ImageCreateManyWithoutCreatorInput
  ownedAnnotations: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelCreateManyWithoutCreatorInput
}

input UserCreateWithoutOwnedAnnotationsInput {
  displayName: String!
  emailAddress: String
  systemLogin: SystemLoginCreateOneWithoutUserInput
  localLogin: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups: GroupCreateManyWithoutOwnerInput
  createdGroups: GroupCreateManyWithoutCreatorInput
  memberOfGroups: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableCreateManyWithoutCreatorInput
  ownedImages: ImageCreateManyWithoutOwnerInput
  createdImages: ImageCreateManyWithoutCreatorInput
  createdAnnotations: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelCreateManyWithoutCreatorInput
}

input UserCreateWithoutOwnedAnnotationTasksInput {
  displayName: String!
  emailAddress: String
  systemLogin: SystemLoginCreateOneWithoutUserInput
  localLogin: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups: GroupCreateManyWithoutOwnerInput
  createdGroups: GroupCreateManyWithoutCreatorInput
  memberOfGroups: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableCreateManyWithoutCreatorInput
  ownedImages: ImageCreateManyWithoutOwnerInput
  createdImages: ImageCreateManyWithoutCreatorInput
  ownedAnnotations: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations: AnnotationCreateManyWithoutCreatorInput
  createdAnnotationTasks: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelCreateManyWithoutCreatorInput
}

input UserCreateWithoutOwnedClassificationContextsInput {
  displayName: String!
  emailAddress: String
  systemLogin: SystemLoginCreateOneWithoutUserInput
  localLogin: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups: GroupCreateManyWithoutOwnerInput
  createdGroups: GroupCreateManyWithoutCreatorInput
  memberOfGroups: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableCreateManyWithoutCreatorInput
  ownedImages: ImageCreateManyWithoutOwnerInput
  createdImages: ImageCreateManyWithoutCreatorInput
  ownedAnnotations: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskCreateManyWithoutCreatorInput
  createdClassificationContexts: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelCreateManyWithoutCreatorInput
}

input UserCreateWithoutOwnedClassificationLabelsInput {
  displayName: String!
  emailAddress: String
  systemLogin: SystemLoginCreateOneWithoutUserInput
  localLogin: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups: GroupCreateManyWithoutOwnerInput
  createdGroups: GroupCreateManyWithoutCreatorInput
  memberOfGroups: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableCreateManyWithoutCreatorInput
  ownedImages: ImageCreateManyWithoutOwnerInput
  createdImages: ImageCreateManyWithoutCreatorInput
  ownedAnnotations: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextCreateManyWithoutCreatorInput
  createdClassificationLabels: ClassificationLabelCreateManyWithoutCreatorInput
}

input UserCreateWithoutOwnedGroupsInput {
  displayName: String!
  emailAddress: String
  systemLogin: SystemLoginCreateOneWithoutUserInput
  localLogin: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations: AnnotationCreateManyWithoutAnnotatorInput
  createdGroups: GroupCreateManyWithoutCreatorInput
  memberOfGroups: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableCreateManyWithoutCreatorInput
  ownedImages: ImageCreateManyWithoutOwnerInput
  createdImages: ImageCreateManyWithoutCreatorInput
  ownedAnnotations: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelCreateManyWithoutCreatorInput
}

input UserCreateWithoutOwnedImagesInput {
  displayName: String!
  emailAddress: String
  systemLogin: SystemLoginCreateOneWithoutUserInput
  localLogin: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups: GroupCreateManyWithoutOwnerInput
  createdGroups: GroupCreateManyWithoutCreatorInput
  memberOfGroups: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableCreateManyWithoutCreatorInput
  createdImages: ImageCreateManyWithoutCreatorInput
  ownedAnnotations: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelCreateManyWithoutCreatorInput
}

input UserCreateWithoutSystemLoginInput {
  displayName: String!
  emailAddress: String
  localLogin: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups: GroupCreateManyWithoutOwnerInput
  createdGroups: GroupCreateManyWithoutCreatorInput
  memberOfGroups: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableCreateManyWithoutCreatorInput
  ownedImages: ImageCreateManyWithoutOwnerInput
  createdImages: ImageCreateManyWithoutCreatorInput
  ownedAnnotations: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelCreateManyWithoutCreatorInput
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
  emailAddress_ASC
  emailAddress_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  displayName: String!
  emailAddress: String
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
  emailAddress: String
  systemLogin: SystemLoginUpdateOneWithoutUserInput
  localLogin: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups: GroupUpdateManyWithoutOwnerInput
  createdGroups: GroupUpdateManyWithoutCreatorInput
  memberOfGroups: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages: ImageUpdateManyWithoutOwnerInput
  createdImages: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelUpdateManyWithoutCreatorInput
}

input UserUpdateManyWithoutAssignedAnnotationTasksInput {
  create: [UserCreateWithoutAssignedAnnotationTasksInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutAssignedAnnotationTasksInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutAssignedAnnotationTasksInput!]
}

input UserUpdateManyWithoutManagerOfGroupsInput {
  create: [UserCreateWithoutManagerOfGroupsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutManagerOfGroupsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutManagerOfGroupsInput!]
}

input UserUpdateManyWithoutMemberOfGroupsInput {
  create: [UserCreateWithoutMemberOfGroupsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutMemberOfGroupsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutMemberOfGroupsInput!]
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

input UserUpdateOneWithoutCreatedAnnotatablesInput {
  create: UserCreateWithoutCreatedAnnotatablesInput
  update: UserUpdateWithoutCreatedAnnotatablesDataInput
  upsert: UserUpsertWithoutCreatedAnnotatablesInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutCreatedAnnotationsInput {
  create: UserCreateWithoutCreatedAnnotationsInput
  update: UserUpdateWithoutCreatedAnnotationsDataInput
  upsert: UserUpsertWithoutCreatedAnnotationsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutCreatedAnnotationTasksInput {
  create: UserCreateWithoutCreatedAnnotationTasksInput
  update: UserUpdateWithoutCreatedAnnotationTasksDataInput
  upsert: UserUpsertWithoutCreatedAnnotationTasksInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutCreatedClassificationContextsInput {
  create: UserCreateWithoutCreatedClassificationContextsInput
  update: UserUpdateWithoutCreatedClassificationContextsDataInput
  upsert: UserUpsertWithoutCreatedClassificationContextsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutCreatedClassificationLabelsInput {
  create: UserCreateWithoutCreatedClassificationLabelsInput
  update: UserUpdateWithoutCreatedClassificationLabelsDataInput
  upsert: UserUpsertWithoutCreatedClassificationLabelsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutCreatedGroupsInput {
  create: UserCreateWithoutCreatedGroupsInput
  update: UserUpdateWithoutCreatedGroupsDataInput
  upsert: UserUpsertWithoutCreatedGroupsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutCreatedImagesInput {
  create: UserCreateWithoutCreatedImagesInput
  update: UserUpdateWithoutCreatedImagesDataInput
  upsert: UserUpsertWithoutCreatedImagesInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutOwnedAnnotatablesInput {
  create: UserCreateWithoutOwnedAnnotatablesInput
  update: UserUpdateWithoutOwnedAnnotatablesDataInput
  upsert: UserUpsertWithoutOwnedAnnotatablesInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutOwnedAnnotationsInput {
  create: UserCreateWithoutOwnedAnnotationsInput
  update: UserUpdateWithoutOwnedAnnotationsDataInput
  upsert: UserUpsertWithoutOwnedAnnotationsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutOwnedAnnotationTasksInput {
  create: UserCreateWithoutOwnedAnnotationTasksInput
  update: UserUpdateWithoutOwnedAnnotationTasksDataInput
  upsert: UserUpsertWithoutOwnedAnnotationTasksInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutOwnedClassificationContextsInput {
  create: UserCreateWithoutOwnedClassificationContextsInput
  update: UserUpdateWithoutOwnedClassificationContextsDataInput
  upsert: UserUpsertWithoutOwnedClassificationContextsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutOwnedClassificationLabelsInput {
  create: UserCreateWithoutOwnedClassificationLabelsInput
  update: UserUpdateWithoutOwnedClassificationLabelsDataInput
  upsert: UserUpsertWithoutOwnedClassificationLabelsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutOwnedGroupsInput {
  create: UserCreateWithoutOwnedGroupsInput
  update: UserUpdateWithoutOwnedGroupsDataInput
  upsert: UserUpsertWithoutOwnedGroupsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutOwnedImagesInput {
  create: UserCreateWithoutOwnedImagesInput
  update: UserUpdateWithoutOwnedImagesDataInput
  upsert: UserUpsertWithoutOwnedImagesInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutAnnotationsDataInput {
  displayName: String
  emailAddress: String
  systemLogin: SystemLoginUpdateOneWithoutUserInput
  localLogin: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskUpdateManyWithoutAssigneesInput
  ownedGroups: GroupUpdateManyWithoutOwnerInput
  createdGroups: GroupUpdateManyWithoutCreatorInput
  memberOfGroups: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages: ImageUpdateManyWithoutOwnerInput
  createdImages: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelUpdateManyWithoutCreatorInput
}

input UserUpdateWithoutAssignedAnnotationTasksDataInput {
  displayName: String
  emailAddress: String
  systemLogin: SystemLoginUpdateOneWithoutUserInput
  localLogin: LocalLoginUpdateOneWithoutUserInput
  annotations: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups: GroupUpdateManyWithoutOwnerInput
  createdGroups: GroupUpdateManyWithoutCreatorInput
  memberOfGroups: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages: ImageUpdateManyWithoutOwnerInput
  createdImages: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelUpdateManyWithoutCreatorInput
}

input UserUpdateWithoutCreatedAnnotatablesDataInput {
  displayName: String
  emailAddress: String
  systemLogin: SystemLoginUpdateOneWithoutUserInput
  localLogin: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups: GroupUpdateManyWithoutOwnerInput
  createdGroups: GroupUpdateManyWithoutCreatorInput
  memberOfGroups: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutOwnerInput
  ownedImages: ImageUpdateManyWithoutOwnerInput
  createdImages: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelUpdateManyWithoutCreatorInput
}

input UserUpdateWithoutCreatedAnnotationsDataInput {
  displayName: String
  emailAddress: String
  systemLogin: SystemLoginUpdateOneWithoutUserInput
  localLogin: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups: GroupUpdateManyWithoutOwnerInput
  createdGroups: GroupUpdateManyWithoutCreatorInput
  memberOfGroups: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages: ImageUpdateManyWithoutOwnerInput
  createdImages: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations: AnnotationUpdateManyWithoutOwnerInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelUpdateManyWithoutCreatorInput
}

input UserUpdateWithoutCreatedAnnotationTasksDataInput {
  displayName: String
  emailAddress: String
  systemLogin: SystemLoginUpdateOneWithoutUserInput
  localLogin: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups: GroupUpdateManyWithoutOwnerInput
  createdGroups: GroupUpdateManyWithoutCreatorInput
  memberOfGroups: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages: ImageUpdateManyWithoutOwnerInput
  createdImages: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutOwnerInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelUpdateManyWithoutCreatorInput
}

input UserUpdateWithoutCreatedClassificationContextsDataInput {
  displayName: String
  emailAddress: String
  systemLogin: SystemLoginUpdateOneWithoutUserInput
  localLogin: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups: GroupUpdateManyWithoutOwnerInput
  createdGroups: GroupUpdateManyWithoutCreatorInput
  memberOfGroups: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages: ImageUpdateManyWithoutOwnerInput
  createdImages: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutOwnerInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelUpdateManyWithoutCreatorInput
}

input UserUpdateWithoutCreatedClassificationLabelsDataInput {
  displayName: String
  emailAddress: String
  systemLogin: SystemLoginUpdateOneWithoutUserInput
  localLogin: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups: GroupUpdateManyWithoutOwnerInput
  createdGroups: GroupUpdateManyWithoutCreatorInput
  memberOfGroups: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages: ImageUpdateManyWithoutOwnerInput
  createdImages: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutOwnerInput
}

input UserUpdateWithoutCreatedGroupsDataInput {
  displayName: String
  emailAddress: String
  systemLogin: SystemLoginUpdateOneWithoutUserInput
  localLogin: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups: GroupUpdateManyWithoutOwnerInput
  memberOfGroups: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages: ImageUpdateManyWithoutOwnerInput
  createdImages: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelUpdateManyWithoutCreatorInput
}

input UserUpdateWithoutCreatedImagesDataInput {
  displayName: String
  emailAddress: String
  systemLogin: SystemLoginUpdateOneWithoutUserInput
  localLogin: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups: GroupUpdateManyWithoutOwnerInput
  createdGroups: GroupUpdateManyWithoutCreatorInput
  memberOfGroups: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages: ImageUpdateManyWithoutOwnerInput
  ownedAnnotations: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelUpdateManyWithoutCreatorInput
}

input UserUpdateWithoutLocalLoginDataInput {
  displayName: String
  emailAddress: String
  systemLogin: SystemLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups: GroupUpdateManyWithoutOwnerInput
  createdGroups: GroupUpdateManyWithoutCreatorInput
  memberOfGroups: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages: ImageUpdateManyWithoutOwnerInput
  createdImages: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelUpdateManyWithoutCreatorInput
}

input UserUpdateWithoutManagerOfGroupsDataInput {
  displayName: String
  emailAddress: String
  systemLogin: SystemLoginUpdateOneWithoutUserInput
  localLogin: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups: GroupUpdateManyWithoutOwnerInput
  createdGroups: GroupUpdateManyWithoutCreatorInput
  memberOfGroups: GroupUpdateManyWithoutMemberUsersInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages: ImageUpdateManyWithoutOwnerInput
  createdImages: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelUpdateManyWithoutCreatorInput
}

input UserUpdateWithoutMemberOfGroupsDataInput {
  displayName: String
  emailAddress: String
  systemLogin: SystemLoginUpdateOneWithoutUserInput
  localLogin: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups: GroupUpdateManyWithoutOwnerInput
  createdGroups: GroupUpdateManyWithoutCreatorInput
  managerOfGroups: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages: ImageUpdateManyWithoutOwnerInput
  createdImages: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelUpdateManyWithoutCreatorInput
}

input UserUpdateWithoutOwnedAnnotatablesDataInput {
  displayName: String
  emailAddress: String
  systemLogin: SystemLoginUpdateOneWithoutUserInput
  localLogin: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups: GroupUpdateManyWithoutOwnerInput
  createdGroups: GroupUpdateManyWithoutCreatorInput
  memberOfGroups: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups: GroupUpdateManyWithoutManagerUsersInput
  createdAnnotatables: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages: ImageUpdateManyWithoutOwnerInput
  createdImages: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelUpdateManyWithoutCreatorInput
}

input UserUpdateWithoutOwnedAnnotationsDataInput {
  displayName: String
  emailAddress: String
  systemLogin: SystemLoginUpdateOneWithoutUserInput
  localLogin: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups: GroupUpdateManyWithoutOwnerInput
  createdGroups: GroupUpdateManyWithoutCreatorInput
  memberOfGroups: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages: ImageUpdateManyWithoutOwnerInput
  createdImages: ImageUpdateManyWithoutCreatorInput
  createdAnnotations: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelUpdateManyWithoutCreatorInput
}

input UserUpdateWithoutOwnedAnnotationTasksDataInput {
  displayName: String
  emailAddress: String
  systemLogin: SystemLoginUpdateOneWithoutUserInput
  localLogin: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups: GroupUpdateManyWithoutOwnerInput
  createdGroups: GroupUpdateManyWithoutCreatorInput
  memberOfGroups: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages: ImageUpdateManyWithoutOwnerInput
  createdImages: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations: AnnotationUpdateManyWithoutCreatorInput
  createdAnnotationTasks: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelUpdateManyWithoutCreatorInput
}

input UserUpdateWithoutOwnedClassificationContextsDataInput {
  displayName: String
  emailAddress: String
  systemLogin: SystemLoginUpdateOneWithoutUserInput
  localLogin: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups: GroupUpdateManyWithoutOwnerInput
  createdGroups: GroupUpdateManyWithoutCreatorInput
  memberOfGroups: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages: ImageUpdateManyWithoutOwnerInput
  createdImages: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskUpdateManyWithoutCreatorInput
  createdClassificationContexts: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelUpdateManyWithoutCreatorInput
}

input UserUpdateWithoutOwnedClassificationLabelsDataInput {
  displayName: String
  emailAddress: String
  systemLogin: SystemLoginUpdateOneWithoutUserInput
  localLogin: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups: GroupUpdateManyWithoutOwnerInput
  createdGroups: GroupUpdateManyWithoutCreatorInput
  memberOfGroups: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages: ImageUpdateManyWithoutOwnerInput
  createdImages: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextUpdateManyWithoutCreatorInput
  createdClassificationLabels: ClassificationLabelUpdateManyWithoutCreatorInput
}

input UserUpdateWithoutOwnedGroupsDataInput {
  displayName: String
  emailAddress: String
  systemLogin: SystemLoginUpdateOneWithoutUserInput
  localLogin: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations: AnnotationUpdateManyWithoutAnnotatorInput
  createdGroups: GroupUpdateManyWithoutCreatorInput
  memberOfGroups: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages: ImageUpdateManyWithoutOwnerInput
  createdImages: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelUpdateManyWithoutCreatorInput
}

input UserUpdateWithoutOwnedImagesDataInput {
  displayName: String
  emailAddress: String
  systemLogin: SystemLoginUpdateOneWithoutUserInput
  localLogin: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups: GroupUpdateManyWithoutOwnerInput
  createdGroups: GroupUpdateManyWithoutCreatorInput
  memberOfGroups: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableUpdateManyWithoutCreatorInput
  createdImages: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelUpdateManyWithoutCreatorInput
}

input UserUpdateWithoutSystemLoginDataInput {
  displayName: String
  emailAddress: String
  localLogin: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups: GroupUpdateManyWithoutOwnerInput
  createdGroups: GroupUpdateManyWithoutCreatorInput
  memberOfGroups: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages: ImageUpdateManyWithoutOwnerInput
  createdImages: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels: ClassificationLabelUpdateManyWithoutCreatorInput
}

input UserUpdateWithWhereUniqueWithoutAssignedAnnotationTasksInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutAssignedAnnotationTasksDataInput!
}

input UserUpdateWithWhereUniqueWithoutManagerOfGroupsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutManagerOfGroupsDataInput!
}

input UserUpdateWithWhereUniqueWithoutMemberOfGroupsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutMemberOfGroupsDataInput!
}

input UserUpsertWithoutAnnotationsInput {
  update: UserUpdateWithoutAnnotationsDataInput!
  create: UserCreateWithoutAnnotationsInput!
}

input UserUpsertWithoutCreatedAnnotatablesInput {
  update: UserUpdateWithoutCreatedAnnotatablesDataInput!
  create: UserCreateWithoutCreatedAnnotatablesInput!
}

input UserUpsertWithoutCreatedAnnotationsInput {
  update: UserUpdateWithoutCreatedAnnotationsDataInput!
  create: UserCreateWithoutCreatedAnnotationsInput!
}

input UserUpsertWithoutCreatedAnnotationTasksInput {
  update: UserUpdateWithoutCreatedAnnotationTasksDataInput!
  create: UserCreateWithoutCreatedAnnotationTasksInput!
}

input UserUpsertWithoutCreatedClassificationContextsInput {
  update: UserUpdateWithoutCreatedClassificationContextsDataInput!
  create: UserCreateWithoutCreatedClassificationContextsInput!
}

input UserUpsertWithoutCreatedClassificationLabelsInput {
  update: UserUpdateWithoutCreatedClassificationLabelsDataInput!
  create: UserCreateWithoutCreatedClassificationLabelsInput!
}

input UserUpsertWithoutCreatedGroupsInput {
  update: UserUpdateWithoutCreatedGroupsDataInput!
  create: UserCreateWithoutCreatedGroupsInput!
}

input UserUpsertWithoutCreatedImagesInput {
  update: UserUpdateWithoutCreatedImagesDataInput!
  create: UserCreateWithoutCreatedImagesInput!
}

input UserUpsertWithoutLocalLoginInput {
  update: UserUpdateWithoutLocalLoginDataInput!
  create: UserCreateWithoutLocalLoginInput!
}

input UserUpsertWithoutOwnedAnnotatablesInput {
  update: UserUpdateWithoutOwnedAnnotatablesDataInput!
  create: UserCreateWithoutOwnedAnnotatablesInput!
}

input UserUpsertWithoutOwnedAnnotationsInput {
  update: UserUpdateWithoutOwnedAnnotationsDataInput!
  create: UserCreateWithoutOwnedAnnotationsInput!
}

input UserUpsertWithoutOwnedAnnotationTasksInput {
  update: UserUpdateWithoutOwnedAnnotationTasksDataInput!
  create: UserCreateWithoutOwnedAnnotationTasksInput!
}

input UserUpsertWithoutOwnedClassificationContextsInput {
  update: UserUpdateWithoutOwnedClassificationContextsDataInput!
  create: UserCreateWithoutOwnedClassificationContextsInput!
}

input UserUpsertWithoutOwnedClassificationLabelsInput {
  update: UserUpdateWithoutOwnedClassificationLabelsDataInput!
  create: UserCreateWithoutOwnedClassificationLabelsInput!
}

input UserUpsertWithoutOwnedGroupsInput {
  update: UserUpdateWithoutOwnedGroupsDataInput!
  create: UserCreateWithoutOwnedGroupsInput!
}

input UserUpsertWithoutOwnedImagesInput {
  update: UserUpdateWithoutOwnedImagesDataInput!
  create: UserCreateWithoutOwnedImagesInput!
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

input UserUpsertWithWhereUniqueWithoutManagerOfGroupsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutManagerOfGroupsDataInput!
  create: UserCreateWithoutManagerOfGroupsInput!
}

input UserUpsertWithWhereUniqueWithoutMemberOfGroupsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutMemberOfGroupsDataInput!
  create: UserCreateWithoutMemberOfGroupsInput!
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
  emailAddress: String
  emailAddress_not: String
  emailAddress_in: [String!]
  emailAddress_not_in: [String!]
  emailAddress_lt: String
  emailAddress_lte: String
  emailAddress_gt: String
  emailAddress_gte: String
  emailAddress_contains: String
  emailAddress_not_contains: String
  emailAddress_starts_with: String
  emailAddress_not_starts_with: String
  emailAddress_ends_with: String
  emailAddress_not_ends_with: String
  systemLogin: SystemLoginWhereInput
  localLogin: LocalLoginWhereInput
  assignedAnnotationTasks_every: AnnotationTaskWhereInput
  assignedAnnotationTasks_some: AnnotationTaskWhereInput
  assignedAnnotationTasks_none: AnnotationTaskWhereInput
  annotations_every: AnnotationWhereInput
  annotations_some: AnnotationWhereInput
  annotations_none: AnnotationWhereInput
  ownedGroups_every: GroupWhereInput
  ownedGroups_some: GroupWhereInput
  ownedGroups_none: GroupWhereInput
  createdGroups_every: GroupWhereInput
  createdGroups_some: GroupWhereInput
  createdGroups_none: GroupWhereInput
  memberOfGroups_every: GroupWhereInput
  memberOfGroups_some: GroupWhereInput
  memberOfGroups_none: GroupWhereInput
  managerOfGroups_every: GroupWhereInput
  managerOfGroups_some: GroupWhereInput
  managerOfGroups_none: GroupWhereInput
  ownedAnnotatables_every: AnnotatableWhereInput
  ownedAnnotatables_some: AnnotatableWhereInput
  ownedAnnotatables_none: AnnotatableWhereInput
  createdAnnotatables_every: AnnotatableWhereInput
  createdAnnotatables_some: AnnotatableWhereInput
  createdAnnotatables_none: AnnotatableWhereInput
  ownedImages_every: ImageWhereInput
  ownedImages_some: ImageWhereInput
  ownedImages_none: ImageWhereInput
  createdImages_every: ImageWhereInput
  createdImages_some: ImageWhereInput
  createdImages_none: ImageWhereInput
  ownedAnnotations_every: AnnotationWhereInput
  ownedAnnotations_some: AnnotationWhereInput
  ownedAnnotations_none: AnnotationWhereInput
  createdAnnotations_every: AnnotationWhereInput
  createdAnnotations_some: AnnotationWhereInput
  createdAnnotations_none: AnnotationWhereInput
  ownedAnnotationTasks_every: AnnotationTaskWhereInput
  ownedAnnotationTasks_some: AnnotationTaskWhereInput
  ownedAnnotationTasks_none: AnnotationTaskWhereInput
  createdAnnotationTasks_every: AnnotationTaskWhereInput
  createdAnnotationTasks_some: AnnotationTaskWhereInput
  createdAnnotationTasks_none: AnnotationTaskWhereInput
  ownedClassificationContexts_every: ClassificationContextWhereInput
  ownedClassificationContexts_some: ClassificationContextWhereInput
  ownedClassificationContexts_none: ClassificationContextWhereInput
  createdClassificationContexts_every: ClassificationContextWhereInput
  createdClassificationContexts_some: ClassificationContextWhereInput
  createdClassificationContexts_none: ClassificationContextWhereInput
  ownedClassificationLabels_every: ClassificationLabelWhereInput
  ownedClassificationLabels_some: ClassificationLabelWhereInput
  ownedClassificationLabels_none: ClassificationLabelWhereInput
  createdClassificationLabels_every: ClassificationLabelWhereInput
  createdClassificationLabels_some: ClassificationLabelWhereInput
  createdClassificationLabels_none: ClassificationLabelWhereInput
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
  emailAddress: String
}
`