import { Component, OnInit } from '@angular/core';
import { produit } from 'produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-listeproduit',
  templateUrl: './listeproduit.component.html',
  styleUrls: ['./listeproduit.component.css']
})
export class ListeproduitComponent implements OnInit {
  listeproduit!:produit[]

  constructor(private serviceproduit:ProduitService) { }

  ngOnInit(): void {
    this.serviceproduit.getproduit().subscribe
    ((produit:any)=>this.listeproduit=produit);
  }

}
