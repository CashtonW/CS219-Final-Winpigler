function filterCategory(category) {
    const cards = document.querySelectorAll('.post-card');
    const pills = document.querySelectorAll('.pill');

    pills.forEach(pill => {
        pill.classList.remove('active');
        if (pill.innerText.toLowerCase() === category || (category === 'all' && pill.innerText === 'All')) {
            pill.classList.add('active');
        }
    });

    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function filterPosts() {
    const input = document.getElementById('blogSearch').value.toLowerCase();
    const cards = document.querySelectorAll('.post-card');

    cards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}