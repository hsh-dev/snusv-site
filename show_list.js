var list_on = false;
var list = document.getElementById("list");
var list_icon = document.getElementById("list_icon");
var body = document.getElementsByClassName("article");

function showList() {
    list.classList.add('slidedown');
    list.style.display = "block";
    document.getElementsByClassName("top")[0].style.backgroundColor = 'rgb(0,0,0,0.7)';
    first.style.display = "none";
    second.style.display = "none";
    list_on = true;
}

function closeList(){
    list.style.display = "none";
    document.getElementsByClassName("top")[0].style.backgroundColor = '';
    first.style.display = "block";
    list_on = false;
}

document.getElementById('back').addEventListener('click',function(e){
    if(e.target.id != 'list_content'){
        if (list_on) {
            closeList();
        }
    }
    e.stopPropagation();
});
document.getElementsByClassName('article')[0].addEventListener('click', function (e) {
    if (e.target.id != 'list_content') {
        if (list_on) {
            closeList();
        }
    }
    e.stopPropagation();
});