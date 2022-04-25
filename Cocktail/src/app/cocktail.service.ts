import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }



  search_cocktail(query:string){
    //la query sarebbe il cocktail che stiamo cercando
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
    //quello che ci ritorno
    let obsCocktail = this.http.get(url);
    return obsCocktail

  }


  search_id(query: any){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${query}`
    //quello che ci ritorno
    let obsCocktail = this.http.get(url);
    return obsCocktail
  }
}
