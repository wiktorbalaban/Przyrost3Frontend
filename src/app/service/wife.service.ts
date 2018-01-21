import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Wife} from '../models/wife';

const apiUrl: String = 'http://localhost:8080/api';


@Injectable()
export class WifeService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(`${apiUrl}/wives`);
  }

  getAllPaged(page: number, size: number): Observable<any> {
    return this.http.get(`${apiUrl}/wives/${page}?size=${size}`);
  }

  getByName(searchPhrase: String): Observable<any> {
    return this.http.get(`${apiUrl}/wives_by_name?name=${searchPhrase}`);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${apiUrl}/wife/${id}`);
  }

  createNew(obj: Wife) {
    return this.http.post(`${apiUrl}/wife`, obj).subscribe(res => {
      console.log(res);
    });
  }

  edit(obj: Wife) {
    return this.http.put(`${apiUrl}/wife`, obj).subscribe(res => {
      console.log(res);
    });
  }

  delete(id: number) {
    return this.http.delete(`${apiUrl}/wife/${id}`).subscribe(res => {
      console.log(res);
    });
  }

}
