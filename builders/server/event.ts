import { User } from "../../server";

export interface EventTemplate {
  date?: string;
}

export interface UserEventTemplate extends EventTemplate {
  actor?: User;
}
