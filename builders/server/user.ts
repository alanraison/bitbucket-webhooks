import { User } from '../../server';

export function user(template: Partial<User> = {}): User {
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
