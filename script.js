function passCheck(data){
    let passClass = document.getElementsByClassName("password-check");

    const lowerCase = new RegExp('(?=.*[a-z])');
    const upperCase = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const speChar = new RegExp('(?=.*[!@#\$%\^&\*])');
    const eightChar = new RegExp('(?=.{8,})');

    if(eightChar.test(data)){
        passClass[0].style.color = "green";

    }else{
        passClass[0].style.color = "gray";

    }

    if(lowerCase.test(data)){
        passClass[1].style.color = "green";

    }else{
        passClass[1].style.color = "gray";

    }
    if(upperCase.test(data)){
        passClass[2].style.color = "green";

    }else{
        passClass[2].style.color = "gray";

    }
    if(number.test(data)){
        passClass[3].style.color = "green";

    }else{
        passClass[3].style.color = "gray";

    }
    if(speChar.test(data)){
        passClass[4].style.color = "green";

    }else{
        passClass[4].style.color = "gray";

    }

}


// check conform password
function conform(){
    let pass1 = document.getElementById('password');
    let pass2 = document.getElementById('conform_password');


    if(pass1.value === pass2.value){
       
        
    }else{
        alert('password not match')
       
    }

}
