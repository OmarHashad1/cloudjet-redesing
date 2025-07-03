function switchTab(clickedTab) {
    const allTabs = document.querySelectorAll('.tab');
    allTabs.forEach(tab => {
      tab.classList.remove('active');
      const svg = tab.querySelector('svg');
      if (svg) {
        const paths = svg.querySelectorAll('*[stroke]');
        paths.forEach(path => {
          path.setAttribute('stroke', '#64748b');
        });
      }
    });
    
    clickedTab.classList.add('active');
    const activeSvg = clickedTab.querySelector('svg');
    if (activeSvg) {
      const paths = activeSvg.querySelectorAll('*[stroke]');
      paths.forEach(path => {
        path.setAttribute('stroke', '#ffffff');
      });
    }
  }