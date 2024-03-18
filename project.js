function changeColor(buttonName) {
  let buttonElement = document.querySelector(buttonName);
  if (buttonElement.classList.contains('changed-point-button')) {
    // If it does, remove the changed class and add the original class
    buttonElement.classList.remove('changed-point-button');
    buttonElement.classList.add('point-button');
  } else {
    // If it doesn't have the changed class, toggle the changed class
    buttonElement.classList.toggle('changed-point-button');
  } 
}

function submitRating() {
  // Get all buttons with the 'changed-point-button' class
  const selectedButtons = document.querySelectorAll('.changed-point-button');

  // Check if any button is selected
  if (selectedButtons.length > 0) {
    // Assuming there's only one selected button, get its rating value
    const ratingValue = selectedButtons[0].textContent;

    // Update the announcement text on the "thank you" page
    document.querySelector('.announcement span').textContent = ratingValue;

    // Hide rating interface section
    document.querySelector('.container').classList.add('hidden');
    
    // Show "thank you" page section
    document.querySelector('.container2').classList.remove('hidden');
  } else {
    // If no button is selected, you may want to handle this case (show an error message, for example)
    alert('Please select a rating before submitting.');
  }
}