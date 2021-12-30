var nav = document.getElementsByTagName("nav")[0];
var list_icon = document.getElementById("list_icon");
var first = document.getElementById("first");
var second = document.getElementById("second");
var image = document.getElementById("image");
var header = document.getElementById("head");
var background = document.getElementById("back");
var sentence_list = document.getElementById("sentence_list");
var article = document.getElementById("art");

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
            image.style.marginTop = '-20vh';
            header.style.height = "40vh";
            first.style.fontSize = "200%";
            article.style.top = "40vh";
        }
        else if (innerWidth <= "770") {
            image.style.marginTop = '-30vh';
            header.style.height = "50vh";
            first.style.fontSize = "300%";
            article.style.top = "50vh";
        }
        else {
            image.style.marginTop = '-40vh';
            header.style.height = "60vh";
            first.style.fontSize = "400%";
            article.style.top = "60vh";
        }
    }
    else {
        second.style.display = 'block';
        image.style.marginTop = '-350px';
        header.style.height = "90vh";
        first.style.fontSize = "400%";
        article.style.top = "90vh";
    }
}

// initial start
change_scale();
// start when window resize
window.onresize = function (event) {
    closeList();
    change_scale();
}