<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\Request;

class CleanAnswer
{
    public function clean(Request $request)
    {
        // On récupère le contenu de la requête (du JSON)
        $jsonContent = $request->getContent();

        //On décode le JSON pour récupérer la réponse de l'utilisateur
        $answer = json_decode($jsonContent, true);

        // On met en lowercase la réponse
        $toLowerAnswer = strtolower($answer['answer']);

        // On supprime les characters "espace" et "slash"
        $oldChar = [" ", "/", "%franck%"];
        $newChar = ["", "", "frank"];

        $cleanAnswer = str_replace($oldChar, $newChar, $toLowerAnswer);

        return $cleanAnswer;
    }
}