import BookmarkList from "../components/BookmarkList";
import ProductList from "../components/Productlist";
import { useState } from "react";

function Mainpage() {
  const bookmark = JSON.parse(localStorage.getItem("bookmark"));
  const [bookmarkState, setBookmarkState] = useState(bookmark);

  return (
    <div>
      <ProductList
        bookmarkState={bookmarkState}
        setBookmarkState={setBookmarkState}
      />
      <BookmarkList
        bookmarkState={bookmarkState}
        setBookmarkState={setBookmarkState}
      />
    </div>
  );
}
export default Mainpage;