import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  constructor(private http:HttpClient) {}
  getproduit()
  {
    return this.http.get<ProduitService[]>('http://localhost:3000/produits') 
  }
}

