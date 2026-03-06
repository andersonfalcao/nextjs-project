export type TaskStatus =
  | "todo"
  | "in_progress"
  | "done"
  | "cancelled";

  export interface Task {
    id: string
    projectId: string
    title: string
    description?: string
    status: TaskStatus
    assigneeId?: string
    createdAt: Date
    updatedAt: Date
  }
  