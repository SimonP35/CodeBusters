# Dictionnaire de données

## Item
| Field   | Types       | Spécificity                                     | Description                              |
| ------- | ----------- | ----------------------------------------------- | ---------------------------------------- |
| id      | INT         | PRIMARY KEY, NOT NULL, AUTO_INCREMENT, UNSIGNED | Object's ID                              |
| status  | TINYINT(1)  | NOT NULL                                        | Object's status (1= Active, 2= Inactive) |
| name    | VARCHAR(64) | NOT NULL                                        | Object's name                            |
| game_id | INT(11)     | NOT NULL                                        | Game's id related to Object              |

## Game
| Field      | Types      | Spécificity                                     | Description                            |
| ---------- | ---------- | ----------------------------------------------- | -------------------------------------- |
| id         | INT        | PRIMARY KEY, NOT NULL, AUTO_INCREMENT, UNSIGNED | Game's ID                              |
| status     | TINYINT(1) | NOT NULL                                        | Game's status (1= Active, 2= Inactive) |
| score      | TIME       | NULL                                            | Game's score                           |
| user_id    | INT(11)    | NOT NULL                                        | User's id                              |
| created_at | TIMESTAMP  | NOT NULL DEFAULT CURRENT_TIMESTAMP              | Date of creation                       |
| ended_at   | TIMESTAMP  | NULL                                            | Game's end                             |

## User
| Field      | Types        | Spécificity                                     | Description      |
| ---------- | ------------ | ----------------------------------------------- | ---------------- |
| id         | INT          | PRIMARY KEY, NOT NULL, AUTO_INCREMENT, UNSIGNED | User's ID        |
| email      | VARCHAR(180) | NOT NULL                                        | User's email     |
| password   | VARCHAR(255) | NOT NULL                                        | User's password  |
| nickname   | VARCHAR(255) | NOT NULL                                        | User's nickname  |
| created_at | TIMESTAMP    | NOT NULL DEFAULT CURRENT_TIMESTAMP              | Date of creation |
| updated_at | TIMESTAMP    | NULL                                            | Date of update   |

## Comments
| Field      | Types     | Spécificity                                     | Description       |
| ---------- | --------- | ----------------------------------------------- | ----------------- |
| id         | INT       | PRIMARY KEY, NOT NULL, AUTO_INCREMENT, UNSIGNED | Comment's ID      |
| content    | longtext  | NULL                                            | Comment's content |
| rating     | INT(11)   | NOT NULL                                        | Game's rating     |
| user_id    | INT(11)   | NOT NULL                                        | User's id         |
| game_id    | INT(11)   | NOT NULL                                        | Game's id         |
| created_at | TIMESTAMP | NOT NULL DEFAULT CURRENT_TIMESTAMP              | Date of creation  |
| updated_at | TIMESTAMP | NULL                                            | Date of update    |
