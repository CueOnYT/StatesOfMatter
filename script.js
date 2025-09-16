function changeState(state) {
    const atoms = document.getElementById('atoms');
    atoms.innerHTML = '';
    let particles = 20;
    for (let i = 0; i < particles; i++) {
        let div = document.createElement('div');
        div.className = 'particle';
        div.style.backgroundColor = '#ff4500';
        atoms.appendChild(div);
    }
    if (state === 'liquid') {
        animateParticles(2);
    } else if (state === 'gas') {
        animateParticles(5);
    } else {
        animateParticles(0);
    }
}

function updateTemperature() {
    const temp = document.getElementById('temperature').value;
    document.getElementById('thermometer').textContent = `${temp} K`;
}

function animateParticles(speed) {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(p => {
        let posX = Math.random() * 200 - 100;
        let posY = Math.random() * 200 - 100;
        p.animate([
            { transform: `translate(${posX}px, ${posY}px)` }
        ], {
            duration: 1000,
            iterations: Infinity,
            easing: 'linear'
        });
    });
}

changeState('solid');
