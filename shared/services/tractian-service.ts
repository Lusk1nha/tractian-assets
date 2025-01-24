import { TractianRepo } from "@/shared/repositories/tractian-repo";

export class TractianService {
  private readonly _repo: TractianRepo;

  constructor(repository: TractianRepo) {
    this._repo = repository;
  }

  public async getCompanies() {
    return this._repo.getAllCompanies();
  }

  public async getOrderedCompanies() {
    const companies = await this._repo.getAllCompanies();

    if (!companies) {
      return [];
    }

    return companies.sort((a, b) => a.name.localeCompare(b.name));
  }

  public async getLocations(companyId: string) {
    if (!companyId) {
      throw new Error("Company id is required");
    }

    return this._repo.getLocations(companyId);
  }

  public async getAssets(companyId: string) {
    if (!companyId) {
      throw new Error("Company id is required");
    }

    return this._repo.getAssets(companyId);
  }
}
