import { api } from "../services/api.service";
import type { CompanyApiResponse } from "../types/company.type"

export const fetchCompany = async (): Promise<CompanyApiResponse> => {
  return api.get<CompanyApiResponse>('/company-info');
}