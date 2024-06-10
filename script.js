document.getElementById("btn").addEventListener("click",myFunc);

document.addEventListener("keydown",function(e)
{
if(e.key === "Enter")
{
    myFunc();
}
})

function myFunc(){
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    
    var height_error = document.getElementById("height_error");
    var weight_error = document.getElementById("weight_error");

    if(isNaN(height) || height=="") {
        height_error.innerHTML = "The height is not correct";
    } else {
        height_error.innerHTML = "";
    }

    if(isNaN(weight) || weight=="") {
        weight_error.innerHTML = "The weight is not correct";
    } else {
        weight_error.innerHTML = "";
    }

    if(!isNaN(height) && !isNaN(weight) && height !== "" && weight !== "") {
        height = parseInt(height);
        // Convert height from centimeters to meters
           height = height / 100;
    
        weight = parseInt(weight);
        var bmi =Math.round( weight / (height * height));
        var result = document.getElementById("output");
    }

    if(bmi < 18.5)
        {
            result.innerHTML = bmi + " You are UnderWeighted" ;

        }
        else if(bmi >=18.5 && bmi<=24.9){
            result.innerHTML = bmi + " You are Normal " ;

        }
        else if(bmi >=25 && bmi <=29.9)
            {
                result.innerHTML = bmi + " You are OverWeighted" ;

            }
            else if(bmi >=30 && bmi <=34.9)
                {
                    result.innerHTML = bmi + " You are Obese" ;

                }
                else if(bmi >=35){
                    result.innerHTML = bmi + " You are Extremely Obese" ;

                }
}

document.getElementById("Reset").addEventListener("click",function (){
    document.getElementById("height").value="";
    document.getElementById("weight").value="";


});
