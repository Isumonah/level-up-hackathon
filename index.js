const itemSelectBtns = document.querySelectorAll('.item-select-btn');

let allSelectedBtns = '';

const itemTitles = document.querySelectorAll('.item-title');

const progressNum = document.querySelector('.progress-num');

const progressBar = document.querySelector('.progress-bar');

const daviiBtn = document.querySelector('.davii-btn');

const alertsOpen = document.querySelector('.alert-open');

const sideBar = document.querySelector('.davii-collections-open');

const notificationBell = document.querySelector('.notification-bell-box');

daviiBtn.addEventListener('click', () => {
  sideBar.classList.toggle('hidden');
});

const setUpBtn = document.querySelector('.setup-btn');

console.log(setUpBtn);

const storeItems = document.querySelector('.store-items-div');

setUpBtn.addEventListener('click', (e) => {
  storeItems.classList.toggle('hidden');

  storeItems.classList.contains('hidden')
    ? (setUpBtn.innerHTML = setUpClose)
    : (setUpBtn.innerHTML = setUpOpen);
});

notificationBell.addEventListener('click', () => {
  alertsOpen.classList.toggle('hidden');
});

const transitionSVG = `<svg width="26" height="26" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none">
    <path
      d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
      stroke="#303030"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`;

const newSVG = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
      d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
      fill="#fff"
    ></path>
  </svg>`;

const hoverSVG = ` <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  data-id="1"
                  class="item-select-btn"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="12"
                    stroke="#949494"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>`;

const originalSVG = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  data-id="1"
                  class="item-select-btn"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="12"
                    stroke="#949494"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-dasharray="4 6"
                  />
                </svg>`;

const setUpClose = `<svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z" fill="#4A4A4A"/>
    </svg>
    `;
const setUpOpen = `<svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 15.0303 12.2803Z" fill="#4A4A4A"/>
    </svg>
    `;

itemSelectBtns.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.stopPropagation;
    selectItem(e);

    allSelectedBtns = document.querySelectorAll('.selected-btn');

    const id = e.target.dataset.id;

    
  });

  item.addEventListener('mouseover', (e) => {
    hoverItem(e);
  });
  item.addEventListener('mouseout', (e) => {
    removeHoverItem(e);
  });
});

itemTitles.forEach((item) => {
  item.addEventListener('click', (e) => showItem(e));
});

function hoverItem(e) {
  const id = e.target.dataset.id;
  selectedBtns.forEach((eachSelectedBtn) => {
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

function selectItem(e) {
  itemSelectBtns.forEach((item) => {
    const id = e.target.dataset.id;

    if (id === item.dataset.id) {
      const transitionBtn = item.nextElementSibling;
      const newBtn = transitionBtn.nextElementSibling;
      console.log(item);

      let currentProgressNum = 0;

      const progressBarWidth = progressBar.offsetWidth;

      const itemProgressWidth = progressBarWidth / 5;

      let currentProgressBar = 0;

      let currentProgressBarPer = '';

      item.classList.add('hidden');
      transitionBtn.classList.remove('hidden');

      setTimeout(function () {
        transitionBtn.classList.add('hidden');
        newBtn.classList.remove('hidden');
      }, 500);

      currentProgressNum < 5 ? currentProgressNum++ : currentProgressNum;
      progressNum.innerHTML = currentProgressNum;

      currentProgressBar += parseFloat(itemProgressWidth);

      console.log(currentProgressBarPer);

      currentProgressBarPer = (currentProgressBar / progressBarWidth) * 100;

      progressBar.style.background = `linear-gradient(to right, #1A1A1A ${currentProgressBarPer}%, #E3E3E3 ${currentProgressBarPer}%)`;

      newBtn.addEventListener('click', (e) => {
        item.classList.remove('hidden');
        newBtn.classList.add('hidden');

        currentProgressNum > 0 ? currentProgressNum-- : currentProgressNum;
        progressNum.innerHTML = currentProgressNum;

        currentProgressBar -= parseFloat(itemProgressWidth);

        console.log(currentProgressBarPer);

        currentProgressBarPer = (currentProgressBar / progressBarWidth) * 100;

        progressBar.style.background = `linear-gradient(to right, #1A1A1A ${currentProgressBarPer}%, #E3E3E3 ${currentProgressBarPer}%)`;
      });
    }

    // if (id !== item.dataset.id) {
    //   const itemHeading = item.parentElement.parentElement;
    //   const itemOpen = itemHeading.nextElementSibling;

    //   itemHeading.classList.remove('hidden');
    //   itemOpen.classList.add('hidden');

    //   // console.log('false');
    //   // return currentProgressNum;
    // }

    // if (id === item.dataset.id) {
    //   console.log(item);

    //   let selectedBtn = item;

    //   currentProgressNum < 5 ? currentProgressNum++ : currentProgressNum;

    //   progressNum.innerHTML = currentProgressNum;

    //   currentProgressBar += parseFloat(itemProgressWidth);

    //   currentProgressBarPer = (currentProgressBar / progressBarWidth) * 100;

    //   progressBar.style.background = `linear-gradient(to right, #1A1A1A ${currentProgressBarPer}%, #E3E3E3 ${currentProgressBarPer}%)`;

    //   const itemHeading = selectedBtn.parentElement.parentElement;

    //   const itemOpen = itemHeading.nextElementSibling;

    //   let selectedItemOpenBtn =
    //     itemOpen.firstElementChild.firstElementChild.firstElementChild
    //       .firstElementChild.firstElementChild;

    //   selectedItemOpenBtn.classList.add('selected-btn', 'selected-btn-open');

    //   selectedBtn.innerHTML = transitionSVG;
    //   selectedItemOpenBtn.innerHTML = transitionSVG;

    //   setTimeout(function () {
    //     selectedBtn.innerHTML = newSVG;

    //     selectedBtn.classList.add('selected-btn', 'selected-btn-heading');

    //     itemHeading.classList.add('hidden');
    //     itemOpen.classList.remove('hidden');
    //     selectedItemOpenBtn.innerHTML = newSVG;
    //   }, 200);

    //   itemHeading.classList.add('hidden');
    //   itemOpen.classList.remove('hidden');
    // }
  });
}

// function showItem(e) {
//   const id = e.target.dataset.id;
//   itemTitles.forEach((item) => {
//     const itemParent = item.parentElement;
//     const openItem = itemParent.nextElementSibling;
//     if (id === item.dataset.id) {
//     //   openItem.classList.toggle('show');
//       openItem.classList.toggle('hidden');
//       itemParent.classList.toggle('hidden');
//     } else if (id !== item.dataset.id) {
//       openItem.classList.toggle('hidden');
//       itemParent.classList.togggle('hidden');
//     }
//   });
// }
