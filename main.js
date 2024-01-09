/* 
    Script jQuery.js pris sur CODEPEN (create)
    2024 - Dimitri Chassignol (edit)

*/

// Attend que le document soit prêt avant d'exécuter le code (fonction draw() - ligne 36 HTML)
$(document).ready(function() {
    // Animation de l'opacité et du margin du contenu principal
    $('#content').animate({
        opacity: 1,
        marginTop: '0',
    }, 800);

    // Gestion du clic sur les titres h2
    $('h2').click(function() {
        // Affiche ou masque le bloc de texte suivant au clic
        $(this).next('.subtext').slideToggle('fast');
        
        // Ajoute ou retire la classe 'moved' à l'élément .hex enfant du h2 cliqué
        $(this).children('.hex').toggleClass('moved');
    });
});
