import { describe, it, expect } from "vitest"

import { ProjectRepositoryMock } from "../../../mocks/product-repository-mock"
import { DeleteProjectUseCase } from "../../../../domains/projects/use-cases/delete-project.usecase"

describe("DeleteProductUseCase", () => {

  it("should delete a product", async () => {

    const repository = new ProjectRepositoryMock()

    repository.projects.push({
      id: '1',
      name: 'Project title',
      ownerId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    })

    const useCase = new DeleteProjectUseCase(repository)

    await useCase.execute("1")

    expect(repository.projects.length).toBe(0)
  })

})
