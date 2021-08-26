<?php

namespace App\Service;

use Symfony\Component\Yaml\Yaml;

class GameInit
{
    private Yaml $yaml;

    public function __construct(Yaml $yaml)
    {
        $this->yaml = $yaml;
    }

    public function initGame()
    {
        $this->$this->parseYaml();
    }

    public function parseYaml()
    {
        $items = $this->yaml::parseFile('init/items.yaml');
    }

    public function setGame()
    {
        $items = $this->yaml::parseFile('init/items.yaml');
    }

}