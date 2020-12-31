import { User } from "../../server";

export interface UserTemplate {
  name?: string;
  emailAddress?: string;
  id?: number;
  displayName?: string;
  active?: boolean;
  slug?: string;
  type?: string;
}

export function user(template: UserTemplate = {}): User {
  return {
    name: 'admin',
    emailAddress: 'admin@example.com',
    id: 1,
    displayName: 'Administrator',
    active: true,
    slug: 'admin',
    type: 'NORMAL',
    ...template,
  };
}
