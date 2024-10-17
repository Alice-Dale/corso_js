let btnSomma = document.getElementById("btnSomma");
let btnMolt = document.getElementById("btnMolt");
let btnSott = document.getElementById("btnSott");
let btnDiv = document.getElementById("btnDiv");
let btnRisultato = document.getElementById("btnRisultato");
let demo = document.getElementById("demo");
let pDemo = document.getElementById("pDemo");
let risultatoDemo = document.getElementById("risultatoDemo");
let temp = 0;

function somma(){
        
    let num1 = document.getElementById("num1").value;

    if(num1 == ""){
        pDemo.innerHTML += "Inserisci un numero ";
    }else{
        temp = Number(temp) + Number(num1);
        pDemo.innerHTML += "+" + num1 + " ";
        // risultatoDemo.innerHTML = "<p>" + temp + "</p>";
        return temp;
    }

}

function molt(){
    
    let num1 = document.getElementById("num1").value;
    
    if(num1 == ""){
        pDemo.innerHTML += "Inserisci un numero ";
    }else{
        temp = Number(temp) * Number(num1);
        pDemo.innerHTML += "*" + num1 + " ";
        return temp;
    }
        
}

function sott(){
    
    let num1 = document.getElementById("num1").value;
    if(num1 == ""){
        pDemo.innerHTML += "Inserisci un numero ";
    }else{    
        temp = Number(temp) - Number(num1);
        pDemo.innerHTML += "-" + num1 + " ";
        return temp;
    }
    
}

function div(){
    
    let num1 = document.getElementById("num1").value;
    if(num1 == ""){
        pDemo.innerHTML += "Inserisci un numero ";
    }else{    
        temp = Number(temp) / Number(num1);
        pDemo.innerHTML += "/" + num1 + " ";
        return temp;
    }
    
}

function reset(){

    document.getElementById("num1").value = "";
    
    pDemo.innerHTML = "";
    risultatoDemo.innerHTML = "";
    temp = "";
}

function risultato(){
    risultatoDemo.innerHTML = "<p>" + temp + "</p>";

}


btnSomma.addEventListener("click", somma);
btnMolt.addEventListener("click",molt);
btnSott.addEventListener("click",sott);
btnDiv.addEventListener("click",div);
btnRisultato.addEventListener("click",risultato);

btnReset.addEventListener("click", reset);

