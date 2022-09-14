import { Injectable } from '@angular/core';
import { Food } from './Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
 
  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }
  
  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
 /* getAllTags(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ];
  }*/

  /*getAllFoodsByTag(tag: string): Food[] {
    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }*/

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Chesse Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Italian'],
        stars: 4.5,
        imageUrl: 'assets/pizza1.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Panner Pizza',
        price: 15,
        cookTime: '20-30',
        favorite: true,
        origins: ['Tandoori', 'Indian', 'Mexican'],
        stars: 4.7,
        imageUrl:"assets/pizza2.png",
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Corn Pizza',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'US'],
        stars: 3.5,
        imageUrl: 'assets/cornpizza.png',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Greek Pizza',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: 'assets/GreekPizza.png',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Double Chicken Burger',
        price: 15,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: 'assets/burger1.png',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Beef Burger',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'assets/burger2.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Double Ham Burger',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['U.S'],
        stars: 4.0,
        imageUrl: 'assets/burger3.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 8,
        name: 'Veggie Burger',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'assets/burger.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 9,
        name: 'Pound Cake',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Switzerland'],
        stars: 4.0,
        imageUrl: 'assets/cake1.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 10,
        name: 'Sponge Cake',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Japan'],
        stars: 4.0,
        imageUrl: 'assets/cake2.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 11,
        name: 'Genosie Cake',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['French'],
        stars: 4.0,
        imageUrl: 'assets/cake3.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 12,
        name: 'Chiffon Cake',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Italian'],
        stars: 4.0,
        imageUrl: 'assets/cake4.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 13,
        name: 'Milk Ice_cream',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Indian'],
        stars: 4.0,
        imageUrl: 'assets/ice-cream1.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 14,
        name: 'Gelton Ice_Cream',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Swiss'],
        stars: 4.0,
        imageUrl: 'assets/ice-cream2.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 15,
        name: 'Grantia Ice_Cream',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Mongolian'],
        stars: 4.0,
        imageUrl: 'assets/ice-cream3.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 16,
        name: 'Italian Ice_Cream',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'assets/ice-cream4.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ];
  }
}
