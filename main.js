
const resultSection = document.getElementsByClassName("result")[0];
resultSection.style.display = "none"; 

const calculate = document.getElementsByClassName("btn")[0];
const clear = document.getElementsByClassName("btn-clear")[0];


const reset = () => {
    const P = document.getElementById("p").value = '';
    const R = document.getElementById("r").value = '';
    const T = document.getElementById("t").value = '';
    resultSection.style.display = "none";
}


const calculateAmount = () => {
    const P = document.getElementById("p").value;
    const R = document.getElementById("r").value;
    const T = document.getElementById("t").value;

    //Check if any fields are empty
    if(!P || !R || !T){
        alert("All fields are required.");
        reset();
        return;
    }

    if(P<= 0 || R<= 0 || T<= 0){
        alert("Only positive numbers are allowed.");
        reset();
        return;
    }

    if(isNaN(P) || isNaN(R) || isNaN(T)){
        alert("All values must be numeric only.");
        reset();
        return;
    }

    const finalAmount = document.getElementsByClassName("total-amount")[0];
    const InterestAmount = document.getElementsByClassName("Interest-earned")[0];

    const P2 = parseFloat(P);
    const R2 = parseFloat(R);
    const T2 = parseFloat(T);

    let interestEarn = 0;
    let result2 = 0;

    interestEarn = ((P2 * R2 * (T2/12)) / 100);
    result2 =  P2 + interestEarn;

    resultSection.style.display = "block";
    InterestAmount.innerHTML = "$" + interestEarn.toFixed(2);
    finalAmount.innerHTML = "$" + result2.toFixed(2);
    
}

calculate.addEventListener('click', calculateAmount);
clear.addEventListener('click', reset);