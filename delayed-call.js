(function() {
  let input = document.createElement('input');
  let header = document.createElement('h2');
  let comment = document.createElement('p');
  
  document.body.append(comment);
  document.body.append(input);
  document.body.append(header);
  
  header.style.marginTop = '5px';
  comment.textContent = 'Вариант с keyup';
  
 
  let timeoutID;
  
  function writeHeader() {
    header.textContent = input.value;
  };
  
  function clearDelay() {
    clearTimeout(timeoutID);
    inputText = input.value;
    console.log(inputText);
  };

  function setDelay() {
    timeoutID = setTimeout(writeHeader, 300);
  }; 


  input.addEventListener('input', clearDelay);
  input.addEventListener('keyup', setDelay);

  })();