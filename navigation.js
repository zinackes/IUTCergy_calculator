let boxs = document.querySelectorAll(".box");

NumberPreset = 0;
OngletIndex = 0;

// Sert a ajouter une case pour une differente page
function AddBox(){
    let Navigation = document.querySelector(".navigation");
    let Box = document.createElement("div");
    let P = document.createElement("p");
    let Dernier = document.querySelector(".navigation #AddBox");
    let AllOnglets = document.querySelector(".AllOnglets");
    let onglet = document.createElement("div");
    let input = document.createElement("input");
    let RenameButton = document.createElement("button");
    let RenameButtonIcon = document.createElement("i");

    Box.classList.add("box");
    P.textContent = "Preset " + NumberPreset

    Navigation.insertBefore(Box, Dernier);

    Box.appendChild(P);

    onglet.classList.add("onglet");
    AllOnglets.appendChild(onglet);

    Box.appendChild(input);
    input.type = "text";
    input.classList.add("invisible");

    Box.appendChild(RenameButton);
    RenameButton.setAttribute("onclick", `Renommer(${boxs.length})`);
    RenameButton.appendChild(RenameButtonIcon);
    RenameButtonIcon.classList.add("fa-solid");
    RenameButtonIcon.classList.add("fa-pen-to-square");

    NumberPreset++;
    boxs = document.querySelectorAll(".box");
    console.log(boxs.length);

    boxs.forEach(function (box) {
        box.addEventListener("click", function () {
            let index = Array.from(boxs).indexOf(this);
    
            for(let i = 0; i < boxs.length; i++){
                boxs[i].classList.remove("selected");
            }        
            box.classList.add("selected");
            document.querySelectorAll(".onglet").forEach(function (onglet){
                onglet.classList.remove("onglet_active");
            })
    
            let target = document.querySelectorAll(".onglet")[index];
            target.classList.add("onglet_active");
        })
    })
}


boxs.forEach(function (box) {
    box.addEventListener("click", function () {
        let index = Array.from(boxs).indexOf(this);

        for(let i = 0; i < boxs.length; i++){
            boxs[i].classList.remove("selected");
        }        
        box.classList.add("selected");
        document.querySelectorAll(".onglet").forEach(function (onglet){
            onglet.classList.remove("onglet_active");
        })

        let target = document.querySelectorAll(".onglet")[index];
        target.classList.add("onglet_active");
        OngletIndex = index;
        console.log(OngletIndex);
    })
})


function Renommer(index, TitleIndex){
    event.stopPropagation();
    let paragraph = document.querySelectorAll(".box p")[index];
    let input = document.querySelectorAll(".box input")[index];

    let TextActuel = paragraph.textContent;

    input.value = TextActuel;
    paragraph.classList.add("invisible");
    input.classList.remove("invisible");

    input.focus();

    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();

            // Copier le texte de l'input dans le paragraphe
            paragraph.textContent = input.value;

            // Afficher le paragraphe et masquer l'input
            paragraph.classList.remove("invisible");
            input.classList.add("invisible");
        }
    });
}

function RenommerTitre(TitleIndex){

    let Title = document.querySelectorAll(".title h1")[TitleIndex];
    let TitleInput = document.querySelectorAll(".title input")[TitleIndex];
    
    let TitleText = Title.textContent;
    
    TitleInput.value = TitleText;

    Title.classList.add("invisible");
    TitleInput.classList.remove("invisible");

    TitleInput.focus();

    TitleInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();

            // Copier le texte de l'input dans le paragraphe
            Title.textContent = TitleInput.value;

            // Afficher le paragraphe et masquer l'input
            Title.classList.remove("invisible");
            TitleInput.classList.add("invisible");
        }
    });
}

//Index = Numero (en partant de 0) de la matiere
//content Index = Numero du rectangle
function AddNote(contentIndex, index){
    let div = document.createElement("div");
    let Name = document.createElement("input");
    let InputNotes = document.createElement("input");
    let InputCoef = document.createElement("input");

    let BeforeButton = document.querySelectorAll(".content .BeforeButton")[contentIndex];

    let onglet = document.querySelectorAll(".onglet")[OngletIndex];
    let content = document.querySelectorAll(".content")[contentIndex];
    let FlexNumber = content.querySelectorAll(".flex").length;
    console.log(FlexNumber);
    
    content.insertBefore(div, BeforeButton);
    div.classList.add("flex");
    div.appendChild(Name);
    Name.classList.add("text");
    Name.value = "Note";
    div.appendChild(InputNotes);
    div.appendChild(InputCoef);

    InputCoef.type = "number";
    InputNotes.type = "number";

    InputCoef.setAttribute("id", `Coef${OngletIndex}_${contentIndex}_${FlexNumber}`);
    InputNotes.setAttribute("id", `Note${OngletIndex}_${contentIndex}_${FlexNumber}`);
}


function AddMatiere(SAE){
    let ContentDiv = document.createElement("div");
    let TitleDiv = document.createElement("div");
    let RowDiv = document.createElement("div");
    let FlexDiv = document.createElement("div");

    let Title = document.createElement("h1");
    let TitleInput = document.createElement("input");
    let TitleButton = document.createElement("button");
    let TitleButtonIcon = document.createElement("i");

    let RowNote = document.createElement("p");
    let RowCoef = document.createElement("p");

    let ButtonAddNote = document.createElement("button");

    let Moyenne = document.createElement("h2");
    let MoyenneSpan = document.createElement("span");

    let Onglet = document.querySelectorAll(".onglet")[OngletIndex];
    let SAEOnglet = document.querySelectorAll(".onglet .sae")[OngletIndex];

    let AddMatiereButton = document.querySelectorAll(".onglet .matiere")[OngletIndex];

    if(SAE){
        AddMatiereButton = document.querySelectorAll(".sae .matiere")[OngletIndex];
        SAEOnglet.insertBefore(ContentDiv, AddMatiereButton);
    }
    else{
        Onglet.insertBefore(ContentDiv, AddMatiereButton);
    }

    ContentDiv.classList.add("content");

    ContentDiv.appendChild(TitleDiv);

    TitleDiv.classList.add("title");
    TitleDiv.appendChild(Title);
    Title.textContent = "Matiere"

    TitleDiv.appendChild(TitleInput);
    TitleInput.classList.add("invisible");

    TitleDiv.appendChild(TitleButton);
    TitleButton.appendChild(TitleButtonIcon);
    TitleButtonIcon.classList.add("fa-solid");
    TitleButtonIcon.classList.add("fa-pen-to-square");

    TitleButton.setAttribute("onclick",
     `RenommerTitre(${document.querySelectorAll(".content").length-1})`);

     ContentDiv.appendChild(RowDiv);
     RowDiv.classList.add("row");
     RowDiv.appendChild(RowNote);
     RowNote.textContent = "Notes";
     RowDiv.appendChild(RowCoef);
     RowCoef.textContent = "Coef";

     ContentDiv.appendChild(ButtonAddNote);
     ButtonAddNote.classList.add("BeforeButton");
     ButtonAddNote.setAttribute("onclick",
     `AddNote(${document.querySelectorAll(".content").length-1})`);
     ButtonAddNote.textContent = "Ajouter une note"

     ContentDiv.appendChild(Moyenne);
     Moyenne.textContent = "Moyenne : ";
     Moyenne.appendChild(MoyenneSpan);
     MoyenneSpan.setAttribute("id", `M_${OngletIndex}_${document.querySelectorAll(".content").length-1}`)
}
