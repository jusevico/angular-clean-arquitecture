import {Observable} from 'rxjs';
import {UserModel} from '../models/user.model';
import {CreateUserModel} from '../models/create-user.model';

export abstract class UserRepository {
  abstract register(params: CreateUserModel): Observable<UserModel>;
  abstract getUserById(id: string): Observable<UserModel>;
  abstract getUsers(): Observable<UserModel[]>;
}
