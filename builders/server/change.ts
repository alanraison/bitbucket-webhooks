import { ChangeRef, Change } from "../../server";

export interface ChangeRefTemplate {
  id?: string;
  displayId?: string;
  type?: string;
}

export function changeRef(template: ChangeRefTemplate = {}): ChangeRef {
  return {
    id: 'refs/heads/master',
    displayId: 'master',
    type: 'BRANCH',
    ...template,
  };
}

export interface ChangeTemplate {
  ref?: ChangeRef;
  refId?: string;
  fromHash?: string;
  toHash?: string;
  type?: string;
}

export function change(template: ChangeTemplate = {}): Change {
  return {
    ref: changeRef(),
    refId: 'refs/heads/master',
    fromHash: 'ecddabb624f6f5ba43816f5926e580a5f680a932',
    toHash: '178864a7d521b6f5e720b386b2c2b0ef8563e0dc',
    type: 'UPDATE',
    ...template,
  };
}
