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

function fetchFacebookProfilePicture() {
  const accessToken = 'EAASUpJJr57UBOZCAYScH01SjwZCjPSyOXaK25HFNnVRJEZASElTYrcvrYvCmnUZC9Ai2DGVR9awSWVLcVucD6wWzNlr9l2NnbzSNS9klJMoNTwKF0nTzcS6lqbPBCIJUm2SE2hk8DGbNIaOUKb1l2bc3QP6V2w26qyJNduOTOX57ZAQfgUfWiGtSsjZA5jC3Y296dPuyfVzYKVZCVV7tywZD'; // Replace with your actual User Access Token
  const apiUrl = `https://graph.facebook.com/v18.0/me/picture?fields=url&access_token=${accessToken}`; 

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

      const profilePictureUrl = data.url;
      const profilePictureElement = document.getElementById('profilePicture'); 

      if (profilePictureElement) {
        profilePictureElement.src = profilePictureUrl;
      } else {
        console.error('Element with ID "profilePicture" not found.');
      }
    })
    .catch(error => {
      console.error('Error fetching profile picture:', error);
    });
}

// Call the function to fetch and display the profile picture
fetchFacebookProfilePicture();