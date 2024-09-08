const getStoredWishList = () => {
  const storedWishList = localStorage.getItem("wish-list");
  if (storedWishList) {
    return JSON.parse(storedWishList);
  }
  return [];
};
const saveWishList = (id) => {
  const storedWishList = getStoredWishList();
  const exist = storedWishList.find((bookId) => bookId == id);
  if (!exist) {
    storedWishList.push(id);
    localStorage.setItem("wish-list", JSON.stringify(storedWishList));
  }
};
const getStoredReadingList = () => {
  const storedReadingList = localStorage.getItem("reading-list");
  if (storedReadingList) {
    return JSON.parse(storedReadingList);
  }
  return [];
};

const saveReadingList = (id) => {
  const storedReadingList = getStoredReadingList();
  const exist = storedReadingList.find((bookId) => bookId == id);
  if (!exist) {
    storedReadingList.push(id);
    localStorage.setItem("reading-list", JSON.stringify(storedReadingList));
  }
};
export {
  saveWishList,
  getStoredWishList,
  saveReadingList,
  getStoredReadingList,
};
