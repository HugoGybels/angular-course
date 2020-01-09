package com.hugo.backangular.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "students")
@Entity
public class Student {

	@Id
	@GeneratedValue
	private int id;
	private String nom;
	private String prenom;
	private int age;
	private String email;
	private String filename;


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFilename() {
		return filename;
	}

	public void setFilename(String filename) {
		this.filename = filename;
	}

	public LocalDateTime getNaissance() {
		return naissance;
	}

	public void setNaissance(LocalDateTime naissance) {
		this.naissance = naissance;
	}
}
