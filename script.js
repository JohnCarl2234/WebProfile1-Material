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

// This script requires a Facebook App ID and a valid access token.
// You can obtain these by creating a Facebook App and generating an access token 
// with the 'user_photos' permission.

const appId = '1289334458935221';
const accessToken = 'c883f6f348841303c5b207823c067e8c';
const imageContainer = document.getElementById('profileImageContainer');

function fetchProfilePicture() {
  const graphApiUrl = `https://graph.facebook.com/v17.0/me/picture?type=large&access_token=${accessToken}`;

  fetch(graphApiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.data && data.data.url) {
        imageContainer.innerHTML = `<img src="${data.data.url}" alt="Profile Picture">`;
      } else {
        console.error('Error fetching profile picture URL.');
      }
    })
    .catch(error => {
      console.error('Error fetching profile picture:', error);
      // Handle errors, e.g., display an error message
      imageContainer.innerHTML = '<p>Error loading profile picture.</p>';
    });
}

// Initial fetch
fetchProfilePicture();

// Periodically check for updates (e.g., every 5 minutes)
setInterval(fetchProfilePicture, 300000); // 5 minutes in milliseconds
