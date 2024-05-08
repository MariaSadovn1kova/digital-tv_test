import axios from 'axios';
import { type TMaterial } from '@/shared/api/material/models';

const api = axios.create({
  baseURL: '/api',
});

const domainName = 'https://test.nrevin.ru';
const alias = 'sadovnikova';

const baseURL = `api/test/materials/${alias}`;

export default {
  getMaterials: (): Promise<TMaterial.IMaterial[]> => api.get<TMaterial.IMaterial[]>(baseURL).then((res) => res.data),
  getMaterial: (id: string): Promise<TMaterial.IMaterial> => api.get<TMaterial.IMaterial>(`${baseURL}/${id}`).then((res) => res.data),
};