package Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Model.Card;
import Model.Food_items;
import Service.Card_Service;
import Service.Food_items_Service;


@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/api")
public class Controller {
	
	@Autowired
	private Card_Service cardservice;
	private Food_items_Service foodservice;
	
	@PostMapping("save-card_user")
	public boolean saveCard(@RequestBody Card card) {
		 return cardservice.saveCard(card);
		
	}
	
	@GetMapping("card_user-list")
	public List<Card> allCards() {
		 return cardservice.getCards();
	}
	
	
	@DeleteMapping("delete-card_user/{card_id}")
	public boolean deleteCard(@PathVariable("card_id") int card_id,Card card) {
		card.setCard_id(card_id);
		return cardservice.deleteCard(card);
	}

	@GetMapping("card/{card_id}")
	public List<Card> allCardByID(@PathVariable("card_id") int card_id,Card card) {
		 card.setCard_id(card_id);
		 return cardservice.getCardByID(card);
		
	}
	
	@PostMapping("update-card_user/{card_id}")
	public boolean updateCard(@RequestBody Card card,@PathVariable("card_id") int card_id) {
		card.setCard_id(card_id);
		return cardservice.updateCard(card);
	}
	
	//**********FOr adding food orders******************
	
	@PostMapping("save-food_user")
	public boolean saveFood(@RequestBody Food_items food) {
		 return foodservice.saveFood(food);
		
	}
	
	@GetMapping("food_user-list")
	public List<Food_items> allFoods() {
		 return foodservice.getFood();
	}
	
	
	@DeleteMapping("delete-food_user/{food_id}")
	public boolean deleteFood(@PathVariable("food_id") int food_id,Food_items food) {
		food.setFood_id(food_id);
		return foodservice.deleteFood(food);
	}

	@GetMapping("food/{food_id}")
	public List<Food_items> allFoodByID(@PathVariable("food_id") int food_id,Food_items food ) {
		 food.setFood_id(food_id);
		 return foodservice.getFoodByID(food);
		
	}
	
	@PostMapping("update-food_user/{food_id}")
	public boolean updateFood(@RequestBody Food_items food,@PathVariable("food_id") int food_id) {
		food.setFood_id(food_id);
		return foodservice.updateFood(food);
	}
}
