let shoppingList = ["milk", "fruits", "vegetables", "ice cream", "butter", "coffee", "sugar", "salt"];

// --- Function to add an item to shoppingList (commented out)
/*
function addItem(item) {
  shoppingList.push(item);
  console.log(`"${item}" has been added to your shopping list.`);
}
*/

// --- Updated addItem: only add if item is not already in the list
function addItem(item) {
  // Convert both the item and all list items to lowercase for case-insensitive comparison
  const lowerCaseItem = item.toLowerCase();
  const lowerCaseList = shoppingList.map(item => item.toLowerCase());
  if (!lowerCaseList.includes(lowerCaseItem)) {
    shoppingList.push(item);
    console.log(`"${item}" has been added to your shopping list.`);
  } else {
    console.log(`"${item}" is already in your shopping list.`);
  }
}

// --- Function to filter and search items by a search term (case-insensitive)
function filterItems(searchTerm) {
  const lowerCaseSearch = searchTerm.toLowerCase();
  const filteredItems = shoppingList.filter(item => item.toLowerCase().includes(lowerCaseSearch));
  return filteredItems;
}

// --- Function to remove the last item from shoppingList
function removeLastItem() {
  if (shoppingList.length === 0) {
    console.log("The shopping list is already empty.");
    return;
  }
  let removedItem = shoppingList.pop();
  console.log(`"${removedItem}" has been removed from your shopping list.`);
}

// --- Function to display all items in shoppingList
function displayList() {
  if (shoppingList.length === 0) {
    console.log("Your shopping list is empty.");
  } else {
    console.log("Shopping list items:");
    shoppingList.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }
}

// Example usage:
displayList();
addItem("eggs");
addItem("milk"); // Should not be added again
removeLastItem();
displayList();
console.log("Items containing 'ice':", filterItems("ice")); // Should return ["ice cream"]
