import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Arena} from '../models/arena';

const apiUrl: String = 'http://localhost:8080/api';


@Injectable()
export class ArenaService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(`${apiUrl}/arenas`);
  }

  getAllPaged(page: number, size: number): Observable<any> {
    return this.http.get(`${apiUrl}/arenas/${page}?size=${size}`);
  }

  getByName(searchPhrase: String): Observable<any> {
    return this.http.get(`${apiUrl}/arenas_by_name?name=${searchPhrase}`);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${apiUrl}/arena/${id}`);
  }

  createNew(name: String) {
    const data = {
      name: name
    };
    const obj = new Arena(data);
    return this.http.post(`${apiUrl}/arena`, obj).subscribe(res => {
      console.log(res);
    });
  }

  edit(obj: Arena) {
    return this.http.put(`${apiUrl}/arena`, obj).subscribe(res => {
      console.log(res);
    });
  }

  delete(id: number) {
    return this.http.delete(`${apiUrl}/arena/${id}`).subscribe(res => {
      console.log(res);
    });
  }

}
