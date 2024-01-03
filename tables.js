// header
const petName = sessionStorage.getItem("petName");
const ownerName = sessionStorage.getItem("ownerName");
const species = sessionStorage.getItem("species");
const kgs = sessionStorage.getItem("kgs");
const lbs = sessionStorage.getItem("lbs");


document.querySelector("#petName").textContent = "Pet Name: " + petName;
document.querySelector("#ownerName").textContent = "Owner Name: " + ownerName;

if (species == "Canine"){
    document.querySelector("#species").textContent = "Species: " + species + " (C)";
} else {
    document.querySelector("#species").textContent = "Species: " + species + " (F)";
}
document.querySelector("#kgs").textContent = kgs + " kgs";
document.querySelector("#lbs").textContent = lbs  + "lbs";



// Emergency Table
let atropine4Min = document.querySelector("#atropine4Min");
let atropine4Avg = document.querySelector("#atropine4Avg");
let atropine4Max = document.querySelector("#atropine4Max");

let atropine5Min = document.querySelector("#atropine5Min");
let atropine5Avg = document.querySelector("#atropine5Avg");
let atropine5Max = document.querySelector("#atropine5Max");

let dexaSPMin = document.querySelector("#dexaSPMin");
let dexaSPAvg = document.querySelector("#dexaSPAvg");
let dexaSPMax = document.querySelector("#dexaSPMax");

let diphenMin = document.querySelector("#diphenMin");
let diphenAvg = document.querySelector("#diphenAvg");
let diphenMax = document.querySelector("#diphenMax");

let ephedrineMin = document.querySelector("#ephedrineMin");
let ephedrineAvg = document.querySelector("#ephedrineAvg");
let ephedrineMax = document.querySelector("#ephedrineMax");

let glycoMin = document.querySelector("#glycoMin");
let glycoAvg = document.querySelector("#glycoAvg");
let glycoMax = document.querySelector("#glycoMax");

let emergencyTagsList = [atropine4Min, atropine4Avg, atropine4Max,
                         atropine5Min, atropine5Avg, atropine5Max, 
                         dexaSPMin, dexaSPAvg, dexaSPMax, diphenMin,
                         diphenAvg, diphenMax, ephedrineMin, ephedrineAvg,
                         ephedrineMax, glycoMin, glycoAvg, glycoMax];

let emergency = new Emergency(parseFloat(kgs));
let emergencyList = returnList(emergency.emergencyList);

for (let i = 0; i < emergencyTagsList.length; i++){
    emergencyTagsList[i].textContent = emergencyList[i];
}




// ALS Table
let atipamezoleMin = document.querySelector("#atipamezoleMin");
let atipamezoleAvg = document.querySelector("#atipamezoleAvg");
let atipamezoleMax = document.querySelector("#atipamezoleMax");

let flumazenilMin = document.querySelector("#flumazenilMin");
let flumazenilAvg = document.querySelector("#flumazenilAvg");
let flumazenilMax = document.querySelector("#flumazenilMax");

let naxoloneMin = document.querySelector("#naxoloneMin");
let naxoloneAvg = document.querySelector("#naxoloneAvg");
let naxoloneMax = document.querySelector("#naxoloneMax");

let atropine41Min = document.querySelector("#atropine41Min");
let atropine41Avg = document.querySelector("#atropine41Avg");
let atropine41Max = document.querySelector("#atropine41Max");

let atropine51Min = document.querySelector("#atropine51Min");
let atropine51Avg = document.querySelector("#atropine51Avg");
let atropine51Max = document.querySelector("#atropine51Max");

let epinephrineMin = document.querySelector("#epinephrineMin");
let epinephrineAvg = document.querySelector("#epinephrineAvg");
let epinephrineMax = document.querySelector("#epinephrineMax");

let amiodaroneMin = document.querySelector("#amiodaroneMin");
let amiodaroneAvg = document.querySelector("#amiodaroneAvg");
let amiodaroneMax = document.querySelector("#amiodaroneMax");

let lidocaneCMin = document.querySelector("#lidocaneCMin");
let lidocaneCAvg = document.querySelector("#lidocaneCAvg");
let lidocaneCMax = document.querySelector("#lidocaneCMax");

let lidocaneFMin = document.querySelector("#lidocaneFMin");
let lidocaneFAvg = document.querySelector("#lidocaneFAvg");
let lidocaneFMax = document.querySelector("#lidocaneFMax");

let alsTagsList = [atipamezoleMin, atipamezoleAvg, atipamezoleMax,
                   flumazenilMin, flumazenilAvg, flumazenilMax, naxoloneMin,
                   naxoloneAvg, naxoloneMax, atropine41Min, atropine41Avg,
                   atropine41Max, atropine51Min, atropine51Avg, atropine51Max,
                   epinephrineMin, epinephrineAvg, epinephrineMax, amiodaroneMin,
                   amiodaroneAvg, amiodaroneMax, lidocaneCMin, lidocaneCAvg,
                   lidocaneCMax, lidocaneFMin, lidocaneFAvg, lidocaneFMax

];

let als = new AdvancedLifeSupport(parseFloat(kgs), species);
let alsList = returnList(als.ALSList);

for (let i = 0; i < alsTagsList.length; i++){

    if (alsList[i] == 0){
        document.getElementById(alsTagsList[i].id).style.backgroundColor = "black";
    } else {
        alsTagsList[i].textContent = alsList[i];
    }
}






// Anesthesia Medications

// Tags


let anesTagsList = []

let anes = new anesthesiaAnalgesia(parseFloat(kgs), species);
let anesList = returnList(anes.anesthesiaList);


for (let i = 0; i < anesTagsList.length; i++){
    if (anesList[i] == 0){
        document.getElementById(anesTagsList[i].id).style.backgroundColor = "black";
    } else {
        anesTagsList[i].textContent = anesList[i];
    }
}
