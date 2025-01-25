import axios from "axios";
import { TractianService } from "../services/tractian-service";
import { TractianRepo } from "../repositories/tractian-repo";

function createTractianService(): TractianService {
  const apiInstance = axios.create({
    baseURL: "https://fake-api.tractian.com",
    timeout: 10000
  });

  const repository = new TractianRepo(apiInstance);
  return new TractianService(repository);
}

export const tractianService = createTractianService();
export default tractianService;
