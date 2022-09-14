package DAO;

import java.util.List;

import Model.Food_items;

public interface Food_items_DAO {

	public boolean saveFood(Food_items food);
	public List<Food_items> getFood();
	public boolean deleteFood(Food_items food);
	public List<Food_items> getFoodByID(Food_items food);
	public boolean updateFood(Food_items food);
}
