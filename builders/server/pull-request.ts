import {
  PullRequest,
  PullRequestApproved,
  PullRequestCommentAdded,
  PullRequestCommentDeleted,
  PullRequestCommentEdited,
  PullRequestDeclined,
  PullRequestDeleted,
  PullRequestMerged,
  PullRequestModifiedEvent,
  PullRequestNeedsWork,
  PullRequestOpenedEvent,
  PullRequestParticipant,
  PullRequestRef,
  PullRequestReviewersUpdatedEvent,
  PullRequestTarget,
  PullRequestUnapproved,
  PullRequestUpdatedEvent,
} from '../../server';
import { comment } from './comment';
import { repository } from './repo';
import { user } from './user';

const DEFAULT_DATE = '2020-02-20T14:49:41+1100';

export function pullRequestRef(template: Partial<PullRequestRef> = {}): PullRequestRef {
  return {
    id: 'refs/heads/master',
    displayId: 'master',
    latestCommit: '86448735f9dee9e1fb3d3e5cd9fbc8eb9d8400f4',
    repository: repository(),
    ...template,
  };
}

export function pullRequestParticipant(
  template: Partial<PullRequestParticipant> = {},
): PullRequestParticipant {
  return {
    user: user(),
    role: 'AUTHOR',
    approved: false,
    status: 'UNAPPROVED',
    ...template,
  };
}

export function pullRequest(template: Partial<PullRequest> = {}): PullRequest {
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
    ...template,
  };
}

export function pullRequestOpenedEvent(
  template: Partial<Exclude<PullRequestOpenedEvent, 'eventKey'>> = {},
): PullRequestOpenedEvent {
  return {
    eventKey: 'pr:opened',
    date: DEFAULT_DATE,
    actor: user(),
    pullRequest: pullRequest(),
    ...template,
  };
}

export function pullRequestUpdatedEvent(
  template: Partial<Exclude<PullRequestUpdatedEvent, 'eventKey'>> = {},
): PullRequestUpdatedEvent {
  return {
    eventKey: 'pr:from_ref_updated',
    date: DEFAULT_DATE,
    actor: user(),
    pullRequest: pullRequest(),
    previousFromHash: '99f3ea32043ba3ecaa28de6046b420de70257d80',
    ...template,
  };
}

export function pullRequestTarget(template: Partial<PullRequestTarget> = {}): PullRequestTarget {
  return {
    id: 'refs/heads/master',
    displayId: 'master',
    type: 'BRANCH',
    latestCommit: '860c4eb4ed0f969b47144234ba13c31c498cca69',
    latestChangeset: '860c4eb4ed0f969b47144234ba13c31c498cca69',
    ...template,
  };
}

export function pullRequestModifiedEvent(
  template: Partial<Exclude<PullRequestModifiedEvent, 'eventKey'>> = {},
): PullRequestModifiedEvent {
  return {
    eventKey: 'pr:modified',
    date: DEFAULT_DATE,
    actor: user(),
    pullRequest: pullRequest(),
    previousTitle: 'A cool PR',
    previousDescription: 'A neat description',
    previousTarget: pullRequestTarget(),
    ...template,
  };
}

export function pullRequestReviewersUpdatedEvent(
  template: Partial<Exclude<PullRequestReviewersUpdatedEvent, 'eventKey'>> = {},
): PullRequestReviewersUpdatedEvent {
  return {
    eventKey: 'pr:reviewer:updated',
    date: DEFAULT_DATE,
    actor: user(),
    pullRequest: pullRequest(),
    removedReviewers: [],
    addedReviewers: [user()],
    ...template,
  };
}

export function pullRequestApproved(
  template: Partial<Exclude<PullRequestApproved, 'eventKey'>> = {},
): PullRequestApproved {
  return {
    eventKey: 'pr:reviewer:approved',
    date: DEFAULT_DATE,
    actor: user(),
    pullRequest: pullRequest(),
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
    ...template,
  };
}

export function pullRequestUnapproved(
  template: Partial<Exclude<PullRequestUnapproved, 'eventKey'>> = {},
): PullRequestUnapproved {
  return {
    eventKey: 'pr:reviewer:unapproved',
    date: DEFAULT_DATE,
    actor: user(),
    pullRequest: pullRequest(),
    participant: pullRequestParticipant(),
    previousStatus: 'APPROVED',
    ...template,
  };
}

export function pullRequestNeedsWork(
  template: Partial<Exclude<PullRequestNeedsWork, 'eventKey'>> = {},
): PullRequestNeedsWork {
  return {
    eventKey: 'pr:reviewer:needs_work',
    date: DEFAULT_DATE,
    actor: user(),
    pullRequest: pullRequest(),
    participant: pullRequestParticipant(),
    previousStatus: 'UNAPPROVED',
    ...template,
  };
}

export function pullRequestMerged(
  template: Partial<Exclude<PullRequestMerged, 'eventKey'>> = {},
): PullRequestMerged {
  return {
    eventKey: 'pr:merged',
    date: DEFAULT_DATE,
    actor: user(),
    pullRequest: pullRequest(),
    ...template,
  };
}

export function pullRequestDeclined(
  template: Partial<Exclude<PullRequestDeclined, 'eventKey'>> = {},
): PullRequestDeclined {
  return {
    eventKey: 'pr:declined',
    date: DEFAULT_DATE,
    actor: user(),
    pullRequest: pullRequest(),
    ...template,
  };
}

export function pullRequestDeleted(
  template: Partial<Exclude<PullRequestDeleted, 'eventKey'>> = {},
): PullRequestDeleted {
  return {
    eventKey: 'pr:deleted',
    date: DEFAULT_DATE,
    actor: user(),
    pullRequest: pullRequest(),
    ...template,
  };
}

export function pullRequestCommentAdded(
  template: Partial<Exclude<PullRequestCommentAdded, 'eventKey'>> = {},
): PullRequestCommentAdded {
  return {
    eventKey: 'pr:comment:added',
    date: DEFAULT_DATE,
    actor: user(),
    pullRequest: pullRequest(),
    comment: comment(),
    commentParentId: 43,
    ...template,
  };
}

export function pullRequestCommentEdited(
  template: Partial<Exclude<PullRequestCommentEdited, 'eventKey'>> = {},
): PullRequestCommentEdited {
  return {
    eventKey: 'pr:comment:edited',
    date: DEFAULT_DATE,
    actor: user(),
    pullRequest: pullRequest(),
    comment: comment(),
    commentParentId: 43,
    previousComment: 'previous comment',
    ...template,
  };
}

export function pullRequestCommentDeleted(
  template: Partial<Exclude<PullRequestCommentDeleted, 'eventKey'>> = {},
): PullRequestCommentDeleted {
  return {
    eventKey: 'pr:comment:deleted',
    date: DEFAULT_DATE,
    actor: user(),
    pullRequest: pullRequest(),
    comment: comment(),
    commentParentId: 43,
    ...template,
  };
}
