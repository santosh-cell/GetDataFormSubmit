import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { constants } from 'node:buffer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

apiUrl = 'http://jsonplaceholder.typicode.com/users';

apiData: any;
constructor(private http: HttpClient){
}
ngOnInit(){
this.http.get(this.apiUrl).subscribe((data)=>{
console.warn(data)
this.apiData=data;
})
console.log("data",this.apiData[0])
}

}
