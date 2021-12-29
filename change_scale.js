var nav = document.getElementsByTagName("nav")[0];
var list_icon = document.getElementById("list_icon");
var first = document.getElementById("first");
var second = document.getElementById("second");
var image = document.getElementById("image");
var header = document.getElementById("head");
var background = document.getElementById("back");
var sentence_list = document.getElementById("sentence_list");
function change_scale() {
    var innerWidth = window.innerWidth;
    if (innerWidth <= "1200") {
        nav.style.display = 'none';
        list_icon.style.display = 'block';
    }
    else {
        nav.style.display = 'block';
        list_icon.style.display = 'none';
    }

    if (innerWidth <= "1000") {
        second.style.display = 'none';
        if (innerWidth <= "550") {
            image.style.marginTop = '-20%';
            header.style.height = "40%";
            first.style.fontSize = "200%";
        }
        else if (innerWidth <= "770") {
            image.style.marginTop = '-30%';
            header.style.height = "50%";
            first.style.fontSize = "300%";
        }
        else {
            image.style.marginTop = '-40%';
            header.style.height = "60%";
            first.style.fontSize = "400%";
        }
    }
    else {
        second.style.display = 'block';
        image.style.marginTop = '-350px';
        header.style.height = "90%";
        first.style.fontSize = "400%";
    }
}

// initial start
change_scale();
// start when window resize
window.onresize = function (event) {
    change_scale();
}