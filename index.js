var objetoBotaoLogoff = document.getElementById("botaoLogoff")

console.log(objetoBotaoLogoff)

var token = window.localStorage.getItem("key")
console.log(token)
            if(token == null) {
                objetoBotaoLogoff.className = "sumiu"
            }

function  logoffApi(){
    window.localStorage.removeItem("key");
    console.log("indo para index")
    window.location.href = "sobrenos.html"
}