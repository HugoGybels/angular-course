package com.hugo.backangular.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.hugo.backangular.model.Student;
import com.hugo.backangular.repository.StudentRepository;

/**
 *
 * Interface REST des Students
 */
@Controller()
@RequestMapping("/students")
public class StudentsController {

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("")
    public ResponseEntity<List<Student>> getAll() {
        List<Student> students = studentRepository.findAll();
        return ResponseEntity.ok(students);
    }

    @PostMapping("")
    public ResponseEntity<Integer> creerStudent(@RequestBody Student student) {
        studentRepository.save(student);
        return ResponseEntity.accepted().build();
    }

    @GetMapping("recherche")
    public ResponseEntity<List<Student>> getByPrenom(@RequestParam String prenom) {
        List<Student> students = studentRepository.findByPrenom(prenom);
        return ResponseEntity.ok(students);
    }

    @GetMapping("/{idStudent}")
    public ResponseEntity<Student> getOne(@PathVariable int idStudent) {
        Student students = studentRepository.findById(idStudent);
        return ResponseEntity.ok(students);
    }

}
