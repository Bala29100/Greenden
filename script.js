let search = document.getElementById("search")
let container = document.getElementById("container")
let hvalue = container.querySelectorAll("h1");

search.addEventListener("keyup", function () {
    let inputValue = event.target.value.toUpperCase();
    for (count = 0; count < hvalue.length; count++) {
        console.log(hvalue[count].textContent + ";" + hvalue[count].textContent.indexOf(inputValue));
        if (hvalue[count].textContent.toUpperCase().indexOf(inputValue) <= 0) {
            hvalue[count].parentElement.style.display = "block";
        } else {

            hvalue[count].parentElement.style.display = "none";
        }
    }
})