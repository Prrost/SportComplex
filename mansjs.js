
function openForm() {
    document.getElementById('popupForm').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}


function closeForm() {
    document.getElementById('popupForm').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}




// Objects and Methods
const trainers = {
    islam: {
        name: 'Islam Akhmetov',
        experience: '15 years',
        specialty: 'Defensive strategies and team leadership'
    },
    dulat: {
        name: 'Dulat Yelubay',
        experience: '12 years',
        specialty: 'Offensive play and dribbling skills'
    },
    elzhar: {
        name: 'Elzhar Amanzholov',
        experience: '8 years',
        specialty: 'Goalkeeping training and defensive coordination'
    }
};

function displayTrainers() {
    const trainerList = document.getElementById('trainerList');
    trainerList.innerHTML = `
        <li><strong>${trainers.islam.name}</strong> - ${trainers.islam.experience}, specializes in ${trainers.islam.specialty}.</li>
        <li><strong>${trainers.dulat.name}</strong> - ${trainers.dulat.experience}, specializes in ${trainers.dulat.specialty}.</li>
        <li><strong>${trainers.elzhar.name}</strong> - ${trainers.elzhar.experience}, specializes in ${trainers.elzhar.specialty}.</li>
    `;
}

// Arrays and Loops
const classes = [
    { name: 'Beginner Class', price: '₸25,000/month' },
    { name: 'Intermediate Class', price: '₸35,000/month' },
    { name: 'Advanced Class', price: '₸45,000/month' },
    { name: 'Private Lessons', price: '₸50,000/hour' }
];

function displayClasses() {
    const classList = document.getElementById('classList');
    classes.forEach(classItem => {
        classList.innerHTML += `<li>${classItem.name}: ${classItem.price}</li>`;
    });
}

// Higher-Order Functions
const filteredClasses = classes.map(item => `${item.name} - ${item.price}`);

// Play Sounds
function playSound() {
    const audio = new Audio('/sounds/notification.mp3');
    audio.play();
}

window.onload = function() {
    displayTrainers();
    displayClasses();
};