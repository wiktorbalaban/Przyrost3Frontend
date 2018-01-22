import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Technique} from '../models/technique';

const apiUrl: String = 'http://localhost:8080/api';


@Injectable()
export class TechniqueService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(`${apiUrl}/techniques`);
  }

  getAllPaged(page: number, size: number): Observable<any> {
    return this.http.get(`${apiUrl}/techniques/${page}?size=${size}`);
  }

  getByName(searchPhrase: String): Observable<any> {
    return this.http.get(`${apiUrl}/techniques_by_name?name=${searchPhrase}`);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${apiUrl}/technique/${id}`);
  }

  createNew(obj: Technique) {
    return this.http.post(`${apiUrl}/technique`, obj).subscribe(res => {
      console.log(res);
    });
  }

  edit(obj: Technique) {
    return this.http.put(`${apiUrl}/technique`, obj).subscribe(res => {
      console.log(res);
    });
  }

  delete(id: number) {
    return this.http.delete(`${apiUrl}/technique/${id}`).subscribe(res => {
      console.log(res);
    });
  }

}
