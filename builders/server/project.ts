import { Project } from '../../server';

export function project(template: Partial<Project> = {}): Project {
  return {
    key: 'PROJ',
    id: 84,
    name: 'project',
    public: false,
    type: 'NORMAL',
    ...template,
  };
}
