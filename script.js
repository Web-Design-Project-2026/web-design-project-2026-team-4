if (document.getElementById("portfolio")!= null){
    function openFeature(clicked){
        console.log(clicked);
        let buttonID = (document.getElementById(clicked));
        let altText = (buttonID.getElementsByTagName("img")[0].alt); //0 hardcoded as the buttonID/clicked element will always only contain one image (but getElements still always returns a list)
        let feature = (document.getElementById("hidden"));
        feature.innerHTML = `
            <img src="images/${clicked}.jpg" alt="${altText}">
            <button id="close" onclick="closeFeature()"><img src="images/close.svg" alt="close icon"></button>
            `;
        feature.id = "displayed";
        document.getElementById("close").focus(); //Moves the focused element to the close button so that keyboard navigation doesn't require tabbing through the entire portfolio
        sessionStorage.setItem("lastClicked", clicked); //Tracks the button clicked so that the focus can be returned there as part of closeFeature
    }

    function closeFeature(){
        document.getElementById("displayed").id = "hidden";
        let last = sessionStorage.getItem("lastClicked");
        document.getElementById(last).focus();
    }
}

function nextImg(a){
    if (a === "location") {
        let one = document.getElementsByClassName("loc-one");
        let two = document.getElementsByClassName("loc-two");
        let three = document.getElementsByClassName("loc-three");
        if (one[0].id === "loc-top") {
            one[0].id = "loc-left";
            two[0].id = "loc-top";
            three[0].id = "loc-right";
        } else if (one[0].id === "loc-left") {
            one[0].id = "loc-right";
            two[0].id = "loc-left";
            three[0].id = "loc-top";
        } else if (one[0].id === "loc-right") {
            one[0].id = "loc-top";
            two[0].id = "loc-right";
            three[0].id = "loc-left";
        }
    } else if (a === "studio") {
        let one = document.getElementsByClassName("stu-one");
        let two = document.getElementsByClassName("stu-two");
        let three = document.getElementsByClassName("stu-three");
        if (one[0].id === "stu-top") {
            one[0].id = "stu-left";
            two[0].id = "stu-top";
            three[0].id = "stu-right";
        } else if (one[0].id === "stu-left") {
            one[0].id = "stu-right";
            two[0].id = "stu-left";
            three[0].id = "stu-top";
        } else if (one[0].id === "stu-right") {
            one[0].id = "stu-top";
            two[0].id = "stu-right";
            three[0].id = "stu-left";
        }
    }
}

function prevImg(a){
    if (a === "location") {
        let one = document.getElementsByClassName("loc-one");
        let two = document.getElementsByClassName("loc-two");
        let three = document.getElementsByClassName("loc-three");
        console.log(one[0].id);
        if (one[0].id === "loc-top") {
            one[0].id = "loc-right";
            two[0].id = "loc-left";
            three[0].id = "loc-top";
        } else if (one[0].id === "loc-left") {
            one[0].id = "loc-top";
            two[0].id = "loc-right";
            three[0].id = "loc-left";
        } else if (one[0].id === "loc-right") {
            one[0].id = "loc-left";
            two[0].id = "loc-top";
            three[0].id = "loc-right";
        } else {console.log("how did this happen?")}
    } else if (a === "studio") {
        let one = document.getElementsByClassName("stu-one");
        let two = document.getElementsByClassName("stu-two");
        let three = document.getElementsByClassName("stu-three");
        console.log(one[0].id);
        if (one[0].id === "stu-top") {
            one[0].id = "stu-right";
            two[0].id = "stu-left";
            three[0].id = "stu-top";
        } else if (one[0].id === "stu-left") {
            one[0].id = "stu-top";
            two[0].id = "stu-right";
            three[0].id = "stu-left";
        } else if (one[0].id === "stu-right") {
            one[0].id = "stu-left";
            two[0].id = "stu-top";
            three[0].id = "stu-right";
        } else {console.log("how did this happen?")}
    } else {console.log ("how did you get here?")}
}