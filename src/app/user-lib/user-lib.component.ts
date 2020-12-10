import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { UserDetails } from '../modal/user-details';

@Component({
  selector: 'app-user-lib',
  templateUrl: './user-lib.component.html',
  styleUrls: ['./user-lib.component.scss']
})
export class UserLibComponent implements OnInit {

  constructor(private router: Router,public rs: DataService) { }

  ngOnInit(): void {
    this.rs.getUserDetails().subscribe((response)=>{
      this.userDetails=response;
    })
  }

  Book_title:any;
  userDetails:UserDetails[]=[];

  Search(){
    if(this.Book_title=="" ){
      this.ngOnInit();
    }
    else{
      this.userDetails= this.userDetails.filter(res=>{
        return res.Book_title.toLocaleLowerCase().match(this.Book_title.toLocaleLowerCase()); 
      })
    }
    
  }

  add(userDetails){
    this.router.navigate(['/issue',userDetails]);
  }

   logout(){
     this.router.navigateByUrl('/login');
   }
   deleteRow(val){
    if(confirm("Are you sure, you want to return?")){
    this.rs.deleteUser(val).subscribe(data =>{
    });
    this.rs.getUserDetails().subscribe((response) => {
      this.userDetails = response;
    })}
  }
}
