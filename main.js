function sommeListe(liste) {
    let somme = 0;
    
    for (let i = 0; i < liste.length; i++) {
      somme += liste[i];
    }
    
    return somme;
  }

function Moyenne() {
    const R = [
        {notes: "R201N", coef: "R201C", moyenne: "R201"}, //0
        {notes: "R202N", coef: "R202C", moyenne: "R202"}, //1
        {notes: "R203N", coef: "R203C", moyenne: "R203"}, //2
        {notes: "R204N", coef: "R204C", moyenne: "R204"}, //3
        {notes: "R205N", coef: "R205C", moyenne: "R205"}, //4
        {notes: "R207N", coef: "R207C", moyenne: "R207"}, //5
        {notes: "R209N", coef: "R209C", moyenne: "R209"}, //6
        {notes: "R210N", coef: "R210C", moyenne: "R210"}, //7
        {notes: "R211N", coef: "R211C", moyenne: "R211"}, //8
        {notes: "R212N", coef: "R212C", moyenne: "R212"}, //9
        {notes: "R213N", coef: "R213C", moyenne: "R213"}, //10
        {notes: "R214N", coef: "R214C", moyenne: "R214"}, //11
        {notes: "R215N", coef: "R215C", moyenne: "R215"}, //12 
        {notes: "R216N", coef: "R216C", moyenne: "R216"}, //13
        {notes: "SAE2_2N", coef: "SAE2_2C", moyenne: "SAE2_2"}, //14
        {notes: "SAE2_2PortfolioN", coef: "SAE2_2PortfolioC", moyenne: "SAE2_2Portfolio"}, //15
        {notes: "SAE2_3N", coef: "SAE2_3C", moyenne: "SAE2_3"}, //16
        {notes: "SAE2_4N", coef: "SAE2_4C", moyenne: "SAE2_4"}, //17
        {notes: "SAE2_5N", coef: "SAE2_5C", moyenne: "SAE2_5"}, //18
        {notes: "SAE2_5PortfolioN", coef: "SAE2_5PortfolioC", moyenne: "SAE2_5Portfolio"} //19
    ];

    const moyennes = [];
    // Dans l'ordre donc [0]  = 2.1
    const coef = [17,13,15,10,16,8,5,5,2,10,5,10,11,11,36,4,18,9,9,1];

    R.forEach((Ressources) => {
        const NotesInput = document.querySelectorAll(`#${Ressources.notes}`);
        const CoefInput = document.querySelectorAll(`#${Ressources.coef}`);

        let sommeMoyennes = 0;
        let sommeCoefficients = 0;

        for (let i = 0; i < NotesInput.length; i++) {
            const note = parseFloat(NotesInput[i].value);
            const coefficient = parseFloat(CoefInput[i].value);

            if (!isNaN(note) && !isNaN(coefficient)) {
                sommeMoyennes += note * coefficient;
                sommeCoefficients += coefficient;
            }
        }

        const moyenneMatiere = sommeMoyennes / sommeCoefficients;
        moyennes.push({ Ressources: Ressources.moyenne, moyenne: moyenneMatiere });
    });

    moyennes.forEach((moyenne) => {
        const moyenneText = document.getElementById(`${moyenne.Ressources}`);
        moyenneText.textContent = isNaN(moyenne.moyenne) ? "NaN" : moyenne.moyenne.toFixed(2);
    });
    console.log(moyennes);
    const MoyenneGlobalText = document.getElementById("MoyenneGlobal");
    let moyenneGlobal = 0;
    for(let i = 0; i < moyennes.length; i++){
        moyenneGlobal += moyennes[i].moyenne * coef[i];
    }
    let moyenneGlobalCoef = moyenneGlobal / sommeListe(coef);
    const MoyenneGlobal2_1Text = document.getElementById("MoyenneGlobal2_1");
    const MoyenneGlobal2_2Text = document.getElementById("MoyenneGlobal2_2");
    const MoyenneGlobal2_3Text = document.getElementById("MoyenneGlobal2_3");
    const MoyenneGlobal2_4Text = document.getElementById("MoyenneGlobal2_4");
    let MoyenneGlobal2_1 = ((moyennes[0].moyenne*coef[0])+(moyennes[1].moyenne*coef[1])+(moyennes[2].moyenne*coef[2])
    +(moyennes[6].moyenne*coef[6])+(moyennes[7].moyenne*coef[7])+(moyennes[8].moyenne*coef[8])) / (17+13+15+12);
    MoyenneGlobal2_1Text.textContent = MoyenneGlobal2_1;
    let MoyenneGlobal2_2 = ((moyennes[3].moyenne*coef[3])+(moyennes[4].moyenne*coef[4])+(moyennes[5].moyenne*coef[5])
    +(moyennes[6].moyenne*coef[6])+(moyennes[7].moyenne*coef[7])+(moyennes[8].moyenne*coef[8])+(moyennes[14].moyenne*coef[14])+(moyennes[15].moyenne*coef[15])) / (26+8+12+40);
    MoyenneGlobal2_2Text.textContent = MoyenneGlobal2_2;
    let MoyenneGlobal2_3 = ((moyennes[9].moyenne*coef[9])+(moyennes[6].moyenne*2)+(moyennes[7].moyenne*2)
    +(moyennes[8].moyenne*1)+(moyennes[10].moyenne*coef[10])+(moyennes[11].moyenne*coef[11])+
    (moyennes[16].moyenne*coef[16])) / (25+12+18);
    MoyenneGlobal2_3Text.textContent = MoyenneGlobal2_3;
    let MoyenneGlobal2_4 = ((moyennes[6].moyenne*2)+(moyennes[7].moyenne*2)+(moyennes[8].moyenne*1)
    +(moyennes[12].moyenne*coef[12])+(moyennes[13].moyenne*coef[13])+(moyennes[17].moyenne*coef[17])
    +(moyennes[18].moyenne*coef[18])+(moyennes[19].moyenne*coef[19])) / (5+11+11+19);
    MoyenneGlobal2_4Text.textContent = MoyenneGlobal2_4;
    MoyenneGlobalText.textContent = moyenneGlobalCoef;

    const UE1text = document.getElementById("UE1");
    const UE1Value = document.getElementById("SAE1_1").value;
    UE1text.textContent = (MoyenneGlobal2_1+parseFloat(UE1Value))/2;
    
    const UE2text = document.getElementById("UE2");
    const UE2Value = document.getElementById("SAE1_2").value;
    UE2text.textContent = (MoyenneGlobal2_1+parseFloat(UE2Value))/2;
    
    const UE3text = document.getElementById("UE3");
    const UE3Value = document.getElementById("SAE1_3").value;
    UE3text.textContent = (MoyenneGlobal2_1+parseFloat(UE3Value))/2;
    
    const UE4text = document.getElementById("UE4");
    const UE4Value = document.getElementById("SAE1_4").value;
    UE4text.textContent = (MoyenneGlobal2_1+parseFloat(UE4Value))/2;


    const Passage = document.getElementById("Passage");
    if(UE1Value>=10 && UE2Value>=10 && UE3Value>=10 && UE4Value >= 10){
        Passage.textContent = "Oui";
    }
    else if(UE1Value <10 && UE1Value >= 8 && UE2Value>=10 && UE3Value>=10 && UE4Value >= 10){
        Passage.textContent = "Oui";
    }
    else if(UE1Value>=10 && UE2Value <10 && UE2Value >=8 && UE3Value>=10 && UE4Value>=10){
        Passage.textContent = "Oui";
    }
    else if(UE1Value>=10 && UE2Value>=10 && UE3Value<10 && UE3Value>=8 && UE4Value>=10){
        Passage.textContent = "Oui";
    }
    else if(UE1Value>=10 && UE2Value>=10 && UE3Value>=10 && UE4Value< 10 && UE4Value>=8){
        Passage.textContent = "Oui";
    }
    else{
        Passage.textContent = "Non";
    }

}
