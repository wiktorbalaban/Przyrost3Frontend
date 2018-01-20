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

  getById(id: number): Observable<any> {
    return this.http.get(`${apiUrl}/arena/${id}`);
  }

  createNew(name: String) {
    const data = {
      name: name
    };
    const arena = new Arena(data);
    return this.http.post(`${apiUrl}/arena`, arena).subscribe(res => {
      console.log(res);
    });
  }

  edit(arena: Arena) {
    return this.http.put(`${apiUrl}/arena`, arena).subscribe(res => {
      console.log(res);
    });
  }

  delete(id: number) {
    return this.http.delete(`${apiUrl}/arena/${id}`).subscribe(res => {
      console.log(res);
    });;
  }

}
