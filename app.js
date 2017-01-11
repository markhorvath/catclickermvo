var model = {
        currentCat : null,

        admin : false,

        cats : [
        {
            name : "Cat Walker",
            pic : "images/cat.jpg",
            count : 0
        },
        {
            name : "Bort",
            pic : "images/cat1.jpg",
            count : 0
        },
        {
            name : "Raz al Khat",
            pic : "images/cat2.jpg",
            count : 0
        },
        {
            name : "Two Cats",
            pic : "images/cat3.jpg",
            count : 0
        },
        {
            name : "Catty McCattercat",
            pic : "images/cat4.jpeg",
            count : 0
        }]
};

var octopus = {
        init : function() {
            model.currentCat = model.cats[0];
            viewList.init();
            viewDetails.init();
            viewAdmin.init();
        },

        getCurrentCat : function() {
            return model.currentCat;
        },

        getCats : function() {
            return model.cats;
        },

        setCurrentCat : function(cat) {
            model.currentCat = cat;
        },

        clickCounter : function() {
            model.currentCat.count += 1;
            viewDetails.render();
        },
        //function to show the form
        showForm : function() {
                model.admin = !model.admin;
                document.getElementById('form').style.display = "block";
        },
        //function to hide the form
        hideForm : function() {
                model.admin == false;
                document.getElementById('form').style.display = "none";
        },
        //function for updating current cat with new values from form input
        updateCurrentCat : function(cat) {
            //get the values from the input fields
            var newName = document.getElementById('nameinput').value;
            var newUrl = document.getElementById('urlinput').value;
            var newClicks = document.getElementById('clicksinput').value;
            var form = document.getElementById('form');
            //update currentCat with new values
            if(newName != ''){
                cat.name = newName;
            }
            if(newClicks != ''){
                cat.count = parseInt(newClicks);
            }
            if(newUrl != ''){
                cat.pic = newUrl;
            }
            this.setCurrentCat(cat)
            viewDetails.render();
            form.reset();
            this.hideForm();

            console.log(model.currentCat);
        }
}


var viewList = {

        init : function() {
            this.listElem = document.getElementById('catlist');
            this.render();
        },

        render : function() {
            var cats = octopus.getCats();

            this.listElem.innerHTML = '';

            for(var i = 0; i < cats.length; i++) {
                //var cat = cats[i];

                var list = document.createElement('li');
                list.textContent = cats[i].name;
                list.addEventListener('click', (function(copy){
                    return function() {
                        octopus.setCurrentCat(copy);
                        viewDetails.render();
                    };
                })(cats[i]));
                this.listElem.appendChild(list);
            }
        }
}

var viewDetails = {
        init : function() {
            this.elem = document.getElementById('display');
            this.name = document.getElementById('catname');
            this.pic = document.getElementById('catpic');
            this.clicks = document.getElementById('clicks');

            this.pic.addEventListener('click', function(){
                octopus.clickCounter();
            })
            this.render();
            },
        render : function() {
            var currentCat = octopus.getCurrentCat();
            this.clicks.textContent = "Clicks: " + currentCat.count;
            this.name.textContent = currentCat.name;
            this.pic.src = currentCat.pic;
        }
}

var viewAdmin = {
        init : function() {
            octopus.hideForm();

            this.admin = document.getElementById('admin');
            this.cancel = document.getElementById('cancel');
            this.save = document.getElementById('save');

            this.admin.addEventListener('click', function(){
                octopus.showForm();
            })

            this.cancel.addEventListener('click', function(){
                octopus.hideForm();
            })
            //update model.currentCat with new input
            this.save.addEventListener('click', function(){
                var cat = octopus.getCurrentCat();
                octopus.updateCurrentCat(cat);
            })
        },
        render : function() {
            this.name = document.getElementById('catname');
            this.name.textContent = currentCat.name;
        }
}


octopus.init();