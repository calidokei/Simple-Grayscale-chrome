// background.js

chrome.action.onClicked.addListener((tab) => {
  // Toggle grayscale filter by checking current tab's status
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: toggleGrayscale
  });
});

function toggleGrayscale() {
  // Check if the page already has the grayscale filter applied
  const currentFilter = document.body.style.filter;

  // Toggle grayscale filter based on the current state
  if (currentFilter && currentFilter.includes("grayscale")) {
    // Remove the grayscale filter
    document.body.style.filter = document.body.style.filter.replace("grayscale(100%)", "");
  } else {
    // Apply grayscale filter
    document.body.style.filter = "grayscale(100%)";
  }
}
