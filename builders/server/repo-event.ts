import { Repository, Change, RepositoryPushEvent, RepositoryModifiedEvent, ForkedRepository, RepositoryForkedEvent, MirrorSynchronizedEvent } from "../../server";
import { EventTemplate, UserEventTemplate } from "./event";
import { change } from "./change";
import { repository, RepositoryTemplate } from "./repo";
import { user } from "./user";

const DEFAULT_DATE = '2020-02-20T14:49:41+1100';

export interface RepositoryPushEventTemplate extends UserEventTemplate {
  changes?: Change[];
}

export function repositoryPushEvent(template: RepositoryPushEventTemplate = {}): RepositoryPushEvent {
  return {
    eventKey: 'repo:refs_changed',
    date: DEFAULT_DATE,
    actor: user(),
    repository: repository(),
    changes: [change()],
    ...template,
  };
}

export interface RepositoryModifiedEventTemplate extends UserEventTemplate {
  old?: Repository,
  new?: Repository,
}

export function repositoryModifiedEvent(template: RepositoryModifiedEventTemplate): RepositoryModifiedEvent {
  return {
    eventKey: 'repo:modified',
    date: DEFAULT_DATE,
    actor: user(),
    old: repository(),
    new: repository({
      name: 'new',
    }),
    ...template,
  }
}

export interface ForkedRepositoryTemplate extends RepositoryTemplate {
  origin?: Repository;
}

export function forkedRepository(template: ForkedRepositoryTemplate = {}): ForkedRepository {
  return {
    ...repository(),
    origin: repository({
      name: 'forked',
      slug: 'FORK',
    }),
    ...template,
  }
}

export interface RepositoryForkedEventTemplate extends UserEventTemplate {
  repository?: ForkedRepository;
}

export function repositoryForkedEvent(template: RepositoryForkedEventTemplate = {}): RepositoryForkedEvent {
  return {
    eventKey: 'repo:forked',
    date: DEFAULT_DATE,
    actor: user(),
    repository: forkedRepository(),
    ...template,
  };
}

export interface MirrorSynchronizedEventTemplate extends EventTemplate {
  mirrorServer?: {
    id: string,
    name: string,
  };
  syncType?: string;
  refLimitExceeded?: boolean;
  repository?: Repository;
  changes?: Change[];
}

export function mirrorSynchronizedEvent(template: MirrorSynchronizedEventTemplate = {}): MirrorSynchronizedEvent {
  return {
    eventKey: 'mirror:repo_synchronized',
    date: DEFAULT_DATE,
    mirrorServer: {
      id: 'B88H-IR7J-5PV0-VCNS',
      name: 'Mirror Name',
    },
    syncType: 'INCREMENTAL',
    refLimitExceeded: false,
    repository: {
      ...repository(),
      links: {
        clone: [{
          name: 'ssh',
          href: 'ssh://git@example.com:7997/project/repository.git'
        }],
        self: [{
          href: 'https://example.com/projects/project/repos/repo/browse',
        }],
      }
    },
    changes: [change()],
    ...template,
  }
}
