Descrizione:
Scrivere un programma che chieda all’utente:

- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.


MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati)
realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.


MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo, come da screenshot allegato. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

______________________________________________________________________________________________________________________________________

MILESTONE #1
______________________________________________________________________________________________________________________________________

1) INPUT KM
2) INPUT ETA

a questi valori che l'utente inserirà vanno assegnate delle variabili
in che modo? attraverso un bottone che quando verrà cliccato scatenerà l'azione

automaticamente, verranno calcolati i prezzi dei biglietti
anche tenendo conto, come nell'esercizio precedente, delle scontistiche
quindi della struttura IF 18 {} ELSE 65 {}

dopodiché si stampa in console

______________________________________________________________________________________________________________________________________

MILESTONE #2
______________________________________________________________________________________________________________________________________

3) INPUT USERNAME -> variabile UTENTE
4) INPUT KM -> variabile DISTANZA

5) inserire l'età = 3 casistiche in un menù a tendina (<18, +18, +65) = INPUT DROPDOWN
6) RESET DROPDOWN = bottone per il reset del dropdown e dei campi compilati + INVIO DATI

7) generare un numero randomico = ipotizzo 12 carrozze = variabile CARROZZA
8) generare un numero randomico = CODICE CP = 5 cifre = variabile CPCODE

9) fixing in base al nuovo codice inserito

//BIGLIETTO

10) INVIO DATI + visualizzare a questo punto un biglietto del treno
11) prezzo finale con due decimali cifra arrotondata

<!--
    MILESTONE #2

        Il layout è scomponibile in due sezioni.

        La prima sezione è composta da:
        - titolo centrato: CALCOLA IL PREZZO DEL TUO BIGLIETTO
        - contenitore div con microlayout
        Il microlayout è composto da:
        - 2 input (username + km)
        - dropdown fascia d'età
        - 2 bottoni: Genera Annulla

        La seconda sezione è composta da:
        - titolo centrato: IL TUO BIGLIETTO
        - contenitore div con microlayout
        Il microlayout è composto da:
        - una riga: DETTAGLIO PASSEGGERI
        - due colonne rapporto 20/80:
            1) CARD: NOME PASSEGGERO Jon Snow bg-color: grey;
            2) tabella (?)

                OFFERTA   CARROZZA   CODICE CP   BIGLIETTO
                Biglietto   5          92911       2,10 &euro;
                Standard
        
        RIFLESSIONI:
        - SEZIONE 1
            - creazione del DROPDOWN Fascia d'età
            - creazione del bottone ANNULLA che svuota tutti i campi
            - microlayout = 3 input sopra e 2 bottoni sotto

        - SEZIONE 2
            - i dati generati dalla tabella richiedono la creazione e l'implementazione di nuove variabili js
            - le nuove variabili js sono:
                - Offerta = VARIABILE = dipende dai dati inseriti (Biglietto Standard, Biglietto Ridotto);
                - Carrozza = COSTANTE = genera numero casuale da 1 a 12;
                - Codice CP = COSTANTE = genera numero casuale di 5 cifre;
                - Costo Biglietto = VARIABILE = dipende dai dati inseriti (km + fascia d'età);
-->



