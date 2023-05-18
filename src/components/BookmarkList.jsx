import Item from "./Item";
import Error from "./ui/Error";
import styles from "./BookmarkList.module.css";
import { useState } from "react";

function BookmarkList({ bookmarkState, setBookmarkState }) {
  const ITEMS_PER_DIV = 4;
  const checkIsBookmarked = (item) => {
    if (bookmarkState) {
      return bookmarkState.some((i) => i.id === item.id);
    }
    return false;
  };
  return (
    <div className={styles.mainbox}>
      <h1 className={styles.title}>북마크 리스트</h1>
      <div className={styles.listWrapper}>
        {bookmarkState && bookmarkState.length !== 0 ? (
          bookmarkState
            .slice(0, ITEMS_PER_DIV)
            .map((item) => (
              <Item
                item={item}
                isBookmarked={checkIsBookmarked(item)}
                bookmarkState={bookmarkState}
                setBookmarkState={setBookmarkState}
              />
            ))
        ) : (
          <Error />
        )}
      </div>
    </div>
  );
}

export default BookmarkList;
