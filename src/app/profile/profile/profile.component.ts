import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( private route: ActivatedRoute, private regSRV: RegisterService) { 
         this.route.params.subscribe(success =>{
           console.log(success.params, success.id);
           this.getUserById(success.id)
         }, error => {
          console.log(error);
         })
  }

  getUserById(id){
          this.regSRV.registrationBYId(id)
          .subscribe(sucess => {
            console.log(sucess);
          }, error => {
            console.log(error);
          }) 
  }

  ngOnInit() {
    
  }

}
