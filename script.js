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

// Replace with your actual Google Drive folder ID
const folderId = '1GpBOlmHvkh8qMFJ4UOauOY-kTq0oYw2H'; 

// Function to fetch image URL from Google Drive
async function getImageFromDrive() {
  try {
    const response = await fetch(`https://drive.google.com/uc?export=view&id=${folderId}`); 
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.url; 
  } catch (error) {
    console.error('Error fetching image:', error);
    return null; 
  }
}

// Function to update the image source
async function updateImageSource() {
  const imageUrl = await getImageFromDrive();
  if (imageUrl) {
    const imgElement = document.getElementById('myImage'); 
    imgElement.src = imageUrl;
  }
}

// Initial image load and subsequent updates
updateImageSource(); 
setInterval(updateImageSource, 60000); // Update every 60 seconds
