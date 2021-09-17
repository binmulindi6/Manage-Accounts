

let id = document.getElementById("inputId");
let name1 = document.getElementById("inputName");
let amount = document.getElementById("inputAmount");
let text = '<div class="el">';
let i=0;

function add(){

    let x1 = id.value;
    let x2 = name1.value;
    let x3 = amount.value;
    let x4 = "edit";
    i += 1;

    if(x1 != '',x2 != '',x3 != ''){



    
        inner();
        addSpace();
        after();

        function inner (){
            text += "<span>" + x1 + "</span>" +
                    "<span>" + x2 + "</span>" +
                    "<span>" + x3 + "</span>" +
                    '<span class="material-icons">' + x4 + "</span>";
            text += "</div>";
        }           
        document.getElementById("elements").innerHTML = text;
        text += '<div class="el">';

        function addSpace(){
            if (i == 5){
                document.getElementById("container").style.height = "350px";
            }
            if (i == 10){
                document.getElementById("container").style.height = "450px";
            }
        }

        function after(){

            id.value = "";
            name1.value = "";
            amount.value = "";
            x4 = "";
        }
    }
}