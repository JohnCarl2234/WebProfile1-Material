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
function loadGapiClient() {
  return new Promise((resolve, reject) => {
      gapi.load('client', async () => {
          try {
              await gapi.client.init({
                  apiKey: 'AIzaSyDlFs3Ez2xX-YxPfzxr8Wjxj91yZc8kYDs',
                  discoveryDocs: [
                      'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'
                  ]
              });
              resolve();
          } catch (error) {
              reject(error);
          }
      });
  });
}

async function findImageAndUpdate() {
  try {
      // Ensure the client is loaded
      await loadGapiClient();

      // Find the folder named "leauxmeme"
      const folderResponse = await gapi.client.drive.files.list({
          q: "name = 'leauxmeme' and mimeType = 'application/vnd.google-apps.folder'",
          fields: 'files(id, name)'
      });

      const folder = folderResponse.result.files[0];
      if (!folder) {
          console.log('Folder leauxmeme not found');
          return;
      }

      // Find the image named "ppf" in the folder
      const fileResponse = await gapi.client.drive.files.list({
          q: `name contains 'ppf' and '${folder.id}' in parents and (mimeType = 'image/jpeg' or mimeType = 'image/png')`,
          fields: 'files(id, name)'
      });

      const file = fileResponse.result.files[0];
      if (!file) {
          console.log('Image file named ppf not found');
          return;
      }

      // Get the file's public URL (requires the file to be shared publicly)
      const fileUrl = `https://drive.google.com/uc?id=${file.id}`;

      // Update the img tag in your HTML
      const imgTag = document.getElementById('image'); // Make sure your img tag has id="image"
      if (imgTag) {
          imgTag.src = fileUrl;
          console.log('Image updated successfully');
      } else {
          console.log('img tag with id "image" not found');
      }
  } catch (error) {
      console.error('Error:', error);
  }
}

// Call the function
findImageAndUpdate();
