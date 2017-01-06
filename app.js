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
                list[i].addEventListener('click', function(i){
                var name = document.getElementById('catname');
                name.innerHTML = octopus.getCatName(i);
                })
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

            clickTrack : function(){
                var pic = document.getElementById('catpic');
                var p = document.getElementById('clicks');
                pic.addEventListener('click', function(){
                    cats[0].count += 1;
                    p.innerHTML = "clicks: " + cats[0].count;
                })
            }
}

octopus.init();