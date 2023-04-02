function converternota() {
       
    let notainserida = document.getElementById("nota-inserida").value;
    let notaconvertida;   

    if(notainserida < 60 && notainserida >= 0){
        notaconvertida = 'F';  
        document.getElementById("valorntconvertida").innerHTML = notaconvertida;              
    }
    
    else if (notainserida > 60 && notainserida <= 70){
        notaconvertida = 'D';
        document.getElementById("valorntconvertida").innerHTML = notaconvertida;
    }
    else if (notainserida > 70 && notainserida <= 80){
        notaconvertida = 'C';
        document.getElementById("valorntconvertida").innerHTML = notaconvertida;
    }
    else if (notainserida > 80 && notainserida <= 90){
        notaconvertida = 'B';
        document.getElementById("valorntconvertida").innerHTML = notaconvertida;
    }
    else if (notainserida > 90 && notainserida <= 100){
        notaconvertida = 'A';
        document.getElementById("valorntconvertida").innerHTML = notaconvertida;
    }
    else if (notainserida > 100){
        alert("O valor não pode ser maior que 100!");
    }
    else if (notainserida < 0){
        alert("O valor não pode ser menor que 0!");
    }
}
