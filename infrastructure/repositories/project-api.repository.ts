import { ProjectRepository } from "@/domains/projects/repositories/project.repository"
import { Project } from "@/domains/projects/entities/project.entity"
import { api } from "../api/http-client"

export class ProjectApiRepository implements ProjectRepository {
  async create(project: Project): Promise<Project> {
    const response = await api.post("/projects", project)
    return response.data
  }

  async getById(id: string): Promise<Project | null> {
    const response = await api.get(`/projects/${id}`)
    return response.data
  }

  async getAll(): Promise<Project[]> {
    const response = await api.get("/projects")
    return response.data
  }

  async update(project: Project): Promise<Project> {
    const response = await api.put(`/projects/${project.id}`, project)
    return response.data
  }

  async delete(id: string): Promise<Project> {
    const response = await api.delete(`/projects/${id}`)
    return response.data
  }
}
