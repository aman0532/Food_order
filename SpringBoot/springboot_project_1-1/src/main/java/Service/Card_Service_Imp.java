package Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import DAO.Card_DAO;
import Model.Card;

@Service
@Transactional
public  class Card_Service_Imp implements Card_Service {
 
	@Autowired
	private Card_DAO carddao;
	
	@Override
	public boolean saveCard(Card card) {
		return carddao.saveCard(card);
	}

	@Override
	public List<Card> getCards() {
		return carddao.getCards();
	}

	@Override
	public boolean deleteCard(Card card) {
		return carddao.deleteCard(card);
	}

	@Override
	public List<Card> getCardByID(Card card) {
		return carddao.getCardByID(card);
	}

	@Override
	public boolean updateCard(Card card) {
		return carddao.updateCard(card);
	}

}
