import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/data/services/api/user.service';
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
  
  public allUsers: ICardUser[] = []; 


  public page!: number

  constructor(private userService : UserService) {
    console.log("hola mundo") 
     userService.getAllUsers().subscribe( r => {
      if(!r.error){
        this.allUsers= r.data
      }
     })
  }

  ngOnInit(): void {

    
  }

}
