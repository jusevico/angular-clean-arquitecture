import {Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import {UserRepository} from '../../domain/repositories/user.repository';
import {UserMapper} from './mappers/user.mapper';
import {UserModel} from '../../domain/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {
  userMapper = new UserMapper();

  constructor(private http: HttpClient) {
    super();
  }

  register(params: {phoneNum: string, password: string}): Observable<UserModel> {
    console.log('implementacion del register', params)
    return of();
  }

  getUserById(id: string): Observable<UserModel> {
    console.log('implementacion del get user by id', id)
    return of();
  }

  getUsers(): Observable<UserModel[]> {
    console.log('implementacion del get users')
    return of();
  }
}
