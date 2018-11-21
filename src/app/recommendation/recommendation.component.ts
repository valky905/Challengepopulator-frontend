import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})




  export class RecommendationComponent implements OnInit {

  title = 'RecommendationSystem';
  name:string= '' ;
  challenges=[];
  isClicked:boolean=false;

  constructor(private http:HttpClient,private router:Router) {
   }
   ngOnInit() {
  }
   search(){
    // var http:HttpClient;
    this.http.get('http://localhost:8081/api/v1/recommendation/'+this.name).subscribe((res:any)=> {
        this.challenges=res;
        // console.log(this.challenges);
    })

  }
  
  
  

  
Attempt(id:string){
  this.router.navigate(['attempt-view',id]);
}

}

