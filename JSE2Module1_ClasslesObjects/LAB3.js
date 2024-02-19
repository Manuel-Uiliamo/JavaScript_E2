/* Create an images object that will be used to store the images. The object should have a list property, 
which will be an array of image objects and methods:

    1: contains - which takes as its argument the title of the image and returns true if the image is 
    already placed in the list (otherwise it returns false)
    2: add – which takes three arguments (title, artist, and date) and creates a new object based on 
    them and adds it to the list (if it has not already been added)
    3: show - which displays all images on the list;
    4: clear – which removes all objects from the list. */

let Image = function(title, artist, date){
    this.title = title;
    this.artist = artist;
    this.date = date;
};

let testObj = {

    list:[],

    show() {return console.log(Object.values(this.list))},

    add: function(title, artist, date){
        if (!this.contains(title)){
            this.list.push(new Image(title, artist, date));
        }
    },

    contains: function(title){
        let check = false;
        for(i in Object.values(this.list)){
            let value = this.list[i];
            if (Object.values(value).includes(title)){
                check = true;
                break;
            }
        }
        // console.log(check);
        return check;
    },
    clear: function(){this.list = [];}
};

testObj.add('Mona Lisa', 'Leonardo da Vinci', 1503);
testObj.add('The Last Supper', 'Leonardo da Vinci', 1495);
testObj.add('The Starry Night', 'Vincent van Gogh', 1889);
testObj.add('Mona Lisa', 'Leonardo da Vinci', 1503);
testObj.add('The Starry Night', 'Vincent van Gogh', 1889);

testObj.contains("Mona Lisa");
testObj.show();
console.log("Calling clear method!");
testObj.clear();
testObj.show();

// TO REVIEW: For..of.

// UNCOMPLETE CORRECTION CODE

// let images = {
//     list: [],
//     contains: function(title) {
//         let retVal = false;
//         for(image of this.list) {
//             if(image.title === title) {
//                 retVal = true;
//                 break;
//             }
//         }
//         return retVal;
//     },
//     add: function(title, artist, date) {
//         if(!this.contains(title)) {
//             this.list.push(new Image(title, artist, date));
//         }
//     }
// }