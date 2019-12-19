DROP TABLE IF EXISTS students;

CREATE TABLE students (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  nom VARCHAR(250) NOT NULL,
  prenom VARCHAR(250) NOT NULL,
  age INT DEFAULT NULL,
  email VARCHAR(250) DEFAULT NULL
);

INSERT INTO students (nom, prenom, age, email) VALUES
  ('Gybels', 'Hugo', 24, 'hugo.gybels@telecom-st-etienne.fr'),
  ('MonSlip', 'Jean-Phil', 22, 'jean-phil.monslip@telecom-st-etienne.fr'),
  ('Claudel', 'Anne-Laure', 23, 'al.claudel@telecom-st-etienne.fr');

