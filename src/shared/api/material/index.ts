import axios from 'axios';
import { type TMaterial } from '@/shared/api/material/models';

const domainName = 'https://test.nrevin.ru';
const alias = 'sadovnikova';

const baseURL = `${domainName}/api/test/materials/${alias}`;

export default {
  getMaterials: (): Promise<TMaterial.IMaterial[]> => axios.get<TMaterial.IMaterial[]>(baseURL).then((res) => res.data),
};