import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getPets() {
    return this.http.get('http://localhost:3000/pets');
  }
  createPets(data) {
    return this.http.post('http://localhost:3000/pets', data);
  }

}
