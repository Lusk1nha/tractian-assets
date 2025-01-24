import { Assets } from "@/types/assets";
import { Company } from "@/types/companies";
import { Locations } from "@/types/locations";

import { AxiosInstance } from "axios";

interface TractianRepoAbstract {
  getAllCompanies(): Promise<Company[]>;
  getLocations(companyId: string): Promise<Locations[]>;
  getAssets(companyId: string): Promise<Assets[]>;
}

export class TractianRepo implements TractianRepoAbstract {
  private readonly _instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    if (!instance) {
      throw new Error("Axios instance is required");
    }

    this._instance = instance;

    this.getAllCompanies = this.getAllCompanies.bind(this);
    this.getLocations = this.getLocations.bind(this);
    this.getAssets = this.getAssets.bind(this);
  }

  async getAllCompanies(): Promise<Company[]> {
    const response = await this._instance.get<Company[]>("/companies");
    return response.data;
  }

  async getLocations(companyId: string): Promise<Locations[]> {
    const response = await this._instance.get(
      `/companies/${companyId}/locations`
    );
    return response.data;
  }

  async getAssets(companyId: string): Promise<Assets[]> {
    const response = await this._instance.get(`/companies/${companyId}/assets`);
    return response.data;
  }
}
