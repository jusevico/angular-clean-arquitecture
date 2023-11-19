import { Observable } from 'rxjs';
import { UseCase } from 'src/app/core/models/use-case';
import { UserModel } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';
import {CreateUserModel} from '../models/create-user.model';

export class RegisterUsecase implements UseCase<{ phoneNum: string; password: string }, UserModel> {

  constructor(private userRepository: UserRepository) { }

  execute(params: CreateUserModel): Observable<UserModel> {
    return this.userRepository.register(params);
  }
}
