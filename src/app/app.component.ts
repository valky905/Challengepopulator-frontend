import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecommendationSystem';
}
  // name:string= '' ;
  // challenges=[];
  // isClicked:boolean=false;
  //   constructor( private http:HttpClient){}
  // search(){
    // var http:HttpClient;
    // this.http.get('http://localhost:8081/api/v1/recommendation/'+this.name).subscribe((res:any)=> {
    //     this.challenges=res;
    //     console.log("data from backend is ", res);
        
  //       // console.log(this.challenges);
  //   })
  // }

  

//   completechallenge=[];
  

  

//   Attempt(id:string){
//     var http:HttpClient;
//     console.log(`hey ${id}`);
//     this.http.get('http://localhost:8180/challengeAPI/v1/'+id).subscribe((res:any)=> {
//         this.completechallenge=res;
//         console.log("gggggg ", res);
        
//         console.log(this.challenges);
//     })
//   }
// }
