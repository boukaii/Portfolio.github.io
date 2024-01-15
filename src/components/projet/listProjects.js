import portfolio from "../../images/portfolio.png";
import poo from "../../images/poo.png";
import competence from "../../images/competence.png";
import api from "../../images/api.png";
import restaurant from "../../images/restaurant.png";
import examen from "../../images/examen.png";
import tache from "../../images/tache.png";
import book from "../../images/book.png";



const pythonProject = [
    {
        id: 1,
        titre: 'PortFolio ', 
        titre_global: 'Projet réalisé en Python / Django',
        image: portfolio,
        description: "Voici mon PortFolio réalisé en React ainsi que du HTML et CSS.",
        lien: 'https://github.com/boukaii/Portfolio',
    },
    {
        id: 2,
        titre: 'Logiciel de gestion en POO et MVC',
        image: poo,
        description: "Programme qui réalise un tournoi de gestion de jeux d'échecs réalisé en programmation Orientée Objet et en utilisant également la conception MVC.",
        lien: 'https://github.com/boukaii/p4-tournoi_echecs',
    },
    {
        id: 3,
        titre: "Création d'algorithmes",
        image: competence,
        description: "Résoudre des problèmes en utilisant des algorithmes en Python afin d'obtenir le meilleur investissement.",
        lien: 'https://github.com/boukaii/p7-AlgoInvest-Trade',
    },
    {
        id: 4,
        titre: 'Site Restaurant',
        image: restaurant,
        description: 'Site web réalisé pour un restaurant fictif.',
        lien: '',
    },
    {
        id: 5,
        titre: 'API Restful',
        image: api,
        description: "Projet consistant à créer une API Restful pour une société fictive.",
        lien: 'https://github.com/boukaii/p10-SoftDesk',
    },
    {
        id: 6,
        titre: 'Concevoir des test',
        image: examen,
        description: "Projet qui consiste a résoudre et éviter des beugues en fesant des tests unitaires, fonctionnels, d'intégrations et de performances.",
        lien: 'https://github.com/boukaii/p11-GUDLFT',
    },
]




export const phpProject = [
    {
        id: 1,
        titre_global: 'Projet réalisé en PHP / Symfony',
        titre: 'Task-Manager',
        image: tache,
        description: "Projet de Gestion de Tâches, qui consiste a utiliser la méthode CRUD ainsi que l'architecture MVC.",
        lien: 'https://github.com/boukaii/p11-GUDLFT',
    },
    {
        id: 2,
        titre: 'Site Recettes du monde',
        image: book,
        description: "",
        lien: 'https://github.com/boukaii/p11-GUDLFT',
    },
    {
        id: 3,
        titre: 'Site Restaurant',
        image: restaurant,
        description: "Site web réalisé pour un restaurant fictif.",
        lien: '',
    },
]
export default pythonProject;