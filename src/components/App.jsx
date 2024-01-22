import { SharedLayout } from "./SharedLayout";
import { Navigate, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { MainPage } from "Pages/Home/Home";
import { CatalogPage } from "Pages/Catalog/Catalog";
import { Favorites } from "Pages/Favorites/Favorites";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />}></Route>
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>

      <GlobalStyle />
    </>
  );
};