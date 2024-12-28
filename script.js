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
  // Fetch the current profile picture URL
  fetch('https://graph.facebook.com/v17.0/me/picture?fields=url&access_token=EAASUpJJr57UBO9Vj46aQ6ZCgJmP3wB7shewBJxcvcHbXAZCeIJXuzlT5XfDMx9dPjSGUF7ctNQMQf8ZBCtBfWsxjfuXJcuNwKZBBRCCbg3pndiNyw6qYmwZBbyOuWFZArLdq0GSmnfbigc8rF92SCc3LELfWa3mQDMj9JU4iBaZCLTfDPaZCtOhMnly4cTTAkOGQfW65l6TYMJgKSmaGwS9rlwrUQeH0RjZC46qfZCHhJEoH1stcTHIZBbocayCvAwhYwZDZD')
    .then(response => response.json())
    .then(data => {
      // Get the current profile picture URL from the data
      const currentProfilePictureUrl = data.url;

      // Check if the current profile picture URL is different from the stored URL
      if (currentProfilePictureUrl !== localStorage.getItem('profilePictureUrl')) {
        // Update the HTML img tag with the new URL
        document.getElementById('profilePicture').src = currentProfilePictureUrl;

        // Store the new profile picture URL in local storage
        localStorage.setItem('profilePictureUrl', currentProfilePictureUrl);
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