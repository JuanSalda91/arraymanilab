let shoppingList = [];

// --- Step 2: Write a function called addItem that takes an item and adds it to shoppingList
// function addItem(item) {
//   shoppingList.push(item); // push() adds the item to the end of the array
// }

// --- Modify addItem to only add if item is NOT already in the list
function addItem(item) {
  // Check if item already exists in shoppingList (case sensitive)
  if (!shoppingList.includes(item)) {
    shoppingList.push(item);
  } else {
    console.log(item + " is already in the list.");
  }
}

// --- Write filterItems function that returns the items containing a search term (case-insensitive)
function filterItems(searchTerm) {
  let filtered = [];
  let lowerSearchTerm = searchTerm.toLowerCase(); // --- Make search term lowercase so search is case-insensitive

  for (let i = 0; i < shoppingList.length; i++) {
    let item = shoppingList[i].toLowerCase(); // --- Convert item to lowercase
    if (item.includes(lowerSearchTerm)) {
      filtered.push(shoppingList[i]); // --- Add original item (not lowercase) to filtered array
    }
  }

  return filtered;
}

// --- Step 3: Write a function called removeLastItem that removes the last item from shoppingList
function removeLastItem() {
  shoppingList.pop(); // --- pop() removes the last item from the array
}

// --- Step 4: Write a function called displayList that logs all the items in shoppingList
function displayList() {
  console.log("Shopping List:");
  // --- Loop through each item and log it
  for (let i = 0; i < shoppingList.length; i++) {
    console.log(shoppingList[i]);
  }
}

addItem("milk");
addItem("fruits");
addItem("Milk"); //--- Different case, allowed in this implementation

displayList();


console.log(filterItems("mi")); //--- ["milk", "Milk"]
removeLastItem();
displayList();

//--- Function to update displayed list on page
    function updateDisplay() {
      const listElement = document.getElementById('shoppingListDisplay');
      listElement.innerHTML = ''; // Clear existing list items

      for (let i = 0; i < shoppingList.length; i++) {
        const li = document.createElement('li');
        li.textContent = shoppingList[i];
        listElement.appendChild(li);
      }
    }

    //--- Add click event for Add Item button
    document.getElementById('addItemBtn').addEventListener('click', () => {
      const input = document.getElementById('itemInput');
      const item = input.value.trim();
      if (item) {
        addItem(item);     // existing function in arrays.js
        updateDisplay();   // update the UI list
        input.value = '';  // clear input box
        input.focus();
      }
    });

    //--- Add click event for Remove Last Item button
    document.getElementById('removeLastItemBtn').addEventListener('click', () => {
      removeLastItem();   // existing function in arrays.js
      updateDisplay();    // update the UI list
    });

    //--- Initial display update on page load
    document.addEventListener('DOMContentLoaded', () => {
      updateDisplay();
    });

