import {
  ForkedRepository,
  MirrorSynchronizedEvent,
  RepositoryForkedEvent,
  RepositoryModifiedEvent,
  RepositoryPushEvent,
} from '../../server';
import { change } from './change';
import { repository } from './repo';
import { user } from './user';

const DEFAULT_DATE = '2020-02-20T14:49:41+1100';

export function repositoryPushEvent(
  template: Partial<Exclude<RepositoryPushEvent, 'eventKey'>> = {},
): RepositoryPushEvent {
  return {
    eventKey: 'repo:refs_changed',
    date: DEFAULT_DATE,
    actor: user(),
    repository: repository(),
    changes: [change()],
    ...template,
  };
}

export function repositoryModifiedEvent(
  template: Partial<Exclude<RepositoryModifiedEvent, 'eventKey'>> = {},
): RepositoryModifiedEvent {
  return {
    eventKey: 'repo:modified',
    date: DEFAULT_DATE,
    actor: user(),
    old: repository(),
    new: repository({
      name: 'new',
    }),
    ...template,
  };
}

export function forkedRepository(template: Partial<ForkedRepository> = {}): ForkedRepository {
  return {
    ...repository(),
    origin: repository({
      name: 'forked',
      slug: 'FORK',
    }),
    ...template,
  };
}

export function repositoryForkedEvent(
  template: Partial<Exclude<RepositoryForkedEvent, 'eventKey'>> = {},
): RepositoryForkedEvent {
  return {
    eventKey: 'repo:forked',
    date: DEFAULT_DATE,
    actor: user(),
    repository: forkedRepository(),
    ...template,
  };
}

export function mirrorSynchronizedEvent(
  template: Partial<Exclude<MirrorSynchronizedEvent, 'eventKey'>> = {},
): MirrorSynchronizedEvent {
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
        clone: [
          {
            name: 'ssh',
            href: 'ssh://git@example.com:7997/project/repository.git',
          },
        ],
        self: [
          {
            href: 'https://example.com/projects/project/repos/repo/browse',
          },
        ],
      },
    },
    changes: [change()],
    ...template,
  };
}
