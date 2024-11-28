import { Bolsa } from "../types/bolsa";
import apiClient from "./Axios";


export const getAllBolsas = async (): Promise<Bolsa[]> => {
  try {
    const response = await apiClient.get("bolsas");
    return response.data;
  } catch (error) {
    console.log('Error fetching AllBolsas', error);
    throw error;
  }
}

export const getBolsa = async (code: string): Promise<Bolsa> => {
  try {
    const response = await apiClient.get(`bolsas/${code}`);
    return response.data;
  } catch (error) {
    console.log('Error fetching bolsa:', error);
    throw error;
  }
}

export const getCotizacionesBolsa = async (code: string, fechaDesde: string, fechaHasta: string, escala: string): Promise<Bolsa[]> => {
  try {
    const response = await apiClient.get(`bolsas/${code}/cotizaciones`, {
      params: { fechaDesde, fechaHasta, escala }
    });
    return response.data;
  } catch (error) {
    console.log('Error fetching cotization Bolsa:', error);
    throw error;
  }
}