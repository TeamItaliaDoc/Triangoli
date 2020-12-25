var calcolaClassificaRun = false;

var matchs = [];
matchs[101] = {"turno" : 1, "girone":1, "nome":"triangolo-doc-n-1", "elo" : [], "iniziato":false, "daCaricare":true, "giocatori" : {}, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, };
matchs[102] = {"turno" : 1, "girone":2, "nome":"triangolo-doc-n-2", "elo" : [], "iniziato":false, "daCaricare":true, "giocatori" : {}, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, };
matchs[103] = {"turno" : 1, "girone":3, "nome":"triangolo-doc-n-3", "elo" : [], "iniziato":false, "daCaricare":true, "giocatori" : {}, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, };
matchs[104] = {"turno" : 1, "girone":4, "nome":"triangolo-doc-n-4", "elo" : [], "iniziato":false, "daCaricare":true, "giocatori" : {}, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, };
matchs[105] = {"turno" : 1, "girone":5, "nome":"triangolo-doc-n-5", "elo" : [], "iniziato":false, "daCaricare":true, "giocatori" : {}, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, };
matchs[106] = {"turno" : 1, "girone":6, "nome":"triangolo-doc-n-6", "elo" : [], "iniziato":false, "daCaricare":true, "giocatori" : {}, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, };
matchs[107] = {"turno" : 1, "girone":7, "nome":"triangolo-doc-n-7", "elo" : [], "iniziato":false, "daCaricare":true, "giocatori" : {}, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, };
matchs[108] = {"turno" : 1, "girone":8, "nome":"triangolo-doc-n-8", "elo" : [], "iniziato":false, "daCaricare":true, "giocatori" : {}, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, };
matchs[109] = {"turno" : 1, "girone":9, "nome":"triangolo-doc-n-9", "elo" : [], "iniziato":false, "daCaricare":true, "giocatori" : {}, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, };
matchs[110] = {"turno" : 1, "girone":10, "nome":"triangolo-doc-n-10", "elo" : [], "iniziato":false, "daCaricare":true, "giocatori" : {}, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, };
matchs[111] = {"turno" : 1, "girone":11, "nome":"triangolo-doc-n-11", "elo" : [], "iniziato":false, "daCaricare":true, "giocatori" : {}, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, };
matchs[112] = {"turno" : 1, "girone":12, "nome":"triangolo-doc-n-12", "elo" : [], "iniziato":false, "daCaricare":true, "giocatori" : {}, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, };
matchs[113] = {"turno" : 1, "girone":13, "nome":"triangolo-doc-n-13", "elo" : [], "iniziato":false, "daCaricare":true, "giocatori" : {}, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, };
matchs[114] = {"turno" : 1, "girone":14, "nome":"triangolo-doc-n-14", "elo" : [], "iniziato":false, "daCaricare":true, "giocatori" : {}, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, };
matchs[115] = {"turno" : 1, "girone":15, "nome":"triangolo-doc-n-15", "elo" : [], "iniziato":false, "daCaricare":true, "giocatori" : {}, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, };
/**/

//ELO DI INIZIO TORNEO
//TURNO 1
matchs[101].elo["revruckus"] = 1641;
matchs[101].elo["dirkflasche"] = 1771;
matchs[101].elo["azphoenix"] = 1819;
matchs[102].elo["dag_stinner"] = 1853;
matchs[102].elo["babilonia"] = 1382;
matchs[102].elo["travellinfan"] = 690;
matchs[103].elo["michaelgallo"] = 1645;
matchs[103].elo["harigovinda"] = 1448;
matchs[103].elo["kmoreteam"] = 1500;
matchs[104].elo["capfracassa"] = 1746;
matchs[104].elo["carnea7"] = 1435;
matchs[104].elo["thejoker2000"] = 1384;
matchs[105].elo["plasol"] = 1332;
matchs[105].elo["tulpicanistan"] = 1378;
matchs[105].elo["abatichs"] = 1252;
matchs[106].elo["rothmoni"] = 1152;
matchs[106].elo["leffelover"] = 1419;
matchs[106].elo["vittobet"] = 1393;
matchs[107].elo["tarlato"] = 1540;
matchs[107].elo["sandro2116"] = 1522;
matchs[107].elo["giampiero111"] = 1452;
matchs[108].elo["riccardocioli"] = 1915;
matchs[108].elo["gfiorito85"] = 1586;
matchs[108].elo["enithith"] = 1303;
matchs[109].elo["ytoong"] = 1506;
matchs[109].elo["verolev"] = 1795;
matchs[109].elo["fulljoker"] = 1725;
matchs[110].elo["tesctassa"] = 1788;
matchs[110].elo["il_king"] = 1786;
matchs[110].elo["fil_fil"] = 1377;
matchs[111].elo["garmik"] = 1445;
matchs[111].elo["reflex56"] = 1580;
matchs[111].elo["themoonlightknight"] = 1409;
matchs[112].elo["maehard"] = 1868;
matchs[112].elo["pantheon-67"] = 1693;
matchs[112].elo["kaspdotcom"] = 1166;
matchs[113].elo["Abatichs"] = 1243;
matchs[113].elo["Warnefrit"] = 1136;
matchs[113].elo["sundancek"] = 1365;

var maxGirone = 8;   //E' il numero dei gironi 

//https://api.chess.com/pub/tournament/csp-inverno-2018-2019-girone-1/1/1
//  https://teamitaliadoc.github.io/CampionatoSocialeCategoria2020/index.html?dev=33
function elabora() {
    //Carico i dati di tutti i match
    for (var i in matchs) {
        matchs[i].url = 'https://api.chess.com/pub/tournament/' + matchs[i].nome + '/1/1'
        caricaMatch(matchs[i].url);
    };
}

function caricaMatch(url)
{
    console.log('caricaMatch: ' + url);
    //Leggo i dati 
    $.getJSON(url,function(data){

        //Cerco match elaborato
        var iMatch = 0
        for (var i in matchs) {
            if (this.url == matchs[i].url && matchs[i].daCaricare)
            iMatch = i;
        }        

        //Segno che è iniziato per stamparlo
        matchs[iMatch].iniziato = true;

        //Creo tutti i giocatori per avere anche quelli senza punteggio
        for (var iPlayer in data.players) {
            if (! matchs[iMatch].giocatori[data.players[iPlayer].username.toLowerCase()]) {
                creaGiocatore(matchs[iMatch], data.players[iPlayer].username);
            }
        }

        //Carico i risultati delle partite
        for (var i in data.games) {

            //Classifica giocatori
            //   NB NB DA FARE PER PRIMA COSI' CREA IL GIOCATORE
            if (data.games[i].end_time) {
           
                //Se risultato  definito la partita è finita
                if (data.games[i].white.result)
                    matchs[iMatch].partiteTerminate ++;

                //aggiorno punteggi
                setPunti(matchs[iMatch], data.games[i].white.username.toLowerCase(), data.games[i].white.result, data.games[i].black.username);
                setPunti(matchs[iMatch], data.games[i].black.username.toLowerCase(), data.games[i].black.result, data.games[i].white.username);
            }
        }


        matchs[iMatch].daCaricare = false;
        //Se ho caricato tutti i dati calcolo la classifica
        for (var i in matchs) {
            if (matchs[i].daCaricare) {
                return;
            }
        }
        
        //controllo di non aver già lanciato fase sucessiva
        if (calcolaClassificaRun)
            return;  
        calcolaClassificaRun = true;

        //Carico partite delle finali
        getAvatar();
    
    }).error(function(jqXhr, textStatus, error) {
        //è andato in errore ricarico i dati
        //Se responseJSON non è valorizzato solo se il record esiste    
        console.log(this.url + ' Errore in caricamento');
        var index = 0;
        for (var i in matchs) {
            if (matchs[i].url == this.url)
                index = i;
        };
        console.log(this.url + ' index: ' + index);
        if (! jqXhr.responseJSON)
        {
            console.log('ERRORE ricarico dati: ' + this.url);
                caricaMatch(this.url);    
            } else {
                console.log('ERRORE Match non valida. ' + this.url);
                console.log('ERRORE Match non valida. ' + this.url);
                console.log('ERRORE Match non valida. ' + this.url);
                console.log('ERRORE Match non valida. ' + this.url);
                //non lo devo più caricare
                matchs[index].daCaricare = false;            }

                //??????? se non carica l'ultimo si pianta ????????
              
        });
}

function calcolaPunteggio()
{
    //Calcolo punti spareggio
    for (var iMatch in matchs) {
        
        for (var iGiocatore in matchs[iMatch].giocatori)
        {
            var myGiocatore = matchs[iMatch].giocatori[iGiocatore];
            //Vinte
            for (var iVinte in myGiocatore.userVinte )
            {
                var avversario = myGiocatore.userVinte[iVinte];
                //Cerco punti avversario
                for (var iAvversario in matchs[iMatch].giocatori)
                {
                    if (matchs[iMatch].giocatori[iAvversario].username == avversario)
                    {
                        myGiocatore.puntiSpareggio += matchs[iMatch].giocatori[iAvversario].punti; 
                    } 
                }
            }
            //patte
            for (var iVinte in myGiocatore.userPatte )
            {
                var avversario = myGiocatore.userPatte[iVinte];
                //Cerco punti avversario
                for (var iAvversario in matchs[iMatch].giocatori)
                {
                    if (matchs[iMatch].giocatori[iAvversario].username == avversario)
                    {
                        myGiocatore.puntiSpareggio += matchs[iMatch].giocatori[iAvversario].punti / 2; 
                    }
                } 
            }
        }
    }

    //Calcola classifica per turno
    calcolaPunteggioTurno($("#turno3"), '3');
    calcolaPunteggioTurno($("#turno2"), '2');
    calcolaPunteggioTurno($("#turno1"), '1');
 }
function calcolaPunteggioTurno(tabella, turno)
{   

    for (var iMatch in matchs) {
        
        var username = '';
        var max = 0;
        var maxSpareggio = 0;
        var eloSpareggio = 0;
        var posizione = 0;
        var nPareggi = 0;
        var oldMax = 0;
        var oldSpareggio = -1;  //Per evitare problemi se sono tutti a zero
        var iGirone = 1;
  
        //Imposto posizione nel gruppo e salvo
        while (max > -1)
        {
            max = -1;
            maxSpareggio = -1;
            eloSpareggio = 3000;
            for (var i in matchs[iMatch].giocatori)
            {
                var myElo = 0
                if (matchs[iMatch].elo[i])
                {
                   myElo = matchs[iMatch].elo[i];
                } else {
                   myElo = giocatori[i].elo;
                }

                //controllo punti
                if ((matchs[iMatch].giocatori[i].posizioneGruppo == 0) &&
                     (matchs[iMatch].giocatori[i].punti > max || (matchs[iMatch].giocatori[i].punti == max && giocatori[i].puntiSpareggio > maxSpareggio) ||
                     (matchs[iMatch].giocatori[i].punti == max && giocatori[i].puntiSpareggio == maxSpareggio && myElo < eloSpareggio)
                     )) {
                    username = i;
                    max = matchs[iMatch].giocatori[i].punti;
                    maxSpareggio = matchs[iMatch].giocatori[i].puntiSpareggio;
                    eloSpareggio = myElo;
                }
            }
            if (max > -1) 
            {
                /* pareggi non gestiti
                if (oldMax == max && oldSpareggio == maxSpareggio )
                {
                    nPareggi++;
                } else {
                    posizione++;
                    posizione += nPareggi;
                    nPareggi = 0;
                    oldMax = max;
                    oldSpareggio = maxSpareggio;
                }    
                */
               posizione++;
               posizione += nPareggi;
               nPareggi = 0;
               oldMax = max;
               oldSpareggio = maxSpareggio;

                //Salvo posizione nel gruppo
                matchs[iMatch].giocatori[username].posizioneGruppo = posizione;
                matchs[iMatch].ultimo = posizione;  //ultima posizione in classifica
                //Punti 1 classificato
                if (posizione == 1) {
                    matchs[iMatch].punti1 = max;  
                    matchs[iMatch].partite1 = matchs[iMatch].giocatori[username].vinte + matchs[iMatch].giocatori[username].perse + matchs[iMatch].giocatori[username].patte;  
                 }   
                 //Punti 2 classificato
                if (posizione == 2) {
                   matchs[iMatch].punti2 = max;  
                   matchs[iMatch].partite2 = matchs[iMatch].giocatori[username].vinte + matchs[iMatch].giocatori[username].perse + matchs[iMatch].giocatori[username].patte;  
                }       
                //Punti 3 classificato
                if (posizione == 3) {
                    matchs[iMatch].punti3 = max;  
                    matchs[iMatch].partite3 = matchs[iMatch].giocatori[username].vinte + matchs[iMatch].giocatori[username].perse + matchs[iMatch].giocatori[username].patte;  
                 }   
             } else {
                //Finito il calcolo di un girono
                if (iGirone < maxGirone) {
                    iGirone++;
                    max = 0; //Devo calcolare girone successivo
                    maxSpareggio = 0;
                    eloSpareggio = 3000;
                    posizione = 0;
                    nPareggi = 0;
                    oldMax = 0;
                    oldSpareggio = -1;  //Per evitare problemi se sono tutti a zero
                }   

            }   
        }
    }

    //Stampo
    for (var index in matchs) {
        max = 999;
        username = '';
        posizione = 0;
        iGirone = matchs[index].girone;
        //Se è il turno giusto e ho dei giocatori
        if (matchs[index].turno == turno && matchs[index].iniziato) {
            while (max < 1000)
            {
                //Stampo il girone
                if (max == 999) {
                        tabella.append('<tr><td><a style="font-weight: bold" href="https://www.chess.com/tournament/' + matchs[index].nome + '/pairings" target=”_blank”>Girone ' + iGirone + '</a></td><td><img id="imgCheck' + index.toString() +'" class="classifica-check" style="display:none" src="img/check.png"></td><td></td></tr>');
                }

                max = 1000;
                for (var i in matchs[index].giocatori)
                {
                    if ((matchs[index].giocatori[i].daStampare) && (matchs[index].giocatori[i].posizioneGruppo < max)) {
                        username = i;
                        max = matchs[index].giocatori[i].posizioneGruppo;
                    }
                }
                if (max < 1000) 
                {
                    matchs[index].giocatori[username].daStampare = false;
                    //Stampo il giocatore
                    stampaTurno(matchs[index],index,tabella, username);
            
                } 
            } 
        }
    }

}
 
function stampaTurno(myMatch, iMatch, tabella, username)
{
    var semaforo = 'giallo.png';
    //Se ho terminato tutte le partite
   
    if (myMatch.partiteTerminate == 6) {
        if (myMatch.giocatori[username].posizioneGruppo == 1) 
            semaforo =  'verde.png';
        else
            semaforo =  'rosso.png';
    } else {
        //Torneo in corso
        if (myMatch.giocatori[username].punti > 3) semaforo =  'verde.png';
        if (myMatch.giocatori[username].posizioneGruppo == 1 && myMatch.giocatori[username].punti > myMatch.punti2 + 4 - myMatch.partite2 ) semaforo =  'verde.png';
        if (myMatch.giocatori[username].posizioneGruppo != 1 && myMatch.giocatori[username].punti + 4 - myMatch.giocatori[username].partiteTerminate < myMatch.punti1 ) semaforo =  'rosso.png';
    }

    //Se ho un qualificato visualizzo check
    if (semaforo == 'verde.png')
        $("#imgCheck"+iMatch).attr("style","dispaly:block");

    //Cerco elo prima del match poi del giocatore
    var myElo = 0
    if (matchs[iMatch].elo[username])
    {
        myElo = myMatch.elo[username];
    } else {
        myElo = giocatori[username].elo;
    }

    //stampo riga    
    tabella.append('<tr class="classifica-giocatori">' +
        '<td class="classifica-col1"><img class="classifica-avatar" src="img/' + semaforo + '"></td>' +  
        '<td class="giocatori-col1SEP"></td>' + 
        '<td class="classifica-col2">' +
        '    <table><tr>' +
        '        <td>' +
        '        <img class="classifica-avatar" src="' + giocatori[username].avatar + '">' +
        '    </td>' +
        '    <td width=7px></td>' +
        '    <td><div>' +
        '            <a class="username" href="' + giocatori[username].url + '" target=”_blank”> ' + giocatori[username].displayName + '</a>' +
        '        </div> <div>  (' + myElo + ') </div>' +
        '        </td>' +    
        '    </tr></table>' +
        '</td>' +
        '<td class="classifica-col3">' + myMatch.giocatori[username].punti +'</td>' +
        '<td class="classifica-col3">' + myMatch.giocatori[username].puntiSpareggio +'</td>' +
        '<td class="classifica-col4"> <span class="game-win">' +  myMatch.giocatori[username].vinte + ' W</span> /'+
        '<span class="game-lost">' +  myMatch.giocatori[username].perse + ' L</span> /' +
        '<span class="game-draw">' +  myMatch.giocatori[username].patte + ' D</span>' +
        '</td>' +
        '</tr>'
    );
}

