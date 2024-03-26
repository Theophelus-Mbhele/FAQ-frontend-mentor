var acc = document.getElementsByClassName("accordion-btn");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        var plusIcon = this.querySelector('.plus-icon');
        var minusIcon = this.querySelector('.minus-icon');

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            plusIcon.style.display = 'block';
            minusIcon.style.display = 'none';
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px" ;
            plusIcon.style.display = 'none';
            minusIcon.style.display = 'block';
        }
    })
}

    