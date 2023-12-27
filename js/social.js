

  // Detect if the device has a touchscreen
  if ('ontouchstart' in document.documentElement) {
    // Add touch-hover class to the main element if it has a touch event
    document.querySelector('.main').classList.add('touch-hover');
    
    // Add touch-hover class to each card element if it has a touch event
    document.querySelectorAll('.card').forEach(function(card) {
      card.classList.add('touch-hover');
    });
  }

