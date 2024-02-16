/*
Write two functions, Image and getImage, that will return a new image object based on three given arguments: title, artist, and date.
The Image function is the constructor, and getImage is the factory. Using the images data array from the previous task, 
create a new array, images1, using the Image constructor (don't copy the objects, but just create new ones based on the properties read).
Similarly, from images1 create a new array, images2, using getImage.
Display the contents of images2.*/

let paintings = {
    "Mona Lisa": {artist:"Leonardo da Vinci", dateOfCreation:1503},
    "The Last Supper": {artist:"Leonardo da Vinci", dateOfCreation:1495},
    "Starry Night": {artist:"Vicent van Gogh", dateOfCreation:1889},
    "The Scream": {artist:"Edvard Munch", dateOfCreation:1893},
    "Guernica": {artist:"Pablo Picasso", dateOfCreation:1937},
    "The Kiss": {artist:"Gustav Klimt", dateOfCreation:1907},
    "Girl With a Pearl Earing": {artist:"Johannes Vermeer", dateOfCreation:1665},
    "The Birth of Venus": {artist:"Sandro Botticelli", dateOfCreation:1485},
    "Las Meninas": {artist:"Diego Velázquez", dateOfCreation:1656},
    "The Creation of Adam": {artist:"Michelangelo", dateOfCreation:1512}
};

let getImage = function(title, artist, date){
    return {
        title, artist, date
    }
};

let Image = function(title, artist, date){
    this.title = title;
    this.artist = artist;
    this.date = date;
};

let paintings1 = [];
for (paint in paintings){
    let painting = getImage(paint, paintings[paint].artist, paintings[paint].dateOfCreation);
    paintings1.push(painting);
};

let paintings2 = [];
for (let i = 0; i<10; i++){
    let j = i.toString();
    let painting = new Image(paintings1[j].title, paintings1[j].artist, paintings1[j].date);
    paintings2.push(painting);
}

for (let i = 0; i<10; i++){
    let j = i.toString();
    console.log(`${paintings2[j].title}: ${paintings2[j].artist}: ${paintings2[j].date}`);
}


