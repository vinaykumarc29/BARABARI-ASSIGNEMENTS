const form = document.querySelector("#bookmarkForm");
const websiteTitle = document.querySelector("#websiteTitle");
const websiteUrl = document.querySelector("#websiteUrl");
const websiteCategory = document.querySelector("#category");

const bookmarkList = document.querySelector("#bookmarksList");
const filterBtns = document.querySelectorAll(".filter-btn");

let bookmarks =  JSON.parse(localStorage.getItem('bookmarks')) || [];

// func to delete bookmark

const deleteBookmark = (id) => {
  bookmarks = bookmarks.filter((book) => book.id != id);
  saveBookmarks();
  renderBookmarks();
};

// filters bookmarks based on category

const filterBookmarks = (category) => {
  console.log(category, "recived ");
  let filteredBooks = bookmarks.filter((book) => book.category == category);
  console.log(filteredBooks);
  renderBookmarks(filteredBooks);
};

//func to render bookmarks

const renderBookmarks = (filteredBookmarks = bookmarks) => {
  // console.log(filteredBookmarks.length)
  if (filteredBookmarks.length == 0) {
    bookmarkList.innerText = "No Bookmarks Found !!";
    return;
  }
  console.log(filteredBookmarks);
  // console.log(`rendering func called !!`);
  bookmarkList.innerHTML = ``;

  filteredBookmarks.forEach((bookmark) => {
    let bookmarkItem = document.createElement("div");
    // bookmarkItem.class = '.bookmark-item';
    bookmarkItem.classList.add("bookmark-item");

    let bookmarkInfo = document.createElement("div");
    bookmarkInfo.classList.add("bookmark-info");

    let title = document.createElement("h3");
    title.innerText = bookmark.title;

    let link = document.createElement("a");
    link.classList.add("bookmark-link");
    link.href = bookmark.url;
    link.target = "_blank";
    link.innerText = bookmark.url;

    let category = document.createElement("div");
    category.classList.add("bookmark-category");
    category.innerText = bookmark.category;

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", () => deleteBookmark(bookmark.id));

    bookmarkInfo.appendChild(title);
    bookmarkInfo.appendChild(link);
    bookmarkInfo.appendChild(category);

    bookmarkItem.appendChild(bookmarkInfo);
    bookmarkItem.appendChild(deleteBtn);

    bookmarkList.appendChild(bookmarkItem);
  });
};

//fucn to save bookmarks to local storage 

const saveBookmarks = ()=>{
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
}


//func to add bookmark

const addBookMark = () => {
  let book = {
    id: Math.floor(Math.random() * 3000 + 1000),
    title: websiteTitle.value,
    url: websiteUrl.value,
    category: websiteCategory.value,
  };
  bookmarks.push(book);
  saveBookmarks();
  renderBookmarks();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (websiteTitle.value === "" || websiteUrl ==="") {
    alert("fill all the details properly!!");
    return;
  }

  addBookMark();
  form.reset()
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    filterBtns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
    if (btn.getAttribute("data-category") === "All") {
      renderBookmarks();
      return;
    }

    filterBookmarks(btn.getAttribute("data-category"));
  });
});

renderBookmarks();
