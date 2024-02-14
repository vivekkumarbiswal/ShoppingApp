import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://sallysbakingaddiction.com/wp-content/uploads/2014/05/sugar-cookie-fruit-pizza.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://sallysbakingaddiction.com/wp-content/uploads/2014/05/sugar-cookie-fruit-pizza.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
