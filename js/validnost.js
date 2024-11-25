function pokreni(){
    let email = document.getElementById("email");
    let lozinka = document.getElementById("lozinka");
    let ime = document.getElementById("ime");
    let godine = document.getElementById("godine");
    let pol = document.getElementById("pol");
    let datum = document.getElementById("datum");
    let komentar = document.getElementById("komentar");
    let cekirati = document.getElementById("cekirati");


    email.oninvalid=invalidEmail;
    email.oninput=invalidEmail;
    lozinka.oninvalid=invalidLozinka;
    lozinka.oninput=invalidLozinka;
    ime.oninvalid=invalidIme;
    ime.oninput=invalidIme;
    godine.oninvalid=invalidGodine;
    godine.oninput=invalidGodine;
    pol.oninvalid=invalidPol;
    pol.oninput=invalidPol;
    datum.oninvalid=invalidDatum;
    datum.oninput=invalidDatum;
    komentar.oninvalid=invalidKomentar;
    komentar.oninput=invalidKomentar;
    cekirati.oninvalid=invalidCekirati;
    cekirati.oninput=invalidCekirati;

}

function invalidEmail(){
    let email = this.value;

    if (email == "") {
        this.setCustomValidity("Email adresa je obavezna.");
    } else if (!validateEmail(email)) {
        this.setCustomValidity("Unesite validnu email adresu.");
    } else {
        this.setCustomValidity("");
    }

    function validateEmail(email) {
        var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
      }
      
}

function invalidLozinka() {
    let lozinka = this.value;
    let email = document.getElementById("email").value;
  
    if (lozinka.length < 6) {
      this.setCustomValidity("Lozinka mora sadržati najmanje 6 karaktera.");
    } else if (lozinka.charAt(0) !== lozinka.charAt(0).toUpperCase()) {
      this.setCustomValidity("Prvo slovo lozinke mora biti veliko slovo.");
    } else if (!/[a-z]/.test(lozinka)) {
      this.setCustomValidity("Lozinka mora sadržati bar jedno malo slovo.");
    } else if (!/\d/.test(lozinka)) {
      this.setCustomValidity("Lozinka mora sadržati bar jednu cifru.");
    } else if (!/[^A-Za-z0-9]/.test(lozinka)) {
      this.setCustomValidity("Lozinka mora sadržati bar jedan poseban znak.");
    } else if (lozinka == email) {
      this.setCustomValidity("Lozinka ne sme biti ista kao email adresa.");
    } else {
      this.setCustomValidity("");
    }
}

function invalidIme() {
    let ime = this.value;
  
    if (ime.trim() == "") {
      this.setCustomValidity("Ime je obavezno.");
    } else if (!validateName(ime)) {
      this.setCustomValidity("Unesite validno ime.");
    } else {
      this.setCustomValidity("");
    }
  
    function validateName(ime) {
      if (!/^[A-ZČĆŽŠĐ][a-zčćžšđ]*$/.test(ime.split(" ")[0])) {
        return false;
      }
  
      if (!/^[A-ZČĆŽŠĐ][a-zčćžšđ]*$/.test(ime.split(" ")[1])) {
        return false;
      }
  
      if (/[^\w\s]/.test(ime)) {
        return false;
      }
  
      return true;
    }
}

function invalidGodine(){
    if(this.validity.valueMissing){
        this.setCustomValidity("Unesite Vase godine.");
    } else if(this.validity.rangeUnderflow){
        this.setCustomValidity("Morate imati barem 18 godina kako bi popunili ovu anketu.");
    } else{
        this.setCustomValidity("");
    }
}

function invalidPol(){
    if(this.validity.valueMissing){
        this.setCustomValidity("Molimo Vas izaberite jednu od tri navedene opcije.");
    } else{
        this.setCustomValidity("");
    }
}

function invalidDatum(){
    let datum = this.value;
    let danasnjiDatum = new Date().toISOString().split("T")[0];
  
    if (datum != danasnjiDatum) {
      this.setCustomValidity("Unesite današnji datum.");
    } else {
      this.setCustomValidity("");
    }
}

function invalidKomentar(){
    if(this.validity.valueMissing){
        this.setCustomValidity("Molimo vas napisite komentar. Vas komentar ne moze biti duzi od 200 karaktera.");
    } else{
        this.setCustomValidity("");
    }
}

function invalidCekirati() {
    if(this.validity.valueMissing){
        this.setCustomValidity("Molimo Vas izaberite opciju Da ili opciju Ne.");
    } else{
        this.setCustomValidity("");
    }
}

function ispis(){
    alert("Uspesno ste popunili anketu!");
}



