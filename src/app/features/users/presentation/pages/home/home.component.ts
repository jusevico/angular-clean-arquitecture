import { Component } from '@angular/core';
import {GetUsersUsecase} from '../../../domain/usecases/get-users.usecase';
import {GetUserByIdUsecase} from '../../../domain/usecases/get-user-by-id.usecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private getUser: GetUsersUsecase, private getUserById: GetUserByIdUsecase) {
  }

  getUsers(){
    this.getUser.execute();
  }

  getUsersById(){
    this.getUserById.execute('100');
  }

}
