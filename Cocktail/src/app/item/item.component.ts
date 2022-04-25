import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items : any; //dove ho le informazioni del mio cocktail
  routeObs: Observable<ParamMap>; //preendere l'id dal link
  cocktailObs : Observable<Object>//informazioni relative a quel id

  constructor(
    private route : ActivatedRoute,
    private cocktail: CocktailService
  ) { }

  ngOnInit(): void {
    //appena si carica il componente andiamo a prendere l'id che ci è stato passato
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }


  getRouterParam = (params: ParamMap) => {
    console.log(params)
    let id = params.get('id');
    //applichiao la funzione del service per avere dentro l'obs tutte le informazioni relative a quel cocktail
    this.cocktailObs = this.cocktail.search_id(id)
    this.cocktailObs.subscribe((data) => ((this.items = data), console.log(data)))
  }

}
