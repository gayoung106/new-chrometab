const newBookmarkForm = document.getElementById("bookmark-item-input-form");

let bookmarkList = [];
if (localStorage.getItem("bookmarkList")) {
  bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
} else {
  localStorage.setItem("bookmarkList", JSON.stringify(bookmarkList));
}

let isAddBtnClick = false;
newBookmarkForm.style.display = "none";

const newBookmarkToggle = () => {
  isAddBtnClick = !isAddBtnClick;
  isAddBtnClick
    ? (newBookmarkForm.style.display = "block")
    : (newBookmarkForm.style.display = "none");
};

document
  .getElementById("bookmark-item-add-btn")
  .addEventListener("click", newBookmarkToggle);
