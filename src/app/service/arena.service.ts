import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Arena } from '../models/arena';

const apiUrl: String = 'localhost:8080/api';

@Injectable()
export class ArenaService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${apiUrl}/arenas`);
  }

}
