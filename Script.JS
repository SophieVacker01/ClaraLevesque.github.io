//Déclaration des variables
const dialogue2 = document.getElementById('dialogue2');
const dialogPrincipal = document.getElementById('dialog-principal');
const messageElement = document.getElementById('ne_plus_afficher');
const boutonFermer = document.getElementById('fermer-dialogue');
const messageCacher = 'true';
let messageReponse = document.getElementById('message_reponse'); 

//Début de la base du code 
class Question {
    constructor(text, choices, reponse) {
        this.text = text;
        this.choices = choices;
        this.reponse = reponse;
    }
    bonneReponse(choice) {
        return this.reponse === choice;
    }
}

//Question et réponse aux questions
let questions = [
    new Question("Quelles sont les couleurs des Vulkins au cégep", ["Vert et Vert-Foret", "Mauve et Orange", "Mauve et Blanc", "Jaune et Orange"], "Mauve et Orange"),
    new Question("Dans quelle sport deux équipe s'affrontent 6 vs 6 et dont le but est d'empêcher le ballon de toucher le sol", ["Tennis","Omnikin", "Badminton", "Volley-Ball"], "Volley-Ball"),
    new Question("Sous quel nom est aussi connu le sport nommé “Ultimate” ?", ["Frisbee","Babyfoot", "Pétanque", "Yoga"], "Frisbee"),
    new Question("Combien de minutes a duré le point le plus long enregistré dans l'histoire du tennis ?", ["8 minutes","29 minutes", "14 minutes", "27 minutes"], "29 minutes"),
    new Question("Laquelle/lequel est le/la plus important(e) au cross-country...", ["Endurance", "Chrono", "Récupération", "Mentale"], "Mentale"),
    new Question("Avez-vous aimé ce quiz ?", ["Oui", "Non", "Je m'attendais à mieux", "Je ne sais pas"], "Oui")
];

const message = {
    "question1" : "La couleur orange des Vulkins représente le feu et le mauve représente la couleur de métaux qui refroidissent.",
    "question2" : "Le Volley-ball est un sport où deux équipes s'affrontent (6 x 6) face à face avec un filet qui les séparent et dont leur but est d'empêcher le ballon de toucher le sol",
    "question3" : "Le sport s'appelait à l'origine ultimate Frisbee avant d'être officiellement renommé ultimate afin d'éviter l'emploi de la marque déposée Frisbee.",
    "question4" : "Ce record a eu lieu lors du match opposant Vicki Nelson-Dunbar et Jean Hepnerans. C’est cette balle de set qui est devenu le point le plus long de l’histoire du tennis. Il a 29 minutes pour 643 coups échangés",
    "question5" : "Repousser les limites de ce qu'on pense être possible sur le moment est le plus important pour réussir en Cross-country. De dire à nos muscles de continuer à avancer malgré la douleur demande beaucoup de mentale"
};

//Suite code de base
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.indexQuestionActuel = 0;
    }
    questionActuelle() {
        return this.questions[this.indexQuestionActuel];
    }

    //Code pour le message
    guess(reponse) {
        if (this.questionActuelle().bonneReponse(reponse) && this.indexQuestionActuel === 0) {
            messageReponse.textContent = message.question1;
            messageReponse.classList.remove('hidden');
            this.montrerDialogue(dialogue2);
            this.score++;
            this.indexQuestionActuel++;
        }
        else if (this.questionActuelle().bonneReponse(reponse) && this.indexQuestionActuel === 1) {
            this.score++;
            messageReponse.textContent = message.question2;
            messageReponse.classList.remove('hidden');
            this.indexQuestionActuel++;
            this.montrerDialogue(dialogue2);
        }
        else if (this.questionActuelle().bonneReponse(reponse) && this.indexQuestionActuel === 2) {
            this.score++;
            messageReponse.textContent = message.question3;
            messageReponse.classList.remove('hidden');
            this.indexQuestionActuel++;
            this.montrerDialogue(dialogue2);
        }
        else if (this.questionActuelle().bonneReponse(reponse) && this.indexQuestionActuel === 3) {
            this.score++;
            messageReponse.textContent = message.question4;
            messageReponse.classList.remove('hidden');
            this.indexQuestionActuel++;
            this.montrerDialogue(dialogue2);
        }
        else if (this.questionActuelle().bonneReponse(reponse) && this.indexQuestionActuel === 4) {
            this.score++;
            messageReponse.textContent = message.question5;
            messageReponse.classList.remove('hidden');
            this.montrerDialogue(dialogue2);
            this.indexQuestionActuel++;
        }
        else if (this.questionActuelle().bonneReponse(reponse) && this.indexQuestionActuel === 5) {
            this.score++;
            this.indexQuestionActuel++;
        }
    }

    //Afficher le dialogue
    montrerDialogue(dialogueChoix) {
        dialogueChoix.style.display = "block";
        dialogueChoix.classList.add('dialogue-visible');
    }

    //Cacher le dialogue
    cacherDialogue(dialogueChoix) {
        dialogueChoix.style.display = "none";
        dialogueChoix.classList.remove('dialogue-visible');
    }

    //Fin du code de base pour les questions
    terminer() {
        return this.indexQuestionActuel >= this.questions.length;
    }
}

//Code bizzaroïde de base
const display = {
    elementAffiche: function(id, text) {
        let element = document.getElementById(id);
        element.innerHTML = text;
    },

    finQuiz: function() {
        const finQuiz = `
          <h1>Quiz terminé !</h1>
          <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
        this.elementAffiche("quiz", finQuiz);
    },

    question: function() {
        this.elementAffiche("question", quiz.questionActuelle().text);
    },

    choix: function() {
        let choix = quiz.questionActuelle().choices;
        const devinette = (id, guess) => {
            document.getElementById(id).onclick = function() {
              quiz.guess(guess);
              quizApp();
            };
        };
        // affichage choix + prise en compte du choix
        for(let i = 0; i < choix.length; i++) {
            this.elementAffiche("choice" + i, choix[i]);
            devinette("guess" + i, choix[i]);
        }
    },

    progression: function() {
        let numeroQuestion = quiz.indexQuestionActuel + 1;
        this.elementAffiche("progress", "Question " + numeroQuestion + " sur " + quiz.questions.length);
    },
};

//Suite code bizzaroïde de base
quizApp = () => {
    if (quiz.terminer()) {
        display.finQuiz();
    } else {
        display.question();
        display.choix();
        display.progression();
    } 
}

//fin du code bizzaroîde de base
let quiz = new Quiz(questions);
quizApp();

//Code pour l'arrière-plan
//Ajouter évènement 
document.addEventListener('DOMContentLoaded', () => {
    const dialogPrincipal = document.getElementById('dialog-principal');

    function ouvrirDialog() {
        document.body.classList.add('dialog-open'); 
    } 
    function fermerDialog() {
        document.body.classList.remove('dialog-open');
    }

    // si le dialog est ouvert
    if (dialogPrincipal.open) {
        //L'arrière
        ouvrirDialog();
    }

    // Ajoute des événements pour ouvrir et fermer le dialogue
    dialogPrincipal.addEventListener('open', ouvrirDialog);
    dialogPrincipal.addEventListener('close', fermerDialog);
});

// Fonction pour fermer la boîte de dialogue2
document.addEventListener('DOMContentLoaded', () => {
    boutonFermer.addEventListener('click', () => {
        quiz.cacherDialogue(dialogue2); 
    }); 
});

//Faire en sorte que le dialogue principal ne se raffiche plus quand on clique sur ne plus afficher
document.addEventListener('DOMContentLoaded', () => {
    // Vérifier si le message ne doit plus être affiché
    if (localStorage.getItem('messageCacher') === messageCacher) {
        dialogPrincipal.close();
    } else {
        dialogPrincipal.show();
    }

    // Ajouter un style de curseur pour indiquer que l'élément est cliquable
    messageElement.style.cursor = 'pointer';

    // Fonction pour ne plus afficher le message
    messageElement.addEventListener('click', () => {
        localStorage.setItem('messageCacher', messageCacher);
        dialogPrincipal.close();
    });
});