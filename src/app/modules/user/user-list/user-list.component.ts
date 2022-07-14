import { Component, OnInit } from '@angular/core';
import { ICardUser } from 'src/app/shared/components/card/card-user/card-user.metada';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public title = {
    text: 'Lista de usuarios',
    type: 'primary' as const
  };
  public users: ICardUser =
  {
    name:'Emma Stone',
    age: 1,
    description:'Cliente numero 1',
    avatar: 'https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2016/11/12/5fa2fdbfcb617.jpeg',
    id: 1

  }
  constructor() { }

  ngOnInit(): void {
  }

}
