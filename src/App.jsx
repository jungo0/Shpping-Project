import Header from "./pages/Header";
import Mainpage from "./pages/Mainpage";
import BookmarkListPage from "./components/BookmarkListPage";
import Dropdown from "./components/Dropdown";
import ProductListPage from "./pages/ProductListPage";
import Footer from "./components/Footer";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const bookmark = JSON.parse(localStorage.getItem("bookmark"));
  const [bookmarkState, setBookmarkState] = useState(bookmark);
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
                  bookmarkState={bookmarkState}
                  setBookmarkState={setBookmarkState}
                />
              }
            />
            <Route
              path="/products/list"
              element={
                <ProductListPage
                  bookmarkState={bookmarkState}
                  setBookmarkState={setBookmarkState}
                />
              }
            />
            <Route
              path="/bookmark"
              element={
                <BookmarkListPage
                  bookmarkState={bookmarkState}
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