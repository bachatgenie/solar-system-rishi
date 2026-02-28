// Planet Data
const planetData = {
    sun: {
        icon: '☀️',
        name: 'The Sun',
        nickname: 'Our Star',
        facts: [
            'The Sun is a star, not a planet!',
            'It is 109 times bigger than Earth',
            'Surface temperature: 5,500°C',
            'The Sun is 4.6 billion years old',
            'Light from the Sun takes 8 minutes to reach Earth'
        ]
    },
    mercury: {
        icon: '☿️',
        name: 'Mercury',
        nickname: 'The Swift Planet',
        facts: [
            'Closest planet to the Sun',
            'Smallest planet in our solar system',
            'A year on Mercury is only 88 Earth days',
            'Temperature: -173°C to 427°C',
            'No moons or atmosphere'
        ]
    },
    venus: {
        icon: '♀️',
        name: 'Venus',
        nickname: 'The Morning Star',
        facts: [
            'Hottest planet in our solar system (462°C)',
            'Spins backwards compared to other planets',
            'A day on Venus is longer than its year!',
            'Covered in thick clouds of sulfuric acid',
            'Sometimes called Earth\'s twin (similar size)'
        ]
    },
    earth: {
        icon: '🌍',
        name: 'Earth',
        nickname: 'The Blue Planet',
        facts: [
            'Only planet known to have life! 🌱',
            '71% of surface is covered by water',
            'Has 1 moon (we call it "The Moon")',
            'A day is 24 hours, a year is 365.25 days',
            'Temperature: -88°C to 58°C'
        ]
    },
    mars: {
        icon: '🔴',
        name: 'Mars',
        nickname: 'The Red Planet',
        facts: [
            'Called the Red Planet because of iron oxide (rust)',
            'Has the tallest mountain in the solar system (Olympus Mons)',
            'Has 2 small moons: Phobos and Deimos',
            'A day on Mars is almost the same as Earth (24h 37m)',
            'Robots are exploring Mars right now! 🤖'
        ]
    },
    jupiter: {
        icon: '🪐',
        name: 'Jupiter',
        nickname: 'The Gas Giant',
        facts: [
            'Largest planet in our solar system',
            'Has 95 moons! The most of any planet',
            'The Great Red Spot is a huge storm',
            'Made mostly of hydrogen and helium',
            '1,300 Earths could fit inside Jupiter!'
        ]
    },
    saturn: {
        icon: '🪐',
        name: 'Saturn',
        nickname: 'The Ringed Planet',
        facts: [
            'Famous for its beautiful rings made of ice and rock',
            'Has 146 moons!',
            'Less dense than water - it would float!',
            'Winds can reach 1,800 km/h',
            'A year on Saturn is 29 Earth years'
        ]
    },
    uranus: {
        icon: '♅',
        name: 'Uranus',
        nickname: 'The Ice Giant',
        facts: [
            'Spins on its side (tilted 98 degrees)!',
            'Has 27 known moons',
            'Made of water, methane, and ammonia ices',
            'A year on Uranus is 84 Earth years',
            'It is blue-green because of methane gas'
        ]
    },
    neptune: {
        icon: '♆',
        name: 'Neptune',
        nickname: 'The Windy Planet',
        facts: [
            'Farthest planet from the Sun',
            'Has the strongest winds (2,100 km/h)!',
            'A year on Neptune is 165 Earth years',
            'Has 16 known moons',
            'Deep blue color from methane in atmosphere'
        ]
    }
};

// Quiz Questions
const quizQuestions = [
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correct: 1
    },
    {
        question: 'How many moons does Earth have?',
        options: ['None', 'One', 'Two', 'Seventy-nine'],
        correct: 1
    },
    {
        question: 'Which is the largest planet in our solar system?',
        options: ['Earth', 'Saturn', 'Jupiter', 'Neptune'],
        correct: 2
    },
    {
        question: 'What is the Sun?',
        options: ['A planet', 'A moon', 'A star', 'An asteroid'],
        correct: 2
    },
    {
        question: 'Which planet has beautiful rings around it?',
        options: ['Jupiter', 'Uranus', 'Saturn', 'Mars'],
        correct: 2
    },
    {
        question: 'How many planets are in our solar system?',
        options: ['Seven', 'Eight', 'Nine', 'Ten'],
        correct: 1
    },
    {
        question: 'Which planet is closest to the Sun?',
        options: ['Venus', 'Earth', 'Mercury', 'Mars'],
        correct: 2
    },
    {
        question: 'What makes Earth special?',
        options: ['It is the biggest', 'It has life', 'It has the most moons', 'It is the hottest'],
        correct: 1
    }
];

// State
let isAnimating = false;
let currentQuestion = 0;
let score = 0;
let questionsAnswered = 0;
const totalQuestions = 5;

// Generate Stars
function generateStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        star.style.width = Math.random() > 0.8 ? '3px' : '2px';
        star.style.height = star.style.width;
        starsContainer.appendChild(star);
    }
}

// Animation Control
function toggleAnimation() {
    const solarSystem = document.getElementById('solarSystem');
    const btn = document.getElementById('startBtn');
    
    isAnimating = !isAnimating;
    
    if (isAnimating) {
        solarSystem.classList.remove('paused');
        btn.textContent = '⏸️ Pause';
    } else {
        solarSystem.classList.add('paused');
        btn.textContent = '▶️ Start Planets Moving';
    }
}

function resetView() {
    const solarSystem = document.getElementById('solarSystem');
    const btn = document.getElementById('startBtn');
    
    isAnimating = false;
    solarSystem.classList.add('paused');
    btn.textContent = '▶️ Start Planets Moving';
}

// Planet Info Modal
function showPlanetInfo(planet) {
    const data = planetData[planet];
    if (!data) return;

    document.getElementById('modalIcon').textContent = data.icon;
    document.getElementById('modalTitle').textContent = data.name;
    document.getElementById('modalNickname').textContent = `"${data.nickname}"`;
    
    const factsList = document.getElementById('modalFacts');
    factsList.innerHTML = data.facts.map(fact => `&lt;li>${fact}&lt;/li>`).join('');
    
    document.getElementById('planetModal').classList.add('active');
}

function showSunInfo() {
    showPlanetInfo('sun');
}

function closeModal() {
    document.getElementById('planetModal').classList.remove('active');
}

function closeModalOnOverlay(event) {
    if (event.target === event.currentTarget) {
        closeModal();
    }
}

// Quiz Functions
function startQuiz() {
    document.getElementById('quizModal').classList.add('active');
    document.getElementById('quizStart').style.display = 'block';
    document.getElementById('quizGame').style.display = 'none';
    document.getElementById('quizResult').style.display = 'none';
}

function startQuizGame() {
    currentQuestion = 0;
    score = 0;
    questionsAnswered = 0;
    
    // Shuffle and pick 5 questions
    const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
    window.selectedQuestions = shuffled.slice(0, totalQuestions);
    
    document.getElementById('quizStart').style.display = 'none';
    document.getElementById('quizGame').style.display = 'block';
    document.getElementById('quizResult').style.display = 'none';
    document.getElementById('totalQ').textContent = totalQuestions;
    
    showQuestion();
}

function showQuestion() {
    const q = window.selectedQuestions[currentQuestion];
    document.getElementById('currentQ').textContent = currentQuestion + 1;
    document.getElementById('quizQuestion').textContent = q.question;
    
    const optionsDiv = document.getElementById('quizOptions');
    optionsDiv.innerHTML = '';
    document.getElementById('quizFeedback').textContent = '';
    document.getElementById('quizFeedback').className = 'quiz-feedback';
    
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = option;
        btn.onclick = () => selectAnswer(index);
        optionsDiv.appendChild(btn);
    });
}

function selectAnswer(selectedIndex) {
    const q = window.selectedQuestions[currentQuestion];
    const options = document.querySelectorAll('.quiz-option');
    const feedback = document.getElementById('quizFeedback');
    
    // Disable all options
    options.forEach(opt => opt.style.pointerEvents = 'none');
    
    if (selectedIndex === q.correct) {
        options[selectedIndex].classList.add('correct');
        feedback.textContent = '🎉 Correct! Well done, Rishi!';
        feedback.className = 'quiz-feedback correct';
        score++;
    } else {
        options[selectedIndex].classList.add('wrong');
        options[q.correct].classList.add('correct');
        feedback.textContent = `❌ Not quite! The answer was: ${q.options[q.correct]}`;
        feedback.className = 'quiz-feedback wrong';
    }
    
    questionsAnswered++;
    
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < totalQuestions) {
            showQuestion();
        } else {
            showResults();
        }
    }, 2000);
}

function showResults() {
    document.getElementById('quizGame').style.display = 'none';
    document.getElementById('quizResult').style.display = 'block';
    
    const percentage = Math.round((score / totalQuestions) * 100);
    document.getElementById('finalScore').textContent = percentage;
    
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    const chocolateReward = document.getElementById('chocolateReward');
    
    if (percentage >= 80) {
        resultTitle.textContent = '🎉 Amazing Job, Rishi!';
        resultMessage.innerHTML = `You got <strong>${score} out of ${totalQuestions}</strong> correct! 🌟`;
        chocolateReward.style.display = 'block';
    } else if (percentage >= 60) {
        resultTitle.textContent = '👍 Good Job, Rishi!';
        resultMessage.innerHTML = `You got <strong>${score} out of ${totalQuestions}</strong> correct! Keep learning! 📚`;
        chocolateReward.style.display = 'none';
    } else {
        resultTitle.textContent = '📚 Keep Learning, Rishi!';
        resultMessage.innerHTML = `You got <strong>${score} out of ${totalQuestions}</strong> correct. Try again to win the chocolate! 🍫`;
        chocolateReward.style.display = 'none';
    }
}

function restartQuiz() {
    startQuizGame();
}

function closeQuiz() {
    document.getElementById('quizModal').classList.remove('active');
}

function closeQuizOnOverlay(event) {
    if (event.target === event.currentTarget) {
        closeQuiz();
    }
}

// Fun Facts Ticker
const funFacts = [
    '💫 Did You Know? Jupiter has 95 moons! 🌙',
    '💫 Did You Know? A day on Venus is longer than its year! 🌅',
    '💫 Did You Know? Saturn would float in water! 🌊',
    '💫 Did You Know? The Sun is 109 times bigger than Earth! ☀️',
    '💫 Did You Know? Mars has robots exploring it right now! 🤖',
    '💫 Did You Know? Neptune has winds up to 2,100 km/h! 💨',
    '💫 Did You Know? Uranus spins on its side! 🔄',
    '💫 Did You Know? Mercury has no atmosphere! 🌑'
];

let factIndex = 0;
function rotateFacts() {
    factIndex = (factIndex + 1) % funFacts.length;
    document.getElementById('factTicker').textContent = funFacts[factIndex];
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    generateStars();
    resetView();
    setInterval(rotateFacts, 5000);
});
