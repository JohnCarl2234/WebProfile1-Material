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

// Image fetcher
// Load the Google APIs client library
function checkAndDisplayPpf() {
  // Replace with your Google Drive folder ID
  const folderId = '1GpBOlmHvkh8qMFJ4UOauOY-kTq0oYw2H'; 

  // Build the Drive API URL
  const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}' in parents&fields=files(id,name,mimeType)&key=AIzaSyDlFs3Ez2xX-YxPfzxr8Wjxj91yZc8kYDs`; 

  // Fetch the files in the folder
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Find the "leauxmeme" folder and "ppf" image
      const leauxmemeFolder = data.files.find(file => file.name === 'leauxmeme');
      if (leauxmemeFolder) {
        const ppfImage = leauxmemeFolder.files.find(file => 
          file.name === 'ppf.jpeg' || file.name === 'ppf.png'
        );
        if (ppfImage) {
          // Construct the image URL (replace with appropriate download URL)
          const imageUrl = `https://drive.google.com/uc?export=download&id=${ppfImage.id}`; 

          // Update the img tag in your HTML
          const imgElement = document.getElementById('ppfImage'); 
          imgElement.src = imageUrl; 
        } else {
          // Handle case where "ppf" image is not found
          console.log("ppf.jpeg or ppf.png not found in leauxmeme folder.");
          // Optionally display a default image or error message
          imgElement.src = "path/to/default_image.jpg"; 
        }
      } else {
        // Handle case where "leauxmeme" folder is not found
        console.log("leauxmeme folder not found.");
        // Optionally display a default image or error message
          imgElement.src = "path/to/default_image.jpg"; 
      }
    })
    .catch(error => {
      console.error('Error fetching Drive files:', error);
      // Handle errors (e.g., network issues, API errors)
    });
}

// Call the function to check and display the image
checkAndDisplayPpf();