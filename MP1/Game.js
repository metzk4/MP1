var questionbank = ["Pizza", "Pasta", "Salad", "Soup", "Chips", "Soda", "Candy", "Fruit", "Eggs", "Pie", "Sushi", "Duck", "Ice Cream", "Oatmeal", "Cereal", "Fries", "Yogurt", "Popcorn", "Hot Dog", "Pancakes"]
var questionpics = ["https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg", "https://cdn.pixabay.com/photo/2021/04/06/14/45/pasta-6156595_960_720.jpg", "https://cdn.pixabay.com/photo/2015/05/31/13/59/salad-791891_960_720.jpg", "https://cdn.pixabay.com/photo/2017/03/17/17/33/potato-soup-2152254_960_720.jpg", "https://cdn.pixabay.com/photo/2010/12/01/chips-643_960_720.jpg", "https://cdn.pixabay.com/photo/2016/03/01/04/58/supermarket-1229744_960_720.jpg", "https://cdn.pixabay.com/photo/2017/02/11/14/19/valentines-day-2057745_960_720.jpg", "https://cdn.pixabay.com/photo/2017/05/11/19/44/fresh-fruits-2305192_960_720.jpg", "https://cdn.pixabay.com/photo/2017/09/28/18/13/bread-2796393_960_720.jpg", "https://cdn.pixabay.com/photo/2016/04/11/21/32/pumpkin-1323131_960_720.jpg", "https://cdn.pixabay.com/photo/2020/04/04/15/07/sushi-5002639_960_720.jpg", "https://cdn.pixabay.com/photo/2015/03/22/20/49/duck-685195_960_720.jpg", "https://cdn.pixabay.com/photo/2017/06/02/18/44/ice-2367072_960_720.jpg", "https://cdn.pixabay.com/photo/2016/11/19/14/18/oatmeal-1839515_960_720.jpg", "https://cdn.pixabay.com/photo/2016/11/21/15/53/berries-1846085_960_720.jpg", "https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_960_720.jpg", "https://cdn.pixabay.com/photo/2017/03/31/18/02/strawberry-dessert-2191973_960_720.jpg", "https://cdn.pixabay.com/photo/2020/07/31/19/35/popcorn-5453915_960_720.jpg", "https://cdn.pixabay.com/photo/2021/02/15/11/43/hot-dog-6017568_960_720.jpg", "https://cdn.pixabay.com/photo/2016/11/29/04/49/blueberries-1867398_960_720.jpg"]

let answerChecked = false;

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log(arr);
}

function start() {
    var continuebutton = document.getElementById("ContinueButton");
    continuebutton.addEventListener("click", givenewquestion, false);

    var submitbutton = document.getElementById("SubmitButton");
    submitbutton.addEventListener("click", checkanswer, false);

    var pressstart = document.getElementById('pressstart');
    pressstart.addEventListener("click", function() {
        var quizgame = document.getElementById("quiz");
        quizgame.style.display = "block";
        var startclicked = document.getElementById("startclicked");
        startclicked.style.display = "none";
        updatequestion(1);
    })

    function givenewquestion() {

        if (!answerChecked) {
            alert("select ananswer and hit submit");
            return;
        }
        var index = Math.floor(Math.random() * 20);
        updatequestion(index);
    }

    function updatequestion(index) {
        console.log('updatequestion');
        var questionimgs = document.getElementById("questionimgs");

        questionimgs.setAttribute("src", questionpics[index]); // notice how we take index question pics

        var choiceinputs = document.querySelectorAll('input[name="Option"]');
        var labels = document.querySelectorAll('label');
        choiceinputs.forEach((input) => { // for each input
            input.value = Math.floor(Math.random() * 20); // assign a random value from the question bank
        });
        choiceinputs[0].value = index; // make the first option the same index as the image index; and in here we take questionbank index, so we rely on index being the same for the two, this makes the first radio always the correct answer
        shuffleArray(choiceinputs); // hints the shuffle. And because we put the index's like that they'll remain in check?
        labels.forEach((l, i) => {
            l.innerHTML = questionbank[Math.floor(Math.random() * 20)];
        })
        labels[0].innerHTML = questionbank[index];
        answerChecked = false;

    }

    function checkanswer(index) {
        answerChecked = true;
        var choiceinputs = document.querySelectorAll('input[name="Option"]');
        var answercorrect = document.getElementById("answercorrect");

        for (var i = 0; i < choiceinputs.length; i++) {
            if (choiceinputs[i].checked) {
                if (choiceinputs[i].value = questionbank[index]) {
                    answercorrect.innerText = "That answer is correct!"
                } else {
                    answercorrect.innerText = "That answer was incorrect!"
                }
            }
        }


    }
}
window.addEventListener("load", start, false);