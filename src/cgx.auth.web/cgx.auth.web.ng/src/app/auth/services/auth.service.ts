import { Injectable } from '@angular/core';
import Authorization from '../model/authorization';

@Injectable()
export class AuthService {

  
  private authList: Authorization[] = [
    { diagCode: '3434-3', member: 'John Peterson', id:1},
    { diagCode: '8400-9', member: 'Mary Peterson', id:2},
    { diagCode: '7778-2', member: 'Demsey Walker', id:3},
    { diagCode: '7778-3', member: 'Donna Matthews', id:4}
  ];

  constructor() { }

  GetAuthorizations() : Authorization[]
  {
    return this.authList;
  }

  SaveAuthorization(auth: Authorization)
  {
    this.authList.splice(0,0,auth);
  }

  GetAuthorization(id: number ): any {
    return this.authList.filter(x=> x.id == id ).pop() ;
  }


}
