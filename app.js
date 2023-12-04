const unSelectedBtns = document.querySelectorAll('.unselected-btn');

const storeItemsOpen = document.querySelectorAll('.store-item-open ');

const storeItemDiv = document.querySelectorAll('.store-item-div');

const storeItemTitles = document.querySelectorAll('.store-item-p');

const progressNum = document.querySelector('.progress-num');

const progressBar = document.querySelector('.progress-bar');

const daviiBtn = document.querySelector('.davii-btn');

const dcLogo = document.querySelector('.dc-logo-small');

const alertsOpen = document.querySelector('.alert-open');

const sideBar = document.querySelector('.davii-collections-open');

const notificationBell = document.querySelector('.notification-bell-box');

const setUpOpen = document.querySelector('.setup-open');

const setUpClose = document.querySelector('.setup-close');

const storeItems = document.querySelector('.store-items-div');

const planSection = document.querySelector('.plan-section');

const exitPlanTrial = document.querySelector('.exit-trial');

let currentProgressNum = 0;

const progressBarWidth = progressBar.offsetWidth;

const itemProgressWidth = progressBarWidth / 5;

let currentProgressBar = 0;

let currentProgressBarPer = '';


// event listeners


// this handles the opening and closing of the menu on desktop view
daviiBtn.addEventListener('click', () => {
  sideBar.classList.toggle('hidden');
});

// this handles the opening and closing of the menu on a mobile screen
dcLogo.addEventListener('click', () => {
  sideBar.classList.toggle('hidden');
});

// this handles the closing of the trial plan
exitPlanTrial.addEventListener("click", () => {
  planSection.classList.add("hidden")
} )

// this handles the opening and closing of the store items
setUpOpen.addEventListener('click', (e) => {
  storeItems.classList.add('hidden');
  setUpClose.classList.remove('hidden');
  setUpOpen.classList.add('hidden');

  setUpClose.addEventListener('click', (e) => {
    storeItems.classList.remove('hidden');
    setUpClose.classList.add('hidden');
    setUpOpen.classList.remove('hidden');
  });
});

// this handles the opening and closing of the notification section
notificationBell.addEventListener('click', () => {
  alertsOpen.classList.toggle('hidden');
});


// selectItem function is called here
unSelectedBtns.forEach((item) => {
  item.addEventListener('click', (e) => selectItem(e));
});

// the showItem function is called here
storeItemTitles.forEach((eachStoreTitle) => {
  eachStoreTitle.addEventListener('click', (e) => showItem(e));
});


// functions

// this is to select items, update the number of items selected and update the progress bar
function selectItem(e) {
  let id = '';
  let unSelectedBtn = '';

  if (e.target.nodeName.toLowerCase() === 'svg') {
    unSelectedBtn = e.target;
    id = e.target.dataset.id;
  } else {
    unSelectedBtn = e.target.closest('svg');
    unSelectedBtn ? (id = unSelectedBtn.dataset.id) : '';
  }

  if (id === unSelectedBtn.dataset.id) {
    const transitionBtn = unSelectedBtn.nextElementSibling;
    let selectedBtn = transitionBtn.nextElementSibling;

    const storeItemDiv =
      unSelectedBtn.parentElement.parentElement.parentElement;

    const openStore =
      unSelectedBtn.parentElement.parentElement.nextElementSibling;

    unSelectedBtn.classList.add('hidden');
    transitionBtn.classList.remove('hidden');
    transitionBtn.style.transform = 'rotate(180deg)';

    setTimeout(function () {
      transitionBtn.classList.add('hidden');
      selectedBtn.classList.remove('hidden');
    }, 200);

    setTimeout(function () {
      openStore.classList.remove('hidden');
      storeItemDiv.style.background = '#F3F3F3';
    }, 400);

    currentProgressNum += 1;

    progressNum.innerHTML = currentProgressNum;

    currentProgressBar += parseFloat(itemProgressWidth);

    currentProgressBarPer = (currentProgressBar / progressBarWidth) * 100;

    progressBar.style.background = `linear-gradient(to right, #1A1A1A ${currentProgressBarPer}%, #E3E3E3 ${currentProgressBarPer}%)`;


    // this handles the unselection of a store item
    const selectedBtnClickHandler = (e) => {

      // this makes sure we are selecting the svg element and not the circle element
      if (e.target.nodeName.toLowerCase() === 'svg') {
        selectedBtn = e.target;
        id = e.target.dataset.id;
      } else {
        selectedBtn = e.target.closest('svg');
        selectedBtn ? (id = selectedBtn.dataset.id) : '';
      }

      const unSelectedBtn =
        selectedBtn.previousElementSibling.previousElementSibling;
      const transitionBtn = selectedBtn.previousElementSibling;

      selectedBtn.classList.add('hidden');
      unSelectedBtn.classList.remove('hidden');

      if (currentProgressNum > 0) {
        currentProgressNum--;
      }

      progressNum.innerHTML = currentProgressNum;

      // this updates the progress bar when an item is unselected
      currentProgressBar -= parseFloat(itemProgressWidth);
      currentProgressBarPer = (currentProgressBar / progressBarWidth) * 100;
      progressBar.style.background = `linear-gradient(to right, #1A1A1A ${currentProgressBarPer}%, #E3E3E3 ${currentProgressBarPer}%)`;
      


      selectedBtn.removeEventListener('click', selectedBtnClickHandler);
    };

    selectedBtn.addEventListener('click', selectedBtnClickHandler);
  }

  storeItemsOpen.forEach((eachStoreItem) => {
    if (id !== eachStoreItem.dataset.id) {
      eachStoreItem.classList.add('hidden');
    }
  });

  storeItemDiv.forEach((eachStoreItem) => {
    if (id !== eachStoreItem.dataset.id) {
      eachStoreItem.style.background = 'white';
    }
  });
}

// this is to open an item without clicking it
function showItem(e) {
  const id = e.target.dataset.id;
  const storeItemTitle = e.target;
  const storeItemOpen = storeItemTitle.parentElement.nextElementSibling;
  const storeItemDiv = storeItemOpen.parentElement;

  storeItemOpen.classList.remove('hidden');

  storeItemDiv.style.background = '#F3F3F3';

  storeItemTitles.forEach((eachStoreTitle) => {
    if (id !== eachStoreTitle.dataset.id) {
      const storeItemOpen = eachStoreTitle.parentElement.nextElementSibling;
      const storeItemDiv = storeItemOpen.parentElement;

      storeItemOpen.classList.add('hidden');
      storeItemDiv.style.background = 'white';
    }
  });
}
