import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from '../services/data.service';
import { UsersFetch } from '../modal/users-fetch';
import { Users } from '../modal/users';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  
  constructor(private route: ActivatedRoute,
    public ds: DataService,
    private router: Router
  ) { }
 
  val:any;
  users: Users[]=[];
  user:UsersFetch;
  ngOnInit(): void {
    let sub=this.route.params.subscribe(params=>{
      this.val=params['id'];
    });
    console.log("id: "+this.val);
    this.ds.getUpdateUser(this.val).subscribe(data=>{
    this.user=data;
    })
  }


  add(user){
    this.ds.createUser(this.user).subscribe(data=>{
    });
    this.getUsers();
    this.router.navigate(['admin-lib']);
  }
  getUsers(){
    this.ds.getUsers().subscribe((response)=>{
      this.users=response;
    });
  }
}