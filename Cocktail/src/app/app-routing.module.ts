import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'item/:id',component:ItemComponent},
  {path:'search',component:SearchComponent} 
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
