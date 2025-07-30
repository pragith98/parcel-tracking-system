import { api } from "../services/api.service";
import type { Pagination, ParcelApiResponse, ParcelFilterTerms, ParcelToCreate, ParcelToUpdate } from "../types/parcel.type";

export const fetchParcels = async (
  pagination: Pagination,
  filterTerms: ParcelFilterTerms
): Promise<ParcelApiResponse> => {
  let filters = '';

  if (filterTerms.completed) {filters += `&completed=${filterTerms.completed}`;}
  if (filterTerms.code) {filters += `&code=${filterTerms.code}`;}
  if (filterTerms.createdAt) {filters += `&createdAt=${filterTerms.createdAt}`;}
  if (filterTerms.deliveredAt) {filters += `&deliveredAt=${filterTerms.deliveredAt}`;}
  if (filterTerms.pickedUpAt) {filters += `&pickedUpAt=${filterTerms.pickedUpAt}`;}
  if (filterTerms.receiverAddress) {filters += `&receiverAddress=${filterTerms.receiverAddress}`;}
  if (filterTerms.receiverCity) {filters += `&receiverCity=${filterTerms.receiverCity}`;}
  if (filterTerms.receiverName) {filters += `&receiverName=${filterTerms.receiverName}`;}
  if (filterTerms.receiverTelephone) {filters += `&receiverTelephone=${filterTerms.receiverTelephone}`;}
  if (filterTerms.senderAddress) {filters += `&senderAddress=${filterTerms.senderAddress}`;}
  if (filterTerms.senderCity) {filters += `&senderCity=${filterTerms.senderCity}`;}
  if (filterTerms.senderName) {filters += `&senderName=${filterTerms.senderName}`;}
  if (filterTerms.senderTelephone) {filters += `&senderTelephone=${filterTerms.senderTelephone}`;}

  return api.get<ParcelApiResponse>(`/parcels/?page=${pagination.page}&limit=${pagination.limit}${filters}`);
}

export const getParcelById = async (id: string): Promise<ParcelApiResponse> => {
  return api.get<ParcelApiResponse>(`/parcels/${id}`);
}

export const updateParcelById = async (
  parcel: ParcelToUpdate
): Promise<ParcelApiResponse> => {
  return api.put<ParcelApiResponse>(`/parcels/${parcel.id}`, parcel);
}

export const createParcel = async (
  parcel: ParcelToCreate
): Promise<ParcelApiResponse> => {
  return api.post<ParcelApiResponse>('/parcels/', parcel);
}

export const deleteParcel = async (id: string): Promise<boolean> => {
  return api.delete<boolean>(`/parcels/${id}`);
}