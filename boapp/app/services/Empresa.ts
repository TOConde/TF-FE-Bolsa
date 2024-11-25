import { Cotizacion } from "../types/cotizaciones";
import { Empresa } from "../types/empresa";
import apiClient from "./Axios";

export const getAllEmpresas = async (): Promise<Empresa[]> => {
  try {
    const response = await apiClient.get("empresas");
    return response.data;
  } catch (error) {
    console.log('Error fetching allEmpresas', error);
    throw error;
  }  
}

export const getEmpresa = async (codEmpresa: string): Promise<Empresa> => {
  try {
    const response = await apiClient.get(`empresas/${codEmpresa}`);
    return response.data;
  } catch (error) {
    console.log('Error fetching empresa:', error);
    throw error;
  }
}

export const getCotizacionesEmpresa = async (codEmpresa: string, fechaDesde: string, fechaHasta: string, escala: string): Promise<Cotizacion[]> => {
  try {
    const response = await apiClient.get(`empresas/${codEmpresa}/cotizaciones`, {
      params: { fechaDesde, fechaHasta, escala }
    });
    return response.data;
  } catch (error) {
    console.log('Error fetching cotization empresa:', error);
    throw error;
  }
}