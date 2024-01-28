import portfolio from "../../images/portfolio.png";
import poo from "../../images/poo.png";
import competence from "../../images/competence.png";
import api from "../../images/api.png";
import restaurant from "../../images/restaurant.png";
import examen from "../../images/examen.png";
import tache from "../../images/tache.png";
import book from "../../images/book.png";
import netflix from "../../images/netflix.png";
import blog from "../../images/blog.png";
import data from "../../images/data.png";


const pythonProject = [
    {
        id: 1,
        titre: 'Logiciel de gestion en POO et MVC',
        image: poo,
        description: "Programme qui réalise un tournoi de gestion de jeux d'échecs réalisé en programmation Orientée Objet et en utilisant également la conception MVC.",
        lien: 'https://github.com/boukaii/p4-tournoi_echecs',
    },
    {
        id: 2,
        titre: "Création d'algorithmes",
        image: competence,
        description: "Résoudre des problèmes en utilisant des algorithmes en Python afin d'obtenir le meilleur investissement.",
        lien: 'https://github.com/boukaii/p7-AlgoInvest-Trade',
    },
    {
        id: 3,
        titre: 'API Restful',
        image: api,
        description: "Projet consistant à créer une API Restful pour une société fictive.",
        lien: 'https://github.com/boukaii/p10-SoftDesk',
    },
    {
        id: 4,
        titre: 'Concevoir des test',
        image: examen,
        description: "Projet qui consiste a résoudre et éviter des beugues en fesant des tests unitaires, fonctionnels, d'intégrations et de performances.",
        lien: 'https://github.com/boukaii/p11-GUDLFT',
    },
    {
        id: 5,
        titre: 'Book_Talk',
        image: blog,
        description: "Connectez-vous, Créez, Partagez, Commentez et suivez vos amis.",
        lien: 'https://github.com/boukaii/p9-LITReview.git',
    },
    {
        id: 6,
        titre: 'Scrapping Book',
        image: data,
        description: "L'objectif de ce projet est d'extraire des informations issues d'un site Web (images, prix, auteur, description....).",
        lien: 'https://github.com/boukaii/p2-scraping_books.git',
    },
]
export const phpProject = [
    {
        id: 1,
        titre: 'Task-Manager',
        image: tache,
        description: "Projet de Gestion de Tâches, qui consiste a utiliser la méthode CRUD ainsi que l'architecture MVC.",
        lien: 'https://github.com/boukaii/PHP-Task_manager.git',
    },
    {
        id: 2,
        titre: 'Site Recettes du monde',
        image: book,
        description: "Ce projet a été développé avec le framework Symfony pour créer un blog interactif permettant aux utilisateurs de partager, découvrir et créer des recettes de cuisine délicieuses.",
        lien: 'https://github.com/boukaii/Recipe_blog.git',
    },
    {
        id: 3,
        titre: 'Site Restaurant',
        image: restaurant,
        description: "Site en construction",
        lien: 'https://github.com/boukaii/Meal_purchase_and_delivery_site.git',
    },
]
export const reactProject = [
    {
        id: 1,
        titre: 'PortFolio ', 
        image: portfolio,
        description: "Voici mon PortFolio réalisé en React à l'aide du JSX et de CSS.",
        lien: 'https://github.com/boukaii/Portfolio.git',
    },
    {
        id: 2,
        titre: 'Clone Netflix ', 
        image: netflix,
        description: "Ce projet consiste a récupérer des informations d'une API en JavaScript.",
        lien: 'https://github.com/boukaii/p6-JustStreamIt.git',
    },
]
export default pythonProject;