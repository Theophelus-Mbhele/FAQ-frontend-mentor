const questionBtns = document.querySelectorAll('.question-btn');
questionBtns.forEach(btn => {
    btn.addEventListener('click', function(){
        this.classList.toggle('active');
        const answers = this.nextElementsSibling;
        const plusIcon = this.querySelector('.plus-icon');
        const minusIcon = this.querySelector('.minus-icon');

        if(answers.style.maxHeight){
            answers.style.maxHeight = null;
            plusIcon.style.display = 'block';
            minusIcon.style.display = 'none';
        } else {
            answers.style.maxHeight = answers.scrollHeight + "px";
            plusIcon.style.display = 'block';
            minusIcon.style.display = 'none';
        }
    })
})
















































// document.getElementsByClassName('btn').click(function(){
//     document.getElementsByClassName('btn').("purple")
// })  

//  HTML


// JavaScript
// var changeColor = document.querySelector("#changeColor");

// changeColor.addEventListener("click", function() {
//   changeColor.style.color = "red";
// });
// function myFunc() {
//     let para = document. querySelector(".p");
//     para.classList.toggle("p");

// }
// document.querySelector('#try').addEventListener("click", (Event)=> {
//     Event.target.classList.toggle("red");
// });

