import Categories from "../components/Categories";
import Error from "../components/ui/Error";
import Item from "../components/Item";
import styles from "./ProductListPage.module.css";
import { useState, useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BookmarkListPage({ bookmarkState, setBookmarkState }) {
  const [currentType, setCurrentType] = useState("all");
  const [display, setDisplayData] = useState([]);
  const ITEMS_PER_PAGE = 12;
  const obvRef = useRef(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false); 
  const preventRef = useRef(true);
  /* 북마크된 요소 확인*/
  const checkIsBookmarked = (item) => {
    if (bookmarkState) {
      return bookmarkState.some((x) => x.id === item.id);
    }
    return false;
  };
  /* 화면에 표시할 데이터 업데이트 */
  const updateDisplayData = (start, end) => {
    setDisplayData(
      bookmarkState
        .filter((item) =>
          currentType === "all" ? true : item.type === currentType
        )
        .slice(start, end)
    );
  };
  /* 첫 렌더시 옵저버 생성 */
  useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, {
      threshold: 1.0,
    });
    if (obvRef.current) observer.observe(obvRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);
  /* 옵저버 콜백함수 */
  const obsHandler = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && preventRef.current) {
      preventRef.current = false; //옵저버 중복 실행 방지
      setPage((prev) => prev + 1); //페이지 값 증가
    }
  };
  /* 북마크 삭제 시 보여줄 데이터를 재설정 */
  useEffect(() => {
    updateDisplayData(0, page * ITEMS_PER_PAGE);
  }, [bookmarkState]);
  /* 타입 변경 시 보여줄 데이터를 재설정, 페이지 초기화 */
  useEffect(() => {
    updateDisplayData(0, ITEMS_PER_PAGE);
    setPage(1);
  }, [currentType]);

  /* 페이지 변경 시 데이터 재설정 */
  useEffect(() => {
    if (page !== 1 && !isLoading) getPost();
  }, [page]);

  let timer = null;
  const getPost = () => {
    setIsLoading(true);
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      setDisplayData((prev) => [
        ...prev,
        ...bookmarkState
          .filter((item) =>
            currentType === "all" ? true : item.type === currentType
          )
          .slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE),
      ]);
      preventRef.current = true;
      setIsLoading(false);
    }, 500);
  };
  return (
    <div className={styles.mainbox}>
      <ToastContainer
        position="bottom-right"
        limit={3}
        closeButton={true}
        autoClose={3000}
      />
      <Categories currentType={currentType} setCurrentType={setCurrentType} />
      <>
        {" "}
        <div className={styles.itemBox}>
          {bookmarkState && bookmarkState.length !== 0 ? (
            display.map((item) => (
              <Item
                key={item.id_ + "_"}
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
        {isLoading && (
          <div className={styles.ldsring}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        <div ref={obvRef}></div>
      </>
    </div>
  );
}

export default BookmarkListPage;