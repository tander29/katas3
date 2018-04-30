let array = [
    function(){
        let answer = 0;
        for (let i = 1; i <=20; i++){
            answer += i + " ";
        }
    return answer
    },
    function(){
        let answer = 0;
        for(let i = 0; i<=20; i+=2){
            answer += i + " ";
        }
    return answer;
    }
];

boss()
function boss(){
    
    for(let i = 0; i < array.length; i ++){
        const thehead = document.createElement("h1");
        document.body.appendChild(thehead);
        let usual = "This is Kata" + (i+1);
        const headtext = document.createTextNode(usual);
        thehead.appendChild(headtext);
        const p = document.createElement("p");
        document.body.appendChild(p);
        let output = document.createTextNode(array[i]());
        p.appendChild(output);
    }
}



// use arrays define array, push each function into array,
