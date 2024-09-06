document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('switch');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  
    // Function to apply theme
    function applyTheme(isDarkMode) {
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        themeToggle.checked = true;
      } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        themeToggle.checked = false;
      }
    }
  
    // Set initial theme based on user preference or default to dark
    applyTheme(prefersDarkScheme.matches);
  
    // Event listener to toggle theme
    themeToggle.addEventListener('change', () => {
      applyTheme(themeToggle.checked);
    });
  
    // Listen for system color scheme changes
    prefersDarkScheme.addEventListener('change', (e) => {
      applyTheme(e.matches);
    });
  });
  