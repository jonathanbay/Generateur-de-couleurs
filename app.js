    
    function getColor() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);

        const color = `rgb(${r}, ${g}, ${b})`;
    
    // Afficher une couleur de background aléatoire pour le body
    document.body.style.background = color;
    
    // Afficher la couleur au body
    
    document.body.innerHTML = `<h2> ${color}</h2>`;
    }
    
    setInterval(() => {
        getColor();
    }, 1000);

    // setInterval(getColor, 1000);








