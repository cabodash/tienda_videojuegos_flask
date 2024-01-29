var items = document.querySelectorAll('.item');
items.forEach(function(item) {
    console.log(item.querySelector('.alta').checked)
    if (item.querySelector('.alta').checked == false) {
        console.log("Baja");
        item.style.backgroundColor = 'rgb(53, 41, 41)';
        item.querySelectorAll("a").forEach(function (a){
            a.classList.remove("btn-primary");
            a.classList.add("btn-primary-red");
        });

    }
});



//background-color: rgb(53, 41, 41)