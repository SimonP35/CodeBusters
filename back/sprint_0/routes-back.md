# Liste des routes

## Back


| Routes                   | Nom de la route    | Controller   | Methodes (HTTP) | Méthode    |
|--------------------------|--------------------|--------------|-----------------|------------|
| /api/login               | api_login          | Api\Security | POST            | login()    |
| /api/user/register       | api_user_register  | Api\User     | POST            | register() |
| /api/user/read/{id}      | api_user_read      | Api\User     | POST            | register() |
| /api/user/update/{id}    | api_user_update    | Api\User     | POST            | register() |
| /api/user/delete/{id}    | api_user_delete    | Api\User     | POST            | register() |
| /api/game/create         | api_game_create    | Api\Game     | POST            | create()   |
| /api/game/update/{id}    | api_game_update    | Api\Game     | PUT/PATCH       | update()   |
| /api/game/score          | api_game_score     | Api\Game     | PUT/PATCH       | update()   |
| /api/comment/            | api_comment_list   | Api\Comment  | GET             | list()     |
| /api/comment/create      | api_comment_create | Api\Comment  | POST            | create()   |
| /api/comment/read/{id}   | api_comment_read   | Api\Comment  | GET             | read()     |
| /api/comment/update/{id} | api_comment_update | Api\Comment  | PUT/PATCH       | update()   |
| /api/comment/delete/{id} | api_comment_delete | Api\Comment  | DELETE          | delete()   |
