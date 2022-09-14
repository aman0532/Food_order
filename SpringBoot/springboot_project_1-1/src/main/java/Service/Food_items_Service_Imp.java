package Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import DAO.Food_items_DAO;
import Model.Food_items;

@Service
@Transactional
public class Food_items_Service_Imp implements Food_items_Service {
 
	@Autowired
	private Food_items_DAO fooddao;
	
	@Override
	public boolean saveFood(Food_items food) {
		return fooddao.saveFood(food);
	}

	@Override
	public List<Food_items> getFood() {
		return fooddao.getFood();
	}

	@Override
	public boolean deleteFood(Food_items food) {
		return fooddao.deleteFood(food);
	}

	@Override
	public List<Food_items> getFoodByID(Food_items food) {
		return fooddao.getFoodByID(food);
	}

	@Override
	public boolean updateFood(Food_items food) {
		return fooddao.updateFood(food);
	}

}
