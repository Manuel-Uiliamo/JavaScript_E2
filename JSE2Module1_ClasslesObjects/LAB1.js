/*
Declare an array of objects that will correspond to the following images: 
Mona Lisa (Leonardo da Vinci, 1503), The Last Supper (Leonardo da Vinci, 1495), 
Starry Night (Vincent van Gogh, 1889), The Scream (Edvard Munch, 1893), Guernica (Pablo Picasso, 1937), 
The Kiss (Gustav Klimt, 1907), Girl With a Pearl Earring (Johannes Vermeer, 1665), 
The Birth of Venus (Sandro Botticelli, 1485), Las Meninas (Diego Velázquez, 1656), The Creation of Adam (Michelangelo, 1512).

Display all the images in the list in the console (full information: title, artist and date of creation).
*/

let paintings = {
    "Mona Lisa": {artist:"Leonardo da Vinci", dateOfCreation:1503},
    "The Last Supper": {artist:"Leonardo da Vinci", dateOfCreation:1495},
    "Starry Night": {artist:"Vicent van Gogh", dateOfCreation:1889},
    "The Scream": {artist:"Edvard Munch", dateOfCreation:1893},
    "Guernica": {artist:"Pablo Picasso", dateOfCreation:1937},
    "The Kiss": {artist:"Gustav Klimt", dateOfCreation:1907},
    "Girl With a Pearl Earing": {artist:"Johannes Vermeer", dateOfCreation:1665},
    "The Birth of Venus": {artist:"Sandro Botticelli", dateOfCreation:1485},
    "Las Meninas": {artist:"Diego Velázquez", dateOfCreation:1656}
};
//console.log(Object.keys(paintings));
for (paint in paintings){
    //console.log(paintings[paint].artist);
    // console.log(`${paint}: ${paintings[paint]["artist"]}: ${paintings[paint]["dateOfCreation"]}`);
    console.log(`${paint}: ${paintings[paint].artist}: ${paintings[paint].dateOfCreation}`);
}

// TO REVIEW: Arrow functions and forEach.