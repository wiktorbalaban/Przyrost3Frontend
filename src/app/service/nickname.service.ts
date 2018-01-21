import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Nickname} from '../models/nickname';

const apiUrl: String = 'http://localhost:8080/api';


@Injectable()
export class NicknameService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(`${apiUrl}/nicknames`);
  }

  getAllPaged(page: number, size: number): Observable<any> {
    return this.http.get(`${apiUrl}/nicknames/${page}?size=${size}`);
  }

  getByName(searchPhrase: String): Observable<any> {
    return this.http.get(`${apiUrl}/nicknames_by_name?name=${searchPhrase}`);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${apiUrl}/nickname/${id}`);
  }

  createNew(name: String) {
    const data = {
      name: name
    };
    const obj = new Nickname(data);
    return this.http.post(`${apiUrl}/nickname`, obj).subscribe(res => {
      console.log(res);
    });
  }

  edit(obj: Nickname) {
    return this.http.put(`${apiUrl}/nickname`, obj).subscribe(res => {
      console.log(res);
    });
  }

  delete(id: number) {
    return this.http.delete(`${apiUrl}/nickname/${id}`).subscribe(res => {
      console.log(res);
    });
  }

}
