var imgArray = new Array();
var img_count;
if(state === "index"){
    imgArray[0] = "image/index_image_1.jpeg";
    imgArray[1] = "image/index_image_2.jpeg";
    imgArray[2] = "image/index_image_3.jpeg";
    imgArray[3] = "image/index_image_4.jpeg";
    imgArray[4] = "image/index_image_5.jpeg";
}
else if(state === "about"){
    imgArray[0] = "image/about_image_1.jpeg";
}
else if(state === "archive"){
    imgArray[0] = "image/archive_image_1.jpeg";
}
else if (state === "alumni") {
    imgArray[0] = "image/alumni_image_1.jpeg";
}
else if(state === "apply"){
    imgArray[0] = "image/apply_image_1.jpeg";
}
else if(state === "contact"){
    imgArray[0] = "image/contact_image_1.jpeg";
}
img_count = imgArray.length;

var img_num = 0;
function showImage() {
    var objImg = document.getElementById("image");
    objImg.src = imgArray[img_num];
    setTimeout(showImage, 5000);
    if (img_num == img_count-1) {
        img_num = 0;
    }
    else {
        img_num = img_num + 1;
    }
}