export interface Company {
  id:         string;
  name:       string;
  address:    string;
  telephone:  string;
  email:      string;
}

export interface CompanyApiResponse {
  data:     Company;
  success:  true;
}

export interface CompanyToCreate {
  name:       string;
  address:    string;
  telephone:  string;
  email:      string;
}