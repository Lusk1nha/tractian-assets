import { Assets } from "@/types/assets";
import { Company } from "@/types/companies";
import { Locations } from "@/types/locations";
import axios from "axios";

export class TractianRepo {
  private readonly _url = "https://fake-api.tractian.com";

  constructor() {
    axios.defaults.baseURL = this._url;
  }

  public async getAllCompanies(): Promise<Company[]> {
    const response = await axios.get<Company[]>("/companies");
    return response.data;
  }

  public async getLocations(companyId: string): Promise<Locations[]> {
    const response = await axios.get(`/companies/${companyId}/locations`);
    return response.data;
  }

  public async getAssets(companyId: string): Promise<Assets[]> {
    const response = await axios.get(`/companies/${companyId}/assets`);
    return response.data;
  }
}
