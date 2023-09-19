import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CancellationService {

  constructor(private http:HttpClient) { }

  bookRoom(booking: any){
   return this.http.post('https://jsonplaceholder.typicode.com/posts',booking)
  }
}
