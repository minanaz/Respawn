import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import GamesPage from "./pages/GamesPage";
import GameDetailsPage from "./pages/GameDetailsPage";
import NewsPage from "./pages/NewsPage";
import NewsDetailsPage from "./pages/NewsDetailsPage";
import WorkPage from "./pages/WorkPage";
import WorkDetailsPage from "./pages/WorkDetailsPage";
import EditNewsPage from "./pages/EditNewsPage";
import EditWorkPage from "./pages/EditWorkPage";
import CartPage from "./pages/CartPage";
import AuthLoginPage from "./pages/AuthLoginPage";
import AuthRegisterPage from "./pages/AuthRegisterPage";
import FavoritesPage from "./pages/FavoritesPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ForgotPasswordCompletePage from "./pages/ForgotPasswordCompletePage";
import AddNewsPage from "./pages/AddNewsPage";
import { useAuth } from "./contexts/AuthContextProvider";

const MainRoutes = () => {
  const { checkAuth } = useAuth();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/login", element: <AuthLoginPage />, id: 2 },
    { link: "/register", element: <AuthRegisterPage />, id: 3 },
    { link: "/aboutus", element: <AboutUsPage />, id: 4 },
    { link: "/games", element: <GamesPage />, id: 5 },
    { link: "/games/:id", element: <GameDetailsPage />, id: 6 },
    { link: "/news", element: <NewsPage />, id: 7 },
    { link: "/news/:id", element: <NewsDetailsPage />, id: 8 },
    { link: "/work", element: <WorkPage />, id: 9 },
    { link: "/work/:id", element: <WorkDetailsPage />, id: 10 },
    { link: "/cart", element: <CartPage />, id: 8 },
    { link: "/edit-news/:id", element: <EditNewsPage />, id: 10 },
    { link: "/add-news", element: <AddNewsPage />, id: 11 },
    { link: "/edit-work/:id", element: <EditWorkPage />, id: 12 },
    { link: "/favorites", element: <FavoritesPage />, id: 13 },
    { link: "/forgotpassword", element: <ForgotPasswordPage />, id: 14 },
    {
      link: "/forgotpasswordcomplete",
      element: <ForgotPasswordCompletePage />,
      id: 14,
    },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id}></Route>
      ))}
    </Routes>
  );
};

export default MainRoutes;
