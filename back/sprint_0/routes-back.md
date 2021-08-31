# Liste des routes

## Back


| Routes                   | Nom de la route    | Controller   | Methodes (HTTP) | Méthode    | JSON envoyé par le FRONT                                                   |
|--------------------------|--------------------|--------------|-----------------|------------|----------------------------------------------------------------------------|
| /api/login               | api_login          | Api\Security | POST            | login()    | "username" & "password"                                                    |
| /api/user/register       | api_user_register  | Api\User     | POST            | register() | "email" & "password" & "nickname"                                          |
| /api/user/read           | api_user_read      | Api\User     | GET             | register() | seulement le token                                                         |
| /api/user/update         | api_user_update    | Api\User     | PUT/PATCH       | register() | le token & les input remplis par user                                      |
| /api/user/delete         | api_user_delete    | Api\User     | DELETE          | register() | seulement le token                                                         |
| /api/game/create         | api_game_create    | Api\Game     | POST            | create()   | seulement le token                                                         |
| /api/game/update/{id}    | api_game_update    | Api\Game     | PUT/PATCH       | update()   | seulement le token +id User (URL)                                          |
| /api/game/score          | api_game_score     | Api\Game     | GET             | score()    |                                                                            |
| /api/comment/            | api_comment_list   | Api\Comment  | GET             | list()     | seulement le token                                                         |
| /api/comment/create      | api_comment_create | Api\Comment  | POST            | create()   | le token & "user": {id} & "game": {id} & "rating": AU MINIMUM + "content": |
| /api/comment/read/{id}   | api_comment_read   | Api\Comment  | GET             | read()     | seulement le token ( et appeler l'id du commentaire dans l'endpoint)       |
| /api/comment/update/{id} | api_comment_update | Api\Comment  | PUT/PATCH       | update()   | seulement le token ( et appeler l'id du commentaire dans l'endpoint)       |
| /api/comment/delete/{id} | api_comment_delete | Api\Comment  | DELETE          | delete()   | seulement le token ( et appeler l'id du commentaire dans l'endpoint)       |
