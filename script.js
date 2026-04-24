function closeFeature(){
    document.getElementById("displayed").id = "hidden";
}

function openFeature(clicked){
    console.log(clicked);
    let buttonID = (document.getElementById(clicked));
    let altText = (buttonID.getElementsByTagName("img")[0].alt);
    let feature = (document.getElementById("hidden"));
    feature.innerHTML = `
        <img src="images/${clicked}.jpg" alt="${altText}">
        <button onclick="closeFeature()"><img src="images/close.svg" alt="close icon"></button>
        `;
    feature.id = "displayed";
}