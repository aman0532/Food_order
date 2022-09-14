package DAO;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import Model.Food_items;

@Repository
public  class Food_items_DAO_Imp  implements Food_items_DAO{

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public boolean saveFood(Food_items food) {
		boolean status=false;
		try {
			sessionFactory.getCurrentSession().save(food);
			status=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}

	@Override
	public List<Food_items> getFood() {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Food_items> query=currentSession.createQuery("from Food_items", Food_items.class);
		List<Food_items> list=query.getResultList();
		return list;
	}

	@Override
	public boolean deleteFood(Food_items food) {
		boolean status=false;
		try {
			sessionFactory.getCurrentSession().delete(food);
			status=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}

	@Override
	public List<Food_items> getFoodByID(Food_items food) {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Food_items> query=currentSession.createQuery("from Food_items where food_id=:food_id", Food_items.class);
		query.setParameter("food_id", food.getFood_id());
		List<Food_items> list=query.getResultList();
		return list;
	}

	@Override
	public boolean updateFood(Food_items food) {
		boolean status=false;
		try {
			sessionFactory.getCurrentSession().update(food);
			status=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}
	
	

}
