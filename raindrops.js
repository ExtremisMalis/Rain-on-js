    const rainContainer = document.getElementById('rain');
    const toggleButton = document.getElementById('toggleRainButton');
    let rainInterval = null;

    function createRaindrop() {
      const drop = document.createElement('div');
      drop.classList.add('drop');
      drop.style.left = Math.random() * 100 + 'vw';
      drop.style.animationDuration = Math.random() * 1 + 0.5 + 's';
      drop.style.animationDelay = Math.random() * 1 + 's';
      rainContainer.appendChild(drop);
      
      setTimeout(() => {
        drop.remove();
      }, 2000);
    }

    function startRain() {
      if (!rainInterval) {
        rainInterval = setInterval(createRaindrop, 50);
        localStorage.setItem('rainEnabled', 'true');
      }
    }

    function stopRain() {
      clearInterval(rainInterval);
      rainInterval = null; 
      localStorage.setItem('rainEnabled', 'false');
    }

    function toggleRain() {
      if (rainInterval) {
        stopRain();
      } else {
        startRain();
      }
    }

    if (localStorage.getItem('rainEnabled') === 'true') {
      startRain();
    }

    toggleButton.addEventListener('click', toggleRain);
