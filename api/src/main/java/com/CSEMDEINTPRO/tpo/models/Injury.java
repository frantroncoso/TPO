package com.CSEMDEINTPRO.tpo.models;

public class Injury {

	private final long id;
	private final String content;

	public Injury(long id, String content) {
		this.id = id;
		this.content = content;
	}

	public long getId() {
		return id;
	}

	public String getContent() {
		return content;
	}
}