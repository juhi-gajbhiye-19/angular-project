import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { UserDetails } from '../modal/user-details';
import { UserdetailsFetch } from '../modal/userdetails-fetch';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    public ds: DataService,
    private router: Router) { }

    val:any;
    userDetails: UserDetails[]=[];
    userdetailsFetch: UserdetailsFetch;

  ngOnInit(): void {
    let sub=this.route.params.subscribe(params=>{
      this.val=params['id'];
    });
    console.log("id: "+this.val);
    
  }
  addDetail(userdetailsFetch){
    this.ds.createUserDetails(this.userdetailsFetch).subscribe(data=>{
    });
    this.getUsersDetails();
    this.router.navigate(['user-lib']);
  }
  getUsersDetails(){
    this.ds.getUserDetails().subscribe((response)=>{
      this.userDetails=response;
    });
  }
}
