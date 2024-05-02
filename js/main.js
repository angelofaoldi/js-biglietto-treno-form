'use strict';

// costanti DISTANZA + ETA'
const distanza = document.getElementById('distanza');
const eta = document.getElementById('eta');

// BOTTONE che scatenerà l'azione
const invia = document.getElementById('Invia')

// bisogna rendere il bottone in ascolto, sensibile al click
// all'interno tutto il codice dell'azione che verrà scatenata

invia.addEventListener('click', function () {

    const distanzaKm = Number(distanza.value);
    const etaUtente = Number(eta.value);

    // VARIABILE PREZZO 0.21
    const prezzoKm = 0.21;

    // SCONTISTICA
    const scontoGiovani = 20;
    const scontoAnziani = 40;

    // VARIABILE PREZZO BIGLIETTO
    let prezzoBiglietto = (distanzaKm * prezzoKm);

    // STRUTTURA IF-ELSE PER GESTIRE I CASI DI SCONTISTICA

    // SCONTO GIOVANI
    if (etaUtente < 18) {

        // calcolare il prezzo del biglietto scontato per i giovani
        const scontatoGiovani = (prezzoBiglietto * scontoGiovani) / 100;
        const prezzoBigliettoGiovani = (prezzoBiglietto - scontatoGiovani);

        // una volta ottenuto lo sconto giovani, il valore del prezzoBiglietto va aggiornato
        // l'operazione necessita di un arrotondamento alla seconda cifra decimale
        prezzoBiglietto = Math.round(prezzoBigliettoGiovani * 100) / 100;
    

     // SCONTO ANZIANI
    } else if (etaUtente > 65) {

        // calcolare il prezzo del biglietto scontato per gli anziani
        const scontatoAnziani = (prezzoBiglietto * scontoAnziani) / 100;
        const prezzoBigliettoAnziani = (prezzoBiglietto - scontatoAnziani);

        // stesso discorso di prima, si aggiorna la variabile prezzoBiglietto
        prezzoBiglietto = Math.round(prezzoBigliettoAnziani * 100) / 100;


     // RITORNO ALLA NORMALITà: COSTO BIGLIETTO INTERO
    } else { prezzoBiglietto = Math.round(prezzoBiglietto * 100) / 100; }





    // adesso si stampa in console

    console.log('Distanza percorsa: ', distanzaKm, 'km');
    console.log('Eta: ', etaUtente, 'anni');
    console.log('Prezzo al km: ', prezzoKm);
    console.log('Prezzo biglietto: ', prezzoBiglietto);


})





