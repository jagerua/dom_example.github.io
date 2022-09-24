let sidebarBtns = document.querySelectorAll('.btngroup');
let changeBg = document.querySelectorAll('.imgbg');
let infoTag = document.querySelector('.info');
let sidebarTag = document.querySelector('.sidebar');

const productInfo = [
  {
    id: "btn-01",
    imgSrc: "./assets/pngegg (27).png",
    h3: 'IPhones sucks',
    class: 'imgbg phone active'
  },
  {
    id: "btn-02",
    imgSrc: "./assets/ipad.png",
    h3: 'IPads sucks',
    class: 'imgbg tablet'
  },
  {
    id: "btn-03",
    imgSrc: "./assets/watch.png",
    h3: 'Samsung not sucks',
    class: 'imgbg watch'
  },
  {
    id: "btn-04",
    imgSrc: "./assets/Lenovo.png",
    h3: 'Lenovo not sucks',
    class: 'imgbg laptop'
  },
  {
    id: "btn-05",
    imgSrc: "./assets/pc.png",
    h3: 'Gaming PC',
    class: 'imgbg pc'
  },
  {
    id: "btn-06",
    imgSrc: "./assets/elec.png",
    h3: 'R2 - D2',
    class: 'imgbg electronics'
  }
];

let findArrItems = function (arr) {
  let itemsStr = '';
  for (let i = 0; i < arr.length; i++) {
    let oneObj = arr[i];
    // Передати сюди значення з обходу функції які лежать в базі данних
    itemsStr += `
      <div id="${oneObj.id}" class="${oneObj.class}">
        <img src="${oneObj.imgSrc}" alt="">
        <div class="img-title">
          <h3>${oneObj.h3}</h3>
        </div>
      </div>`;
  }
  return itemsStr;
}

const sideBtns = [
  {
    class: "btngroup push01 active",
    data: 'btn-01',
    title: 'Phone'
  },
  {
    class: "btngroup push02",
    data: 'btn-02',
    title: 'Tablet'
  },
  {
    class: "btngroup push03",
    data: 'btn-03',
    title: 'Watch'
  },
  {
    class: "btngroup push04",
    data: 'btn-04',
    title: 'Laptop'
  },
  {
    class: "btngroup push05",
    data: 'btn-05',
    title: 'PC'
  },
  {
    class: "btngroup push06",
    data: 'btn-06',
    title: 'Electronic'
  }
];

let generateBtns = function (arr) {
  let elStr = '';
  for(let i = 0; i < arr.length; i++) {
    let el = arr[i];
    elStr += `
    <div class="${el.class}" data-btn="${el.data}">${el.title}</div>`;
  }
  return elStr;
}

function init() {
  const items = findArrItems(productInfo);
  infoTag.insertAdjacentHTML('afterBegin', items);
  changeBg = document.querySelectorAll('.imgbg');

  const elements = generateBtns(sideBtns);
  sidebarTag.insertAdjacentHTML('afterBegin', elements);
  sidebarBtns = document.querySelectorAll('.btngroup');
}

init();


sidebarBtns.forEach(function (item) {
  
  item.addEventListener('click', function () {

    let currentBtn = this.dataset.btn;
    let currentImg = document.querySelector('#' + currentBtn);
    let activeBtn = document.getElementsByClassName('active');
    
    changeBg.forEach(function (item) {
      item.style.display = "none";
    });

    if (currentImg.style.display === "none") {
      currentImg.style.display = "block";
    }

    activeBtn[0].className = activeBtn[0].className.replace(" active", "");
  this.className += " active";
  });

});

