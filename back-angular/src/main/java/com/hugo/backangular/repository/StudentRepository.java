package com.hugo.backangular.repository;

import com.hugo.backangular.model.Student;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface StudentRepository extends CrudRepository<Student, Integer> {

    Student findById(int id);

    List<Student> findAll();

    List<Student> findByPrenom(String name);

}
