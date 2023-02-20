let serialNo = 0;

// UPDATING SERIAL NUMBER
function updateSerialNoAsString() {
    serialNo += 1;
    const stringSerial = serialNo + ".";
    return stringSerial;
}

// CALCULATING AREA OF DIFFERENT SHAPES
function calculateArea(subValue, base, height) {
    const area = subValue * base * height;
    // const result = area.toFixed(2);
    
    // console.log(typeof(area))

    if(isNaN(area)){
        alert("String inserted!! String value cannot be calculatd!!! Plaease Enter Numbers");
        return "Invalid";
    }
    else{
        return area.toFixed(2);
    }   
}


// VALIDATING INPUT VALUES
function validateInput(elementName, subValue, base, height) {
    console.log(typeof (base));
    console.log(typeof (height));
    if (base == "" || height == "") {
        alert("Balnk Input Detected!!! Both input must be any positive number");
    }
    else if (base <= 0 || height <= 0) {
        alert("Please enter any positive number greater than 0");
    }
    else {
        const baseValue = parseFloat(base);
        const heightValue = parseFloat(height);
        return createAndPushElement(elementName, subValue, baseValue, heightValue);
    }
}


// CREATING NEW ELEMENTS AS PER OUTPUT RESULT
function createAndPushElement(elementName, sValue, baseValue, heightValue) {
    const resultField = document.getElementById('result-field');

    const div = document.createElement('div');
    const serial = document.createElement('p');
    const name = document.createElement('p');
    const result = document.createElement('p');
    const convention = document.createElement('p');
    const btn = document.createElement('button');

    serial.innerText = updateSerialNoAsString();
    name.innerText = elementName;
    result.innerText = calculateArea(sValue, baseValue, heightValue);
    convention.innerHTML = `<p>cm<sup>2</sup></p>`;
    btn.innerHTML = `<p>Convert to m<sup>2</sup></p>`;

    btn.className = 'convert-btn';
    result.id = "hi"

    div.appendChild(serial);
    div.appendChild(name);
    div.appendChild(result);
    div.appendChild(convention);
    div.appendChild(btn);

    div.className = 'result-div';
    resultField.appendChild(div);
}


// TRIANGLE FUNCTIONALITIES
document.getElementById('btn-tri-calc').addEventListener('click', function () {
    // GETTING VALUES 
    const triBaseField = document.getElementById('tri-b-field');
    const triHeightField = document.getElementById('tri-h-field');

    // STORING VALUES CONVERTING STRING TO FLOAT VALUE
    const triBaseStringValue = triBaseField.value;
    const triHeightStringValue = triHeightField.value;



    validateInput("Triangle", 0.5, triBaseStringValue, triHeightStringValue);
});


// RECTANGLE FUNCTIONALITIES
document.getElementById('rec-cal-btn').addEventListener('click', function () {
    // GETTING VALUES 
    const recWidthField = document.getElementById('rec-width-field');
    const recLengthField = document.getElementById('rec-length-field');

    // STORING VALUES CONVERTING STRING TO FLOAT VALUE
    const recWidthStringValue = recWidthField.value;
    const recLengthStringValue = recLengthField.value;

    validateInput("Rectangle", 1, recWidthStringValue, recLengthStringValue);
})


// PARALLELOGRAM FUNCTIONALITIES
document.getElementById('para-cal-btn').addEventListener('click', function () {
    // GETTING VALUES 
    const paraWidthField = document.getElementById('para-b-field');
    const paraLengthField = document.getElementById('para-h-field');

    // STORING VALUES CONVERTING STRING TO FLOAT VALUE
    const paraWidthStringValue = paraWidthField.value;
    const paraLengthStringValue = paraLengthField.value;

    validateInput("Parallelogram", 1, paraWidthStringValue, paraLengthStringValue);
})


// RHOMBUS FUNCTIONALITIES
document.getElementById('btn-rhombus-calc').addEventListener('click', function () {
    // GETTING VALUES 
    const rhombosWidthField = document.getElementById('rhombos-b-field');
    const rhombosLengthField = document.getElementById('rhombos-h-field');

    // STORING VALUES CONVERTING STRING TO FLOAT VALUE
    const rhombosWidthStringValue = rhombosWidthField.value;
    const rhombosLengthStringValue = rhombosLengthField.value;

    validateInput("Rhombus", 0.5, rhombosWidthStringValue,rhombosLengthStringValue);
})


// PENTAGON FUNCTIONALITIES
document.getElementById('btn-pentagon-calc').addEventListener('click', function () {
    // GETTING VALUES 
    const pentagonWidthField = document.getElementById('pentagon-b-field');
    const pentagonLengthField = document.getElementById('pentagon-h-field');

    // STORING VALUES CONVERTING STRING TO FLOAT VALUE
    const pentagonWidthStringValue = pentagonWidthField.value;
    const pentagonLengthStringValue = pentagonLengthField.value;
    
    validateInput("Pentagon", 0.5, pentagonWidthStringValue,pentagonLengthStringValue);
})


// ELLIPSE FUNCTIONALITIES
document.getElementById('btn-ellipse-calc').addEventListener('click', function () {
    // GETTING VALUES 
    const ellipseWidthField = document.getElementById('ellipse-b-field');
    const ellipseLengthField = document.getElementById('ellipse-h-field');

    // STORING VALUES CONVERTING STRING TO FLOAT VALUE
    const ellipseWidthStringValue = ellipseWidthField.value;
    const ellipseLengthStringValue = ellipseLengthField.value;

    validateInput("Ellipse", Math.PI, ellipseWidthStringValue,ellipseLengthStringValue);
})

// BOLG BUTTON FUNCTIONALITIES
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = "blog.html";
})