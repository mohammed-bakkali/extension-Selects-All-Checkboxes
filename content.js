chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "selectAll") {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
  }
});
