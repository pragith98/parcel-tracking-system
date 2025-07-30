import { api } from "../services/api.service";
import type { CompanyApiResponse, CompanyToSave } from "../types/company.type"

export const fetchCompany = async (): Promise<CompanyApiResponse> => {
  return api.get<CompanyApiResponse>('/company-info');
}

export const saveCompany = async (
  company: CompanyToSave
): Promise<CompanyApiResponse> => {
  return api.put<CompanyApiResponse>('/company-info', company);
}