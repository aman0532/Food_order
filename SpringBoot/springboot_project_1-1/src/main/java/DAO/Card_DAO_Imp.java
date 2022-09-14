package DAO;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import Model.Card;


@Repository
public class Card_DAO_Imp  implements Card_DAO{

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public boolean saveCard(Card card) {
		boolean status=false;
		try {
			sessionFactory.getCurrentSession().save(card);
			status=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}

	@Override
	public List<Card> getCards() {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Card> query=currentSession.createQuery("from Card", Card.class);
		List<Card> list=query.getResultList();
		return list;
	}

	@Override
	public boolean deleteCard(Card card) {
		boolean status=false;
		try {
			sessionFactory.getCurrentSession().delete(card);
			status=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}

	@Override
	public List<Card> getCardByID(Card card) {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Card> query=currentSession.createQuery("from Card where card_id=:card_id", Card.class);
		query.setParameter("card_id", card.getCard_id());
		List<Card> list=query.getResultList();
		return list;
	}

	@Override
	public boolean updateCard(Card card) {
		boolean status=false;
		try {
			sessionFactory.getCurrentSession().update(card);
			status=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}
	
	

}
