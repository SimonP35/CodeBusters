# Liste des routes

## Back

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

## Front

| Routes                           | Nom de la route                 | Description                                               |
|----------------------------------|---------------------------------|-----------------------------------------------------------|
| /                                | Home                            | Page d'acceuil                                            |
| /not-found                       | not-found                       | Page 404                                                  |
| /about                           | About                           | Page à propos                                             |
| /legals                          | legals                          | Page mentions légales et contacts                         |
| /profil                          | profil                          | Page personnelle de l'utilisateur                         |
| /scenarios                       |                                 | Page de listing de tous les scénarios                     |
| /scenario/name/game/waiting-room | scenario_name_game_waiting-room | Page d'attente des joueurs et de préparation au lancement |
| /scenario/name/game/synopsis     | scenario_name_game_synopsis     | Page de synopsis correspondante au scénario choisi        |
| /scenario/name/game/scene1       | scenario_name_game_scene1       | Page de plateau de jeu scene1                             |
| /scenario/name/game/scene2       | scenario_name_game_scene2       | Page de plateau de jeu scene2                             |
| /scenario/name/game/scene3       | scenario_name_game_scene3       | Page de plateau de jeu scene3                             |
| /scenario/name/game/scene4       | scenario_name_game_scene4       | Page de plateau de jeu scene4                             |
| /scenario/name/game/win          | scenario_name_game_win          | Page en cas de victoire                                   |
| /scenario/name/game/loose        | scenario_name_game_loose        | Page en cas de défaite                                    |
