import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecommendationSystem';
  name:string= '' ;
  challenges=[];
  isClicked:boolean=false;
    constructor( private http:HttpClient){}
  search(){
    // var http:HttpClient;
    this.http.get('http://localhost:8081/api/v1/recommendation/'+this.name).subscribe((res:any)=> {
        this.challenges=res;
        // console.log(this.challenges);
    })
  }
}
