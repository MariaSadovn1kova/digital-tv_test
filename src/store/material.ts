import { defineStore } from 'pinia';
import { MaterialAPI } from '@/shared';

interface materialState {
  materialTitle: string,
  materialDescr: string,
  materialText: string
}

export const useMaterialStore = defineStore('material', {
    state: (): materialState => ({
      materialTitle: '',
      materialDescr: '',
      materialText: ''
    }),
    actions: {
      createMaterial() {
        MaterialAPI.createMaterial({
          title: this.materialTitle,
          short_description: this.materialDescr,
          datetime: new Date().toISOString(),
          description_html: this.materialText,
          description_json: ''
        });

        this.materialTitle = '';
        this.materialDescr = '';
        this.materialText = '';
      },
    }
  });