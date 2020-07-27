package com.example.demo.objects;

import org.springframework.stereotype.Component;

@Component
public class Paste {

	private String expiration;
	private String id;
	private String storageID;
	private String title;
	
	public Paste() {
		super();
	}
	
	public Paste(String expiration, String id, String storageId, String titile) {
		super();
	} 
	
	public String getExpiration() {
		return expiration;
	}
	

	public void setExpiration(String expiration) {
		this.expiration = expiration;
	}
	
	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	public String getStorageID() {
		return storageID;
	}
	public void setStorageID(String storageID) {
		this.storageID = storageID;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	
}
	
	

	

