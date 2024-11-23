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