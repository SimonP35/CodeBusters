# Liste des routes

## Back

| Routes                      | Nom de la route    | Controller  | Methodes (HTTP) | Méthode    |
|-----------------------------|--------------------|-------------|-----------------|------------|
| /api/register/              | api_register       | Api\User    | POST            | register() |
| /api/login/                 | api_login          | Api\User    | POST            | login()    |
| /api/game                   | api_create_game    | Api\Game    | POST            | create()   |
| /api/game/{id}              | api_game_end       | Api\Game    | PUT/PATCH       | update()   |
| /api/game/{id}/object/{id}  | api_object_status  | Api\Object  | PUT/PATCH       | update()   |
| /api/game/{id}/comment      | api_create_comment | Api\Comment | POST            | create()   |
| /api/game/{id}/comment/{id} | api_read_comment   | Api\Comment | GET             | read()     |
| /api/game/{id}/comment/{id} | api_update_comment | Api\Comment | PUT/PATCH       | update()   |
| /api/game/{id}/comment/{id} | api_delete_comment | Api\Comment | DELETE          | delete()   |
