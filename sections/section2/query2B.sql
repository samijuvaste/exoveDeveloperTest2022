--The tables are here for testing

/*
CREATE TABLE people (
    id INTEGER,
    first_name TEXT,
    last_name TEXT
);

CREATE TABLE phones (
    id INTEGER,
    user_id INTEGER,
    number TEXT
);

INSERT INTO people
VALUES
    (1, "John", "Smith"),
    (2, "Mary", "Jones"),
    (3, "Gerhard", "Feuerhaufen"),
    (4, "Rami", "Pitkäniemi"),
    (5, "Anna", "Kråkström");

INSERT INTO phones
VALUES
    (1, 2, "+1 213 621 0002"),
    (2, 2, "+1 800 444 4444"),
    (3, 1, "+1 604 444 4444"),
    (4, 1, "+44 20 8759 9036"),
    (5, 4, "+358 50 333 3333"),
    (6, 5, "+46 771 793 336");
*/

SELECT CONCAT(first_name, " ", last_name) AS name,
    GROUP_CONCAT(COALESCE(number, "N/A") ORDER BY number) AS numbers
FROM people LEFT JOIN phones ON people.id = user_id
GROUP BY name
ORDER BY ANY_VALUE(last_name);