const unSelectedBtns = document.querySelectorAll('.unselected-btn');

// const itemHeading = document.querySelectorAll('.item-heading');

// const itemTitles = document.querySelectorAll('.item-title');

const progressNum = document.querySelector('.progress-num');

const progressBar = document.querySelector('.progress-bar');

const daviiBtn = document.querySelector('.davii-btn');

const alertsOpen = document.querySelector('.alert-open');

const sideBar = document.querySelector('.davii-collections-open');

const notificationBell = document.querySelector('.notification-bell-box');

const setUpBtn = document.querySelector('.setup-btn');

const storeItems = document.querySelector('.store-items-div');

let currentProgressNum = 0;

const progressBarWidth = progressBar.offsetWidth;

const itemProgressWidth = progressBarWidth / 5;

let currentProgressBar = 0;

let currentProgressBarPer = '';

const setUpClose = `<svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z" fill="#4A4A4A"/>
    </svg>
    `;
const setUpOpen = `<svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 15.0303 12.2803Z" fill="#4A4A4A"/>
    </svg>
    `;

daviiBtn.addEventListener('click', () => {
  sideBar.classList.toggle('hidden');
});

setUpBtn.addEventListener('click', (e) => {
  storeItems.classList.toggle('hidden');

  storeItems.classList.contains('hidden')
    ? (setUpBtn.innerHTML = setUpClose)
    : (setUpBtn.innerHTML = setUpOpen);
});

notificationBell.addEventListener('click', () => {
  alertsOpen.classList.toggle('hidden');
});

// const itemSelectedBtns = document.querySelectorAll('.item-selected-btn');
// const selectBtnsOpen = document.querySelectorAll('.select-btn-open');

itemSelectBtns.forEach((item) => {
  item.addEventListener('click', (e) => selectItem(e));

  // item.addEventListener('mouseover', (e) => {
  //   hoverItem(e);
  // });
  // item.addEventListener('mouseout', (e) => {
  //   removeHoverItem(e);
  // });
});

// itemTitles.forEach((item) => {
//   item.addEventListener('click', (e) => showItem(e) );
// });

function selectItem(e) {
  let id = '';
  let item = '';
  let svgDiv = '';

  if (e.target.nodeName.toLowerCase() === 'svg') {
    item = e.target;
    id = e.target.dataset.id;
    svgDiv = item.parentElement;
  } else {
    item = e.target.closest('svg');
    item ? (id = item.dataset.id) : '';
    svgDiv = item.parentElement;
  }

  if (id === item.dataset.id && svgDiv.classList.contains('svg-div')) {
    const transitionBtn = item.nextElementSibling;
    const newBtn = transitionBtn.nextElementSibling;
    const closedItem = svgDiv.parentElement;
    const openItem = closedItem.nextElementSibling;

    const originalBtnOpen =
      openItem.firstElementChild.firstElementChild.firstElementChild
        .firstElementChild.firstElementChild;
    console.log(originalBtnOpen);

    const transitionBtnOpen = originalBtnOpen.nextElementSibling;
    const newBtnOpen = transitionBtnOpen.nextElementSibling;

    item.classList.add('hidden');
    transitionBtn.classList.remove('hidden');
    originalBtnOpen.classList.add('hidden');
    transitionBtnOpen.classList.remove('hidden');
    openItem.classList.remove('hidden');

    eachItemOpen.forEach((itemOpenDiv) => {
      if (id !== itemOpenDiv.dataset.id) {
        itemOpenDiv.classList.add('hidden');
        const myItemHeading = itemOpenDiv.parentElement.previousElementSibling;

        myItemHeading.classList.remove('hidden');
      } else if (id === itemOpenDiv.dataset.id) {
        itemOpenDiv.classList.remove('hidden');

        const myItemHeading = itemOpenDiv.parentElement.previousElementSibling;

        myItemHeading.classList.add('hidden');
      }
    });

    setTimeout(function () {
      transitionBtn.classList.add('hidden');
      newBtn.classList.remove('hidden');
      transitionBtnOpen.classList.add('hidden');
      newBtnOpen.classList.remove('hidden');
    }, 300);

    currentProgressNum += 1;

    progressNum.innerHTML = currentProgressNum;

    currentProgressBar += parseFloat(itemProgressWidth);

    currentProgressBarPer = (currentProgressBar / progressBarWidth) * 100;

    progressBar.style.background = `linear-gradient(to right, #1A1A1A ${currentProgressBarPer}%, #E3E3E3 ${currentProgressBarPer}%)`;

    const newBtnClickHandler = (e) => {
      if (e.target.nodeName.toLowerCase() === 'svg') {
        item = e.target;
        id = e.target.dataset.id;
      } else {
        item = e.target.closest('svg');
        item ? (id = item.dataset.id) : '';
      }

      const originalBtn = item.previousElementSibling.previousElementSibling;

      item.classList.add('hidden');
      originalBtn.classList.remove('hidden');

      if (currentProgressNum > 0) {
        currentProgressNum--;
      }

      console.log('Current Progress:', currentProgressNum);
      progressNum.innerHTML = currentProgressNum;

      // Update the progress bar
      currentProgressBar -= parseFloat(itemProgressWidth);
      currentProgressBarPer = (currentProgressBar / progressBarWidth) * 100;
      progressBar.style.background = `linear-gradient(to right, #1A1A1A ${currentProgressBarPer}%, #E3E3E3 ${currentProgressBarPer}%)`;

      // Remove the event listener after it has been executed
      newBtn.removeEventListener('click', newBtnClickHandler);
    };

    newBtn.addEventListener('click', newBtnClickHandler);
  }
  // else if (id === item.dataset.id && svgDiv.classList.contains("svg-div-open")){

  // }
}

// function removeSelectedBtn(e) {
//   if (e.target.nodeName.toLowerCase() === 'svg') {
//     item = e.target;
//     id = e.target.dataset.id;
//     svgDiv = item.parentElement;
//   } else {
//     item = e.target.closest('svg');
//     item ? (id = item.dataset.id) : '';
//     svgDiv = item.parentElement;
//   }

//   if (svgDiv.classList.contains('svg-div-open')) {
//     const selectedBtnOpen = item;
//     const originalBtnOpen =
//       selectedBtnOpen.previousElementSibling.previousElementSibling;

//     const selectedBtn =
//       selectedBtnOpen.parentElement.parentElement.parentElement.parentElement
//         .parentElement.previousElementSibling.firstElementChild
//         .lastElementChild;

//     const originalBtn =
//       selectedBtn.previousElementSibling.previousElementSibling;

//     selectedBtnOpen.classList.add('hidden');
//     originalBtnOpen.classList.remove('hidden');
//     selectedBtn.classList.add('hidden');
//     originalBtn.classList.remove('hidden');

//     if (currentProgressNum > 0) {
//       currentProgressNum--;
//     }

//     console.log('Current Progress:', currentProgressNum);
//     progressNum.innerHTML = currentProgressNum;

//     // Update the progress bar
//     currentProgressBar -= parseFloat(itemProgressWidth);
//     currentProgressBarPer = (currentProgressBar / progressBarWidth) * 100;
//     progressBar.style.background = `linear-gradient(to right, #1A1A1A ${currentProgressBarPer}%, #E3E3E3 ${currentProgressBarPer}%)`;
//   }
// }

function selectItemOpen(e) {
  if (e.target.nodeName.toLowerCase() === 'svg') {
    item = e.target;
    id = e.target.dataset.id;
    svgDiv = item.parentElement;
  } else {
    item = e.target.closest('svg');
    item ? (id = item.dataset.id) : '';
    svgDiv = item.parentElement;
  }

  if (svgDiv.classList.contains('svg-div-open')) {
    const originalBtnOpen = item;
    const transitionBtnOpen = originalBtnOpen.nextElementSibling;
    const selectedBtnOpen =
      originalBtnOpen.nextElementSibling.nextElementSibling;

    const originalBtn =
      originalBtnOpen.parentElement.parentElement.parentElement.parentElement
        .parentElement.previousElementSibling.firstElementChild
        .firstElementChild;
    const transitionBtn = originalBtn.nextElementSibling;
    const selectedBtn = originalBtn.nextElementSibling.nextElementSibling;

    transitionBtnOpen.classList.remove('hidden');
    originalBtnOpen.classList.add('hidden');
    transitionBtn.classList.remove('hidden');
    originalBtn.classList.add('hidden');

    setTimeout(function () {
      transitionBtnOpen.classList.add('hidden');
      transitionBtn.classList.add('hidden');

      selectedBtn.classList.remove('hidden');
      selectedBtnOpen.classList.remove('hidden');
    }, 300);

    if (currentProgressNum < 5) {
      currentProgressNum++;
    }

    console.log('Current Progress:', currentProgressNum);
    progressNum.innerHTML = currentProgressNum;

    // Update the progress bar
    currentProgressBar -= parseFloat(itemProgressWidth);
    currentProgressBarPer = (currentProgressBar / progressBarWidth) * 100;
    progressBar.style.background = `linear-gradient(to right, #1A1A1A ${currentProgressBarPer}%, #E3E3E3 ${currentProgressBarPer}%)`;
  }
}
// elseif(id !== item.dataset.id && ){

// }

function hoverItem(e) {
  const id = e.target.dataset.id;
  itemSelectBtns.forEach((item) => {
    const id = e.target.dataset.id;
    let selectedBtn = item;

    const className = selectedBtn.getAttribute('class');

    if (id === item.dataset.id && className === 'selected-btn') {
      selectedBtn.innerHTML = newSVG;
    } else if (id === item.dataset.id && className === 'item-select-btn') {
      selectedBtn.innerHTML = hoverSVG;
    }
  });
}

function removeHoverItem(e) {
  const id = e.target.dataset.id;
  itemSelectBtns.forEach((item) => {
    const id = e.target.dataset.id;
    let selectedBtn = item;
    const className = selectedBtn.getAttribute('class');

    if (id === item.dataset.id && className === 'item-select-btn') {
      let selectedBtn = item;
      selectedBtn.innerHTML = originalSVG;
    }
  });
}

// function showItem(e) {

//   const id = e.target.dataset.id;

//   itemTitles.forEach((item) => {
//     console.log(e);

//     item = e.target;

//     const itemParent = item.parentElement;

//     const openItem = itemParent.nextElementSibling;

//     if (id === item.dataset.id) {
//       console.log(e.target);
//       itemParent.classList.add('hidden');
//       openItem.classList.remove('hidden');
//     } else if (id !== item.dataset.id) {
//       console.log(e.target);
//       console.log(openItem);
//       openItem.classList.add('hidden');
//       itemParent.classList.remove('hidden');
//     }
//   });
// }

// function showItem(e) {
//   const id = e.target.dataset.id;
//   itemTitles.forEach((item) => {
//     // console.log(item)
//     const itemParent = item.parentElement;
//     const openItem = itemParent.nextElementSibling;
//     if (id === item.dataset.id) {
//       console.log(id);
//       openItem.classList.remove('hidden');
//       itemParent.classList.add('hidden');
//     } else if (id !== item.dataset.id) {
//       openItem.classList.add('hidden');
//       itemParent.classList.remove('hidden');
//     }
//   });
// }
