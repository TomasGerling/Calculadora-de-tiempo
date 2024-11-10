// script.js
function sumTimes() {
    const input = document.getElementById('timeInput').value.trim();
    const times = input.split('\n').map(time => time.trim());
    let totalSeconds = 0;
    let isValid = true;
  
    times.forEach(time => {
      if (time && /^[0-9]+:[0-5][0-9]$/.test(time)) {
        const [mm, ss] = time.split(':').map(Number);
        totalSeconds += mm * 60 + ss;
      } else if (time) {
        isValid = false;
      }
    });
  
    if (!isValid) {
      document.getElementById('result').textContent = '00:00:00';
      document.getElementById('error').textContent = 'Error: Formato de tiempo incorrecto. Use mm:ss.';
      return;
    } else {
      document.getElementById('error').textContent = '';
    }
  
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
  
    document.getElementById('result').textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  
  // Añadimos el evento al botón
  document.getElementById('sumButton').addEventListener('click', sumTimes);
  