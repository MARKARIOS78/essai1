// Récupère l'élément du logo
var logo = document.getElementById('logo');

// Ajoute un gestionnaire d'événement pour le survol
logo.addEventListener('mouseover', function() {
    // Change la couleur du texte du logo lorsqu'il est survolé
    logo.style.color = '#ff0000';
});

// Ajoute un gestionnaire d'événement pour la sortie du survol
logo.addEventListener('mouseout', function() {
    // Rétablit la couleur du texte du logo lorsque le survol est terminé
    logo.style.color = '#000000'; // Change-le en couleur noire (ou n'importe quelle autre couleur que tu préfères)
});
// Récupère l'élément du formulaire
var form = document.querySelector('form');

// Ajoute un gestionnaire d'événement pour la soumission du formulaire
form.addEventListener('submit', function(event) {
    // Récupère les valeurs saisies dans les champs du formulaire
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Valide l'email en utilisant une expression régulière simple
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Veuillez saisir une adresse email valide.');
        event.preventDefault(); // Empêche l'envoi du formulaire si l'email n'est pas valide
    }
});
