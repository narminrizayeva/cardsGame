
const actors = [
    { name: "Al Pacino", image: "assets/images/Al Pacino.jpg" },
    { name: "Johnny Depp", image: "assets/images/Johnny D.jpg" },
    { name: "Leonardo DiCaprio", image: "assets/images/Leo DiCaprio.jpg" },
    { name: "Morgan Freeman", image: "assets/images/Morgan Freman.jpg" },
    { name: "Tom Cruise", image: "assets/images/Tom Cruise.jpg" },
    { name: "Tom Hanks", image: "assets/images/tom hanks.jpg" }
];

let score = 0;
let currentActor = '';

function shuffleActors() {
    const index = Math.floor(Math.random() * actors.length); 
    currentActor = actors[index].name;
    document.getElementById('prompt').innerText = `Find ${currentActor}`;
}

function revealCard(card) {
    const actorName = card.getAttribute('data-actor');
    const actor = actors.find(actor => actor.name === actorName);
    card.style.backgroundImage = `url('${actor.image}')`;
    card.classList.add('revealed');

    if (actorName === currentActor) {
        score++;
        document.getElementById('result').innerText = 'Correct!';
    } else {
        document.getElementById('result').innerText = 'Wrong!';
    }

    document.getElementById('score').innerText = `Score: ${score}`;

    setTimeout(() => {
        resetCards();
        shuffleActors();
    }, 1000);
}

function resetCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.backgroundImage = '';
        card.classList.remove('revealed');
    });
    document.getElementById('result').innerText = '';
}

document.addEventListener('DOMContentLoaded', () => {
    shuffleActors();

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => revealCard(card));
    });
});
