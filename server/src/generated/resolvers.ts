import { GraphQLResolveInfo } from "graphql";

export interface ITypeMap {
  Context: any;
  ImageOrderByInput: any;
  AnnotationTaskOrderByInput: any;
  AnnotationOrderByInput: any;
  GroupOrderByInput: any;
  AnnotatableOrderByInput: any;
  ClassificationContextOrderByInput: any;
  ClassificationLabelOrderByInput: any;
  UserOrderByInput: any;
  CgPointOrderByInput: any;

  QueryParent: any;
  MutationParent: any;
  AuthPayloadParent: any;
  UserParent: any;
  ImageParent: any;
  AnnotationTaskParent: any;
  ImageConnectionParent: any;
  AnnotationParent: any;
  SystemLoginParent: any;
  LocalLoginParent: any;
  GroupParent: any;
  AnnotatableParent: any;
  ClassificationContextParent: any;
  ClassificationLabelParent: any;
  PageInfoParent: any;
  ImageEdgeParent: any;
  AggregateImageParent: any;
  CgPointParent: any;
}

export interface AnnotateImageInput {
  subjectId: string;
  data: string;
  taskId: string;
}
export interface DefineImageAnnotationTaskInput {
  assignees: string;
  subjects: string;
  requirements: string;
}
export interface AnnotatableImageInput {
  id: string;
  imageUri: string;
}
export interface ImageWhereInput {
  AND: string;
  OR: string;
  NOT: string;
  id: string;
  id_not: string;
  id_in: string;
  id_not_in: string;
  id_lt: string;
  id_lte: string;
  id_gt: string;
  id_gte: string;
  id_contains: string;
  id_not_contains: string;
  id_starts_with: string;
  id_not_starts_with: string;
  id_ends_with: string;
  id_not_ends_with: string;
  uri: string;
  uri_not: string;
  uri_in: string;
  uri_not_in: string;
  uri_lt: string;
  uri_lte: string;
  uri_gt: string;
  uri_gte: string;
  uri_contains: string;
  uri_not_contains: string;
  uri_starts_with: string;
  uri_not_starts_with: string;
  uri_ends_with: string;
  uri_not_ends_with: string;
  thumbnailUri: string;
  thumbnailUri_not: string;
  thumbnailUri_in: string;
  thumbnailUri_not_in: string;
  thumbnailUri_lt: string;
  thumbnailUri_lte: string;
  thumbnailUri_gt: string;
  thumbnailUri_gte: string;
  thumbnailUri_contains: string;
  thumbnailUri_not_contains: string;
  thumbnailUri_starts_with: string;
  thumbnailUri_not_starts_with: string;
  thumbnailUri_ends_with: string;
  thumbnailUri_not_ends_with: string;
  caption: string;
  caption_not: string;
  caption_in: string;
  caption_not_in: string;
  caption_lt: string;
  caption_lte: string;
  caption_gt: string;
  caption_gte: string;
  caption_contains: string;
  caption_not_contains: string;
  caption_starts_with: string;
  caption_not_starts_with: string;
  caption_ends_with: string;
  caption_not_ends_with: string;
  digestSha3: string;
  digestSha3_not: string;
  digestSha3_in: string;
  digestSha3_not_in: string;
  digestSha3_lt: string;
  digestSha3_lte: string;
  digestSha3_gt: string;
  digestSha3_gte: string;
  digestSha3_contains: string;
  digestSha3_not_contains: string;
  digestSha3_starts_with: string;
  digestSha3_not_starts_with: string;
  digestSha3_ends_with: string;
  digestSha3_not_ends_with: string;
  digestSha2: string;
  digestSha2_not: string;
  digestSha2_in: string;
  digestSha2_not_in: string;
  digestSha2_lt: string;
  digestSha2_lte: string;
  digestSha2_gt: string;
  digestSha2_gte: string;
  digestSha2_contains: string;
  digestSha2_not_contains: string;
  digestSha2_starts_with: string;
  digestSha2_not_starts_with: string;
  digestSha2_ends_with: string;
  digestSha2_not_ends_with: string;
  digestSha1: string;
  digestSha1_not: string;
  digestSha1_in: string;
  digestSha1_not_in: string;
  digestSha1_lt: string;
  digestSha1_lte: string;
  digestSha1_gt: string;
  digestSha1_gte: string;
  digestSha1_contains: string;
  digestSha1_not_contains: string;
  digestSha1_starts_with: string;
  digestSha1_not_starts_with: string;
  digestSha1_ends_with: string;
  digestSha1_not_ends_with: string;
  digestMd5: string;
  digestMd5_not: string;
  digestMd5_in: string;
  digestMd5_not_in: string;
  digestMd5_lt: string;
  digestMd5_lte: string;
  digestMd5_gt: string;
  digestMd5_gte: string;
  digestMd5_contains: string;
  digestMd5_not_contains: string;
  digestMd5_starts_with: string;
  digestMd5_not_starts_with: string;
  digestMd5_ends_with: string;
  digestMd5_not_ends_with: string;
  sizeInBytes: number;
  sizeInBytes_not: number;
  sizeInBytes_in: number;
  sizeInBytes_not_in: number;
  sizeInBytes_lt: number;
  sizeInBytes_lte: number;
  sizeInBytes_gt: number;
  sizeInBytes_gte: number;
  width: number;
  width_not: number;
  width_in: number;
  width_not_in: number;
  width_lt: number;
  width_lte: number;
  width_gt: number;
  width_gte: number;
  height: number;
  height_not: number;
  height_in: number;
  height_not_in: number;
  height_lt: number;
  height_lte: number;
  height_gt: number;
  height_gte: number;
  anyoneCanView: boolean;
  anyoneCanView_not: boolean;
  createdAt: string;
  createdAt_not: string;
  createdAt_in: string;
  createdAt_not_in: string;
  createdAt_lt: string;
  createdAt_lte: string;
  createdAt_gt: string;
  createdAt_gte: string;
  updatedAt: string;
  updatedAt_not: string;
  updatedAt_in: string;
  updatedAt_not_in: string;
  updatedAt_lt: string;
  updatedAt_lte: string;
  updatedAt_gt: string;
  updatedAt_gte: string;
  owner: string;
  group: string;
  creator: string;
}
export interface AnnotationTaskWhereInput {
  AND: string;
  OR: string;
  NOT: string;
  id: string;
  id_not: string;
  id_in: string;
  id_not_in: string;
  id_lt: string;
  id_lte: string;
  id_gt: string;
  id_gte: string;
  id_contains: string;
  id_not_contains: string;
  id_starts_with: string;
  id_not_starts_with: string;
  id_ends_with: string;
  id_not_ends_with: string;
  displayName: string;
  displayName_not: string;
  displayName_in: string;
  displayName_not_in: string;
  displayName_lt: string;
  displayName_lte: string;
  displayName_gt: string;
  displayName_gte: string;
  displayName_contains: string;
  displayName_not_contains: string;
  displayName_starts_with: string;
  displayName_not_starts_with: string;
  displayName_ends_with: string;
  displayName_not_ends_with: string;
  anyoneCanView: boolean;
  anyoneCanView_not: boolean;
  anyoneCanJoin: boolean;
  anyoneCanJoin_not: boolean;
  createdAt: string;
  createdAt_not: string;
  createdAt_in: string;
  createdAt_not_in: string;
  createdAt_lt: string;
  createdAt_lte: string;
  createdAt_gt: string;
  createdAt_gte: string;
  updatedAt: string;
  updatedAt_not: string;
  updatedAt_in: string;
  updatedAt_not_in: string;
  updatedAt_lt: string;
  updatedAt_lte: string;
  updatedAt_gt: string;
  updatedAt_gte: string;
  assignees_every: string;
  assignees_some: string;
  assignees_none: string;
  subjects_every: string;
  subjects_some: string;
  subjects_none: string;
  classificationContexts_every: string;
  classificationContexts_some: string;
  classificationContexts_none: string;
  classificationLabels_every: string;
  classificationLabels_some: string;
  classificationLabels_none: string;
  owner: string;
  group: string;
  creator: string;
}
export interface AnnotationWhereInput {
  AND: string;
  OR: string;
  NOT: string;
  id: string;
  id_not: string;
  id_in: string;
  id_not_in: string;
  id_lt: string;
  id_lte: string;
  id_gt: string;
  id_gte: string;
  id_contains: string;
  id_not_contains: string;
  id_starts_with: string;
  id_not_starts_with: string;
  id_ends_with: string;
  id_not_ends_with: string;
  svgBounds: string;
  svgBounds_not: string;
  svgBounds_in: string;
  svgBounds_not_in: string;
  svgBounds_lt: string;
  svgBounds_lte: string;
  svgBounds_gt: string;
  svgBounds_gte: string;
  svgBounds_contains: string;
  svgBounds_not_contains: string;
  svgBounds_starts_with: string;
  svgBounds_not_starts_with: string;
  svgBounds_ends_with: string;
  svgBounds_not_ends_with: string;
  anyoneCanView: boolean;
  anyoneCanView_not: boolean;
  anyoneCanSuggestRevision: boolean;
  anyoneCanSuggestRevision_not: boolean;
  createdAt: string;
  createdAt_not: string;
  createdAt_in: string;
  createdAt_not_in: string;
  createdAt_lt: string;
  createdAt_lte: string;
  createdAt_gt: string;
  createdAt_gte: string;
  updatedAt: string;
  updatedAt_not: string;
  updatedAt_in: string;
  updatedAt_not_in: string;
  updatedAt_lt: string;
  updatedAt_lte: string;
  updatedAt_gt: string;
  updatedAt_gte: string;
  annotator: string;
  subject: string;
  task: string;
  classificationLabels_every: string;
  classificationLabels_some: string;
  classificationLabels_none: string;
  convexHull_every: string;
  convexHull_some: string;
  convexHull_none: string;
  owner: string;
  group: string;
  creator: string;
}
export interface GroupWhereInput {
  AND: string;
  OR: string;
  NOT: string;
  id: string;
  id_not: string;
  id_in: string;
  id_not_in: string;
  id_lt: string;
  id_lte: string;
  id_gt: string;
  id_gte: string;
  id_contains: string;
  id_not_contains: string;
  id_starts_with: string;
  id_not_starts_with: string;
  id_ends_with: string;
  id_not_ends_with: string;
  displayName: string;
  displayName_not: string;
  displayName_in: string;
  displayName_not_in: string;
  displayName_lt: string;
  displayName_lte: string;
  displayName_gt: string;
  displayName_gte: string;
  displayName_contains: string;
  displayName_not_contains: string;
  displayName_starts_with: string;
  displayName_not_starts_with: string;
  displayName_ends_with: string;
  displayName_not_ends_with: string;
  createdAt: string;
  createdAt_not: string;
  createdAt_in: string;
  createdAt_not_in: string;
  createdAt_lt: string;
  createdAt_lte: string;
  createdAt_gt: string;
  createdAt_gte: string;
  updatedAt: string;
  updatedAt_not: string;
  updatedAt_in: string;
  updatedAt_not_in: string;
  updatedAt_lt: string;
  updatedAt_lte: string;
  updatedAt_gt: string;
  updatedAt_gte: string;
  memberUsers_every: string;
  memberUsers_some: string;
  memberUsers_none: string;
  memberGroups_every: string;
  memberGroups_some: string;
  memberGroups_none: string;
  memberOfGroups_every: string;
  memberOfGroups_some: string;
  memberOfGroups_none: string;
  ownedAnnotatables_every: string;
  ownedAnnotatables_some: string;
  ownedAnnotatables_none: string;
  ownedImages_every: string;
  ownedImages_some: string;
  ownedImages_none: string;
  ownedAnnotations_every: string;
  ownedAnnotations_some: string;
  ownedAnnotations_none: string;
  ownedAnnotationTasks_every: string;
  ownedAnnotationTasks_some: string;
  ownedAnnotationTasks_none: string;
  ownedClassificationContexts_every: string;
  ownedClassificationContexts_some: string;
  ownedClassificationContexts_none: string;
  ownedClassificationLabels_every: string;
  ownedClassificationLabels_some: string;
  ownedClassificationLabels_none: string;
  owner: string;
  managerUsers_every: string;
  managerUsers_some: string;
  managerUsers_none: string;
  managerGroups_every: string;
  managerGroups_some: string;
  managerGroups_none: string;
  managerOfGroups_every: string;
  managerOfGroups_some: string;
  managerOfGroups_none: string;
  creator: string;
}
export interface AnnotatableWhereInput {
  AND: string;
  OR: string;
  NOT: string;
  id: string;
  id_not: string;
  id_in: string;
  id_not_in: string;
  id_lt: string;
  id_lte: string;
  id_gt: string;
  id_gte: string;
  id_contains: string;
  id_not_contains: string;
  id_starts_with: string;
  id_not_starts_with: string;
  id_ends_with: string;
  id_not_ends_with: string;
  displayName: string;
  displayName_not: string;
  displayName_in: string;
  displayName_not_in: string;
  displayName_lt: string;
  displayName_lte: string;
  displayName_gt: string;
  displayName_gte: string;
  displayName_contains: string;
  displayName_not_contains: string;
  displayName_starts_with: string;
  displayName_not_starts_with: string;
  displayName_ends_with: string;
  displayName_not_ends_with: string;
  text: string;
  text_not: string;
  text_in: string;
  text_not_in: string;
  text_lt: string;
  text_lte: string;
  text_gt: string;
  text_gte: string;
  text_contains: string;
  text_not_contains: string;
  text_starts_with: string;
  text_not_starts_with: string;
  text_ends_with: string;
  text_not_ends_with: string;
  anyoneCanView: boolean;
  anyoneCanView_not: boolean;
  anyoneCanAnnotate: boolean;
  anyoneCanAnnotate_not: boolean;
  createdAt: string;
  createdAt_not: string;
  createdAt_in: string;
  createdAt_not_in: string;
  createdAt_lt: string;
  createdAt_lte: string;
  createdAt_gt: string;
  createdAt_gte: string;
  updatedAt: string;
  updatedAt_not: string;
  updatedAt_in: string;
  updatedAt_not_in: string;
  updatedAt_lt: string;
  updatedAt_lte: string;
  updatedAt_gt: string;
  updatedAt_gte: string;
  image: string;
  tasks_every: string;
  tasks_some: string;
  tasks_none: string;
  owner: string;
  group: string;
  creator: string;
}
export interface ClassificationContextWhereInput {
  AND: string;
  OR: string;
  NOT: string;
  id: string;
  id_not: string;
  id_in: string;
  id_not_in: string;
  id_lt: string;
  id_lte: string;
  id_gt: string;
  id_gte: string;
  id_contains: string;
  id_not_contains: string;
  id_starts_with: string;
  id_not_starts_with: string;
  id_ends_with: string;
  id_not_ends_with: string;
  slug: string;
  slug_not: string;
  slug_in: string;
  slug_not_in: string;
  slug_lt: string;
  slug_lte: string;
  slug_gt: string;
  slug_gte: string;
  slug_contains: string;
  slug_not_contains: string;
  slug_starts_with: string;
  slug_not_starts_with: string;
  slug_ends_with: string;
  slug_not_ends_with: string;
  displayName: string;
  displayName_not: string;
  displayName_in: string;
  displayName_not_in: string;
  displayName_lt: string;
  displayName_lte: string;
  displayName_gt: string;
  displayName_gte: string;
  displayName_contains: string;
  displayName_not_contains: string;
  displayName_starts_with: string;
  displayName_not_starts_with: string;
  displayName_ends_with: string;
  displayName_not_ends_with: string;
  infoHtml: string;
  infoHtml_not: string;
  infoHtml_in: string;
  infoHtml_not_in: string;
  infoHtml_lt: string;
  infoHtml_lte: string;
  infoHtml_gt: string;
  infoHtml_gte: string;
  infoHtml_contains: string;
  infoHtml_not_contains: string;
  infoHtml_starts_with: string;
  infoHtml_not_starts_with: string;
  infoHtml_ends_with: string;
  infoHtml_not_ends_with: string;
  anyoneCanUse: boolean;
  anyoneCanUse_not: boolean;
  anyoneCanAddLabels: boolean;
  anyoneCanAddLabels_not: boolean;
  anyoneCanEditLabels: boolean;
  anyoneCanEditLabels_not: boolean;
  anyoneCanUpdateInfo: boolean;
  anyoneCanUpdateInfo_not: boolean;
  createdAt: string;
  createdAt_not: string;
  createdAt_in: string;
  createdAt_not_in: string;
  createdAt_lt: string;
  createdAt_lte: string;
  createdAt_gt: string;
  createdAt_gte: string;
  updatedAt: string;
  updatedAt_not: string;
  updatedAt_in: string;
  updatedAt_not_in: string;
  updatedAt_lt: string;
  updatedAt_lte: string;
  updatedAt_gt: string;
  updatedAt_gte: string;
  labels_every: string;
  labels_some: string;
  labels_none: string;
  owner: string;
  group: string;
  creator: string;
}
export interface ClassificationLabelWhereInput {
  AND: string;
  OR: string;
  NOT: string;
  id: string;
  id_not: string;
  id_in: string;
  id_not_in: string;
  id_lt: string;
  id_lte: string;
  id_gt: string;
  id_gte: string;
  id_contains: string;
  id_not_contains: string;
  id_starts_with: string;
  id_not_starts_with: string;
  id_ends_with: string;
  id_not_ends_with: string;
  slug: string;
  slug_not: string;
  slug_in: string;
  slug_not_in: string;
  slug_lt: string;
  slug_lte: string;
  slug_gt: string;
  slug_gte: string;
  slug_contains: string;
  slug_not_contains: string;
  slug_starts_with: string;
  slug_not_starts_with: string;
  slug_ends_with: string;
  slug_not_ends_with: string;
  displayName: string;
  displayName_not: string;
  displayName_in: string;
  displayName_not_in: string;
  displayName_lt: string;
  displayName_lte: string;
  displayName_gt: string;
  displayName_gte: string;
  displayName_contains: string;
  displayName_not_contains: string;
  displayName_starts_with: string;
  displayName_not_starts_with: string;
  displayName_ends_with: string;
  displayName_not_ends_with: string;
  infoHtml: string;
  infoHtml_not: string;
  infoHtml_in: string;
  infoHtml_not_in: string;
  infoHtml_lt: string;
  infoHtml_lte: string;
  infoHtml_gt: string;
  infoHtml_gte: string;
  infoHtml_contains: string;
  infoHtml_not_contains: string;
  infoHtml_starts_with: string;
  infoHtml_not_starts_with: string;
  infoHtml_ends_with: string;
  infoHtml_not_ends_with: string;
  anyoneCanUse: boolean;
  anyoneCanUse_not: boolean;
  anyoneCanEditInfo: boolean;
  anyoneCanEditInfo_not: boolean;
  createdAt: string;
  createdAt_not: string;
  createdAt_in: string;
  createdAt_not_in: string;
  createdAt_lt: string;
  createdAt_lte: string;
  createdAt_gt: string;
  createdAt_gte: string;
  updatedAt: string;
  updatedAt_not: string;
  updatedAt_in: string;
  updatedAt_not_in: string;
  updatedAt_lt: string;
  updatedAt_lte: string;
  updatedAt_gt: string;
  updatedAt_gte: string;
  contexts_every: string;
  contexts_some: string;
  contexts_none: string;
  owner: string;
  group: string;
  creator: string;
}
export interface UserWhereInput {
  AND: string;
  OR: string;
  NOT: string;
  id: string;
  id_not: string;
  id_in: string;
  id_not_in: string;
  id_lt: string;
  id_lte: string;
  id_gt: string;
  id_gte: string;
  id_contains: string;
  id_not_contains: string;
  id_starts_with: string;
  id_not_starts_with: string;
  id_ends_with: string;
  id_not_ends_with: string;
  displayName: string;
  displayName_not: string;
  displayName_in: string;
  displayName_not_in: string;
  displayName_lt: string;
  displayName_lte: string;
  displayName_gt: string;
  displayName_gte: string;
  displayName_contains: string;
  displayName_not_contains: string;
  displayName_starts_with: string;
  displayName_not_starts_with: string;
  displayName_ends_with: string;
  displayName_not_ends_with: string;
  emailAddress: string;
  emailAddress_not: string;
  emailAddress_in: string;
  emailAddress_not_in: string;
  emailAddress_lt: string;
  emailAddress_lte: string;
  emailAddress_gt: string;
  emailAddress_gte: string;
  emailAddress_contains: string;
  emailAddress_not_contains: string;
  emailAddress_starts_with: string;
  emailAddress_not_starts_with: string;
  emailAddress_ends_with: string;
  emailAddress_not_ends_with: string;
  createdAt: string;
  createdAt_not: string;
  createdAt_in: string;
  createdAt_not_in: string;
  createdAt_lt: string;
  createdAt_lte: string;
  createdAt_gt: string;
  createdAt_gte: string;
  updatedAt: string;
  updatedAt_not: string;
  updatedAt_in: string;
  updatedAt_not_in: string;
  updatedAt_lt: string;
  updatedAt_lte: string;
  updatedAt_gt: string;
  updatedAt_gte: string;
  systemLogin: string;
  localLogin: string;
  assignedAnnotationTasks_every: string;
  assignedAnnotationTasks_some: string;
  assignedAnnotationTasks_none: string;
  annotations_every: string;
  annotations_some: string;
  annotations_none: string;
  ownedGroups_every: string;
  ownedGroups_some: string;
  ownedGroups_none: string;
  createdGroups_every: string;
  createdGroups_some: string;
  createdGroups_none: string;
  memberOfGroups_every: string;
  memberOfGroups_some: string;
  memberOfGroups_none: string;
  managerOfGroups_every: string;
  managerOfGroups_some: string;
  managerOfGroups_none: string;
  ownedAnnotatables_every: string;
  ownedAnnotatables_some: string;
  ownedAnnotatables_none: string;
  createdAnnotatables_every: string;
  createdAnnotatables_some: string;
  createdAnnotatables_none: string;
  ownedImages_every: string;
  ownedImages_some: string;
  ownedImages_none: string;
  createdImages_every: string;
  createdImages_some: string;
  createdImages_none: string;
  ownedAnnotations_every: string;
  ownedAnnotations_some: string;
  ownedAnnotations_none: string;
  createdAnnotations_every: string;
  createdAnnotations_some: string;
  createdAnnotations_none: string;
  ownedAnnotationTasks_every: string;
  ownedAnnotationTasks_some: string;
  ownedAnnotationTasks_none: string;
  createdAnnotationTasks_every: string;
  createdAnnotationTasks_some: string;
  createdAnnotationTasks_none: string;
  ownedClassificationContexts_every: string;
  ownedClassificationContexts_some: string;
  ownedClassificationContexts_none: string;
  createdClassificationContexts_every: string;
  createdClassificationContexts_some: string;
  createdClassificationContexts_none: string;
  ownedClassificationLabels_every: string;
  ownedClassificationLabels_some: string;
  ownedClassificationLabels_none: string;
  createdClassificationLabels_every: string;
  createdClassificationLabels_some: string;
  createdClassificationLabels_none: string;
}
export interface CgPointWhereInput {
  AND: string;
  OR: string;
  NOT: string;
  id: string;
  id_not: string;
  id_in: string;
  id_not_in: string;
  id_lt: string;
  id_lte: string;
  id_gt: string;
  id_gte: string;
  id_contains: string;
  id_not_contains: string;
  id_starts_with: string;
  id_not_starts_with: string;
  id_ends_with: string;
  id_not_ends_with: string;
  x: number;
  x_not: number;
  x_in: number;
  x_not_in: number;
  x_lt: number;
  x_lte: number;
  x_gt: number;
  x_gte: number;
  y: number;
  y_not: number;
  y_in: number;
  y_not_in: number;
  y_lt: number;
  y_lte: number;
  y_gt: number;
  y_gte: number;
  xMin: number;
  xMin_not: number;
  xMin_in: number;
  xMin_not_in: number;
  xMin_lt: number;
  xMin_lte: number;
  xMin_gt: number;
  xMin_gte: number;
  yMin: number;
  yMin_not: number;
  yMin_in: number;
  yMin_not_in: number;
  yMin_lt: number;
  yMin_lte: number;
  yMin_gt: number;
  yMin_gte: number;
  xMax: number;
  xMax_not: number;
  xMax_in: number;
  xMax_not_in: number;
  xMax_lt: number;
  xMax_lte: number;
  xMax_gt: number;
  xMax_gte: number;
  yMax: number;
  yMax_not: number;
  yMax_in: number;
  yMax_not_in: number;
  yMax_lt: number;
  yMax_lte: number;
  yMax_gt: number;
  yMax_gte: number;
  createdAt: string;
  createdAt_not: string;
  createdAt_in: string;
  createdAt_not_in: string;
  createdAt_lt: string;
  createdAt_lte: string;
  createdAt_gt: string;
  createdAt_gte: string;
  updatedAt: string;
  updatedAt_not: string;
  updatedAt_in: string;
  updatedAt_not_in: string;
  updatedAt_lt: string;
  updatedAt_lte: string;
  updatedAt_gt: string;
  updatedAt_gte: string;
}
export interface SystemLoginWhereInput {
  AND: string;
  OR: string;
  NOT: string;
  id: string;
  id_not: string;
  id_in: string;
  id_not_in: string;
  id_lt: string;
  id_lte: string;
  id_gt: string;
  id_gte: string;
  id_contains: string;
  id_not_contains: string;
  id_starts_with: string;
  id_not_starts_with: string;
  id_ends_with: string;
  id_not_ends_with: string;
  username: string;
  username_not: string;
  username_in: string;
  username_not_in: string;
  username_lt: string;
  username_lte: string;
  username_gt: string;
  username_gte: string;
  username_contains: string;
  username_not_contains: string;
  username_starts_with: string;
  username_not_starts_with: string;
  username_ends_with: string;
  username_not_ends_with: string;
  passwordEnvironmentVariable: string;
  passwordEnvironmentVariable_not: string;
  passwordEnvironmentVariable_in: string;
  passwordEnvironmentVariable_not_in: string;
  passwordEnvironmentVariable_lt: string;
  passwordEnvironmentVariable_lte: string;
  passwordEnvironmentVariable_gt: string;
  passwordEnvironmentVariable_gte: string;
  passwordEnvironmentVariable_contains: string;
  passwordEnvironmentVariable_not_contains: string;
  passwordEnvironmentVariable_starts_with: string;
  passwordEnvironmentVariable_not_starts_with: string;
  passwordEnvironmentVariable_ends_with: string;
  passwordEnvironmentVariable_not_ends_with: string;
  createdAt: string;
  createdAt_not: string;
  createdAt_in: string;
  createdAt_not_in: string;
  createdAt_lt: string;
  createdAt_lte: string;
  createdAt_gt: string;
  createdAt_gte: string;
  updatedAt: string;
  updatedAt_not: string;
  updatedAt_in: string;
  updatedAt_not_in: string;
  updatedAt_lt: string;
  updatedAt_lte: string;
  updatedAt_gt: string;
  updatedAt_gte: string;
  user: string;
}
export interface LocalLoginWhereInput {
  AND: string;
  OR: string;
  NOT: string;
  id: string;
  id_not: string;
  id_in: string;
  id_not_in: string;
  id_lt: string;
  id_lte: string;
  id_gt: string;
  id_gte: string;
  id_contains: string;
  id_not_contains: string;
  id_starts_with: string;
  id_not_starts_with: string;
  id_ends_with: string;
  id_not_ends_with: string;
  username: string;
  username_not: string;
  username_in: string;
  username_not_in: string;
  username_lt: string;
  username_lte: string;
  username_gt: string;
  username_gte: string;
  username_contains: string;
  username_not_contains: string;
  username_starts_with: string;
  username_not_starts_with: string;
  username_ends_with: string;
  username_not_ends_with: string;
  hashword: string;
  hashword_not: string;
  hashword_in: string;
  hashword_not_in: string;
  hashword_lt: string;
  hashword_lte: string;
  hashword_gt: string;
  hashword_gte: string;
  hashword_contains: string;
  hashword_not_contains: string;
  hashword_starts_with: string;
  hashword_not_starts_with: string;
  hashword_ends_with: string;
  hashword_not_ends_with: string;
  createdAt: string;
  createdAt_not: string;
  createdAt_in: string;
  createdAt_not_in: string;
  createdAt_lt: string;
  createdAt_lte: string;
  createdAt_gt: string;
  createdAt_gte: string;
  updatedAt: string;
  updatedAt_not: string;
  updatedAt_in: string;
  updatedAt_not_in: string;
  updatedAt_lt: string;
  updatedAt_lte: string;
  updatedAt_gt: string;
  updatedAt_gte: string;
  user: string;
}

export namespace QueryResolvers {
  export type MeType<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;

  export interface ArgsImages {
    count: number;
    after: string | null;
  }

  export type ImagesType<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: ArgsImages,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ImageParent"][] | Promise<T["ImageParent"][]>;

  export type AssignedAnnotationTasksType<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AnnotationTaskParent"][] | Promise<T["AnnotationTaskParent"][]>;

  export interface ArgsImagesConnection {
    where: ImageWhereInput | null;
    orderBy: T["ImageOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type ImagesConnectionType<T extends ITypeMap> = (
    parent: T["QueryParent"],
    args: ArgsImagesConnection,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ImageConnectionParent"] | Promise<T["ImageConnectionParent"]>;

  export interface Type<T extends ITypeMap> {
    me: (
      parent: T["QueryParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
    images: (
      parent: T["QueryParent"],
      args: ArgsImages,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ImageParent"][] | Promise<T["ImageParent"][]>;
    assignedAnnotationTasks: (
      parent: T["QueryParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AnnotationTaskParent"][] | Promise<T["AnnotationTaskParent"][]>;
    imagesConnection: (
      parent: T["QueryParent"],
      args: ArgsImagesConnection,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ImageConnectionParent"] | Promise<T["ImageConnectionParent"]>;
  }
}

export namespace MutationResolvers {
  export interface ArgsLogin {
    username: string;
    password: string;
  }

  export type LoginType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsLogin,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AuthPayloadParent"] | Promise<T["AuthPayloadParent"]>;

  export interface ArgsSignup {
    emailAddress: string;
    password: string;
  }

  export type SignupType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsSignup,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AuthPayloadParent"] | Promise<T["AuthPayloadParent"]>;

  export interface ArgsImportImages {
    files: string[];
  }

  export type ImportImagesType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsImportImages,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ImageParent"] | Promise<T["ImageParent"]>;

  export interface ArgsDefineImageAnnotationTask {
    data: DefineImageAnnotationTaskInput;
  }

  export type DefineImageAnnotationTaskType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsDefineImageAnnotationTask,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AnnotationTaskParent"] | Promise<T["AnnotationTaskParent"]>;

  export interface ArgsAnnotateImage {
    data: AnnotateImageInput;
  }

  export type AnnotateImageType<T extends ITypeMap> = (
    parent: T["MutationParent"],
    args: ArgsAnnotateImage,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AnnotationParent"] | Promise<T["AnnotationParent"]>;

  export interface Type<T extends ITypeMap> {
    login: (
      parent: T["MutationParent"],
      args: ArgsLogin,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AuthPayloadParent"] | Promise<T["AuthPayloadParent"]>;
    signup: (
      parent: T["MutationParent"],
      args: ArgsSignup,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AuthPayloadParent"] | Promise<T["AuthPayloadParent"]>;
    importImages: (
      parent: T["MutationParent"],
      args: ArgsImportImages,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ImageParent"] | Promise<T["ImageParent"]>;
    defineImageAnnotationTask: (
      parent: T["MutationParent"],
      args: ArgsDefineImageAnnotationTask,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AnnotationTaskParent"] | Promise<T["AnnotationTaskParent"]>;
    annotateImage: (
      parent: T["MutationParent"],
      args: ArgsAnnotateImage,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AnnotationParent"] | Promise<T["AnnotationParent"]>;
  }
}

export namespace AuthPayloadResolvers {
  export type TokenType<T extends ITypeMap> = (
    parent: T["AuthPayloadParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UserType<T extends ITypeMap> = (
    parent: T["AuthPayloadParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | Promise<T["UserParent"]>;

  export interface Type<T extends ITypeMap> {
    token: (
      parent: T["AuthPayloadParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    user: (
      parent: T["AuthPayloadParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | Promise<T["UserParent"]>;
  }
}

export namespace UserResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type DisplayNameType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type EmailAddressType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type SystemLoginType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["SystemLoginParent"] | null | Promise<T["SystemLoginParent"] | null>;

  export type LocalLoginType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["LocalLoginParent"] | null | Promise<T["LocalLoginParent"] | null>;

  export interface ArgsAssignedAnnotationTasks {
    where: AnnotationTaskWhereInput | null;
    orderBy: T["AnnotationTaskOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type AssignedAnnotationTasksType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: ArgsAssignedAnnotationTasks,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AnnotationTaskParent"][] | Promise<T["AnnotationTaskParent"][]>;

  export interface ArgsAnnotations {
    where: AnnotationWhereInput | null;
    orderBy: T["AnnotationOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type AnnotationsType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: ArgsAnnotations,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AnnotationParent"][] | Promise<T["AnnotationParent"][]>;

  export interface ArgsOwnedGroups {
    where: GroupWhereInput | null;
    orderBy: T["GroupOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type OwnedGroupsType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: ArgsOwnedGroups,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["GroupParent"][] | Promise<T["GroupParent"][]>;

  export interface ArgsCreatedGroups {
    where: GroupWhereInput | null;
    orderBy: T["GroupOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type CreatedGroupsType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: ArgsCreatedGroups,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["GroupParent"][] | Promise<T["GroupParent"][]>;

  export interface ArgsMemberOfGroups {
    where: GroupWhereInput | null;
    orderBy: T["GroupOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type MemberOfGroupsType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: ArgsMemberOfGroups,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["GroupParent"][] | Promise<T["GroupParent"][]>;

  export interface ArgsManagerOfGroups {
    where: GroupWhereInput | null;
    orderBy: T["GroupOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type ManagerOfGroupsType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: ArgsManagerOfGroups,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["GroupParent"][] | Promise<T["GroupParent"][]>;

  export interface ArgsOwnedAnnotatables {
    where: AnnotatableWhereInput | null;
    orderBy: T["AnnotatableOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type OwnedAnnotatablesType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: ArgsOwnedAnnotatables,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AnnotatableParent"][] | Promise<T["AnnotatableParent"][]>;

  export interface ArgsCreatedAnnotatables {
    where: AnnotatableWhereInput | null;
    orderBy: T["AnnotatableOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type CreatedAnnotatablesType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: ArgsCreatedAnnotatables,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AnnotatableParent"][] | Promise<T["AnnotatableParent"][]>;

  export interface ArgsOwnedImages {
    where: ImageWhereInput | null;
    orderBy: T["ImageOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type OwnedImagesType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: ArgsOwnedImages,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ImageParent"][] | Promise<T["ImageParent"][]>;

  export interface ArgsCreatedImages {
    where: ImageWhereInput | null;
    orderBy: T["ImageOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type CreatedImagesType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: ArgsCreatedImages,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ImageParent"][] | Promise<T["ImageParent"][]>;

  export interface ArgsOwnedAnnotations {
    where: AnnotationWhereInput | null;
    orderBy: T["AnnotationOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type OwnedAnnotationsType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: ArgsOwnedAnnotations,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AnnotationParent"][] | Promise<T["AnnotationParent"][]>;

  export interface ArgsCreatedAnnotations {
    where: AnnotationWhereInput | null;
    orderBy: T["AnnotationOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type CreatedAnnotationsType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: ArgsCreatedAnnotations,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AnnotationParent"][] | Promise<T["AnnotationParent"][]>;

  export interface ArgsOwnedAnnotationTasks {
    where: AnnotationTaskWhereInput | null;
    orderBy: T["AnnotationTaskOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type OwnedAnnotationTasksType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: ArgsOwnedAnnotationTasks,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AnnotationTaskParent"][] | Promise<T["AnnotationTaskParent"][]>;

  export interface ArgsCreatedAnnotationTasks {
    where: AnnotationTaskWhereInput | null;
    orderBy: T["AnnotationTaskOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type CreatedAnnotationTasksType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: ArgsCreatedAnnotationTasks,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AnnotationTaskParent"][] | Promise<T["AnnotationTaskParent"][]>;

  export interface ArgsOwnedClassificationContexts {
    where: ClassificationContextWhereInput | null;
    orderBy: T["ClassificationContextOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type OwnedClassificationContextsType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: ArgsOwnedClassificationContexts,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) =>
    | T["ClassificationContextParent"][]
    | Promise<T["ClassificationContextParent"][]>;

  export interface ArgsCreatedClassificationContexts {
    where: ClassificationContextWhereInput | null;
    orderBy: T["ClassificationContextOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type CreatedClassificationContextsType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: ArgsCreatedClassificationContexts,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) =>
    | T["ClassificationContextParent"][]
    | Promise<T["ClassificationContextParent"][]>;

  export interface ArgsOwnedClassificationLabels {
    where: ClassificationLabelWhereInput | null;
    orderBy: T["ClassificationLabelOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type OwnedClassificationLabelsType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: ArgsOwnedClassificationLabels,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) =>
    | T["ClassificationLabelParent"][]
    | Promise<T["ClassificationLabelParent"][]>;

  export interface ArgsCreatedClassificationLabels {
    where: ClassificationLabelWhereInput | null;
    orderBy: T["ClassificationLabelOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type CreatedClassificationLabelsType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: ArgsCreatedClassificationLabels,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) =>
    | T["ClassificationLabelParent"][]
    | Promise<T["ClassificationLabelParent"][]>;

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtType<T extends ITypeMap> = (
    parent: T["UserParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    displayName: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    emailAddress: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    systemLogin: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["SystemLoginParent"] | null | Promise<T["SystemLoginParent"] | null>;
    localLogin: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["LocalLoginParent"] | null | Promise<T["LocalLoginParent"] | null>;
    assignedAnnotationTasks: (
      parent: T["UserParent"],
      args: ArgsAssignedAnnotationTasks,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AnnotationTaskParent"][] | Promise<T["AnnotationTaskParent"][]>;
    annotations: (
      parent: T["UserParent"],
      args: ArgsAnnotations,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AnnotationParent"][] | Promise<T["AnnotationParent"][]>;
    ownedGroups: (
      parent: T["UserParent"],
      args: ArgsOwnedGroups,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["GroupParent"][] | Promise<T["GroupParent"][]>;
    createdGroups: (
      parent: T["UserParent"],
      args: ArgsCreatedGroups,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["GroupParent"][] | Promise<T["GroupParent"][]>;
    memberOfGroups: (
      parent: T["UserParent"],
      args: ArgsMemberOfGroups,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["GroupParent"][] | Promise<T["GroupParent"][]>;
    managerOfGroups: (
      parent: T["UserParent"],
      args: ArgsManagerOfGroups,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["GroupParent"][] | Promise<T["GroupParent"][]>;
    ownedAnnotatables: (
      parent: T["UserParent"],
      args: ArgsOwnedAnnotatables,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AnnotatableParent"][] | Promise<T["AnnotatableParent"][]>;
    createdAnnotatables: (
      parent: T["UserParent"],
      args: ArgsCreatedAnnotatables,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AnnotatableParent"][] | Promise<T["AnnotatableParent"][]>;
    ownedImages: (
      parent: T["UserParent"],
      args: ArgsOwnedImages,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ImageParent"][] | Promise<T["ImageParent"][]>;
    createdImages: (
      parent: T["UserParent"],
      args: ArgsCreatedImages,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ImageParent"][] | Promise<T["ImageParent"][]>;
    ownedAnnotations: (
      parent: T["UserParent"],
      args: ArgsOwnedAnnotations,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AnnotationParent"][] | Promise<T["AnnotationParent"][]>;
    createdAnnotations: (
      parent: T["UserParent"],
      args: ArgsCreatedAnnotations,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AnnotationParent"][] | Promise<T["AnnotationParent"][]>;
    ownedAnnotationTasks: (
      parent: T["UserParent"],
      args: ArgsOwnedAnnotationTasks,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AnnotationTaskParent"][] | Promise<T["AnnotationTaskParent"][]>;
    createdAnnotationTasks: (
      parent: T["UserParent"],
      args: ArgsCreatedAnnotationTasks,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AnnotationTaskParent"][] | Promise<T["AnnotationTaskParent"][]>;
    ownedClassificationContexts: (
      parent: T["UserParent"],
      args: ArgsOwnedClassificationContexts,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) =>
      | T["ClassificationContextParent"][]
      | Promise<T["ClassificationContextParent"][]>;
    createdClassificationContexts: (
      parent: T["UserParent"],
      args: ArgsCreatedClassificationContexts,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) =>
      | T["ClassificationContextParent"][]
      | Promise<T["ClassificationContextParent"][]>;
    ownedClassificationLabels: (
      parent: T["UserParent"],
      args: ArgsOwnedClassificationLabels,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) =>
      | T["ClassificationLabelParent"][]
      | Promise<T["ClassificationLabelParent"][]>;
    createdClassificationLabels: (
      parent: T["UserParent"],
      args: ArgsCreatedClassificationLabels,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) =>
      | T["ClassificationLabelParent"][]
      | Promise<T["ClassificationLabelParent"][]>;
    createdAt: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    updatedAt: (
      parent: T["UserParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace ImageResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["ImageParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UriType<T extends ITypeMap> = (
    parent: T["ImageParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ThumbnailUriType<T extends ITypeMap> = (
    parent: T["ImageParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type CaptionType<T extends ITypeMap> = (
    parent: T["ImageParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type DigestSha3Type<T extends ITypeMap> = (
    parent: T["ImageParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type DigestSha2Type<T extends ITypeMap> = (
    parent: T["ImageParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type DigestSha1Type<T extends ITypeMap> = (
    parent: T["ImageParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type DigestMd5Type<T extends ITypeMap> = (
    parent: T["ImageParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type SizeInBytesType<T extends ITypeMap> = (
    parent: T["ImageParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => number | null | Promise<number | null>;

  export type WidthType<T extends ITypeMap> = (
    parent: T["ImageParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => number | null | Promise<number | null>;

  export type HeightType<T extends ITypeMap> = (
    parent: T["ImageParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => number | null | Promise<number | null>;

  export type OwnerType<T extends ITypeMap> = (
    parent: T["ImageParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;

  export type GroupType<T extends ITypeMap> = (
    parent: T["ImageParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["GroupParent"] | null | Promise<T["GroupParent"] | null>;

  export type AnyoneCanViewType<T extends ITypeMap> = (
    parent: T["ImageParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export type CreatorType<T extends ITypeMap> = (
    parent: T["ImageParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T["ImageParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtType<T extends ITypeMap> = (
    parent: T["ImageParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["ImageParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    uri: (
      parent: T["ImageParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    thumbnailUri: (
      parent: T["ImageParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    caption: (
      parent: T["ImageParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    digestSha3: (
      parent: T["ImageParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    digestSha2: (
      parent: T["ImageParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    digestSha1: (
      parent: T["ImageParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    digestMd5: (
      parent: T["ImageParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    sizeInBytes: (
      parent: T["ImageParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => number | null | Promise<number | null>;
    width: (
      parent: T["ImageParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => number | null | Promise<number | null>;
    height: (
      parent: T["ImageParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => number | null | Promise<number | null>;
    owner: (
      parent: T["ImageParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
    group: (
      parent: T["ImageParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["GroupParent"] | null | Promise<T["GroupParent"] | null>;
    anyoneCanView: (
      parent: T["ImageParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;
    creator: (
      parent: T["ImageParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
    createdAt: (
      parent: T["ImageParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    updatedAt: (
      parent: T["ImageParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace AnnotationTaskResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["AnnotationTaskParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface ArgsAssignees {
    where: UserWhereInput | null;
    orderBy: T["UserOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type AssigneesType<T extends ITypeMap> = (
    parent: T["AnnotationTaskParent"],
    args: ArgsAssignees,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"][] | Promise<T["UserParent"][]>;

  export type DisplayNameType<T extends ITypeMap> = (
    parent: T["AnnotationTaskParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface ArgsSubjects {
    where: AnnotatableWhereInput | null;
    orderBy: T["AnnotatableOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type SubjectsType<T extends ITypeMap> = (
    parent: T["AnnotationTaskParent"],
    args: ArgsSubjects,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AnnotatableParent"][] | Promise<T["AnnotatableParent"][]>;

  export type RequirementsType<T extends ITypeMap> = (
    parent: T["AnnotationTaskParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export interface ArgsClassificationContexts {
    where: ClassificationContextWhereInput | null;
    orderBy: T["ClassificationContextOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type ClassificationContextsType<T extends ITypeMap> = (
    parent: T["AnnotationTaskParent"],
    args: ArgsClassificationContexts,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) =>
    | T["ClassificationContextParent"][]
    | Promise<T["ClassificationContextParent"][]>;

  export interface ArgsClassificationLabels {
    where: ClassificationLabelWhereInput | null;
    orderBy: T["ClassificationLabelOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type ClassificationLabelsType<T extends ITypeMap> = (
    parent: T["AnnotationTaskParent"],
    args: ArgsClassificationLabels,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) =>
    | T["ClassificationLabelParent"][]
    | Promise<T["ClassificationLabelParent"][]>;

  export type OwnerType<T extends ITypeMap> = (
    parent: T["AnnotationTaskParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;

  export type GroupType<T extends ITypeMap> = (
    parent: T["AnnotationTaskParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["GroupParent"] | null | Promise<T["GroupParent"] | null>;

  export type AnyoneCanViewType<T extends ITypeMap> = (
    parent: T["AnnotationTaskParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export type AnyoneCanJoinType<T extends ITypeMap> = (
    parent: T["AnnotationTaskParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export type CreatorType<T extends ITypeMap> = (
    parent: T["AnnotationTaskParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T["AnnotationTaskParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtType<T extends ITypeMap> = (
    parent: T["AnnotationTaskParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["AnnotationTaskParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    assignees: (
      parent: T["AnnotationTaskParent"],
      args: ArgsAssignees,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"][] | Promise<T["UserParent"][]>;
    displayName: (
      parent: T["AnnotationTaskParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    subjects: (
      parent: T["AnnotationTaskParent"],
      args: ArgsSubjects,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AnnotatableParent"][] | Promise<T["AnnotatableParent"][]>;
    requirements: (
      parent: T["AnnotationTaskParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    classificationContexts: (
      parent: T["AnnotationTaskParent"],
      args: ArgsClassificationContexts,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) =>
      | T["ClassificationContextParent"][]
      | Promise<T["ClassificationContextParent"][]>;
    classificationLabels: (
      parent: T["AnnotationTaskParent"],
      args: ArgsClassificationLabels,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) =>
      | T["ClassificationLabelParent"][]
      | Promise<T["ClassificationLabelParent"][]>;
    owner: (
      parent: T["AnnotationTaskParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
    group: (
      parent: T["AnnotationTaskParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["GroupParent"] | null | Promise<T["GroupParent"] | null>;
    anyoneCanView: (
      parent: T["AnnotationTaskParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;
    anyoneCanJoin: (
      parent: T["AnnotationTaskParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;
    creator: (
      parent: T["AnnotationTaskParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
    createdAt: (
      parent: T["AnnotationTaskParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    updatedAt: (
      parent: T["AnnotationTaskParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace ImageConnectionResolvers {
  export type PageInfoType<T extends ITypeMap> = (
    parent: T["ImageConnectionParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["PageInfoParent"] | Promise<T["PageInfoParent"]>;

  export type EdgesType<T extends ITypeMap> = (
    parent: T["ImageConnectionParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ImageEdgeParent"][] | Promise<T["ImageEdgeParent"][]>;

  export type AggregateType<T extends ITypeMap> = (
    parent: T["ImageConnectionParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AggregateImageParent"] | Promise<T["AggregateImageParent"]>;

  export interface Type<T extends ITypeMap> {
    pageInfo: (
      parent: T["ImageConnectionParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["PageInfoParent"] | Promise<T["PageInfoParent"]>;
    edges: (
      parent: T["ImageConnectionParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ImageEdgeParent"][] | Promise<T["ImageEdgeParent"][]>;
    aggregate: (
      parent: T["ImageConnectionParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AggregateImageParent"] | Promise<T["AggregateImageParent"]>;
  }
}

export namespace AnnotationResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["AnnotationParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type AnnotatorType<T extends ITypeMap> = (
    parent: T["AnnotationParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | Promise<T["UserParent"]>;

  export type SubjectType<T extends ITypeMap> = (
    parent: T["AnnotationParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AnnotatableParent"] | Promise<T["AnnotatableParent"]>;

  export type TaskType<T extends ITypeMap> = (
    parent: T["AnnotationParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) =>
    | T["AnnotationTaskParent"]
    | null
    | Promise<T["AnnotationTaskParent"] | null>;

  export type DataType<T extends ITypeMap> = (
    parent: T["AnnotationParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export interface ArgsClassificationLabels {
    where: ClassificationLabelWhereInput | null;
    orderBy: T["ClassificationLabelOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type ClassificationLabelsType<T extends ITypeMap> = (
    parent: T["AnnotationParent"],
    args: ArgsClassificationLabels,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) =>
    | T["ClassificationLabelParent"][]
    | Promise<T["ClassificationLabelParent"][]>;

  export type SvgBoundsType<T extends ITypeMap> = (
    parent: T["AnnotationParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export interface ArgsConvexHull {
    where: CgPointWhereInput | null;
    orderBy: T["CgPointOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type ConvexHullType<T extends ITypeMap> = (
    parent: T["AnnotationParent"],
    args: ArgsConvexHull,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["CgPointParent"][] | Promise<T["CgPointParent"][]>;

  export type OwnerType<T extends ITypeMap> = (
    parent: T["AnnotationParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;

  export type GroupType<T extends ITypeMap> = (
    parent: T["AnnotationParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["GroupParent"] | null | Promise<T["GroupParent"] | null>;

  export type AnyoneCanViewType<T extends ITypeMap> = (
    parent: T["AnnotationParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export type AnyoneCanSuggestRevisionType<T extends ITypeMap> = (
    parent: T["AnnotationParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export type CreatorType<T extends ITypeMap> = (
    parent: T["AnnotationParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T["AnnotationParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtType<T extends ITypeMap> = (
    parent: T["AnnotationParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["AnnotationParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    annotator: (
      parent: T["AnnotationParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | Promise<T["UserParent"]>;
    subject: (
      parent: T["AnnotationParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AnnotatableParent"] | Promise<T["AnnotatableParent"]>;
    task: (
      parent: T["AnnotationParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) =>
      | T["AnnotationTaskParent"]
      | null
      | Promise<T["AnnotationTaskParent"] | null>;
    data: (
      parent: T["AnnotationParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    classificationLabels: (
      parent: T["AnnotationParent"],
      args: ArgsClassificationLabels,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) =>
      | T["ClassificationLabelParent"][]
      | Promise<T["ClassificationLabelParent"][]>;
    svgBounds: (
      parent: T["AnnotationParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    convexHull: (
      parent: T["AnnotationParent"],
      args: ArgsConvexHull,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["CgPointParent"][] | Promise<T["CgPointParent"][]>;
    owner: (
      parent: T["AnnotationParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
    group: (
      parent: T["AnnotationParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["GroupParent"] | null | Promise<T["GroupParent"] | null>;
    anyoneCanView: (
      parent: T["AnnotationParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;
    anyoneCanSuggestRevision: (
      parent: T["AnnotationParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;
    creator: (
      parent: T["AnnotationParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
    createdAt: (
      parent: T["AnnotationParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    updatedAt: (
      parent: T["AnnotationParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace SystemLoginResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["SystemLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UserType<T extends ITypeMap> = (
    parent: T["SystemLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | Promise<T["UserParent"]>;

  export type UsernameType<T extends ITypeMap> = (
    parent: T["SystemLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type PasswordEnvironmentVariableType<T extends ITypeMap> = (
    parent: T["SystemLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T["SystemLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtType<T extends ITypeMap> = (
    parent: T["SystemLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["SystemLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    user: (
      parent: T["SystemLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | Promise<T["UserParent"]>;
    username: (
      parent: T["SystemLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    passwordEnvironmentVariable: (
      parent: T["SystemLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    createdAt: (
      parent: T["SystemLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    updatedAt: (
      parent: T["SystemLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace LocalLoginResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["LocalLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UserType<T extends ITypeMap> = (
    parent: T["LocalLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | Promise<T["UserParent"]>;

  export type UsernameType<T extends ITypeMap> = (
    parent: T["LocalLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type HashwordType<T extends ITypeMap> = (
    parent: T["LocalLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T["LocalLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtType<T extends ITypeMap> = (
    parent: T["LocalLoginParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["LocalLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    user: (
      parent: T["LocalLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | Promise<T["UserParent"]>;
    username: (
      parent: T["LocalLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    hashword: (
      parent: T["LocalLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    createdAt: (
      parent: T["LocalLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    updatedAt: (
      parent: T["LocalLoginParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace GroupResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["GroupParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type DisplayNameType<T extends ITypeMap> = (
    parent: T["GroupParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface ArgsMemberUsers {
    where: UserWhereInput | null;
    orderBy: T["UserOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type MemberUsersType<T extends ITypeMap> = (
    parent: T["GroupParent"],
    args: ArgsMemberUsers,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"][] | Promise<T["UserParent"][]>;

  export interface ArgsMemberGroups {
    where: GroupWhereInput | null;
    orderBy: T["GroupOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type MemberGroupsType<T extends ITypeMap> = (
    parent: T["GroupParent"],
    args: ArgsMemberGroups,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["GroupParent"][] | Promise<T["GroupParent"][]>;

  export interface ArgsMemberOfGroups {
    where: GroupWhereInput | null;
    orderBy: T["GroupOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type MemberOfGroupsType<T extends ITypeMap> = (
    parent: T["GroupParent"],
    args: ArgsMemberOfGroups,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["GroupParent"][] | Promise<T["GroupParent"][]>;

  export interface ArgsOwnedAnnotatables {
    where: AnnotatableWhereInput | null;
    orderBy: T["AnnotatableOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type OwnedAnnotatablesType<T extends ITypeMap> = (
    parent: T["GroupParent"],
    args: ArgsOwnedAnnotatables,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AnnotatableParent"][] | Promise<T["AnnotatableParent"][]>;

  export interface ArgsOwnedImages {
    where: ImageWhereInput | null;
    orderBy: T["ImageOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type OwnedImagesType<T extends ITypeMap> = (
    parent: T["GroupParent"],
    args: ArgsOwnedImages,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ImageParent"][] | Promise<T["ImageParent"][]>;

  export interface ArgsOwnedAnnotations {
    where: AnnotationWhereInput | null;
    orderBy: T["AnnotationOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type OwnedAnnotationsType<T extends ITypeMap> = (
    parent: T["GroupParent"],
    args: ArgsOwnedAnnotations,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AnnotationParent"][] | Promise<T["AnnotationParent"][]>;

  export interface ArgsOwnedAnnotationTasks {
    where: AnnotationTaskWhereInput | null;
    orderBy: T["AnnotationTaskOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type OwnedAnnotationTasksType<T extends ITypeMap> = (
    parent: T["GroupParent"],
    args: ArgsOwnedAnnotationTasks,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AnnotationTaskParent"][] | Promise<T["AnnotationTaskParent"][]>;

  export interface ArgsOwnedClassificationContexts {
    where: ClassificationContextWhereInput | null;
    orderBy: T["ClassificationContextOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type OwnedClassificationContextsType<T extends ITypeMap> = (
    parent: T["GroupParent"],
    args: ArgsOwnedClassificationContexts,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) =>
    | T["ClassificationContextParent"][]
    | Promise<T["ClassificationContextParent"][]>;

  export interface ArgsOwnedClassificationLabels {
    where: ClassificationLabelWhereInput | null;
    orderBy: T["ClassificationLabelOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type OwnedClassificationLabelsType<T extends ITypeMap> = (
    parent: T["GroupParent"],
    args: ArgsOwnedClassificationLabels,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) =>
    | T["ClassificationLabelParent"][]
    | Promise<T["ClassificationLabelParent"][]>;

  export type OwnerType<T extends ITypeMap> = (
    parent: T["GroupParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;

  export interface ArgsManagerUsers {
    where: UserWhereInput | null;
    orderBy: T["UserOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type ManagerUsersType<T extends ITypeMap> = (
    parent: T["GroupParent"],
    args: ArgsManagerUsers,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"][] | Promise<T["UserParent"][]>;

  export interface ArgsManagerGroups {
    where: GroupWhereInput | null;
    orderBy: T["GroupOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type ManagerGroupsType<T extends ITypeMap> = (
    parent: T["GroupParent"],
    args: ArgsManagerGroups,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["GroupParent"][] | Promise<T["GroupParent"][]>;

  export interface ArgsManagerOfGroups {
    where: GroupWhereInput | null;
    orderBy: T["GroupOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type ManagerOfGroupsType<T extends ITypeMap> = (
    parent: T["GroupParent"],
    args: ArgsManagerOfGroups,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["GroupParent"][] | Promise<T["GroupParent"][]>;

  export type CreatorType<T extends ITypeMap> = (
    parent: T["GroupParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T["GroupParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtType<T extends ITypeMap> = (
    parent: T["GroupParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["GroupParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    displayName: (
      parent: T["GroupParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    memberUsers: (
      parent: T["GroupParent"],
      args: ArgsMemberUsers,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"][] | Promise<T["UserParent"][]>;
    memberGroups: (
      parent: T["GroupParent"],
      args: ArgsMemberGroups,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["GroupParent"][] | Promise<T["GroupParent"][]>;
    memberOfGroups: (
      parent: T["GroupParent"],
      args: ArgsMemberOfGroups,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["GroupParent"][] | Promise<T["GroupParent"][]>;
    ownedAnnotatables: (
      parent: T["GroupParent"],
      args: ArgsOwnedAnnotatables,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AnnotatableParent"][] | Promise<T["AnnotatableParent"][]>;
    ownedImages: (
      parent: T["GroupParent"],
      args: ArgsOwnedImages,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ImageParent"][] | Promise<T["ImageParent"][]>;
    ownedAnnotations: (
      parent: T["GroupParent"],
      args: ArgsOwnedAnnotations,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AnnotationParent"][] | Promise<T["AnnotationParent"][]>;
    ownedAnnotationTasks: (
      parent: T["GroupParent"],
      args: ArgsOwnedAnnotationTasks,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AnnotationTaskParent"][] | Promise<T["AnnotationTaskParent"][]>;
    ownedClassificationContexts: (
      parent: T["GroupParent"],
      args: ArgsOwnedClassificationContexts,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) =>
      | T["ClassificationContextParent"][]
      | Promise<T["ClassificationContextParent"][]>;
    ownedClassificationLabels: (
      parent: T["GroupParent"],
      args: ArgsOwnedClassificationLabels,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) =>
      | T["ClassificationLabelParent"][]
      | Promise<T["ClassificationLabelParent"][]>;
    owner: (
      parent: T["GroupParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
    managerUsers: (
      parent: T["GroupParent"],
      args: ArgsManagerUsers,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"][] | Promise<T["UserParent"][]>;
    managerGroups: (
      parent: T["GroupParent"],
      args: ArgsManagerGroups,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["GroupParent"][] | Promise<T["GroupParent"][]>;
    managerOfGroups: (
      parent: T["GroupParent"],
      args: ArgsManagerOfGroups,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["GroupParent"][] | Promise<T["GroupParent"][]>;
    creator: (
      parent: T["GroupParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
    createdAt: (
      parent: T["GroupParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    updatedAt: (
      parent: T["GroupParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace AnnotatableResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["AnnotatableParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type DisplayNameType<T extends ITypeMap> = (
    parent: T["AnnotatableParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type TextType<T extends ITypeMap> = (
    parent: T["AnnotatableParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type ImageType<T extends ITypeMap> = (
    parent: T["AnnotatableParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ImageParent"] | null | Promise<T["ImageParent"] | null>;

  export interface ArgsTasks {
    where: AnnotationTaskWhereInput | null;
    orderBy: T["AnnotationTaskOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type TasksType<T extends ITypeMap> = (
    parent: T["AnnotatableParent"],
    args: ArgsTasks,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["AnnotationTaskParent"][] | Promise<T["AnnotationTaskParent"][]>;

  export type OwnerType<T extends ITypeMap> = (
    parent: T["AnnotatableParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;

  export type GroupType<T extends ITypeMap> = (
    parent: T["AnnotatableParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["GroupParent"] | null | Promise<T["GroupParent"] | null>;

  export type AnyoneCanViewType<T extends ITypeMap> = (
    parent: T["AnnotatableParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export type AnyoneCanAnnotateType<T extends ITypeMap> = (
    parent: T["AnnotatableParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export type CreatorType<T extends ITypeMap> = (
    parent: T["AnnotatableParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T["AnnotatableParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtType<T extends ITypeMap> = (
    parent: T["AnnotatableParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["AnnotatableParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    displayName: (
      parent: T["AnnotatableParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    text: (
      parent: T["AnnotatableParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    image: (
      parent: T["AnnotatableParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ImageParent"] | null | Promise<T["ImageParent"] | null>;
    tasks: (
      parent: T["AnnotatableParent"],
      args: ArgsTasks,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["AnnotationTaskParent"][] | Promise<T["AnnotationTaskParent"][]>;
    owner: (
      parent: T["AnnotatableParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
    group: (
      parent: T["AnnotatableParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["GroupParent"] | null | Promise<T["GroupParent"] | null>;
    anyoneCanView: (
      parent: T["AnnotatableParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;
    anyoneCanAnnotate: (
      parent: T["AnnotatableParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;
    creator: (
      parent: T["AnnotatableParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
    createdAt: (
      parent: T["AnnotatableParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    updatedAt: (
      parent: T["AnnotatableParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace ClassificationContextResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["ClassificationContextParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type SlugType<T extends ITypeMap> = (
    parent: T["ClassificationContextParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type DisplayNameType<T extends ITypeMap> = (
    parent: T["ClassificationContextParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type InfoHtmlType<T extends ITypeMap> = (
    parent: T["ClassificationContextParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type InfoDataType<T extends ITypeMap> = (
    parent: T["ClassificationContextParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export interface ArgsLabels {
    where: ClassificationLabelWhereInput | null;
    orderBy: T["ClassificationLabelOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type LabelsType<T extends ITypeMap> = (
    parent: T["ClassificationContextParent"],
    args: ArgsLabels,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) =>
    | T["ClassificationLabelParent"][]
    | Promise<T["ClassificationLabelParent"][]>;

  export type OwnerType<T extends ITypeMap> = (
    parent: T["ClassificationContextParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;

  export type GroupType<T extends ITypeMap> = (
    parent: T["ClassificationContextParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["GroupParent"] | null | Promise<T["GroupParent"] | null>;

  export type AnyoneCanUseType<T extends ITypeMap> = (
    parent: T["ClassificationContextParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export type AnyoneCanAddLabelsType<T extends ITypeMap> = (
    parent: T["ClassificationContextParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export type AnyoneCanEditLabelsType<T extends ITypeMap> = (
    parent: T["ClassificationContextParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export type AnyoneCanUpdateInfoType<T extends ITypeMap> = (
    parent: T["ClassificationContextParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export type CreatorType<T extends ITypeMap> = (
    parent: T["ClassificationContextParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T["ClassificationContextParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtType<T extends ITypeMap> = (
    parent: T["ClassificationContextParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["ClassificationContextParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    slug: (
      parent: T["ClassificationContextParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    displayName: (
      parent: T["ClassificationContextParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    infoHtml: (
      parent: T["ClassificationContextParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    infoData: (
      parent: T["ClassificationContextParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    labels: (
      parent: T["ClassificationContextParent"],
      args: ArgsLabels,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) =>
      | T["ClassificationLabelParent"][]
      | Promise<T["ClassificationLabelParent"][]>;
    owner: (
      parent: T["ClassificationContextParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
    group: (
      parent: T["ClassificationContextParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["GroupParent"] | null | Promise<T["GroupParent"] | null>;
    anyoneCanUse: (
      parent: T["ClassificationContextParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;
    anyoneCanAddLabels: (
      parent: T["ClassificationContextParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;
    anyoneCanEditLabels: (
      parent: T["ClassificationContextParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;
    anyoneCanUpdateInfo: (
      parent: T["ClassificationContextParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;
    creator: (
      parent: T["ClassificationContextParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
    createdAt: (
      parent: T["ClassificationContextParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    updatedAt: (
      parent: T["ClassificationContextParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace ClassificationLabelResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["ClassificationLabelParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type SlugType<T extends ITypeMap> = (
    parent: T["ClassificationLabelParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type DisplayNameType<T extends ITypeMap> = (
    parent: T["ClassificationLabelParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type InfoHtmlType<T extends ITypeMap> = (
    parent: T["ClassificationLabelParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type InfoDataType<T extends ITypeMap> = (
    parent: T["ClassificationLabelParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export interface ArgsContexts {
    where: ClassificationContextWhereInput | null;
    orderBy: T["ClassificationContextOrderByInput"] | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type ContextsType<T extends ITypeMap> = (
    parent: T["ClassificationLabelParent"],
    args: ArgsContexts,
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) =>
    | T["ClassificationContextParent"][]
    | Promise<T["ClassificationContextParent"][]>;

  export type OwnerType<T extends ITypeMap> = (
    parent: T["ClassificationLabelParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;

  export type GroupType<T extends ITypeMap> = (
    parent: T["ClassificationLabelParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["GroupParent"] | null | Promise<T["GroupParent"] | null>;

  export type AnyoneCanUseType<T extends ITypeMap> = (
    parent: T["ClassificationLabelParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export type AnyoneCanEditInfoType<T extends ITypeMap> = (
    parent: T["ClassificationLabelParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export type CreatorType<T extends ITypeMap> = (
    parent: T["ClassificationLabelParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T["ClassificationLabelParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtType<T extends ITypeMap> = (
    parent: T["ClassificationLabelParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["ClassificationLabelParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    slug: (
      parent: T["ClassificationLabelParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    displayName: (
      parent: T["ClassificationLabelParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    infoHtml: (
      parent: T["ClassificationLabelParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    infoData: (
      parent: T["ClassificationLabelParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    contexts: (
      parent: T["ClassificationLabelParent"],
      args: ArgsContexts,
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) =>
      | T["ClassificationContextParent"][]
      | Promise<T["ClassificationContextParent"][]>;
    owner: (
      parent: T["ClassificationLabelParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
    group: (
      parent: T["ClassificationLabelParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["GroupParent"] | null | Promise<T["GroupParent"] | null>;
    anyoneCanUse: (
      parent: T["ClassificationLabelParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;
    anyoneCanEditInfo: (
      parent: T["ClassificationLabelParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;
    creator: (
      parent: T["ClassificationLabelParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["UserParent"] | null | Promise<T["UserParent"] | null>;
    createdAt: (
      parent: T["ClassificationLabelParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    updatedAt: (
      parent: T["ClassificationLabelParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace PageInfoResolvers {
  export type HasNextPageType<T extends ITypeMap> = (
    parent: T["PageInfoParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export type HasPreviousPageType<T extends ITypeMap> = (
    parent: T["PageInfoParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export type StartCursorType<T extends ITypeMap> = (
    parent: T["PageInfoParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type EndCursorType<T extends ITypeMap> = (
    parent: T["PageInfoParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export interface Type<T extends ITypeMap> {
    hasNextPage: (
      parent: T["PageInfoParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;
    hasPreviousPage: (
      parent: T["PageInfoParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;
    startCursor: (
      parent: T["PageInfoParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
    endCursor: (
      parent: T["PageInfoParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
  }
}

export namespace ImageEdgeResolvers {
  export type NodeType<T extends ITypeMap> = (
    parent: T["ImageEdgeParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => T["ImageParent"] | Promise<T["ImageParent"]>;

  export type CursorType<T extends ITypeMap> = (
    parent: T["ImageEdgeParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    node: (
      parent: T["ImageEdgeParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => T["ImageParent"] | Promise<T["ImageParent"]>;
    cursor: (
      parent: T["ImageEdgeParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace AggregateImageResolvers {
  export type CountType<T extends ITypeMap> = (
    parent: T["AggregateImageParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export interface Type<T extends ITypeMap> {
    count: (
      parent: T["AggregateImageParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
  }
}

export namespace CgPointResolvers {
  export type IdType<T extends ITypeMap> = (
    parent: T["CgPointParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type XType<T extends ITypeMap> = (
    parent: T["CgPointParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type YType<T extends ITypeMap> = (
    parent: T["CgPointParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type XMinType<T extends ITypeMap> = (
    parent: T["CgPointParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => number | null | Promise<number | null>;

  export type YMinType<T extends ITypeMap> = (
    parent: T["CgPointParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => number | null | Promise<number | null>;

  export type XMaxType<T extends ITypeMap> = (
    parent: T["CgPointParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => number | null | Promise<number | null>;

  export type YMaxType<T extends ITypeMap> = (
    parent: T["CgPointParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => number | null | Promise<number | null>;

  export type CreatedAtType<T extends ITypeMap> = (
    parent: T["CgPointParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UpdatedAtType<T extends ITypeMap> = (
    parent: T["CgPointParent"],
    args: {},
    ctx: T["Context"],
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T["CgPointParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    x: (
      parent: T["CgPointParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
    y: (
      parent: T["CgPointParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
    xMin: (
      parent: T["CgPointParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => number | null | Promise<number | null>;
    yMin: (
      parent: T["CgPointParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => number | null | Promise<number | null>;
    xMax: (
      parent: T["CgPointParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => number | null | Promise<number | null>;
    yMax: (
      parent: T["CgPointParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => number | null | Promise<number | null>;
    createdAt: (
      parent: T["CgPointParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
    updatedAt: (
      parent: T["CgPointParent"],
      args: {},
      ctx: T["Context"],
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export interface IResolvers<T extends ITypeMap> {
  Query: QueryResolvers.Type<T>;
  Mutation: MutationResolvers.Type<T>;
  AuthPayload: AuthPayloadResolvers.Type<T>;
  User: UserResolvers.Type<T>;
  Image: ImageResolvers.Type<T>;
  AnnotationTask: AnnotationTaskResolvers.Type<T>;
  ImageConnection: ImageConnectionResolvers.Type<T>;
  Annotation: AnnotationResolvers.Type<T>;
  SystemLogin: SystemLoginResolvers.Type<T>;
  LocalLogin: LocalLoginResolvers.Type<T>;
  Group: GroupResolvers.Type<T>;
  Annotatable: AnnotatableResolvers.Type<T>;
  ClassificationContext: ClassificationContextResolvers.Type<T>;
  ClassificationLabel: ClassificationLabelResolvers.Type<T>;
  PageInfo: PageInfoResolvers.Type<T>;
  ImageEdge: ImageEdgeResolvers.Type<T>;
  AggregateImage: AggregateImageResolvers.Type<T>;
  CgPoint: CgPointResolvers.Type<T>;
}
