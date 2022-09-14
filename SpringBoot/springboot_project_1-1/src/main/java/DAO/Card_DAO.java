package DAO;

import java.util.List;

import Model.Card;

public interface Card_DAO {

	public boolean saveCard(Card card);
	public List<Card> getCards();
	public boolean deleteCard(Card card);
	public List<Card> getCardByID(Card card);
	public boolean updateCard(Card card);
}
