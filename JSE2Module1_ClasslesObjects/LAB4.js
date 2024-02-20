/*Complement the images object from the previous task with two new methods (without rewriting the whole object):

    edit - which takes three arguments (title, artist, and date) and if it finds an image with the given title in
    the list, it changes its artist and date properties;
    delete - which takes the title argument and if it finds a picture with this title in the list, it deletes it
    (to delete a list element, use the splice method)

Additionally, add a show method to the Image constructor, which will display information about this one image. 
Do not rewrite the constructor. Use prototypes for this purpose. Then modify the show method of the images object
 so that it uses the newly created single image show method to display the information.*/

 let Image = function(title, artist, date){
    this.title = title;
    this.artist = artist;
    this.date = date;
    this.show1 = function(){
        return this.Image
    }
};
Image.prototype.show = function(){
    console.log(`${this.title}: ${this.artist}: ${this.date}`);
}

let testObj = {

    list:[],

    show: function(title){
        for (image of this.list){
            image.show();
        }
    },

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
        return check;
    },

    clear: function(){this.list = [];},

    edit: function(title, artist, date){
        if (this.contains(title)){
            let i = this.list.findIndex( (loopV) => loopV.title === title);
            this.list[i].artist = artist;
            this.list[i].date = date;
        }
    }, 

    del: function(title){
        if (this.contains(title)){
            let i = this.list.findIndex( (loopV) => loopV.title === title);
            this.list.splice(i, 1);
        }
    }
};
testObj.add('Mona Lisa', 'Leonardo da Vinci', 1503);
testObj.add('The Last Supper', 'Leonardo da Vinci', 1495);
testObj.add('The Starry Night', 'Vincent van Gogh', 1889);
testObj.add("The Scream", "Edvard Munch", 1893);
testObj.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
testObj.del('The Last Supper');
testObj.show();