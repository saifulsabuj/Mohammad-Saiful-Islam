const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
// Get the modal
var modal = document.getElementById("bookModal");

// Get the button that opens the modal
var btn = document.getElementById("MY E-BOOK");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// scripts.js

// Function to open a modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

// Function to close a modal
function closeModal(modal) {
    modal.style.display = 'none';
}

// Attach event listeners to buttons
document.getElementById('smore1').addEventListener('click', function() {
    openModal('modalmore1');
});

document.getElementById('smore2').addEventListener('click', function() {
    openModal('modalmore2');
});

document.getElementById('smore3').addEventListener('click', function() {
    openModal('modalmore3');
});

document.getElementById('smore4').addEventListener('click', function() {
    openModal('modalmore4');
});

document.getElementById('smore5').addEventListener('click', function() {
    openModal('modalmore5');
});

// Attach event listeners to close buttons
document.querySelectorAll('.custom-close').forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
        const modal = closeButton.closest('.custom-modal');
        closeModal(modal);
    });
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('custom-modal')) {
        closeModal(event.target);
    }
});
