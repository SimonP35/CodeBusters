# Liste des routes

## Back

| Routes                       | Nom de la route    | Controller  | Methodes (HTTP) | Méthode    |
| ---------------------------- | ------------------ | ----------- | --------------- | ---------- |
| /api/user/register               | api_user_register       | Api\User    | POST            | register() |
| /api/user/login                  | api_login          | Api\User    | POST            | login()    |
| /api/game                    | api_create_game    | Api\Game    | POST            | create()   |
| /api/game/{key}              | api_game_end       | Api\Game    | PUT/PATCH       | update()   |
| /api/item/update/{id}    | api_item_status    | Api\Item    | PUT/PATCH       | update()   |
| /api/game/{key}/comment      | api_create_comment | Api\Comment | POST            | create()   |
| /api/game/{key}/comment/{id} | api_read_comment   | Api\Comment | GET             | read()     |
| /api/game/{key}/comments     | api_list_comment   | Api\Comment | GET             | list()     |
| /api/game/{key}/comment/{id} | api_update_comment | Api\Comment | PUT/PATCH       | update()   |
| /api/game/{key}/comment/{id} | api_delete_comment | Api\Comment | DELETE          | delete()   |
