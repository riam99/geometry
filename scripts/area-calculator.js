// Triangle Card
function calculateTriangleArea (){
    // get base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);

    // get height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area);

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

    addToCalculationEntry('Triangle', area);
}

// Rectangle Card
function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length); 

    if(isNaN(width) || isNaN(length)){
        alert('Please insert a number');
        return;
    }

    const area = width * length;
    console.log(area);

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

    addToCalculationEntry('Rectangle', area);
}

// Parallelogram Card
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    console.log(base);
    
    const height = getInputValue('parallelogram-height');
    console.log(height);

    if(isNaN(base) || isNaN(height)){
        alert('Please insert a number');
        return;
    }

    const area = base * height;
    setElementInnerText('parallelogram-area', area);

    addToCalculationEntry('Parallelogram', area);
}

// Ellipse Card
function calculateEllipseArea(){
    const largeRadius = getInputValue('ellipse-large');
    const shortRadius = getInputValue('ellipse-short');
    const area = 3.14 * largeRadius * shortRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal);

    addToCalculationEntry('Ellipse', areaTwoDecimal);
}

// reusable
function getInputValue(fieldID){
    const inputField = document.getElementById(fieldID);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

// Calculation Entry for parallelogram
function addToCalculationEntry(areaType, area){
    console.log(areaType + ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;

    calculationEntry.appendChild(p);
}