import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query : string;
  obsCocktail : Observable<Object>;
  results: any;

  constructor(public cocktail : CocktailService) { }

  ngOnInit(): void {
  }

  submit(query : HTMLInputElement){
    if(query.value == ""){
      return;
    }
    //andiamo a mettere il cocktail che ha scritto nell'html nella variabile query
    this.query = query.value ;
    //andiamo a prendere i dati grazie alla funzione del service e li mettiamo dentro l'obs di ts
    this.obsCocktail = this.cocktail.search_cocktail(this.query)
    //andiamo a mettere tutti i dati dentro result che poi andiamo a far vedere
    this.obsCocktail.subscribe((data) =>{
      this.results = data;
      console.log(this.results)
    })

  }

}
