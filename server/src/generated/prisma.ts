import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    systemLogins: <T = SystemLogin[]>(args: { where?: SystemLoginWhereInput, orderBy?: SystemLoginOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    localLogins: <T = LocalLogin[]>(args: { where?: LocalLoginWhereInput, orderBy?: LocalLoginOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    groups: <T = Group[]>(args: { where?: GroupWhereInput, orderBy?: GroupOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    annotations: <T = Annotation[]>(args: { where?: AnnotationWhereInput, orderBy?: AnnotationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    annotationTasks: <T = AnnotationTask[]>(args: { where?: AnnotationTaskWhereInput, orderBy?: AnnotationTaskOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    annotatables: <T = Annotatable[]>(args: { where?: AnnotatableWhereInput, orderBy?: AnnotatableOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cgPoints: <T = CgPoint[]>(args: { where?: CgPointWhereInput, orderBy?: CgPointOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    images: <T = Image[]>(args: { where?: ImageWhereInput, orderBy?: ImageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    classificationLabels: <T = ClassificationLabel[]>(args: { where?: ClassificationLabelWhereInput, orderBy?: ClassificationLabelOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    classificationContexts: <T = ClassificationContext[]>(args: { where?: ClassificationContextWhereInput, orderBy?: ClassificationContextOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    systemLogin: <T = SystemLogin | null>(args: { where: SystemLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    localLogin: <T = LocalLogin | null>(args: { where: LocalLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    group: <T = Group | null>(args: { where: GroupWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    annotation: <T = Annotation | null>(args: { where: AnnotationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    annotationTask: <T = AnnotationTask | null>(args: { where: AnnotationTaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    annotatable: <T = Annotatable | null>(args: { where: AnnotatableWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cgPoint: <T = CgPoint | null>(args: { where: CgPointWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    image: <T = Image | null>(args: { where: ImageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    classificationLabel: <T = ClassificationLabel | null>(args: { where: ClassificationLabelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    classificationContext: <T = ClassificationContext | null>(args: { where: ClassificationContextWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    systemLoginsConnection: <T = SystemLoginConnection>(args: { where?: SystemLoginWhereInput, orderBy?: SystemLoginOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    localLoginsConnection: <T = LocalLoginConnection>(args: { where?: LocalLoginWhereInput, orderBy?: LocalLoginOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    groupsConnection: <T = GroupConnection>(args: { where?: GroupWhereInput, orderBy?: GroupOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    annotationsConnection: <T = AnnotationConnection>(args: { where?: AnnotationWhereInput, orderBy?: AnnotationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    annotationTasksConnection: <T = AnnotationTaskConnection>(args: { where?: AnnotationTaskWhereInput, orderBy?: AnnotationTaskOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    annotatablesConnection: <T = AnnotatableConnection>(args: { where?: AnnotatableWhereInput, orderBy?: AnnotatableOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cgPointsConnection: <T = CgPointConnection>(args: { where?: CgPointWhereInput, orderBy?: CgPointOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    imagesConnection: <T = ImageConnection>(args: { where?: ImageWhereInput, orderBy?: ImageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    classificationLabelsConnection: <T = ClassificationLabelConnection>(args: { where?: ClassificationLabelWhereInput, orderBy?: ClassificationLabelOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    classificationContextsConnection: <T = ClassificationContextConnection>(args: { where?: ClassificationContextWhereInput, orderBy?: ClassificationContextOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSystemLogin: <T = SystemLogin>(args: { data: SystemLoginCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLocalLogin: <T = LocalLogin>(args: { data: LocalLoginCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createGroup: <T = Group>(args: { data: GroupCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAnnotation: <T = Annotation>(args: { data: AnnotationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAnnotationTask: <T = AnnotationTask>(args: { data: AnnotationTaskCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAnnotatable: <T = Annotatable>(args: { data: AnnotatableCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCgPoint: <T = CgPoint>(args: { data: CgPointCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createImage: <T = Image>(args: { data: ImageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createClassificationLabel: <T = ClassificationLabel>(args: { data: ClassificationLabelCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createClassificationContext: <T = ClassificationContext>(args: { data: ClassificationContextCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSystemLogin: <T = SystemLogin | null>(args: { data: SystemLoginUpdateInput, where: SystemLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLocalLogin: <T = LocalLogin | null>(args: { data: LocalLoginUpdateInput, where: LocalLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateGroup: <T = Group | null>(args: { data: GroupUpdateInput, where: GroupWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAnnotation: <T = Annotation | null>(args: { data: AnnotationUpdateInput, where: AnnotationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAnnotationTask: <T = AnnotationTask | null>(args: { data: AnnotationTaskUpdateInput, where: AnnotationTaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAnnotatable: <T = Annotatable | null>(args: { data: AnnotatableUpdateInput, where: AnnotatableWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCgPoint: <T = CgPoint | null>(args: { data: CgPointUpdateInput, where: CgPointWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateImage: <T = Image | null>(args: { data: ImageUpdateInput, where: ImageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateClassificationLabel: <T = ClassificationLabel | null>(args: { data: ClassificationLabelUpdateInput, where: ClassificationLabelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateClassificationContext: <T = ClassificationContext | null>(args: { data: ClassificationContextUpdateInput, where: ClassificationContextWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSystemLogin: <T = SystemLogin | null>(args: { where: SystemLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLocalLogin: <T = LocalLogin | null>(args: { where: LocalLoginWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteGroup: <T = Group | null>(args: { where: GroupWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAnnotation: <T = Annotation | null>(args: { where: AnnotationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAnnotationTask: <T = AnnotationTask | null>(args: { where: AnnotationTaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAnnotatable: <T = Annotatable | null>(args: { where: AnnotatableWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCgPoint: <T = CgPoint | null>(args: { where: CgPointWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteImage: <T = Image | null>(args: { where: ImageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteClassificationLabel: <T = ClassificationLabel | null>(args: { where: ClassificationLabelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteClassificationContext: <T = ClassificationContext | null>(args: { where: ClassificationContextWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSystemLogin: <T = SystemLogin>(args: { where: SystemLoginWhereUniqueInput, create: SystemLoginCreateInput, update: SystemLoginUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLocalLogin: <T = LocalLogin>(args: { where: LocalLoginWhereUniqueInput, create: LocalLoginCreateInput, update: LocalLoginUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertGroup: <T = Group>(args: { where: GroupWhereUniqueInput, create: GroupCreateInput, update: GroupUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAnnotation: <T = Annotation>(args: { where: AnnotationWhereUniqueInput, create: AnnotationCreateInput, update: AnnotationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAnnotationTask: <T = AnnotationTask>(args: { where: AnnotationTaskWhereUniqueInput, create: AnnotationTaskCreateInput, update: AnnotationTaskUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAnnotatable: <T = Annotatable>(args: { where: AnnotatableWhereUniqueInput, create: AnnotatableCreateInput, update: AnnotatableUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCgPoint: <T = CgPoint>(args: { where: CgPointWhereUniqueInput, create: CgPointCreateInput, update: CgPointUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertImage: <T = Image>(args: { where: ImageWhereUniqueInput, create: ImageCreateInput, update: ImageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertClassificationLabel: <T = ClassificationLabel>(args: { where: ClassificationLabelWhereUniqueInput, create: ClassificationLabelCreateInput, update: ClassificationLabelUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertClassificationContext: <T = ClassificationContext>(args: { where: ClassificationContextWhereUniqueInput, create: ClassificationContextCreateInput, update: ClassificationContextUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySystemLogins: <T = BatchPayload>(args: { data: SystemLoginUpdateInput, where?: SystemLoginWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLocalLogins: <T = BatchPayload>(args: { data: LocalLoginUpdateInput, where?: LocalLoginWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyGroups: <T = BatchPayload>(args: { data: GroupUpdateInput, where?: GroupWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAnnotations: <T = BatchPayload>(args: { data: AnnotationUpdateInput, where?: AnnotationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAnnotationTasks: <T = BatchPayload>(args: { data: AnnotationTaskUpdateInput, where?: AnnotationTaskWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAnnotatables: <T = BatchPayload>(args: { data: AnnotatableUpdateInput, where?: AnnotatableWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCgPoints: <T = BatchPayload>(args: { data: CgPointUpdateInput, where?: CgPointWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyImages: <T = BatchPayload>(args: { data: ImageUpdateInput, where?: ImageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyClassificationLabels: <T = BatchPayload>(args: { data: ClassificationLabelUpdateInput, where?: ClassificationLabelWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyClassificationContexts: <T = BatchPayload>(args: { data: ClassificationContextUpdateInput, where?: ClassificationContextWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySystemLogins: <T = BatchPayload>(args: { where?: SystemLoginWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLocalLogins: <T = BatchPayload>(args: { where?: LocalLoginWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyGroups: <T = BatchPayload>(args: { where?: GroupWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAnnotations: <T = BatchPayload>(args: { where?: AnnotationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAnnotationTasks: <T = BatchPayload>(args: { where?: AnnotationTaskWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAnnotatables: <T = BatchPayload>(args: { where?: AnnotatableWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCgPoints: <T = BatchPayload>(args: { where?: CgPointWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyImages: <T = BatchPayload>(args: { where?: ImageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyClassificationLabels: <T = BatchPayload>(args: { where?: ClassificationLabelWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyClassificationContexts: <T = BatchPayload>(args: { where?: ClassificationContextWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    systemLogin: <T = SystemLoginSubscriptionPayload | null>(args: { where?: SystemLoginSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    localLogin: <T = LocalLoginSubscriptionPayload | null>(args: { where?: LocalLoginSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    group: <T = GroupSubscriptionPayload | null>(args: { where?: GroupSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    annotation: <T = AnnotationSubscriptionPayload | null>(args: { where?: AnnotationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    annotationTask: <T = AnnotationTaskSubscriptionPayload | null>(args: { where?: AnnotationTaskSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    annotatable: <T = AnnotatableSubscriptionPayload | null>(args: { where?: AnnotatableSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    cgPoint: <T = CgPointSubscriptionPayload | null>(args: { where?: CgPointSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    image: <T = ImageSubscriptionPayload | null>(args: { where?: ImageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    classificationLabel: <T = ClassificationLabelSubscriptionPayload | null>(args: { where?: ClassificationLabelSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    classificationContext: <T = ClassificationContextSubscriptionPayload | null>(args: { where?: ClassificationContextSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  SystemLogin: (where?: SystemLoginWhereInput) => Promise<boolean>
  LocalLogin: (where?: LocalLoginWhereInput) => Promise<boolean>
  Group: (where?: GroupWhereInput) => Promise<boolean>
  Annotation: (where?: AnnotationWhereInput) => Promise<boolean>
  AnnotationTask: (where?: AnnotationTaskWhereInput) => Promise<boolean>
  Annotatable: (where?: AnnotatableWhereInput) => Promise<boolean>
  CgPoint: (where?: CgPointWhereInput) => Promise<boolean>
  Image: (where?: ImageWhereInput) => Promise<boolean>
  ClassificationLabel: (where?: ClassificationLabelWhereInput) => Promise<boolean>
  ClassificationContext: (where?: ClassificationContextWhereInput) => Promise<boolean>
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

type Annotatable implements Node {
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
  anyoneCanView: Boolean
  anyoneCanAnnotate: Boolean
  image: ImageCreateOneInput
  tasks: AnnotationTaskCreateManyWithoutSubjectsInput
  owner: UserCreateOneWithoutOwnedAnnotatablesInput
  group: GroupCreateOneWithoutOwnedAnnotatablesInput
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
  anyoneCanView: Boolean
  anyoneCanAnnotate: Boolean
  image: ImageCreateOneInput
  tasks: AnnotationTaskCreateManyWithoutSubjectsInput
  owner: UserCreateOneWithoutOwnedAnnotatablesInput
  group: GroupCreateOneWithoutOwnedAnnotatablesInput
}

input AnnotatableCreateWithoutGroupInput {
  displayName: String
  text: String
  anyoneCanView: Boolean
  anyoneCanAnnotate: Boolean
  image: ImageCreateOneInput
  tasks: AnnotationTaskCreateManyWithoutSubjectsInput
  owner: UserCreateOneWithoutOwnedAnnotatablesInput
  creator: UserCreateOneWithoutCreatedAnnotatablesInput
}

input AnnotatableCreateWithoutOwnerInput {
  displayName: String
  text: String
  anyoneCanView: Boolean
  anyoneCanAnnotate: Boolean
  image: ImageCreateOneInput
  tasks: AnnotationTaskCreateManyWithoutSubjectsInput
  group: GroupCreateOneWithoutOwnedAnnotatablesInput
  creator: UserCreateOneWithoutCreatedAnnotatablesInput
}

input AnnotatableCreateWithoutTasksInput {
  displayName: String
  text: String
  anyoneCanView: Boolean
  anyoneCanAnnotate: Boolean
  image: ImageCreateOneInput
  owner: UserCreateOneWithoutOwnedAnnotatablesInput
  group: GroupCreateOneWithoutOwnedAnnotatablesInput
  creator: UserCreateOneWithoutCreatedAnnotatablesInput
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
  anyoneCanView: Boolean
  anyoneCanAnnotate: Boolean
  image: ImageUpdateOneInput
  tasks: AnnotationTaskUpdateManyWithoutSubjectsInput
  owner: UserUpdateOneWithoutOwnedAnnotatablesInput
  group: GroupUpdateOneWithoutOwnedAnnotatablesInput
  creator: UserUpdateOneWithoutCreatedAnnotatablesInput
}

input AnnotatableUpdateInput {
  displayName: String
  text: String
  anyoneCanView: Boolean
  anyoneCanAnnotate: Boolean
  image: ImageUpdateOneInput
  tasks: AnnotationTaskUpdateManyWithoutSubjectsInput
  owner: UserUpdateOneWithoutOwnedAnnotatablesInput
  group: GroupUpdateOneWithoutOwnedAnnotatablesInput
  creator: UserUpdateOneWithoutCreatedAnnotatablesInput
}

input AnnotatableUpdateManyWithoutCreatorInput {
  create: [AnnotatableCreateWithoutCreatorInput!]
  connect: [AnnotatableWhereUniqueInput!]
  disconnect: [AnnotatableWhereUniqueInput!]
  delete: [AnnotatableWhereUniqueInput!]
  update: [AnnotatableUpdateWithWhereUniqueWithoutCreatorInput!]
  upsert: [AnnotatableUpsertWithWhereUniqueWithoutCreatorInput!]
}

input AnnotatableUpdateManyWithoutGroupInput {
  create: [AnnotatableCreateWithoutGroupInput!]
  connect: [AnnotatableWhereUniqueInput!]
  disconnect: [AnnotatableWhereUniqueInput!]
  delete: [AnnotatableWhereUniqueInput!]
  update: [AnnotatableUpdateWithWhereUniqueWithoutGroupInput!]
  upsert: [AnnotatableUpsertWithWhereUniqueWithoutGroupInput!]
}

input AnnotatableUpdateManyWithoutOwnerInput {
  create: [AnnotatableCreateWithoutOwnerInput!]
  connect: [AnnotatableWhereUniqueInput!]
  disconnect: [AnnotatableWhereUniqueInput!]
  delete: [AnnotatableWhereUniqueInput!]
  update: [AnnotatableUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [AnnotatableUpsertWithWhereUniqueWithoutOwnerInput!]
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

input AnnotatableUpdateWithoutCreatorDataInput {
  displayName: String
  text: String
  anyoneCanView: Boolean
  anyoneCanAnnotate: Boolean
  image: ImageUpdateOneInput
  tasks: AnnotationTaskUpdateManyWithoutSubjectsInput
  owner: UserUpdateOneWithoutOwnedAnnotatablesInput
  group: GroupUpdateOneWithoutOwnedAnnotatablesInput
}

input AnnotatableUpdateWithoutGroupDataInput {
  displayName: String
  text: String
  anyoneCanView: Boolean
  anyoneCanAnnotate: Boolean
  image: ImageUpdateOneInput
  tasks: AnnotationTaskUpdateManyWithoutSubjectsInput
  owner: UserUpdateOneWithoutOwnedAnnotatablesInput
  creator: UserUpdateOneWithoutCreatedAnnotatablesInput
}

input AnnotatableUpdateWithoutOwnerDataInput {
  displayName: String
  text: String
  anyoneCanView: Boolean
  anyoneCanAnnotate: Boolean
  image: ImageUpdateOneInput
  tasks: AnnotationTaskUpdateManyWithoutSubjectsInput
  group: GroupUpdateOneWithoutOwnedAnnotatablesInput
  creator: UserUpdateOneWithoutCreatedAnnotatablesInput
}

input AnnotatableUpdateWithoutTasksDataInput {
  displayName: String
  text: String
  anyoneCanView: Boolean
  anyoneCanAnnotate: Boolean
  image: ImageUpdateOneInput
  owner: UserUpdateOneWithoutOwnedAnnotatablesInput
  group: GroupUpdateOneWithoutOwnedAnnotatablesInput
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
  anyoneCanView: Boolean

  """All values that are not equal to given value."""
  anyoneCanView_not: Boolean
  anyoneCanAnnotate: Boolean

  """All values that are not equal to given value."""
  anyoneCanAnnotate_not: Boolean
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
  image: ImageWhereInput
  tasks_every: AnnotationTaskWhereInput
  tasks_some: AnnotationTaskWhereInput
  tasks_none: AnnotationTaskWhereInput
  owner: UserWhereInput
  group: GroupWhereInput
  creator: UserWhereInput
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
  svgBounds: String
  anyoneCanView: Boolean
  anyoneCanSuggestRevision: Boolean
  annotator: UserCreateOneWithoutAnnotationsInput!
  subject: AnnotatableCreateOneInput!
  task: AnnotationTaskCreateOneInput
  classificationLabels: ClassificationLabelCreateManyInput
  convexHull: CgPointCreateManyInput
  owner: UserCreateOneWithoutOwnedAnnotationsInput
  group: GroupCreateOneWithoutOwnedAnnotationsInput
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
  data: Json
  svgBounds: String
  anyoneCanView: Boolean
  anyoneCanSuggestRevision: Boolean
  subject: AnnotatableCreateOneInput!
  task: AnnotationTaskCreateOneInput
  classificationLabels: ClassificationLabelCreateManyInput
  convexHull: CgPointCreateManyInput
  owner: UserCreateOneWithoutOwnedAnnotationsInput
  group: GroupCreateOneWithoutOwnedAnnotationsInput
  creator: UserCreateOneWithoutCreatedAnnotationsInput
}

input AnnotationCreateWithoutCreatorInput {
  data: Json
  svgBounds: String
  anyoneCanView: Boolean
  anyoneCanSuggestRevision: Boolean
  annotator: UserCreateOneWithoutAnnotationsInput!
  subject: AnnotatableCreateOneInput!
  task: AnnotationTaskCreateOneInput
  classificationLabels: ClassificationLabelCreateManyInput
  convexHull: CgPointCreateManyInput
  owner: UserCreateOneWithoutOwnedAnnotationsInput
  group: GroupCreateOneWithoutOwnedAnnotationsInput
}

input AnnotationCreateWithoutGroupInput {
  data: Json
  svgBounds: String
  anyoneCanView: Boolean
  anyoneCanSuggestRevision: Boolean
  annotator: UserCreateOneWithoutAnnotationsInput!
  subject: AnnotatableCreateOneInput!
  task: AnnotationTaskCreateOneInput
  classificationLabels: ClassificationLabelCreateManyInput
  convexHull: CgPointCreateManyInput
  owner: UserCreateOneWithoutOwnedAnnotationsInput
  creator: UserCreateOneWithoutCreatedAnnotationsInput
}

input AnnotationCreateWithoutOwnerInput {
  data: Json
  svgBounds: String
  anyoneCanView: Boolean
  anyoneCanSuggestRevision: Boolean
  annotator: UserCreateOneWithoutAnnotationsInput!
  subject: AnnotatableCreateOneInput!
  task: AnnotationTaskCreateOneInput
  classificationLabels: ClassificationLabelCreateManyInput
  convexHull: CgPointCreateManyInput
  group: GroupCreateOneWithoutOwnedAnnotationsInput
  creator: UserCreateOneWithoutCreatedAnnotationsInput
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
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
  assignees: UserCreateManyWithoutAssignedAnnotationTasksInput
  subjects: AnnotatableCreateManyWithoutTasksInput
  classificationContexts: ClassificationContextCreateManyInput
  classificationLabels: ClassificationLabelCreateManyInput
  owner: UserCreateOneWithoutOwnedAnnotationTasksInput
  group: GroupCreateOneWithoutOwnedAnnotationTasksInput
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
  requirements: Json
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
  subjects: AnnotatableCreateManyWithoutTasksInput
  classificationContexts: ClassificationContextCreateManyInput
  classificationLabels: ClassificationLabelCreateManyInput
  owner: UserCreateOneWithoutOwnedAnnotationTasksInput
  group: GroupCreateOneWithoutOwnedAnnotationTasksInput
  creator: UserCreateOneWithoutCreatedAnnotationTasksInput
}

input AnnotationTaskCreateWithoutCreatorInput {
  displayName: String!
  requirements: Json
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
  assignees: UserCreateManyWithoutAssignedAnnotationTasksInput
  subjects: AnnotatableCreateManyWithoutTasksInput
  classificationContexts: ClassificationContextCreateManyInput
  classificationLabels: ClassificationLabelCreateManyInput
  owner: UserCreateOneWithoutOwnedAnnotationTasksInput
  group: GroupCreateOneWithoutOwnedAnnotationTasksInput
}

input AnnotationTaskCreateWithoutGroupInput {
  displayName: String!
  requirements: Json
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
  assignees: UserCreateManyWithoutAssignedAnnotationTasksInput
  subjects: AnnotatableCreateManyWithoutTasksInput
  classificationContexts: ClassificationContextCreateManyInput
  classificationLabels: ClassificationLabelCreateManyInput
  owner: UserCreateOneWithoutOwnedAnnotationTasksInput
  creator: UserCreateOneWithoutCreatedAnnotationTasksInput
}

input AnnotationTaskCreateWithoutOwnerInput {
  displayName: String!
  requirements: Json
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
  assignees: UserCreateManyWithoutAssignedAnnotationTasksInput
  subjects: AnnotatableCreateManyWithoutTasksInput
  classificationContexts: ClassificationContextCreateManyInput
  classificationLabels: ClassificationLabelCreateManyInput
  group: GroupCreateOneWithoutOwnedAnnotationTasksInput
  creator: UserCreateOneWithoutCreatedAnnotationTasksInput
}

input AnnotationTaskCreateWithoutSubjectsInput {
  displayName: String!
  requirements: Json
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
  assignees: UserCreateManyWithoutAssignedAnnotationTasksInput
  classificationContexts: ClassificationContextCreateManyInput
  classificationLabels: ClassificationLabelCreateManyInput
  owner: UserCreateOneWithoutOwnedAnnotationTasksInput
  group: GroupCreateOneWithoutOwnedAnnotationTasksInput
  creator: UserCreateOneWithoutCreatedAnnotationTasksInput
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
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
  assignees: UserUpdateManyWithoutAssignedAnnotationTasksInput
  subjects: AnnotatableUpdateManyWithoutTasksInput
  classificationContexts: ClassificationContextUpdateManyInput
  classificationLabels: ClassificationLabelUpdateManyInput
  owner: UserUpdateOneWithoutOwnedAnnotationTasksInput
  group: GroupUpdateOneWithoutOwnedAnnotationTasksInput
  creator: UserUpdateOneWithoutCreatedAnnotationTasksInput
}

input AnnotationTaskUpdateInput {
  displayName: String
  requirements: Json
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
  assignees: UserUpdateManyWithoutAssignedAnnotationTasksInput
  subjects: AnnotatableUpdateManyWithoutTasksInput
  classificationContexts: ClassificationContextUpdateManyInput
  classificationLabels: ClassificationLabelUpdateManyInput
  owner: UserUpdateOneWithoutOwnedAnnotationTasksInput
  group: GroupUpdateOneWithoutOwnedAnnotationTasksInput
  creator: UserUpdateOneWithoutCreatedAnnotationTasksInput
}

input AnnotationTaskUpdateManyWithoutAssigneesInput {
  create: [AnnotationTaskCreateWithoutAssigneesInput!]
  connect: [AnnotationTaskWhereUniqueInput!]
  disconnect: [AnnotationTaskWhereUniqueInput!]
  delete: [AnnotationTaskWhereUniqueInput!]
  update: [AnnotationTaskUpdateWithWhereUniqueWithoutAssigneesInput!]
  upsert: [AnnotationTaskUpsertWithWhereUniqueWithoutAssigneesInput!]
}

input AnnotationTaskUpdateManyWithoutCreatorInput {
  create: [AnnotationTaskCreateWithoutCreatorInput!]
  connect: [AnnotationTaskWhereUniqueInput!]
  disconnect: [AnnotationTaskWhereUniqueInput!]
  delete: [AnnotationTaskWhereUniqueInput!]
  update: [AnnotationTaskUpdateWithWhereUniqueWithoutCreatorInput!]
  upsert: [AnnotationTaskUpsertWithWhereUniqueWithoutCreatorInput!]
}

input AnnotationTaskUpdateManyWithoutGroupInput {
  create: [AnnotationTaskCreateWithoutGroupInput!]
  connect: [AnnotationTaskWhereUniqueInput!]
  disconnect: [AnnotationTaskWhereUniqueInput!]
  delete: [AnnotationTaskWhereUniqueInput!]
  update: [AnnotationTaskUpdateWithWhereUniqueWithoutGroupInput!]
  upsert: [AnnotationTaskUpsertWithWhereUniqueWithoutGroupInput!]
}

input AnnotationTaskUpdateManyWithoutOwnerInput {
  create: [AnnotationTaskCreateWithoutOwnerInput!]
  connect: [AnnotationTaskWhereUniqueInput!]
  disconnect: [AnnotationTaskWhereUniqueInput!]
  delete: [AnnotationTaskWhereUniqueInput!]
  update: [AnnotationTaskUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [AnnotationTaskUpsertWithWhereUniqueWithoutOwnerInput!]
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
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
  subjects: AnnotatableUpdateManyWithoutTasksInput
  classificationContexts: ClassificationContextUpdateManyInput
  classificationLabels: ClassificationLabelUpdateManyInput
  owner: UserUpdateOneWithoutOwnedAnnotationTasksInput
  group: GroupUpdateOneWithoutOwnedAnnotationTasksInput
  creator: UserUpdateOneWithoutCreatedAnnotationTasksInput
}

input AnnotationTaskUpdateWithoutCreatorDataInput {
  displayName: String
  requirements: Json
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
  assignees: UserUpdateManyWithoutAssignedAnnotationTasksInput
  subjects: AnnotatableUpdateManyWithoutTasksInput
  classificationContexts: ClassificationContextUpdateManyInput
  classificationLabels: ClassificationLabelUpdateManyInput
  owner: UserUpdateOneWithoutOwnedAnnotationTasksInput
  group: GroupUpdateOneWithoutOwnedAnnotationTasksInput
}

input AnnotationTaskUpdateWithoutGroupDataInput {
  displayName: String
  requirements: Json
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
  assignees: UserUpdateManyWithoutAssignedAnnotationTasksInput
  subjects: AnnotatableUpdateManyWithoutTasksInput
  classificationContexts: ClassificationContextUpdateManyInput
  classificationLabels: ClassificationLabelUpdateManyInput
  owner: UserUpdateOneWithoutOwnedAnnotationTasksInput
  creator: UserUpdateOneWithoutCreatedAnnotationTasksInput
}

input AnnotationTaskUpdateWithoutOwnerDataInput {
  displayName: String
  requirements: Json
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
  assignees: UserUpdateManyWithoutAssignedAnnotationTasksInput
  subjects: AnnotatableUpdateManyWithoutTasksInput
  classificationContexts: ClassificationContextUpdateManyInput
  classificationLabels: ClassificationLabelUpdateManyInput
  group: GroupUpdateOneWithoutOwnedAnnotationTasksInput
  creator: UserUpdateOneWithoutCreatedAnnotationTasksInput
}

input AnnotationTaskUpdateWithoutSubjectsDataInput {
  displayName: String
  requirements: Json
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
  assignees: UserUpdateManyWithoutAssignedAnnotationTasksInput
  classificationContexts: ClassificationContextUpdateManyInput
  classificationLabels: ClassificationLabelUpdateManyInput
  owner: UserUpdateOneWithoutOwnedAnnotationTasksInput
  group: GroupUpdateOneWithoutOwnedAnnotationTasksInput
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
  anyoneCanView: Boolean

  """All values that are not equal to given value."""
  anyoneCanView_not: Boolean
  anyoneCanJoin: Boolean

  """All values that are not equal to given value."""
  anyoneCanJoin_not: Boolean
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
  assignees_every: UserWhereInput
  assignees_some: UserWhereInput
  assignees_none: UserWhereInput
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
  creator: UserWhereInput
}

input AnnotationTaskWhereUniqueInput {
  id: ID
}

input AnnotationUpdateInput {
  data: Json
  svgBounds: String
  anyoneCanView: Boolean
  anyoneCanSuggestRevision: Boolean
  annotator: UserUpdateOneRequiredWithoutAnnotationsInput
  subject: AnnotatableUpdateOneRequiredInput
  task: AnnotationTaskUpdateOneInput
  classificationLabels: ClassificationLabelUpdateManyInput
  convexHull: CgPointUpdateManyInput
  owner: UserUpdateOneWithoutOwnedAnnotationsInput
  group: GroupUpdateOneWithoutOwnedAnnotationsInput
  creator: UserUpdateOneWithoutCreatedAnnotationsInput
}

input AnnotationUpdateManyWithoutAnnotatorInput {
  create: [AnnotationCreateWithoutAnnotatorInput!]
  connect: [AnnotationWhereUniqueInput!]
  disconnect: [AnnotationWhereUniqueInput!]
  delete: [AnnotationWhereUniqueInput!]
  update: [AnnotationUpdateWithWhereUniqueWithoutAnnotatorInput!]
  upsert: [AnnotationUpsertWithWhereUniqueWithoutAnnotatorInput!]
}

input AnnotationUpdateManyWithoutCreatorInput {
  create: [AnnotationCreateWithoutCreatorInput!]
  connect: [AnnotationWhereUniqueInput!]
  disconnect: [AnnotationWhereUniqueInput!]
  delete: [AnnotationWhereUniqueInput!]
  update: [AnnotationUpdateWithWhereUniqueWithoutCreatorInput!]
  upsert: [AnnotationUpsertWithWhereUniqueWithoutCreatorInput!]
}

input AnnotationUpdateManyWithoutGroupInput {
  create: [AnnotationCreateWithoutGroupInput!]
  connect: [AnnotationWhereUniqueInput!]
  disconnect: [AnnotationWhereUniqueInput!]
  delete: [AnnotationWhereUniqueInput!]
  update: [AnnotationUpdateWithWhereUniqueWithoutGroupInput!]
  upsert: [AnnotationUpsertWithWhereUniqueWithoutGroupInput!]
}

input AnnotationUpdateManyWithoutOwnerInput {
  create: [AnnotationCreateWithoutOwnerInput!]
  connect: [AnnotationWhereUniqueInput!]
  disconnect: [AnnotationWhereUniqueInput!]
  delete: [AnnotationWhereUniqueInput!]
  update: [AnnotationUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [AnnotationUpsertWithWhereUniqueWithoutOwnerInput!]
}

input AnnotationUpdateWithoutAnnotatorDataInput {
  data: Json
  svgBounds: String
  anyoneCanView: Boolean
  anyoneCanSuggestRevision: Boolean
  subject: AnnotatableUpdateOneRequiredInput
  task: AnnotationTaskUpdateOneInput
  classificationLabels: ClassificationLabelUpdateManyInput
  convexHull: CgPointUpdateManyInput
  owner: UserUpdateOneWithoutOwnedAnnotationsInput
  group: GroupUpdateOneWithoutOwnedAnnotationsInput
  creator: UserUpdateOneWithoutCreatedAnnotationsInput
}

input AnnotationUpdateWithoutCreatorDataInput {
  data: Json
  svgBounds: String
  anyoneCanView: Boolean
  anyoneCanSuggestRevision: Boolean
  annotator: UserUpdateOneRequiredWithoutAnnotationsInput
  subject: AnnotatableUpdateOneRequiredInput
  task: AnnotationTaskUpdateOneInput
  classificationLabels: ClassificationLabelUpdateManyInput
  convexHull: CgPointUpdateManyInput
  owner: UserUpdateOneWithoutOwnedAnnotationsInput
  group: GroupUpdateOneWithoutOwnedAnnotationsInput
}

input AnnotationUpdateWithoutGroupDataInput {
  data: Json
  svgBounds: String
  anyoneCanView: Boolean
  anyoneCanSuggestRevision: Boolean
  annotator: UserUpdateOneRequiredWithoutAnnotationsInput
  subject: AnnotatableUpdateOneRequiredInput
  task: AnnotationTaskUpdateOneInput
  classificationLabels: ClassificationLabelUpdateManyInput
  convexHull: CgPointUpdateManyInput
  owner: UserUpdateOneWithoutOwnedAnnotationsInput
  creator: UserUpdateOneWithoutCreatedAnnotationsInput
}

input AnnotationUpdateWithoutOwnerDataInput {
  data: Json
  svgBounds: String
  anyoneCanView: Boolean
  anyoneCanSuggestRevision: Boolean
  annotator: UserUpdateOneRequiredWithoutAnnotationsInput
  subject: AnnotatableUpdateOneRequiredInput
  task: AnnotationTaskUpdateOneInput
  classificationLabels: ClassificationLabelUpdateManyInput
  convexHull: CgPointUpdateManyInput
  group: GroupUpdateOneWithoutOwnedAnnotationsInput
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
  svgBounds: String

  """All values that are not equal to given value."""
  svgBounds_not: String

  """All values that are contained in given list."""
  svgBounds_in: [String!]

  """All values that are not contained in given list."""
  svgBounds_not_in: [String!]

  """All values less than the given value."""
  svgBounds_lt: String

  """All values less than or equal the given value."""
  svgBounds_lte: String

  """All values greater than the given value."""
  svgBounds_gt: String

  """All values greater than or equal the given value."""
  svgBounds_gte: String

  """All values containing the given string."""
  svgBounds_contains: String

  """All values not containing the given string."""
  svgBounds_not_contains: String

  """All values starting with the given string."""
  svgBounds_starts_with: String

  """All values not starting with the given string."""
  svgBounds_not_starts_with: String

  """All values ending with the given string."""
  svgBounds_ends_with: String

  """All values not ending with the given string."""
  svgBounds_not_ends_with: String
  anyoneCanView: Boolean

  """All values that are not equal to given value."""
  anyoneCanView_not: Boolean
  anyoneCanSuggestRevision: Boolean

  """All values that are not equal to given value."""
  anyoneCanSuggestRevision_not: Boolean
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
  annotator: UserWhereInput
  subject: AnnotatableWhereInput
  task: AnnotationTaskWhereInput
  classificationLabels_every: ClassificationLabelWhereInput
  classificationLabels_some: ClassificationLabelWhereInput
  classificationLabels_none: ClassificationLabelWhereInput
  convexHull_every: CgPointWhereInput
  convexHull_some: CgPointWhereInput
  convexHull_none: CgPointWhereInput
  owner: UserWhereInput
  group: GroupWhereInput
  creator: UserWhereInput
}

input AnnotationWhereUniqueInput {
  id: ID
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type CgPoint implements Node {
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

"""A connection to a list of items."""
type CgPointConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type CgPointEdge {
  """The item at the end of the edge."""
  node: CgPoint!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [CgPointSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CgPointSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CgPointSubscriptionWhereInput!]

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
  node: CgPointWhereInput
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
  connect: [CgPointWhereUniqueInput!]
  disconnect: [CgPointWhereUniqueInput!]
  delete: [CgPointWhereUniqueInput!]
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
  """Logical AND on all given filters."""
  AND: [CgPointWhereInput!]

  """Logical OR on all given filters."""
  OR: [CgPointWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CgPointWhereInput!]
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
  x: Float

  """All values that are not equal to given value."""
  x_not: Float

  """All values that are contained in given list."""
  x_in: [Float!]

  """All values that are not contained in given list."""
  x_not_in: [Float!]

  """All values less than the given value."""
  x_lt: Float

  """All values less than or equal the given value."""
  x_lte: Float

  """All values greater than the given value."""
  x_gt: Float

  """All values greater than or equal the given value."""
  x_gte: Float
  y: Float

  """All values that are not equal to given value."""
  y_not: Float

  """All values that are contained in given list."""
  y_in: [Float!]

  """All values that are not contained in given list."""
  y_not_in: [Float!]

  """All values less than the given value."""
  y_lt: Float

  """All values less than or equal the given value."""
  y_lte: Float

  """All values greater than the given value."""
  y_gt: Float

  """All values greater than or equal the given value."""
  y_gte: Float
  xMin: Float

  """All values that are not equal to given value."""
  xMin_not: Float

  """All values that are contained in given list."""
  xMin_in: [Float!]

  """All values that are not contained in given list."""
  xMin_not_in: [Float!]

  """All values less than the given value."""
  xMin_lt: Float

  """All values less than or equal the given value."""
  xMin_lte: Float

  """All values greater than the given value."""
  xMin_gt: Float

  """All values greater than or equal the given value."""
  xMin_gte: Float
  yMin: Float

  """All values that are not equal to given value."""
  yMin_not: Float

  """All values that are contained in given list."""
  yMin_in: [Float!]

  """All values that are not contained in given list."""
  yMin_not_in: [Float!]

  """All values less than the given value."""
  yMin_lt: Float

  """All values less than or equal the given value."""
  yMin_lte: Float

  """All values greater than the given value."""
  yMin_gt: Float

  """All values greater than or equal the given value."""
  yMin_gte: Float
  xMax: Float

  """All values that are not equal to given value."""
  xMax_not: Float

  """All values that are contained in given list."""
  xMax_in: [Float!]

  """All values that are not contained in given list."""
  xMax_not_in: [Float!]

  """All values less than the given value."""
  xMax_lt: Float

  """All values less than or equal the given value."""
  xMax_lte: Float

  """All values greater than the given value."""
  xMax_gt: Float

  """All values greater than or equal the given value."""
  xMax_gte: Float
  yMax: Float

  """All values that are not equal to given value."""
  yMax_not: Float

  """All values that are contained in given list."""
  yMax_in: [Float!]

  """All values that are not contained in given list."""
  yMax_not_in: [Float!]

  """All values less than the given value."""
  yMax_lt: Float

  """All values less than or equal the given value."""
  yMax_lte: Float

  """All values greater than the given value."""
  yMax_gt: Float

  """All values greater than or equal the given value."""
  yMax_gte: Float
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

input CgPointWhereUniqueInput {
  id: ID
}

type ClassificationContext implements Node {
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

"""A connection to a list of items."""
type ClassificationContextConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ClassificationContextEdge]!
  aggregate: AggregateClassificationContext!
}

input ClassificationContextCreateInput {
  slug: String!
  displayName: String!
  infoHtml: String
  infoData: Json
  anyoneCanUse: Boolean
  anyoneCanAddLabels: Boolean
  anyoneCanEditLabels: Boolean
  anyoneCanUpdateInfo: Boolean
  labels: ClassificationLabelCreateManyWithoutContextsInput
  owner: UserCreateOneWithoutOwnedClassificationContextsInput
  group: GroupCreateOneWithoutOwnedClassificationContextsInput
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
  anyoneCanUse: Boolean
  anyoneCanAddLabels: Boolean
  anyoneCanEditLabels: Boolean
  anyoneCanUpdateInfo: Boolean
  labels: ClassificationLabelCreateManyWithoutContextsInput
  owner: UserCreateOneWithoutOwnedClassificationContextsInput
  group: GroupCreateOneWithoutOwnedClassificationContextsInput
}

input ClassificationContextCreateWithoutGroupInput {
  slug: String!
  displayName: String!
  infoHtml: String
  infoData: Json
  anyoneCanUse: Boolean
  anyoneCanAddLabels: Boolean
  anyoneCanEditLabels: Boolean
  anyoneCanUpdateInfo: Boolean
  labels: ClassificationLabelCreateManyWithoutContextsInput
  owner: UserCreateOneWithoutOwnedClassificationContextsInput
  creator: UserCreateOneWithoutCreatedClassificationContextsInput
}

input ClassificationContextCreateWithoutLabelsInput {
  slug: String!
  displayName: String!
  infoHtml: String
  infoData: Json
  anyoneCanUse: Boolean
  anyoneCanAddLabels: Boolean
  anyoneCanEditLabels: Boolean
  anyoneCanUpdateInfo: Boolean
  owner: UserCreateOneWithoutOwnedClassificationContextsInput
  group: GroupCreateOneWithoutOwnedClassificationContextsInput
  creator: UserCreateOneWithoutCreatedClassificationContextsInput
}

input ClassificationContextCreateWithoutOwnerInput {
  slug: String!
  displayName: String!
  infoHtml: String
  infoData: Json
  anyoneCanUse: Boolean
  anyoneCanAddLabels: Boolean
  anyoneCanEditLabels: Boolean
  anyoneCanUpdateInfo: Boolean
  labels: ClassificationLabelCreateManyWithoutContextsInput
  group: GroupCreateOneWithoutOwnedClassificationContextsInput
  creator: UserCreateOneWithoutCreatedClassificationContextsInput
}

"""An edge in a connection."""
type ClassificationContextEdge {
  """The item at the end of the edge."""
  node: ClassificationContext!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [ClassificationContextSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClassificationContextSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ClassificationContextSubscriptionWhereInput!]

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
  node: ClassificationContextWhereInput
}

input ClassificationContextUpdateDataInput {
  slug: String
  displayName: String
  infoHtml: String
  infoData: Json
  anyoneCanUse: Boolean
  anyoneCanAddLabels: Boolean
  anyoneCanEditLabels: Boolean
  anyoneCanUpdateInfo: Boolean
  labels: ClassificationLabelUpdateManyWithoutContextsInput
  owner: UserUpdateOneWithoutOwnedClassificationContextsInput
  group: GroupUpdateOneWithoutOwnedClassificationContextsInput
  creator: UserUpdateOneWithoutCreatedClassificationContextsInput
}

input ClassificationContextUpdateInput {
  slug: String
  displayName: String
  infoHtml: String
  infoData: Json
  anyoneCanUse: Boolean
  anyoneCanAddLabels: Boolean
  anyoneCanEditLabels: Boolean
  anyoneCanUpdateInfo: Boolean
  labels: ClassificationLabelUpdateManyWithoutContextsInput
  owner: UserUpdateOneWithoutOwnedClassificationContextsInput
  group: GroupUpdateOneWithoutOwnedClassificationContextsInput
  creator: UserUpdateOneWithoutCreatedClassificationContextsInput
}

input ClassificationContextUpdateManyInput {
  create: [ClassificationContextCreateInput!]
  connect: [ClassificationContextWhereUniqueInput!]
  disconnect: [ClassificationContextWhereUniqueInput!]
  delete: [ClassificationContextWhereUniqueInput!]
  update: [ClassificationContextUpdateWithWhereUniqueNestedInput!]
  upsert: [ClassificationContextUpsertWithWhereUniqueNestedInput!]
}

input ClassificationContextUpdateManyWithoutCreatorInput {
  create: [ClassificationContextCreateWithoutCreatorInput!]
  connect: [ClassificationContextWhereUniqueInput!]
  disconnect: [ClassificationContextWhereUniqueInput!]
  delete: [ClassificationContextWhereUniqueInput!]
  update: [ClassificationContextUpdateWithWhereUniqueWithoutCreatorInput!]
  upsert: [ClassificationContextUpsertWithWhereUniqueWithoutCreatorInput!]
}

input ClassificationContextUpdateManyWithoutGroupInput {
  create: [ClassificationContextCreateWithoutGroupInput!]
  connect: [ClassificationContextWhereUniqueInput!]
  disconnect: [ClassificationContextWhereUniqueInput!]
  delete: [ClassificationContextWhereUniqueInput!]
  update: [ClassificationContextUpdateWithWhereUniqueWithoutGroupInput!]
  upsert: [ClassificationContextUpsertWithWhereUniqueWithoutGroupInput!]
}

input ClassificationContextUpdateManyWithoutLabelsInput {
  create: [ClassificationContextCreateWithoutLabelsInput!]
  connect: [ClassificationContextWhereUniqueInput!]
  disconnect: [ClassificationContextWhereUniqueInput!]
  delete: [ClassificationContextWhereUniqueInput!]
  update: [ClassificationContextUpdateWithWhereUniqueWithoutLabelsInput!]
  upsert: [ClassificationContextUpsertWithWhereUniqueWithoutLabelsInput!]
}

input ClassificationContextUpdateManyWithoutOwnerInput {
  create: [ClassificationContextCreateWithoutOwnerInput!]
  connect: [ClassificationContextWhereUniqueInput!]
  disconnect: [ClassificationContextWhereUniqueInput!]
  delete: [ClassificationContextWhereUniqueInput!]
  update: [ClassificationContextUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [ClassificationContextUpsertWithWhereUniqueWithoutOwnerInput!]
}

input ClassificationContextUpdateWithoutCreatorDataInput {
  slug: String
  displayName: String
  infoHtml: String
  infoData: Json
  anyoneCanUse: Boolean
  anyoneCanAddLabels: Boolean
  anyoneCanEditLabels: Boolean
  anyoneCanUpdateInfo: Boolean
  labels: ClassificationLabelUpdateManyWithoutContextsInput
  owner: UserUpdateOneWithoutOwnedClassificationContextsInput
  group: GroupUpdateOneWithoutOwnedClassificationContextsInput
}

input ClassificationContextUpdateWithoutGroupDataInput {
  slug: String
  displayName: String
  infoHtml: String
  infoData: Json
  anyoneCanUse: Boolean
  anyoneCanAddLabels: Boolean
  anyoneCanEditLabels: Boolean
  anyoneCanUpdateInfo: Boolean
  labels: ClassificationLabelUpdateManyWithoutContextsInput
  owner: UserUpdateOneWithoutOwnedClassificationContextsInput
  creator: UserUpdateOneWithoutCreatedClassificationContextsInput
}

input ClassificationContextUpdateWithoutLabelsDataInput {
  slug: String
  displayName: String
  infoHtml: String
  infoData: Json
  anyoneCanUse: Boolean
  anyoneCanAddLabels: Boolean
  anyoneCanEditLabels: Boolean
  anyoneCanUpdateInfo: Boolean
  owner: UserUpdateOneWithoutOwnedClassificationContextsInput
  group: GroupUpdateOneWithoutOwnedClassificationContextsInput
  creator: UserUpdateOneWithoutCreatedClassificationContextsInput
}

input ClassificationContextUpdateWithoutOwnerDataInput {
  slug: String
  displayName: String
  infoHtml: String
  infoData: Json
  anyoneCanUse: Boolean
  anyoneCanAddLabels: Boolean
  anyoneCanEditLabels: Boolean
  anyoneCanUpdateInfo: Boolean
  labels: ClassificationLabelUpdateManyWithoutContextsInput
  group: GroupUpdateOneWithoutOwnedClassificationContextsInput
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
  """Logical AND on all given filters."""
  AND: [ClassificationContextWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClassificationContextWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ClassificationContextWhereInput!]
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
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
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
  infoHtml: String

  """All values that are not equal to given value."""
  infoHtml_not: String

  """All values that are contained in given list."""
  infoHtml_in: [String!]

  """All values that are not contained in given list."""
  infoHtml_not_in: [String!]

  """All values less than the given value."""
  infoHtml_lt: String

  """All values less than or equal the given value."""
  infoHtml_lte: String

  """All values greater than the given value."""
  infoHtml_gt: String

  """All values greater than or equal the given value."""
  infoHtml_gte: String

  """All values containing the given string."""
  infoHtml_contains: String

  """All values not containing the given string."""
  infoHtml_not_contains: String

  """All values starting with the given string."""
  infoHtml_starts_with: String

  """All values not starting with the given string."""
  infoHtml_not_starts_with: String

  """All values ending with the given string."""
  infoHtml_ends_with: String

  """All values not ending with the given string."""
  infoHtml_not_ends_with: String
  anyoneCanUse: Boolean

  """All values that are not equal to given value."""
  anyoneCanUse_not: Boolean
  anyoneCanAddLabels: Boolean

  """All values that are not equal to given value."""
  anyoneCanAddLabels_not: Boolean
  anyoneCanEditLabels: Boolean

  """All values that are not equal to given value."""
  anyoneCanEditLabels_not: Boolean
  anyoneCanUpdateInfo: Boolean

  """All values that are not equal to given value."""
  anyoneCanUpdateInfo_not: Boolean
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
  labels_every: ClassificationLabelWhereInput
  labels_some: ClassificationLabelWhereInput
  labels_none: ClassificationLabelWhereInput
  owner: UserWhereInput
  group: GroupWhereInput
  creator: UserWhereInput
}

input ClassificationContextWhereUniqueInput {
  id: ID
}

type ClassificationLabel implements Node {
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

"""A connection to a list of items."""
type ClassificationLabelConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ClassificationLabelEdge]!
  aggregate: AggregateClassificationLabel!
}

input ClassificationLabelCreateInput {
  slug: String!
  displayName: String!
  infoHtml: String
  infoData: Json
  anyoneCanUse: Boolean
  anyoneCanEditInfo: Boolean
  contexts: ClassificationContextCreateManyWithoutLabelsInput
  owner: UserCreateOneWithoutOwnedClassificationLabelsInput
  group: GroupCreateOneWithoutOwnedClassificationLabelsInput
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
  anyoneCanUse: Boolean
  anyoneCanEditInfo: Boolean
  owner: UserCreateOneWithoutOwnedClassificationLabelsInput
  group: GroupCreateOneWithoutOwnedClassificationLabelsInput
  creator: UserCreateOneWithoutCreatedClassificationLabelsInput
}

input ClassificationLabelCreateWithoutCreatorInput {
  slug: String!
  displayName: String!
  infoHtml: String
  infoData: Json
  anyoneCanUse: Boolean
  anyoneCanEditInfo: Boolean
  contexts: ClassificationContextCreateManyWithoutLabelsInput
  owner: UserCreateOneWithoutOwnedClassificationLabelsInput
  group: GroupCreateOneWithoutOwnedClassificationLabelsInput
}

input ClassificationLabelCreateWithoutGroupInput {
  slug: String!
  displayName: String!
  infoHtml: String
  infoData: Json
  anyoneCanUse: Boolean
  anyoneCanEditInfo: Boolean
  contexts: ClassificationContextCreateManyWithoutLabelsInput
  owner: UserCreateOneWithoutOwnedClassificationLabelsInput
  creator: UserCreateOneWithoutCreatedClassificationLabelsInput
}

input ClassificationLabelCreateWithoutOwnerInput {
  slug: String!
  displayName: String!
  infoHtml: String
  infoData: Json
  anyoneCanUse: Boolean
  anyoneCanEditInfo: Boolean
  contexts: ClassificationContextCreateManyWithoutLabelsInput
  group: GroupCreateOneWithoutOwnedClassificationLabelsInput
  creator: UserCreateOneWithoutCreatedClassificationLabelsInput
}

"""An edge in a connection."""
type ClassificationLabelEdge {
  """The item at the end of the edge."""
  node: ClassificationLabel!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [ClassificationLabelSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClassificationLabelSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ClassificationLabelSubscriptionWhereInput!]

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
  node: ClassificationLabelWhereInput
}

input ClassificationLabelUpdateDataInput {
  slug: String
  displayName: String
  infoHtml: String
  infoData: Json
  anyoneCanUse: Boolean
  anyoneCanEditInfo: Boolean
  contexts: ClassificationContextUpdateManyWithoutLabelsInput
  owner: UserUpdateOneWithoutOwnedClassificationLabelsInput
  group: GroupUpdateOneWithoutOwnedClassificationLabelsInput
  creator: UserUpdateOneWithoutCreatedClassificationLabelsInput
}

input ClassificationLabelUpdateInput {
  slug: String
  displayName: String
  infoHtml: String
  infoData: Json
  anyoneCanUse: Boolean
  anyoneCanEditInfo: Boolean
  contexts: ClassificationContextUpdateManyWithoutLabelsInput
  owner: UserUpdateOneWithoutOwnedClassificationLabelsInput
  group: GroupUpdateOneWithoutOwnedClassificationLabelsInput
  creator: UserUpdateOneWithoutCreatedClassificationLabelsInput
}

input ClassificationLabelUpdateManyInput {
  create: [ClassificationLabelCreateInput!]
  connect: [ClassificationLabelWhereUniqueInput!]
  disconnect: [ClassificationLabelWhereUniqueInput!]
  delete: [ClassificationLabelWhereUniqueInput!]
  update: [ClassificationLabelUpdateWithWhereUniqueNestedInput!]
  upsert: [ClassificationLabelUpsertWithWhereUniqueNestedInput!]
}

input ClassificationLabelUpdateManyWithoutContextsInput {
  create: [ClassificationLabelCreateWithoutContextsInput!]
  connect: [ClassificationLabelWhereUniqueInput!]
  disconnect: [ClassificationLabelWhereUniqueInput!]
  delete: [ClassificationLabelWhereUniqueInput!]
  update: [ClassificationLabelUpdateWithWhereUniqueWithoutContextsInput!]
  upsert: [ClassificationLabelUpsertWithWhereUniqueWithoutContextsInput!]
}

input ClassificationLabelUpdateManyWithoutCreatorInput {
  create: [ClassificationLabelCreateWithoutCreatorInput!]
  connect: [ClassificationLabelWhereUniqueInput!]
  disconnect: [ClassificationLabelWhereUniqueInput!]
  delete: [ClassificationLabelWhereUniqueInput!]
  update: [ClassificationLabelUpdateWithWhereUniqueWithoutCreatorInput!]
  upsert: [ClassificationLabelUpsertWithWhereUniqueWithoutCreatorInput!]
}

input ClassificationLabelUpdateManyWithoutGroupInput {
  create: [ClassificationLabelCreateWithoutGroupInput!]
  connect: [ClassificationLabelWhereUniqueInput!]
  disconnect: [ClassificationLabelWhereUniqueInput!]
  delete: [ClassificationLabelWhereUniqueInput!]
  update: [ClassificationLabelUpdateWithWhereUniqueWithoutGroupInput!]
  upsert: [ClassificationLabelUpsertWithWhereUniqueWithoutGroupInput!]
}

input ClassificationLabelUpdateManyWithoutOwnerInput {
  create: [ClassificationLabelCreateWithoutOwnerInput!]
  connect: [ClassificationLabelWhereUniqueInput!]
  disconnect: [ClassificationLabelWhereUniqueInput!]
  delete: [ClassificationLabelWhereUniqueInput!]
  update: [ClassificationLabelUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [ClassificationLabelUpsertWithWhereUniqueWithoutOwnerInput!]
}

input ClassificationLabelUpdateWithoutContextsDataInput {
  slug: String
  displayName: String
  infoHtml: String
  infoData: Json
  anyoneCanUse: Boolean
  anyoneCanEditInfo: Boolean
  owner: UserUpdateOneWithoutOwnedClassificationLabelsInput
  group: GroupUpdateOneWithoutOwnedClassificationLabelsInput
  creator: UserUpdateOneWithoutCreatedClassificationLabelsInput
}

input ClassificationLabelUpdateWithoutCreatorDataInput {
  slug: String
  displayName: String
  infoHtml: String
  infoData: Json
  anyoneCanUse: Boolean
  anyoneCanEditInfo: Boolean
  contexts: ClassificationContextUpdateManyWithoutLabelsInput
  owner: UserUpdateOneWithoutOwnedClassificationLabelsInput
  group: GroupUpdateOneWithoutOwnedClassificationLabelsInput
}

input ClassificationLabelUpdateWithoutGroupDataInput {
  slug: String
  displayName: String
  infoHtml: String
  infoData: Json
  anyoneCanUse: Boolean
  anyoneCanEditInfo: Boolean
  contexts: ClassificationContextUpdateManyWithoutLabelsInput
  owner: UserUpdateOneWithoutOwnedClassificationLabelsInput
  creator: UserUpdateOneWithoutCreatedClassificationLabelsInput
}

input ClassificationLabelUpdateWithoutOwnerDataInput {
  slug: String
  displayName: String
  infoHtml: String
  infoData: Json
  anyoneCanUse: Boolean
  anyoneCanEditInfo: Boolean
  contexts: ClassificationContextUpdateManyWithoutLabelsInput
  group: GroupUpdateOneWithoutOwnedClassificationLabelsInput
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
  """Logical AND on all given filters."""
  AND: [ClassificationLabelWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClassificationLabelWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ClassificationLabelWhereInput!]
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
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
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
  infoHtml: String

  """All values that are not equal to given value."""
  infoHtml_not: String

  """All values that are contained in given list."""
  infoHtml_in: [String!]

  """All values that are not contained in given list."""
  infoHtml_not_in: [String!]

  """All values less than the given value."""
  infoHtml_lt: String

  """All values less than or equal the given value."""
  infoHtml_lte: String

  """All values greater than the given value."""
  infoHtml_gt: String

  """All values greater than or equal the given value."""
  infoHtml_gte: String

  """All values containing the given string."""
  infoHtml_contains: String

  """All values not containing the given string."""
  infoHtml_not_contains: String

  """All values starting with the given string."""
  infoHtml_starts_with: String

  """All values not starting with the given string."""
  infoHtml_not_starts_with: String

  """All values ending with the given string."""
  infoHtml_ends_with: String

  """All values not ending with the given string."""
  infoHtml_not_ends_with: String
  anyoneCanUse: Boolean

  """All values that are not equal to given value."""
  anyoneCanUse_not: Boolean
  anyoneCanEditInfo: Boolean

  """All values that are not equal to given value."""
  anyoneCanEditInfo_not: Boolean
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
  contexts_every: ClassificationContextWhereInput
  contexts_some: ClassificationContextWhereInput
  contexts_none: ClassificationContextWhereInput
  owner: UserWhereInput
  group: GroupWhereInput
  creator: UserWhereInput
}

input ClassificationLabelWhereUniqueInput {
  id: ID
}

scalar DateTime

type Group implements Node {
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

"""A connection to a list of items."""
type GroupConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type GroupEdge {
  """The item at the end of the edge."""
  node: Group!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [GroupSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GroupSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GroupSubscriptionWhereInput!]

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
  node: GroupWhereInput
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
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  delete: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutCreatorInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutCreatorInput!]
}

input GroupUpdateManyWithoutManagerGroupsInput {
  create: [GroupCreateWithoutManagerGroupsInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  delete: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutManagerGroupsInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutManagerGroupsInput!]
}

input GroupUpdateManyWithoutManagerOfGroupsInput {
  create: [GroupCreateWithoutManagerOfGroupsInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  delete: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutManagerOfGroupsInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutManagerOfGroupsInput!]
}

input GroupUpdateManyWithoutManagerUsersInput {
  create: [GroupCreateWithoutManagerUsersInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  delete: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutManagerUsersInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutManagerUsersInput!]
}

input GroupUpdateManyWithoutMemberGroupsInput {
  create: [GroupCreateWithoutMemberGroupsInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  delete: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutMemberGroupsInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutMemberGroupsInput!]
}

input GroupUpdateManyWithoutMemberOfGroupsInput {
  create: [GroupCreateWithoutMemberOfGroupsInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  delete: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutMemberOfGroupsInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutMemberOfGroupsInput!]
}

input GroupUpdateManyWithoutMemberUsersInput {
  create: [GroupCreateWithoutMemberUsersInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  delete: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutMemberUsersInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutMemberUsersInput!]
}

input GroupUpdateManyWithoutOwnerInput {
  create: [GroupCreateWithoutOwnerInput!]
  connect: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  delete: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutOwnerInput!]
}

input GroupUpdateOneWithoutOwnedAnnotatablesInput {
  create: GroupCreateWithoutOwnedAnnotatablesInput
  connect: GroupWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: GroupUpdateWithoutOwnedAnnotatablesDataInput
  upsert: GroupUpsertWithoutOwnedAnnotatablesInput
}

input GroupUpdateOneWithoutOwnedAnnotationsInput {
  create: GroupCreateWithoutOwnedAnnotationsInput
  connect: GroupWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: GroupUpdateWithoutOwnedAnnotationsDataInput
  upsert: GroupUpsertWithoutOwnedAnnotationsInput
}

input GroupUpdateOneWithoutOwnedAnnotationTasksInput {
  create: GroupCreateWithoutOwnedAnnotationTasksInput
  connect: GroupWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: GroupUpdateWithoutOwnedAnnotationTasksDataInput
  upsert: GroupUpsertWithoutOwnedAnnotationTasksInput
}

input GroupUpdateOneWithoutOwnedClassificationContextsInput {
  create: GroupCreateWithoutOwnedClassificationContextsInput
  connect: GroupWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: GroupUpdateWithoutOwnedClassificationContextsDataInput
  upsert: GroupUpsertWithoutOwnedClassificationContextsInput
}

input GroupUpdateOneWithoutOwnedClassificationLabelsInput {
  create: GroupCreateWithoutOwnedClassificationLabelsInput
  connect: GroupWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: GroupUpdateWithoutOwnedClassificationLabelsDataInput
  upsert: GroupUpsertWithoutOwnedClassificationLabelsInput
}

input GroupUpdateOneWithoutOwnedImagesInput {
  create: GroupCreateWithoutOwnedImagesInput
  connect: GroupWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: GroupUpdateWithoutOwnedImagesDataInput
  upsert: GroupUpsertWithoutOwnedImagesInput
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
  """Logical AND on all given filters."""
  AND: [GroupWhereInput!]

  """Logical OR on all given filters."""
  OR: [GroupWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GroupWhereInput!]
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
}

input GroupWhereUniqueInput {
  id: ID
}

type Image implements Node {
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
  digestSha3: String
  digestSha2: String
  digestSha1: String
  digestMd5: String
  sizeInBytes: Int
  width: Int
  height: Int
  anyoneCanView: Boolean
  owner: UserCreateOneWithoutOwnedImagesInput
  group: GroupCreateOneWithoutOwnedImagesInput
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
  anyoneCanView: Boolean
  owner: UserCreateOneWithoutOwnedImagesInput
  group: GroupCreateOneWithoutOwnedImagesInput
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
  anyoneCanView: Boolean
  owner: UserCreateOneWithoutOwnedImagesInput
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
  anyoneCanView: Boolean
  group: GroupCreateOneWithoutOwnedImagesInput
  creator: UserCreateOneWithoutCreatedImagesInput
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
  digestSha3: String
  digestSha2: String
  digestSha1: String
  digestMd5: String
  sizeInBytes: Int
  width: Int
  height: Int
  anyoneCanView: Boolean
  owner: UserUpdateOneWithoutOwnedImagesInput
  group: GroupUpdateOneWithoutOwnedImagesInput
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
  anyoneCanView: Boolean
  owner: UserUpdateOneWithoutOwnedImagesInput
  group: GroupUpdateOneWithoutOwnedImagesInput
  creator: UserUpdateOneWithoutCreatedImagesInput
}

input ImageUpdateManyWithoutCreatorInput {
  create: [ImageCreateWithoutCreatorInput!]
  connect: [ImageWhereUniqueInput!]
  disconnect: [ImageWhereUniqueInput!]
  delete: [ImageWhereUniqueInput!]
  update: [ImageUpdateWithWhereUniqueWithoutCreatorInput!]
  upsert: [ImageUpsertWithWhereUniqueWithoutCreatorInput!]
}

input ImageUpdateManyWithoutGroupInput {
  create: [ImageCreateWithoutGroupInput!]
  connect: [ImageWhereUniqueInput!]
  disconnect: [ImageWhereUniqueInput!]
  delete: [ImageWhereUniqueInput!]
  update: [ImageUpdateWithWhereUniqueWithoutGroupInput!]
  upsert: [ImageUpsertWithWhereUniqueWithoutGroupInput!]
}

input ImageUpdateManyWithoutOwnerInput {
  create: [ImageCreateWithoutOwnerInput!]
  connect: [ImageWhereUniqueInput!]
  disconnect: [ImageWhereUniqueInput!]
  delete: [ImageWhereUniqueInput!]
  update: [ImageUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [ImageUpsertWithWhereUniqueWithoutOwnerInput!]
}

input ImageUpdateOneInput {
  create: ImageCreateInput
  connect: ImageWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ImageUpdateDataInput
  upsert: ImageUpsertNestedInput
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
  anyoneCanView: Boolean
  owner: UserUpdateOneWithoutOwnedImagesInput
  group: GroupUpdateOneWithoutOwnedImagesInput
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
  anyoneCanView: Boolean
  owner: UserUpdateOneWithoutOwnedImagesInput
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
  anyoneCanView: Boolean
  group: GroupUpdateOneWithoutOwnedImagesInput
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
  digestSha3: String

  """All values that are not equal to given value."""
  digestSha3_not: String

  """All values that are contained in given list."""
  digestSha3_in: [String!]

  """All values that are not contained in given list."""
  digestSha3_not_in: [String!]

  """All values less than the given value."""
  digestSha3_lt: String

  """All values less than or equal the given value."""
  digestSha3_lte: String

  """All values greater than the given value."""
  digestSha3_gt: String

  """All values greater than or equal the given value."""
  digestSha3_gte: String

  """All values containing the given string."""
  digestSha3_contains: String

  """All values not containing the given string."""
  digestSha3_not_contains: String

  """All values starting with the given string."""
  digestSha3_starts_with: String

  """All values not starting with the given string."""
  digestSha3_not_starts_with: String

  """All values ending with the given string."""
  digestSha3_ends_with: String

  """All values not ending with the given string."""
  digestSha3_not_ends_with: String
  digestSha2: String

  """All values that are not equal to given value."""
  digestSha2_not: String

  """All values that are contained in given list."""
  digestSha2_in: [String!]

  """All values that are not contained in given list."""
  digestSha2_not_in: [String!]

  """All values less than the given value."""
  digestSha2_lt: String

  """All values less than or equal the given value."""
  digestSha2_lte: String

  """All values greater than the given value."""
  digestSha2_gt: String

  """All values greater than or equal the given value."""
  digestSha2_gte: String

  """All values containing the given string."""
  digestSha2_contains: String

  """All values not containing the given string."""
  digestSha2_not_contains: String

  """All values starting with the given string."""
  digestSha2_starts_with: String

  """All values not starting with the given string."""
  digestSha2_not_starts_with: String

  """All values ending with the given string."""
  digestSha2_ends_with: String

  """All values not ending with the given string."""
  digestSha2_not_ends_with: String
  digestSha1: String

  """All values that are not equal to given value."""
  digestSha1_not: String

  """All values that are contained in given list."""
  digestSha1_in: [String!]

  """All values that are not contained in given list."""
  digestSha1_not_in: [String!]

  """All values less than the given value."""
  digestSha1_lt: String

  """All values less than or equal the given value."""
  digestSha1_lte: String

  """All values greater than the given value."""
  digestSha1_gt: String

  """All values greater than or equal the given value."""
  digestSha1_gte: String

  """All values containing the given string."""
  digestSha1_contains: String

  """All values not containing the given string."""
  digestSha1_not_contains: String

  """All values starting with the given string."""
  digestSha1_starts_with: String

  """All values not starting with the given string."""
  digestSha1_not_starts_with: String

  """All values ending with the given string."""
  digestSha1_ends_with: String

  """All values not ending with the given string."""
  digestSha1_not_ends_with: String
  digestMd5: String

  """All values that are not equal to given value."""
  digestMd5_not: String

  """All values that are contained in given list."""
  digestMd5_in: [String!]

  """All values that are not contained in given list."""
  digestMd5_not_in: [String!]

  """All values less than the given value."""
  digestMd5_lt: String

  """All values less than or equal the given value."""
  digestMd5_lte: String

  """All values greater than the given value."""
  digestMd5_gt: String

  """All values greater than or equal the given value."""
  digestMd5_gte: String

  """All values containing the given string."""
  digestMd5_contains: String

  """All values not containing the given string."""
  digestMd5_not_contains: String

  """All values starting with the given string."""
  digestMd5_starts_with: String

  """All values not starting with the given string."""
  digestMd5_not_starts_with: String

  """All values ending with the given string."""
  digestMd5_ends_with: String

  """All values not ending with the given string."""
  digestMd5_not_ends_with: String
  sizeInBytes: Int

  """All values that are not equal to given value."""
  sizeInBytes_not: Int

  """All values that are contained in given list."""
  sizeInBytes_in: [Int!]

  """All values that are not contained in given list."""
  sizeInBytes_not_in: [Int!]

  """All values less than the given value."""
  sizeInBytes_lt: Int

  """All values less than or equal the given value."""
  sizeInBytes_lte: Int

  """All values greater than the given value."""
  sizeInBytes_gt: Int

  """All values greater than or equal the given value."""
  sizeInBytes_gte: Int
  width: Int

  """All values that are not equal to given value."""
  width_not: Int

  """All values that are contained in given list."""
  width_in: [Int!]

  """All values that are not contained in given list."""
  width_not_in: [Int!]

  """All values less than the given value."""
  width_lt: Int

  """All values less than or equal the given value."""
  width_lte: Int

  """All values greater than the given value."""
  width_gt: Int

  """All values greater than or equal the given value."""
  width_gte: Int
  height: Int

  """All values that are not equal to given value."""
  height_not: Int

  """All values that are contained in given list."""
  height_in: [Int!]

  """All values that are not contained in given list."""
  height_not_in: [Int!]

  """All values less than the given value."""
  height_lt: Int

  """All values less than or equal the given value."""
  height_lte: Int

  """All values greater than the given value."""
  height_gt: Int

  """All values greater than or equal the given value."""
  height_gte: Int
  anyoneCanView: Boolean

  """All values that are not equal to given value."""
  anyoneCanView_not: Boolean
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
  owner: UserWhereInput
  group: GroupWhereInput
  creator: UserWhereInput
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
  createGroup(data: GroupCreateInput!): Group!
  createAnnotation(data: AnnotationCreateInput!): Annotation!
  createAnnotationTask(data: AnnotationTaskCreateInput!): AnnotationTask!
  createAnnotatable(data: AnnotatableCreateInput!): Annotatable!
  createCgPoint(data: CgPointCreateInput!): CgPoint!
  createImage(data: ImageCreateInput!): Image!
  createClassificationLabel(data: ClassificationLabelCreateInput!): ClassificationLabel!
  createClassificationContext(data: ClassificationContextCreateInput!): ClassificationContext!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateSystemLogin(data: SystemLoginUpdateInput!, where: SystemLoginWhereUniqueInput!): SystemLogin
  updateLocalLogin(data: LocalLoginUpdateInput!, where: LocalLoginWhereUniqueInput!): LocalLogin
  updateGroup(data: GroupUpdateInput!, where: GroupWhereUniqueInput!): Group
  updateAnnotation(data: AnnotationUpdateInput!, where: AnnotationWhereUniqueInput!): Annotation
  updateAnnotationTask(data: AnnotationTaskUpdateInput!, where: AnnotationTaskWhereUniqueInput!): AnnotationTask
  updateAnnotatable(data: AnnotatableUpdateInput!, where: AnnotatableWhereUniqueInput!): Annotatable
  updateCgPoint(data: CgPointUpdateInput!, where: CgPointWhereUniqueInput!): CgPoint
  updateImage(data: ImageUpdateInput!, where: ImageWhereUniqueInput!): Image
  updateClassificationLabel(data: ClassificationLabelUpdateInput!, where: ClassificationLabelWhereUniqueInput!): ClassificationLabel
  updateClassificationContext(data: ClassificationContextUpdateInput!, where: ClassificationContextWhereUniqueInput!): ClassificationContext
  deleteUser(where: UserWhereUniqueInput!): User
  deleteSystemLogin(where: SystemLoginWhereUniqueInput!): SystemLogin
  deleteLocalLogin(where: LocalLoginWhereUniqueInput!): LocalLogin
  deleteGroup(where: GroupWhereUniqueInput!): Group
  deleteAnnotation(where: AnnotationWhereUniqueInput!): Annotation
  deleteAnnotationTask(where: AnnotationTaskWhereUniqueInput!): AnnotationTask
  deleteAnnotatable(where: AnnotatableWhereUniqueInput!): Annotatable
  deleteCgPoint(where: CgPointWhereUniqueInput!): CgPoint
  deleteImage(where: ImageWhereUniqueInput!): Image
  deleteClassificationLabel(where: ClassificationLabelWhereUniqueInput!): ClassificationLabel
  deleteClassificationContext(where: ClassificationContextWhereUniqueInput!): ClassificationContext
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertSystemLogin(where: SystemLoginWhereUniqueInput!, create: SystemLoginCreateInput!, update: SystemLoginUpdateInput!): SystemLogin!
  upsertLocalLogin(where: LocalLoginWhereUniqueInput!, create: LocalLoginCreateInput!, update: LocalLoginUpdateInput!): LocalLogin!
  upsertGroup(where: GroupWhereUniqueInput!, create: GroupCreateInput!, update: GroupUpdateInput!): Group!
  upsertAnnotation(where: AnnotationWhereUniqueInput!, create: AnnotationCreateInput!, update: AnnotationUpdateInput!): Annotation!
  upsertAnnotationTask(where: AnnotationTaskWhereUniqueInput!, create: AnnotationTaskCreateInput!, update: AnnotationTaskUpdateInput!): AnnotationTask!
  upsertAnnotatable(where: AnnotatableWhereUniqueInput!, create: AnnotatableCreateInput!, update: AnnotatableUpdateInput!): Annotatable!
  upsertCgPoint(where: CgPointWhereUniqueInput!, create: CgPointCreateInput!, update: CgPointUpdateInput!): CgPoint!
  upsertImage(where: ImageWhereUniqueInput!, create: ImageCreateInput!, update: ImageUpdateInput!): Image!
  upsertClassificationLabel(where: ClassificationLabelWhereUniqueInput!, create: ClassificationLabelCreateInput!, update: ClassificationLabelUpdateInput!): ClassificationLabel!
  upsertClassificationContext(where: ClassificationContextWhereUniqueInput!, create: ClassificationContextCreateInput!, update: ClassificationContextUpdateInput!): ClassificationContext!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManySystemLogins(data: SystemLoginUpdateInput!, where: SystemLoginWhereInput): BatchPayload!
  updateManyLocalLogins(data: LocalLoginUpdateInput!, where: LocalLoginWhereInput): BatchPayload!
  updateManyGroups(data: GroupUpdateInput!, where: GroupWhereInput): BatchPayload!
  updateManyAnnotations(data: AnnotationUpdateInput!, where: AnnotationWhereInput): BatchPayload!
  updateManyAnnotationTasks(data: AnnotationTaskUpdateInput!, where: AnnotationTaskWhereInput): BatchPayload!
  updateManyAnnotatables(data: AnnotatableUpdateInput!, where: AnnotatableWhereInput): BatchPayload!
  updateManyCgPoints(data: CgPointUpdateInput!, where: CgPointWhereInput): BatchPayload!
  updateManyImages(data: ImageUpdateInput!, where: ImageWhereInput): BatchPayload!
  updateManyClassificationLabels(data: ClassificationLabelUpdateInput!, where: ClassificationLabelWhereInput): BatchPayload!
  updateManyClassificationContexts(data: ClassificationContextUpdateInput!, where: ClassificationContextWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManySystemLogins(where: SystemLoginWhereInput): BatchPayload!
  deleteManyLocalLogins(where: LocalLoginWhereInput): BatchPayload!
  deleteManyGroups(where: GroupWhereInput): BatchPayload!
  deleteManyAnnotations(where: AnnotationWhereInput): BatchPayload!
  deleteManyAnnotationTasks(where: AnnotationTaskWhereInput): BatchPayload!
  deleteManyAnnotatables(where: AnnotatableWhereInput): BatchPayload!
  deleteManyCgPoints(where: CgPointWhereInput): BatchPayload!
  deleteManyImages(where: ImageWhereInput): BatchPayload!
  deleteManyClassificationLabels(where: ClassificationLabelWhereInput): BatchPayload!
  deleteManyClassificationContexts(where: ClassificationContextWhereInput): BatchPayload!
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
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group]!
  annotations(where: AnnotationWhereInput, orderBy: AnnotationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Annotation]!
  annotationTasks(where: AnnotationTaskWhereInput, orderBy: AnnotationTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AnnotationTask]!
  annotatables(where: AnnotatableWhereInput, orderBy: AnnotatableOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Annotatable]!
  cgPoints(where: CgPointWhereInput, orderBy: CgPointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CgPoint]!
  images(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Image]!
  classificationLabels(where: ClassificationLabelWhereInput, orderBy: ClassificationLabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassificationLabel]!
  classificationContexts(where: ClassificationContextWhereInput, orderBy: ClassificationContextOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassificationContext]!
  user(where: UserWhereUniqueInput!): User
  systemLogin(where: SystemLoginWhereUniqueInput!): SystemLogin
  localLogin(where: LocalLoginWhereUniqueInput!): LocalLogin
  group(where: GroupWhereUniqueInput!): Group
  annotation(where: AnnotationWhereUniqueInput!): Annotation
  annotationTask(where: AnnotationTaskWhereUniqueInput!): AnnotationTask
  annotatable(where: AnnotatableWhereUniqueInput!): Annotatable
  cgPoint(where: CgPointWhereUniqueInput!): CgPoint
  image(where: ImageWhereUniqueInput!): Image
  classificationLabel(where: ClassificationLabelWhereUniqueInput!): ClassificationLabel
  classificationContext(where: ClassificationContextWhereUniqueInput!): ClassificationContext
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  systemLoginsConnection(where: SystemLoginWhereInput, orderBy: SystemLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SystemLoginConnection!
  localLoginsConnection(where: LocalLoginWhereInput, orderBy: LocalLoginOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocalLoginConnection!
  groupsConnection(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GroupConnection!
  annotationsConnection(where: AnnotationWhereInput, orderBy: AnnotationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AnnotationConnection!
  annotationTasksConnection(where: AnnotationTaskWhereInput, orderBy: AnnotationTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AnnotationTaskConnection!
  annotatablesConnection(where: AnnotatableWhereInput, orderBy: AnnotatableOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AnnotatableConnection!
  cgPointsConnection(where: CgPointWhereInput, orderBy: CgPointOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CgPointConnection!
  imagesConnection(where: ImageWhereInput, orderBy: ImageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ImageConnection!
  classificationLabelsConnection(where: ClassificationLabelWhereInput, orderBy: ClassificationLabelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClassificationLabelConnection!
  classificationContextsConnection(where: ClassificationContextWhereInput, orderBy: ClassificationContextOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClassificationContextConnection!

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
  group(where: GroupSubscriptionWhereInput): GroupSubscriptionPayload
  annotation(where: AnnotationSubscriptionWhereInput): AnnotationSubscriptionPayload
  annotationTask(where: AnnotationTaskSubscriptionWhereInput): AnnotationTaskSubscriptionPayload
  annotatable(where: AnnotatableSubscriptionWhereInput): AnnotatableSubscriptionPayload
  cgPoint(where: CgPointSubscriptionWhereInput): CgPointSubscriptionPayload
  image(where: ImageSubscriptionWhereInput): ImageSubscriptionPayload
  classificationLabel(where: ClassificationLabelSubscriptionWhereInput): ClassificationLabelSubscriptionPayload
  classificationContext(where: ClassificationContextSubscriptionWhereInput): ClassificationContextSubscriptionPayload
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
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutAssignedAnnotationTasksInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutAssignedAnnotationTasksInput!]
}

input UserUpdateManyWithoutManagerOfGroupsInput {
  create: [UserCreateWithoutManagerOfGroupsInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutManagerOfGroupsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutManagerOfGroupsInput!]
}

input UserUpdateManyWithoutMemberOfGroupsInput {
  create: [UserCreateWithoutMemberOfGroupsInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutMemberOfGroupsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutMemberOfGroupsInput!]
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

input UserUpdateOneWithoutCreatedAnnotatablesInput {
  create: UserCreateWithoutCreatedAnnotatablesInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutCreatedAnnotatablesDataInput
  upsert: UserUpsertWithoutCreatedAnnotatablesInput
}

input UserUpdateOneWithoutCreatedAnnotationsInput {
  create: UserCreateWithoutCreatedAnnotationsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutCreatedAnnotationsDataInput
  upsert: UserUpsertWithoutCreatedAnnotationsInput
}

input UserUpdateOneWithoutCreatedAnnotationTasksInput {
  create: UserCreateWithoutCreatedAnnotationTasksInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutCreatedAnnotationTasksDataInput
  upsert: UserUpsertWithoutCreatedAnnotationTasksInput
}

input UserUpdateOneWithoutCreatedClassificationContextsInput {
  create: UserCreateWithoutCreatedClassificationContextsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutCreatedClassificationContextsDataInput
  upsert: UserUpsertWithoutCreatedClassificationContextsInput
}

input UserUpdateOneWithoutCreatedClassificationLabelsInput {
  create: UserCreateWithoutCreatedClassificationLabelsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutCreatedClassificationLabelsDataInput
  upsert: UserUpsertWithoutCreatedClassificationLabelsInput
}

input UserUpdateOneWithoutCreatedGroupsInput {
  create: UserCreateWithoutCreatedGroupsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutCreatedGroupsDataInput
  upsert: UserUpsertWithoutCreatedGroupsInput
}

input UserUpdateOneWithoutCreatedImagesInput {
  create: UserCreateWithoutCreatedImagesInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutCreatedImagesDataInput
  upsert: UserUpsertWithoutCreatedImagesInput
}

input UserUpdateOneWithoutOwnedAnnotatablesInput {
  create: UserCreateWithoutOwnedAnnotatablesInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutOwnedAnnotatablesDataInput
  upsert: UserUpsertWithoutOwnedAnnotatablesInput
}

input UserUpdateOneWithoutOwnedAnnotationsInput {
  create: UserCreateWithoutOwnedAnnotationsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutOwnedAnnotationsDataInput
  upsert: UserUpsertWithoutOwnedAnnotationsInput
}

input UserUpdateOneWithoutOwnedAnnotationTasksInput {
  create: UserCreateWithoutOwnedAnnotationTasksInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutOwnedAnnotationTasksDataInput
  upsert: UserUpsertWithoutOwnedAnnotationTasksInput
}

input UserUpdateOneWithoutOwnedClassificationContextsInput {
  create: UserCreateWithoutOwnedClassificationContextsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutOwnedClassificationContextsDataInput
  upsert: UserUpsertWithoutOwnedClassificationContextsInput
}

input UserUpdateOneWithoutOwnedClassificationLabelsInput {
  create: UserCreateWithoutOwnedClassificationLabelsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutOwnedClassificationLabelsDataInput
  upsert: UserUpsertWithoutOwnedClassificationLabelsInput
}

input UserUpdateOneWithoutOwnedGroupsInput {
  create: UserCreateWithoutOwnedGroupsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutOwnedGroupsDataInput
  upsert: UserUpsertWithoutOwnedGroupsInput
}

input UserUpdateOneWithoutOwnedImagesInput {
  create: UserCreateWithoutOwnedImagesInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutOwnedImagesDataInput
  upsert: UserUpsertWithoutOwnedImagesInput
}

input UserUpdateWithoutAnnotationsDataInput {
  displayName: String
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
}

input UserWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type ClassificationLabelOrderByInput =   'id_ASC' |
  'id_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'displayName_ASC' |
  'displayName_DESC' |
  'infoHtml_ASC' |
  'infoHtml_DESC' |
  'infoData_ASC' |
  'infoData_DESC' |
  'anyoneCanUse_ASC' |
  'anyoneCanUse_DESC' |
  'anyoneCanEditInfo_ASC' |
  'anyoneCanEditInfo_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'displayName_ASC' |
  'displayName_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type AnnotationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'data_ASC' |
  'data_DESC' |
  'svgBounds_ASC' |
  'svgBounds_DESC' |
  'anyoneCanView_ASC' |
  'anyoneCanView_DESC' |
  'anyoneCanSuggestRevision_ASC' |
  'anyoneCanSuggestRevision_DESC' |
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

export type AnnotationTaskOrderByInput =   'id_ASC' |
  'id_DESC' |
  'displayName_ASC' |
  'displayName_DESC' |
  'requirements_ASC' |
  'requirements_DESC' |
  'anyoneCanView_ASC' |
  'anyoneCanView_DESC' |
  'anyoneCanJoin_ASC' |
  'anyoneCanJoin_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type AnnotatableOrderByInput =   'id_ASC' |
  'id_DESC' |
  'displayName_ASC' |
  'displayName_DESC' |
  'text_ASC' |
  'text_DESC' |
  'anyoneCanView_ASC' |
  'anyoneCanView_DESC' |
  'anyoneCanAnnotate_ASC' |
  'anyoneCanAnnotate_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type GroupOrderByInput =   'id_ASC' |
  'id_DESC' |
  'displayName_ASC' |
  'displayName_DESC' |
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
  'digestSha3_ASC' |
  'digestSha3_DESC' |
  'digestSha2_ASC' |
  'digestSha2_DESC' |
  'digestSha1_ASC' |
  'digestSha1_DESC' |
  'digestMd5_ASC' |
  'digestMd5_DESC' |
  'sizeInBytes_ASC' |
  'sizeInBytes_DESC' |
  'width_ASC' |
  'width_DESC' |
  'height_ASC' |
  'height_DESC' |
  'anyoneCanView_ASC' |
  'anyoneCanView_DESC' |
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

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type ClassificationContextOrderByInput =   'id_ASC' |
  'id_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'displayName_ASC' |
  'displayName_DESC' |
  'infoHtml_ASC' |
  'infoHtml_DESC' |
  'infoData_ASC' |
  'infoData_DESC' |
  'anyoneCanUse_ASC' |
  'anyoneCanUse_DESC' |
  'anyoneCanAddLabels_ASC' |
  'anyoneCanAddLabels_DESC' |
  'anyoneCanEditLabels_ASC' |
  'anyoneCanEditLabels_DESC' |
  'anyoneCanUpdateInfo_ASC' |
  'anyoneCanUpdateInfo_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type CgPointOrderByInput =   'id_ASC' |
  'id_DESC' |
  'x_ASC' |
  'x_DESC' |
  'y_ASC' |
  'y_DESC' |
  'xMin_ASC' |
  'xMin_DESC' |
  'yMin_ASC' |
  'yMin_DESC' |
  'xMax_ASC' |
  'xMax_DESC' |
  'yMax_ASC' |
  'yMax_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export interface GroupUpdateWithoutOwnerDataInput {
  displayName?: String
  memberUsers?: UserUpdateManyWithoutMemberOfGroupsInput
  memberGroups?: GroupUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupUpdateManyWithoutMemberGroupsInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutGroupInput
  ownedImages?: ImageUpdateManyWithoutGroupInput
  ownedAnnotations?: AnnotationUpdateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutGroupInput
  managerUsers?: UserUpdateManyWithoutManagerOfGroupsInput
  managerGroups?: GroupUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupUpdateManyWithoutManagerGroupsInput
  creator?: UserUpdateOneWithoutCreatedGroupsInput
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
  ownedGroups_every?: GroupWhereInput
  ownedGroups_some?: GroupWhereInput
  ownedGroups_none?: GroupWhereInput
  createdGroups_every?: GroupWhereInput
  createdGroups_some?: GroupWhereInput
  createdGroups_none?: GroupWhereInput
  memberOfGroups_every?: GroupWhereInput
  memberOfGroups_some?: GroupWhereInput
  memberOfGroups_none?: GroupWhereInput
  managerOfGroups_every?: GroupWhereInput
  managerOfGroups_some?: GroupWhereInput
  managerOfGroups_none?: GroupWhereInput
  ownedAnnotatables_every?: AnnotatableWhereInput
  ownedAnnotatables_some?: AnnotatableWhereInput
  ownedAnnotatables_none?: AnnotatableWhereInput
  createdAnnotatables_every?: AnnotatableWhereInput
  createdAnnotatables_some?: AnnotatableWhereInput
  createdAnnotatables_none?: AnnotatableWhereInput
  ownedImages_every?: ImageWhereInput
  ownedImages_some?: ImageWhereInput
  ownedImages_none?: ImageWhereInput
  createdImages_every?: ImageWhereInput
  createdImages_some?: ImageWhereInput
  createdImages_none?: ImageWhereInput
  ownedAnnotations_every?: AnnotationWhereInput
  ownedAnnotations_some?: AnnotationWhereInput
  ownedAnnotations_none?: AnnotationWhereInput
  createdAnnotations_every?: AnnotationWhereInput
  createdAnnotations_some?: AnnotationWhereInput
  createdAnnotations_none?: AnnotationWhereInput
  ownedAnnotationTasks_every?: AnnotationTaskWhereInput
  ownedAnnotationTasks_some?: AnnotationTaskWhereInput
  ownedAnnotationTasks_none?: AnnotationTaskWhereInput
  createdAnnotationTasks_every?: AnnotationTaskWhereInput
  createdAnnotationTasks_some?: AnnotationTaskWhereInput
  createdAnnotationTasks_none?: AnnotationTaskWhereInput
  ownedClassificationContexts_every?: ClassificationContextWhereInput
  ownedClassificationContexts_some?: ClassificationContextWhereInput
  ownedClassificationContexts_none?: ClassificationContextWhereInput
  createdClassificationContexts_every?: ClassificationContextWhereInput
  createdClassificationContexts_some?: ClassificationContextWhereInput
  createdClassificationContexts_none?: ClassificationContextWhereInput
  ownedClassificationLabels_every?: ClassificationLabelWhereInput
  ownedClassificationLabels_some?: ClassificationLabelWhereInput
  ownedClassificationLabels_none?: ClassificationLabelWhereInput
  createdClassificationLabels_every?: ClassificationLabelWhereInput
  createdClassificationLabels_some?: ClassificationLabelWhereInput
  createdClassificationLabels_none?: ClassificationLabelWhereInput
}

export interface GroupUpdateManyWithoutMemberOfGroupsInput {
  create?: GroupCreateWithoutMemberOfGroupsInput[] | GroupCreateWithoutMemberOfGroupsInput
  connect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  disconnect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  delete?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  update?: GroupUpdateWithWhereUniqueWithoutMemberOfGroupsInput[] | GroupUpdateWithWhereUniqueWithoutMemberOfGroupsInput
  upsert?: GroupUpsertWithWhereUniqueWithoutMemberOfGroupsInput[] | GroupUpsertWithWhereUniqueWithoutMemberOfGroupsInput
}

export interface ClassificationContextWhereInput {
  AND?: ClassificationContextWhereInput[] | ClassificationContextWhereInput
  OR?: ClassificationContextWhereInput[] | ClassificationContextWhereInput
  NOT?: ClassificationContextWhereInput[] | ClassificationContextWhereInput
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
  slug?: String
  slug_not?: String
  slug_in?: String[] | String
  slug_not_in?: String[] | String
  slug_lt?: String
  slug_lte?: String
  slug_gt?: String
  slug_gte?: String
  slug_contains?: String
  slug_not_contains?: String
  slug_starts_with?: String
  slug_not_starts_with?: String
  slug_ends_with?: String
  slug_not_ends_with?: String
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
  infoHtml?: String
  infoHtml_not?: String
  infoHtml_in?: String[] | String
  infoHtml_not_in?: String[] | String
  infoHtml_lt?: String
  infoHtml_lte?: String
  infoHtml_gt?: String
  infoHtml_gte?: String
  infoHtml_contains?: String
  infoHtml_not_contains?: String
  infoHtml_starts_with?: String
  infoHtml_not_starts_with?: String
  infoHtml_ends_with?: String
  infoHtml_not_ends_with?: String
  anyoneCanUse?: Boolean
  anyoneCanUse_not?: Boolean
  anyoneCanAddLabels?: Boolean
  anyoneCanAddLabels_not?: Boolean
  anyoneCanEditLabels?: Boolean
  anyoneCanEditLabels_not?: Boolean
  anyoneCanUpdateInfo?: Boolean
  anyoneCanUpdateInfo_not?: Boolean
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
  labels_every?: ClassificationLabelWhereInput
  labels_some?: ClassificationLabelWhereInput
  labels_none?: ClassificationLabelWhereInput
  owner?: UserWhereInput
  group?: GroupWhereInput
  creator?: UserWhereInput
}

export interface SystemLoginUpdateOneWithoutUserInput {
  create?: SystemLoginCreateWithoutUserInput
  connect?: SystemLoginWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: SystemLoginUpdateWithoutUserDataInput
  upsert?: SystemLoginUpsertWithoutUserInput
}

export interface UserUpdateWithoutCreatedAnnotatablesDataInput {
  displayName?: String
  systemLogin?: SystemLoginUpdateOneWithoutUserInput
  localLogin?: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations?: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups?: GroupUpdateManyWithoutOwnerInput
  createdGroups?: GroupUpdateManyWithoutCreatorInput
  memberOfGroups?: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups?: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutOwnerInput
  ownedImages?: ImageUpdateManyWithoutOwnerInput
  createdImages?: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations?: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelUpdateManyWithoutCreatorInput
}

export interface SystemLoginUpdateWithoutUserDataInput {
  username?: String
  passwordEnvironmentVariable?: String
}

export interface GroupUpdateWithWhereUniqueWithoutMemberOfGroupsInput {
  where: GroupWhereUniqueInput
  data: GroupUpdateWithoutMemberOfGroupsDataInput
}

export interface SystemLoginUpsertWithoutUserInput {
  update: SystemLoginUpdateWithoutUserDataInput
  create: SystemLoginCreateWithoutUserInput
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

export interface LocalLoginUpdateOneWithoutUserInput {
  create?: LocalLoginCreateWithoutUserInput
  connect?: LocalLoginWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: LocalLoginUpdateWithoutUserDataInput
  upsert?: LocalLoginUpsertWithoutUserInput
}

export interface CgPointSubscriptionWhereInput {
  AND?: CgPointSubscriptionWhereInput[] | CgPointSubscriptionWhereInput
  OR?: CgPointSubscriptionWhereInput[] | CgPointSubscriptionWhereInput
  NOT?: CgPointSubscriptionWhereInput[] | CgPointSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CgPointWhereInput
}

export interface LocalLoginUpdateWithoutUserDataInput {
  username?: String
  hashword?: String
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

export interface LocalLoginUpsertWithoutUserInput {
  update: LocalLoginUpdateWithoutUserDataInput
  create: LocalLoginCreateWithoutUserInput
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

export interface AnnotationTaskUpdateManyWithoutAssigneesInput {
  create?: AnnotationTaskCreateWithoutAssigneesInput[] | AnnotationTaskCreateWithoutAssigneesInput
  connect?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
  disconnect?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
  delete?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
  update?: AnnotationTaskUpdateWithWhereUniqueWithoutAssigneesInput[] | AnnotationTaskUpdateWithWhereUniqueWithoutAssigneesInput
  upsert?: AnnotationTaskUpsertWithWhereUniqueWithoutAssigneesInput[] | AnnotationTaskUpsertWithWhereUniqueWithoutAssigneesInput
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
  digestSha3?: String
  digestSha3_not?: String
  digestSha3_in?: String[] | String
  digestSha3_not_in?: String[] | String
  digestSha3_lt?: String
  digestSha3_lte?: String
  digestSha3_gt?: String
  digestSha3_gte?: String
  digestSha3_contains?: String
  digestSha3_not_contains?: String
  digestSha3_starts_with?: String
  digestSha3_not_starts_with?: String
  digestSha3_ends_with?: String
  digestSha3_not_ends_with?: String
  digestSha2?: String
  digestSha2_not?: String
  digestSha2_in?: String[] | String
  digestSha2_not_in?: String[] | String
  digestSha2_lt?: String
  digestSha2_lte?: String
  digestSha2_gt?: String
  digestSha2_gte?: String
  digestSha2_contains?: String
  digestSha2_not_contains?: String
  digestSha2_starts_with?: String
  digestSha2_not_starts_with?: String
  digestSha2_ends_with?: String
  digestSha2_not_ends_with?: String
  digestSha1?: String
  digestSha1_not?: String
  digestSha1_in?: String[] | String
  digestSha1_not_in?: String[] | String
  digestSha1_lt?: String
  digestSha1_lte?: String
  digestSha1_gt?: String
  digestSha1_gte?: String
  digestSha1_contains?: String
  digestSha1_not_contains?: String
  digestSha1_starts_with?: String
  digestSha1_not_starts_with?: String
  digestSha1_ends_with?: String
  digestSha1_not_ends_with?: String
  digestMd5?: String
  digestMd5_not?: String
  digestMd5_in?: String[] | String
  digestMd5_not_in?: String[] | String
  digestMd5_lt?: String
  digestMd5_lte?: String
  digestMd5_gt?: String
  digestMd5_gte?: String
  digestMd5_contains?: String
  digestMd5_not_contains?: String
  digestMd5_starts_with?: String
  digestMd5_not_starts_with?: String
  digestMd5_ends_with?: String
  digestMd5_not_ends_with?: String
  sizeInBytes?: Int
  sizeInBytes_not?: Int
  sizeInBytes_in?: Int[] | Int
  sizeInBytes_not_in?: Int[] | Int
  sizeInBytes_lt?: Int
  sizeInBytes_lte?: Int
  sizeInBytes_gt?: Int
  sizeInBytes_gte?: Int
  width?: Int
  width_not?: Int
  width_in?: Int[] | Int
  width_not_in?: Int[] | Int
  width_lt?: Int
  width_lte?: Int
  width_gt?: Int
  width_gte?: Int
  height?: Int
  height_not?: Int
  height_in?: Int[] | Int
  height_not_in?: Int[] | Int
  height_lt?: Int
  height_lte?: Int
  height_gt?: Int
  height_gte?: Int
  anyoneCanView?: Boolean
  anyoneCanView_not?: Boolean
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
  owner?: UserWhereInput
  group?: GroupWhereInput
  creator?: UserWhereInput
}

export interface AnnotationTaskUpdateWithWhereUniqueWithoutAssigneesInput {
  where: AnnotationTaskWhereUniqueInput
  data: AnnotationTaskUpdateWithoutAssigneesDataInput
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

export interface AnnotationTaskUpdateWithoutAssigneesDataInput {
  displayName?: String
  requirements?: Json
  anyoneCanView?: Boolean
  anyoneCanJoin?: Boolean
  subjects?: AnnotatableUpdateManyWithoutTasksInput
  classificationContexts?: ClassificationContextUpdateManyInput
  classificationLabels?: ClassificationLabelUpdateManyInput
  owner?: UserUpdateOneWithoutOwnedAnnotationTasksInput
  group?: GroupUpdateOneWithoutOwnedAnnotationTasksInput
  creator?: UserUpdateOneWithoutCreatedAnnotationTasksInput
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

export interface AnnotatableUpdateManyWithoutTasksInput {
  create?: AnnotatableCreateWithoutTasksInput[] | AnnotatableCreateWithoutTasksInput
  connect?: AnnotatableWhereUniqueInput[] | AnnotatableWhereUniqueInput
  disconnect?: AnnotatableWhereUniqueInput[] | AnnotatableWhereUniqueInput
  delete?: AnnotatableWhereUniqueInput[] | AnnotatableWhereUniqueInput
  update?: AnnotatableUpdateWithWhereUniqueWithoutTasksInput[] | AnnotatableUpdateWithWhereUniqueWithoutTasksInput
  upsert?: AnnotatableUpsertWithWhereUniqueWithoutTasksInput[] | AnnotatableUpsertWithWhereUniqueWithoutTasksInput
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
  anyoneCanView?: Boolean
  anyoneCanView_not?: Boolean
  anyoneCanJoin?: Boolean
  anyoneCanJoin_not?: Boolean
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
  assignees_every?: UserWhereInput
  assignees_some?: UserWhereInput
  assignees_none?: UserWhereInput
  subjects_every?: AnnotatableWhereInput
  subjects_some?: AnnotatableWhereInput
  subjects_none?: AnnotatableWhereInput
  classificationContexts_every?: ClassificationContextWhereInput
  classificationContexts_some?: ClassificationContextWhereInput
  classificationContexts_none?: ClassificationContextWhereInput
  classificationLabels_every?: ClassificationLabelWhereInput
  classificationLabels_some?: ClassificationLabelWhereInput
  classificationLabels_none?: ClassificationLabelWhereInput
  owner?: UserWhereInput
  group?: GroupWhereInput
  creator?: UserWhereInput
}

export interface AnnotatableUpdateWithWhereUniqueWithoutTasksInput {
  where: AnnotatableWhereUniqueInput
  data: AnnotatableUpdateWithoutTasksDataInput
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

export interface AnnotatableUpdateWithoutTasksDataInput {
  displayName?: String
  text?: String
  anyoneCanView?: Boolean
  anyoneCanAnnotate?: Boolean
  image?: ImageUpdateOneInput
  owner?: UserUpdateOneWithoutOwnedAnnotatablesInput
  group?: GroupUpdateOneWithoutOwnedAnnotatablesInput
  creator?: UserUpdateOneWithoutCreatedAnnotatablesInput
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

export interface ImageUpdateOneInput {
  create?: ImageCreateInput
  connect?: ImageWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ImageUpdateDataInput
  upsert?: ImageUpsertNestedInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
}

export interface ImageUpdateDataInput {
  uri?: String
  thumbnailUri?: String
  caption?: String
  digestSha3?: String
  digestSha2?: String
  digestSha1?: String
  digestMd5?: String
  sizeInBytes?: Int
  width?: Int
  height?: Int
  anyoneCanView?: Boolean
  owner?: UserUpdateOneWithoutOwnedImagesInput
  group?: GroupUpdateOneWithoutOwnedImagesInput
  creator?: UserUpdateOneWithoutCreatedImagesInput
}

export interface LocalLoginWhereUniqueInput {
  id?: ID_Input
  username?: String
}

export interface UserUpdateOneWithoutOwnedImagesInput {
  create?: UserCreateWithoutOwnedImagesInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutOwnedImagesDataInput
  upsert?: UserUpsertWithoutOwnedImagesInput
}

export interface AnnotationWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateWithoutOwnedImagesDataInput {
  displayName?: String
  systemLogin?: SystemLoginUpdateOneWithoutUserInput
  localLogin?: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations?: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups?: GroupUpdateManyWithoutOwnerInput
  createdGroups?: GroupUpdateManyWithoutCreatorInput
  memberOfGroups?: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups?: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableUpdateManyWithoutCreatorInput
  createdImages?: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations?: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelUpdateManyWithoutCreatorInput
}

export interface AnnotatableWhereUniqueInput {
  id?: ID_Input
}

export interface AnnotationUpdateManyWithoutAnnotatorInput {
  create?: AnnotationCreateWithoutAnnotatorInput[] | AnnotationCreateWithoutAnnotatorInput
  connect?: AnnotationWhereUniqueInput[] | AnnotationWhereUniqueInput
  disconnect?: AnnotationWhereUniqueInput[] | AnnotationWhereUniqueInput
  delete?: AnnotationWhereUniqueInput[] | AnnotationWhereUniqueInput
  update?: AnnotationUpdateWithWhereUniqueWithoutAnnotatorInput[] | AnnotationUpdateWithWhereUniqueWithoutAnnotatorInput
  upsert?: AnnotationUpsertWithWhereUniqueWithoutAnnotatorInput[] | AnnotationUpsertWithWhereUniqueWithoutAnnotatorInput
}

export interface ImageWhereUniqueInput {
  id?: ID_Input
  uri?: String
}

export interface AnnotationUpdateWithWhereUniqueWithoutAnnotatorInput {
  where: AnnotationWhereUniqueInput
  data: AnnotationUpdateWithoutAnnotatorDataInput
}

export interface ClassificationContextWhereUniqueInput {
  id?: ID_Input
}

export interface AnnotationUpdateWithoutAnnotatorDataInput {
  data?: Json
  svgBounds?: String
  anyoneCanView?: Boolean
  anyoneCanSuggestRevision?: Boolean
  subject?: AnnotatableUpdateOneRequiredInput
  task?: AnnotationTaskUpdateOneInput
  classificationLabels?: ClassificationLabelUpdateManyInput
  convexHull?: CgPointUpdateManyInput
  owner?: UserUpdateOneWithoutOwnedAnnotationsInput
  group?: GroupUpdateOneWithoutOwnedAnnotationsInput
  creator?: UserUpdateOneWithoutCreatedAnnotationsInput
}

export interface AnnotationTaskUpdateInput {
  displayName?: String
  requirements?: Json
  anyoneCanView?: Boolean
  anyoneCanJoin?: Boolean
  assignees?: UserUpdateManyWithoutAssignedAnnotationTasksInput
  subjects?: AnnotatableUpdateManyWithoutTasksInput
  classificationContexts?: ClassificationContextUpdateManyInput
  classificationLabels?: ClassificationLabelUpdateManyInput
  owner?: UserUpdateOneWithoutOwnedAnnotationTasksInput
  group?: GroupUpdateOneWithoutOwnedAnnotationTasksInput
  creator?: UserUpdateOneWithoutCreatedAnnotationTasksInput
}

export interface AnnotatableUpdateOneRequiredInput {
  create?: AnnotatableCreateInput
  connect?: AnnotatableWhereUniqueInput
  update?: AnnotatableUpdateDataInput
  upsert?: AnnotatableUpsertNestedInput
}

export interface GroupUpdateInput {
  displayName?: String
  memberUsers?: UserUpdateManyWithoutMemberOfGroupsInput
  memberGroups?: GroupUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupUpdateManyWithoutMemberGroupsInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutGroupInput
  ownedImages?: ImageUpdateManyWithoutGroupInput
  ownedAnnotations?: AnnotationUpdateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutGroupInput
  owner?: UserUpdateOneWithoutOwnedGroupsInput
  managerUsers?: UserUpdateManyWithoutManagerOfGroupsInput
  managerGroups?: GroupUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupUpdateManyWithoutManagerGroupsInput
  creator?: UserUpdateOneWithoutCreatedGroupsInput
}

export interface AnnotatableUpdateDataInput {
  displayName?: String
  text?: String
  anyoneCanView?: Boolean
  anyoneCanAnnotate?: Boolean
  image?: ImageUpdateOneInput
  tasks?: AnnotationTaskUpdateManyWithoutSubjectsInput
  owner?: UserUpdateOneWithoutOwnedAnnotatablesInput
  group?: GroupUpdateOneWithoutOwnedAnnotatablesInput
  creator?: UserUpdateOneWithoutCreatedAnnotatablesInput
}

export interface UserUpdateWithoutLocalLoginDataInput {
  displayName?: String
  systemLogin?: SystemLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations?: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups?: GroupUpdateManyWithoutOwnerInput
  createdGroups?: GroupUpdateManyWithoutCreatorInput
  memberOfGroups?: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups?: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages?: ImageUpdateManyWithoutOwnerInput
  createdImages?: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations?: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelUpdateManyWithoutCreatorInput
}

export interface AnnotationTaskUpdateManyWithoutSubjectsInput {
  create?: AnnotationTaskCreateWithoutSubjectsInput[] | AnnotationTaskCreateWithoutSubjectsInput
  connect?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
  disconnect?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
  delete?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
  update?: AnnotationTaskUpdateWithWhereUniqueWithoutSubjectsInput[] | AnnotationTaskUpdateWithWhereUniqueWithoutSubjectsInput
  upsert?: AnnotationTaskUpsertWithWhereUniqueWithoutSubjectsInput[] | AnnotationTaskUpsertWithWhereUniqueWithoutSubjectsInput
}

export interface LocalLoginUpdateInput {
  username?: String
  hashword?: String
  user?: UserUpdateOneRequiredWithoutLocalLoginInput
}

export interface AnnotationTaskUpdateWithWhereUniqueWithoutSubjectsInput {
  where: AnnotationTaskWhereUniqueInput
  data: AnnotationTaskUpdateWithoutSubjectsDataInput
}

export interface UserUpdateWithoutSystemLoginDataInput {
  displayName?: String
  localLogin?: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations?: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups?: GroupUpdateManyWithoutOwnerInput
  createdGroups?: GroupUpdateManyWithoutCreatorInput
  memberOfGroups?: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups?: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages?: ImageUpdateManyWithoutOwnerInput
  createdImages?: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations?: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelUpdateManyWithoutCreatorInput
}

export interface AnnotationTaskUpdateWithoutSubjectsDataInput {
  displayName?: String
  requirements?: Json
  anyoneCanView?: Boolean
  anyoneCanJoin?: Boolean
  assignees?: UserUpdateManyWithoutAssignedAnnotationTasksInput
  classificationContexts?: ClassificationContextUpdateManyInput
  classificationLabels?: ClassificationLabelUpdateManyInput
  owner?: UserUpdateOneWithoutOwnedAnnotationTasksInput
  group?: GroupUpdateOneWithoutOwnedAnnotationTasksInput
  creator?: UserUpdateOneWithoutCreatedAnnotationTasksInput
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

export interface AnnotatableUpsertWithWhereUniqueWithoutTasksInput {
  where: AnnotatableWhereUniqueInput
  update: AnnotatableUpdateWithoutTasksDataInput
  create: AnnotatableCreateWithoutTasksInput
}

export interface UserUpdateWithWhereUniqueWithoutAssignedAnnotationTasksInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutAssignedAnnotationTasksDataInput
}

export interface UserUpsertWithoutOwnedImagesInput {
  update: UserUpdateWithoutOwnedImagesDataInput
  create: UserCreateWithoutOwnedImagesInput
}

export interface UserUpdateWithoutAssignedAnnotationTasksDataInput {
  displayName?: String
  systemLogin?: SystemLoginUpdateOneWithoutUserInput
  localLogin?: LocalLoginUpdateOneWithoutUserInput
  annotations?: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups?: GroupUpdateManyWithoutOwnerInput
  createdGroups?: GroupUpdateManyWithoutCreatorInput
  memberOfGroups?: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups?: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages?: ImageUpdateManyWithoutOwnerInput
  createdImages?: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations?: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelUpdateManyWithoutCreatorInput
}

export interface AnnotatableUpsertNestedInput {
  update: AnnotatableUpdateDataInput
  create: AnnotatableCreateInput
}

export interface GroupUpdateManyWithoutOwnerInput {
  create?: GroupCreateWithoutOwnerInput[] | GroupCreateWithoutOwnerInput
  connect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  disconnect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  delete?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  update?: GroupUpdateWithWhereUniqueWithoutOwnerInput[] | GroupUpdateWithWhereUniqueWithoutOwnerInput
  upsert?: GroupUpsertWithWhereUniqueWithoutOwnerInput[] | GroupUpsertWithWhereUniqueWithoutOwnerInput
}

export interface UserUpsertWithWhereUniqueWithoutAssignedAnnotationTasksInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutAssignedAnnotationTasksDataInput
  create: UserCreateWithoutAssignedAnnotationTasksInput
}

export interface GroupUpdateWithWhereUniqueWithoutOwnerInput {
  where: GroupWhereUniqueInput
  data: GroupUpdateWithoutOwnerDataInput
}

export interface UserUpsertWithWhereUniqueWithoutMemberOfGroupsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutMemberOfGroupsDataInput
  create: UserCreateWithoutMemberOfGroupsInput
}

export interface UserUpsertWithoutCreatedAnnotatablesInput {
  update: UserUpdateWithoutCreatedAnnotatablesDataInput
  create: UserCreateWithoutCreatedAnnotatablesInput
}

export interface GroupUpsertWithWhereUniqueWithoutMemberOfGroupsInput {
  where: GroupWhereUniqueInput
  update: GroupUpdateWithoutMemberOfGroupsDataInput
  create: GroupCreateWithoutMemberOfGroupsInput
}

export interface UserUpdateManyWithoutMemberOfGroupsInput {
  create?: UserCreateWithoutMemberOfGroupsInput[] | UserCreateWithoutMemberOfGroupsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutMemberOfGroupsInput[] | UserUpdateWithWhereUniqueWithoutMemberOfGroupsInput
  upsert?: UserUpsertWithWhereUniqueWithoutMemberOfGroupsInput[] | UserUpsertWithWhereUniqueWithoutMemberOfGroupsInput
}

export interface UserUpsertWithoutOwnedAnnotatablesInput {
  update: UserUpdateWithoutOwnedAnnotatablesDataInput
  create: UserCreateWithoutOwnedAnnotatablesInput
}

export interface UserUpdateWithWhereUniqueWithoutMemberOfGroupsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutMemberOfGroupsDataInput
}

export interface GroupUpsertWithWhereUniqueWithoutMemberGroupsInput {
  where: GroupWhereUniqueInput
  update: GroupUpdateWithoutMemberGroupsDataInput
  create: GroupCreateWithoutMemberGroupsInput
}

export interface UserUpdateWithoutMemberOfGroupsDataInput {
  displayName?: String
  systemLogin?: SystemLoginUpdateOneWithoutUserInput
  localLogin?: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations?: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups?: GroupUpdateManyWithoutOwnerInput
  createdGroups?: GroupUpdateManyWithoutCreatorInput
  managerOfGroups?: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages?: ImageUpdateManyWithoutOwnerInput
  createdImages?: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations?: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelUpdateManyWithoutCreatorInput
}

export interface UserUpsertWithoutCreatedImagesInput {
  update: UserUpdateWithoutCreatedImagesDataInput
  create: UserCreateWithoutCreatedImagesInput
}

export interface GroupUpdateManyWithoutCreatorInput {
  create?: GroupCreateWithoutCreatorInput[] | GroupCreateWithoutCreatorInput
  connect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  disconnect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  delete?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  update?: GroupUpdateWithWhereUniqueWithoutCreatorInput[] | GroupUpdateWithWhereUniqueWithoutCreatorInput
  upsert?: GroupUpsertWithWhereUniqueWithoutCreatorInput[] | GroupUpsertWithWhereUniqueWithoutCreatorInput
}

export interface AnnotationUpsertWithWhereUniqueWithoutGroupInput {
  where: AnnotationWhereUniqueInput
  update: AnnotationUpdateWithoutGroupDataInput
  create: AnnotationCreateWithoutGroupInput
}

export interface GroupUpdateWithWhereUniqueWithoutCreatorInput {
  where: GroupWhereUniqueInput
  data: GroupUpdateWithoutCreatorDataInput
}

export interface AnnotatableUpsertWithWhereUniqueWithoutOwnerInput {
  where: AnnotatableWhereUniqueInput
  update: AnnotatableUpdateWithoutOwnerDataInput
  create: AnnotatableCreateWithoutOwnerInput
}

export interface GroupUpdateWithoutCreatorDataInput {
  displayName?: String
  memberUsers?: UserUpdateManyWithoutMemberOfGroupsInput
  memberGroups?: GroupUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupUpdateManyWithoutMemberGroupsInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutGroupInput
  ownedImages?: ImageUpdateManyWithoutGroupInput
  ownedAnnotations?: AnnotationUpdateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutGroupInput
  owner?: UserUpdateOneWithoutOwnedGroupsInput
  managerUsers?: UserUpdateManyWithoutManagerOfGroupsInput
  managerGroups?: GroupUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupUpdateManyWithoutManagerGroupsInput
}

export interface SystemLoginCreateOneWithoutUserInput {
  create?: SystemLoginCreateWithoutUserInput
  connect?: SystemLoginWhereUniqueInput
}

export interface CgPointWhereInput {
  AND?: CgPointWhereInput[] | CgPointWhereInput
  OR?: CgPointWhereInput[] | CgPointWhereInput
  NOT?: CgPointWhereInput[] | CgPointWhereInput
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
  x?: Float
  x_not?: Float
  x_in?: Float[] | Float
  x_not_in?: Float[] | Float
  x_lt?: Float
  x_lte?: Float
  x_gt?: Float
  x_gte?: Float
  y?: Float
  y_not?: Float
  y_in?: Float[] | Float
  y_not_in?: Float[] | Float
  y_lt?: Float
  y_lte?: Float
  y_gt?: Float
  y_gte?: Float
  xMin?: Float
  xMin_not?: Float
  xMin_in?: Float[] | Float
  xMin_not_in?: Float[] | Float
  xMin_lt?: Float
  xMin_lte?: Float
  xMin_gt?: Float
  xMin_gte?: Float
  yMin?: Float
  yMin_not?: Float
  yMin_in?: Float[] | Float
  yMin_not_in?: Float[] | Float
  yMin_lt?: Float
  yMin_lte?: Float
  yMin_gt?: Float
  yMin_gte?: Float
  xMax?: Float
  xMax_not?: Float
  xMax_in?: Float[] | Float
  xMax_not_in?: Float[] | Float
  xMax_lt?: Float
  xMax_lte?: Float
  xMax_gt?: Float
  xMax_gte?: Float
  yMax?: Float
  yMax_not?: Float
  yMax_in?: Float[] | Float
  yMax_not_in?: Float[] | Float
  yMax_lt?: Float
  yMax_lte?: Float
  yMax_gt?: Float
  yMax_gte?: Float
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

export interface LocalLoginCreateOneWithoutUserInput {
  create?: LocalLoginCreateWithoutUserInput
  connect?: LocalLoginWhereUniqueInput
}

export interface ClassificationLabelWhereInput {
  AND?: ClassificationLabelWhereInput[] | ClassificationLabelWhereInput
  OR?: ClassificationLabelWhereInput[] | ClassificationLabelWhereInput
  NOT?: ClassificationLabelWhereInput[] | ClassificationLabelWhereInput
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
  slug?: String
  slug_not?: String
  slug_in?: String[] | String
  slug_not_in?: String[] | String
  slug_lt?: String
  slug_lte?: String
  slug_gt?: String
  slug_gte?: String
  slug_contains?: String
  slug_not_contains?: String
  slug_starts_with?: String
  slug_not_starts_with?: String
  slug_ends_with?: String
  slug_not_ends_with?: String
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
  infoHtml?: String
  infoHtml_not?: String
  infoHtml_in?: String[] | String
  infoHtml_not_in?: String[] | String
  infoHtml_lt?: String
  infoHtml_lte?: String
  infoHtml_gt?: String
  infoHtml_gte?: String
  infoHtml_contains?: String
  infoHtml_not_contains?: String
  infoHtml_starts_with?: String
  infoHtml_not_starts_with?: String
  infoHtml_ends_with?: String
  infoHtml_not_ends_with?: String
  anyoneCanUse?: Boolean
  anyoneCanUse_not?: Boolean
  anyoneCanEditInfo?: Boolean
  anyoneCanEditInfo_not?: Boolean
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
  contexts_every?: ClassificationContextWhereInput
  contexts_some?: ClassificationContextWhereInput
  contexts_none?: ClassificationContextWhereInput
  owner?: UserWhereInput
  group?: GroupWhereInput
  creator?: UserWhereInput
}

export interface AnnotationTaskCreateManyWithoutAssigneesInput {
  create?: AnnotationTaskCreateWithoutAssigneesInput[] | AnnotationTaskCreateWithoutAssigneesInput
  connect?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
}

export interface GroupUpdateWithoutMemberOfGroupsDataInput {
  displayName?: String
  memberUsers?: UserUpdateManyWithoutMemberOfGroupsInput
  memberGroups?: GroupUpdateManyWithoutMemberOfGroupsInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutGroupInput
  ownedImages?: ImageUpdateManyWithoutGroupInput
  ownedAnnotations?: AnnotationUpdateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutGroupInput
  owner?: UserUpdateOneWithoutOwnedGroupsInput
  managerUsers?: UserUpdateManyWithoutManagerOfGroupsInput
  managerGroups?: GroupUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupUpdateManyWithoutManagerGroupsInput
  creator?: UserUpdateOneWithoutCreatedGroupsInput
}

export interface AnnotatableCreateManyWithoutTasksInput {
  create?: AnnotatableCreateWithoutTasksInput[] | AnnotatableCreateWithoutTasksInput
  connect?: AnnotatableWhereUniqueInput[] | AnnotatableWhereUniqueInput
}

export interface AnnotatableUpdateManyWithoutGroupInput {
  create?: AnnotatableCreateWithoutGroupInput[] | AnnotatableCreateWithoutGroupInput
  connect?: AnnotatableWhereUniqueInput[] | AnnotatableWhereUniqueInput
  disconnect?: AnnotatableWhereUniqueInput[] | AnnotatableWhereUniqueInput
  delete?: AnnotatableWhereUniqueInput[] | AnnotatableWhereUniqueInput
  update?: AnnotatableUpdateWithWhereUniqueWithoutGroupInput[] | AnnotatableUpdateWithWhereUniqueWithoutGroupInput
  upsert?: AnnotatableUpsertWithWhereUniqueWithoutGroupInput[] | AnnotatableUpsertWithWhereUniqueWithoutGroupInput
}

export interface ImageCreateOneInput {
  create?: ImageCreateInput
  connect?: ImageWhereUniqueInput
}

export interface AnnotatableUpdateWithWhereUniqueWithoutGroupInput {
  where: AnnotatableWhereUniqueInput
  data: AnnotatableUpdateWithoutGroupDataInput
}

export interface UserCreateOneWithoutOwnedImagesInput {
  create?: UserCreateWithoutOwnedImagesInput
  connect?: UserWhereUniqueInput
}

export interface AnnotatableUpdateWithoutGroupDataInput {
  displayName?: String
  text?: String
  anyoneCanView?: Boolean
  anyoneCanAnnotate?: Boolean
  image?: ImageUpdateOneInput
  tasks?: AnnotationTaskUpdateManyWithoutSubjectsInput
  owner?: UserUpdateOneWithoutOwnedAnnotatablesInput
  creator?: UserUpdateOneWithoutCreatedAnnotatablesInput
}

export interface AnnotationCreateManyWithoutAnnotatorInput {
  create?: AnnotationCreateWithoutAnnotatorInput[] | AnnotationCreateWithoutAnnotatorInput
  connect?: AnnotationWhereUniqueInput[] | AnnotationWhereUniqueInput
}

export interface UserUpdateOneWithoutOwnedAnnotatablesInput {
  create?: UserCreateWithoutOwnedAnnotatablesInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutOwnedAnnotatablesDataInput
  upsert?: UserUpsertWithoutOwnedAnnotatablesInput
}

export interface AnnotatableCreateOneInput {
  create?: AnnotatableCreateInput
  connect?: AnnotatableWhereUniqueInput
}

export interface UserUpdateWithoutOwnedAnnotatablesDataInput {
  displayName?: String
  systemLogin?: SystemLoginUpdateOneWithoutUserInput
  localLogin?: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations?: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups?: GroupUpdateManyWithoutOwnerInput
  createdGroups?: GroupUpdateManyWithoutCreatorInput
  memberOfGroups?: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups?: GroupUpdateManyWithoutManagerUsersInput
  createdAnnotatables?: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages?: ImageUpdateManyWithoutOwnerInput
  createdImages?: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations?: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelUpdateManyWithoutCreatorInput
}

export interface AnnotationTaskCreateManyWithoutSubjectsInput {
  create?: AnnotationTaskCreateWithoutSubjectsInput[] | AnnotationTaskCreateWithoutSubjectsInput
  connect?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
}

export interface GroupUpdateManyWithoutMemberUsersInput {
  create?: GroupCreateWithoutMemberUsersInput[] | GroupCreateWithoutMemberUsersInput
  connect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  disconnect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  delete?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  update?: GroupUpdateWithWhereUniqueWithoutMemberUsersInput[] | GroupUpdateWithWhereUniqueWithoutMemberUsersInput
  upsert?: GroupUpsertWithWhereUniqueWithoutMemberUsersInput[] | GroupUpsertWithWhereUniqueWithoutMemberUsersInput
}

export interface UserCreateManyWithoutAssignedAnnotationTasksInput {
  create?: UserCreateWithoutAssignedAnnotationTasksInput[] | UserCreateWithoutAssignedAnnotationTasksInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface GroupUpdateWithWhereUniqueWithoutMemberUsersInput {
  where: GroupWhereUniqueInput
  data: GroupUpdateWithoutMemberUsersDataInput
}

export interface GroupCreateManyWithoutOwnerInput {
  create?: GroupCreateWithoutOwnerInput[] | GroupCreateWithoutOwnerInput
  connect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
}

export interface GroupUpdateWithoutMemberUsersDataInput {
  displayName?: String
  memberGroups?: GroupUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupUpdateManyWithoutMemberGroupsInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutGroupInput
  ownedImages?: ImageUpdateManyWithoutGroupInput
  ownedAnnotations?: AnnotationUpdateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutGroupInput
  owner?: UserUpdateOneWithoutOwnedGroupsInput
  managerUsers?: UserUpdateManyWithoutManagerOfGroupsInput
  managerGroups?: GroupUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupUpdateManyWithoutManagerGroupsInput
  creator?: UserUpdateOneWithoutCreatedGroupsInput
}

export interface UserCreateManyWithoutMemberOfGroupsInput {
  create?: UserCreateWithoutMemberOfGroupsInput[] | UserCreateWithoutMemberOfGroupsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface GroupUpdateManyWithoutMemberGroupsInput {
  create?: GroupCreateWithoutMemberGroupsInput[] | GroupCreateWithoutMemberGroupsInput
  connect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  disconnect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  delete?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  update?: GroupUpdateWithWhereUniqueWithoutMemberGroupsInput[] | GroupUpdateWithWhereUniqueWithoutMemberGroupsInput
  upsert?: GroupUpsertWithWhereUniqueWithoutMemberGroupsInput[] | GroupUpsertWithWhereUniqueWithoutMemberGroupsInput
}

export interface GroupCreateManyWithoutCreatorInput {
  create?: GroupCreateWithoutCreatorInput[] | GroupCreateWithoutCreatorInput
  connect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
}

export interface GroupUpdateWithWhereUniqueWithoutMemberGroupsInput {
  where: GroupWhereUniqueInput
  data: GroupUpdateWithoutMemberGroupsDataInput
}

export interface GroupCreateManyWithoutMemberOfGroupsInput {
  create?: GroupCreateWithoutMemberOfGroupsInput[] | GroupCreateWithoutMemberOfGroupsInput
  connect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
}

export interface GroupUpdateWithoutMemberGroupsDataInput {
  displayName?: String
  memberUsers?: UserUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupUpdateManyWithoutMemberGroupsInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutGroupInput
  ownedImages?: ImageUpdateManyWithoutGroupInput
  ownedAnnotations?: AnnotationUpdateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutGroupInput
  owner?: UserUpdateOneWithoutOwnedGroupsInput
  managerUsers?: UserUpdateManyWithoutManagerOfGroupsInput
  managerGroups?: GroupUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupUpdateManyWithoutManagerGroupsInput
  creator?: UserUpdateOneWithoutCreatedGroupsInput
}

export interface AnnotatableCreateManyWithoutGroupInput {
  create?: AnnotatableCreateWithoutGroupInput[] | AnnotatableCreateWithoutGroupInput
  connect?: AnnotatableWhereUniqueInput[] | AnnotatableWhereUniqueInput
}

export interface ImageUpdateManyWithoutGroupInput {
  create?: ImageCreateWithoutGroupInput[] | ImageCreateWithoutGroupInput
  connect?: ImageWhereUniqueInput[] | ImageWhereUniqueInput
  disconnect?: ImageWhereUniqueInput[] | ImageWhereUniqueInput
  delete?: ImageWhereUniqueInput[] | ImageWhereUniqueInput
  update?: ImageUpdateWithWhereUniqueWithoutGroupInput[] | ImageUpdateWithWhereUniqueWithoutGroupInput
  upsert?: ImageUpsertWithWhereUniqueWithoutGroupInput[] | ImageUpsertWithWhereUniqueWithoutGroupInput
}

export interface UserCreateOneWithoutOwnedAnnotatablesInput {
  create?: UserCreateWithoutOwnedAnnotatablesInput
  connect?: UserWhereUniqueInput
}

export interface ImageUpdateWithWhereUniqueWithoutGroupInput {
  where: ImageWhereUniqueInput
  data: ImageUpdateWithoutGroupDataInput
}

export interface GroupCreateManyWithoutMemberUsersInput {
  create?: GroupCreateWithoutMemberUsersInput[] | GroupCreateWithoutMemberUsersInput
  connect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
}

export interface ImageUpdateWithoutGroupDataInput {
  uri?: String
  thumbnailUri?: String
  caption?: String
  digestSha3?: String
  digestSha2?: String
  digestSha1?: String
  digestMd5?: String
  sizeInBytes?: Int
  width?: Int
  height?: Int
  anyoneCanView?: Boolean
  owner?: UserUpdateOneWithoutOwnedImagesInput
  creator?: UserUpdateOneWithoutCreatedImagesInput
}

export interface GroupCreateManyWithoutMemberGroupsInput {
  create?: GroupCreateWithoutMemberGroupsInput[] | GroupCreateWithoutMemberGroupsInput
  connect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
}

export interface UserUpdateOneWithoutCreatedImagesInput {
  create?: UserCreateWithoutCreatedImagesInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutCreatedImagesDataInput
  upsert?: UserUpsertWithoutCreatedImagesInput
}

export interface ImageCreateManyWithoutGroupInput {
  create?: ImageCreateWithoutGroupInput[] | ImageCreateWithoutGroupInput
  connect?: ImageWhereUniqueInput[] | ImageWhereUniqueInput
}

export interface UserUpdateWithoutCreatedImagesDataInput {
  displayName?: String
  systemLogin?: SystemLoginUpdateOneWithoutUserInput
  localLogin?: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations?: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups?: GroupUpdateManyWithoutOwnerInput
  createdGroups?: GroupUpdateManyWithoutCreatorInput
  memberOfGroups?: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups?: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages?: ImageUpdateManyWithoutOwnerInput
  ownedAnnotations?: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations?: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelUpdateManyWithoutCreatorInput
}

export interface UserCreateOneWithoutCreatedImagesInput {
  create?: UserCreateWithoutCreatedImagesInput
  connect?: UserWhereUniqueInput
}

export interface GroupUpdateManyWithoutManagerUsersInput {
  create?: GroupCreateWithoutManagerUsersInput[] | GroupCreateWithoutManagerUsersInput
  connect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  disconnect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  delete?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  update?: GroupUpdateWithWhereUniqueWithoutManagerUsersInput[] | GroupUpdateWithWhereUniqueWithoutManagerUsersInput
  upsert?: GroupUpsertWithWhereUniqueWithoutManagerUsersInput[] | GroupUpsertWithWhereUniqueWithoutManagerUsersInput
}

export interface GroupCreateManyWithoutManagerUsersInput {
  create?: GroupCreateWithoutManagerUsersInput[] | GroupCreateWithoutManagerUsersInput
  connect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
}

export interface GroupUpdateWithWhereUniqueWithoutManagerUsersInput {
  where: GroupWhereUniqueInput
  data: GroupUpdateWithoutManagerUsersDataInput
}

export interface AnnotationCreateManyWithoutGroupInput {
  create?: AnnotationCreateWithoutGroupInput[] | AnnotationCreateWithoutGroupInput
  connect?: AnnotationWhereUniqueInput[] | AnnotationWhereUniqueInput
}

export interface GroupUpdateWithoutManagerUsersDataInput {
  displayName?: String
  memberUsers?: UserUpdateManyWithoutMemberOfGroupsInput
  memberGroups?: GroupUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupUpdateManyWithoutMemberGroupsInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutGroupInput
  ownedImages?: ImageUpdateManyWithoutGroupInput
  ownedAnnotations?: AnnotationUpdateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutGroupInput
  owner?: UserUpdateOneWithoutOwnedGroupsInput
  managerGroups?: GroupUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupUpdateManyWithoutManagerGroupsInput
  creator?: UserUpdateOneWithoutCreatedGroupsInput
}

export interface UserCreateOneWithoutAnnotationsInput {
  create?: UserCreateWithoutAnnotationsInput
  connect?: UserWhereUniqueInput
}

export interface AnnotationUpdateManyWithoutGroupInput {
  create?: AnnotationCreateWithoutGroupInput[] | AnnotationCreateWithoutGroupInput
  connect?: AnnotationWhereUniqueInput[] | AnnotationWhereUniqueInput
  disconnect?: AnnotationWhereUniqueInput[] | AnnotationWhereUniqueInput
  delete?: AnnotationWhereUniqueInput[] | AnnotationWhereUniqueInput
  update?: AnnotationUpdateWithWhereUniqueWithoutGroupInput[] | AnnotationUpdateWithWhereUniqueWithoutGroupInput
  upsert?: AnnotationUpsertWithWhereUniqueWithoutGroupInput[] | AnnotationUpsertWithWhereUniqueWithoutGroupInput
}

export interface AnnotatableCreateManyWithoutOwnerInput {
  create?: AnnotatableCreateWithoutOwnerInput[] | AnnotatableCreateWithoutOwnerInput
  connect?: AnnotatableWhereUniqueInput[] | AnnotatableWhereUniqueInput
}

export interface AnnotationUpdateWithWhereUniqueWithoutGroupInput {
  where: AnnotationWhereUniqueInput
  data: AnnotationUpdateWithoutGroupDataInput
}

export interface GroupCreateOneWithoutOwnedAnnotatablesInput {
  create?: GroupCreateWithoutOwnedAnnotatablesInput
  connect?: GroupWhereUniqueInput
}

export interface AnnotationUpdateWithoutGroupDataInput {
  data?: Json
  svgBounds?: String
  anyoneCanView?: Boolean
  anyoneCanSuggestRevision?: Boolean
  annotator?: UserUpdateOneRequiredWithoutAnnotationsInput
  subject?: AnnotatableUpdateOneRequiredInput
  task?: AnnotationTaskUpdateOneInput
  classificationLabels?: ClassificationLabelUpdateManyInput
  convexHull?: CgPointUpdateManyInput
  owner?: UserUpdateOneWithoutOwnedAnnotationsInput
  creator?: UserUpdateOneWithoutCreatedAnnotationsInput
}

export interface AnnotationTaskCreateManyWithoutGroupInput {
  create?: AnnotationTaskCreateWithoutGroupInput[] | AnnotationTaskCreateWithoutGroupInput
  connect?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
}

export interface UserUpdateOneRequiredWithoutAnnotationsInput {
  create?: UserCreateWithoutAnnotationsInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutAnnotationsDataInput
  upsert?: UserUpsertWithoutAnnotationsInput
}

export interface ClassificationContextCreateManyInput {
  create?: ClassificationContextCreateInput[] | ClassificationContextCreateInput
  connect?: ClassificationContextWhereUniqueInput[] | ClassificationContextWhereUniqueInput
}

export interface UserUpdateWithoutAnnotationsDataInput {
  displayName?: String
  systemLogin?: SystemLoginUpdateOneWithoutUserInput
  localLogin?: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskUpdateManyWithoutAssigneesInput
  ownedGroups?: GroupUpdateManyWithoutOwnerInput
  createdGroups?: GroupUpdateManyWithoutCreatorInput
  memberOfGroups?: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups?: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages?: ImageUpdateManyWithoutOwnerInput
  createdImages?: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations?: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelUpdateManyWithoutCreatorInput
}

export interface ClassificationLabelCreateManyWithoutContextsInput {
  create?: ClassificationLabelCreateWithoutContextsInput[] | ClassificationLabelCreateWithoutContextsInput
  connect?: ClassificationLabelWhereUniqueInput[] | ClassificationLabelWhereUniqueInput
}

export interface AnnotatableUpdateManyWithoutOwnerInput {
  create?: AnnotatableCreateWithoutOwnerInput[] | AnnotatableCreateWithoutOwnerInput
  connect?: AnnotatableWhereUniqueInput[] | AnnotatableWhereUniqueInput
  disconnect?: AnnotatableWhereUniqueInput[] | AnnotatableWhereUniqueInput
  delete?: AnnotatableWhereUniqueInput[] | AnnotatableWhereUniqueInput
  update?: AnnotatableUpdateWithWhereUniqueWithoutOwnerInput[] | AnnotatableUpdateWithWhereUniqueWithoutOwnerInput
  upsert?: AnnotatableUpsertWithWhereUniqueWithoutOwnerInput[] | AnnotatableUpsertWithWhereUniqueWithoutOwnerInput
}

export interface UserCreateOneWithoutOwnedClassificationLabelsInput {
  create?: UserCreateWithoutOwnedClassificationLabelsInput
  connect?: UserWhereUniqueInput
}

export interface AnnotatableUpdateWithWhereUniqueWithoutOwnerInput {
  where: AnnotatableWhereUniqueInput
  data: AnnotatableUpdateWithoutOwnerDataInput
}

export interface AnnotatableCreateManyWithoutCreatorInput {
  create?: AnnotatableCreateWithoutCreatorInput[] | AnnotatableCreateWithoutCreatorInput
  connect?: AnnotatableWhereUniqueInput[] | AnnotatableWhereUniqueInput
}

export interface AnnotatableUpdateWithoutOwnerDataInput {
  displayName?: String
  text?: String
  anyoneCanView?: Boolean
  anyoneCanAnnotate?: Boolean
  image?: ImageUpdateOneInput
  tasks?: AnnotationTaskUpdateManyWithoutSubjectsInput
  group?: GroupUpdateOneWithoutOwnedAnnotatablesInput
  creator?: UserUpdateOneWithoutCreatedAnnotatablesInput
}

export interface ImageCreateManyWithoutOwnerInput {
  create?: ImageCreateWithoutOwnerInput[] | ImageCreateWithoutOwnerInput
  connect?: ImageWhereUniqueInput[] | ImageWhereUniqueInput
}

export interface GroupUpdateOneWithoutOwnedAnnotatablesInput {
  create?: GroupCreateWithoutOwnedAnnotatablesInput
  connect?: GroupWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: GroupUpdateWithoutOwnedAnnotatablesDataInput
  upsert?: GroupUpsertWithoutOwnedAnnotatablesInput
}

export interface GroupCreateOneWithoutOwnedImagesInput {
  create?: GroupCreateWithoutOwnedImagesInput
  connect?: GroupWhereUniqueInput
}

export interface GroupUpdateWithoutOwnedAnnotatablesDataInput {
  displayName?: String
  memberUsers?: UserUpdateManyWithoutMemberOfGroupsInput
  memberGroups?: GroupUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupUpdateManyWithoutMemberGroupsInput
  ownedImages?: ImageUpdateManyWithoutGroupInput
  ownedAnnotations?: AnnotationUpdateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutGroupInput
  owner?: UserUpdateOneWithoutOwnedGroupsInput
  managerUsers?: UserUpdateManyWithoutManagerOfGroupsInput
  managerGroups?: GroupUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupUpdateManyWithoutManagerGroupsInput
  creator?: UserUpdateOneWithoutCreatedGroupsInput
}

export interface ClassificationContextCreateManyWithoutGroupInput {
  create?: ClassificationContextCreateWithoutGroupInput[] | ClassificationContextCreateWithoutGroupInput
  connect?: ClassificationContextWhereUniqueInput[] | ClassificationContextWhereUniqueInput
}

export interface AnnotationTaskUpdateManyWithoutGroupInput {
  create?: AnnotationTaskCreateWithoutGroupInput[] | AnnotationTaskCreateWithoutGroupInput
  connect?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
  disconnect?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
  delete?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
  update?: AnnotationTaskUpdateWithWhereUniqueWithoutGroupInput[] | AnnotationTaskUpdateWithWhereUniqueWithoutGroupInput
  upsert?: AnnotationTaskUpsertWithWhereUniqueWithoutGroupInput[] | AnnotationTaskUpsertWithWhereUniqueWithoutGroupInput
}

export interface UserCreateOneWithoutOwnedClassificationContextsInput {
  create?: UserCreateWithoutOwnedClassificationContextsInput
  connect?: UserWhereUniqueInput
}

export interface AnnotationTaskUpdateWithWhereUniqueWithoutGroupInput {
  where: AnnotationTaskWhereUniqueInput
  data: AnnotationTaskUpdateWithoutGroupDataInput
}

export interface ImageCreateManyWithoutCreatorInput {
  create?: ImageCreateWithoutCreatorInput[] | ImageCreateWithoutCreatorInput
  connect?: ImageWhereUniqueInput[] | ImageWhereUniqueInput
}

export interface AnnotationTaskUpdateWithoutGroupDataInput {
  displayName?: String
  requirements?: Json
  anyoneCanView?: Boolean
  anyoneCanJoin?: Boolean
  assignees?: UserUpdateManyWithoutAssignedAnnotationTasksInput
  subjects?: AnnotatableUpdateManyWithoutTasksInput
  classificationContexts?: ClassificationContextUpdateManyInput
  classificationLabels?: ClassificationLabelUpdateManyInput
  owner?: UserUpdateOneWithoutOwnedAnnotationTasksInput
  creator?: UserUpdateOneWithoutCreatedAnnotationTasksInput
}

export interface AnnotationCreateManyWithoutOwnerInput {
  create?: AnnotationCreateWithoutOwnerInput[] | AnnotationCreateWithoutOwnerInput
  connect?: AnnotationWhereUniqueInput[] | AnnotationWhereUniqueInput
}

export interface ClassificationContextUpdateManyInput {
  create?: ClassificationContextCreateInput[] | ClassificationContextCreateInput
  connect?: ClassificationContextWhereUniqueInput[] | ClassificationContextWhereUniqueInput
  disconnect?: ClassificationContextWhereUniqueInput[] | ClassificationContextWhereUniqueInput
  delete?: ClassificationContextWhereUniqueInput[] | ClassificationContextWhereUniqueInput
  update?: ClassificationContextUpdateWithWhereUniqueNestedInput[] | ClassificationContextUpdateWithWhereUniqueNestedInput
  upsert?: ClassificationContextUpsertWithWhereUniqueNestedInput[] | ClassificationContextUpsertWithWhereUniqueNestedInput
}

export interface AnnotationTaskCreateOneInput {
  create?: AnnotationTaskCreateInput
  connect?: AnnotationTaskWhereUniqueInput
}

export interface ClassificationContextUpdateWithWhereUniqueNestedInput {
  where: ClassificationContextWhereUniqueInput
  data: ClassificationContextUpdateDataInput
}

export interface ClassificationLabelCreateManyInput {
  create?: ClassificationLabelCreateInput[] | ClassificationLabelCreateInput
  connect?: ClassificationLabelWhereUniqueInput[] | ClassificationLabelWhereUniqueInput
}

export interface ClassificationContextUpdateDataInput {
  slug?: String
  displayName?: String
  infoHtml?: String
  infoData?: Json
  anyoneCanUse?: Boolean
  anyoneCanAddLabels?: Boolean
  anyoneCanEditLabels?: Boolean
  anyoneCanUpdateInfo?: Boolean
  labels?: ClassificationLabelUpdateManyWithoutContextsInput
  owner?: UserUpdateOneWithoutOwnedClassificationContextsInput
  group?: GroupUpdateOneWithoutOwnedClassificationContextsInput
  creator?: UserUpdateOneWithoutCreatedClassificationContextsInput
}

export interface ClassificationContextCreateManyWithoutLabelsInput {
  create?: ClassificationContextCreateWithoutLabelsInput[] | ClassificationContextCreateWithoutLabelsInput
  connect?: ClassificationContextWhereUniqueInput[] | ClassificationContextWhereUniqueInput
}

export interface ClassificationLabelUpdateManyWithoutContextsInput {
  create?: ClassificationLabelCreateWithoutContextsInput[] | ClassificationLabelCreateWithoutContextsInput
  connect?: ClassificationLabelWhereUniqueInput[] | ClassificationLabelWhereUniqueInput
  disconnect?: ClassificationLabelWhereUniqueInput[] | ClassificationLabelWhereUniqueInput
  delete?: ClassificationLabelWhereUniqueInput[] | ClassificationLabelWhereUniqueInput
  update?: ClassificationLabelUpdateWithWhereUniqueWithoutContextsInput[] | ClassificationLabelUpdateWithWhereUniqueWithoutContextsInput
  upsert?: ClassificationLabelUpsertWithWhereUniqueWithoutContextsInput[] | ClassificationLabelUpsertWithWhereUniqueWithoutContextsInput
}

export interface GroupCreateOneWithoutOwnedClassificationContextsInput {
  create?: GroupCreateWithoutOwnedClassificationContextsInput
  connect?: GroupWhereUniqueInput
}

export interface ClassificationLabelUpdateWithWhereUniqueWithoutContextsInput {
  where: ClassificationLabelWhereUniqueInput
  data: ClassificationLabelUpdateWithoutContextsDataInput
}

export interface ClassificationLabelCreateManyWithoutGroupInput {
  create?: ClassificationLabelCreateWithoutGroupInput[] | ClassificationLabelCreateWithoutGroupInput
  connect?: ClassificationLabelWhereUniqueInput[] | ClassificationLabelWhereUniqueInput
}

export interface ClassificationLabelUpdateWithoutContextsDataInput {
  slug?: String
  displayName?: String
  infoHtml?: String
  infoData?: Json
  anyoneCanUse?: Boolean
  anyoneCanEditInfo?: Boolean
  owner?: UserUpdateOneWithoutOwnedClassificationLabelsInput
  group?: GroupUpdateOneWithoutOwnedClassificationLabelsInput
  creator?: UserUpdateOneWithoutCreatedClassificationLabelsInput
}

export interface UserCreateOneWithoutCreatedClassificationLabelsInput {
  create?: UserCreateWithoutCreatedClassificationLabelsInput
  connect?: UserWhereUniqueInput
}

export interface UserUpdateOneWithoutOwnedClassificationLabelsInput {
  create?: UserCreateWithoutOwnedClassificationLabelsInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutOwnedClassificationLabelsDataInput
  upsert?: UserUpsertWithoutOwnedClassificationLabelsInput
}

export interface AnnotationCreateManyWithoutCreatorInput {
  create?: AnnotationCreateWithoutCreatorInput[] | AnnotationCreateWithoutCreatorInput
  connect?: AnnotationWhereUniqueInput[] | AnnotationWhereUniqueInput
}

export interface UserUpdateWithoutOwnedClassificationLabelsDataInput {
  displayName?: String
  systemLogin?: SystemLoginUpdateOneWithoutUserInput
  localLogin?: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations?: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups?: GroupUpdateManyWithoutOwnerInput
  createdGroups?: GroupUpdateManyWithoutCreatorInput
  memberOfGroups?: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups?: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages?: ImageUpdateManyWithoutOwnerInput
  createdImages?: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations?: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextUpdateManyWithoutCreatorInput
  createdClassificationLabels?: ClassificationLabelUpdateManyWithoutCreatorInput
}

export interface CgPointCreateManyInput {
  create?: CgPointCreateInput[] | CgPointCreateInput
  connect?: CgPointWhereUniqueInput[] | CgPointWhereUniqueInput
}

export interface AnnotatableUpdateManyWithoutCreatorInput {
  create?: AnnotatableCreateWithoutCreatorInput[] | AnnotatableCreateWithoutCreatorInput
  connect?: AnnotatableWhereUniqueInput[] | AnnotatableWhereUniqueInput
  disconnect?: AnnotatableWhereUniqueInput[] | AnnotatableWhereUniqueInput
  delete?: AnnotatableWhereUniqueInput[] | AnnotatableWhereUniqueInput
  update?: AnnotatableUpdateWithWhereUniqueWithoutCreatorInput[] | AnnotatableUpdateWithWhereUniqueWithoutCreatorInput
  upsert?: AnnotatableUpsertWithWhereUniqueWithoutCreatorInput[] | AnnotatableUpsertWithWhereUniqueWithoutCreatorInput
}

export interface UserCreateOneWithoutOwnedAnnotationsInput {
  create?: UserCreateWithoutOwnedAnnotationsInput
  connect?: UserWhereUniqueInput
}

export interface AnnotatableUpdateWithWhereUniqueWithoutCreatorInput {
  where: AnnotatableWhereUniqueInput
  data: AnnotatableUpdateWithoutCreatorDataInput
}

export interface AnnotationTaskCreateManyWithoutOwnerInput {
  create?: AnnotationTaskCreateWithoutOwnerInput[] | AnnotationTaskCreateWithoutOwnerInput
  connect?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
}

export interface AnnotatableUpdateWithoutCreatorDataInput {
  displayName?: String
  text?: String
  anyoneCanView?: Boolean
  anyoneCanAnnotate?: Boolean
  image?: ImageUpdateOneInput
  tasks?: AnnotationTaskUpdateManyWithoutSubjectsInput
  owner?: UserUpdateOneWithoutOwnedAnnotatablesInput
  group?: GroupUpdateOneWithoutOwnedAnnotatablesInput
}

export interface GroupCreateOneWithoutOwnedAnnotationTasksInput {
  create?: GroupCreateWithoutOwnedAnnotationTasksInput
  connect?: GroupWhereUniqueInput
}

export interface AnnotatableUpsertWithWhereUniqueWithoutCreatorInput {
  where: AnnotatableWhereUniqueInput
  update: AnnotatableUpdateWithoutCreatorDataInput
  create: AnnotatableCreateWithoutCreatorInput
}

export interface UserCreateOneWithoutOwnedGroupsInput {
  create?: UserCreateWithoutOwnedGroupsInput
  connect?: UserWhereUniqueInput
}

export interface ImageUpdateManyWithoutOwnerInput {
  create?: ImageCreateWithoutOwnerInput[] | ImageCreateWithoutOwnerInput
  connect?: ImageWhereUniqueInput[] | ImageWhereUniqueInput
  disconnect?: ImageWhereUniqueInput[] | ImageWhereUniqueInput
  delete?: ImageWhereUniqueInput[] | ImageWhereUniqueInput
  update?: ImageUpdateWithWhereUniqueWithoutOwnerInput[] | ImageUpdateWithWhereUniqueWithoutOwnerInput
  upsert?: ImageUpsertWithWhereUniqueWithoutOwnerInput[] | ImageUpsertWithWhereUniqueWithoutOwnerInput
}

export interface AnnotationTaskCreateManyWithoutCreatorInput {
  create?: AnnotationTaskCreateWithoutCreatorInput[] | AnnotationTaskCreateWithoutCreatorInput
  connect?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
}

export interface ImageUpdateWithWhereUniqueWithoutOwnerInput {
  where: ImageWhereUniqueInput
  data: ImageUpdateWithoutOwnerDataInput
}

export interface UserCreateOneWithoutOwnedAnnotationTasksInput {
  create?: UserCreateWithoutOwnedAnnotationTasksInput
  connect?: UserWhereUniqueInput
}

export interface ImageUpdateWithoutOwnerDataInput {
  uri?: String
  thumbnailUri?: String
  caption?: String
  digestSha3?: String
  digestSha2?: String
  digestSha1?: String
  digestMd5?: String
  sizeInBytes?: Int
  width?: Int
  height?: Int
  anyoneCanView?: Boolean
  group?: GroupUpdateOneWithoutOwnedImagesInput
  creator?: UserUpdateOneWithoutCreatedImagesInput
}

export interface ClassificationContextCreateManyWithoutOwnerInput {
  create?: ClassificationContextCreateWithoutOwnerInput[] | ClassificationContextCreateWithoutOwnerInput
  connect?: ClassificationContextWhereUniqueInput[] | ClassificationContextWhereUniqueInput
}

export interface GroupUpdateOneWithoutOwnedImagesInput {
  create?: GroupCreateWithoutOwnedImagesInput
  connect?: GroupWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: GroupUpdateWithoutOwnedImagesDataInput
  upsert?: GroupUpsertWithoutOwnedImagesInput
}

export interface UserCreateOneWithoutCreatedClassificationContextsInput {
  create?: UserCreateWithoutCreatedClassificationContextsInput
  connect?: UserWhereUniqueInput
}

export interface GroupUpdateWithoutOwnedImagesDataInput {
  displayName?: String
  memberUsers?: UserUpdateManyWithoutMemberOfGroupsInput
  memberGroups?: GroupUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupUpdateManyWithoutMemberGroupsInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutGroupInput
  ownedAnnotations?: AnnotationUpdateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutGroupInput
  owner?: UserUpdateOneWithoutOwnedGroupsInput
  managerUsers?: UserUpdateManyWithoutManagerOfGroupsInput
  managerGroups?: GroupUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupUpdateManyWithoutManagerGroupsInput
  creator?: UserUpdateOneWithoutCreatedGroupsInput
}

export interface ClassificationLabelCreateManyWithoutOwnerInput {
  create?: ClassificationLabelCreateWithoutOwnerInput[] | ClassificationLabelCreateWithoutOwnerInput
  connect?: ClassificationLabelWhereUniqueInput[] | ClassificationLabelWhereUniqueInput
}

export interface ClassificationContextUpdateManyWithoutGroupInput {
  create?: ClassificationContextCreateWithoutGroupInput[] | ClassificationContextCreateWithoutGroupInput
  connect?: ClassificationContextWhereUniqueInput[] | ClassificationContextWhereUniqueInput
  disconnect?: ClassificationContextWhereUniqueInput[] | ClassificationContextWhereUniqueInput
  delete?: ClassificationContextWhereUniqueInput[] | ClassificationContextWhereUniqueInput
  update?: ClassificationContextUpdateWithWhereUniqueWithoutGroupInput[] | ClassificationContextUpdateWithWhereUniqueWithoutGroupInput
  upsert?: ClassificationContextUpsertWithWhereUniqueWithoutGroupInput[] | ClassificationContextUpsertWithWhereUniqueWithoutGroupInput
}

export interface GroupCreateOneWithoutOwnedClassificationLabelsInput {
  create?: GroupCreateWithoutOwnedClassificationLabelsInput
  connect?: GroupWhereUniqueInput
}

export interface ClassificationContextUpdateWithWhereUniqueWithoutGroupInput {
  where: ClassificationContextWhereUniqueInput
  data: ClassificationContextUpdateWithoutGroupDataInput
}

export interface UserCreateManyWithoutManagerOfGroupsInput {
  create?: UserCreateWithoutManagerOfGroupsInput[] | UserCreateWithoutManagerOfGroupsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface ClassificationContextUpdateWithoutGroupDataInput {
  slug?: String
  displayName?: String
  infoHtml?: String
  infoData?: Json
  anyoneCanUse?: Boolean
  anyoneCanAddLabels?: Boolean
  anyoneCanEditLabels?: Boolean
  anyoneCanUpdateInfo?: Boolean
  labels?: ClassificationLabelUpdateManyWithoutContextsInput
  owner?: UserUpdateOneWithoutOwnedClassificationContextsInput
  creator?: UserUpdateOneWithoutCreatedClassificationContextsInput
}

export interface ClassificationContextCreateManyWithoutCreatorInput {
  create?: ClassificationContextCreateWithoutCreatorInput[] | ClassificationContextCreateWithoutCreatorInput
  connect?: ClassificationContextWhereUniqueInput[] | ClassificationContextWhereUniqueInput
}

export interface UserUpdateOneWithoutOwnedClassificationContextsInput {
  create?: UserCreateWithoutOwnedClassificationContextsInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutOwnedClassificationContextsDataInput
  upsert?: UserUpsertWithoutOwnedClassificationContextsInput
}

export interface ClassificationLabelCreateManyWithoutCreatorInput {
  create?: ClassificationLabelCreateWithoutCreatorInput[] | ClassificationLabelCreateWithoutCreatorInput
  connect?: ClassificationLabelWhereUniqueInput[] | ClassificationLabelWhereUniqueInput
}

export interface UserUpdateWithoutOwnedClassificationContextsDataInput {
  displayName?: String
  systemLogin?: SystemLoginUpdateOneWithoutUserInput
  localLogin?: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations?: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups?: GroupUpdateManyWithoutOwnerInput
  createdGroups?: GroupUpdateManyWithoutCreatorInput
  memberOfGroups?: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups?: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages?: ImageUpdateManyWithoutOwnerInput
  createdImages?: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations?: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskUpdateManyWithoutCreatorInput
  createdClassificationContexts?: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelUpdateManyWithoutCreatorInput
}

export interface GroupCreateManyWithoutManagerOfGroupsInput {
  create?: GroupCreateWithoutManagerOfGroupsInput[] | GroupCreateWithoutManagerOfGroupsInput
  connect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
}

export interface ImageUpdateManyWithoutCreatorInput {
  create?: ImageCreateWithoutCreatorInput[] | ImageCreateWithoutCreatorInput
  connect?: ImageWhereUniqueInput[] | ImageWhereUniqueInput
  disconnect?: ImageWhereUniqueInput[] | ImageWhereUniqueInput
  delete?: ImageWhereUniqueInput[] | ImageWhereUniqueInput
  update?: ImageUpdateWithWhereUniqueWithoutCreatorInput[] | ImageUpdateWithWhereUniqueWithoutCreatorInput
  upsert?: ImageUpsertWithWhereUniqueWithoutCreatorInput[] | ImageUpsertWithWhereUniqueWithoutCreatorInput
}

export interface UserCreateOneWithoutCreatedGroupsInput {
  create?: UserCreateWithoutCreatedGroupsInput
  connect?: UserWhereUniqueInput
}

export interface ImageUpdateWithWhereUniqueWithoutCreatorInput {
  where: ImageWhereUniqueInput
  data: ImageUpdateWithoutCreatorDataInput
}

export interface GroupCreateManyWithoutManagerGroupsInput {
  create?: GroupCreateWithoutManagerGroupsInput[] | GroupCreateWithoutManagerGroupsInput
  connect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
}

export interface ImageUpdateWithoutCreatorDataInput {
  uri?: String
  thumbnailUri?: String
  caption?: String
  digestSha3?: String
  digestSha2?: String
  digestSha1?: String
  digestMd5?: String
  sizeInBytes?: Int
  width?: Int
  height?: Int
  anyoneCanView?: Boolean
  owner?: UserUpdateOneWithoutOwnedImagesInput
  group?: GroupUpdateOneWithoutOwnedImagesInput
}

export interface UserCreateOneWithoutCreatedAnnotationTasksInput {
  create?: UserCreateWithoutCreatedAnnotationTasksInput
  connect?: UserWhereUniqueInput
}

export interface ImageUpsertWithWhereUniqueWithoutCreatorInput {
  where: ImageWhereUniqueInput
  update: ImageUpdateWithoutCreatorDataInput
  create: ImageCreateWithoutCreatorInput
}

export interface GroupCreateOneWithoutOwnedAnnotationsInput {
  create?: GroupCreateWithoutOwnedAnnotationsInput
  connect?: GroupWhereUniqueInput
}

export interface AnnotationUpdateManyWithoutOwnerInput {
  create?: AnnotationCreateWithoutOwnerInput[] | AnnotationCreateWithoutOwnerInput
  connect?: AnnotationWhereUniqueInput[] | AnnotationWhereUniqueInput
  disconnect?: AnnotationWhereUniqueInput[] | AnnotationWhereUniqueInput
  delete?: AnnotationWhereUniqueInput[] | AnnotationWhereUniqueInput
  update?: AnnotationUpdateWithWhereUniqueWithoutOwnerInput[] | AnnotationUpdateWithWhereUniqueWithoutOwnerInput
  upsert?: AnnotationUpsertWithWhereUniqueWithoutOwnerInput[] | AnnotationUpsertWithWhereUniqueWithoutOwnerInput
}

export interface UserCreateOneWithoutCreatedAnnotationsInput {
  create?: UserCreateWithoutCreatedAnnotationsInput
  connect?: UserWhereUniqueInput
}

export interface AnnotationUpdateWithWhereUniqueWithoutOwnerInput {
  where: AnnotationWhereUniqueInput
  data: AnnotationUpdateWithoutOwnerDataInput
}

export interface UserCreateOneWithoutCreatedAnnotatablesInput {
  create?: UserCreateWithoutCreatedAnnotatablesInput
  connect?: UserWhereUniqueInput
}

export interface AnnotationUpdateWithoutOwnerDataInput {
  data?: Json
  svgBounds?: String
  anyoneCanView?: Boolean
  anyoneCanSuggestRevision?: Boolean
  annotator?: UserUpdateOneRequiredWithoutAnnotationsInput
  subject?: AnnotatableUpdateOneRequiredInput
  task?: AnnotationTaskUpdateOneInput
  classificationLabels?: ClassificationLabelUpdateManyInput
  convexHull?: CgPointUpdateManyInput
  group?: GroupUpdateOneWithoutOwnedAnnotationsInput
  creator?: UserUpdateOneWithoutCreatedAnnotationsInput
}

export interface SystemLoginCreateInput {
  username: String
  passwordEnvironmentVariable: String
  user: UserCreateOneWithoutSystemLoginInput
}

export interface AnnotationTaskUpdateOneInput {
  create?: AnnotationTaskCreateInput
  connect?: AnnotationTaskWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: AnnotationTaskUpdateDataInput
  upsert?: AnnotationTaskUpsertNestedInput
}

export interface UserCreateWithoutSystemLoginInput {
  displayName: String
  localLogin?: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations?: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups?: GroupCreateManyWithoutOwnerInput
  createdGroups?: GroupCreateManyWithoutCreatorInput
  memberOfGroups?: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups?: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableCreateManyWithoutCreatorInput
  ownedImages?: ImageCreateManyWithoutOwnerInput
  createdImages?: ImageCreateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations?: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelCreateManyWithoutCreatorInput
}

export interface AnnotationTaskUpdateDataInput {
  displayName?: String
  requirements?: Json
  anyoneCanView?: Boolean
  anyoneCanJoin?: Boolean
  assignees?: UserUpdateManyWithoutAssignedAnnotationTasksInput
  subjects?: AnnotatableUpdateManyWithoutTasksInput
  classificationContexts?: ClassificationContextUpdateManyInput
  classificationLabels?: ClassificationLabelUpdateManyInput
  owner?: UserUpdateOneWithoutOwnedAnnotationTasksInput
  group?: GroupUpdateOneWithoutOwnedAnnotationTasksInput
  creator?: UserUpdateOneWithoutCreatedAnnotationTasksInput
}

export interface UserCreateOneWithoutLocalLoginInput {
  create?: UserCreateWithoutLocalLoginInput
  connect?: UserWhereUniqueInput
}

export interface ClassificationLabelUpdateManyInput {
  create?: ClassificationLabelCreateInput[] | ClassificationLabelCreateInput
  connect?: ClassificationLabelWhereUniqueInput[] | ClassificationLabelWhereUniqueInput
  disconnect?: ClassificationLabelWhereUniqueInput[] | ClassificationLabelWhereUniqueInput
  delete?: ClassificationLabelWhereUniqueInput[] | ClassificationLabelWhereUniqueInput
  update?: ClassificationLabelUpdateWithWhereUniqueNestedInput[] | ClassificationLabelUpdateWithWhereUniqueNestedInput
  upsert?: ClassificationLabelUpsertWithWhereUniqueNestedInput[] | ClassificationLabelUpsertWithWhereUniqueNestedInput
}

export interface GroupCreateInput {
  displayName: String
  memberUsers?: UserCreateManyWithoutMemberOfGroupsInput
  memberGroups?: GroupCreateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupCreateManyWithoutMemberGroupsInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutGroupInput
  ownedImages?: ImageCreateManyWithoutGroupInput
  ownedAnnotations?: AnnotationCreateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutGroupInput
  owner?: UserCreateOneWithoutOwnedGroupsInput
  managerUsers?: UserCreateManyWithoutManagerOfGroupsInput
  managerGroups?: GroupCreateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupCreateManyWithoutManagerGroupsInput
  creator?: UserCreateOneWithoutCreatedGroupsInput
}

export interface ClassificationLabelUpdateWithWhereUniqueNestedInput {
  where: ClassificationLabelWhereUniqueInput
  data: ClassificationLabelUpdateDataInput
}

export interface UserUpdateInput {
  displayName?: String
  systemLogin?: SystemLoginUpdateOneWithoutUserInput
  localLogin?: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations?: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups?: GroupUpdateManyWithoutOwnerInput
  createdGroups?: GroupUpdateManyWithoutCreatorInput
  memberOfGroups?: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups?: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages?: ImageUpdateManyWithoutOwnerInput
  createdImages?: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations?: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelUpdateManyWithoutCreatorInput
}

export interface ClassificationLabelUpdateDataInput {
  slug?: String
  displayName?: String
  infoHtml?: String
  infoData?: Json
  anyoneCanUse?: Boolean
  anyoneCanEditInfo?: Boolean
  contexts?: ClassificationContextUpdateManyWithoutLabelsInput
  owner?: UserUpdateOneWithoutOwnedClassificationLabelsInput
  group?: GroupUpdateOneWithoutOwnedClassificationLabelsInput
  creator?: UserUpdateOneWithoutCreatedClassificationLabelsInput
}

export interface ClassificationLabelSubscriptionWhereInput {
  AND?: ClassificationLabelSubscriptionWhereInput[] | ClassificationLabelSubscriptionWhereInput
  OR?: ClassificationLabelSubscriptionWhereInput[] | ClassificationLabelSubscriptionWhereInput
  NOT?: ClassificationLabelSubscriptionWhereInput[] | ClassificationLabelSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ClassificationLabelWhereInput
}

export interface ClassificationContextUpdateManyWithoutLabelsInput {
  create?: ClassificationContextCreateWithoutLabelsInput[] | ClassificationContextCreateWithoutLabelsInput
  connect?: ClassificationContextWhereUniqueInput[] | ClassificationContextWhereUniqueInput
  disconnect?: ClassificationContextWhereUniqueInput[] | ClassificationContextWhereUniqueInput
  delete?: ClassificationContextWhereUniqueInput[] | ClassificationContextWhereUniqueInput
  update?: ClassificationContextUpdateWithWhereUniqueWithoutLabelsInput[] | ClassificationContextUpdateWithWhereUniqueWithoutLabelsInput
  upsert?: ClassificationContextUpsertWithWhereUniqueWithoutLabelsInput[] | ClassificationContextUpsertWithWhereUniqueWithoutLabelsInput
}

export interface GroupWhereInput {
  AND?: GroupWhereInput[] | GroupWhereInput
  OR?: GroupWhereInput[] | GroupWhereInput
  NOT?: GroupWhereInput[] | GroupWhereInput
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
  memberUsers_every?: UserWhereInput
  memberUsers_some?: UserWhereInput
  memberUsers_none?: UserWhereInput
  memberGroups_every?: GroupWhereInput
  memberGroups_some?: GroupWhereInput
  memberGroups_none?: GroupWhereInput
  memberOfGroups_every?: GroupWhereInput
  memberOfGroups_some?: GroupWhereInput
  memberOfGroups_none?: GroupWhereInput
  ownedAnnotatables_every?: AnnotatableWhereInput
  ownedAnnotatables_some?: AnnotatableWhereInput
  ownedAnnotatables_none?: AnnotatableWhereInput
  ownedImages_every?: ImageWhereInput
  ownedImages_some?: ImageWhereInput
  ownedImages_none?: ImageWhereInput
  ownedAnnotations_every?: AnnotationWhereInput
  ownedAnnotations_some?: AnnotationWhereInput
  ownedAnnotations_none?: AnnotationWhereInput
  ownedAnnotationTasks_every?: AnnotationTaskWhereInput
  ownedAnnotationTasks_some?: AnnotationTaskWhereInput
  ownedAnnotationTasks_none?: AnnotationTaskWhereInput
  ownedClassificationContexts_every?: ClassificationContextWhereInput
  ownedClassificationContexts_some?: ClassificationContextWhereInput
  ownedClassificationContexts_none?: ClassificationContextWhereInput
  ownedClassificationLabels_every?: ClassificationLabelWhereInput
  ownedClassificationLabels_some?: ClassificationLabelWhereInput
  ownedClassificationLabels_none?: ClassificationLabelWhereInput
  owner?: UserWhereInput
  managerUsers_every?: UserWhereInput
  managerUsers_some?: UserWhereInput
  managerUsers_none?: UserWhereInput
  managerGroups_every?: GroupWhereInput
  managerGroups_some?: GroupWhereInput
  managerGroups_none?: GroupWhereInput
  managerOfGroups_every?: GroupWhereInput
  managerOfGroups_some?: GroupWhereInput
  managerOfGroups_none?: GroupWhereInput
  creator?: UserWhereInput
}

export interface ClassificationContextUpdateWithWhereUniqueWithoutLabelsInput {
  where: ClassificationContextWhereUniqueInput
  data: ClassificationContextUpdateWithoutLabelsDataInput
}

export interface GroupSubscriptionWhereInput {
  AND?: GroupSubscriptionWhereInput[] | GroupSubscriptionWhereInput
  OR?: GroupSubscriptionWhereInput[] | GroupSubscriptionWhereInput
  NOT?: GroupSubscriptionWhereInput[] | GroupSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: GroupWhereInput
}

export interface ClassificationContextUpdateWithoutLabelsDataInput {
  slug?: String
  displayName?: String
  infoHtml?: String
  infoData?: Json
  anyoneCanUse?: Boolean
  anyoneCanAddLabels?: Boolean
  anyoneCanEditLabels?: Boolean
  anyoneCanUpdateInfo?: Boolean
  owner?: UserUpdateOneWithoutOwnedClassificationContextsInput
  group?: GroupUpdateOneWithoutOwnedClassificationContextsInput
  creator?: UserUpdateOneWithoutCreatedClassificationContextsInput
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

export interface GroupUpdateOneWithoutOwnedClassificationContextsInput {
  create?: GroupCreateWithoutOwnedClassificationContextsInput
  connect?: GroupWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: GroupUpdateWithoutOwnedClassificationContextsDataInput
  upsert?: GroupUpsertWithoutOwnedClassificationContextsInput
}

export interface ClassificationLabelUpdateInput {
  slug?: String
  displayName?: String
  infoHtml?: String
  infoData?: Json
  anyoneCanUse?: Boolean
  anyoneCanEditInfo?: Boolean
  contexts?: ClassificationContextUpdateManyWithoutLabelsInput
  owner?: UserUpdateOneWithoutOwnedClassificationLabelsInput
  group?: GroupUpdateOneWithoutOwnedClassificationLabelsInput
  creator?: UserUpdateOneWithoutCreatedClassificationLabelsInput
}

export interface GroupUpdateWithoutOwnedClassificationContextsDataInput {
  displayName?: String
  memberUsers?: UserUpdateManyWithoutMemberOfGroupsInput
  memberGroups?: GroupUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupUpdateManyWithoutMemberGroupsInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutGroupInput
  ownedImages?: ImageUpdateManyWithoutGroupInput
  ownedAnnotations?: AnnotationUpdateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutGroupInput
  owner?: UserUpdateOneWithoutOwnedGroupsInput
  managerUsers?: UserUpdateManyWithoutManagerOfGroupsInput
  managerGroups?: GroupUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupUpdateManyWithoutManagerGroupsInput
  creator?: UserUpdateOneWithoutCreatedGroupsInput
}

export interface CgPointUpdateInput {
  x?: Float
  y?: Float
  xMin?: Float
  yMin?: Float
  xMax?: Float
  yMax?: Float
}

export interface ClassificationLabelUpdateManyWithoutGroupInput {
  create?: ClassificationLabelCreateWithoutGroupInput[] | ClassificationLabelCreateWithoutGroupInput
  connect?: ClassificationLabelWhereUniqueInput[] | ClassificationLabelWhereUniqueInput
  disconnect?: ClassificationLabelWhereUniqueInput[] | ClassificationLabelWhereUniqueInput
  delete?: ClassificationLabelWhereUniqueInput[] | ClassificationLabelWhereUniqueInput
  update?: ClassificationLabelUpdateWithWhereUniqueWithoutGroupInput[] | ClassificationLabelUpdateWithWhereUniqueWithoutGroupInput
  upsert?: ClassificationLabelUpsertWithWhereUniqueWithoutGroupInput[] | ClassificationLabelUpsertWithWhereUniqueWithoutGroupInput
}

export interface GroupWhereUniqueInput {
  id?: ID_Input
}

export interface ClassificationLabelUpdateWithWhereUniqueWithoutGroupInput {
  where: ClassificationLabelWhereUniqueInput
  data: ClassificationLabelUpdateWithoutGroupDataInput
}

export interface CgPointWhereUniqueInput {
  id?: ID_Input
}

export interface ClassificationLabelUpdateWithoutGroupDataInput {
  slug?: String
  displayName?: String
  infoHtml?: String
  infoData?: Json
  anyoneCanUse?: Boolean
  anyoneCanEditInfo?: Boolean
  contexts?: ClassificationContextUpdateManyWithoutLabelsInput
  owner?: UserUpdateOneWithoutOwnedClassificationLabelsInput
  creator?: UserUpdateOneWithoutCreatedClassificationLabelsInput
}

export interface AnnotatableUpdateInput {
  displayName?: String
  text?: String
  anyoneCanView?: Boolean
  anyoneCanAnnotate?: Boolean
  image?: ImageUpdateOneInput
  tasks?: AnnotationTaskUpdateManyWithoutSubjectsInput
  owner?: UserUpdateOneWithoutOwnedAnnotatablesInput
  group?: GroupUpdateOneWithoutOwnedAnnotatablesInput
  creator?: UserUpdateOneWithoutCreatedAnnotatablesInput
}

export interface UserUpdateOneWithoutCreatedClassificationLabelsInput {
  create?: UserCreateWithoutCreatedClassificationLabelsInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutCreatedClassificationLabelsDataInput
  upsert?: UserUpsertWithoutCreatedClassificationLabelsInput
}

export interface UserUpsertWithoutLocalLoginInput {
  update: UserUpdateWithoutLocalLoginDataInput
  create: UserCreateWithoutLocalLoginInput
}

export interface UserUpdateWithoutCreatedClassificationLabelsDataInput {
  displayName?: String
  systemLogin?: SystemLoginUpdateOneWithoutUserInput
  localLogin?: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations?: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups?: GroupUpdateManyWithoutOwnerInput
  createdGroups?: GroupUpdateManyWithoutCreatorInput
  memberOfGroups?: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups?: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages?: ImageUpdateManyWithoutOwnerInput
  createdImages?: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations?: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutOwnerInput
}

export interface UserUpsertWithoutSystemLoginInput {
  update: UserUpdateWithoutSystemLoginDataInput
  create: UserCreateWithoutSystemLoginInput
}

export interface AnnotationUpdateManyWithoutCreatorInput {
  create?: AnnotationCreateWithoutCreatorInput[] | AnnotationCreateWithoutCreatorInput
  connect?: AnnotationWhereUniqueInput[] | AnnotationWhereUniqueInput
  disconnect?: AnnotationWhereUniqueInput[] | AnnotationWhereUniqueInput
  delete?: AnnotationWhereUniqueInput[] | AnnotationWhereUniqueInput
  update?: AnnotationUpdateWithWhereUniqueWithoutCreatorInput[] | AnnotationUpdateWithWhereUniqueWithoutCreatorInput
  upsert?: AnnotationUpsertWithWhereUniqueWithoutCreatorInput[] | AnnotationUpsertWithWhereUniqueWithoutCreatorInput
}

export interface AnnotationTaskUpsertWithWhereUniqueWithoutAssigneesInput {
  where: AnnotationTaskWhereUniqueInput
  update: AnnotationTaskUpdateWithoutAssigneesDataInput
  create: AnnotationTaskCreateWithoutAssigneesInput
}

export interface AnnotationUpdateWithWhereUniqueWithoutCreatorInput {
  where: AnnotationWhereUniqueInput
  data: AnnotationUpdateWithoutCreatorDataInput
}

export interface AnnotationUpsertWithWhereUniqueWithoutAnnotatorInput {
  where: AnnotationWhereUniqueInput
  update: AnnotationUpdateWithoutAnnotatorDataInput
  create: AnnotationCreateWithoutAnnotatorInput
}

export interface AnnotationUpdateWithoutCreatorDataInput {
  data?: Json
  svgBounds?: String
  anyoneCanView?: Boolean
  anyoneCanSuggestRevision?: Boolean
  annotator?: UserUpdateOneRequiredWithoutAnnotationsInput
  subject?: AnnotatableUpdateOneRequiredInput
  task?: AnnotationTaskUpdateOneInput
  classificationLabels?: ClassificationLabelUpdateManyInput
  convexHull?: CgPointUpdateManyInput
  owner?: UserUpdateOneWithoutOwnedAnnotationsInput
  group?: GroupUpdateOneWithoutOwnedAnnotationsInput
}

export interface GroupUpsertWithWhereUniqueWithoutOwnerInput {
  where: GroupWhereUniqueInput
  update: GroupUpdateWithoutOwnerDataInput
  create: GroupCreateWithoutOwnerInput
}

export interface CgPointUpdateManyInput {
  create?: CgPointCreateInput[] | CgPointCreateInput
  connect?: CgPointWhereUniqueInput[] | CgPointWhereUniqueInput
  disconnect?: CgPointWhereUniqueInput[] | CgPointWhereUniqueInput
  delete?: CgPointWhereUniqueInput[] | CgPointWhereUniqueInput
  update?: CgPointUpdateWithWhereUniqueNestedInput[] | CgPointUpdateWithWhereUniqueNestedInput
  upsert?: CgPointUpsertWithWhereUniqueNestedInput[] | CgPointUpsertWithWhereUniqueNestedInput
}

export interface AnnotatableUpsertWithWhereUniqueWithoutGroupInput {
  where: AnnotatableWhereUniqueInput
  update: AnnotatableUpdateWithoutGroupDataInput
  create: AnnotatableCreateWithoutGroupInput
}

export interface CgPointUpdateWithWhereUniqueNestedInput {
  where: CgPointWhereUniqueInput
  data: CgPointUpdateDataInput
}

export interface ImageUpsertWithWhereUniqueWithoutGroupInput {
  where: ImageWhereUniqueInput
  update: ImageUpdateWithoutGroupDataInput
  create: ImageCreateWithoutGroupInput
}

export interface CgPointUpdateDataInput {
  x?: Float
  y?: Float
  xMin?: Float
  yMin?: Float
  xMax?: Float
  yMax?: Float
}

export interface UserUpsertWithoutAnnotationsInput {
  update: UserUpdateWithoutAnnotationsDataInput
  create: UserCreateWithoutAnnotationsInput
}

export interface CgPointUpsertWithWhereUniqueNestedInput {
  where: CgPointWhereUniqueInput
  update: CgPointUpdateDataInput
  create: CgPointCreateInput
}

export interface SystemLoginCreateWithoutUserInput {
  username: String
  passwordEnvironmentVariable: String
}

export interface UserUpdateOneWithoutOwnedAnnotationsInput {
  create?: UserCreateWithoutOwnedAnnotationsInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutOwnedAnnotationsDataInput
  upsert?: UserUpsertWithoutOwnedAnnotationsInput
}

export interface AnnotationTaskCreateWithoutAssigneesInput {
  displayName: String
  requirements?: Json
  anyoneCanView?: Boolean
  anyoneCanJoin?: Boolean
  subjects?: AnnotatableCreateManyWithoutTasksInput
  classificationContexts?: ClassificationContextCreateManyInput
  classificationLabels?: ClassificationLabelCreateManyInput
  owner?: UserCreateOneWithoutOwnedAnnotationTasksInput
  group?: GroupCreateOneWithoutOwnedAnnotationTasksInput
  creator?: UserCreateOneWithoutCreatedAnnotationTasksInput
}

export interface UserUpdateWithoutOwnedAnnotationsDataInput {
  displayName?: String
  systemLogin?: SystemLoginUpdateOneWithoutUserInput
  localLogin?: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations?: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups?: GroupUpdateManyWithoutOwnerInput
  createdGroups?: GroupUpdateManyWithoutCreatorInput
  memberOfGroups?: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups?: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages?: ImageUpdateManyWithoutOwnerInput
  createdImages?: ImageUpdateManyWithoutCreatorInput
  createdAnnotations?: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelUpdateManyWithoutCreatorInput
}

export interface ImageCreateInput {
  uri: String
  thumbnailUri?: String
  caption?: String
  digestSha3?: String
  digestSha2?: String
  digestSha1?: String
  digestMd5?: String
  sizeInBytes?: Int
  width?: Int
  height?: Int
  anyoneCanView?: Boolean
  owner?: UserCreateOneWithoutOwnedImagesInput
  group?: GroupCreateOneWithoutOwnedImagesInput
  creator?: UserCreateOneWithoutCreatedImagesInput
}

export interface AnnotationTaskUpdateManyWithoutOwnerInput {
  create?: AnnotationTaskCreateWithoutOwnerInput[] | AnnotationTaskCreateWithoutOwnerInput
  connect?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
  disconnect?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
  delete?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
  update?: AnnotationTaskUpdateWithWhereUniqueWithoutOwnerInput[] | AnnotationTaskUpdateWithWhereUniqueWithoutOwnerInput
  upsert?: AnnotationTaskUpsertWithWhereUniqueWithoutOwnerInput[] | AnnotationTaskUpsertWithWhereUniqueWithoutOwnerInput
}

export interface AnnotationCreateWithoutAnnotatorInput {
  data?: Json
  svgBounds?: String
  anyoneCanView?: Boolean
  anyoneCanSuggestRevision?: Boolean
  subject: AnnotatableCreateOneInput
  task?: AnnotationTaskCreateOneInput
  classificationLabels?: ClassificationLabelCreateManyInput
  convexHull?: CgPointCreateManyInput
  owner?: UserCreateOneWithoutOwnedAnnotationsInput
  group?: GroupCreateOneWithoutOwnedAnnotationsInput
  creator?: UserCreateOneWithoutCreatedAnnotationsInput
}

export interface AnnotationTaskUpdateWithWhereUniqueWithoutOwnerInput {
  where: AnnotationTaskWhereUniqueInput
  data: AnnotationTaskUpdateWithoutOwnerDataInput
}

export interface AnnotationTaskCreateWithoutSubjectsInput {
  displayName: String
  requirements?: Json
  anyoneCanView?: Boolean
  anyoneCanJoin?: Boolean
  assignees?: UserCreateManyWithoutAssignedAnnotationTasksInput
  classificationContexts?: ClassificationContextCreateManyInput
  classificationLabels?: ClassificationLabelCreateManyInput
  owner?: UserCreateOneWithoutOwnedAnnotationTasksInput
  group?: GroupCreateOneWithoutOwnedAnnotationTasksInput
  creator?: UserCreateOneWithoutCreatedAnnotationTasksInput
}

export interface AnnotationTaskUpdateWithoutOwnerDataInput {
  displayName?: String
  requirements?: Json
  anyoneCanView?: Boolean
  anyoneCanJoin?: Boolean
  assignees?: UserUpdateManyWithoutAssignedAnnotationTasksInput
  subjects?: AnnotatableUpdateManyWithoutTasksInput
  classificationContexts?: ClassificationContextUpdateManyInput
  classificationLabels?: ClassificationLabelUpdateManyInput
  group?: GroupUpdateOneWithoutOwnedAnnotationTasksInput
  creator?: UserUpdateOneWithoutCreatedAnnotationTasksInput
}

export interface GroupCreateWithoutOwnerInput {
  displayName: String
  memberUsers?: UserCreateManyWithoutMemberOfGroupsInput
  memberGroups?: GroupCreateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupCreateManyWithoutMemberGroupsInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutGroupInput
  ownedImages?: ImageCreateManyWithoutGroupInput
  ownedAnnotations?: AnnotationCreateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutGroupInput
  managerUsers?: UserCreateManyWithoutManagerOfGroupsInput
  managerGroups?: GroupCreateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupCreateManyWithoutManagerGroupsInput
  creator?: UserCreateOneWithoutCreatedGroupsInput
}

export interface GroupUpdateOneWithoutOwnedAnnotationTasksInput {
  create?: GroupCreateWithoutOwnedAnnotationTasksInput
  connect?: GroupWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: GroupUpdateWithoutOwnedAnnotationTasksDataInput
  upsert?: GroupUpsertWithoutOwnedAnnotationTasksInput
}

export interface GroupCreateWithoutCreatorInput {
  displayName: String
  memberUsers?: UserCreateManyWithoutMemberOfGroupsInput
  memberGroups?: GroupCreateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupCreateManyWithoutMemberGroupsInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutGroupInput
  ownedImages?: ImageCreateManyWithoutGroupInput
  ownedAnnotations?: AnnotationCreateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutGroupInput
  owner?: UserCreateOneWithoutOwnedGroupsInput
  managerUsers?: UserCreateManyWithoutManagerOfGroupsInput
  managerGroups?: GroupCreateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupCreateManyWithoutManagerGroupsInput
}

export interface GroupUpdateWithoutOwnedAnnotationTasksDataInput {
  displayName?: String
  memberUsers?: UserUpdateManyWithoutMemberOfGroupsInput
  memberGroups?: GroupUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupUpdateManyWithoutMemberGroupsInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutGroupInput
  ownedImages?: ImageUpdateManyWithoutGroupInput
  ownedAnnotations?: AnnotationUpdateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutGroupInput
  owner?: UserUpdateOneWithoutOwnedGroupsInput
  managerUsers?: UserUpdateManyWithoutManagerOfGroupsInput
  managerGroups?: GroupUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupUpdateManyWithoutManagerGroupsInput
  creator?: UserUpdateOneWithoutCreatedGroupsInput
}

export interface AnnotatableCreateWithoutGroupInput {
  displayName?: String
  text?: String
  anyoneCanView?: Boolean
  anyoneCanAnnotate?: Boolean
  image?: ImageCreateOneInput
  tasks?: AnnotationTaskCreateManyWithoutSubjectsInput
  owner?: UserCreateOneWithoutOwnedAnnotatablesInput
  creator?: UserCreateOneWithoutCreatedAnnotatablesInput
}

export interface UserUpdateOneWithoutOwnedGroupsInput {
  create?: UserCreateWithoutOwnedGroupsInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutOwnedGroupsDataInput
  upsert?: UserUpsertWithoutOwnedGroupsInput
}

export interface GroupCreateWithoutMemberUsersInput {
  displayName: String
  memberGroups?: GroupCreateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupCreateManyWithoutMemberGroupsInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutGroupInput
  ownedImages?: ImageCreateManyWithoutGroupInput
  ownedAnnotations?: AnnotationCreateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutGroupInput
  owner?: UserCreateOneWithoutOwnedGroupsInput
  managerUsers?: UserCreateManyWithoutManagerOfGroupsInput
  managerGroups?: GroupCreateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupCreateManyWithoutManagerGroupsInput
  creator?: UserCreateOneWithoutCreatedGroupsInput
}

export interface UserUpdateWithoutOwnedGroupsDataInput {
  displayName?: String
  systemLogin?: SystemLoginUpdateOneWithoutUserInput
  localLogin?: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations?: AnnotationUpdateManyWithoutAnnotatorInput
  createdGroups?: GroupUpdateManyWithoutCreatorInput
  memberOfGroups?: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups?: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages?: ImageUpdateManyWithoutOwnerInput
  createdImages?: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations?: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelUpdateManyWithoutCreatorInput
}

export interface ImageCreateWithoutGroupInput {
  uri: String
  thumbnailUri?: String
  caption?: String
  digestSha3?: String
  digestSha2?: String
  digestSha1?: String
  digestMd5?: String
  sizeInBytes?: Int
  width?: Int
  height?: Int
  anyoneCanView?: Boolean
  owner?: UserCreateOneWithoutOwnedImagesInput
  creator?: UserCreateOneWithoutCreatedImagesInput
}

export interface AnnotationTaskUpdateManyWithoutCreatorInput {
  create?: AnnotationTaskCreateWithoutCreatorInput[] | AnnotationTaskCreateWithoutCreatorInput
  connect?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
  disconnect?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
  delete?: AnnotationTaskWhereUniqueInput[] | AnnotationTaskWhereUniqueInput
  update?: AnnotationTaskUpdateWithWhereUniqueWithoutCreatorInput[] | AnnotationTaskUpdateWithWhereUniqueWithoutCreatorInput
  upsert?: AnnotationTaskUpsertWithWhereUniqueWithoutCreatorInput[] | AnnotationTaskUpsertWithWhereUniqueWithoutCreatorInput
}

export interface GroupCreateWithoutManagerUsersInput {
  displayName: String
  memberUsers?: UserCreateManyWithoutMemberOfGroupsInput
  memberGroups?: GroupCreateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupCreateManyWithoutMemberGroupsInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutGroupInput
  ownedImages?: ImageCreateManyWithoutGroupInput
  ownedAnnotations?: AnnotationCreateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutGroupInput
  owner?: UserCreateOneWithoutOwnedGroupsInput
  managerGroups?: GroupCreateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupCreateManyWithoutManagerGroupsInput
  creator?: UserCreateOneWithoutCreatedGroupsInput
}

export interface AnnotationTaskUpdateWithWhereUniqueWithoutCreatorInput {
  where: AnnotationTaskWhereUniqueInput
  data: AnnotationTaskUpdateWithoutCreatorDataInput
}

export interface UserCreateWithoutAnnotationsInput {
  displayName: String
  systemLogin?: SystemLoginCreateOneWithoutUserInput
  localLogin?: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskCreateManyWithoutAssigneesInput
  ownedGroups?: GroupCreateManyWithoutOwnerInput
  createdGroups?: GroupCreateManyWithoutCreatorInput
  memberOfGroups?: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups?: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableCreateManyWithoutCreatorInput
  ownedImages?: ImageCreateManyWithoutOwnerInput
  createdImages?: ImageCreateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations?: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelCreateManyWithoutCreatorInput
}

export interface AnnotationTaskUpdateWithoutCreatorDataInput {
  displayName?: String
  requirements?: Json
  anyoneCanView?: Boolean
  anyoneCanJoin?: Boolean
  assignees?: UserUpdateManyWithoutAssignedAnnotationTasksInput
  subjects?: AnnotatableUpdateManyWithoutTasksInput
  classificationContexts?: ClassificationContextUpdateManyInput
  classificationLabels?: ClassificationLabelUpdateManyInput
  owner?: UserUpdateOneWithoutOwnedAnnotationTasksInput
  group?: GroupUpdateOneWithoutOwnedAnnotationTasksInput
}

export interface GroupCreateWithoutOwnedAnnotatablesInput {
  displayName: String
  memberUsers?: UserCreateManyWithoutMemberOfGroupsInput
  memberGroups?: GroupCreateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupCreateManyWithoutMemberGroupsInput
  ownedImages?: ImageCreateManyWithoutGroupInput
  ownedAnnotations?: AnnotationCreateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutGroupInput
  owner?: UserCreateOneWithoutOwnedGroupsInput
  managerUsers?: UserCreateManyWithoutManagerOfGroupsInput
  managerGroups?: GroupCreateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupCreateManyWithoutManagerGroupsInput
  creator?: UserCreateOneWithoutCreatedGroupsInput
}

export interface UserUpdateOneWithoutOwnedAnnotationTasksInput {
  create?: UserCreateWithoutOwnedAnnotationTasksInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutOwnedAnnotationTasksDataInput
  upsert?: UserUpsertWithoutOwnedAnnotationTasksInput
}

export interface ClassificationContextCreateInput {
  slug: String
  displayName: String
  infoHtml?: String
  infoData?: Json
  anyoneCanUse?: Boolean
  anyoneCanAddLabels?: Boolean
  anyoneCanEditLabels?: Boolean
  anyoneCanUpdateInfo?: Boolean
  labels?: ClassificationLabelCreateManyWithoutContextsInput
  owner?: UserCreateOneWithoutOwnedClassificationContextsInput
  group?: GroupCreateOneWithoutOwnedClassificationContextsInput
  creator?: UserCreateOneWithoutCreatedClassificationContextsInput
}

export interface UserUpdateWithoutOwnedAnnotationTasksDataInput {
  displayName?: String
  systemLogin?: SystemLoginUpdateOneWithoutUserInput
  localLogin?: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations?: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups?: GroupUpdateManyWithoutOwnerInput
  createdGroups?: GroupUpdateManyWithoutCreatorInput
  memberOfGroups?: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups?: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages?: ImageUpdateManyWithoutOwnerInput
  createdImages?: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations?: AnnotationUpdateManyWithoutCreatorInput
  createdAnnotationTasks?: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelUpdateManyWithoutCreatorInput
}

export interface UserCreateWithoutOwnedClassificationLabelsInput {
  displayName: String
  systemLogin?: SystemLoginCreateOneWithoutUserInput
  localLogin?: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations?: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups?: GroupCreateManyWithoutOwnerInput
  createdGroups?: GroupCreateManyWithoutCreatorInput
  memberOfGroups?: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups?: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableCreateManyWithoutCreatorInput
  ownedImages?: ImageCreateManyWithoutOwnerInput
  createdImages?: ImageCreateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations?: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextCreateManyWithoutCreatorInput
  createdClassificationLabels?: ClassificationLabelCreateManyWithoutCreatorInput
}

export interface ClassificationContextUpdateManyWithoutOwnerInput {
  create?: ClassificationContextCreateWithoutOwnerInput[] | ClassificationContextCreateWithoutOwnerInput
  connect?: ClassificationContextWhereUniqueInput[] | ClassificationContextWhereUniqueInput
  disconnect?: ClassificationContextWhereUniqueInput[] | ClassificationContextWhereUniqueInput
  delete?: ClassificationContextWhereUniqueInput[] | ClassificationContextWhereUniqueInput
  update?: ClassificationContextUpdateWithWhereUniqueWithoutOwnerInput[] | ClassificationContextUpdateWithWhereUniqueWithoutOwnerInput
  upsert?: ClassificationContextUpsertWithWhereUniqueWithoutOwnerInput[] | ClassificationContextUpsertWithWhereUniqueWithoutOwnerInput
}

export interface ImageCreateWithoutOwnerInput {
  uri: String
  thumbnailUri?: String
  caption?: String
  digestSha3?: String
  digestSha2?: String
  digestSha1?: String
  digestMd5?: String
  sizeInBytes?: Int
  width?: Int
  height?: Int
  anyoneCanView?: Boolean
  group?: GroupCreateOneWithoutOwnedImagesInput
  creator?: UserCreateOneWithoutCreatedImagesInput
}

export interface ClassificationContextUpdateWithWhereUniqueWithoutOwnerInput {
  where: ClassificationContextWhereUniqueInput
  data: ClassificationContextUpdateWithoutOwnerDataInput
}

export interface ClassificationContextCreateWithoutGroupInput {
  slug: String
  displayName: String
  infoHtml?: String
  infoData?: Json
  anyoneCanUse?: Boolean
  anyoneCanAddLabels?: Boolean
  anyoneCanEditLabels?: Boolean
  anyoneCanUpdateInfo?: Boolean
  labels?: ClassificationLabelCreateManyWithoutContextsInput
  owner?: UserCreateOneWithoutOwnedClassificationContextsInput
  creator?: UserCreateOneWithoutCreatedClassificationContextsInput
}

export interface ClassificationContextUpdateWithoutOwnerDataInput {
  slug?: String
  displayName?: String
  infoHtml?: String
  infoData?: Json
  anyoneCanUse?: Boolean
  anyoneCanAddLabels?: Boolean
  anyoneCanEditLabels?: Boolean
  anyoneCanUpdateInfo?: Boolean
  labels?: ClassificationLabelUpdateManyWithoutContextsInput
  group?: GroupUpdateOneWithoutOwnedClassificationContextsInput
  creator?: UserUpdateOneWithoutCreatedClassificationContextsInput
}

export interface ImageCreateWithoutCreatorInput {
  uri: String
  thumbnailUri?: String
  caption?: String
  digestSha3?: String
  digestSha2?: String
  digestSha1?: String
  digestMd5?: String
  sizeInBytes?: Int
  width?: Int
  height?: Int
  anyoneCanView?: Boolean
  owner?: UserCreateOneWithoutOwnedImagesInput
  group?: GroupCreateOneWithoutOwnedImagesInput
}

export interface UserUpdateOneWithoutCreatedClassificationContextsInput {
  create?: UserCreateWithoutCreatedClassificationContextsInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutCreatedClassificationContextsDataInput
  upsert?: UserUpsertWithoutCreatedClassificationContextsInput
}

export interface AnnotationTaskCreateInput {
  displayName: String
  requirements?: Json
  anyoneCanView?: Boolean
  anyoneCanJoin?: Boolean
  assignees?: UserCreateManyWithoutAssignedAnnotationTasksInput
  subjects?: AnnotatableCreateManyWithoutTasksInput
  classificationContexts?: ClassificationContextCreateManyInput
  classificationLabels?: ClassificationLabelCreateManyInput
  owner?: UserCreateOneWithoutOwnedAnnotationTasksInput
  group?: GroupCreateOneWithoutOwnedAnnotationTasksInput
  creator?: UserCreateOneWithoutCreatedAnnotationTasksInput
}

export interface UserUpdateWithoutCreatedClassificationContextsDataInput {
  displayName?: String
  systemLogin?: SystemLoginUpdateOneWithoutUserInput
  localLogin?: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations?: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups?: GroupUpdateManyWithoutOwnerInput
  createdGroups?: GroupUpdateManyWithoutCreatorInput
  memberOfGroups?: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups?: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages?: ImageUpdateManyWithoutOwnerInput
  createdImages?: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations?: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutOwnerInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelUpdateManyWithoutCreatorInput
}

export interface ClassificationContextCreateWithoutLabelsInput {
  slug: String
  displayName: String
  infoHtml?: String
  infoData?: Json
  anyoneCanUse?: Boolean
  anyoneCanAddLabels?: Boolean
  anyoneCanEditLabels?: Boolean
  anyoneCanUpdateInfo?: Boolean
  owner?: UserCreateOneWithoutOwnedClassificationContextsInput
  group?: GroupCreateOneWithoutOwnedClassificationContextsInput
  creator?: UserCreateOneWithoutCreatedClassificationContextsInput
}

export interface ClassificationLabelUpdateManyWithoutOwnerInput {
  create?: ClassificationLabelCreateWithoutOwnerInput[] | ClassificationLabelCreateWithoutOwnerInput
  connect?: ClassificationLabelWhereUniqueInput[] | ClassificationLabelWhereUniqueInput
  disconnect?: ClassificationLabelWhereUniqueInput[] | ClassificationLabelWhereUniqueInput
  delete?: ClassificationLabelWhereUniqueInput[] | ClassificationLabelWhereUniqueInput
  update?: ClassificationLabelUpdateWithWhereUniqueWithoutOwnerInput[] | ClassificationLabelUpdateWithWhereUniqueWithoutOwnerInput
  upsert?: ClassificationLabelUpsertWithWhereUniqueWithoutOwnerInput[] | ClassificationLabelUpsertWithWhereUniqueWithoutOwnerInput
}

export interface ClassificationLabelCreateWithoutGroupInput {
  slug: String
  displayName: String
  infoHtml?: String
  infoData?: Json
  anyoneCanUse?: Boolean
  anyoneCanEditInfo?: Boolean
  contexts?: ClassificationContextCreateManyWithoutLabelsInput
  owner?: UserCreateOneWithoutOwnedClassificationLabelsInput
  creator?: UserCreateOneWithoutCreatedClassificationLabelsInput
}

export interface ClassificationLabelUpdateWithWhereUniqueWithoutOwnerInput {
  where: ClassificationLabelWhereUniqueInput
  data: ClassificationLabelUpdateWithoutOwnerDataInput
}

export interface AnnotationCreateWithoutCreatorInput {
  data?: Json
  svgBounds?: String
  anyoneCanView?: Boolean
  anyoneCanSuggestRevision?: Boolean
  annotator: UserCreateOneWithoutAnnotationsInput
  subject: AnnotatableCreateOneInput
  task?: AnnotationTaskCreateOneInput
  classificationLabels?: ClassificationLabelCreateManyInput
  convexHull?: CgPointCreateManyInput
  owner?: UserCreateOneWithoutOwnedAnnotationsInput
  group?: GroupCreateOneWithoutOwnedAnnotationsInput
}

export interface ClassificationLabelUpdateWithoutOwnerDataInput {
  slug?: String
  displayName?: String
  infoHtml?: String
  infoData?: Json
  anyoneCanUse?: Boolean
  anyoneCanEditInfo?: Boolean
  contexts?: ClassificationContextUpdateManyWithoutLabelsInput
  group?: GroupUpdateOneWithoutOwnedClassificationLabelsInput
  creator?: UserUpdateOneWithoutCreatedClassificationLabelsInput
}

export interface UserCreateWithoutOwnedAnnotationsInput {
  displayName: String
  systemLogin?: SystemLoginCreateOneWithoutUserInput
  localLogin?: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations?: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups?: GroupCreateManyWithoutOwnerInput
  createdGroups?: GroupCreateManyWithoutCreatorInput
  memberOfGroups?: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups?: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableCreateManyWithoutCreatorInput
  ownedImages?: ImageCreateManyWithoutOwnerInput
  createdImages?: ImageCreateManyWithoutCreatorInput
  createdAnnotations?: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelCreateManyWithoutCreatorInput
}

export interface GroupUpdateOneWithoutOwnedClassificationLabelsInput {
  create?: GroupCreateWithoutOwnedClassificationLabelsInput
  connect?: GroupWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: GroupUpdateWithoutOwnedClassificationLabelsDataInput
  upsert?: GroupUpsertWithoutOwnedClassificationLabelsInput
}

export interface GroupCreateWithoutOwnedAnnotationTasksInput {
  displayName: String
  memberUsers?: UserCreateManyWithoutMemberOfGroupsInput
  memberGroups?: GroupCreateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupCreateManyWithoutMemberGroupsInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutGroupInput
  ownedImages?: ImageCreateManyWithoutGroupInput
  ownedAnnotations?: AnnotationCreateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutGroupInput
  owner?: UserCreateOneWithoutOwnedGroupsInput
  managerUsers?: UserCreateManyWithoutManagerOfGroupsInput
  managerGroups?: GroupCreateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupCreateManyWithoutManagerGroupsInput
  creator?: UserCreateOneWithoutCreatedGroupsInput
}

export interface GroupUpdateWithoutOwnedClassificationLabelsDataInput {
  displayName?: String
  memberUsers?: UserUpdateManyWithoutMemberOfGroupsInput
  memberGroups?: GroupUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupUpdateManyWithoutMemberGroupsInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutGroupInput
  ownedImages?: ImageUpdateManyWithoutGroupInput
  ownedAnnotations?: AnnotationUpdateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutGroupInput
  owner?: UserUpdateOneWithoutOwnedGroupsInput
  managerUsers?: UserUpdateManyWithoutManagerOfGroupsInput
  managerGroups?: GroupUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupUpdateManyWithoutManagerGroupsInput
  creator?: UserUpdateOneWithoutCreatedGroupsInput
}

export interface AnnotationTaskCreateWithoutCreatorInput {
  displayName: String
  requirements?: Json
  anyoneCanView?: Boolean
  anyoneCanJoin?: Boolean
  assignees?: UserCreateManyWithoutAssignedAnnotationTasksInput
  subjects?: AnnotatableCreateManyWithoutTasksInput
  classificationContexts?: ClassificationContextCreateManyInput
  classificationLabels?: ClassificationLabelCreateManyInput
  owner?: UserCreateOneWithoutOwnedAnnotationTasksInput
  group?: GroupCreateOneWithoutOwnedAnnotationTasksInput
}

export interface UserUpdateManyWithoutManagerOfGroupsInput {
  create?: UserCreateWithoutManagerOfGroupsInput[] | UserCreateWithoutManagerOfGroupsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutManagerOfGroupsInput[] | UserUpdateWithWhereUniqueWithoutManagerOfGroupsInput
  upsert?: UserUpsertWithWhereUniqueWithoutManagerOfGroupsInput[] | UserUpsertWithWhereUniqueWithoutManagerOfGroupsInput
}

export interface ClassificationContextCreateWithoutOwnerInput {
  slug: String
  displayName: String
  infoHtml?: String
  infoData?: Json
  anyoneCanUse?: Boolean
  anyoneCanAddLabels?: Boolean
  anyoneCanEditLabels?: Boolean
  anyoneCanUpdateInfo?: Boolean
  labels?: ClassificationLabelCreateManyWithoutContextsInput
  group?: GroupCreateOneWithoutOwnedClassificationContextsInput
  creator?: UserCreateOneWithoutCreatedClassificationContextsInput
}

export interface UserUpdateWithWhereUniqueWithoutManagerOfGroupsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutManagerOfGroupsDataInput
}

export interface ClassificationLabelCreateWithoutOwnerInput {
  slug: String
  displayName: String
  infoHtml?: String
  infoData?: Json
  anyoneCanUse?: Boolean
  anyoneCanEditInfo?: Boolean
  contexts?: ClassificationContextCreateManyWithoutLabelsInput
  group?: GroupCreateOneWithoutOwnedClassificationLabelsInput
  creator?: UserCreateOneWithoutCreatedClassificationLabelsInput
}

export interface UserUpdateWithoutManagerOfGroupsDataInput {
  displayName?: String
  systemLogin?: SystemLoginUpdateOneWithoutUserInput
  localLogin?: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations?: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups?: GroupUpdateManyWithoutOwnerInput
  createdGroups?: GroupUpdateManyWithoutCreatorInput
  memberOfGroups?: GroupUpdateManyWithoutMemberUsersInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages?: ImageUpdateManyWithoutOwnerInput
  createdImages?: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations?: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelUpdateManyWithoutCreatorInput
}

export interface UserCreateWithoutManagerOfGroupsInput {
  displayName: String
  systemLogin?: SystemLoginCreateOneWithoutUserInput
  localLogin?: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations?: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups?: GroupCreateManyWithoutOwnerInput
  createdGroups?: GroupCreateManyWithoutCreatorInput
  memberOfGroups?: GroupCreateManyWithoutMemberUsersInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableCreateManyWithoutCreatorInput
  ownedImages?: ImageCreateManyWithoutOwnerInput
  createdImages?: ImageCreateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations?: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelCreateManyWithoutCreatorInput
}

export interface ClassificationContextUpdateManyWithoutCreatorInput {
  create?: ClassificationContextCreateWithoutCreatorInput[] | ClassificationContextCreateWithoutCreatorInput
  connect?: ClassificationContextWhereUniqueInput[] | ClassificationContextWhereUniqueInput
  disconnect?: ClassificationContextWhereUniqueInput[] | ClassificationContextWhereUniqueInput
  delete?: ClassificationContextWhereUniqueInput[] | ClassificationContextWhereUniqueInput
  update?: ClassificationContextUpdateWithWhereUniqueWithoutCreatorInput[] | ClassificationContextUpdateWithWhereUniqueWithoutCreatorInput
  upsert?: ClassificationContextUpsertWithWhereUniqueWithoutCreatorInput[] | ClassificationContextUpsertWithWhereUniqueWithoutCreatorInput
}

export interface ClassificationLabelCreateWithoutCreatorInput {
  slug: String
  displayName: String
  infoHtml?: String
  infoData?: Json
  anyoneCanUse?: Boolean
  anyoneCanEditInfo?: Boolean
  contexts?: ClassificationContextCreateManyWithoutLabelsInput
  owner?: UserCreateOneWithoutOwnedClassificationLabelsInput
  group?: GroupCreateOneWithoutOwnedClassificationLabelsInput
}

export interface ClassificationContextUpdateWithWhereUniqueWithoutCreatorInput {
  where: ClassificationContextWhereUniqueInput
  data: ClassificationContextUpdateWithoutCreatorDataInput
}

export interface UserCreateWithoutCreatedGroupsInput {
  displayName: String
  systemLogin?: SystemLoginCreateOneWithoutUserInput
  localLogin?: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations?: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups?: GroupCreateManyWithoutOwnerInput
  memberOfGroups?: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups?: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableCreateManyWithoutCreatorInput
  ownedImages?: ImageCreateManyWithoutOwnerInput
  createdImages?: ImageCreateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations?: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelCreateManyWithoutCreatorInput
}

export interface ClassificationContextUpdateWithoutCreatorDataInput {
  slug?: String
  displayName?: String
  infoHtml?: String
  infoData?: Json
  anyoneCanUse?: Boolean
  anyoneCanAddLabels?: Boolean
  anyoneCanEditLabels?: Boolean
  anyoneCanUpdateInfo?: Boolean
  labels?: ClassificationLabelUpdateManyWithoutContextsInput
  owner?: UserUpdateOneWithoutOwnedClassificationContextsInput
  group?: GroupUpdateOneWithoutOwnedClassificationContextsInput
}

export interface UserCreateWithoutCreatedAnnotationTasksInput {
  displayName: String
  systemLogin?: SystemLoginCreateOneWithoutUserInput
  localLogin?: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations?: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups?: GroupCreateManyWithoutOwnerInput
  createdGroups?: GroupCreateManyWithoutCreatorInput
  memberOfGroups?: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups?: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableCreateManyWithoutCreatorInput
  ownedImages?: ImageCreateManyWithoutOwnerInput
  createdImages?: ImageCreateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations?: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutOwnerInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelCreateManyWithoutCreatorInput
}

export interface ClassificationContextUpsertWithWhereUniqueWithoutCreatorInput {
  where: ClassificationContextWhereUniqueInput
  update: ClassificationContextUpdateWithoutCreatorDataInput
  create: ClassificationContextCreateWithoutCreatorInput
}

export interface UserCreateWithoutCreatedAnnotationsInput {
  displayName: String
  systemLogin?: SystemLoginCreateOneWithoutUserInput
  localLogin?: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations?: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups?: GroupCreateManyWithoutOwnerInput
  createdGroups?: GroupCreateManyWithoutCreatorInput
  memberOfGroups?: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups?: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableCreateManyWithoutCreatorInput
  ownedImages?: ImageCreateManyWithoutOwnerInput
  createdImages?: ImageCreateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationCreateManyWithoutOwnerInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelCreateManyWithoutCreatorInput
}

export interface ClassificationLabelUpdateManyWithoutCreatorInput {
  create?: ClassificationLabelCreateWithoutCreatorInput[] | ClassificationLabelCreateWithoutCreatorInput
  connect?: ClassificationLabelWhereUniqueInput[] | ClassificationLabelWhereUniqueInput
  disconnect?: ClassificationLabelWhereUniqueInput[] | ClassificationLabelWhereUniqueInput
  delete?: ClassificationLabelWhereUniqueInput[] | ClassificationLabelWhereUniqueInput
  update?: ClassificationLabelUpdateWithWhereUniqueWithoutCreatorInput[] | ClassificationLabelUpdateWithWhereUniqueWithoutCreatorInput
  upsert?: ClassificationLabelUpsertWithWhereUniqueWithoutCreatorInput[] | ClassificationLabelUpsertWithWhereUniqueWithoutCreatorInput
}

export interface UserCreateOneWithoutSystemLoginInput {
  create?: UserCreateWithoutSystemLoginInput
  connect?: UserWhereUniqueInput
}

export interface ClassificationLabelUpdateWithWhereUniqueWithoutCreatorInput {
  where: ClassificationLabelWhereUniqueInput
  data: ClassificationLabelUpdateWithoutCreatorDataInput
}

export interface UserCreateWithoutLocalLoginInput {
  displayName: String
  systemLogin?: SystemLoginCreateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations?: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups?: GroupCreateManyWithoutOwnerInput
  createdGroups?: GroupCreateManyWithoutCreatorInput
  memberOfGroups?: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups?: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableCreateManyWithoutCreatorInput
  ownedImages?: ImageCreateManyWithoutOwnerInput
  createdImages?: ImageCreateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations?: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelCreateManyWithoutCreatorInput
}

export interface ClassificationLabelUpdateWithoutCreatorDataInput {
  slug?: String
  displayName?: String
  infoHtml?: String
  infoData?: Json
  anyoneCanUse?: Boolean
  anyoneCanEditInfo?: Boolean
  contexts?: ClassificationContextUpdateManyWithoutLabelsInput
  owner?: UserUpdateOneWithoutOwnedClassificationLabelsInput
  group?: GroupUpdateOneWithoutOwnedClassificationLabelsInput
}

export interface ClassificationContextSubscriptionWhereInput {
  AND?: ClassificationContextSubscriptionWhereInput[] | ClassificationContextSubscriptionWhereInput
  OR?: ClassificationContextSubscriptionWhereInput[] | ClassificationContextSubscriptionWhereInput
  NOT?: ClassificationContextSubscriptionWhereInput[] | ClassificationContextSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ClassificationContextWhereInput
}

export interface ClassificationLabelUpsertWithWhereUniqueWithoutCreatorInput {
  where: ClassificationLabelWhereUniqueInput
  update: ClassificationLabelUpdateWithoutCreatorDataInput
  create: ClassificationLabelCreateWithoutCreatorInput
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

export interface UserUpsertWithWhereUniqueWithoutManagerOfGroupsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutManagerOfGroupsDataInput
  create: UserCreateWithoutManagerOfGroupsInput
}

export interface ClassificationContextUpdateInput {
  slug?: String
  displayName?: String
  infoHtml?: String
  infoData?: Json
  anyoneCanUse?: Boolean
  anyoneCanAddLabels?: Boolean
  anyoneCanEditLabels?: Boolean
  anyoneCanUpdateInfo?: Boolean
  labels?: ClassificationLabelUpdateManyWithoutContextsInput
  owner?: UserUpdateOneWithoutOwnedClassificationContextsInput
  group?: GroupUpdateOneWithoutOwnedClassificationContextsInput
  creator?: UserUpdateOneWithoutCreatedClassificationContextsInput
}

export interface GroupUpdateManyWithoutManagerOfGroupsInput {
  create?: GroupCreateWithoutManagerOfGroupsInput[] | GroupCreateWithoutManagerOfGroupsInput
  connect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  disconnect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  delete?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  update?: GroupUpdateWithWhereUniqueWithoutManagerOfGroupsInput[] | GroupUpdateWithWhereUniqueWithoutManagerOfGroupsInput
  upsert?: GroupUpsertWithWhereUniqueWithoutManagerOfGroupsInput[] | GroupUpsertWithWhereUniqueWithoutManagerOfGroupsInput
}

export interface SystemLoginWhereUniqueInput {
  id?: ID_Input
  username?: String
  passwordEnvironmentVariable?: String
}

export interface GroupUpdateWithWhereUniqueWithoutManagerOfGroupsInput {
  where: GroupWhereUniqueInput
  data: GroupUpdateWithoutManagerOfGroupsDataInput
}

export interface ClassificationLabelWhereUniqueInput {
  id?: ID_Input
}

export interface GroupUpdateWithoutManagerOfGroupsDataInput {
  displayName?: String
  memberUsers?: UserUpdateManyWithoutMemberOfGroupsInput
  memberGroups?: GroupUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupUpdateManyWithoutMemberGroupsInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutGroupInput
  ownedImages?: ImageUpdateManyWithoutGroupInput
  ownedAnnotations?: AnnotationUpdateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutGroupInput
  owner?: UserUpdateOneWithoutOwnedGroupsInput
  managerUsers?: UserUpdateManyWithoutManagerOfGroupsInput
  managerGroups?: GroupUpdateManyWithoutManagerOfGroupsInput
  creator?: UserUpdateOneWithoutCreatedGroupsInput
}

export interface UserUpdateOneRequiredWithoutLocalLoginInput {
  create?: UserCreateWithoutLocalLoginInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutLocalLoginDataInput
  upsert?: UserUpsertWithoutLocalLoginInput
}

export interface UserUpdateOneWithoutCreatedGroupsInput {
  create?: UserCreateWithoutCreatedGroupsInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutCreatedGroupsDataInput
  upsert?: UserUpsertWithoutCreatedGroupsInput
}

export interface ImageUpsertNestedInput {
  update: ImageUpdateDataInput
  create: ImageCreateInput
}

export interface UserUpdateWithoutCreatedGroupsDataInput {
  displayName?: String
  systemLogin?: SystemLoginUpdateOneWithoutUserInput
  localLogin?: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations?: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups?: GroupUpdateManyWithoutOwnerInput
  memberOfGroups?: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups?: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages?: ImageUpdateManyWithoutOwnerInput
  createdImages?: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations?: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelUpdateManyWithoutCreatorInput
}

export interface GroupUpsertWithWhereUniqueWithoutCreatorInput {
  where: GroupWhereUniqueInput
  update: GroupUpdateWithoutCreatorDataInput
  create: GroupCreateWithoutCreatorInput
}

export interface UserUpsertWithoutCreatedGroupsInput {
  update: UserUpdateWithoutCreatedGroupsDataInput
  create: UserCreateWithoutCreatedGroupsInput
}

export interface GroupUpsertWithWhereUniqueWithoutManagerUsersInput {
  where: GroupWhereUniqueInput
  update: GroupUpdateWithoutManagerUsersDataInput
  create: GroupCreateWithoutManagerUsersInput
}

export interface GroupUpsertWithWhereUniqueWithoutManagerOfGroupsInput {
  where: GroupWhereUniqueInput
  update: GroupUpdateWithoutManagerOfGroupsDataInput
  create: GroupCreateWithoutManagerOfGroupsInput
}

export interface LocalLoginCreateWithoutUserInput {
  username: String
  hashword: String
}

export interface GroupUpdateManyWithoutManagerGroupsInput {
  create?: GroupCreateWithoutManagerGroupsInput[] | GroupCreateWithoutManagerGroupsInput
  connect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  disconnect?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  delete?: GroupWhereUniqueInput[] | GroupWhereUniqueInput
  update?: GroupUpdateWithWhereUniqueWithoutManagerGroupsInput[] | GroupUpdateWithWhereUniqueWithoutManagerGroupsInput
  upsert?: GroupUpsertWithWhereUniqueWithoutManagerGroupsInput[] | GroupUpsertWithWhereUniqueWithoutManagerGroupsInput
}

export interface UserCreateWithoutOwnedImagesInput {
  displayName: String
  systemLogin?: SystemLoginCreateOneWithoutUserInput
  localLogin?: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations?: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups?: GroupCreateManyWithoutOwnerInput
  createdGroups?: GroupCreateManyWithoutCreatorInput
  memberOfGroups?: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups?: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableCreateManyWithoutCreatorInput
  createdImages?: ImageCreateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations?: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelCreateManyWithoutCreatorInput
}

export interface GroupUpdateWithWhereUniqueWithoutManagerGroupsInput {
  where: GroupWhereUniqueInput
  data: GroupUpdateWithoutManagerGroupsDataInput
}

export interface UserCreateWithoutAssignedAnnotationTasksInput {
  displayName: String
  systemLogin?: SystemLoginCreateOneWithoutUserInput
  localLogin?: LocalLoginCreateOneWithoutUserInput
  annotations?: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups?: GroupCreateManyWithoutOwnerInput
  createdGroups?: GroupCreateManyWithoutCreatorInput
  memberOfGroups?: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups?: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableCreateManyWithoutCreatorInput
  ownedImages?: ImageCreateManyWithoutOwnerInput
  createdImages?: ImageCreateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations?: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelCreateManyWithoutCreatorInput
}

export interface GroupUpdateWithoutManagerGroupsDataInput {
  displayName?: String
  memberUsers?: UserUpdateManyWithoutMemberOfGroupsInput
  memberGroups?: GroupUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupUpdateManyWithoutMemberGroupsInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutGroupInput
  ownedImages?: ImageUpdateManyWithoutGroupInput
  ownedAnnotations?: AnnotationUpdateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutGroupInput
  owner?: UserUpdateOneWithoutOwnedGroupsInput
  managerUsers?: UserUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupUpdateManyWithoutManagerGroupsInput
  creator?: UserUpdateOneWithoutCreatedGroupsInput
}

export interface GroupCreateWithoutMemberOfGroupsInput {
  displayName: String
  memberUsers?: UserCreateManyWithoutMemberOfGroupsInput
  memberGroups?: GroupCreateManyWithoutMemberOfGroupsInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutGroupInput
  ownedImages?: ImageCreateManyWithoutGroupInput
  ownedAnnotations?: AnnotationCreateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutGroupInput
  owner?: UserCreateOneWithoutOwnedGroupsInput
  managerUsers?: UserCreateManyWithoutManagerOfGroupsInput
  managerGroups?: GroupCreateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupCreateManyWithoutManagerGroupsInput
  creator?: UserCreateOneWithoutCreatedGroupsInput
}

export interface GroupUpsertWithWhereUniqueWithoutManagerGroupsInput {
  where: GroupWhereUniqueInput
  update: GroupUpdateWithoutManagerGroupsDataInput
  create: GroupCreateWithoutManagerGroupsInput
}

export interface GroupCreateWithoutMemberGroupsInput {
  displayName: String
  memberUsers?: UserCreateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupCreateManyWithoutMemberGroupsInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutGroupInput
  ownedImages?: ImageCreateManyWithoutGroupInput
  ownedAnnotations?: AnnotationCreateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutGroupInput
  owner?: UserCreateOneWithoutOwnedGroupsInput
  managerUsers?: UserCreateManyWithoutManagerOfGroupsInput
  managerGroups?: GroupCreateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupCreateManyWithoutManagerGroupsInput
  creator?: UserCreateOneWithoutCreatedGroupsInput
}

export interface GroupUpsertWithoutOwnedClassificationLabelsInput {
  update: GroupUpdateWithoutOwnedClassificationLabelsDataInput
  create: GroupCreateWithoutOwnedClassificationLabelsInput
}

export interface AnnotationCreateWithoutGroupInput {
  data?: Json
  svgBounds?: String
  anyoneCanView?: Boolean
  anyoneCanSuggestRevision?: Boolean
  annotator: UserCreateOneWithoutAnnotationsInput
  subject: AnnotatableCreateOneInput
  task?: AnnotationTaskCreateOneInput
  classificationLabels?: ClassificationLabelCreateManyInput
  convexHull?: CgPointCreateManyInput
  owner?: UserCreateOneWithoutOwnedAnnotationsInput
  creator?: UserCreateOneWithoutCreatedAnnotationsInput
}

export interface ClassificationLabelUpsertWithWhereUniqueWithoutOwnerInput {
  where: ClassificationLabelWhereUniqueInput
  update: ClassificationLabelUpdateWithoutOwnerDataInput
  create: ClassificationLabelCreateWithoutOwnerInput
}

export interface AnnotationTaskCreateWithoutGroupInput {
  displayName: String
  requirements?: Json
  anyoneCanView?: Boolean
  anyoneCanJoin?: Boolean
  assignees?: UserCreateManyWithoutAssignedAnnotationTasksInput
  subjects?: AnnotatableCreateManyWithoutTasksInput
  classificationContexts?: ClassificationContextCreateManyInput
  classificationLabels?: ClassificationLabelCreateManyInput
  owner?: UserCreateOneWithoutOwnedAnnotationTasksInput
  creator?: UserCreateOneWithoutCreatedAnnotationTasksInput
}

export interface UserUpsertWithoutCreatedClassificationContextsInput {
  update: UserUpdateWithoutCreatedClassificationContextsDataInput
  create: UserCreateWithoutCreatedClassificationContextsInput
}

export interface AnnotatableCreateWithoutCreatorInput {
  displayName?: String
  text?: String
  anyoneCanView?: Boolean
  anyoneCanAnnotate?: Boolean
  image?: ImageCreateOneInput
  tasks?: AnnotationTaskCreateManyWithoutSubjectsInput
  owner?: UserCreateOneWithoutOwnedAnnotatablesInput
  group?: GroupCreateOneWithoutOwnedAnnotatablesInput
}

export interface ClassificationContextUpsertWithWhereUniqueWithoutOwnerInput {
  where: ClassificationContextWhereUniqueInput
  update: ClassificationContextUpdateWithoutOwnerDataInput
  create: ClassificationContextCreateWithoutOwnerInput
}

export interface UserCreateWithoutOwnedClassificationContextsInput {
  displayName: String
  systemLogin?: SystemLoginCreateOneWithoutUserInput
  localLogin?: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations?: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups?: GroupCreateManyWithoutOwnerInput
  createdGroups?: GroupCreateManyWithoutCreatorInput
  memberOfGroups?: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups?: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableCreateManyWithoutCreatorInput
  ownedImages?: ImageCreateManyWithoutOwnerInput
  createdImages?: ImageCreateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations?: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskCreateManyWithoutCreatorInput
  createdClassificationContexts?: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelCreateManyWithoutCreatorInput
}

export interface UserUpsertWithoutOwnedAnnotationTasksInput {
  update: UserUpdateWithoutOwnedAnnotationTasksDataInput
  create: UserCreateWithoutOwnedAnnotationTasksInput
}

export interface ClassificationLabelCreateInput {
  slug: String
  displayName: String
  infoHtml?: String
  infoData?: Json
  anyoneCanUse?: Boolean
  anyoneCanEditInfo?: Boolean
  contexts?: ClassificationContextCreateManyWithoutLabelsInput
  owner?: UserCreateOneWithoutOwnedClassificationLabelsInput
  group?: GroupCreateOneWithoutOwnedClassificationLabelsInput
  creator?: UserCreateOneWithoutCreatedClassificationLabelsInput
}

export interface AnnotationTaskUpsertWithWhereUniqueWithoutCreatorInput {
  where: AnnotationTaskWhereUniqueInput
  update: AnnotationTaskUpdateWithoutCreatorDataInput
  create: AnnotationTaskCreateWithoutCreatorInput
}

export interface UserCreateWithoutCreatedClassificationLabelsInput {
  displayName: String
  systemLogin?: SystemLoginCreateOneWithoutUserInput
  localLogin?: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations?: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups?: GroupCreateManyWithoutOwnerInput
  createdGroups?: GroupCreateManyWithoutCreatorInput
  memberOfGroups?: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups?: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableCreateManyWithoutCreatorInput
  ownedImages?: ImageCreateManyWithoutOwnerInput
  createdImages?: ImageCreateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations?: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutOwnerInput
}

export interface UserUpsertWithoutOwnedGroupsInput {
  update: UserUpdateWithoutOwnedGroupsDataInput
  create: UserCreateWithoutOwnedGroupsInput
}

export interface AnnotationTaskCreateWithoutOwnerInput {
  displayName: String
  requirements?: Json
  anyoneCanView?: Boolean
  anyoneCanJoin?: Boolean
  assignees?: UserCreateManyWithoutAssignedAnnotationTasksInput
  subjects?: AnnotatableCreateManyWithoutTasksInput
  classificationContexts?: ClassificationContextCreateManyInput
  classificationLabels?: ClassificationLabelCreateManyInput
  group?: GroupCreateOneWithoutOwnedAnnotationTasksInput
  creator?: UserCreateOneWithoutCreatedAnnotationTasksInput
}

export interface GroupUpsertWithoutOwnedAnnotationTasksInput {
  update: GroupUpdateWithoutOwnedAnnotationTasksDataInput
  create: GroupCreateWithoutOwnedAnnotationTasksInput
}

export interface UserCreateWithoutOwnedAnnotationTasksInput {
  displayName: String
  systemLogin?: SystemLoginCreateOneWithoutUserInput
  localLogin?: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations?: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups?: GroupCreateManyWithoutOwnerInput
  createdGroups?: GroupCreateManyWithoutCreatorInput
  memberOfGroups?: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups?: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableCreateManyWithoutCreatorInput
  ownedImages?: ImageCreateManyWithoutOwnerInput
  createdImages?: ImageCreateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations?: AnnotationCreateManyWithoutCreatorInput
  createdAnnotationTasks?: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelCreateManyWithoutCreatorInput
}

export interface UserUpdateOneWithoutCreatedAnnotationTasksInput {
  create?: UserCreateWithoutCreatedAnnotationTasksInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutCreatedAnnotationTasksDataInput
  upsert?: UserUpsertWithoutCreatedAnnotationTasksInput
}

export interface GroupCreateWithoutOwnedClassificationLabelsInput {
  displayName: String
  memberUsers?: UserCreateManyWithoutMemberOfGroupsInput
  memberGroups?: GroupCreateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupCreateManyWithoutMemberGroupsInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutGroupInput
  ownedImages?: ImageCreateManyWithoutGroupInput
  ownedAnnotations?: AnnotationCreateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutGroupInput
  owner?: UserCreateOneWithoutOwnedGroupsInput
  managerUsers?: UserCreateManyWithoutManagerOfGroupsInput
  managerGroups?: GroupCreateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupCreateManyWithoutManagerGroupsInput
  creator?: UserCreateOneWithoutCreatedGroupsInput
}

export interface UserUpdateWithoutCreatedAnnotationTasksDataInput {
  displayName?: String
  systemLogin?: SystemLoginUpdateOneWithoutUserInput
  localLogin?: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations?: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups?: GroupUpdateManyWithoutOwnerInput
  createdGroups?: GroupUpdateManyWithoutCreatorInput
  memberOfGroups?: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups?: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages?: ImageUpdateManyWithoutOwnerInput
  createdImages?: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationUpdateManyWithoutOwnerInput
  createdAnnotations?: AnnotationUpdateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutOwnerInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelUpdateManyWithoutCreatorInput
}

export interface GroupCreateWithoutManagerOfGroupsInput {
  displayName: String
  memberUsers?: UserCreateManyWithoutMemberOfGroupsInput
  memberGroups?: GroupCreateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupCreateManyWithoutMemberGroupsInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutGroupInput
  ownedImages?: ImageCreateManyWithoutGroupInput
  ownedAnnotations?: AnnotationCreateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutGroupInput
  owner?: UserCreateOneWithoutOwnedGroupsInput
  managerUsers?: UserCreateManyWithoutManagerOfGroupsInput
  managerGroups?: GroupCreateManyWithoutManagerOfGroupsInput
  creator?: UserCreateOneWithoutCreatedGroupsInput
}

export interface UserUpsertWithoutCreatedAnnotationTasksInput {
  update: UserUpdateWithoutCreatedAnnotationTasksDataInput
  create: UserCreateWithoutCreatedAnnotationTasksInput
}

export interface GroupCreateWithoutOwnedAnnotationsInput {
  displayName: String
  memberUsers?: UserCreateManyWithoutMemberOfGroupsInput
  memberGroups?: GroupCreateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupCreateManyWithoutMemberGroupsInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutGroupInput
  ownedImages?: ImageCreateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutGroupInput
  owner?: UserCreateOneWithoutOwnedGroupsInput
  managerUsers?: UserCreateManyWithoutManagerOfGroupsInput
  managerGroups?: GroupCreateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupCreateManyWithoutManagerGroupsInput
  creator?: UserCreateOneWithoutCreatedGroupsInput
}

export interface AnnotationTaskUpsertWithWhereUniqueWithoutOwnerInput {
  where: AnnotationTaskWhereUniqueInput
  update: AnnotationTaskUpdateWithoutOwnerDataInput
  create: AnnotationTaskCreateWithoutOwnerInput
}

export interface LocalLoginCreateInput {
  username: String
  hashword: String
  user: UserCreateOneWithoutLocalLoginInput
}

export interface UserUpsertWithoutOwnedAnnotationsInput {
  update: UserUpdateWithoutOwnedAnnotationsDataInput
  create: UserCreateWithoutOwnedAnnotationsInput
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
  svgBounds?: String
  svgBounds_not?: String
  svgBounds_in?: String[] | String
  svgBounds_not_in?: String[] | String
  svgBounds_lt?: String
  svgBounds_lte?: String
  svgBounds_gt?: String
  svgBounds_gte?: String
  svgBounds_contains?: String
  svgBounds_not_contains?: String
  svgBounds_starts_with?: String
  svgBounds_not_starts_with?: String
  svgBounds_ends_with?: String
  svgBounds_not_ends_with?: String
  anyoneCanView?: Boolean
  anyoneCanView_not?: Boolean
  anyoneCanSuggestRevision?: Boolean
  anyoneCanSuggestRevision_not?: Boolean
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
  annotator?: UserWhereInput
  subject?: AnnotatableWhereInput
  task?: AnnotationTaskWhereInput
  classificationLabels_every?: ClassificationLabelWhereInput
  classificationLabels_some?: ClassificationLabelWhereInput
  classificationLabels_none?: ClassificationLabelWhereInput
  convexHull_every?: CgPointWhereInput
  convexHull_some?: CgPointWhereInput
  convexHull_none?: CgPointWhereInput
  owner?: UserWhereInput
  group?: GroupWhereInput
  creator?: UserWhereInput
}

export interface GroupUpdateOneWithoutOwnedAnnotationsInput {
  create?: GroupCreateWithoutOwnedAnnotationsInput
  connect?: GroupWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: GroupUpdateWithoutOwnedAnnotationsDataInput
  upsert?: GroupUpsertWithoutOwnedAnnotationsInput
}

export interface ImageUpdateInput {
  uri?: String
  thumbnailUri?: String
  caption?: String
  digestSha3?: String
  digestSha2?: String
  digestSha1?: String
  digestMd5?: String
  sizeInBytes?: Int
  width?: Int
  height?: Int
  anyoneCanView?: Boolean
  owner?: UserUpdateOneWithoutOwnedImagesInput
  group?: GroupUpdateOneWithoutOwnedImagesInput
  creator?: UserUpdateOneWithoutCreatedImagesInput
}

export interface GroupUpdateWithoutOwnedAnnotationsDataInput {
  displayName?: String
  memberUsers?: UserUpdateManyWithoutMemberOfGroupsInput
  memberGroups?: GroupUpdateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupUpdateManyWithoutMemberGroupsInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutGroupInput
  ownedImages?: ImageUpdateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutGroupInput
  owner?: UserUpdateOneWithoutOwnedGroupsInput
  managerUsers?: UserUpdateManyWithoutManagerOfGroupsInput
  managerGroups?: GroupUpdateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupUpdateManyWithoutManagerGroupsInput
  creator?: UserUpdateOneWithoutCreatedGroupsInput
}

export interface AnnotationUpdateInput {
  data?: Json
  svgBounds?: String
  anyoneCanView?: Boolean
  anyoneCanSuggestRevision?: Boolean
  annotator?: UserUpdateOneRequiredWithoutAnnotationsInput
  subject?: AnnotatableUpdateOneRequiredInput
  task?: AnnotationTaskUpdateOneInput
  classificationLabels?: ClassificationLabelUpdateManyInput
  convexHull?: CgPointUpdateManyInput
  owner?: UserUpdateOneWithoutOwnedAnnotationsInput
  group?: GroupUpdateOneWithoutOwnedAnnotationsInput
  creator?: UserUpdateOneWithoutCreatedAnnotationsInput
}

export interface GroupUpsertWithoutOwnedAnnotationsInput {
  update: GroupUpdateWithoutOwnedAnnotationsDataInput
  create: GroupCreateWithoutOwnedAnnotationsInput
}

export interface AnnotationTaskUpsertWithWhereUniqueWithoutSubjectsInput {
  where: AnnotationTaskWhereUniqueInput
  update: AnnotationTaskUpdateWithoutSubjectsDataInput
  create: AnnotationTaskCreateWithoutSubjectsInput
}

export interface AnnotationUpsertWithWhereUniqueWithoutCreatorInput {
  where: AnnotationWhereUniqueInput
  update: AnnotationUpdateWithoutCreatorDataInput
  create: AnnotationCreateWithoutCreatorInput
}

export interface UserCreateInput {
  displayName: String
  systemLogin?: SystemLoginCreateOneWithoutUserInput
  localLogin?: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations?: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups?: GroupCreateManyWithoutOwnerInput
  createdGroups?: GroupCreateManyWithoutCreatorInput
  memberOfGroups?: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups?: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableCreateManyWithoutCreatorInput
  ownedImages?: ImageCreateManyWithoutOwnerInput
  createdImages?: ImageCreateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations?: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelCreateManyWithoutCreatorInput
}

export interface UserUpsertWithoutCreatedClassificationLabelsInput {
  update: UserUpdateWithoutCreatedClassificationLabelsDataInput
  create: UserCreateWithoutCreatedClassificationLabelsInput
}

export interface AnnotatableCreateInput {
  displayName?: String
  text?: String
  anyoneCanView?: Boolean
  anyoneCanAnnotate?: Boolean
  image?: ImageCreateOneInput
  tasks?: AnnotationTaskCreateManyWithoutSubjectsInput
  owner?: UserCreateOneWithoutOwnedAnnotatablesInput
  group?: GroupCreateOneWithoutOwnedAnnotatablesInput
  creator?: UserCreateOneWithoutCreatedAnnotatablesInput
}

export interface ClassificationLabelUpsertWithWhereUniqueWithoutGroupInput {
  where: ClassificationLabelWhereUniqueInput
  update: ClassificationLabelUpdateWithoutGroupDataInput
  create: ClassificationLabelCreateWithoutGroupInput
}

export interface UserCreateWithoutOwnedAnnotatablesInput {
  displayName: String
  systemLogin?: SystemLoginCreateOneWithoutUserInput
  localLogin?: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations?: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups?: GroupCreateManyWithoutOwnerInput
  createdGroups?: GroupCreateManyWithoutCreatorInput
  memberOfGroups?: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups?: GroupCreateManyWithoutManagerUsersInput
  createdAnnotatables?: AnnotatableCreateManyWithoutCreatorInput
  ownedImages?: ImageCreateManyWithoutOwnerInput
  createdImages?: ImageCreateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations?: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelCreateManyWithoutCreatorInput
}

export interface GroupUpsertWithoutOwnedClassificationContextsInput {
  update: GroupUpdateWithoutOwnedClassificationContextsDataInput
  create: GroupCreateWithoutOwnedClassificationContextsInput
}

export interface AnnotatableCreateWithoutOwnerInput {
  displayName?: String
  text?: String
  anyoneCanView?: Boolean
  anyoneCanAnnotate?: Boolean
  image?: ImageCreateOneInput
  tasks?: AnnotationTaskCreateManyWithoutSubjectsInput
  group?: GroupCreateOneWithoutOwnedAnnotatablesInput
  creator?: UserCreateOneWithoutCreatedAnnotatablesInput
}

export interface ClassificationContextUpsertWithWhereUniqueWithoutLabelsInput {
  where: ClassificationContextWhereUniqueInput
  update: ClassificationContextUpdateWithoutLabelsDataInput
  create: ClassificationContextCreateWithoutLabelsInput
}

export interface GroupCreateWithoutOwnedImagesInput {
  displayName: String
  memberUsers?: UserCreateManyWithoutMemberOfGroupsInput
  memberGroups?: GroupCreateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupCreateManyWithoutMemberGroupsInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutGroupInput
  ownedAnnotations?: AnnotationCreateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutGroupInput
  owner?: UserCreateOneWithoutOwnedGroupsInput
  managerUsers?: UserCreateManyWithoutManagerOfGroupsInput
  managerGroups?: GroupCreateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupCreateManyWithoutManagerGroupsInput
  creator?: UserCreateOneWithoutCreatedGroupsInput
}

export interface ClassificationLabelUpsertWithWhereUniqueNestedInput {
  where: ClassificationLabelWhereUniqueInput
  update: ClassificationLabelUpdateDataInput
  create: ClassificationLabelCreateInput
}

export interface GroupCreateWithoutOwnedClassificationContextsInput {
  displayName: String
  memberUsers?: UserCreateManyWithoutMemberOfGroupsInput
  memberGroups?: GroupCreateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupCreateManyWithoutMemberGroupsInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutGroupInput
  ownedImages?: ImageCreateManyWithoutGroupInput
  ownedAnnotations?: AnnotationCreateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutGroupInput
  owner?: UserCreateOneWithoutOwnedGroupsInput
  managerUsers?: UserCreateManyWithoutManagerOfGroupsInput
  managerGroups?: GroupCreateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupCreateManyWithoutManagerGroupsInput
  creator?: UserCreateOneWithoutCreatedGroupsInput
}

export interface AnnotationTaskUpsertNestedInput {
  update: AnnotationTaskUpdateDataInput
  create: AnnotationTaskCreateInput
}

export interface UserCreateWithoutOwnedGroupsInput {
  displayName: String
  systemLogin?: SystemLoginCreateOneWithoutUserInput
  localLogin?: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations?: AnnotationCreateManyWithoutAnnotatorInput
  createdGroups?: GroupCreateManyWithoutCreatorInput
  memberOfGroups?: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups?: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableCreateManyWithoutCreatorInput
  ownedImages?: ImageCreateManyWithoutOwnerInput
  createdImages?: ImageCreateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations?: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelCreateManyWithoutCreatorInput
}

export interface UserUpdateOneWithoutCreatedAnnotationsInput {
  create?: UserCreateWithoutCreatedAnnotationsInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutCreatedAnnotationsDataInput
  upsert?: UserUpsertWithoutCreatedAnnotationsInput
}

export interface ClassificationContextCreateWithoutCreatorInput {
  slug: String
  displayName: String
  infoHtml?: String
  infoData?: Json
  anyoneCanUse?: Boolean
  anyoneCanAddLabels?: Boolean
  anyoneCanEditLabels?: Boolean
  anyoneCanUpdateInfo?: Boolean
  labels?: ClassificationLabelCreateManyWithoutContextsInput
  owner?: UserCreateOneWithoutOwnedClassificationContextsInput
  group?: GroupCreateOneWithoutOwnedClassificationContextsInput
}

export interface UserUpdateWithoutCreatedAnnotationsDataInput {
  displayName?: String
  systemLogin?: SystemLoginUpdateOneWithoutUserInput
  localLogin?: LocalLoginUpdateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskUpdateManyWithoutAssigneesInput
  annotations?: AnnotationUpdateManyWithoutAnnotatorInput
  ownedGroups?: GroupUpdateManyWithoutOwnerInput
  createdGroups?: GroupUpdateManyWithoutCreatorInput
  memberOfGroups?: GroupUpdateManyWithoutMemberUsersInput
  managerOfGroups?: GroupUpdateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableUpdateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableUpdateManyWithoutCreatorInput
  ownedImages?: ImageUpdateManyWithoutOwnerInput
  createdImages?: ImageUpdateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationUpdateManyWithoutOwnerInput
  ownedAnnotationTasks?: AnnotationTaskUpdateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskUpdateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextUpdateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextUpdateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelUpdateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelUpdateManyWithoutCreatorInput
}

export interface UserCreateWithoutCreatedAnnotatablesInput {
  displayName: String
  systemLogin?: SystemLoginCreateOneWithoutUserInput
  localLogin?: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations?: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups?: GroupCreateManyWithoutOwnerInput
  createdGroups?: GroupCreateManyWithoutCreatorInput
  memberOfGroups?: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups?: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutOwnerInput
  ownedImages?: ImageCreateManyWithoutOwnerInput
  createdImages?: ImageCreateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations?: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelCreateManyWithoutCreatorInput
}

export interface UserUpsertWithoutCreatedAnnotationsInput {
  update: UserUpdateWithoutCreatedAnnotationsDataInput
  create: UserCreateWithoutCreatedAnnotationsInput
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
  anyoneCanView?: Boolean
  anyoneCanView_not?: Boolean
  anyoneCanAnnotate?: Boolean
  anyoneCanAnnotate_not?: Boolean
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
  image?: ImageWhereInput
  tasks_every?: AnnotationTaskWhereInput
  tasks_some?: AnnotationTaskWhereInput
  tasks_none?: AnnotationTaskWhereInput
  owner?: UserWhereInput
  group?: GroupWhereInput
  creator?: UserWhereInput
}

export interface AnnotationUpsertWithWhereUniqueWithoutOwnerInput {
  where: AnnotationWhereUniqueInput
  update: AnnotationUpdateWithoutOwnerDataInput
  create: AnnotationCreateWithoutOwnerInput
}

export interface UserUpdateOneRequiredWithoutSystemLoginInput {
  create?: UserCreateWithoutSystemLoginInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutSystemLoginDataInput
  upsert?: UserUpsertWithoutSystemLoginInput
}

export interface UserUpsertWithoutOwnedClassificationContextsInput {
  update: UserUpdateWithoutOwnedClassificationContextsDataInput
  create: UserCreateWithoutOwnedClassificationContextsInput
}

export interface AnnotatableCreateWithoutTasksInput {
  displayName?: String
  text?: String
  anyoneCanView?: Boolean
  anyoneCanAnnotate?: Boolean
  image?: ImageCreateOneInput
  owner?: UserCreateOneWithoutOwnedAnnotatablesInput
  group?: GroupCreateOneWithoutOwnedAnnotatablesInput
  creator?: UserCreateOneWithoutCreatedAnnotatablesInput
}

export interface ClassificationContextUpsertWithWhereUniqueWithoutGroupInput {
  where: ClassificationContextWhereUniqueInput
  update: ClassificationContextUpdateWithoutGroupDataInput
  create: ClassificationContextCreateWithoutGroupInput
}

export interface UserCreateWithoutCreatedImagesInput {
  displayName: String
  systemLogin?: SystemLoginCreateOneWithoutUserInput
  localLogin?: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations?: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups?: GroupCreateManyWithoutOwnerInput
  createdGroups?: GroupCreateManyWithoutCreatorInput
  memberOfGroups?: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups?: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableCreateManyWithoutCreatorInput
  ownedImages?: ImageCreateManyWithoutOwnerInput
  ownedAnnotations?: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations?: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelCreateManyWithoutCreatorInput
}

export interface GroupUpsertWithoutOwnedImagesInput {
  update: GroupUpdateWithoutOwnedImagesDataInput
  create: GroupCreateWithoutOwnedImagesInput
}

export interface AnnotationCreateWithoutOwnerInput {
  data?: Json
  svgBounds?: String
  anyoneCanView?: Boolean
  anyoneCanSuggestRevision?: Boolean
  annotator: UserCreateOneWithoutAnnotationsInput
  subject: AnnotatableCreateOneInput
  task?: AnnotationTaskCreateOneInput
  classificationLabels?: ClassificationLabelCreateManyInput
  convexHull?: CgPointCreateManyInput
  group?: GroupCreateOneWithoutOwnedAnnotationsInput
  creator?: UserCreateOneWithoutCreatedAnnotationsInput
}

export interface ImageUpsertWithWhereUniqueWithoutOwnerInput {
  where: ImageWhereUniqueInput
  update: ImageUpdateWithoutOwnerDataInput
  create: ImageCreateWithoutOwnerInput
}

export interface UserCreateWithoutCreatedClassificationContextsInput {
  displayName: String
  systemLogin?: SystemLoginCreateOneWithoutUserInput
  localLogin?: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations?: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups?: GroupCreateManyWithoutOwnerInput
  createdGroups?: GroupCreateManyWithoutCreatorInput
  memberOfGroups?: GroupCreateManyWithoutMemberUsersInput
  managerOfGroups?: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableCreateManyWithoutCreatorInput
  ownedImages?: ImageCreateManyWithoutOwnerInput
  createdImages?: ImageCreateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations?: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutOwnerInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelCreateManyWithoutCreatorInput
}

export interface UserUpsertWithoutOwnedClassificationLabelsInput {
  update: UserUpdateWithoutOwnedClassificationLabelsDataInput
  create: UserCreateWithoutOwnedClassificationLabelsInput
}

export interface AnnotationCreateInput {
  data?: Json
  svgBounds?: String
  anyoneCanView?: Boolean
  anyoneCanSuggestRevision?: Boolean
  annotator: UserCreateOneWithoutAnnotationsInput
  subject: AnnotatableCreateOneInput
  task?: AnnotationTaskCreateOneInput
  classificationLabels?: ClassificationLabelCreateManyInput
  convexHull?: CgPointCreateManyInput
  owner?: UserCreateOneWithoutOwnedAnnotationsInput
  group?: GroupCreateOneWithoutOwnedAnnotationsInput
  creator?: UserCreateOneWithoutCreatedAnnotationsInput
}

export interface ClassificationLabelUpsertWithWhereUniqueWithoutContextsInput {
  where: ClassificationLabelWhereUniqueInput
  update: ClassificationLabelUpdateWithoutContextsDataInput
  create: ClassificationLabelCreateWithoutContextsInput
}

export interface GroupUpsertWithWhereUniqueWithoutMemberUsersInput {
  where: GroupWhereUniqueInput
  update: GroupUpdateWithoutMemberUsersDataInput
  create: GroupCreateWithoutMemberUsersInput
}

export interface UserUpdateOneWithoutCreatedAnnotatablesInput {
  create?: UserCreateWithoutCreatedAnnotatablesInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutCreatedAnnotatablesDataInput
  upsert?: UserUpsertWithoutCreatedAnnotatablesInput
}

export interface GroupUpsertWithoutOwnedAnnotatablesInput {
  update: GroupUpdateWithoutOwnedAnnotatablesDataInput
  create: GroupCreateWithoutOwnedAnnotatablesInput
}

export interface AnnotationTaskUpsertWithWhereUniqueWithoutGroupInput {
  where: AnnotationTaskWhereUniqueInput
  update: AnnotationTaskUpdateWithoutGroupDataInput
  create: AnnotationTaskCreateWithoutGroupInput
}

export interface ClassificationContextUpsertWithWhereUniqueNestedInput {
  where: ClassificationContextWhereUniqueInput
  update: ClassificationContextUpdateDataInput
  create: ClassificationContextCreateInput
}

export interface UserCreateWithoutMemberOfGroupsInput {
  displayName: String
  systemLogin?: SystemLoginCreateOneWithoutUserInput
  localLogin?: LocalLoginCreateOneWithoutUserInput
  assignedAnnotationTasks?: AnnotationTaskCreateManyWithoutAssigneesInput
  annotations?: AnnotationCreateManyWithoutAnnotatorInput
  ownedGroups?: GroupCreateManyWithoutOwnerInput
  createdGroups?: GroupCreateManyWithoutCreatorInput
  managerOfGroups?: GroupCreateManyWithoutManagerUsersInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutOwnerInput
  createdAnnotatables?: AnnotatableCreateManyWithoutCreatorInput
  ownedImages?: ImageCreateManyWithoutOwnerInput
  createdImages?: ImageCreateManyWithoutCreatorInput
  ownedAnnotations?: AnnotationCreateManyWithoutOwnerInput
  createdAnnotations?: AnnotationCreateManyWithoutCreatorInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutOwnerInput
  createdAnnotationTasks?: AnnotationTaskCreateManyWithoutCreatorInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutOwnerInput
  createdClassificationContexts?: ClassificationContextCreateManyWithoutCreatorInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutOwnerInput
  createdClassificationLabels?: ClassificationLabelCreateManyWithoutCreatorInput
}

export interface AnnotationTaskWhereUniqueInput {
  id?: ID_Input
}

export interface GroupCreateWithoutManagerGroupsInput {
  displayName: String
  memberUsers?: UserCreateManyWithoutMemberOfGroupsInput
  memberGroups?: GroupCreateManyWithoutMemberOfGroupsInput
  memberOfGroups?: GroupCreateManyWithoutMemberGroupsInput
  ownedAnnotatables?: AnnotatableCreateManyWithoutGroupInput
  ownedImages?: ImageCreateManyWithoutGroupInput
  ownedAnnotations?: AnnotationCreateManyWithoutGroupInput
  ownedAnnotationTasks?: AnnotationTaskCreateManyWithoutGroupInput
  ownedClassificationContexts?: ClassificationContextCreateManyWithoutGroupInput
  ownedClassificationLabels?: ClassificationLabelCreateManyWithoutGroupInput
  owner?: UserCreateOneWithoutOwnedGroupsInput
  managerUsers?: UserCreateManyWithoutManagerOfGroupsInput
  managerOfGroups?: GroupCreateManyWithoutManagerGroupsInput
  creator?: UserCreateOneWithoutCreatedGroupsInput
}

export interface CgPointCreateInput {
  x: Float
  y: Float
  xMin?: Float
  yMin?: Float
  xMax?: Float
  yMax?: Float
}

export interface ClassificationLabelCreateWithoutContextsInput {
  slug: String
  displayName: String
  infoHtml?: String
  infoData?: Json
  anyoneCanUse?: Boolean
  anyoneCanEditInfo?: Boolean
  owner?: UserCreateOneWithoutOwnedClassificationLabelsInput
  group?: GroupCreateOneWithoutOwnedClassificationLabelsInput
  creator?: UserCreateOneWithoutCreatedClassificationLabelsInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface ClassificationContextPreviousValues {
  id: ID_Output
  slug: String
  displayName: String
  infoHtml?: String
  infoData?: Json
  anyoneCanUse: Boolean
  anyoneCanAddLabels: Boolean
  anyoneCanEditLabels: Boolean
  anyoneCanUpdateInfo: Boolean
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

export interface ImageSubscriptionPayload {
  mutation: MutationType
  node?: Image
  updatedFields?: String[]
  previousValues?: ImagePreviousValues
}

export interface ClassificationContextSubscriptionPayload {
  mutation: MutationType
  node?: ClassificationContext
  updatedFields?: String[]
  previousValues?: ClassificationContextPreviousValues
}

export interface ClassificationContext extends Node {
  id: ID_Output
  slug: String
  displayName: String
  infoHtml?: String
  infoData?: Json
  labels?: ClassificationLabel[]
  owner?: User
  group?: Group
  anyoneCanUse: Boolean
  anyoneCanAddLabels: Boolean
  anyoneCanEditLabels: Boolean
  anyoneCanUpdateInfo: Boolean
  creator?: User
  createdAt: DateTime
  updatedAt: DateTime
}

export interface CgPoint extends Node {
  id: ID_Output
  x: Float
  y: Float
  xMin?: Float
  yMin?: Float
  xMax?: Float
  yMax?: Float
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface ClassificationContextConnection {
  pageInfo: PageInfo
  edges: ClassificationContextEdge[]
  aggregate: AggregateClassificationContext
}

export interface AggregateClassificationContext {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface ClassificationLabelEdge {
  node: ClassificationLabel
  cursor: String
}

export interface ClassificationLabel extends Node {
  id: ID_Output
  slug: String
  displayName: String
  infoHtml?: String
  infoData?: Json
  contexts?: ClassificationContext[]
  owner?: User
  group?: Group
  anyoneCanUse: Boolean
  anyoneCanEditInfo: Boolean
  creator?: User
  createdAt: DateTime
  updatedAt: DateTime
}

export interface AggregateImage {
  count: Int
}

export interface BatchPayload {
  count: Long
}

/*
 * A connection to a list of items.

 */
export interface ImageConnection {
  pageInfo: PageInfo
  edges: ImageEdge[]
  aggregate: AggregateImage
}

export interface User extends Node {
  id: ID_Output
  displayName: String
  systemLogin?: SystemLogin
  localLogin?: LocalLogin
  assignedAnnotationTasks?: AnnotationTask[]
  annotations?: Annotation[]
  ownedGroups?: Group[]
  createdGroups?: Group[]
  memberOfGroups?: Group[]
  managerOfGroups?: Group[]
  ownedAnnotatables?: Annotatable[]
  createdAnnotatables?: Annotatable[]
  ownedImages?: Image[]
  createdImages?: Image[]
  ownedAnnotations?: Annotation[]
  createdAnnotations?: Annotation[]
  ownedAnnotationTasks?: AnnotationTask[]
  createdAnnotationTasks?: AnnotationTask[]
  ownedClassificationContexts?: ClassificationContext[]
  createdClassificationContexts?: ClassificationContext[]
  ownedClassificationLabels?: ClassificationLabel[]
  createdClassificationLabels?: ClassificationLabel[]
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * An edge in a connection.

 */
export interface CgPointEdge {
  node: CgPoint
  cursor: String
}

export interface ClassificationLabelPreviousValues {
  id: ID_Output
  slug: String
  displayName: String
  infoHtml?: String
  infoData?: Json
  anyoneCanUse: Boolean
  anyoneCanEditInfo: Boolean
  createdAt: DateTime
  updatedAt: DateTime
}

export interface AggregateAnnotatable {
  count: Int
}

export interface ClassificationLabelSubscriptionPayload {
  mutation: MutationType
  node?: ClassificationLabel
  updatedFields?: String[]
  previousValues?: ClassificationLabelPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface AnnotatableConnection {
  pageInfo: PageInfo
  edges: AnnotatableEdge[]
  aggregate: AggregateAnnotatable
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
export interface AnnotationTaskEdge {
  node: AnnotationTask
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  displayName: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface AggregateAnnotation {
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

/*
 * A connection to a list of items.

 */
export interface AnnotationConnection {
  pageInfo: PageInfo
  edges: AnnotationEdge[]
  aggregate: AggregateAnnotation
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
export interface GroupEdge {
  node: Group
  cursor: String
}

export interface SystemLoginPreviousValues {
  id: ID_Output
  username: String
  passwordEnvironmentVariable: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface AggregateLocalLogin {
  count: Int
}

export interface Annotation extends Node {
  id: ID_Output
  annotator: User
  subject: Annotatable
  task?: AnnotationTask
  data?: Json
  classificationLabels?: ClassificationLabel[]
  svgBounds?: String
  convexHull?: CgPoint[]
  owner?: User
  group?: Group
  anyoneCanView: Boolean
  anyoneCanSuggestRevision: Boolean
  creator?: User
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

export interface LocalLoginSubscriptionPayload {
  mutation: MutationType
  node?: LocalLogin
  updatedFields?: String[]
  previousValues?: LocalLoginPreviousValues
}

/*
 * An edge in a connection.

 */
export interface SystemLoginEdge {
  node: SystemLogin
  cursor: String
}

export interface LocalLoginPreviousValues {
  id: ID_Output
  username: String
  hashword: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface AggregateUser {
  count: Int
}

export interface ImagePreviousValues {
  id: ID_Output
  uri: String
  thumbnailUri?: String
  caption?: String
  digestSha3?: String
  digestSha2?: String
  digestSha1?: String
  digestMd5?: String
  sizeInBytes?: Int
  width?: Int
  height?: Int
  anyoneCanView: Boolean
  createdAt: DateTime
  updatedAt: DateTime
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

export interface GroupSubscriptionPayload {
  mutation: MutationType
  node?: Group
  updatedFields?: String[]
  previousValues?: GroupPreviousValues
}

export interface AggregateClassificationLabel {
  count: Int
}

export interface GroupPreviousValues {
  id: ID_Output
  displayName: String
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * An edge in a connection.

 */
export interface ImageEdge {
  node: Image
  cursor: String
}

export interface Group extends Node {
  id: ID_Output
  displayName: String
  memberUsers?: User[]
  memberGroups?: Group[]
  memberOfGroups?: Group[]
  ownedAnnotatables?: Annotatable[]
  ownedImages?: Image[]
  ownedAnnotations?: Annotation[]
  ownedAnnotationTasks?: AnnotationTask[]
  ownedClassificationContexts?: ClassificationContext[]
  ownedClassificationLabels?: ClassificationLabel[]
  owner?: User
  managerUsers?: User[]
  managerGroups?: Group[]
  managerOfGroups?: Group[]
  creator?: User
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface CgPointConnection {
  pageInfo: PageInfo
  edges: CgPointEdge[]
  aggregate: AggregateCgPoint
}

export interface AnnotationSubscriptionPayload {
  mutation: MutationType
  node?: Annotation
  updatedFields?: String[]
  previousValues?: AnnotationPreviousValues
}

export interface AggregateAnnotationTask {
  count: Int
}

export interface AnnotationPreviousValues {
  id: ID_Output
  data?: Json
  svgBounds?: String
  anyoneCanView: Boolean
  anyoneCanSuggestRevision: Boolean
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * An edge in a connection.

 */
export interface AnnotationEdge {
  node: Annotation
  cursor: String
}

export interface Image extends Node {
  id: ID_Output
  uri: String
  thumbnailUri?: String
  caption?: String
  digestSha3?: String
  digestSha2?: String
  digestSha1?: String
  digestMd5?: String
  sizeInBytes?: Int
  width?: Int
  height?: Int
  owner?: User
  group?: Group
  anyoneCanView: Boolean
  creator?: User
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface GroupConnection {
  pageInfo: PageInfo
  edges: GroupEdge[]
  aggregate: AggregateGroup
}

export interface AnnotationTaskSubscriptionPayload {
  mutation: MutationType
  node?: AnnotationTask
  updatedFields?: String[]
  previousValues?: AnnotationTaskPreviousValues
}

export interface AggregateSystemLogin {
  count: Int
}

export interface AnnotationTaskPreviousValues {
  id: ID_Output
  displayName: String
  requirements?: Json
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface Annotatable extends Node {
  id: ID_Output
  displayName?: String
  text?: String
  image?: Image
  tasks?: AnnotationTask[]
  owner?: User
  group?: Group
  anyoneCanView: Boolean
  anyoneCanAnnotate: Boolean
  creator?: User
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface ClassificationLabelConnection {
  pageInfo: PageInfo
  edges: ClassificationLabelEdge[]
  aggregate: AggregateClassificationLabel
}

export interface AnnotatableSubscriptionPayload {
  mutation: MutationType
  node?: Annotatable
  updatedFields?: String[]
  previousValues?: AnnotatablePreviousValues
}

/*
 * An edge in a connection.

 */
export interface AnnotatableEdge {
  node: Annotatable
  cursor: String
}

export interface AnnotatablePreviousValues {
  id: ID_Output
  displayName?: String
  text?: String
  anyoneCanView: Boolean
  anyoneCanAnnotate: Boolean
  createdAt: DateTime
  updatedAt: DateTime
}

export interface AggregateGroup {
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

export interface LocalLogin extends Node {
  id: ID_Output
  user: User
  username: String
  hashword: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface CgPointPreviousValues {
  id: ID_Output
  x: Float
  y: Float
  xMin?: Float
  yMin?: Float
  xMax?: Float
  yMax?: Float
  createdAt: DateTime
  updatedAt: DateTime
}

export interface CgPointSubscriptionPayload {
  mutation: MutationType
  node?: CgPoint
  updatedFields?: String[]
  previousValues?: CgPointPreviousValues
}

export interface AnnotationTask extends Node {
  id: ID_Output
  assignees?: User[]
  displayName: String
  subjects?: Annotatable[]
  requirements?: Json
  classificationContexts?: ClassificationContext[]
  classificationLabels?: ClassificationLabel[]
  owner?: User
  group?: Group
  anyoneCanView: Boolean
  anyoneCanJoin: Boolean
  creator?: User
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * An edge in a connection.

 */
export interface ClassificationContextEdge {
  node: ClassificationContext
  cursor: String
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
export interface AnnotationTaskConnection {
  pageInfo: PageInfo
  edges: AnnotationTaskEdge[]
  aggregate: AggregateAnnotationTask
}

export interface AggregateCgPoint {
  count: Int
}

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

export type DateTime = Date | string

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
Raw JSON value
*/
export type Json = any

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number