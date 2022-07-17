(function() {
let input = document.createElement('input');
let header = document.createElement('h2');
let comment = document.createElement('p');

document.body.append(comment);
document.body.append(input);
document.body.append(header);

header.style.marginTop = '5px';
comment.textContent = 'Вариант с объектом';


function writeHeader(){
  header.textContent = input.value;
}

let headerPrint = {
  delay: function() {
    clearTimeout(this.timeoutID)
  },
  setup: function() {
    if (typeof this.timeoutID === 'number') {
      this.delay();
    }
    this.timeoutID = setTimeout(writeHeader, 300)
  }
}

input.addEventListener('input', function() {
  headerPrint.setup();
});

})();