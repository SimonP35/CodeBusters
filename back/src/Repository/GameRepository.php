<?php

namespace App\Repository;

use App\Entity\Game;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Game|null find($id, $lockMode = null, $lockVersion = null)
 * @method Game|null findOneBy(array $criteria, array $orderBy = null)
 * @method Game[]    findAll()
 * @method Game[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GameRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Game::class);
    }

    public function findOrderByScore(){

        $em = $this->getEntityManager();

        $query = $em->createQuery(
            "SELECT u.nickname, g.score, g.ended_at
            FROM App\Entity\Game g
            INNER JOIN App\Entity\User u
            WHERE g.score IS NOT NULL
            AND u.id = g.user
            ORDER BY g.score ASC 
            "
        );
    
        return $query->getResult();
    }

    //? Version Adminer

    // SELECT `user`.`nickname`, `game`.`score`, `game`.`ended_at` FROM `game`
    // INNER JOIN `user`
    // ON `user`.`id` = `game`.`user_id`
    // WHERE `game`.`score` > 0
    // ORDER BY `game`.`score` ASC
    // LIMIT 10    

}
