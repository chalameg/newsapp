import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import Categories from './pages/Categories';
import Search from './pages/Search';
import DetailsPage from './pages/DetailsPage';
import { AppContext } from './common/context';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/:newsId",
        element: <DetailsPage />,
    },
    {
        path: "/categories",
        element: <Categories />,
    },
    {
        path: "/search",
        element: <Search />,
    },
    {
        path: "/search/:newsId",
        element: <DetailsPage />,
    },
]);

function App() {
    const [news, setNews] = useState(null);
    const [country, setCountry] = useState("us");

    const AppContextValue = {
        news,
        setNews,
        country,
        setCountry
    };
    return (
        <AppContext.Provider value={AppContextValue}>
            <Header />
            <RouterProvider router={router} />
        </AppContext.Provider>
    )
}

export default App