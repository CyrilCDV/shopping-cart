const items = ["Book", "Car", "House", "Computer"];

let index = 0;

export const getNextItem = () => {
  const item = `${items[index % items.length]} ${index + 1}`;
  index++;
  return new Promise((resolve) => {
    setTimeout(() => resolve(item), 3000);
  });
};
