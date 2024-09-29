function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    hamburger.addEventListener('click', () => {
        // Додаємо або видаляємо клас 'active' для гамбургера
        hamburger.classList.toggle('active');
        
        // Додаємо або видаляємо клас 'hidden' для навігації
        nav.classList.toggle('hidden');
    });
    
}


// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function openModal(modalType) {
    if (modalType === 'search') {
        document.getElementById('searchModal').style.display = 'flex';
    } else if (modalType === 'become') {
        document.getElementById('becomeModal').style.display = 'flex';
    }
}

// Закриття модального вікна при кліку поза ним
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}
