DROP TABLE IF EXISTS students;

CREATE TABLE students (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  nom VARCHAR(250) NOT NULL,
  prenom VARCHAR(250) NOT NULL,
  age INT DEFAULT NULL,
  email VARCHAR(250) DEFAULT NULL,
  filename VARCHAR(250) DEFAULT NULL
);

INSERT INTO students (id, nom, prenom, age, email, filename) VALUES
  (991, 'Gybels', 'Hugo', 24, 'hugo.gybels@telecom-st-etienne.fr', 'persona-1.PNG'),
  (992, 'Michel', 'Sardou', 25, 'Sardou.Michel@telecom-st-etienne.fr', 'persona-4.PNG'),
  (993, 'Joe', 'Hochard', 26, 'Joe.Hochard@telecom-st-etienne.fr', 'persona-5.PNG'),
  (994, 'Billy', 'Boy', 27, 'Billy.Boy@telecom-st-etienne.fr', 'persona-6.PNG'),
  (995, 'Pascal', 'Picard', 28, 'Pascal.Picard@telecom-st-etienne.fr', 'persona-7.PNG'),
  (996, 'Paul', 'Jack', 29, 'Paul.Jack@telecom-st-etienne.fr', 'persona-8.PNG'),
  (997, 'MonSlip', 'Jean-Phil', 22, 'jean-phil.monslip@telecom-st-etienne.fr', 'persona-2.PNG'),
  (998, 'Claudel', 'Anne', 23, 'al.claudel@telecom-st-etienne.fr', 'persona-3.PNG');

