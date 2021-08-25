<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\ItemRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=ItemRepository::class)
 */
class Item
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"new_game"})
     */
    private $id;

    /**
     * @ORM\Column(type="smallint")
     * @Groups({"new_game", "item"})
     * @Assert\NotBlank
     * @Assert\Type("int") 
     * @Assert\Length(max = 1)
     * @Assert\Choice({0, 1}) 
     */
    private $status;

    /**
     * @ORM\Column(type="string", length=64)
     * @Groups({"new_game"})
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity=Game::class, inversedBy="items")
     * @ORM\JoinColumn(nullable=false)
     */
    private $game;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStatus(): ?int
    {
        return $this->status;
    }

    public function setStatus(int $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getGame(): ?Game
    {
        return $this->game;
    }

    public function setGame(?Game $game): self
    {
        $this->game = $game;

        return $this;
    }
}
