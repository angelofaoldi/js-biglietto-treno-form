'use strict';

// costanti DISTANZA + ETA'
const distanza = document.getElementById('distanza');
const eta = document.getElementById('eta');

// BOTTONE che scatenerà l'azione
const invia = document.getElementById('Invia')

// bisogna rendere il bottone in ascolto, sensibile al click

invia.addEventListener('click', function () {

    const distanzaKm = Number(distanza.value);
    const etaUtente = Number(eta.value);

    // VARIABILE PREZZO 0.21
    const prezzoKm = 0.21;

    //SCONTISTICA
    const scontoGiovani = 20;
    const scontoAnziani = 40;

    

})





