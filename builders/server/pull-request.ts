import { 
  Comment,
  Repository, 
  PullRequestRef, 
  User, 
  PullRequestParticipant, 
  PullRequest, 
  PullRequestOpenedEvent, 
  PullRequestUpdatedEvent,
  PullRequestModifiedEvent,
  PullRequestTarget,
  PullRequestReviewersUpdatedEvent,
  PullRequestApproved,
  PullRequestUnapproved,
  PullRequestNeedsWork,
  PullRequestMerged,
  PullRequestDeclined,
  PullRequestDeleted,
  PullRequestCommentAdded,
  PullRequestCommentEdited,
  PullRequestCommentDeleted,
} from "../../server";
import { comment } from "./comment";
import { UserEventTemplate } from "./event";
import { repository } from "./repo";
import { user } from "./user";

const DEFAULT_DATE = '2020-02-20T14:49:41+1100';

export interface PullRequestRefTemplate {
  id?: string;
  displayId?: string;
  latestCommit?: string;
  repository?: Repository;
}

export function pullRequestRef(template: PullRequestRefTemplate = {}): PullRequestRef {
  return {
    id: 'refs/heads/master',
    displayId: 'master',
    latestCommit: '86448735f9dee9e1fb3d3e5cd9fbc8eb9d8400f4',
    repository: repository(),
    ...template,
  };
}

export interface PullRequestParticipantTemplate {
  user?: User;
  role?: string;
  approved?: boolean;
  status?: string;
  lastReviewedCommit?: string;
}

export function pullRequestParticipant(template: PullRequestParticipantTemplate = {}): PullRequestParticipant {
  return {
    user: user(),
    role: 'AUTHOR',
    approved: false,
    status: 'UNAPPROVED',
    ...template,
  };
}

export interface PullRequestTemplate {
  id?: number;
  version?: number;
  title?: string;
  state?: string;
  open?: boolean;
  closed?: boolean;
  createdDate?: number;
  updatedDate?: number;
  fromRef?: PullRequestRef;
  toRef?: PullRequestRef;
  locked?: boolean;
  author?: PullRequestParticipant,
  reviewers?: PullRequestParticipant[];
  participants?: PullRequestParticipant[];
  links?: any[];
}

export function pullRequest(template: PullRequestTemplate = {}): PullRequest {
  return {
    id: 2,
    version: 16,
    title: 'Webhook',
    state: 'OPEN',
    open: true,
    closed: false,
    createdDate: 1582065825700,
    updatedDate: 1582170581372,
    fromRef: pullRequestRef({
      id: 'refs/head/pr-webhook',
      displayId: 'pr-webhook',
      latestCommit: 'aab847db240ccae221f8036605b00f777eba95d2',
    }),
    toRef: pullRequestRef(),
    locked: false,
    author: pullRequestParticipant(),
    reviewers: [],
    participants: [],
    links: [],
    ...template,
  }
}

export interface PullRequestEventTemplate extends UserEventTemplate {
  pullrequest?: PullRequest;
}

export interface PullRequestOpenedEventTemplate extends PullRequestEventTemplate { }

export function pullRequestOpenedEvent(template: PullRequestOpenedEventTemplate = {}): PullRequestOpenedEvent {
  return {
    eventKey: 'pr:opened',
    date: DEFAULT_DATE,
    actor: user(),
    pullrequest: pullRequest(),
    ...template,
  }
}

export interface PullRequestUpdatedEventTemplate extends PullRequestEventTemplate {
  previousFromHash?: string;
}

export function pullRequestUpdatedEvent(template: PullRequestUpdatedEventTemplate = {}): PullRequestUpdatedEvent {
  return {
    eventKey: 'pr:from_ref_updated',
    date: DEFAULT_DATE,
    actor: user(),
    pullrequest: pullRequest(),
    previousFromHash: '99f3ea32043ba3ecaa28de6046b420de70257d80',
    ...template,
  };
}

export interface PullRequestTargetTemplate {
  id?: string;
  displayId?: string;
  latestCommit?: string;
  latestChangeset?: string;
}

export function pullRequestTarget(template: PullRequestTargetTemplate = {}): PullRequestTarget {
  return {
    id: 'refs/heads/master',
    displayId: 'master',
    latestCommit: '860c4eb4ed0f969b47144234ba13c31c498cca69',
    latestChangeset: '860c4eb4ed0f969b47144234ba13c31c498cca69',
    ...template,
  };
}

export interface PullRequestModifiedEventTemplate extends PullRequestEventTemplate {
  previousTitle?: string;
  previousDescription?: string;
  previousTarget?: PullRequestTarget;
}

export function pullRequestModifiedEvent(template: PullRequestModifiedEventTemplate = {}): PullRequestModifiedEvent {
  return {
    eventKey: 'pr:modified',
    date: DEFAULT_DATE,
    actor: user(),
    pullrequest: pullRequest(),
    previousTitle: 'A cool PR',
    previousDescription: 'A neat description',
    previousTarget: pullRequestTarget(),
    ...template,
  }
}

export interface PullRequestReviewersUpdatedEventTemplate extends PullRequestEventTemplate {
  removedReviewers?: User[];
  addedReviewers?: User[];
}

export function pullRequestReviewersUpdatedEvent(template: PullRequestReviewersUpdatedEventTemplate = {}): PullRequestReviewersUpdatedEvent {
  return {
    eventKey: 'pr:reviewer:updated',
    date: DEFAULT_DATE,
    actor: user(),
    pullrequest: pullRequest(),
    removedReviewers: [],
    addedReviewers: [user()],
  };
}

export interface PullRequestReviewEventTemplate extends PullRequestEventTemplate {
  participant?: PullRequestParticipant,
  previousStatus?: string;
}

export function pullRequestApproved(template: PullRequestReviewEventTemplate): PullRequestApproved {
  return {
    eventKey: 'pr:reviewer:approved',
    date: DEFAULT_DATE,
    actor: user(),
    pullrequest: pullRequest(),
    participant: pullRequestParticipant({
      user: user({
        name: 'approver',
        displayName: 'Approver',
        id: 2,
        emailAddress: 'approver@example.com',
      }),
      role: 'REVIEWER',
      approved: true,
      status: 'APPROVED',
    }),
    previousStatus: 'UNAPPROVED',
    ...template
  }
}

export function pullRequestUnapproved(template: PullRequestReviewEventTemplate): PullRequestUnapproved {
  return {
    eventKey: 'pr:reviewer:unapproved',
    date: DEFAULT_DATE,
    actor: user(),
    pullrequest: pullRequest(),
    participant: pullRequestParticipant(),
    previousStatus: 'APPROVED',
    ...template,
  }
}

export function pullRequestNeedsWork(template: PullRequestReviewEventTemplate): PullRequestNeedsWork {
  return {
    eventKey: 'pr:reviewer:needs_work',
    date: DEFAULT_DATE,
    actor: user(),
    pullrequest: pullRequest(),
    participant: pullRequestParticipant(),
    previousStatus: 'UNAPPROVED',
    ...template,
  }
}

export function pullRequestMerged(template: PullRequestEventTemplate): PullRequestMerged {
  return {
    eventKey: 'pr:merged',
    date: DEFAULT_DATE,
    actor: user(),
    pullrequest: pullRequest(),
    ...template,
  }
}

export function pullRequestDeclined(template: PullRequestEventTemplate): PullRequestDeclined {
  return {
    eventKey: 'pr:declined',
    date: DEFAULT_DATE,
    actor: user(),
    pullrequest: pullRequest(),
    ...template,
  }
}

export function pullRequestDeleted(template: PullRequestEventTemplate): PullRequestDeleted {
  return {
    eventKey: 'pr:deleted',
    date: DEFAULT_DATE,
    actor: user(),
    pullrequest: pullRequest(),
    ...template,
  }
}

export interface PullRequestCommentEventTemplate {
  comment?: Comment;
  commentParentId?: number;
}

export function pullRequestCommentAdded(template: PullRequestCommentEventTemplate): PullRequestCommentAdded {
  return {
    eventKey: 'pr:comment:added',
    date: DEFAULT_DATE,
    actor: user(),
    pullrequest: pullRequest(),
    comment: comment(),
    commentParentId: 43,
    ...template,
  }
}

export interface PullRequestCommentEditedTemplate extends PullRequestCommentEventTemplate {
  previousComment?: string;
}

export function pullRequestCommentEdited(template: PullRequestCommentEditedTemplate): PullRequestCommentEdited {
  return {
    eventKey: 'pr:comment:edited',
    date: DEFAULT_DATE,
    actor: user(),
    pullrequest: pullRequest(),
    comment: comment(),
    commentParentId: 43,
    previousComment: 'previous comment',
    ...template,
  }
}

export function pullRequestCommentDeleted(template: PullRequestCommentEventTemplate): PullRequestCommentDeleted {
  return {
    eventKey: 'pr:comment:deleted',
    date: DEFAULT_DATE,
    actor: user(),
    pullrequest: pullRequest(),
    comment: comment(),
    commentParentId: 43,
    ...template,
  }
}