let test = [10, 2, 4, 6, 9, 12, 0, 22, 100, 21, 32];
// initial array
printArray(test, 'Initial array');

//Sorting 
bubbleSort(test);

//Sorting process 
printArray(test, 'Final array');

function bubbleSort(input) {
    let n = input.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            printArray(input, `Step i=${i} j=${j}`, j, i);
            if (input[j] > input[j + 1]) {
                let aux = input[j];
                input[j] = input[j + 1];
                input[j + 1] = aux;
            }
        }
    }
}

function printArray(input, label, highlight) {
    const resultArea = document.getElementById("resultArea");
    const container = document.createElement('div');
    const info = document.createElement('div');

    info.innerHTML = label;
    info.className = 'label';
    container.className = 'container';
    container.appendChild(info);
    input.forEach((element, index) => {
        const div = document.createElement('div');
        div.innerHTML = element;
        div.className = 'item';
        if (index == highlight || index == highlight + 1) {
            div.classList.add('highlight');
        }
        container.appendChild(div);
    });
    resultArea.appendChild(container);
}

function animate({timing, draw, duration}) {
    const start = performance.now();
    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
      let progress = timing(timeFraction)
      draw(progress); // draw it
      if (timeFraction < 1) requestAnimationFrame(animate);
    });
  }