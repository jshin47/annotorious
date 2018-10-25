import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    systemLogins: <T = SystemLogin[]>(args: { where?: SystemLoginWhereInput, orderBy?: SystemLoginOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    localLogins: <T = LocalLogin[]>(args: { where?: LocalLoginWhereInput, orderBy?: LocalLoginOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    annotations: <T = Annotation[]>(args: { where?: AnnotationWhereInput, orderBy?: AnnotationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    annotationTasks: <T = AnnotationTask[]>(args: { where?: AnnotationTaskWhereInput, orderBy?: AnnotationTaskOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    annotatables: <T = Annotatable[]>(args: { where?: AnnotatableWhereInput, orderBy?: AnnotatableOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    images: <T = Image[]>(args: { where?: ImageWhereInput, orderBy?: ImageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    systemLogin: <T = SystemLogin | null>(args: { where: SystemLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    localLogin: <T = LocalLogin | null>(args: { where: LocalLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    annotation: <T = Annotation | null>(args: { where: AnnotationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    annotationTask: <T = AnnotationTask | null>(args: { where: AnnotationTaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    annotatable: <T = Annotatable | null>(args: { where: AnnotatableWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    image: <T = Image | null>(args: { where: ImageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    systemLoginsConnection: <T = SystemLoginConnection>(args: { where?: SystemLoginWhereInput, orderBy?: SystemLoginOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    localLoginsConnection: <T = LocalLoginConnection>(args: { where?: LocalLoginWhereInput, orderBy?: LocalLoginOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    annotationsConnection: <T = AnnotationConnection>(args: { where?: AnnotationWhereInput, orderBy?: AnnotationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    annotationTasksConnection: <T = AnnotationTaskConnection>(args: { where?: AnnotationTaskWhereInput, orderBy?: AnnotationTaskOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    annotatablesConnection: <T = AnnotatableConnection>(args: { where?: AnnotatableWhereInput, orderBy?: AnnotatableOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    imagesConnection: <T = ImageConnection>(args: { where?: ImageWhereInput, orderBy?: ImageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSystemLogin: <T = SystemLogin>(args: { data: SystemLoginCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLocalLogin: <T = LocalLogin>(args: { data: LocalLoginCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAnnotation: <T = Annotation>(args: { data: AnnotationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAnnotationTask: <T = AnnotationTask>(args: { data: AnnotationTaskCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAnnotatable: <T = Annotatable>(args: { data: AnnotatableCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createImage: <T = Image>(args: { data: ImageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSystemLogin: <T = SystemLogin | null>(args: { data: SystemLoginUpdateInput, where: SystemLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLocalLogin: <T = LocalLogin | null>(args: { data: LocalLoginUpdateInput, where: LocalLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAnnotation: <T = Annotation | null>(args: { data: AnnotationUpdateInput, where: AnnotationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAnnotationTask: <T = AnnotationTask | null>(args: { data: AnnotationTaskUpdateInput, where: AnnotationTaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAnnotatable: <T = Annotatable | null>(args: { data: AnnotatableUpdateInput, where: AnnotatableWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateImage: <T = Image | null>(args: { data: ImageUpdateInput, where: ImageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSystemLogin: <T = SystemLogin | null>(args: { where: SystemLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLocalLogin: <T = LocalLogin | null>(args: { where: LocalLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAnnotation: <T = Annotation | null>(args: { where: AnnotationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAnnotationTask: <T = AnnotationTask | null>(args: { where: AnnotationTaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAnnotatable: <T = Annotatable | null>(args: { where: AnnotatableWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteImage: <T = Image | null>(args: { where: ImageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSystemLogin: <T = SystemLogin>(args: { where: SystemLoginWhereUniqueInput, create: SystemLoginCreateInput, update: SystemLoginUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLocalLogin: <T = LocalLogin>(args: { where: LocalLoginWhereUniqueInput, create: LocalLoginCreateInput, update: LocalLoginUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAnnotation: <T = Annotation>(args: { where: AnnotationWhereUniqueInput, create: AnnotationCreateInput, update: AnnotationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAnnotationTask: <T = AnnotationTask>(args: { where: AnnotationTaskWhereUniqueInput, create: AnnotationTaskCreateInput, update: AnnotationTaskUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAnnotatable: <T = Annotatable>(args: { where: AnnotatableWhereUniqueInput, create: AnnotatableCreateInput, update: AnnotatableUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertImage: <T = Image>(args: { where: ImageWhereUniqueInput, create: ImageCreateInput, update: ImageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySystemLogins: <T = BatchPayload>(args: { data: SystemLoginUpdateInput, where?: SystemLoginWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLocalLogins: <T = BatchPayload>(args: { data: LocalLoginUpdateInput, where?: LocalLoginWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAnnotations: <T = BatchPayload>(args: { data: AnnotationUpdateInput, where?: AnnotationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAnnotationTasks: <T = BatchPayload>(args: { data: AnnotationTaskUpdateInput, where?: AnnotationTaskWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAnnotatables: <T = BatchPayload>(args: { data: AnnotatableUpdateInput, where?: AnnotatableWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyImages: <T = BatchPayload>(args: { data: ImageUpdateInput, where?: ImageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySystemLogins: <T = BatchPayload>(args: { where?: SystemLoginWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLocalLogins: <T = BatchPayload>(args: { where?: LocalLoginWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAnnotations: <T = BatchPayload>(args: { where?: AnnotationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAnnotationTasks: <T = BatchPayload>(args: { where?: AnnotationTaskWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAnnotatables: <T = BatchPayload>(args: { where?: AnnotatableWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyImages: <T = BatchPayload>(args: { where?: ImageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    systemLogin: <T = SystemLoginSubscriptionPayload | null>(args: { where?: SystemLoginSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    localLogin: <T = LocalLoginSubscriptionPayload | null>(args: { where?: LocalLoginSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    annotation: <T = AnnotationSubscriptionPayload | null>(args: { where?: AnnotationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    annotationTask: <T = AnnotationTaskSubscriptionPayload | null>(args: { where?: AnnotationTaskSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    annotatable: <T = AnnotatableSubscriptionPayload | null>(args: { where?: AnnotatableSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    image: <T = ImageSubscriptionPayload | null>(args: { where?: ImageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  SystemLogin: (where?: SystemLoginWhereInput) => Promise<boolean>
  LocalLogin: (where?: LocalLoginWhereInput) => Promise<boolean>
  Annotation: (where?: AnnotationWhereInput) => Promise<boolean>
  AnnotationTask: (where?: AnnotationTaskWhereInput) => Promise<boolean>
  Annotatable: (where?: AnnotatableWhereInput) => Promise<boolean>
  Image: (where?: ImageWhereInput) => Promise<boolean>
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

const typeDefs = `type AggregateAnnotatable {
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

type Annotatable implements Node {
  id: ID!
  displayName: String
  text: String
  image: Image
  tasks(where: AnnotationTaskWhereInput, orderBy: AnnotationTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AnnotationTask!]
}

"""A connection to a list of items."""
type AnnotatableConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type AnnotatableEdge {
  """The item at the end of the edge."""
  node: Annotatable!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AnnotatableOrderByInput {
  id_ASC
  id_DESC
  displayName_ASC
  displayName_DESC
  text_ASC
  text_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
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
  """Logical AND on all given filters."""
  AND: [AnnotatableSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AnnotatableSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AnnotatableSubscriptionWhereInput!]

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
  node: AnnotatableWhereInput
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
  connect: [AnnotatableWhereUniqueInput!]
  disconnect: [AnnotatableWhereUniqueInput!]
  delete: [AnnotatableWhereUniqueInput!]
  update: [AnnotatableUpdateWithWhereUniqueWithoutTasksInput!]
  upsert: [AnnotatableUpsertWithWhereUniqueWithoutTasksInput!]
}

input AnnotatableUpdateOneRequiredInput {
  create: AnnotatableCreateInput
  connect: AnnotatableWhereUniqueInput
  update: AnnotatableUpdateDataInput
  upsert: AnnotatableUpsertNestedInput
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
  """Logical AND on all given filters."""
  AND: [AnnotatableWhereInput!]

  """Logical OR on all given filters."""
  OR: [AnnotatableWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AnnotatableWhereInput!]
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
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  image: ImageWhereInput
  tasks_every: AnnotationTaskWhereInput
  tasks_some: AnnotationTaskWhereInput
  tasks_none: AnnotationTaskWhereInput
}

input AnnotatableWhereUniqueInput {
  id: ID
}

type Annotation implements Node {
  id: ID!
  annotator: User!
  subject: Annotatable!
  task: AnnotationTask
  data: Json
}

"""A connection to a list of items."""
type AnnotationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AnnotationEdge]!
  aggregate: AggregateAnnotation!
}

input AnnotationCreateInput {
  data: Json
  annotator: UserCreateOneWithoutAnnotationsInput!
  subject: AnnotatableCreateOneInput!
  task: AnnotationTaskCreateOneInput
}

input AnnotationCreateManyWithoutAnnotatorInput {
  create: [AnnotationCreateWithoutAnnotatorInput!]
  connect: [AnnotationWhereUniqueInput!]
}

input AnnotationCreateWithoutAnnotatorInput {
  data: Json
  subject: AnnotatableCreateOneInput!
  task: AnnotationTaskCreateOneInput
}

"""An edge in a connection."""
type AnnotationEdge {
  """The item at the end of the edge."""
  node: Annotation!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AnnotationOrderByInput {
  id_ASC
  id_DESC
  data_ASC
  data_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
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
  """Logical AND on all given filters."""
  AND: [AnnotationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AnnotationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AnnotationSubscriptionWhereInput!]

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
  node: AnnotationWhereInput
}

type AnnotationTask implements Node {
  id: ID!
  assignees(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  displayName: String!
  subjects(where: AnnotatableWhereInput, orderBy: AnnotatableOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Annotatable!]
  requirements: Json
}

"""A connection to a list of items."""
type AnnotationTaskConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AnnotationTaskEdge]!
  aggregate: AggregateAnnotationTask!
}

input AnnotationTaskCreateInput {
  displayName: String!
  requirements: Json
  assignees: UserCreateManyWithoutAssignedAnnotationTasksInput
  subjects: AnnotatableCreateManyWithoutTasksInput
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
  requirements: Json
  subjects: AnnotatableCreateManyWithoutTasksInput
}

input AnnotationTaskCreateWithoutSubjectsInput {
  displayName: String!
  requirements: Json
  assignees: UserCreateManyWithoutAssignedAnnotationTasksInput
}

"""An edge in a connection."""
type AnnotationTaskEdge {
  """The item at the end of the edge."""
  node: AnnotationTask!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AnnotationTaskOrderByInput {
  id_ASC
  id_DESC
  displayName_ASC
  displayName_DESC
  requirements_ASC
  requirements_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
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
  """Logical AND on all given filters."""
  AND: [AnnotationTaskSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AnnotationTaskSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AnnotationTaskSubscriptionWhereInput!]

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
  node: AnnotationTaskWhereInput
}

input AnnotationTaskUpdateDataInput {
  displayName: String
  requirements: Json
  assignees: UserUpdateManyWithoutAssignedAnnotationTasksInput
  subjects: AnnotatableUpdateManyWithoutTasksInput
}

input AnnotationTaskUpdateInput {
  displayName: String
  requirements: Json
  assignees: UserUpdateManyWithoutAssignedAnnotationTasksInput
  subjects: AnnotatableUpdateManyWithoutTasksInput
}

input AnnotationTaskUpdateManyWithoutAssigneesInput {
  create: [AnnotationTaskCreateWithoutAssigneesInput!]
  connect: [AnnotationTaskWhereUniqueInput!]
  disconnect: [AnnotationTaskWhereUniqueInput!]
  delete: [AnnotationTaskWhereUniqueInput!]
  update: [AnnotationTaskUpdateWithWhereUniqueWithoutAssigneesInput!]
  upsert: [AnnotationTaskUpsertWithWhereUniqueWithoutAssigneesInput!]
}

input AnnotationTaskUpdateManyWithoutSubjectsInput {
  create: [AnnotationTaskCreateWithoutSubjectsInput!]
  connect: [AnnotationTaskWhereUniqueInput!]
  disconnect: [AnnotationTaskWhereUniqueInput!]
  delete: [AnnotationTaskWhereUniqueInput!]
  update: [AnnotationTaskUpdateWithWhereUniqueWithoutSubjectsInput!]
  upsert: [AnnotationTaskUpsertWithWhereUniqueWithoutSubjectsInput!]
}

input AnnotationTaskUpdateOneInput {
  create: AnnotationTaskCreateInput
  connect: AnnotationTaskWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: AnnotationTaskUpdateDataInput
  upsert: AnnotationTaskUpsertNestedInput
}

input AnnotationTaskUpdateWithoutAssigneesDataInput {
  displayName: String
  requirements: Json
  subjects: AnnotatableUpdateManyWithoutTasksInput
}

input AnnotationTaskUpdateWithoutSubjectsDataInput {
  displayName: String
  requirements: Json
  assignees: UserUpdateManyWithoutAssignedAnnotationTasksInput
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
  """Logical AND on all given filters."""
  AND: [AnnotationTaskWhereInput!]

  """Logical OR on all given filters."""
  OR: [AnnotationTaskWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AnnotationTaskWhereInput!]
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
  assignees_every: UserWhereInput
  assignees_some: UserWhereInput
  assignees_none: UserWhereInput
  subjects_every: AnnotatableWhereInput
  subjects_some: AnnotatableWhereInput
  subjects_none: AnnotatableWhereInput
}

input AnnotationTaskWhereUniqueInput {
  id: ID
}

input AnnotationUpdateInput {
  data: Json
  annotator: UserUpdateOneRequiredWithoutAnnotationsInput
  subject: AnnotatableUpdateOneRequiredInput
  task: AnnotationTaskUpdateOneInput
}

input AnnotationUpdateManyWithoutAnnotatorInput {
  create: [AnnotationCreateWithoutAnnotatorInput!]
  connect: [AnnotationWhereUniqueInput!]
  disconnect: [AnnotationWhereUniqueInput!]
  delete: [AnnotationWhereUniqueInput!]
  update: [AnnotationUpdateWithWhereUniqueWithoutAnnotatorInput!]
  upsert: [AnnotationUpsertWithWhereUniqueWithoutAnnotatorInput!]
}

input AnnotationUpdateWithoutAnnotatorDataInput {
  data: Json
  subject: AnnotatableUpdateOneRequiredInput
  task: AnnotationTaskUpdateOneInput
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
  """Logical AND on all given filters."""
  AND: [AnnotationWhereInput!]

  """Logical OR on all given filters."""
  OR: [AnnotationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AnnotationWhereInput!]
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
  annotator: UserWhereInput
  subject: AnnotatableWhereInput
  task: AnnotationTaskWhereInput
}

input AnnotationWhereUniqueInput {
  id: ID
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

type Image implements Node {
  id: ID!
  uri: String!
  thumbnailUri: String
  caption: String
}

"""A connection to a list of items."""
type ImageConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type ImageEdge {
  """The item at the end of the edge."""
  node: Image!

  """A cursor for use in pagination."""
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
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
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
  """Logical AND on all given filters."""
  AND: [ImageSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ImageSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ImageSubscriptionWhereInput!]

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
  node: ImageWhereInput
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
  connect: ImageWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ImageUpdateDataInput
  upsert: ImageUpsertNestedInput
}

input ImageUpsertNestedInput {
  update: ImageUpdateDataInput!
  create: ImageCreateInput!
}

input ImageWhereInput {
  """Logical AND on all given filters."""
  AND: [ImageWhereInput!]

  """Logical OR on all given filters."""
  OR: [ImageWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ImageWhereInput!]
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
  uri: String

  """All values that are not equal to given value."""
  uri_not: String

  """All values that are contained in given list."""
  uri_in: [String!]

  """All values that are not contained in given list."""
  uri_not_in: [String!]

  """All values less than the given value."""
  uri_lt: String

  """All values less than or equal the given value."""
  uri_lte: String

  """All values greater than the given value."""
  uri_gt: String

  """All values greater than or equal the given value."""
  uri_gte: String

  """All values containing the given string."""
  uri_contains: String

  """All values not containing the given string."""
  uri_not_contains: String

  """All values starting with the given string."""
  uri_starts_with: String

  """All values not starting with the given string."""
  uri_not_starts_with: String

  """All values ending with the given string."""
  uri_ends_with: String

  """All values not ending with the given string."""
  uri_not_ends_with: String
  thumbnailUri: String

  """All values that are not equal to given value."""
  thumbnailUri_not: String

  """All values that are contained in given list."""
  thumbnailUri_in: [String!]

  """All values that are not contained in given list."""
  thumbnailUri_not_in: [String!]

  """All values less than the given value."""
  thumbnailUri_lt: String

  """All values less than or equal the given value."""
  thumbnailUri_lte: String

  """All values greater than the given value."""
  thumbnailUri_gt: String

  """All values greater than or equal the given value."""
  thumbnailUri_gte: String

  """All values containing the given string."""
  thumbnailUri_contains: String

  """All values not containing the given string."""
  thumbnailUri_not_contains: String

  """All values starting with the given string."""
  thumbnailUri_starts_with: String

  """All values not starting with the given string."""
  thumbnailUri_not_starts_with: String

  """All values ending with the given string."""
  thumbnailUri_ends_with: String

  """All values not ending with the given string."""
  thumbnailUri_not_ends_with: String
  caption: String

  """All values that are not equal to given value."""
  caption_not: String

  """All values that are contained in given list."""
  caption_in: [String!]

  """All values that are not contained in given list."""
  caption_not_in: [String!]

  """All values less than the given value."""
  caption_lt: String

  """All values less than or equal the given value."""
  caption_lte: String

  """All values greater than the given value."""
  caption_gt: String

  """All values greater than or equal the given value."""
  caption_gte: String

  """All values containing the given string."""
  caption_contains: String

  """All values not containing the given string."""
  caption_not_contains: String

  """All values starting with the given string."""
  caption_starts_with: String

  """All values not starting with the given string."""
  caption_not_starts_with: String

  """All values ending with the given string."""
  caption_ends_with: String

  """All values not ending with the given string."""
  caption_not_ends_with: String
}

input ImageWhereUniqueInput {
  id: ID
  uri: String
}

"""Raw JSON value"""
scalar Json

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
  createAnnotation(data: AnnotationCreateInput!): Annotation!
  createAnnotationTask(data: AnnotationTaskCreateInput!): AnnotationTask!
  createAnnotatable(data: AnnotatableCreateInput!): Annotatable!
  createImage(data: ImageCreateInput!): Image!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateSystemLogin(data: SystemLoginUpdateInput!, where: SystemLoginWhereUniqueInput!): SystemLogin
  updateLocalLogin(data: LocalLoginUpdateInput!, where: LocalLoginWhereUniqueInput!): LocalLogin
  updateAnnotation(data: AnnotationUpdateInput!, where: AnnotationWhereUniqueInput!): Annotation
  updateAnnotationTask(data: AnnotationTaskUpdateInput!, where: AnnotationTaskWhereUniqueInput!): AnnotationTask
  updateAnnotatable(data: AnnotatableUpdateInput!, where: AnnotatableWhereUniqueInput!): Annotatable
  updateImage(data: ImageUpdateInput!, where: ImageWhereUniqueInput!): Image
  deleteUser(where: UserWhereUniqueInput!): User
  deleteSystemLogin(where: SystemLoginWhereUniqueInput!): SystemLogin
  deleteLocalLogin(where: LocalLoginWhereUniqueInput!): LocalLogin
  deleteAnnotation(where: AnnotationWhereUniqueInput!): Annotation
  deleteAnnotationTask(where: AnnotationTaskWhereUniqueInput!): AnnotationTask
  deleteAnnotatable(where: AnnotatableWhereUniqueInput!): Annotatable
  deleteImage(where: ImageWhereUniqueInput!): Image
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertSystemLogin(where: SystemLoginWhereUniqueInput!, create: SystemLoginCreateInput!, update: SystemLoginUpdateInput!): SystemLogin!
  upsertLocalLogin(where: LocalLoginWhereUniqueInput!, create: LocalLoginCreateInput!, update: LocalLoginUpdateInput!): LocalLogin!
  upsertAnnotation(where: AnnotationWhereUniqueInput!, create: AnnotationCreateInput!, update: AnnotationUpdateInput!): Annotation!
  upsertAnnotationTask(where: AnnotationTaskWhereUniqueInput!, create: AnnotationTaskCreateInput!, update: AnnotationTaskUpdateInput!): AnnotationTask!
  upsertAnnotatable(where: AnnotatableWhereUniqueInput!, create: AnnotatableCreateInput!, update: AnnotatableUpdateInput!): Annotatable!
  upsertImage(where: ImageWhereUniqueInput!, create: ImageCreateInput!, update: ImageUpdateInput!): Image!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManySystemLogins(data: SystemLoginUpdateInput!, where: SystemLoginWhereInput): BatchPayload!
  updateManyLocalLogins(data: LocalLoginUpdateInput!, where: LocalLoginWhereInput): BatchPayload!
  updateManyAnnotations(data: AnnotationUpdateInput!, where: AnnotationWhereInput): BatchPayload!
  updateManyAnnotationTasks(data: AnnotationTaskUpdateInput!, where: AnnotationTaskWhereInput): BatchPayload!
  updateManyAnnotatables(data: AnnotatableUpdateInput!, where: AnnotatableWhereInput): BatchPayload!
  updateManyImages(data: ImageUpdateInput!, where: ImageWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManySystemLogins(where: SystemLoginWhereInput): BatchPayload!
  deleteManyLocalLogins(where: LocalLoginWhereInput): BatchPayload!
  deleteManyAnnotations(where: AnnotationWhereInput): BatchPayload!
  deleteManyAnnotationTasks(where: AnnotationTaskWhereInput): BatchPayload!
  deleteManyAnnotatables(where: AnnotatableWhereInput): BatchPayload!
  deleteManyImages(where: ImageWhereInput): BatchPayload!
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
  annotations(where: AnnotationWhereInput, orderBy: AnnotationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Annotation]!
  annotationTasks(where: AnnotationTaskWhereInput, orderBy: AnnotationTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AnnotationTask]!
  annotatables(where: AnnotatableWhereInput, orderBy: AnnotatableOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Annotatable]!
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image]!
  user(where: UserWhereUniqueInput!): User
  systemLogin(where: SystemLoginWhereUniqueInput!): SystemLogin
  localLogin(where: LocalLoginWhereUniqueInput!): LocalLogin
  annotation(where: AnnotationWhereUniqueInput!): Annotation
  annotationTask(where: AnnotationTaskWhereUniqueInput!): AnnotationTask
  annotatable(where: AnnotatableWhereUniqueInput!): Annotatable
  image(where: ImageWhereUniqueInput!): Image
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  systemLoginsConnection(where: SystemLoginWhereInput, orderBy: SystemLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SystemLoginConnection!
  localLoginsConnection(where: LocalLoginWhereInput, orderBy: LocalLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocalLoginConnection!
  annotationsConnection(where: AnnotationWhereInput, orderBy: AnnotationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AnnotationConnection!
  annotationTasksConnection(where: AnnotationTaskWhereInput, orderBy: AnnotationTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AnnotationTaskConnection!
  annotatablesConnection(where: AnnotatableWhereInput, orderBy: AnnotatableOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AnnotatableConnection!
  imagesConnection(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ImageConnection!

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
  annotation(where: AnnotationSubscriptionWhereInput): AnnotationSubscriptionPayload
  annotationTask(where: AnnotationTaskSubscriptionWhereInput): AnnotationTaskSubscriptionPayload
  annotatable(where: AnnotatableSubscriptionWhereInput): AnnotatableSubscriptionPayload
  image(where: ImageSubscriptionWhereInput): ImageSubscriptionPayload
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
  assignedAnnotationTasks(where: AnnotationTaskWhereInput, orderBy: AnnotationTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AnnotationTask!]
  annotations(where: AnnotationWhereInput, orderBy: AnnotationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Annotation!]
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
  assignedAnnotationTasks: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations: AnnotationUpdateManyWithoutAnnotatorInput
}

input UserUpdateManyWithoutAssignedAnnotationTasksInput {
  create: [UserCreateWithoutAssignedAnnotationTasksInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutAssignedAnnotationTasksInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutAssignedAnnotationTasksInput!]
}

input UserUpdateOneRequiredWithoutAnnotationsInput {
  create: UserCreateWithoutAnnotationsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutAnnotationsDataInput
  upsert: UserUpsertWithoutAnnotationsInput
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
  assignedAnnotationTasks_every: AnnotationTaskWhereInput
  assignedAnnotationTasks_some: AnnotationTaskWhereInput
  assignedAnnotationTasks_none: AnnotationTaskWhereInput
  annotations_every: AnnotationWhereInput
  annotations_some: AnnotationWhereInput
  annotations_none: AnnotationWhereInput
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

export type AnnotationTaskOrderByInput =   'id_ASC' |
  'id_DESC' |
  'displayName_ASC' |
  'displayName_DESC' |
  'requirements_ASC' |
  'requirements_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type AnnotatableOrderByInput =   'id_ASC' |
  'id_DESC' |
  'displayName_ASC' |
  'displayName_DESC' |
  'text_ASC' |
  'text_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type AnnotationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'data_ASC' |
  'data_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

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

export type ImageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'uri_ASC' |
  'uri_DESC' |
  'thumbnailUri_ASC' |
  'thumbnailUri_DESC' |
  'caption_ASC' |
  'caption_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface LocalLoginCreateInput {
  username: String
  hashword: String
  user: UserCreateOneWithoutLocalLoginInput
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
  assignedAnnotationTasks_every?: AnnotationTaskWhereInput
  assignedAnnotationTasks_some?: AnnotationTaskWhereInput
  assignedAnnotationTasks_none?: AnnotationTaskWhereInput
  annotations_every?: AnnotationWhereInput
  annotations_some?: AnnotationWhereInput
  annotations_none?: AnnotationWhereInput
}

export interface UserCreateWithoutAnnotationsInput {
  displayName: String
  systemLogin?: SystemLoginCreateOneWithoutUserInput
  localLogin?: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskCreateManyWithoutAssigneesInput
}

export interface AnnotationWhereInput {
  AND?: AnnotationWhereInput[] | AnnotationWhereInput
  OR?: AnnotationWhereInput[] | AnnotationWhereInput
  NOT?: AnnotationWhereInput[] | AnnotationWhereInput
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
  annotator?: UserWhereInput
  subject?: AnnotatableWhereInput
  task?: AnnotationTaskWhereInput
}

export interface AnnotationTaskCreateManyWithoutAssigneesInput {
  create?: AnnotationTaskCreateWithoutAssigneesInput[] | AnnotationTaskCreateWithoutAssigneesInput
  connect?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
}

export interface AnnotationTaskUpdateWithWhereUniqueWithoutSubjectsInput {
  where: AnnotationTaskWhereUniqueInput
  data: AnnotationTaskUpdateWithoutSubjectsDataInput
}

export interface AnnotationTaskCreateWithoutAssigneesInput {
  displayName: String
  requirements?: Json
  subjects?: AnnotatableCreateManyWithoutTasksInput
}

export interface UserUpdateInput {
  displayName?: String
  systemLogin?: SystemLoginUpdateOneWithoutUserInput
  localLogin?: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations?: AnnotationUpdateManyWithoutAnnotatorInput
}

export interface AnnotatableCreateManyWithoutTasksInput {
  create?: AnnotatableCreateWithoutTasksInput[] | AnnotatableCreateWithoutTasksInput
  connect?: AnnotatableWhereUniqueInput[] | AnnotatableWhereUniqueInput
}

export interface AnnotatableSubscriptionWhereInput {
  AND?: AnnotatableSubscriptionWhereInput[] | AnnotatableSubscriptionWhereInput
  OR?: AnnotatableSubscriptionWhereInput[] | AnnotatableSubscriptionWhereInput
  NOT?: AnnotatableSubscriptionWhereInput[] | AnnotatableSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AnnotatableWhereInput
}

export interface AnnotatableCreateWithoutTasksInput {
  displayName?: String
  text?: String
  image?: ImageCreateOneInput
}

export interface AnnotationTaskSubscriptionWhereInput {
  AND?: AnnotationTaskSubscriptionWhereInput[] | AnnotationTaskSubscriptionWhereInput
  OR?: AnnotationTaskSubscriptionWhereInput[] | AnnotationTaskSubscriptionWhereInput
  NOT?: AnnotationTaskSubscriptionWhereInput[] | AnnotationTaskSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AnnotationTaskWhereInput
}

export interface ImageCreateOneInput {
  create?: ImageCreateInput
  connect?: ImageWhereUniqueInput
}

export interface AnnotationSubscriptionWhereInput {
  AND?: AnnotationSubscriptionWhereInput[] | AnnotationSubscriptionWhereInput
  OR?: AnnotationSubscriptionWhereInput[] | AnnotationSubscriptionWhereInput
  NOT?: AnnotationSubscriptionWhereInput[] | AnnotationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AnnotationWhereInput
}

export interface ImageCreateInput {
  uri: String
  thumbnailUri?: String
  caption?: String
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

export interface AnnotationCreateManyWithoutAnnotatorInput {
  create?: AnnotationCreateWithoutAnnotatorInput[] | AnnotationCreateWithoutAnnotatorInput
  connect?: AnnotationWhereUniqueInput[] | AnnotationWhereUniqueInput
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

export interface AnnotationCreateWithoutAnnotatorInput {
  data?: Json
  subject: AnnotatableCreateOneInput
  task?: AnnotationTaskCreateOneInput
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

export interface AnnotatableCreateOneInput {
  create?: AnnotatableCreateInput
  connect?: AnnotatableWhereUniqueInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
}

export interface AnnotatableCreateInput {
  displayName?: String
  text?: String
  image?: ImageCreateOneInput
  tasks?: AnnotationTaskCreateManyWithoutSubjectsInput
}

export interface LocalLoginWhereUniqueInput {
  id?: ID_Input
  username?: String
}

export interface AnnotationTaskCreateManyWithoutSubjectsInput {
  create?: AnnotationTaskCreateWithoutSubjectsInput[] | AnnotationTaskCreateWithoutSubjectsInput
  connect?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
}

export interface AnnotationTaskWhereUniqueInput {
  id?: ID_Input
}

export interface AnnotationTaskCreateWithoutSubjectsInput {
  displayName: String
  requirements?: Json
  assignees?: UserCreateManyWithoutAssignedAnnotationTasksInput
}

export interface ImageWhereUniqueInput {
  id?: ID_Input
  uri?: String
}

export interface UserCreateManyWithoutAssignedAnnotationTasksInput {
  create?: UserCreateWithoutAssignedAnnotationTasksInput[] | UserCreateWithoutAssignedAnnotationTasksInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface AnnotationTaskUpdateInput {
  displayName?: String
  requirements?: Json
  assignees?: UserUpdateManyWithoutAssignedAnnotationTasksInput
  subjects?: AnnotatableUpdateManyWithoutTasksInput
}

export interface UserCreateWithoutAssignedAnnotationTasksInput {
  displayName: String
  systemLogin?: SystemLoginCreateOneWithoutUserInput
  localLogin?: LocalLoginCreateOneWithoutUserInput
  annotations?: AnnotationCreateManyWithoutAnnotatorInput
}

export interface UserUpdateWithoutAnnotationsDataInput {
  displayName?: String
  systemLogin?: SystemLoginUpdateOneWithoutUserInput
  localLogin?: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskUpdateManyWithoutAssigneesInput
}

export interface AnnotationTaskCreateOneInput {
  create?: AnnotationTaskCreateInput
  connect?: AnnotationTaskWhereUniqueInput
}

export interface AnnotationUpdateInput {
  data?: Json
  annotator?: UserUpdateOneRequiredWithoutAnnotationsInput
  subject?: AnnotatableUpdateOneRequiredInput
  task?: AnnotationTaskUpdateOneInput
}

export interface AnnotationTaskCreateInput {
  displayName: String
  requirements?: Json
  assignees?: UserCreateManyWithoutAssignedAnnotationTasksInput
  subjects?: AnnotatableCreateManyWithoutTasksInput
}

export interface UserUpdateWithoutLocalLoginDataInput {
  displayName?: String
  systemLogin?: SystemLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations?: AnnotationUpdateManyWithoutAnnotatorInput
}

export interface SystemLoginCreateInput {
  username: String
  passwordEnvironmentVariable: String
  user: UserCreateOneWithoutSystemLoginInput
}

export interface LocalLoginUpdateInput {
  username?: String
  hashword?: String
  user?: UserUpdateOneRequiredWithoutLocalLoginInput
}

export interface UserCreateOneWithoutSystemLoginInput {
  create?: UserCreateWithoutSystemLoginInput
  connect?: UserWhereUniqueInput
}

export interface UserUpdateWithoutSystemLoginDataInput {
  displayName?: String
  localLogin?: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations?: AnnotationUpdateManyWithoutAnnotatorInput
}

export interface UserCreateWithoutSystemLoginInput {
  displayName: String
  localLogin?: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations?: AnnotationCreateManyWithoutAnnotatorInput
}

export interface SystemLoginUpdateInput {
  username?: String
  passwordEnvironmentVariable?: String
  user?: UserUpdateOneRequiredWithoutSystemLoginInput
}

export interface UserUpdateManyWithoutAssignedAnnotationTasksInput {
  create?: UserCreateWithoutAssignedAnnotationTasksInput[] | UserCreateWithoutAssignedAnnotationTasksInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutAssignedAnnotationTasksInput[] | UserUpdateWithWhereUniqueWithoutAssignedAnnotationTasksInput
  upsert?: UserUpsertWithWhereUniqueWithoutAssignedAnnotationTasksInput[] | UserUpsertWithWhereUniqueWithoutAssignedAnnotationTasksInput
}

export interface AnnotationTaskUpsertNestedInput {
  update: AnnotationTaskUpdateDataInput
  create: AnnotationTaskCreateInput
}

export interface UserCreateOneWithoutLocalLoginInput {
  create?: UserCreateWithoutLocalLoginInput
  connect?: UserWhereUniqueInput
}

export interface AnnotationTaskUpdateOneInput {
  create?: AnnotationTaskCreateInput
  connect?: AnnotationTaskWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: AnnotationTaskUpdateDataInput
  upsert?: AnnotationTaskUpsertNestedInput
}

export interface UserCreateWithoutLocalLoginInput {
  displayName: String
  systemLogin?: SystemLoginCreateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations?: AnnotationCreateManyWithoutAnnotatorInput
}

export interface AnnotationTaskUpsertWithWhereUniqueWithoutSubjectsInput {
  where: AnnotationTaskWhereUniqueInput
  update: AnnotationTaskUpdateWithoutSubjectsDataInput
  create: AnnotationTaskCreateWithoutSubjectsInput
}

export interface AnnotationCreateInput {
  data?: Json
  annotator: UserCreateOneWithoutAnnotationsInput
  subject: AnnotatableCreateOneInput
  task?: AnnotationTaskCreateOneInput
}

export interface UserUpdateWithoutAssignedAnnotationTasksDataInput {
  displayName?: String
  systemLogin?: SystemLoginUpdateOneWithoutUserInput
  localLogin?: LocalLoginUpdateOneWithoutUserInput
  annotations?: AnnotationUpdateManyWithoutAnnotatorInput
}

export interface UserCreateOneWithoutAnnotationsInput {
  create?: UserCreateWithoutAnnotationsInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateInput {
  displayName: String
  systemLogin?: SystemLoginCreateOneWithoutUserInput
  localLogin?: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations?: AnnotationCreateManyWithoutAnnotatorInput
}

export interface AnnotationTaskUpdateWithoutSubjectsDataInput {
  displayName?: String
  requirements?: Json
  assignees?: UserUpdateManyWithoutAssignedAnnotationTasksInput
}

export interface SystemLoginCreateWithoutUserInput {
  username: String
  passwordEnvironmentVariable: String
}

export interface LocalLoginCreateWithoutUserInput {
  username: String
  hashword: String
}

export interface ImageWhereInput {
  AND?: ImageWhereInput[] | ImageWhereInput
  OR?: ImageWhereInput[] | ImageWhereInput
  NOT?: ImageWhereInput[] | ImageWhereInput
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
  uri?: String
  uri_not?: String
  uri_in?: String[] | String
  uri_not_in?: String[] | String
  uri_lt?: String
  uri_lte?: String
  uri_gt?: String
  uri_gte?: String
  uri_contains?: String
  uri_not_contains?: String
  uri_starts_with?: String
  uri_not_starts_with?: String
  uri_ends_with?: String
  uri_not_ends_with?: String
  thumbnailUri?: String
  thumbnailUri_not?: String
  thumbnailUri_in?: String[] | String
  thumbnailUri_not_in?: String[] | String
  thumbnailUri_lt?: String
  thumbnailUri_lte?: String
  thumbnailUri_gt?: String
  thumbnailUri_gte?: String
  thumbnailUri_contains?: String
  thumbnailUri_not_contains?: String
  thumbnailUri_starts_with?: String
  thumbnailUri_not_starts_with?: String
  thumbnailUri_ends_with?: String
  thumbnailUri_not_ends_with?: String
  caption?: String
  caption_not?: String
  caption_in?: String[] | String
  caption_not_in?: String[] | String
  caption_lt?: String
  caption_lte?: String
  caption_gt?: String
  caption_gte?: String
  caption_contains?: String
  caption_not_contains?: String
  caption_starts_with?: String
  caption_not_starts_with?: String
  caption_ends_with?: String
  caption_not_ends_with?: String
}

export interface SystemLoginUpdateOneWithoutUserInput {
  create?: SystemLoginCreateWithoutUserInput
  connect?: SystemLoginWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: SystemLoginUpdateWithoutUserDataInput
  upsert?: SystemLoginUpsertWithoutUserInput
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

export interface SystemLoginUpdateWithoutUserDataInput {
  username?: String
  passwordEnvironmentVariable?: String
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

export interface SystemLoginUpsertWithoutUserInput {
  update: SystemLoginUpdateWithoutUserDataInput
  create: SystemLoginCreateWithoutUserInput
}

export interface SystemLoginWhereUniqueInput {
  id?: ID_Input
  username?: String
  passwordEnvironmentVariable?: String
}

export interface LocalLoginUpdateOneWithoutUserInput {
  create?: LocalLoginCreateWithoutUserInput
  connect?: LocalLoginWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: LocalLoginUpdateWithoutUserDataInput
  upsert?: LocalLoginUpsertWithoutUserInput
}

export interface AnnotatableWhereUniqueInput {
  id?: ID_Input
}

export interface LocalLoginUpdateWithoutUserDataInput {
  username?: String
  hashword?: String
}

export interface UserUpsertWithoutAnnotationsInput {
  update: UserUpdateWithoutAnnotationsDataInput
  create: UserCreateWithoutAnnotationsInput
}

export interface LocalLoginUpsertWithoutUserInput {
  update: LocalLoginUpdateWithoutUserDataInput
  create: LocalLoginCreateWithoutUserInput
}

export interface UserUpsertWithoutLocalLoginInput {
  update: UserUpdateWithoutLocalLoginDataInput
  create: UserCreateWithoutLocalLoginInput
}

export interface AnnotationTaskUpdateManyWithoutAssigneesInput {
  create?: AnnotationTaskCreateWithoutAssigneesInput[] | AnnotationTaskCreateWithoutAssigneesInput
  connect?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
  disconnect?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
  delete?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
  update?: AnnotationTaskUpdateWithWhereUniqueWithoutAssigneesInput[] | AnnotationTaskUpdateWithWhereUniqueWithoutAssigneesInput
  upsert?: AnnotationTaskUpsertWithWhereUniqueWithoutAssigneesInput[] | AnnotationTaskUpsertWithWhereUniqueWithoutAssigneesInput
}

export interface UserUpsertWithoutSystemLoginInput {
  update: UserUpdateWithoutSystemLoginDataInput
  create: UserCreateWithoutSystemLoginInput
}

export interface AnnotationTaskUpdateWithWhereUniqueWithoutAssigneesInput {
  where: AnnotationTaskWhereUniqueInput
  data: AnnotationTaskUpdateWithoutAssigneesDataInput
}

export interface AnnotationUpsertWithWhereUniqueWithoutAnnotatorInput {
  where: AnnotationWhereUniqueInput
  update: AnnotationUpdateWithoutAnnotatorDataInput
  create: AnnotationCreateWithoutAnnotatorInput
}

export interface AnnotationTaskUpdateWithoutAssigneesDataInput {
  displayName?: String
  requirements?: Json
  subjects?: AnnotatableUpdateManyWithoutTasksInput
}

export interface AnnotatableUpsertNestedInput {
  update: AnnotatableUpdateDataInput
  create: AnnotatableCreateInput
}

export interface AnnotatableUpdateManyWithoutTasksInput {
  create?: AnnotatableCreateWithoutTasksInput[] | AnnotatableCreateWithoutTasksInput
  connect?: AnnotatableWhereUniqueInput[] | AnnotatableWhereUniqueInput
  disconnect?: AnnotatableWhereUniqueInput[] | AnnotatableWhereUniqueInput
  delete?: AnnotatableWhereUniqueInput[] | AnnotatableWhereUniqueInput
  update?: AnnotatableUpdateWithWhereUniqueWithoutTasksInput[] | AnnotatableUpdateWithWhereUniqueWithoutTasksInput
  upsert?: AnnotatableUpsertWithWhereUniqueWithoutTasksInput[] | AnnotatableUpsertWithWhereUniqueWithoutTasksInput
}

export interface UserUpdateWithWhereUniqueWithoutAssignedAnnotationTasksInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutAssignedAnnotationTasksDataInput
}

export interface AnnotatableUpdateWithWhereUniqueWithoutTasksInput {
  where: AnnotatableWhereUniqueInput
  data: AnnotatableUpdateWithoutTasksDataInput
}

export interface LocalLoginCreateOneWithoutUserInput {
  create?: LocalLoginCreateWithoutUserInput
  connect?: LocalLoginWhereUniqueInput
}

export interface AnnotatableUpdateWithoutTasksDataInput {
  displayName?: String
  text?: String
  image?: ImageUpdateOneInput
}

export interface AnnotatableWhereInput {
  AND?: AnnotatableWhereInput[] | AnnotatableWhereInput
  OR?: AnnotatableWhereInput[] | AnnotatableWhereInput
  NOT?: AnnotatableWhereInput[] | AnnotatableWhereInput
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
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  image?: ImageWhereInput
  tasks_every?: AnnotationTaskWhereInput
  tasks_some?: AnnotationTaskWhereInput
  tasks_none?: AnnotationTaskWhereInput
}

export interface ImageUpdateOneInput {
  create?: ImageCreateInput
  connect?: ImageWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ImageUpdateDataInput
  upsert?: ImageUpsertNestedInput
}

export interface ImageUpdateInput {
  uri?: String
  thumbnailUri?: String
  caption?: String
}

export interface ImageUpdateDataInput {
  uri?: String
  thumbnailUri?: String
  caption?: String
}

export interface AnnotatableUpdateInput {
  displayName?: String
  text?: String
  image?: ImageUpdateOneInput
  tasks?: AnnotationTaskUpdateManyWithoutSubjectsInput
}

export interface ImageUpsertNestedInput {
  update: ImageUpdateDataInput
  create: ImageCreateInput
}

export interface UserUpdateOneRequiredWithoutLocalLoginInput {
  create?: UserCreateWithoutLocalLoginInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutLocalLoginDataInput
  upsert?: UserUpsertWithoutLocalLoginInput
}

export interface AnnotatableUpsertWithWhereUniqueWithoutTasksInput {
  where: AnnotatableWhereUniqueInput
  update: AnnotatableUpdateWithoutTasksDataInput
  create: AnnotatableCreateWithoutTasksInput
}

export interface AnnotationTaskUpdateDataInput {
  displayName?: String
  requirements?: Json
  assignees?: UserUpdateManyWithoutAssignedAnnotationTasksInput
  subjects?: AnnotatableUpdateManyWithoutTasksInput
}

export interface AnnotationTaskUpsertWithWhereUniqueWithoutAssigneesInput {
  where: AnnotationTaskWhereUniqueInput
  update: AnnotationTaskUpdateWithoutAssigneesDataInput
  create: AnnotationTaskCreateWithoutAssigneesInput
}

export interface SystemLoginCreateOneWithoutUserInput {
  create?: SystemLoginCreateWithoutUserInput
  connect?: SystemLoginWhereUniqueInput
}

export interface AnnotationUpdateManyWithoutAnnotatorInput {
  create?: AnnotationCreateWithoutAnnotatorInput[] | AnnotationCreateWithoutAnnotatorInput
  connect?: AnnotationWhereUniqueInput[] | AnnotationWhereUniqueInput
  disconnect?: AnnotationWhereUniqueInput[] | AnnotationWhereUniqueInput
  delete?: AnnotationWhereUniqueInput[] | AnnotationWhereUniqueInput
  update?: AnnotationUpdateWithWhereUniqueWithoutAnnotatorInput[] | AnnotationUpdateWithWhereUniqueWithoutAnnotatorInput
  upsert?: AnnotationUpsertWithWhereUniqueWithoutAnnotatorInput[] | AnnotationUpsertWithWhereUniqueWithoutAnnotatorInput
}

export interface AnnotationTaskWhereInput {
  AND?: AnnotationTaskWhereInput[] | AnnotationTaskWhereInput
  OR?: AnnotationTaskWhereInput[] | AnnotationTaskWhereInput
  NOT?: AnnotationTaskWhereInput[] | AnnotationTaskWhereInput
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
  assignees_every?: UserWhereInput
  assignees_some?: UserWhereInput
  assignees_none?: UserWhereInput
  subjects_every?: AnnotatableWhereInput
  subjects_some?: AnnotatableWhereInput
  subjects_none?: AnnotatableWhereInput
}

export interface AnnotationUpdateWithWhereUniqueWithoutAnnotatorInput {
  where: AnnotationWhereUniqueInput
  data: AnnotationUpdateWithoutAnnotatorDataInput
}

export interface UserUpdateOneRequiredWithoutAnnotationsInput {
  create?: UserCreateWithoutAnnotationsInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutAnnotationsDataInput
  upsert?: UserUpsertWithoutAnnotationsInput
}

export interface AnnotationTaskUpdateManyWithoutSubjectsInput {
  create?: AnnotationTaskCreateWithoutSubjectsInput[] | AnnotationTaskCreateWithoutSubjectsInput
  connect?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
  disconnect?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
  delete?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
  update?: AnnotationTaskUpdateWithWhereUniqueWithoutSubjectsInput[] | AnnotationTaskUpdateWithWhereUniqueWithoutSubjectsInput
  upsert?: AnnotationTaskUpsertWithWhereUniqueWithoutSubjectsInput[] | AnnotationTaskUpsertWithWhereUniqueWithoutSubjectsInput
}

export interface AnnotatableUpdateDataInput {
  displayName?: String
  text?: String
  image?: ImageUpdateOneInput
  tasks?: AnnotationTaskUpdateManyWithoutSubjectsInput
}

export interface AnnotatableUpdateOneRequiredInput {
  create?: AnnotatableCreateInput
  connect?: AnnotatableWhereUniqueInput
  update?: AnnotatableUpdateDataInput
  upsert?: AnnotatableUpsertNestedInput
}

export interface AnnotationUpdateWithoutAnnotatorDataInput {
  data?: Json
  subject?: AnnotatableUpdateOneRequiredInput
  task?: AnnotationTaskUpdateOneInput
}

export interface UserUpdateOneRequiredWithoutSystemLoginInput {
  create?: UserCreateWithoutSystemLoginInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutSystemLoginDataInput
  upsert?: UserUpsertWithoutSystemLoginInput
}

export interface AnnotationWhereUniqueInput {
  id?: ID_Input
}

export interface ImageSubscriptionWhereInput {
  AND?: ImageSubscriptionWhereInput[] | ImageSubscriptionWhereInput
  OR?: ImageSubscriptionWhereInput[] | ImageSubscriptionWhereInput
  NOT?: ImageSubscriptionWhereInput[] | ImageSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ImageWhereInput
}

export interface UserUpsertWithWhereUniqueWithoutAssignedAnnotationTasksInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutAssignedAnnotationTasksDataInput
  create: UserCreateWithoutAssignedAnnotationTasksInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface ImagePreviousValues {
  id: ID_Output
  uri: String
  thumbnailUri?: String
  caption?: String
}

export interface ImageSubscriptionPayload {
  mutation: MutationType
  node?: Image
  updatedFields?: String[]
  previousValues?: ImagePreviousValues
}

export interface AnnotationTaskPreviousValues {
  id: ID_Output
  displayName: String
  requirements?: Json
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

export interface User extends Node {
  id: ID_Output
  displayName: String
  createdAt: DateTime
  updatedAt: DateTime
  systemLogin?: SystemLogin
  localLogin?: LocalLogin
  assignedAnnotationTasks?: AnnotationTask[]
  annotations?: Annotation[]
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface ImageEdge {
  node: Image
  cursor: String
}

export interface SystemLogin extends Node {
  id: ID_Output
  user: User
  username: String
  passwordEnvironmentVariable: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface AggregateAnnotatable {
  count: Int
}

export interface BatchPayload {
  count: Long
}

/*
 * A connection to a list of items.

 */
export interface AnnotatableConnection {
  pageInfo: PageInfo
  edges: AnnotatableEdge[]
  aggregate: AggregateAnnotatable
}

export interface AnnotatablePreviousValues {
  id: ID_Output
  displayName?: String
  text?: String
}

/*
 * An edge in a connection.

 */
export interface AnnotationTaskEdge {
  node: AnnotationTask
  cursor: String
}

export interface Annotation extends Node {
  id: ID_Output
  annotator: User
  subject: Annotatable
  task?: AnnotationTask
  data?: Json
}

export interface AggregateAnnotation {
  count: Int
}

export interface AnnotatableSubscriptionPayload {
  mutation: MutationType
  node?: Annotatable
  updatedFields?: String[]
  previousValues?: AnnotatablePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface AnnotationConnection {
  pageInfo: PageInfo
  edges: AnnotationEdge[]
  aggregate: AggregateAnnotation
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * An edge in a connection.

 */
export interface LocalLoginEdge {
  node: LocalLogin
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  displayName: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface AggregateSystemLogin {
  count: Int
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
 * A connection to a list of items.

 */
export interface SystemLoginConnection {
  pageInfo: PageInfo
  edges: SystemLoginEdge[]
  aggregate: AggregateSystemLogin
}

export interface SystemLoginSubscriptionPayload {
  mutation: MutationType
  node?: SystemLogin
  updatedFields?: String[]
  previousValues?: SystemLoginPreviousValues
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface SystemLoginPreviousValues {
  id: ID_Output
  username: String
  passwordEnvironmentVariable: String
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface ImageConnection {
  pageInfo: PageInfo
  edges: ImageEdge[]
  aggregate: AggregateImage
}

export interface Image extends Node {
  id: ID_Output
  uri: String
  thumbnailUri?: String
  caption?: String
}

export interface AggregateAnnotationTask {
  count: Int
}

export interface LocalLoginSubscriptionPayload {
  mutation: MutationType
  node?: LocalLogin
  updatedFields?: String[]
  previousValues?: LocalLoginPreviousValues
}

/*
 * An edge in a connection.

 */
export interface AnnotationEdge {
  node: Annotation
  cursor: String
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
export interface LocalLoginConnection {
  pageInfo: PageInfo
  edges: LocalLoginEdge[]
  aggregate: AggregateLocalLogin
}

export interface Annotatable extends Node {
  id: ID_Output
  displayName?: String
  text?: String
  image?: Image
  tasks?: AnnotationTask[]
}

export interface AggregateUser {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface AnnotatableEdge {
  node: Annotatable
  cursor: String
}

export interface AnnotationTaskSubscriptionPayload {
  mutation: MutationType
  node?: AnnotationTask
  updatedFields?: String[]
  previousValues?: AnnotationTaskPreviousValues
}

export interface AnnotationTask extends Node {
  id: ID_Output
  assignees?: User[]
  displayName: String
  subjects?: Annotatable[]
  requirements?: Json
}

export interface AnnotationPreviousValues {
  id: ID_Output
  data?: Json
}

export interface AnnotationSubscriptionPayload {
  mutation: MutationType
  node?: Annotation
  updatedFields?: String[]
  previousValues?: AnnotationPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface AnnotationTaskConnection {
  pageInfo: PageInfo
  edges: AnnotationTaskEdge[]
  aggregate: AggregateAnnotationTask
}

export interface AggregateImage {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface SystemLoginEdge {
  node: SystemLogin
  cursor: String
}

export interface AggregateLocalLogin {
  count: Int
}

export type DateTime = Date | string

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

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
Raw JSON value
*/
export type Json = any