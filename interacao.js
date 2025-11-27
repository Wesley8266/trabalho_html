function mostrarcuriosidade(){
    const curiosidade = [
        "a série quase se chamou montauk",
        "millie Bobby Brown raspou o cabelo de verdade para a eleven",
    ];
    const aleatório = 
    Math.floor(Math.random) * curiosidade.lenght);
    
    document.getElementbyId("curiosidade").textContent = curiosidade[aleatorio];
    }