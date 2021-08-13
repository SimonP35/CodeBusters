# Dictionnaire de données

## Bot
|Field|Types|Spécificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, AUTO_INCREMENT, UNSIGNED|Bot's ID|
|message|LONGTEXT|NOT NULL|Bot's message|
|object_id|INT(11)|NOT NULL|Object's id related to Bot|
|created_at|TIMESTAMP|NOT NULL DEFAULT CURRENT_TIMESTAMP|Date of creation|
|updated_at|TIMESTAMP|NULL|Date of update|

## Object
|Field|Types|Spécificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, AUTO_INCREMENT, UNSIGNED|Object's ID|
|name|VARCHAR(32)|NOT NULL|Object's name|
|slug|VARCHAR(32)|NOT NULL|Object's slug|
|status|TINYINT(1)|NOT NULL|Object's status (1= Active, 2= Inactive)|
|scene_id|INT(11)|NOT NULL|Scene's id related to Object|
|created_at|TIMESTAMP|NOT NULL DEFAULT CURRENT_TIMESTAMP|Date of creation|
|updated_at|TIMESTAMP|NULL|Date of update|

## Score
|Field|Types|Spécificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, AUTO_INCREMENT, UNSIGNED|Score's ID|
|value|TIME|NOT NULL|Duration|
|user_id|INT(11)|NOT NULL|User's id related to Score|
|created_at|TIMESTAMP|NOT NULL DEFAULT CURRENT_TIMESTAMP|Date of creation|

## Content
|Field|Types|Spécificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, AUTO_INCREMENT, UNSIGNED|Content's ID|
|image|VARCHAR(255)|NOT NULL|Content's image|
|description|LONGTEXT|NOT NULL|Content's description|
|answer|LONGTEXT|NULL|Content's answer|
|object_id|INT(11)|NOT NULL|Object's id related to Content|
|created_at|TIMESTAMP|NOT NULL DEFAULT CURRENT_TIMESTAMP|Date of creation|
|updated_at|TIMESTAMP|NULL|Date of update|

## Scene
|Field|Types|Spécificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, AUTO_INCREMENT, UNSIGNED|Scene's ID|
|image|VARCHAR(255)|NOT NULL|Scene's image|
|scenario_id|INT(11)|NOT NULL|Scenario's id related to Scene|
|created_at|TIMESTAMP|NOT NULL DEFAULT CURRENT_TIMESTAMP|Date of creation|
|updated_at|TIMESTAMP|NULL|Date of update|

## Scenario
|Field|Types|Spécificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, AUTO_INCREMENT, UNSIGNED|Scenario's ID|
|image|VARCHAR(255)|NOT NULL|Scenario's image|
|name|VARCHAR(32)|NOT NULL|Scenario's name|
|slug|VARCHAR(32)|NOT NULL|Scenario's slug|
|duration|SMALLINT(6)|NOT NULL|Scenario's duration|
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

## End
|Field|Types|Spécificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, AUTO_INCREMENT, UNSIGNED|End's ID|
|image|VARCHAR(255)|NOT NULL|End's image|
|description|LONGTEXT|NOT NULL|End's description|
|video|VARCHAR(255)|NOT NULL|End's video|
|scenario_id|INT(11)|NOT NULL|Scenario's id related to End|
|created_at|TIMESTAMP|NOT NULL DEFAULT CURRENT_TIMESTAMP|Date of creation|
|updated_at|TIMESTAMP|NULL|Date of update|

## Introduction
|Field|Types|Spécificity|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, AUTO_INCREMENT, UNSIGNED|Introduction's ID|
|image|VARCHAR(255)|NOT NULL|Introduction's image|
|description|LONGTEXT|NOT NULL|Introduction's description|
|video|VARCHAR(255)|NOT NULL|Introduction's video|
|scenario_id|INT(11)|NOT NULL|Scenario's id related to Introduction|
|created_at|TIMESTAMP|NOT NULL DEFAULT CURRENT_TIMESTAMP|Date of creation|
|updated_at|TIMESTAMP|NULL|Date of update|
