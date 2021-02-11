import {
  CommitCommentAddedEvent,
  CommitCommentDeleteEvent,
  CommitCommentEditEvent,
  Repository,
} from '../../server';
import { comment } from './comment';
import { project } from './project';
import { user } from './user';

const DEFAULT_DATE = '2020-02-20T14:49:41+1100';

export function repository(template: Partial<Repository> = {}): Repository {
  return {
    slug: 'repository',
    id: 84,
    name: 'repository',
    scmId: 'git',
    state: 'AVAILABLE',
    statusMessage: 'Available',
    forkable: true,
    project: project(),
    public: false,
    ...template,
  };
}

const DEFAULT_COMMIT = '178864a7d521b6f5e720b386b2c2b0ef8563e0dc';

export function commitCommentAddedEvent(
  template: Partial<Exclude<CommitCommentAddedEvent, 'eventKey'>> = {},
): CommitCommentAddedEvent {
  return {
    eventKey: 'repo:comment:added',
    date: DEFAULT_DATE,
    actor: user(),
    repository: repository(),
    comment: comment(),
    commit: DEFAULT_COMMIT,
    ...template,
  };
}

export function commitCommentEditEvent(
  template: Partial<Exclude<CommitCommentEditEvent, 'eventKey'>> = {},
): CommitCommentEditEvent {
  return {
    eventKey: 'repo:comment:edited',
    date: DEFAULT_DATE,
    actor: user(),
    repository: repository(),
    comment: comment(),
    commit: DEFAULT_COMMIT,
    previousComment: 'This is an okay line of code!',
    ...template,
  };
}

export function commitCommentDeleteEvent(
  template: Partial<Exclude<CommitCommentDeleteEvent, 'eventKey'>> = {},
): CommitCommentDeleteEvent {
  return {
    eventKey: 'repo:comment:deleted',
    date: DEFAULT_DATE,
    actor: user(),
    repository: repository(),
    comment: comment(),
    commit: DEFAULT_COMMIT,
    ...template,
  };
}
