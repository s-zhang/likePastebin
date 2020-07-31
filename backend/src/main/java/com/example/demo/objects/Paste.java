package com.example.demo.objects;

import org.springframework.stereotype.Component;

import java.sql.Time;
import java.sql.Timestamp;

@Component
public class Paste {

	private String expiration;
	private String content;
	private String title;

	public Paste() {
		super();
	}

	public Paste(String expiration, String content, String title) {
		super();
	}

	public String getExpiration() {
		return expiration;
	}


	public void setExpiration(String expiration) {
		this.expiration = expiration;
	}


	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}

}
