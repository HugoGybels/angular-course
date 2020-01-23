import { assign } from 'lodash';

export interface StudentDTO {
  id: number;
  nom: string;
  prenom: string;
  age?: number;
  email?: string;
  filename?: string;
}

export class Student {
  id: number;
  nom: string;
  prenom: string;
  age?: number;
  email?: string;
  filename?: string;
  folded = false;

  constructor(json: Partial<StudentDTO>) {
    assign(this, json);
  }
}
