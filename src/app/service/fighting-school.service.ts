import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {FightingSchool} from '../models/fighting-school';

const apiUrl: String = 'http://localhost:8080/api';


@Injectable()
export class FightingSchoolService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(`${apiUrl}/fightingSchools`);
  }

  getAllPaged(page: number, size: number): Observable<any> {
    return this.http.get(`${apiUrl}/fightingSchools/${page}?size=${size}`);
  }

  getByName(searchPhrase: String): Observable<any> {
    return this.http.get(`${apiUrl}/fightingSchools_by_name?name=${searchPhrase}`);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${apiUrl}/fightingSchool/${id}`);
  }

  createNew(obj: FightingSchool) {
    return this.http.post(`${apiUrl}/fightingSchool`, obj).subscribe(res => {
      console.log(res);
    });
  }

  edit(obj: FightingSchool) {
    return this.http.put(`${apiUrl}/fightingSchool`, obj).subscribe(res => {
      console.log(res);
    });
  }

  delete(id: number) {
    return this.http.delete(`${apiUrl}/fightingSchool/${id}`).subscribe(res => {
      console.log(res);
    });
  }

}
