import { User, Comment } from "../../server";
import { user } from "./user";

export interface CommitPropertiesTemplate {
  repositoryId?: number;
}

export interface PermittedOperationsTemplate {
  editable?: boolean;
  deletable?: boolean;
}

export interface CommentPropertiesTemplate {
  repositoryId?: number;
}

export interface CommentTemplate {
  properties: {
    repositoryId: number,
  };
  id?: number;
  version?: number;
  text?: string;
  author?: User;
  createdDate?: number;
  updatedDate?: number;
  comments?: any[];
  tasks?: any[];
  permittedOperations?: {
    editable: boolean,
    deletable: boolean,
  };
}

export function commentProperties(template: CommitPropertiesTemplate = {}): {
  repositoryId: number;
} {
  return {
    repositoryId: 84,
    ...template,
  }
}
export function comentPermittedOperations(template: PermittedOperationsTemplate = {}): {
  editable: boolean;
  deletable: boolean;
} {
  return {
    editable: true,
    deletable: true,
    ...template,
  };
}
const defaultCommentTemplate: CommentTemplate = {
  properties: commentProperties(),
  permittedOperations: comentPermittedOperations(),
}
export function comment(template: CommentTemplate = defaultCommentTemplate): Comment {
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
