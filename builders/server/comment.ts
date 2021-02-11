import { Comment } from '../../server';
import { user } from './user';

export interface CommitProperties {
  repositoryId: number;
}

export interface PermittedOperations {
  editable: boolean;
  deletable: boolean;
}

export interface CommentPropertiesTemplate {
  repositoryId?: number;
}

export function commentProperties(template: Partial<CommitProperties> = {}): CommitProperties {
  return {
    repositoryId: 84,
    ...template,
  };
}
export function comentPermittedOperations(
  template: Partial<PermittedOperations> = {},
): PermittedOperations {
  return {
    editable: true,
    deletable: true,
    ...template,
  };
}
const defaultCommentTemplate: Partial<Comment> = {
  properties: commentProperties(),
  permittedOperations: comentPermittedOperations(),
};
export function comment(template: Partial<Comment> = defaultCommentTemplate): Comment {
  return {
    id: 42,
    version: 0,
    text: 'This is a great line of code!',
    author: user(),
    createdDate: 1505778786337,
    updatedDate: 1505778786337,
    comments: [],
    tasks: [],
    ...template,
  };
}
