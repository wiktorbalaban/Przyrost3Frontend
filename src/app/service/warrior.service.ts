import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Warrior} from '../models/warrior';

const apiUrl: String = 'http://localhost:8080/api';


@Injectable()
export class WarriorService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(`${apiUrl}/warriors`);
  }

  getAllPaged(page: number, size: number): Observable<any> {
    return this.http.get(`${apiUrl}/warriors/${page}?size=${size}`);
  }

  getByName(searchPhrase: String): Observable<any> {
    return this.http.get(`${apiUrl}/warriors_by_name?name=${searchPhrase}`);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${apiUrl}/warrior/${id}`);
  }

  createNew(obj: Warrior) {
    return this.http.post(`${apiUrl}/warrior`, obj).subscribe(res => {
      console.log(res);
    });
  }

  edit(obj: Warrior) {
    return this.http.put(`${apiUrl}/warrior`, obj).subscribe(res => {
      console.log(res);
    });
  }

  delete(id: number) {
    return this.http.delete(`${apiUrl}/warrior/${id}`).subscribe(res => {
      console.log(res);
    });
  }

}
