var cats = [
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
        }];


var viewList = {
        render : function() {
            //Should I create an IFFE here that includes the eventListener and calls a function to update the Details?  If so,
            //where is the best place to create/store that function?
            for(var i = 0; i < cats.length; i++) {
                var list = document.createElement('li');
                list.innerHTML = cats[i].name;
                document.getElementById('catlist').appendChild(list);
                list.addEventListener('click', (function(copy){
                    viewDetails.render(copy);
                })(i))
                }
            },
        update : function() {
            var list = $('li');
            for (i = 0; i < list.length; i++){
                list[i].addEventListener('click', (function(iCopy){
                    return function(){
                        var name = document.getElementById('catname');
                        name.innerHTML = octopus.getCatName(iCopy);
                        var pic = document.getElementById('catpic');
                        pic.src = octopus.getCatPic(iCopy);
                        var count = octopus.getCatCount(iCopy);
                        var clicks = document.getElementById('clicks');
                        //clicks.innerHTML = "Clicks: " + octopus.getCatCount(iCopy);
                        pic.addEventListener('click', function(){
                            count += 1;
                            clicks.innerHTML = "Clicks: " + count;
                        })
                    }
                })(i))
            }
        }
}

var viewDetails = {
        render : function(i) {
            var elem = document.getElementById('display');
            var name = document.getElementById('catname');
            var pic = document.getElementById('catpic');
            var clicks = document.getElementById('clicks');
            name.innerHTML = cats[i].name;
            pic.src = cats[i].pic;
            clicks.innerHTML = "Clicks: " + cats[i].count;
            }
}

var octopus = {
        init : function() {
            viewList.render();
            viewDetails.render(0);
            viewList.update();
        },

        getCatName : function(i){
            return cats[i].name;
        },

        getCatPic : function(i){
            return cats[i].pic;
        },

        getCatCount : function(i){
            return cats[i].count;
        }
}

octopus.init();