const value = document.getElementById('value');

function roll() {
    let num = Math.floor(Math.random()*6)+1;
    value.style.color = "red";
    setTimeout(()=>{
        value.classList.add("addingAnimation");
        setTimeout(removingRotation,2000);
        value.innerText = num;
    },500);
}

function removingRotation() {
    value.classList.remove("addingAnimation");
    setTimeout(()=>{
            value.style.color = "white";
    },500);
}
