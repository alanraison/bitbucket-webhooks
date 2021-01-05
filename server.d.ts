export interface HateosObject {
  links?: {
    [name: string]: any[]
  };
}

/** Represents a Bitbucket User */
export interface User extends HateosObject {
  name: string;
  emailAddress: string;
  id: number;
  displayName: string;
  active: boolean;
  slug: string;
  type: string;
}

/** A Bitbucket project; a collection of repositories */
export interface Project extends HateosObject {
  key: string;
  id: number;
  name: string;
  public?: boolean;
  type: string;
  owner?: User;
}

/** A Bitbucket Repository */
export interface Repository extends HateosObject {
  slug: string;
  id: number;
  name: string;
  scmId: string;
  state: string;
  statusMessage: string;
  forkable: boolean;
  project: Project;
  public: boolean;
  hierarchyId?: string;
}

/** A forked Repository */
export interface ForkedRepository extends Repository {
  /** The original repository that was forked */
  origin: Repository;
}

/** Represents a ref; a repository reference */
export interface ChangeRef {
  id: string;
  displayId: string;
  type: string;
}

/** Represents a change in a repository */
export interface Change {
  ref: ChangeRef;
  refId: string;
  fromHash: string;
  toHash: string;
  type: string;
}

export interface Comment {
  properties?: {
    repositoryId: number,
  };
  id: number;
  version: number;
  text: string;
  author: User;
  createdDate: number;
  updatedDate: number;
  comments: any[];
  tasks: any[];
  permittedOperations?: {
    editable: boolean,
    deletable: boolean,
  };
}

export interface PullRequestRef {
  id: string;
  displayId: string;
  latestCommit: string;
  repository: Repository;
}

export interface PullRequestParticipant {
  user: User;
  role: string;
  approved: boolean;
  status: string;
  lastReviewedCommit?: string;
}

/** A Pull Request */
export interface PullRequest extends HateosObject {
  id: number;
  version: number;
  title: string;
  description?: string;
  state: string;
  open: boolean;
  closed: boolean;
  createdDate: number;
  updatedDate: number;
  closedDate?: number;
  fromRef: PullRequestRef;
  toRef: PullRequestRef;
  locked: boolean;
  author: PullRequestParticipant,
  reviewers: PullRequestParticipant[];
  participants: PullRequestParticipant[];
  properties?: any;
}

/** The base of every event */
export interface Event {
  /** The type of event. Also available from webhook headers */
  eventKey: string;
  /** The timestamp of the event, in ISO format */
  date: string;
}

/** A User-triggered event */
export interface UserEvent extends Event {
  /** the user who triggered the event */
  actor: User;
}

/** An event, triggered by a user in a repository */
export interface UserRepositoryEvent extends UserEvent {
  /** The repository for which the event triggered */
  repository: Repository;
}

/** 
 * A user pushes one or more commits to a repository. Has an eventKey of `repo:refs_changed`
 */
export interface RepositoryPushEvent extends UserRepositoryEvent {
  eventKey: 'repo:refs_changed';
  /** The details of the push */
  changes: Change[];
}

/** A user updates the **Name** of a repository. Has an eventKey of `repo:modified` */
export interface RepositoryModifiedEvent extends UserEvent {
  eventKey: 'repo:modified';
  /** The old version of the repository */
  old: Repository;
  /** The new verison of the repository */
  new: Repository;
}

/** A user forks a repository. Has the eventKey `repo:forked` */
export interface RepositoryForkedEvent extends UserEvent {
  eventKey: 'repo:forked';
  repository: ForkedRepository;
}

export interface CommitCommentEvent extends UserRepositoryEvent {
  comment: Comment;
  commit: string;
}

/** A user comments on a commit in a repository. Has the eventKey `repo:comment:added` */
export interface CommitCommentAddedEvent extends CommitCommentEvent {
  eventKey: 'repo:comment:added';
}

/** A user edits a comment on a commit in a repository. Has the eventKey `repo:comment:edited` */
export interface CommitCommentEditEvent extends CommitCommentEvent {
  eventKey: 'repo:comment:edited';
  previousComment: string;
}

/** A user deletes a comment on a commit in a repository. Has the eventKey `repo:comment:deleted` */
export interface CommitCommentDeleteEvent extends CommitCommentEvent {
  eventKey: 'repo:comment:deleted';
}

/** A mirror has finished synchronizing this repository. Has the eventKey `mirror:repo_synchronized` */
export interface MirrorSynchronizedEvent extends Event {
  eventKey: 'mirror:repo_synchronized',
  /**
   * The mirror which synchronized the changes. This JSON object contains both the `name` and the `id` of the `mirrorServer` which synchronized the changes.
   */
  mirrorServer: {
    id: string;
    name: string;
  };
  /** 
   * The sync type the mirror used to synchronize the changes which are announced by this webhook.
   * 
   * This value can be `snapshot` or `incremental` for mirrors 6.7 and higher. It defaults to `smartMirror` for mirrors before version 6.7. 
   */
  syncType: string;
  /**
   * If this value is `true`, the list of changes will be empty because it exceeded the limit of refs that can be included.
   */
  refLimitExceeded: boolean;
  /** The repository */
  repository: Repository;
  /** The ref changes for this push */
  changes: Change[];
}

export interface PullRequestEvent extends UserEvent {
  pullRequest: PullRequest;
}

/** Pull Request created */
export interface PullRequestOpenedEvent extends PullRequestEvent {
  eventKey: 'pr:opened';
}

/** Source branch updated */
export interface PullRequestUpdatedEvent extends PullRequestEvent {
  eventKey: 'pr:from_ref_updated';
  previousFromHash: string;
}

export interface PullRequestTarget {
  id: string;
  displayId: string;
  type: string;
  latestCommit: string;
  latestChangeset: string;
}

/** Pull Request Modified */
export interface PullRequestModifiedEvent extends PullRequestEvent {
  eventKey: 'pr:modified';
  /** Previous title of the pull request, may not have changed */
  previousTitle: string;
  /** Previous description of pull request, may not have changed */
  previousDescription: string;
  /** Previous target of the pull request, may not have changed */
  previousTarget: PullRequestTarget;
}

/** Reviewers added or removed */
export interface PullRequestReviewersUpdatedEvent extends PullRequestEvent {
  eventKey: 'pr:reviewer:updated';
  /** Users that are no longer reviewers */
  removedReviewers: User[];
  addedReviewers: User[];
}

export interface PullRequestReviewEvent extends PullRequestEvent {
  participant: PullRequestParticipant;
  previousStatus: string;
}

/** A user approves a pull request for a repository. */
export interface PullRequestApproved extends PullRequestReviewEvent {
  eventKey: 'pr:reviewer:approved';
}

/** A user removes an approval from a pull request for a repository. */
export interface PullRequestUnapproved extends PullRequestReviewEvent {
  eventKey: 'pr:reviewer:unapproved';
}

/** A user marks a pull request as needs work. */
export interface PullRequestNeedsWork extends PullRequestReviewEvent {
  eventKey: 'pr:reviewer:needs_work';
}

/** A user merges a pull request for a repository. */
export interface PullRequestMerged extends PullRequestEvent {
  eventKey: 'pr:merged';
}

/** A user declines a pull request for a repository. */
export interface PullRequestDeclined extends PullRequestEvent {
  eventKey: 'pr:declined';
}

/** A user deleted a pull request for a repository. */
export interface PullRequestDeleted extends PullRequestEvent {
  eventKey: 'pr:deleted';
}

export interface PullRequestCommentEvent extends PullRequestEvent {
  comment: Comment;
  commentParentId: number;
}

/** A user comments on a pull request. */
export interface PullRequestCommentAdded extends PullRequestCommentEvent {
  eventKey: 'pr:comment:added';
}

export interface PullRequestCommentEdited extends PullRequestCommentEvent {
  eventKey: 'pr:comment:edited';
  previousComment: string;
}

export interface PullRequestCommentDeleted extends PullRequestCommentEvent {
  eventKey: 'pr:comment:deleted';
}
