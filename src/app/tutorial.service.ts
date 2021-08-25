import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from './tutorial';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  private baseUrl= "http://localhost:8080/api/v1/tutorials"
  private baseUrll="http://localhost:8080/api/v1/tutorialss"
  constructor(private httpClient: HttpClient) {}
  getTutorialList():Observable<Tutorial[]>
  {
    return this.httpClient.get<Tutorial[]>(`${this.baseUrl}`) 
  }
  createTutorial(tutorial:Tutorial):Observable<Object>
  {
  return this.httpClient.post(`${this.baseUrl}`,tutorial)
  }
  getTutorialById(id:Number):Observable<Tutorial>
  {
    return this.httpClient.get<Tutorial>(   `${this.baseUrl}/${id}`)
  }
  updateTutorial(id:Number,tutorial:Tutorial):Observable<Object>
  {
    return this.httpClient.put<Object>(`${this.baseUrl}/${id}`,tutorial);
  }
  deleteTutorial(id:Number):Observable<Object>{
    return this.httpClient.delete<Object>(`${this.baseUrl}/${id}`);
  }
  deleteAllTutorial():Observable<Object>
  {
    return this.httpClient.delete(`${this.baseUrl}`)
  }
  searchByTitle(title: any):Observable<Tutorial[]>
  {
    return this.httpClient.get<Tutorial[]>(`${this.baseUrll}?title=${title}`)
  }
}
