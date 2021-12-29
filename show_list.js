var list_on = false;
var list = document.getElementById("list");
function showList() {
    if (list_on == false) {
        list.style.display = "block";
        document.getElementsByClassName("top")[0].style.backgroundColor = 'rgb(0,0,0,0.7)';
        first.style.display = "none";
        second.style.display = "none";
        list_on = true;
    }
    else {
        document.getElementsByClassName("top")[0].style.backgroundColor = '';
        list.style.display = "none";
        first.style.display = "block";
        change_scale();
        list_on = false;
    }
}