package Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="card")
public class Card {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int card_id;
	private String card_user;
	private String card_email;
	private String card_phone;
	private String card_address;
	private String card_date_time;
	private String card_branch;
	private String card_user_name;
	private String card_new_number;
	private String card_expaire;
	private String card_cvv;
	public  int getCard_id() {
		return card_id;
	}
	public void setCard_id(int card_id) {
		this.card_id = card_id;
	}
	public String getCard_user() {
		return card_user;
	}
	public void setCard_user(String card_user) {
		this.card_user = card_user;
	}
	public String getCard_email() {
		return card_email;
	}
	public void setCard_email(String card_email) {
		this.card_email = card_email;
	}
	public String getCard_phone() {
		return card_phone;
	}
	public void setCard_phone(String card_phone) {
		this.card_phone = card_phone;
	}
	public String getCard_address() {
		return card_address;
	}
	public void setCard_address(String card_address) {
		this.card_address = card_address;
	}
	public String getCard_date_time() {
		return card_date_time;
	}
	public void setCard_date_time(String card_date_time) {
		this.card_date_time = card_date_time;
	}
	public String getCard_branch() {
		return card_branch;
	}
	public void setCard_branch(String card_branch) {
		this.card_branch = card_branch;
	}
	public String getCard_user_name() {
		return card_user_name;
	}
	public void setCard_user_name(String card_user_name) {
		this.card_user_name = card_user_name;
	}
	public String getCard_new_number() {
		return card_new_number;
	}
	public void setCard_new_number(String card_new_number) {
		this.card_new_number = card_new_number;
	}
	public String getCard_expaire() {
		return card_expaire;
	}
	public void setCard_expaire(String card_expaire) {
		this.card_expaire = card_expaire;
	}
	public String getCard_cvv() {
		return card_cvv;
	}
	public void setCard_cvv(String card_cvv) {
		this.card_cvv = card_cvv;
	}

	
	
}
