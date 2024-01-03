function returnList(lst){
    for (let i = 0; i < lst.length; i++){
        lst[i] = parseFloat(lst[i]).toFixed(2);
    }
    return lst;
}


class Pet {
    
    constructor(petName, ownerName, species, weightType, weightInput){
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        
        if (weightType == "Pounds"){
            this.lbs =  parseFloat(Number(weightInput).toFixed(2));
            this.kgs = this.lbs / 2.205;
            this.kgs = parseFloat(this.kgs.toFixed(2));
        } else {
            this.kgs = parseFloat(Number(weightInput).toFixed(2));
            this.lbs = this.kgs * 2.205;
            this.lbs = parseFloat(this.lbs.toFixed(2));
        }
    }
}
    
// formula: kgs * rangeNum / conc

class Emergency {

    constructor(kgs){

        this.kgs = kgs;

        this.atropine4Min = this.kgs * 0.02 / 0.4;
        this.atropine4Avg = this.kgs * 0.03 / 0.4;
        this.atropine4Max = this.kgs * 0.04 / 0.4;

        this.atropine5Min = this.kgs * 0.02 / 0.54;
        this.atropine5Avg = this.kgs * 0.03 / 0.54
        this.atropine5Max = this.kgs * 0.04 / 0.54;

        this.dexamenthasoneSPMin = this.kgs / 4;
        this.dexamenthasoneSPAvg = this.kgs * 2.5 / 4;
        this.dexamenthasoneSPMax = this.kgs;

        this.diphenhydramineMin = this.kgs / 50;
        this.diphenhydramineAvg = this.kgs * 1.6 / 50;
        this.diphenhydramineMax = this.kgs * 2.2 / 50;

        this.ephedrineMin = this.kgs * 0.05 / 50;
        this.ephedrineAvg = this.kgs * 0.075 / 50;
        this.ephedrineMax = this.kgs * 0.1 / 50;

        this.glycopyrrolateMin = this.kgs * 0.005 / 0.2;
        this.glycopyrrolateAvg = this.kgs * 0.0075 / 0.2;
        this.glycopyrrolateMax = this.kgs * 0.01 / 0.2;

        this.emergencyList = [this.atropine4Min, this.atropine4Avg, this.atropine4Max, this.atropine5Min, this.atropine5Avg,
                            this.atropine5Max, this.dexamenthasoneSPMin, this.dexamenthasoneSPAvg, this.dexamenthasoneSPMax, 
                            this.diphenhydramineMin, this.diphenhydramineAvg, this.diphenhydramineMax, this.ephedrineMin, 
                            this.ephedrineAvg, this.ephedrineMax, this.glycopyrrolateMin, this.glycopyrrolateAvg, this.glycopyrrolateMax];
        
    }

    returnEmergencyList(){
        for (let i = 0; i < this.emergencyList.length; i++){
            this.emergencyList[i] = parseFloat(this.emergencyList[i]).toFixed(2);
        }
        return this.emergencyList
    }
}


class AdvancedLifeSupport{

    constructor(kgs, species){

        this.kgs = kgs

        this.atipamezoleMin = this.kgs * 0.05 / 5
        this.atipamezoleAvg = this.kgs * 0.075 / 5
        this.atipamezoleMax = this.kgs * 0.1 / 5

        this.flumazenilMin = this.kgs * 0.01 / 0.1
        this.flumazenilAvg = 0
        this.flumazenilMax = 0

        this.naxoloneMin = this.kgs * 0.04 / 0.4
        this.naxoloneAvg = 0
        this.naxoloneMax = 0

        this.atropine4Min = this.kgs * 0.05 / 0.4
        this.atropine4Avg = 0
        this.atropine4Max = 0

        this.atropine5Min = this.kgs * 0.05 / 0.54
        this.atropine5Avg = 0
        this.atropine5Max = 0

        this.epinephrineMin = this.kgs * 0.01
        this.epinephrineAvg = this.kgs * 0.055
        this.epinephrineMax = this.kgs * 0.1

        this.amiodaroneMin = this.kgs * 5 / 50
        this.amiodaroneAvg = 0
        this.amiodaroneMax = 0
        
        if (species == "Canine"){
            this.lidocaineCMin = this.kgs * 2 / 20
            this.lidocaineCAvg = this.kgs * 3 / 20
            this.lidocaineCMax = this.kgs * 4 / 20
        } else {
            this.lidocaineCMin = 0
            this.lidocaineCAvg = 0
            this.lidocaineCMax = 0
        } 
        
        if (species == "Feline"){
            this.lidocaineFMin = this.kgs * 0.2 / 20
            this.lidocaineFAvg = 0
            this.lidocaineFMax = 0
        } else { 
            this.lidocaineFMin = 0
            this.lidocaineFAvg = 0
            this.lidocaineFMax = 0
        }

        this.ALSList = [this.atipamezoleMin, this.atipamezoleAvg, this.atipamezoleMax, this.flumazenilMin, 
                        this.flumazenilAvg, this.flumazenilMax, this.naxoloneMin, this.naxoloneAvg, this.naxoloneMax, this.atropine4Min, 
                        this.atropine4Avg, this.atropine4Max, this.atropine5Min, this.atropine5Avg,
                        this.atropine5Max, this.epinephrineMin, this.epinephrineAvg,
                        this.epinephrineMax, this.amiodaroneMin, this.amiodaroneAvg, this.amiodaroneMax, this.lidocaineCMin, this.lidocaineCAvg,
                        this.lidocaineCMax, this.lidocaineFMin, this.lidocaineFAvg, this.lidocaineFMax];
    }
}  


    
class anesthesiaAnalgesia {

    constructor(kgs, species){

        this.kgs = kgs

        if (species == "Canine"){
            this.acepromazineCMin = this.kgs * 0.005
            this.acepromazineCAvg = this.kgs * 0.0275;
            this.acepromazineCMax = this.kgs * 0.05
        } else {
            this.acepromazineCMin = 0
            this.acepromazineCAvg = 0
            this.acepromazineCMax = 0
        }

        if (species == "Feline"){
            this.acepromazineFMin = this.kgs * 0.01
            this.acepromazineFAvg = this.kgs * 0.055;
            this.acepromazineFMax = this.kgs * 0.1
        } else {
            this.acepromazineFMin = 0;
            this.acepromazineFAvg = 0;
            this.acepromazineFMax = 0;
        } 

        this.alfaxaloneMin = this.kgs / 10
        this.alfaxaloneAvg = this.kgs * 2.5 / 10
        this.alfaxaloneMax = this.kgs * 4 / 10

        this.atipamezoleMin = this.kgs * 0.05 / 5
        this.atipamezoleAvg = 0
        this.atipamezoleMax = 0

        if (species == "Feline") {
            this.atipamezoleFMin = this.kgs * 0.012 / 5
            this.atipamezoleFMin = this.kgs * 0.0165 / 5
            this.atipamezoleFMax = this.kgs * 0.021 / 5
        } else {
            this.atipamezoleFMin = 0
            this.atipamezoleFAvg = 0
            this.atipamezoleFMax = 0
        }

        if (species == "Canine"){
            this.bupivacaineCMin = this.kgs / 5
            this.bupivacaineCMax = this.kgs * 1.5 / 5
            this.bupivacaineCMax = this.kgs * 2 / 5
        } else {
            this.bupivacaineCMin = 0
            this.bupivacaineCAvg = 0
            this.bupivacaineCMax = 0
        }

        if (species == "Feline"){
            this.bupivacaineFMin = this.kgs / 5
            this.bupivacaineFMin = this.kgs * 1.25 / 5
            this.bupivacaineFMax = this.kgs * 1.5 / 5
        } else {
            this.bupivacaineFMin = 0
            this.bupivacaineFAvg = 0
            this.bupivacaineFMax = 0
        }

        if (species == "Canine"){
            this.buprenorophineCMin = this.kgs * 0.005 / 0.3
            this.buprenorophineCMax = this.kgs * 0.0125 / 0.3
            this.buprenorophineCMax = this.kgs * 0.02 / 0.3
        } else {
            this.buprenorophineCMin = 0
            this.buprenorophineCAvg = 0
            this.buprenorophineCMax = 0
        }

        if (species == "Feline"){
            this.buprenorophineFMin = this.kgs * 0.01 / 0.3
            this.buprenorophineFMax = this.kgs * 0.02 / 0.3
        } else { 
            this.buprenorophineFMin = 0 
            this.buprenorophineFMax = 0
        }

        if (species == "Feline"){
            this.buprenorphineLAMin = this.kgs * 0.24 / 1.8
        } else {
            this.buprenorphineLAMin = 0
        }

        this.buprenorphineLAMax = 0

        this.butorphanelMin = this.kgs * 0.2 / 10
        this.butorphanelMax = this.kgs * 0.4 / 10

        if (species == "Canine"){
            this.carprofenMin = this.kgs * 4 / 50
            this.carprofenMax = this.kgs * 4.4 / 50
        } else {
            this.carprofenMin = 0
            this.carprofenMax = 0
        }

        if (species == "Canine"){
            this.dexmedetomidineCMin = this.kgs * 0.005 / 0.5
            this.dexmedetomidineCMax = this.kgs * 0.02 / 0.5
        } else {
            this.dexmedetomidineCMin = 0
            this.dexmedetomidineCMax = 0
        }

        if (species == "Feline"){
            this.dexmedetomidineFMin = this.kgs * 0.005 / 0.5
            this.dexmedetomidineFMax = this.kgs * 0.01 / 0.5
        } else {
            this.dexmedetomidineFMin = 0
            this.dexmedetomidineFMax = 0
        }

        if (species == "Feline"){
            this.DKTmixtureMin = this.kgs * 0.035
            this.DKTmixtureMax = this.kgs * 0.065 
        } else {
            this.DKTmixtureMin = 0
            this.DKTmixtureMax = 0 
        }

        this.fentanylMin = this.kgs * 0.003 / 0.05
        this.fentanylMax = this.kgs * 0.005 / 0.05

        if (species == "Canine"){
            this.hydromorphoneCMin = this.kgs * 0.05 / 2
            this.hydromorphoneCMax = this.kgs * 0.2 / 2
        } else {
            this.hydromorphoneCMin = 0
            this.hydromorphoneCMax = 0
        }

        if (species == "Feline"){
            this.hydromorphoneFMin = this.kgs * 0.05 / 2 
            this.hydromorphoneFMax = this.kgs * 0.1 / 2
        } else {
            this.hydromorphoneFMin = 0 
            this.hydromorphoneFMax = 0
        }

        if (species == "Canine"){
            this.ketamineMin = this.kgs / 100
            this.ketamineMax = this.kgs * 2 / 100
        } else {
            this.ketamineMin = 0
            this.ketamineMax = 0
        }

        if (species == "Canine") {
            this.lidocaineMinCA = this.kgs / 20
            this.lidocaineMaxCA = this.kgs * 4 / 20
            this.lidocaineMinFA = 0
            this.lidocaineMaxFA = 0
        }

        if (species == "Feline"){
            this.lidocaineMinFA = this.kgs / 20
            this.lidocaineMaxFA = this.kgs * 2 / 20
            this.lidocaineMinCA = 0
            this.lidocaineMaxCA = 0
        }

        this.maropitantCitrateMin = this.kgs / 10
        this.maropitantCitrateMax = 0

        if (species == "Canine"){
            this.meloxicamCMin = this.kgs * 0.2 / 5
            this.meloxicamCMax = 0
        } else {
            this.meloxicamCMin = 0
            this.meloxicamCMax = 0
        }

        if (species == "Feline"){
            this.meloxicamFMin = this.kgs * 0.3 / 5
            this.meloxicamFMax = 0
        } else {
            this.meloxicamFMin = 0
            this.meloxicamFMax = 0
        }

        this.midazolam1Min = this.kgs * 0.1
        this.midazolam1Max = this.kgs * 0.3

        this.midazolam5Min = this.kgs * 0.1 / 5
        this.midazolam5Avg = this.kgs * 0.2 / 5
        this.midazolam5Max = this.kgs * 0.3 / 5
        
        this.propofolMin = this.kgs / 10
        this.propofolAvg = this.kgs * 4.5 / 10
        this.propofolMax = this.kgs * 8 / 10

        this.robenacoxibMin = this.kgs * 2 / 20
        this.robenacoxibAvg = 0
        this.robenacoxibMax = 0

        this.tiletaminZolazepamMin = this.kgs / 100
        this.tiletaminZolazepamMin = this.kgs * 2.5 / 100
        this.tiletaminZolazepamMax = this.kgs * 4 / 100
        

        this.anesthesiaList = [this.acepromazineCMin, this.acepromazineCAvg, this.acepromazineCMax,
                            this.acepromazineFMin, this.acepromazineFAvg, this.acepromazineFMax, 
                            this.alfaxaloneMin, this.alfaxaloneAvg, this.alfaxaloneMax, 
                            this.atipamezoleMin, this.atipamezoleAvg, this.atipamezoleMax, 
                            this.atipamezoleFMin, this.atipamezoleFAvg, this.atipamezoleFMax, 
                            this.bupivacaineCMin, this.bupivacaineCAvg, this.bupivacaineCMax, 
                            this.bupivacaineFMin, this.bupivacaineFAvg, this.bupivacaineFMax, 
                            this.buprenorophineCMin, this.buprenorophineCAvg, this.buprenorophineCMax, 
                            this.buprenorophineFMin, this.buprenorophineFAvg, this.buprenorophineFMax, 
                            this.buprenorphineLAMin, this.buprenorphineLAAvg,this.buprenorphineLAMax, 
                            this.butorphanelMin, this.butorphanelAvg, this.butorphanelMax, 
                            this.carprofenMin, this.carprofenAvg, this.carprofenMax, 
                            this.dexmedetomidineCMin, this.dexmedetomidineCAvg, this.dexmedetomidineCMax, 
                            this.dexmedetomidineFMin, this.dexmedetomidineFAvg, this.dexmedetomidineFMax, 
                            this.DKTmixtureMin, this.DKTmixtureAvg, this.DKTmixtureMax, 
                            this.fentanylMin, this.fentanylAvg, this.fentanylMax, 
                            this.hydromorphoneCMin, this.hydromorphoneCAvg, this.hydromorphoneCMax, 
                            this.hydromorphoneFMin, this.hydromorphoneFAvg, this.hydromorphoneFMax, 
                            this.ketamineMin, this.ketamineAvg, this.ketamineMax,
                            this.lidocaineMinCA, this.lidocaineAvgCA, this.lidocaineMaxCA, 
                            this.lidocaineMinFA, this.lidocaineAvgFA, this.lidocaineMaxFA,
                            this.maropitantCitrateMin, this.maropitantCitrateAvg, this.maropitantCitrateMax, 
                            this.meloxicamCMin, this.meloxicamCAvg, this.meloxicamCMax, 
                            this.meloxicamFMin, this.meloxicamFAvg, this.meloxicamFMax, 
                            this.midazolam1Min, this.midazolam1Avg, this.midazolam1Max, 
                            this.midazolam5Min, this.midazolam5Avg, this.midazolam5Max, 
                            this.propofolMin, this.propofolAvg, this.propofolMax, 
                            this.robenacoxibMin, this.robenacoxibAvg, this.robenacoxibMax, 
                            this.tiletaminZolazepamMin, this.tiletaminZolazepamAvg, this.tiletaminZolazepamMax]

    }
}
    // def returnMedicine(this):
    //     for num in this.anesthesiaList:
    //         num = float(num)
    //         num = f"{num:.2f}"
    //     return this.anesthesiaList

        
