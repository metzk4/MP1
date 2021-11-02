var questionbank= ["Pizza","Pasta","Salad","Soup","Chips","Soda","Candy","Fruit","Eggs","Pie","Sushi","Duck","Ice Cream", "Oatmeal","Cereal","Fries","Yogurt","Popcorn","Hot Dog","Pancakes"
]
var questionpics= ["https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg", "https://cdn.pixabay.com/photo/2021/04/06/14/45/pasta-6156595_960_720.jpg", "https://cdn.pixabay.com/photo/2015/05/31/13/59/salad-791891_960_720.jpg","https://cdn.pixabay.com/photo/2017/03/17/17/33/potato-soup-2152254_960_720.jpg","https://cdn.pixabay.com/photo/2010/12/01/chips-643_960_720.jpg","https://cdn.pixabay.com/photo/2016/03/01/04/58/supermarket-1229744_960_720.jpg", "https://cdn.pixabay.com/photo/2017/02/11/14/19/valentines-day-2057745_960_720.jpg","https://cdn.pixabay.com/photo/2017/05/11/19/44/fresh-fruits-2305192_960_720.jpg","https://cdn.pixabay.com/photo/2017/09/28/18/13/bread-2796393_960_720.jpg", "https://cdn.pixabay.com/photo/2016/04/11/21/32/pumpkin-1323131_960_720.jpg", "https://cdn.pixabay.com/photo/2020/04/04/15/07/sushi-5002639_960_720.jpg", "https://cdn.pixabay.com/photo/2015/03/22/20/49/duck-685195_960_720.jpg","https://cdn.pixabay.com/photo/2017/06/02/18/44/ice-2367072_960_720.jpg","https://cdn.pixabay.com/photo/2016/11/19/14/18/oatmeal-1839515_960_720.jpg","https://cdn.pixabay.com/photo/2016/11/21/15/53/berries-1846085_960_720.jpg","https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_960_720.jpg","https://cdn.pixabay.com/photo/2017/03/31/18/02/strawberry-dessert-2191973_960_720.jpg","https://cdn.pixabay.com/photo/2020/07/31/19/35/popcorn-5453915_960_720.jpg","https://cdn.pixabay.com/photo/2021/02/15/11/43/hot-dog-6017568_960_720.jpg","https://cdn.pixabay.com/photo/2016/11/29/04/49/blueberries-1867398_960_720.jpg"]

function start ()
    { var continuebutton = document.getElementById("ContinueButton");
    continuebutton.addEventListener("click",givenewquestion,false );


    }
    function givenewquestion (){
        var index = Math.floor(1 + Math.random() * 19);
        updatequestion(index);
    }
    function updatequestion (index) {
        var questionimgs=document.getElementById("questionimgs");
        questionimgs.setAttribute("src",questionpics[index]);
    }
window.addEventListener("load", start, false);