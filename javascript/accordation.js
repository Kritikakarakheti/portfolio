function accordation1() {
    var content = document.getElementById("content1");

    if (content.style.display == "none") {
        content.style.display = "block";
        document.getElementById("title").style.color = "red";
        document.getElementById("btn1").style.borderBottom = "1px solid  #174C4F";
        document.getElementById("img1").style.display = "none";
        document.getElementById("img2").style.display = "block";
    }
    else {
        content.style.display = "none";
        document.getElementById("title").style.color = "black";
        
        document.getElementById("btn1").style.borderBottom = "none";
        document.getElementById("img1").style.display = "block";
        document.getElementById("img2").style.display = "none";
    }
}



function accordation2() {
    var content = document.getElementById("content2");

    if (content.style.display == "none") {
        content.style.display = "block";
        document.getElementById("title1").style.color = "red";
        document.getElementById("btn2").style.borderBottom = "1px solid  #174C4F";
        document.getElementById("img3").style.display = "none";
        document.getElementById("img4").style.display = "block";
    }
    else {
        content.style.display = "none";
        document.getElementById("title1").style.color = "black";
        document.getElementById("btn2").style.borderBottom = "none";
        document.getElementById("img3").style.display = "block";
        document.getElementById("img4").style.display = "none";
    }
}



function accordation3() {
    var content = document.getElementById("content3");

    if (content.style.display == "none") {
        content.style.display = "block";
        document.getElementById("title3").style.color = "red";
        document.getElementById("btn3").style.borderBottom = "1px solid  #174C4F";
        document.getElementById("img5").style.display = "none";
        document.getElementById("img6").style.display = "block";
    }
    else {
        content.style.display = "none";
        document.getElementById("title3").style.color = "black";
        document.getElementById("btn3").style.borderBottom = "none";
        document.getElementById("img5").style.display = "block";
        document.getElementById("img6").style.display = "none";
    }
}


function accordation4() {
    var content = document.getElementById("content4");

    if (content.style.display == "none") {
        content.style.display = "block";
        document.getElementById("title4").style.color = "red";
        document.getElementById("btn4").style.borderBottom = "1px solid  #174C4F";
        document.getElementById("img7").style.display = "none";
        document.getElementById("img8").style.display = "block";
    }
    else {
        content.style.display = "none";
        document.getElementById("title4").style.color = "black";
        document.getElementById("btn4").style.borderBottom = "none";
        document.getElementById("img7").style.display = "block";
        document.getElementById("img8").style.display = "none";
    }
}
