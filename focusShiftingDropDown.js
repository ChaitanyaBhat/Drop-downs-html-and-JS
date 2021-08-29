let dropBtn = document.querySelector(".drop-btn");
dropBtn.focus();

let dropBox = document.querySelector(".drop-option"); 

document.onclick = function(e) {
    //console.log(e.target);
    if(e.target == dropBtn) {
        dropBox.style = "display: block;";
    }
    else {
        dropBox.style = "display: none;";
    }
}

//let options = dropBox.children;
let optionObj = document.querySelector("#option1");
dropBtn.onkeydown = function(e) {
    if(e.keyCode == 40) {
        //options[0].focus();
        optionObj.focus();
        focusShifting();
    }
}

function focusShifting() {
    let elementFocused = document.activeElement;
    elementFocused.onkeydown = function(e) {
        if(e.keyCode == 40) {
            if(this.nextElementSibling) {
                this.nextElementSibling.focus();
            }
            focusShifting();
        }
        else if(e.keyCode == 38) {
            if(this.previousElementSibling) {
                this.previousElementSibling.focus();
            }
            focusShifting();
        }
        else if(e.keyCode == 13) {
            checkTarget(e);
        }
        else {
            dropBox.style = "display: none;";
            dropBtn.focus();
        }
    }
}

let url1 = "abc";

dropBox.onclick = checkTarget;

async function checkTarget(e) {
    console.log(e.target);
    let elem = e.target;
    console.log(elem.getAttribute("id"));
    if(elem.getAttribute("id") == "option1") {
        console.log("option1");
    }
    else if(elem.getAttribute("id") == "option2") {
        console.log("option2");
    }
    else if(elem.getAttribute("id") == "option3") {
        console.log("option3");
    }
    else if(elem.getAttribute("id") == "option4") {
        console.log("option4");
    }
    else if(elem.getAttribute("id") == "option5") {
        console.log("option5");
    }
    else if(elem.getAttribute("id") == "option6") {
        console.log("option6");
    } 
}
