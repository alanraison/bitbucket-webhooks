import { Comment, CommitCommentAddedEvent, CommitCommentDeleteEvent, CommitCommentEditEvent, Project, Repository } from "../../server";
import { comment } from "./comment";
import { UserEventTemplate } from "./event";
import { project } from "./project";
import { user } from "./user";

const DEFAULT_DATE = '2020-02-20T14:49:41+1100';

export interface RepositoryTemplate {
  slug?: string;
  id?: number;
  name?: string;
  scmId?: string;
  state?: string;
  statusMessage?: string;
  forkable?: boolean;
  project?: Project;
  public?: boolean;
}

export function repository(template: RepositoryTemplate = {}): Repository {
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

export interface UserRepositoryEventTemplate extends UserEventTemplate {
  repository?: Repository;
}

export interface CommitCommentEventTemplate extends UserRepositoryEventTemplate {
  comment?: Comment;
  commit?: string;
}

const DEFAULT_COMMIT = '178864a7d521b6f5e720b386b2c2b0ef8563e0dc';

export function commitCommentAddedEvent(template: CommitCommentEventTemplate): CommitCommentAddedEvent {
  return {
    eventKey: 'repo:comment:added',
    date: DEFAULT_DATE,
    actor: user(),
    repository: repository(),
    comment: comment(),
    commit: DEFAULT_COMMIT,
    ...template,
  }
}

export interface CommitCommentEditEventTemplate extends CommitCommentEventTemplate {
  previousComment?: string;
}

export function commitCommentEditEvent(template: CommitCommentEditEventTemplate): CommitCommentEditEvent {
  return {
    eventKey: 'repo:comment:edited',
    date: DEFAULT_DATE,
    actor: user(),
    repository: repository(),
    comment: comment(),
    commit: DEFAULT_COMMIT,
    previousComment: 'This is an okay line of code!',
    ...template,
  }
}

export function commitCommentDeleteEvent(template: CommitCommentEventTemplate): CommitCommentDeleteEvent {
  return {
    eventKey: 'repo:comment:deleted',
    date: DEFAULT_DATE,
    actor: user(),
    repository: repository(),
    comment: comment(),
    commit: DEFAULT_COMMIT,
    ...template,
  }
}
