import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(page: number, perPage: number): Observable<any> {
    const params = { page: page.toString(), per_page: perPage.toString() };
    return this.http.get<any>(this.apiUrl, { params });
  }
}
