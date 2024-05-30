// Função de rolagem de página
document.querySelectorAll('.ancor').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const daysElement = document.querySelector('.days');
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    
    for (let i = 1; i <= 31; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = i;
        if (i === currentDay) {
            dayElement.classList.add('today');
        }
        daysElement.appendChild(dayElement);
    }
});


