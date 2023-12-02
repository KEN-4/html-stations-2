function displayList() {
  const fruitsDiv = document.getElementById('fruits');

  const ulElement = document.createElement('ul');

  const pElements = fruitsDiv.getElementsByTagName('p');

  ulElement.innerHTML = '';

  for (let i = 0; i < pElements.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = pElements[i].textContent;
    ulElement.appendChild(listItem);
  }

  fruitsDiv.innerHTML = '';
  fruitsDiv.appendChild(ulElement);
}
