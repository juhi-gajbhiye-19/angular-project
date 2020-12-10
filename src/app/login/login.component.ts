import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(private router: Router) {
    
   }

  ngOnInit() {
  }

  onSubmit() {
    if(this.model.email==="admin123@gmail.com" && this.model.password==="Admin123"){
      this.router.navigateByUrl('/admin-lib');
    }else if(this.model.email==="user123@gmail.com" && this.model.password==="User1234"){
       this.router.navigateByUrl('/user-lib');
    }
    else{
        alert('Invalid Credentials')
    }   
  }

}
