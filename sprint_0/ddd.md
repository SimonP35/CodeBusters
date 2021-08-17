# Dictionnaire de données

## Object
|Field|Types|Spécificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, AUTO_INCREMENT, UNSIGNED|Object's ID|
|status|TINYINT(1)|NOT NULL|Object's status (1= Active, 2= Inactive)|
|game_id|INT(11)|NOT NULL|Game's id related to Object|
|created_at|TIMESTAMP|NOT NULL DEFAULT CURRENT_TIMESTAMP|Date of creation|
|updated_at|TIMESTAMP|NULL|Date of update|

## Game
|Field|Types|Spécificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, AUTO_INCREMENT, UNSIGNED|Game's ID|
|score|TIMESTAMP|NULL|Game's score|
|created_at|TIMESTAMP|NOT NULL DEFAULT CURRENT_TIMESTAMP|Date of creation|
|updated_at|TIMESTAMP|NULL|Date of update|

## User
|Field|Types|Spécificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, AUTO_INCREMENT, UNSIGNED|User's ID|
|email|VARCHAR(180)|NOT NULL|User's email|
|password|VARCHAR(255)|NOT NULL|User's password|
|nickname|VARCHAR(255)|NOT NULL|User's nickname|
|created_at|TIMESTAMP|NOT NULL DEFAULT CURRENT_TIMESTAMP|Date of creation|
|updated_at|TIMESTAMP|NULL|Date of update|

## Comments
|Field|Types|Spécificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, AUTO_INCREMENT, UNSIGNED|User's ID|
|email|VARCHAR(180)|NOT NULL|User's email|
|password|VARCHAR(255)|NOT NULL|User's password|
|nickname|VARCHAR(255)|NOT NULL|User's nickname|
|created_at|TIMESTAMP|NOT NULL DEFAULT CURRENT_TIMESTAMP|Date of creation|
|updated_at|TIMESTAMP|NULL|Date of update|
|rating|TINYINT(1)|NULL|Scenario's rating|