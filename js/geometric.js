// Table Function
function cardValueId(triangleName, totalSum) {
    const tableContainer = document.getElementById('table-container');

    const tr = document.createElement('tr');
    tr.innerHTML = `
    
    <td>${serial}.${triangleName}</td>
    <td>${totalSum}cm<sup>2</sup></td>
    <td><button class="py-1 px-2 font-normal btn-primary rounded-xl">Convert to <span>m<sup>2</sup></span></button></td>
    `
    tableContainer.appendChild(tr);
}

// Triangle Section

let serial = 0;

document.getElementById('card1-button').addEventListener('click', function (event) {
    serial = serial + 1;

    const triangleName = event.target.parentNode.parentNode.children[0].innerText;
    const triangleInnerCount = event.target.parentNode.parentNode.children[1].children[0].innerText;
    const triangleFirstInputValue = event.target.parentNode.parentNode.children[2].children[0].value;
    const triangleSecondInputValue = event.target.parentNode.parentNode.children[2].children[2].value;

    event.target.parentNode.parentNode.children[2].children[0].value = '';
    event.target.parentNode.parentNode.children[2].children[2].value = '';

    if (isNaN(triangleFirstInputValue, triangleSecondInputValue)) {
        alert('Please Type Valid Number');
        return;
    }

    const totalTriangleValue = parseFloat(triangleInnerCount) * parseFloat(triangleFirstInputValue) * parseFloat(triangleSecondInputValue);
    const totalSum = totalTriangleValue;


    cardValueId(triangleName, totalSum);

});

// Rectangle Section

document.getElementById('card2-button').addEventListener('click', function () {

    serial = serial + 1;

    const CardTitleElement = document.getElementById('card-title-two').innerText;
    const cardTwoInputOne = document.getElementById('card-two-input-1').value;
    const cardTwoInputTwo = document.getElementById('card-two-input-2').value;

    if (isNaN(cardTwoInputOne, cardTwoInputTwo)) {
        alert('Please Type Valid Number');
        return;
    }

    document.getElementById('card-two-input-1').value = '';
    document.getElementById('card-two-input-2').value = '';

    const cardTwoSum = parseFloat(cardTwoInputOne) * parseFloat(cardTwoInputTwo);

    cardValueId(CardTitleElement, cardTwoSum);
});

// Parallelogram Section

document.getElementById('card3-button').addEventListener('click', function () {

    serial = serial + 1;

    const CardTitleThree = document.getElementById('card-title-three').innerText;
    const cardThreeInputOne = document.getElementById('card-three-input-1').value;
    const cardThreeInputTwo = document.getElementById('card-three-input-2').value;

    document.getElementById('card-three-input-1').value = '';
    document.getElementById('card-three-input-2').value = '';

    const cardThreeSum = parseFloat(cardThreeInputOne) * parseFloat(cardThreeInputTwo);

    cardValueId(CardTitleThree, cardThreeSum);
});

// Rhombus Section

document.getElementById('card4-button').addEventListener('click', function () {

    serial = serial + 1;

    const CardTitleFour = document.getElementById('card-title-four').innerText;
    const cardInnerValue = document.getElementById('card-inner-value').innerText;
    const cardFourInputOne = document.getElementById('card-four-input-1').value;
    const cardFourInputTwo = document.getElementById('card-four-input-2').value;

    document.getElementById('card-four-input-1').value = '';
    document.getElementById('card-four-input-2').value = '';

    const cardFourSum = parseFloat(cardFourInputOne) * parseFloat(cardFourInputTwo);
    const totalSum = cardFourSum * parseFloat(cardInnerValue);

    cardValueId(CardTitleFour, totalSum);
});

// Pentagon Section

document.getElementById('card5-button').addEventListener('click', function () {

    serial = serial + 1;

    const CardTitleFive = document.getElementById('card-title-five').innerText;
    const cardFiveInnerValue = document.getElementById('card-five-inner-value').innerText;
    const cardFiveInputOne = document.getElementById('card-five-input-1').value;
    const cardFiveInputTwo = document.getElementById('card-five-input-2').value;

    document.getElementById('card-five-input-1').value = '';
    document.getElementById('card-five-input-2').value = '';

    const cardFiveSum = parseFloat(cardFiveInnerValue) * parseFloat(cardFiveInputOne) * parseFloat(cardFiveInputTwo);
    // const totalSum = cardFourSum * parseFloat(cardFiveInputTwo);

    cardValueId(CardTitleFive, cardFiveSum);
});

// Ellipse Section

document.getElementById('card6-button').addEventListener('click', function () {

    serial = serial + 1;

    const CardTitleSix = document.getElementById('card-title-six').innerText;
    const CardPi = 3.14159265359;
    const cardSixInputOne = document.getElementById('card-six-input-1').value;
    const cardSixInputTwo = document.getElementById('card-six-input-2').value;

    document.getElementById('card-six-input-1').value = '';
    document.getElementById('card-six-input-2').value = '';

    const cardSixSum = CardPi * parseFloat(cardSixInputOne) * parseFloat(cardSixInputTwo);
    const totalSixSum = cardSixSum.toFixed(2);

    cardValueId(CardTitleSix, totalSixSum);
});


// Block JS Link
document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = 'blog.html';
});

