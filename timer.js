(function(){
  let inputTime = document.createElement('input');
  let startButton = document.createElement('button');
  let countdown = document.createElement('div');

  document.body.append(inputTime);
  document.body.append(startButton);
  document.body.append(countdown);

  startButton.textContent = 'Таймер';


  inputTime.style.marginRight = '5px';
  inputTime.style.marginBottom = '15px';
  countdown.style.border = '1px solid grey';
  countdown.style.width = '30px';
  countdown.style.height = '20px';
  countdown.style.textAlign = 'center';
  countdown.style.marginBottom = '40px'


let interval;
let nIntervId;

  function setTimer() {
    interval = inputTime.value;
  };

  function stepDown() {
    if (interval >= 0) {
      countdown.textContent = interval;
      interval--;
    } else {
      clearInt();
    }
  }

  function setInt() {
    nIntervId = setInterval(stepDown, 1000);
  }

  function clearInt() {
    clearInterval(nIntervId);
  }

  let isClick = true;

  startButton.addEventListener('click', function() {
    if (isClick) {
      clearInt()
      setTimer(), 
      setInt(),
      isClick = false; 
    } else {
      clearInt()
      setTimer(), 
      setInt(),
      isClick = true;
    }
  });
})();