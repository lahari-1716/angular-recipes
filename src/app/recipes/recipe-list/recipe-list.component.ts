import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes: Recipe[] = [
   new Recipe('chicken curry', 'my favoratie recipe', 'http://www.tastyfind.co.uk/blog/wp-content/uploads/2015/11/Indian-Phall-Curry.jpg')
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
