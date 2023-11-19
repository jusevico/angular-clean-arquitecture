import { UseCase } from 'src/app/core/models/use-case';
import {UserModel} from '../models/user.model';
import {Observable} from 'rxjs';
import {UserRepository} from '../repositories/user.repository';

export class GetUsersUsecase implements UseCase<void, UserModel[]> {

  constructor(private userRepository: UserRepository) {
  }

  execute(): Observable<UserModel[]> {
    return this.userRepository.getUsers();
  }

}
