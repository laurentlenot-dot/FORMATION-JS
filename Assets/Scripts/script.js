const btnRed = document.getElementById("btn-red");;

let compteur = 0;

function add () {
  compteur = compteur + 1;
}

setTimeout(() => {
  console.log('fin du temps');

}, 10000);

let titre = document.getElementById("titre");

btnRed.addEventListener("click", () => {
add();
  console.log('cliqué lolo', compteur);
  titre.innerText = compteur;
})

setTimeout(() => {
    btnRed.remove();
    titre.innerText = "Le bouton a été supprimé";   
}, 10000);