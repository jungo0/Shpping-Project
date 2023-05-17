import Header from "./components/Header";
import Mainpage from "./pages/Mainpage";
import BookmarkListPage from "./pages/BookmarkListPage";
import Dropdown from "./components/Dropdown";
import ProductListPage from "./pages/ProductListPage";
import Footer from "./components/Footer";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const bookmark = JSON.parse(localStorage.getItem("bookmark"));
  const [bookmarks, setBookmarkState] = useState(bookmark);
  return (
    <>
      <BrowserRouter>
        <Header setShowDropdown={setShowDropdown} showDropdown={showDropdown} />
        {showDropdown && (
          <Dropdown
            setShowDropdown={setShowDropdown}
            showDropdown={showDropdown}
          />
        )}
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Mainpage
                  bookmarks={bookmarks}
                  setBookmarkState={setBookmarkState}
                />
              }
            />
            <Route
              path="/products/list"
              element={
                <ProductListPage
                  bookmarks={bookmarks}
                  setBookmarkState={setBookmarkState}
                />
              }
            />
            <Route
              path="/bookmark"
              element={
                <BookmarkListPage
                  bookmarks={bookmarks}
                  setBookmarkState={setBookmarkState}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;