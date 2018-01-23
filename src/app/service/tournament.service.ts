import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Tournament} from '../models/tournament';

const apiUrl: String = 'http://localhost:8080/api';


@Injectable()
export class TournamentService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(`${apiUrl}/tournaments`);
  }

  getAllPaged(page: number, size: number): Observable<any> {
    return this.http.get(`${apiUrl}/tournaments/${page}?size=${size}`);
  }

  getByName(searchPhrase: String): Observable<any> {
    return this.http.get(`${apiUrl}/tournaments_by_name?name=${searchPhrase}`);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${apiUrl}/tournament/${id}`);
  }

  createNew(obj: Tournament) {
    return this.http.post(`${apiUrl}/tournament`, obj).subscribe(res => {
      console.log(res);
    });
  }

  edit(obj: Tournament) {
    return this.http.put(`${apiUrl}/tournament`, obj).subscribe(res => {
      console.log(res);
    });
  }

  delete(id: number) {
    return this.http.delete(`${apiUrl}/tournament/${id}`).subscribe(res => {
      console.log(res);
    });
  }

}
