// Wait until the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Now it is safe to add the event listener
  const toggleButton = document.getElementById("toggleButton");

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tab = tabs[0];
        if (tab) {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: toggleGrayscale
          });
        }
      });
    });
  } else {
    console.error("Button with id 'toggleButton' not found!");
  }
});

// Function to toggle grayscale filter on the page
function toggleGrayscale() {
  const currentFilter = document.body.style.filter;

  // If grayscale is already applied, remove it
  if (currentFilter && currentFilter.includes("grayscale(100%)")) {
    document.body.style.filter = document.body.style.filter.replace("grayscale(100%)", "");
  } else {
    // Apply grayscale
    if (currentFilter) {
      document.body.style.filter = `${currentFilter} grayscale(100%)`;
    } else {
      document.body.style.filter = "grayscale(100%)";
    }
  }
}
