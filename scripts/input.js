const submitBtn = document.querySelector("#submit");
let petName = document.querySelector("#petName");
let ownerName = document.querySelector("#ownerName");
let species = document.querySelector("#species");
let weightType = document.querySelector("#weightType");
let weightNum = document.querySelector("#weightInput");
let p;

submitBtn.addEventListener("click", function(){
    p = new Pet(petName.value, ownerName.value, species.value, weightType.value, weightNum.value);
    console.log(p);
    console.log(p.petName);
    sessionStorage.setItem("petName", p.petName);
    sessionStorage.setItem("ownerName", p.ownerName);
    sessionStorage.setItem("species", p.species);
    sessionStorage.setItem("kgs", p.kgs);
    sessionStorage.setItem("lbs", p.lbs);
});


