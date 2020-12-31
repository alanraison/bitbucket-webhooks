import { Project } from "../../server";

export interface ProjectTemplate {
  key?: string;
  id?: number;
  name?: string;
  public?: boolean;
  type?: string;
}

export function project(template: ProjectTemplate = {}): Project {
  return {
    key: 'PROJ',
    id: 84,
    name: 'project',
    public: false,
    type: 'NORMAL',
    ...template,
  };
}
