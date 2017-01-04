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
            name : "Two Cats One Nap",
            pic : "images/cat3.jpg",
            count : 0
        },
        {
            name : "Catty McCattercat",
            pic : "images/cat4.jpeg",
            count : 0
        }];



var ulList = document.getElementById('catlist');

var view = {
        renderList : function() {
            for(var i = 0; i < cats.length; i++) {
                var list = document.createElement('li');
                list.innerHTML = cats[i].name;
                ulList.appendChild(list);
                }
        },
        renderDetails : function(i) {
            var elem = document.getElementById('display');
            var name = document.getElementById('catname');
            var pic = document.getElementById('catpic');
            name.innerHTML = cats[i].name;
            pic.src = cats[i].pic;
            }
        }

view.renderList();
view.renderDetails(0);