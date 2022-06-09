let convertFrom = document.querySelector('#choosen-unit1').value
let convertTo= document.querySelector('#choosen-unit2').value
let convertFromChoosen = false
let convertToChoosen = false
let variable = 0; 
let message = "Please select an option from both the buttons!"

const submitBtn = document.getElementById("submitbtn")
const clearBtn = document.getElementById("clear")
const clearinputBtn = document.getElementById("clearinput")

submitBtn.addEventListener("click", function() {
 
    variable = document.getElementById('conversion-unit').value;
    convert(variable)
        if (message==="Please select an option from both the buttons!" || (convertFromChoosen===false && convertToChoosen===false))
       { 
        message= "Please select an option from both the buttons!" 
        document.querySelector(".error").innerHTML = message 
        document.querySelector(".answer").innerHTML = ""
        }

        else
        {
        document.querySelector(".error").innerHTML = ""
        document.querySelector(".answer").innerHTML = message
        }

})

clearBtn.addEventListener("click", function() {
    document.querySelector(".answer").innerHTML = " "
})

clearinputBtn.addEventListener("click", function() {
    document.getElementById("conversion-unit").value = " "
    document.querySelector(".answer").innerHTML = " "
})


function convert(variable) {
    let givenUnit = variable

        if (convertFrom ===convertTo)
        {
            message = givenUnit
            if (convertFrom === "meter")
            {message+=" m"}

            else if (convertFrom === "feet")
            {message+=" ft"}

            else if (convertFrom === "pounds")
            {message+=" lb"}

            else if (convertFrom === "kilo")
            {message+=" kg"}

            else if (convertFrom === "gallons")
            {message+=" gal"}

            else 
            {message+=" l"}
        }

        if (convertFrom === "meter" && convertTo==="feet")
        {
            let converted = (givenUnit*3.28084).toFixed(3)
            message = converted  + " ft"
            
            convertToChoosen = false
            convertToFrom = false
        }

        if (convertFrom === "feet" && convertTo==="meter")
        {
            let converted = (givenUnit*0.3048).toFixed(3)
            message = converted + " m";   
            
            convertToChoosen = false
            convertToFrom = false
        }

        if (convertFrom === "litre" && convertTo==="gallons")
        {
            let converted = (givenUnit*0.26417).toFixed(3)
            message = converted + " gal";   
            
            convertToChoosen = false
            convertToFrom = false
        }

        if (convertFrom === "gallons" && convertTo==="litre")
        {
            let converted = (givenUnit*3.78541).toFixed(3)
            message = converted + " l";   
            console.log(converted)
            convertToChoosen = false
            convertToFrom = false
        }

        if (convertFrom === "kilo" && convertTo==="pounds")
        {
            let converted = (givenUnit*2.20).toFixed(3)
            message = converted + " lb";   
            
            convertToChoosen = false
            convertToFrom = false
        }

        if (convertFrom === "pounds" && convertTo==="kilo")
        {
            let converted = (givenUnit*0.453592).toFixed(3)
            message = converted + " kg";   
            
            convertToChoosen = false
            convertToFrom = false
        }

    }

document.addEventListener("DOMContentLoaded", () => {  
    document.querySelector('#choosen-unit1').onchange = function() {
       convertFrom = this.value
       document.querySelector(".answer").innerHTML = ""
       convertFromChoosen=true
      }
  });

document.addEventListener("DOMContentLoaded", () => {  
    document.querySelector('#choosen-unit2').onchange = function() {
  
         console.log("suman")
        convertTo=this.value
        document.querySelector(".answer").innerHTML = ""
        convertToChoosen=true
      }
  });

  