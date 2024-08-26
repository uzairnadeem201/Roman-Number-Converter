function onclickbtn() {
    let checkbtn = document.querySelector("#convert-btn");

    // Add an event listener to the button
    checkbtn.addEventListener("click", function() {   
        let inputText = document.querySelector('#number');
        romanNumber(inputText.value);
    });
}

function romanNumber(str) {
    let finalArray = '';
    let num = Number(str);
    
    // Validate the input number
    if(str == '')
    {
            let outbtn = document.querySelector("#output");
            outbtn.innerText = `Please enter a valid number`;
            return;
    }
    if (num > 3999) {
        let outbtn = document.querySelector("#output");
        outbtn.innerText = `Please enter a number less than or equal to 3999`;
        return;
    }
    if (num < 0)
    {
      let outbtn = document.querySelector("#output");
        outbtn.innerText = `Please enter a number greater than or equal to 1`;
        return;
    }

    let arr = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };
    
    let outbtn = document.querySelector("#output");
    
    for (const key in arr) {
        while (num >= arr[key]) {
            finalArray += key;
            num -= arr[key];
        }
    }
    
    outbtn.innerText = finalArray;
}

onclickbtn();
