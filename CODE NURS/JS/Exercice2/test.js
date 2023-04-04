let numberOfSeasons = 8;
let numberOfEpisodes = 10;

// Calculate totalShowTime here
// =====================================

let episodeTime = 50;
let commercialTime = 5;
let totalShowTime = 50*80+5*80;


// =====================================

let paragraph = document.querySelector('#info');
paragraph.innerText = `${numberOfSeasons} saisons, ${numberOfEpisodes} épisodes par saison

Durée totale de visionnage: ${totalShowTime} minutes`