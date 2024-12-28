//Material Inspired WebProfile with CSS Grid System
//Author: John Carl Acosta (carleaux)
//github: johncarl2234

/*const element = document.querySelector('.animateOnScroll'); // Select the element with class 'familyName'
const threshold = window.innerHeight / 2; // Adjust threshold as needed

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const elementTop = element.getBoundingClientRect().top;

  if (scrollPosition > elementTop - threshold) {
    element.classList.add('animated'); // Add 'animated' class to trigger animation
  } else {
    element.classList.remove('animated'); // Remove 'animated' class to stop animation
  }
}); */
const animationClass = 'animated'; // Replace with your actual animation class name
const threshold = window.innerHeight / 2; // Adjust threshold as needed

window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.animateOnScroll'); // Select elements

  elements.forEach(element => {
    const scrollPosition = window.scrollY;
    const elementTop = element.getBoundingClientRect().top;

    if (scrollPosition > elementTop - threshold) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
});

function checkProfilePictureUpdate() {
  const accessToken = 'EAASUpJJr57UBO8QyFRXWNN4QWKLLwj2mR2Crno1LhtKXCqiNK9kdvFbD71Sl3APZCPJVc6x35yNyENKhQ6WfjGILkpEiw6JFWT9pSaktEp2rJufft56HcC7UwE8pg5uJDwCLc3PYmCQuBzRFue6efbaqxhDaWbDzPpHck1mJl2jboLglrFQFjZA9ZB5IjGtTENYMHhEkMrku1tA5wZDZD'; // Replace with your actual access token
  const apiUrl = `https://graph.facebook.com/v17.0/me/picture?fields=url&access_token=${accessToken}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.error) {
        console.error('Error fetching profile picture:', data.error.message);
        return; 
      }

      const currentUrl = data.url;
      const storedUrl = localStorage.getItem('profilePictureUrl');

      if (currentUrl !== storedUrl) {
        const profilePicture = document.getElementById('profilePicture');
        profilePicture.src = currentUrl; 
        localStorage.setItem('profilePictureUrl', currentUrl);
      }
    })
    .catch(error => {
      console.error('Error fetching profile picture:', error);
    });
}

// Initial check on page load
checkProfilePictureUpdate();

// Set an interval to check for updates periodically (e.g., every 5 minutes)
setInterval(checkProfilePictureUpdate, 5 * 60 * 1000);