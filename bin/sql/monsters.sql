CREATE TABLE monsters(
    id serial,
    name character varying(50),
    personality character varying(50)
);
CREATE TABLE habitats(
    id serial,
    name character varying(50),
    climate character varying(50),
    temparature int
);

CREATE TABLE lives(
   monster character varying (50),
   habitat character varying(50)
);

INSERT INTO  monsters(name, personality)
VALUES
('agumon', 'brave'),
('pikachu', 'smart'),
('popomon', 'loyal');

INSERT INTO  habitats(name, climate, temparature)
VALUES
('forest', 'humid', 20),
('snow', 'cold', 1),
('desert', 'hot', 40);

INSERT INTO  lives(monster, habitat)
VALUES
('agumon', 'forest'),
('pikachu', 'snow'),
('popomon', 'desert');



