/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};

  transactions.forEach(transaction => {
    const { category, price } = transaction;
    console.log(category, price);
    if (categoryMap[category]) {
      categoryMap[category] += price;
      console.log(" if true block",categoryMap);
    } else {
      categoryMap[category] = price;
      console.log(categoryMap);
    }
  });

  const result = Object.keys(categoryMap).map(category => {
    return { category: category, totalSpent: categoryMap[category] };
  });

  return result;
}

const transactions = [
  { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
  { id: 2, timestamp: 1656076800001, price: 20, category: 'Food', itemName: 'Burger' },
  { id: 3, timestamp: 1656076800002, price: 15, category: 'Electronics', itemName: 'Headphones' },
  { id: 4, timestamp: 1656076800003, price: 5, category: 'Food', itemName: 'Fries' },
  { id: 5, timestamp: 1656076800004, price: 25, category: 'Electronics', itemName: 'Mouse' },
];

console.log(calculateTotalSpentByCategory(transactions));
module.exports = calculateTotalSpentByCategory;
