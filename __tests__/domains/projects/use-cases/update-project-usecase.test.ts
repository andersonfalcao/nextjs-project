import { describe, it, expect } from "vitest"

import { ProjectRepositoryMock } from "../../../mocks/product-repository-mock"
import { UpdateProjectUseCase } from "../../../../domains/projects/use-cases/update-project.usecase"


describe("CreateProductUseCase", () => {

  it("should create a product", async () => {

    const repository = new ProjectRepositoryMock()

    repository.projects.push({
        id: '1',
        name: 'Project Name',
        ownerId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
    })

    const useCase = new UpdateProjectUseCase(repository)

    const project = await useCase.execute({
        id: '1',
        name: 'Project Name Updated',
        ownerId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
    });

    expect(project.name).toBe('Project Name Updated')
    expect(repository.projects.length).toBe(1)
  })

})
