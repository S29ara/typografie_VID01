// Selecteer alle elementen met de class 'scroll-text'
const scrollTextElements = document.querySelectorAll('.scroll-text');

// Functie om scroll-effect per element te triggeren
scrollTextElements.forEach(scrollText => {
    let lastScrollTop = 0;
    let translateX = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Naar beneden scrollen - tekst naar links bewegen
            translateX -= 5;
        } else {
            // Naar boven scrollen - tekst naar rechts bewegen
            translateX += 5;
        }

        // Pas de horizontale positie van de tekst aan
        scrollText.style.transform = `translateX(${translateX}px)`;

        // Update de laatste scrollpositie
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Voorkom negatieve waarden
    });
});

// hulp van ChatGPT 

//hover schaduw effect

// Selecteer het p-element met de class 'hover-me'
const hoverMeText = document.querySelector('.hover-me');

// Gebruik de Intersection Observer API om te detecteren wanneer het element in beeld komt
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Als het element in beeld is en nog niet eerder geanimeerd
        if (entry.isIntersecting && !entry.target.classList.contains('show')) {
            entry.target.classList.add('show'); // Voeg de class toe die de animatie triggert
            observer.unobserve(entry.target); // Stop met observeren nadat het één keer is geanimeerd
        }
    });
}, { threshold: 0.8 }); // Dit betekent dat de animatie start als 50% van het element zichtbaar is

// Observeer het p-element met de class 'hover-me'
observer.observe(hoverMeText);

document.addEventListener("DOMContentLoaded", function () {
    // Selecteer alle img-elementen in de grid-use die NIET de class .plaat hebben
    const images = document.querySelectorAll('.grid-use img:not(.plaat)');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal'); // Voeg de class 'reveal' toe als het img-element in beeld komt
                observer.unobserve(entry.target); // Stop met observeren zodra de afbeelding zichtbaar is
            }
        });
    }, {
        threshold: 0.2 // Zodra 20% van de afbeelding zichtbaar is, triggeren we de animatie
    });

    images.forEach(image => {
        observer.observe(image); // Observeer elke afbeelding behalve .plaat
    });
});

// stretched text 
document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelectorAll('.uitgerekt-lettertype'); // Selecteer alle elementen met de class 'stretch-text'

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('stretched'); // Voeg 'stretched' class toe als het element in beeld komt

                // Na 3 seconden (3000 ms), de stretched class verwijderen om terug te gaan naar de normale staat
                setTimeout(() => {
                    entry.target.classList.remove('stretched');
                }, 3000); // Tijd in milliseconden (3 seconden in dit geval)
            }
        });
    }, {
        threshold: 0.5 // Zodra 50% van het element zichtbaar is, activeer het effect
    });

    textElements.forEach(el => observer.observe(el)); // Observeer elk element met de class 'stretch-text'
});

// typewriter effect

const typewriterElement = document.querySelector(".line-1");
let isTypingStarted = false;

const typewriterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !isTypingStarted) {
      isTypingStarted = true;
      typewriterElement.classList.add("anim-typewriter"); // Start de animatie
    } else if (!entry.isIntersecting) {
      isTypingStarted = false; // Reset voor de volgende keer
      typewriterElement.classList.remove("anim-typewriter"); // Stop de animatie
    }
  });
});

// Observeer het typewriter-element
typewriterObserver.observe(typewriterElement);

//slide in
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Als het element in beeld komt
        if (entry.isIntersecting) {
            // Voeg de class toe die de animatie activeert voor de h4
            const h4Element = entry.target.querySelector('h4');
            h4Element.classList.add('slide-in');

            // Wacht tot de h4 animatie voltooid is voordat we de p-animatie starten
            h4Element.addEventListener('animationend', () => {
                // Selecteer de specifieke p binnen de huidige container
                const pElement = entry.target.querySelector('p.slide-up');
                pElement.classList.add('slide-up-animate');
            });

            // Stop met observeren als de animatie is gestart
            scrollObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Dit is het percentage dat zichtbaar moet zijn voordat de callback wordt geactiveerd
});

//knop
// Selecteer het element dat geobserveerd moet worden
const containerSlideIn = document.querySelector('.container-slideIn');
scrollObserver.observe(containerSlideIn);

// Scroll-to-top functionaliteit
const scrollToTopBtn = document.getElementById('scrollToTop');

// Toon de knop wanneer er naar beneden wordt gescrold
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        scrollToTopBtn.style.display = "block"; // Maak de knop zichtbaar
    } else {
        scrollToTopBtn.style.display = "none"; // Verberg de knop
    }
});

// Scroll naar boven bij klikken op de knop
scrollToTopBtn.addEventListener('click', () => {
    // Gebruik smooth scroll
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});