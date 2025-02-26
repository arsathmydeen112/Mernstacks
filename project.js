// Open and close modals
const loginModal = document.getElementById('login');
const signupModal = document.getElementById('signup');
const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('.signup-btn');
const closeBtns = document.querySelectorAll('.close');

loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'flex';
});

signupBtn.addEventListener('click', () => {
  signupModal.style.display = 'flex';
});

closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    loginModal.style.display = 'none';
    signupModal.style.display = 'none';
  });
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
  if (event.target === signupModal) {
    signupModal.style.display = 'none';
  }
});