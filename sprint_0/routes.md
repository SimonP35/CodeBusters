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

## Front

| Routes                                      | Nom de la route       | Controller         | Methodes (HTTP) | Méthode                 |
|---------------------------------------------|-----------------------|--------------------|-----------------|-------------------------|
| /about                                      | about                 | App\MainController | GET             | about()                 |
| /legals                                     | legals                | App\MainController | GET             | legals()                |
| /api/home/                                  | api_home              | App\MainController | GET             | home()                  |
| /api/register/                              | api_register          | Api\User           | POST            | register()              |
| /api/login/                                 | api_login             | Api\User           | POST            | login ()                |
| /api/scenarios/                             | api_scenarios         | Api\Scenario       | GET             | getScenarios()          |
| /api/scenario/{id}/synopsis                 | api_scenario          | Api\Scenario       | GET             | getSynopsisByScenario() |
| /api/scenario/{id}/scene/{id}               | api_scene_by_scenario | Api\Scene          | GET             | getSceneByScenario()    |
| /api/scenario/{id}/scene/{id}/object/{slug} | api_object_by_scene   | Api\Scene          | GET             | getObjectBySlug()       |
| /api/scenario/{id}/scene/{id}/object/{slug} | api_object_by_scene   | Api\Scene          | POST            | getObjectBySlug()       |
| /api/scenario/{id}/end/{id}                 | api_scenario_end      | Api\Scenario       | GET             | getScenarioEnd()        |

