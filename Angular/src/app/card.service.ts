import { Product } from './addproduct';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  getusertList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'card_user-list');
  }

  createCard(card: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'save-card_user',card);
  }
   
  createProduct(addproduct: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'save-food_user',addproduct);
  }
   

  deleteCard(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-card_user/${id}`, { responseType: 'text' });
  }

  getCarduser(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/card/${id}`);
  }
  getCarduserPhone(phone: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}/card/${phone}}`);
  }

  updateCard(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/update-card_user/${id}`, value);
  }
  
  
}                                           

