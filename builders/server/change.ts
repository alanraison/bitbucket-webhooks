import { ChangeRef, Change } from '../../server';

export function changeRef(template: Partial<ChangeRef> = {}): ChangeRef {
  return {
    id: 'refs/heads/master',
    displayId: 'master',
    type: 'BRANCH',
    ...template,
  };
}

export function change(template: Partial<Change> = {}): Change {
  return {
    ref: changeRef(),
    refId: 'refs/heads/master',
    fromHash: 'ecddabb624f6f5ba43816f5926e580a5f680a932',
    toHash: '178864a7d521b6f5e720b386b2c2b0ef8563e0dc',
    type: 'UPDATE',
    ...template,
  };
}
