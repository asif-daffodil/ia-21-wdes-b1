const sifat = document.getElementById("sifat");

sifat.innerHTML = "Hello Sifat!";

const srabon = () => {
    sifat.innerHTML = "Hello Srabon!";
}

sifat.addEventListener("click", srabon);

document.getElementById("Sifat").addEventListener("click", () => {
    document.getElementById("pp").src = "./images/sifat.jpg"
});

document.getElementById("Saiful").addEventListener("click", () => {
    document.getElementById("pp").src = "./images/saiful.jpg"
});