// -------------------- Task 1 -------------------- //

let shoppingList = ["milk", "fruits", "vegetables", "ice cream", "butter", "coffee", "sugar", "salt"];

// --- Function to add an item to shoppingList
function addItem(item) {
  shoppingList.push(item);
  console.log(`"${item}" has been added to your shopping list.`);
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


displayList();
addItem("eggs");
removeLastItem();
displayList();



// -------------------- Task 1 -------------------- //