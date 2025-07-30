export interface Parcel {
  id:                     string;
  remarks:                string;
  receiverName:           string;
  receiverTelephone:      string;
  receiverAddress:        string;
  receiverEmail:          string;
  receiverCity:           string;
  senderName:             string;
  senderTelephone:        string;
  senderAddress:          string;
  senderEmail:            string;
  senderCity:             string;
  estimatedDeliveryDate:  string;
  pickedUpAt:             string;
  deliveredAt:            string;
  code:                   string;
  createdAt:              string;
  updatedAt:              string;
  createdBy: {
    id:   string;
    name: string;
  };
  updatedBy: {
    id:   string;
    name: string;
  };
}

export interface ParcelApiResponse {
  data:         Parcel[] | Parcel;
  success:      true;
  total?:       number;
  currentPage?: number;
  lastPage?:    number;
  perPage?:     number;
}

export interface ParcelToCreate {
  remarks:            string;
  receiverName:       string;
  receiverTelephone:  string;
  receiverAddress:    string;
  receiverEmail:      string;
  receiverCity:       string;
  senderName:         string;
  senderTelephone:    string;
  senderAddress:      string;
  senderEmail:        string;
  senderCity:         string;
}

export interface ParcelToUpdate {
  id:                     string;
  remarks:                string;
  receiverName:           string;
  receiverTelephone:      string;
  receiverAddress:        string;
  receiverEmail:          string;
  receiverCity:           string;
  senderName:             string;
  senderTelephone:        string;
  senderAddress:          string;
  senderEmail:            string;
  senderCity:             string;
  estimatedDeliveryDate:  string;
}

export interface Pagination {
  page:   number;
  limit:  number;
}

export interface ParcelFilterTerms {
  senderName:         unknown;
  senderTelephone:    unknown;
  senderAddress:      unknown;
  senderCity:         unknown;
  receiverName:       unknown;
  receiverTelephone:  unknown;
  receiverAddress:    unknown;
  receiverCity:       unknown;
  code:               unknown;
  pickedUpAt:         unknown;
  deliveredAt:        unknown;
  createdAt:          unknown;
  completed: 'COMPLETED' | 'NOT_COMPLETED';
}