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
let acepromazineCMin = document.querySelector("#acepromazineCMin");
let acepromazineCAvg = document.querySelector("#acepromazineCAvg");
let acepromazineCMax = document.querySelector("#acepromazineCMax");

let acepromazineFMin = document.querySelector("#acepromazineFMin");
let acepromazineFAvg = document.querySelector("#acepromazineFAvg");
let acepromazineFMax = document.querySelector("#acepromazineFMax");

let alfaxaloneMin = document.querySelector("#alfaxaloneMin");
let alfaxaloneAvg = document.querySelector("#alfaxaloneAvg");
let alfaxaloneMax = document.querySelector("#alfaxaloneMax");

let atipamezoleAMin = document.querySelector("#atipamezoleAMin");
let atipamezoleAAvg = document.querySelector("#atipamezoleAAvg");
let atipamezoleAMax = document.querySelector("#atipamezoleAMax");

let atipamezoleFMin = document.querySelector("#atipamezoleFMin");
let atipamezoleFAvg = document.querySelector("#atipamezoleFAvg");
let atipamezoleFMax = document.querySelector("#atipamezoleFMax");

let bupivacaineCMin = document.querySelector("#bupivacaineCMin");
let bupivacaineCAvg = document.querySelector("#bupivacaineCAvg");
let bupivacaineCMax = document.querySelector("#bupivacaineCMax");

let bupivacaineFMin = document.querySelector("#bupivacaineFMin");
let bupivacaineFAvg = document.querySelector("#bupivacaineFAvg");
let bupivacaineFMax = document.querySelector("#bupivacaineFMax");

let buprenorphineCMin = document.querySelector("#buprenorphineCMin");
let buprenorphineCAvg = document.querySelector("#buprenorphineCAvg");
let buprenorphineCMax = document.querySelector("#buprenorphineCMax");

let buprenorphineFMin = document.querySelector("#buprenorphineFMin");
let buprenorphineFAvg = document.querySelector("#buprenorphineFAvg");
let buprenorphineFMax = document.querySelector("#buprenorphineFMax");

let buprenorphineLAMin = document.querySelector("#buprenorphineLAMin");
let buprenorphineLAAvg = document.querySelector("#buprenorphineLAAvg");
let buprenorphineLAMax = document.querySelector("#buprenorphineLAMax");

let butorphanolMin = document.querySelector("#butorphanolMin");
let butorphanolAvg = document.querySelector("#butorphanolAvg");
let butorphanolMax = document.querySelector("#butorphanolMax");

let carprofenMin = document.querySelector("#carprofenMin");
let carprofenAvg = document.querySelector("#carprofenAvg");
let carprofenMax = document.querySelector("#carprofenMax");

let dexmedetomidineCMin = document.querySelector("#dexmedetomidineCMin");
let dexmedetomidineCAvg = document.querySelector("#dexmedetomidineCAvg");
let dexmedetomidineCMax = document.querySelector("#dexmedetomidineCMax");

let dexmedetomidineFMin = document.querySelector("#dexmedetomidineFMin");
let dexmedetomidineFAvg = document.querySelector("#dexmedetomidineFAvg");
let dexmedetomidineFMax = document.querySelector("#dexmedetomidineFMax");

let dktMin = document.querySelector("#dktMin");
let dktAvg = document.querySelector("#dktAvg");
let dktMax = document.querySelector("#dktMax");

let fentanylMin = document.querySelector("#fentanylMin");
let fentanylAvg = document.querySelector("#fentanylAvg");
let fentanylMax = document.querySelector("#fentanylMax");

let hydromorphoneCMin = document.querySelector("#hydromorphoneCMin");
let hydromorphoneCAvg = document.querySelector("#hydromorphoneCAvg");
let hydromorphoneCMax = document.querySelector("#hydromorphoneCMax");

let hydromorphoneFMin = document.querySelector("#hydromorphoneFMin");
let hydromorphoneFAvg = document.querySelector("#hydromorphoneFAvg");
let hydromorphoneFMax = document.querySelector("#hydromorphoneFMax");

let ketamineMin = document.querySelector("#ketamineMin");
let ketamineAvg = document.querySelector("#ketamineAvg");
let ketamineMax = document.querySelector("#ketamineMax");

let lidocaineCMin = document.querySelector("#lidocaineCMin");
let lidocaineCAvg = document.querySelector("#lidocaineCAvg");
let lidocaineCMax = document.querySelector("#lidocaineCMax");

let lidocaineFMin = document.querySelector("#lidocaineFMin");
let lidocaineFAvg = document.querySelector("#lidocaineFAvg");
let lidocaineFMax = document.querySelector("#lidocaineFMax");

let maropitantCitrateMin = document.querySelector("#maropitantCitrateMin");
let maropitantCitrateAvg = document.querySelector("#maropitantCitrateAvg");
let maropitantCitrateMax = document.querySelector("#maropitantCitrateMax");

let meloxicamCMin = document.querySelector("#meloxicamCMin");
let meloxicamCAvg = document.querySelector("#meloxicamCAvg");
let meloxicamCMax = document.querySelector("#meloxicamCMax");

let meloxicamFMin = document.querySelector("#meloxicamFMin")
let meloxicamFAvg = document.querySelector("#meloxicamFAvg")
let meloxicamFMax = document.querySelector("#meloxicamFMax")

let midazolam1Min = document.querySelector("#midazolam1Min");
let midazolam1Avg = document.querySelector("#midazolam1Avg");
let midazolam1Max = document.querySelector("#midazolam1Max");

let midazolam5Min = document.querySelector("#midazolam5Min");
let midazolam5Avg = document.querySelector("#midazolam5Avg");
let midazolam5Max = document.querySelector("#midazolam5Max");

let propofolMin = document.querySelector("#propofolMin");
let propofolAvg = document.querySelector("#propofolAvg");
let propofolMax = document.querySelector("#propofolMax");

let robenacoxibMin = document.querySelector("#robenacoxibMin");
let robenacoxibAvg = document.querySelector("#robenacoxibAvg");
let robenacoxibMax = document.querySelector("#robenacoxibMax");

let tiletamineMin = document.querySelector("#tiletamineMin");
let tiletamineAvg = document.querySelector("#tiletamineAvg");
let tiletamineMax = document.querySelector("#tiletamineMax");

let anesTagsList = [acepromazineCMin, acepromazineCAvg, acepromazineCMax,
                    acepromazineFMin, acepromazineFAvg, acepromazineFMax,
                    alfaxaloneMin, alfaxaloneAvg, alfaxaloneMax,
                    atipamezoleAMin, atipamezoleAAvg, atipamezoleAMax,
                    atipamezoleFMin, atipamezoleFAvg, atipamezoleFMax,
                    bupivacaineCMin, bupivacaineCAvg, bupivacaineCMax,
                    bupivacaineFMin, bupivacaineFAvg, bupivacaineFMax,
                    buprenorphineCMin, buprenorphineCAvg, buprenorphineCMax,
                    buprenorphineFMin, buprenorphineFAvg, buprenorphineFMax,
                    buprenorphineLAMin,buprenorphineLAAvg, buprenorphineLAMax,
                    butorphanolMin, butorphanolAvg, butorphanolMax,
                    carprofenMin, carprofenAvg, carprofenMax,
                    dexmedetomidineCMin, dexmedetomidineCAvg, dexmedetomidineCMax,
                    dexmedetomidineFMin, dexmedetomidineFAvg, dexmedetomidineFMax,
                    dktMin, dktAvg, dktMax,
                    fentanylMin, fentanylAvg, fentanylMax,
                    hydromorphoneCMin, hydromorphoneCAvg, hydromorphoneCMax,
                    hydromorphoneFMin, hydromorphoneFAvg, hydromorphoneFMax,
                    ketamineMin, ketamineAvg, ketamineMax,
                    lidocaineCMin, lidocaineCAvg, lidocaineCMax,
                    lidocaineFMin, lidocaineFAvg, lidocaineFMax,
                    maropitantCitrateMin, maropitantCitrateAvg, maropitantCitrateMax,
                    meloxicamCMin, meloxicamCAvg, meloxicamCMax,
                    meloxicamFMin, meloxicamFAvg, meloxicamFMax,
                    midazolam1Min, midazolam1Avg, midazolam1Max,
                    midazolam5Min, midazolam5Avg, midazolam5Max,
                    propofolMin, propofolAvg, propofolMax,
                    robenacoxibMin, robenacoxibAvg, robenacoxibMax,
                    tiletamineMin, tiletamineAvg, tiletamineMax]


let anes = new anesthesiaAnalgesia(parseFloat(kgs), species);
let anesList = returnList(anes.anesthesiaList);


for (let i = 0; i < anesTagsList.length; i++){
    if (anesList[i] == 0){
        document.getElementById(anesTagsList[i].id).style.backgroundColor = "black";
    } else {
        anesTagsList[i].textContent = anesList[i];
    }
}
