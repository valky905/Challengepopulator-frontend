import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-attempt-view',
  templateUrl: './attempt-view.component.html',
  styleUrls: ['./attempt-view.component.css']
})
export class AttemptViewComponent implements OnInit {

  constructor(private http:HttpClient,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    var http:HttpClient;
    //console.log(`hey ${id}`);
    this.http.get('http://172.23.239.81:8080/challengeAPI/v1/'+this.id).subscribe((res:any)=> {
        this.completechallenge=res;
        console.log("gggggg ", res);
        
  
    })
  }
  private id:string="";



  completechallenge=[];

  Attempt(){
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    var http:HttpClient;
    //console.log(`hey ${id}`);
    this.http.get('http://172.23.239.81:8080/challengeAPI/v1/'+this.id).subscribe((res:any)=> {
        this.completechallenge=res
        console.log("gggggg ", res);
        
  
    })
  }

}
