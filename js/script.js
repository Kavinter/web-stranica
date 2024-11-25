function loptaAnimacija() {
    let prvigol=document.getElementById("normalan");
    let drugigol=document.getElementById("rotiran");
    let lopta=document.getElementById("lopta");

    prvigol.style.position="absolute";
    drugigol.style.position="absolute";
    drugigol.style.left="80%";
    lopta.style.position="absolute";
    lopta.style.left="40%";

    var brojacL=0;
    var brojacD=0;
    const pocetnaPozicija = -522; 
    const krajnjaPozicija = 750; 
    const brzinaPomeranja = 3;
    let desnigolb=document.getElementById("desnig");
    let levigolb=document.getElementById("levig");
    
    let trenutnaPozicija = pocetnaPozicija;
    let smer = 1;

    function pomeriLoptu() {
        trenutnaPozicija += brzinaPomeranja * smer;
        lopta.style.marginLeft = trenutnaPozicija + "px";
      
        if (trenutnaPozicija >= krajnjaPozicija) {
            if(trenutnaPozicija==krajnjaPozicija){
                brojacD++;
                desnigolb.innerHTML="Broj Golova: "+ brojacD;
            }
            smer = -1;
        }
      
        if (trenutnaPozicija <= pocetnaPozicija) {
            if(trenutnaPozicija==pocetnaPozicija){
                brojacL++;
                levigolb.innerHTML="Broj Golova: "+ brojacL;
                
            }
            smer = 1;
        }

        if(brojacL%2==1){
            levigolb.style.color="white";
        }
        else if(brojacL%2==0){
            levigolb.style.color="red";
        }

        if(brojacD%2==1){
            desnigolb.style.color="white";
        }
        else if(brojacD%2==0){
            desnigolb.style.color="blue";
        }

    }
    
    setInterval(pomeriLoptu, 10);

}

function menjajStadione(){
    let putanjeSlika=["./slike/kampnou.jpg","./slike/santiago.jpg","./slike/old.jpg","./slike/zvezda.jpg","./slike/wolves.jpg"];
    let imenaStadiona = ["Kamp Nou - Barselona","Santiago Bernabeu - Madrid","Old Trafford - Mančester","Stadion Rajko Mitić - Beograd","Molineux - Vulverhempton"];

    let dugme = document.getElementById("dugmeS");
    let stadionContainer = document.getElementById("stadion-container");

    let dugmeR = document.getElementById("dugmeR");

    dugme.addEventListener("click",prikaziSledeciStadion);

    var brojac = 0;
    stadionContainer.setAttribute("class","stadioni");
    
    function prikaziSledeciStadion() {
    if (brojac < imenaStadiona.length) {
        let div = document.createElement("div");
        let slika = document.createElement("img");

        slika.src = putanjeSlika[brojac];

        let naziv = document.createElement("h2");

        naziv.textContent = imenaStadiona[brojac];

        div.appendChild(naziv);
        div.appendChild(slika);

        div.classList.add("stadion");
        stadionContainer.appendChild(div);

        div.addEventListener("click", function () {
            stadionContainer.removeChild(div);
        });

        brojac++;
    } else {
            alert("Nema vise stadiona za dodavanje.");
        }
        
    }


    function restartujStadione() {
        brojac=0;

        while (stadionContainer.firstChild) {
            stadionContainer.firstChild.remove();
        }

        let putanjeSlika=["./slike/kampnou.jpg","./slike/santiago.jpg","./slike/old.jpg","./slike/zvezda.jpg","./slike/wolves.jpg"];
        let imenaStadiona=["Kamp Nou - Barselona","Santiago Bernabeu - Madrid","Old Trafford - Mančester","Stadion Rajko Mitić - Beograd","Molineux - Vulverhempton"];
    }
    
    dugmeR.addEventListener("click",restartujStadione);
}

function menjaStranicuCR7(){
    let tekst=document.querySelectorAll("p,h3,dl,dt,dd,form,label");
    let snimak=document.getElementById("snimakcr");
    let slika=document.getElementById("slikacr");
    let rm=document.getElementById("cr7promena");
    let naslov=document.getElementById("naslovk");

    naslov.style.backgroundImage='url(./slike/blue.jpg)';
    document.body.style.backgroundColor="silver";
    rm.style.color="white";
    rm.textContent="Ronaldo predstavlja svoju drugu FIFA Zlatnu loptu navijačima na Santiago Bernabeu pre meča protiv Atletiko Madrida u januaru 2015.";


    for (var i = 0; i < tekst.length; i++) {
        tekst[i].style.color='white';
    }


    let tabela = document.querySelectorAll('td,th,tr');
    
    for (var i = 0; i < tabela.length; i++) {
        tabela[i].style.fontFamily = 'Arial, sans-serif';
        tabela[i].style.color='white';
    }

    slika.src="./slike/cr7.jpg";
    snimak.src="https://www.youtube.com/embed/gaiuveidJpA";

    alert("Drzite bilo koje slovo da se vratite na pocetan izgled stranice.");

    function restartStranicuCR7(){
        let tekst=document.querySelectorAll("p,h3,dl,dt,dd,form,label");
        let snimak=document.getElementById("snimakcr");
        let slika=document.getElementById("slikacr");
        let rm=document.getElementById("cr7promena");
        let naslov=document.getElementById("naslovk");

        naslov.style.backgroundImage='url(./slike/red.jpg)';
        document.body.style.backgroundColor="lightcoral";
        rm.style.color="black";
        rm.textContent="Kristijano Ronaldo u dresu Mančester Junajteda.";


        for (var i = 0; i < tekst.length; i++) {
            tekst[i].style.color='black';
        }


        let tabela = document.querySelectorAll('td,th,tr');
        
        for (var i = 0; i < tabela.length; i++) {
            tabela[i].style.fontFamily = 'Times New Roman, Times, serif';
            tabela[i].style.color='black';
        }

        slika.src="./slike/mada.jpg";
        snimak.src="https://www.youtube.com/embed/CIIYLcMhyUU";

    }

    document.body.addEventListener("keydown",restartStranicuCR7);

}
