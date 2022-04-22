// https://chrissmith.xyz/lightning-fast-filtering-in-javascript/
// https://codepen.io/chris22smith/pen/mXeMGL?editors=1010
console.clear();

(function() {

var list = [],
    filteredList = [],
    maxDisplayLimit = 10,
    textInput = document.querySelector('.text-filter'),
    displayList = document.querySelector('.list'),
    countMessage = document.querySelector('.count-message');

function generateDummyList(itemCount) {
  if (!itemCount) return;
  for (var i = 0; i < itemCount; i++) {
    var item = {
      name: Math.random().toString(36).substr(2, 10),
      type: Math.random().toString(36).substr(2, 10),
      category: Math.random().toString(36).substr(2, 10)
    };
    list.push(item);
  }
}

function generateCountMessage() {
  var msg = '',
      matches = filteredList.length;
  switch (true) {
    case (matches === 0):
      msg = 'No matches found';
      break;
    case (matches === 1):
      msg = 'Showing 1 item';
      break;
    case (matches <= maxDisplayLimit):
      msg = 'Showing ' + filteredList.length + ' items';
      break;
    default:
      msg = 'Showing ' + maxDisplayLimit + ' of ' + matches + ' items';
  }
  countMessage.textContent = msg;
}
  
function generateListItem(item) {
    var li = document.createElement('list-item'),
        spanName = document.createElement('span'),
        spanType = document.createElement('span'),
        spanCategory = document.createElement('span');
      spanName.classList.add('name');
      spanType.classList.add('type');
      spanCategory.classList.add('category');
      spanName.textContent = item.name;
      spanType.textContent = item.type;
      spanCategory.textContent = item.category;
      li.appendChild(spanName);
      li.appendChild(spanType);
      li.appendChild(spanCategory); 
  return li;
}

function generateList() {
  var frag = document.createDocumentFragment();
  for (var i = 0; i < filteredList.length; i++) {
    if (i < maxDisplayLimit) {
      var item = filteredList[i],
          li = generateListItem(item);
      frag.appendChild(li);
    }
    else break;
  }
  displayList.innerHTML = '';
  displayList.appendChild(frag);
  generateCountMessage();
}

function textMatch(item) {
  var searchTerm = textInput.value.toLowerCase(),
      itemText = (item.name + item.type + item.category).toLowerCase();
  return itemText.indexOf(searchTerm) !== -1;
}

function getFilteredItems() {
  filteredList = list.filter(textMatch);
  generateList();
}

textInput.addEventListener('keyup', getFilteredItems);

generateDummyList(100000);
getFilteredItems();

})();
