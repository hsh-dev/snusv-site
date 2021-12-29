var nav_list = document.getElementsByClassName("nav_element");
var top_bar = document.getElementsByClassName("top");
for (var i = 0; i < nav_list.length; i++) {
    var nav_el = nav_list[i];
    nav_el.addEventListener('mouseover', function () {
        this.style.color = 'gray';
        document.getElementsByClassName("top")[0].style.backgroundColor = 'rgb(0,0,0,0.7)';
    });
    nav_el.addEventListener('mouseout', function () {
        this.style.color = 'white';
        document.getElementsByClassName("top")[0].style.backgroundColor = '';
    });
}

var list_list = document.getElementsByClassName("list_element");
for (var i = 0; i < list_list.length; i++) {
    var list_el = list_list[i];
    list_el.addEventListener('mouseover', function () {
        this.style.color = 'gray';
    });
    list_el.addEventListener('mouseout', function () {
        this.style.color = 'white';
    });
}