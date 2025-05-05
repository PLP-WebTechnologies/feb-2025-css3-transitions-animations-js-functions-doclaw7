// Load saved color preference on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedColor = localStorage.getItem('themeColor');
    const colorPicker = document.getElementById('colorPicker');
    if (savedColor) {
      document.body.style.backgroundColor = savedColor;
      colorPicker.value = savedColor;
      document.getElementById('message').textContent = `Your saved color: ${savedColor}`;
    }
  });
  
  // Save color and trigger animation
  document.getElementById('saveBtn').addEventListener('click', () => {
    const color = document.getElementById('colorPicker').value;
    localStorage.setItem('themeColor', color);
    document.body.style.backgroundColor = color;
    document.getElementById('message').textContent = `Color saved!`;
  
    // Trigger CSS animation by adding class
    const image = document.getElementById('animatedImage');
    image.classList.add('visible');
  
    // Optional: Remove animation class after it's shown once
    setTimeout(() => {
      image.classList.remove('visible');
    }, 2000);
  });
  