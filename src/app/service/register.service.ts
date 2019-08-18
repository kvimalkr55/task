import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {

   }

   registration(data){
          return this.http.post('https://my-json-server.typicode.com/kvimalkr55/demo', data)
   }
   registrationBYId(id){
     return this.http.get(`https://my-json-server.typicode.com/kvimalkr55/demo/${id}`)
   }
}
