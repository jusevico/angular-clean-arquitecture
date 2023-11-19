import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRepository} from '../domain/repositories/user.repository';
import {GetUsersUsecase} from '../domain/usecases/get-users.usecase';
import {UserImplementationRepository} from './repositories/user-implementation.repository';
import {HttpClientModule} from '@angular/common/http';
import {GetUserByIdUsecase} from '../domain/usecases/get-user-by-id.usecase';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    { provide: GetUsersUsecase, deps: [UserRepository] },
    { provide: GetUserByIdUsecase, deps: [UserRepository] },
    { provide: UserRepository, useClass: UserImplementationRepository },
  ]
})
export class DataModule { }
