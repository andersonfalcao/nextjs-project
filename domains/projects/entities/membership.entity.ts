export type ProjectRole =
  | "owner"
  | "admin"
  | "member"

export interface Membership {
  userId: string
  projectId: string
  role: ProjectRole
}
