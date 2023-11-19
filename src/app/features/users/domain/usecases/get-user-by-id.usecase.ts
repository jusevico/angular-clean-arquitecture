import { UseCase } from 'src/app/core/models/use-case';
import {UserModel} from '../models/user.model';
import {Observable} from 'rxjs';
import {UserRepository} from '../repositories/user.repository';

export class GetUserByIdUsecase implements UseCase<string, UserModel>{

  constructor(private userRepository: UserRepository) {
  }

  execute(id: string): Observable<UserModel> {
    return this.userRepository.getUserById(id);
  }


}
