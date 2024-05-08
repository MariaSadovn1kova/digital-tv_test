import axios from 'axios';
import { type TMaterial } from '@/shared/api/material/models';

const api = axios.create({
  baseURL: '/api',
});

const alias = 'sadovnikova';

const baseURL = `api/test/materials/${alias}`;

export default {
  getMaterials: (): Promise<TMaterial.IMaterial[]> => api.get<TMaterial.IMaterial[]>(baseURL).then((res) => res.data),
  getMaterial: (id: string): Promise<TMaterial.IMaterial> => api.get<TMaterial.IMaterial>(`${baseURL}/${id}`).then((res) => res.data),

  createMaterial: (data: TMaterial.ICreateMaterial):
  Promise<void> => axios.post<void>(`${baseURL}/save`, data).then((res) => res.data),
};