let body = document.querySelector("body");
let mainDiv = document.querySelector(".wrapper");
let linearBackground = document.querySelector(".wrapper");

mainDiv.style.color = "white"

// background Image
mainDiv.style.backgroundImage = "url(./images/globe-2.jpg)";

mainDiv.style.backgroundSize = "cover";
linearBackground.style.backgroundPositionY = "-250px";
mainDiv.style.backgroundRepeat = "no-repeat";




// //heading One
let headingOne = document.querySelector("h1");

headingOne.textContent = "World Countries List";
headingOne.style.fontSize = "60px"
headingOne.style.paddingTop = "120px";
headingOne.style.textTransform = "uppercase";
headingOne.style.letterSpacing = "10px";

//heading Two
let headingTwo = document.querySelector("h2");



headingTwo.textContent = `Total Numbers of countries: ${countries.length}`;



//Create Input field

let inputDiv = document.createElement("div");

let input = document.createElement("input");

input.style.border = "none"
input.style.borderRadius = "20px";  
input.placeholder = "Search country...";
input.style.width = "500px"
input.style.padding = "10px 10px";
input.style.margin = "40px 0px 180px 0px";

inputDiv.appendChild(input)
mainDiv.appendChild(inputDiv);






//Answer Section 
let ansDiv = document.createElement("div");

ansDiv.style.display = "flex";
ansDiv.style.flexWrap = "wrap"
ansDiv.style.justifyContent = "space-evenly"
ansDiv.style.width = "auto";
ansDiv.style.margin = "0px 0px 50px 0px";
ansDiv.style.padding = "50px 120px";
ansDiv.style.backgroundColor = "#FFFFE3";

body.appendChild(ansDiv);

              


// Countries containing text





let one = document.querySelector(".one"); 

let two = document.querySelector(".two");
let three = document.querySelector(".three");
let a = true;



        //Button one

    one.addEventListener("click", e=>{
        
        two.style.backgroundColor = "#895BE6"
        one.style.backgroundColor = "#581CB8";
        //user input letter and show including word 

            function findCountries(wordToMatch, countries) {    
                return countries.filter(country=>{
                    
                    const regex = new RegExp(`^${wordToMatch}`, 'gi');
                    return country.match(regex);
                });
            }
           
    function displayMatch() {
        const haha = findCountries(this.value, countries);
      
        let result = input.value;
        
        let para = document.querySelector("p");
         para.textContent = `Countries start with ${result} are ${haha.length}`;
 
        
        if(a == true){
            ansDiv.innerHTML = " ";
            haha.sort();

        }else{
            ansDiv.innerHTML = " ";
            haha.reverse();
        }
        
        // ansDiv.innerHTML = " ";
        for(let i = 0;i < haha.length;i++) {
    
            let eachansDiv = document.createElement("div");
            
                eachansDiv.style.width = "140px";
                eachansDiv.style.fontSize = "15px";
                eachansDiv.style.fontWeight = "bold";
                eachansDiv.style.paddingTop = "60px";
                eachansDiv.style.height = "160px"
                eachansDiv.style.backgroundImage = "linear-gradient(to bottom right, rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0.7)),url(./images/map_image.jpg)";
                eachansDiv.style.backgroundSize = "cover";
                eachansDiv.style.verticalAlign = "middle"
                eachansDiv.textContent = haha[i].toUpperCase();
                eachansDiv.style.textAlign = "center";
                eachansDiv.style.backgroundPosition = "center";
                eachansDiv.style.borderRadius = "5px"
                eachansDiv.style.margin = "30px"
                eachansDiv.style.color = "black"
                eachansDiv.style.display = "inline-block"
                ansDiv.appendChild(eachansDiv);
            
            }
            
        }
        input.addEventListener("input",displayMatch,);
        
        })


        //button two

        two.addEventListener("click", e=>{
            one.style.backgroundColor = "#895BE6";
            two.style.backgroundColor = "#581CB8";
            //user input letter and show including word 

                function findCountries(wordToMatch, countries) {    
                    return countries.filter(country=>{
                        
                        const regex = new RegExp(wordToMatch, 'gi');
                        return country.match(regex);
                    });
                }
        function displayMatch() {
            const haha = findCountries(this.value, countries);
            let result = input.value;
            let para = document.querySelector("p");
         para.textContent = `Countries searching with ${result} word are ${haha.length}`;
            if(a == true){
                ansDiv.innerHTML = " ";
                haha.sort();
            }else{
                ansDiv.innerHTML = " ";
                haha.reverse();
            }
            // ansDiv.innerHTML = " ";
            for(let i = 0;i < haha.length;i++) {
        
                let eachansDiv = document.createElement("div");
                
                    eachansDiv.style.width = "140px";
                    eachansDiv.style.fontSize = "15px";
                    eachansDiv.style.fontWeight = "bold";
                    eachansDiv.style.paddingTop = "60px";
                    eachansDiv.style.height = "160px"
                    eachansDiv.style.backgroundImage = "linear-gradient(to bottom right, rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0.7)),url(./images/map_image.jpg)";
                    eachansDiv.style.backgroundSize = "cover";
                    eachansDiv.style.verticalAlign = "middle"
                    eachansDiv.textContent = haha[i].toUpperCase();
                    eachansDiv.style.textAlign = "center";
                    eachansDiv.style.backgroundPosition = "center";
                    eachansDiv.style.borderRadius = "5px"
                    eachansDiv.style.margin = "30px"
                    eachansDiv.style.color = "black"
                    eachansDiv.style.display = "inline-block"
                    ansDiv.appendChild(eachansDiv);
                
                }
                return haha;
                
                
        }
        
        input.addEventListener("input",displayMatch);
        })


        //button three

        three.addEventListener("click", e=>{
   
            if(a == true){
                three.style.backgroundColor = "#581CB8";
                a = false;
            }else {
                three.style.backgroundColor = "#895BE6";
                a = true;
               
            }
             
        })




        

    

