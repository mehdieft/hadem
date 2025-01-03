import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery/gallery";
import Shohada from "./pages/Shohada/shohada";
import NedajaMissions from "./pages/NedajaMissions/nedajaMissions";
import NotFound from "./pages/NotFound/notFound";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Login from './pages/login/login';
import { Admin } from "./pages/Admin/admin";
import { ImageGalleryManagment } from "./pages/Admin/ImageGalleryManagement.jsx/imageGalleryManagment";
import {VideoGalleryManagment} from './pages/Admin/VideoGalleryManagment/videoGalleryManagment';
import { ShahidManagament } from "./pages/Admin/ShahidManagment/shahidManagment";
import WarHistoryManagement from "./pages/Admin/WarHistoryManagment/warHistory";
import {ShohadaSearch} from './pages/ShohadaSearch/shohadaSearch';
import Diary from './pages/Diary/diary';
import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <>
        <ScrollToTop />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Index />} />
          <Route path="/ShohadaSearch" element={<ShohadaSearch />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/shohada" element={<Shohada />} />
          <Route path="/diary" element={<Diary/>}/>
          <Route path="/nedajaMissions" element={<NedajaMissions />} />
          <Route path="/login" element={<Login/>}   />
          <Route path="*" exact={true} element={<NotFound />} />
          <Route path="/admin" element={<Admin/>}>
            <Route path="imageGalleryManagment" element={<ImageGalleryManagment/>}/>
            <Route path="videoGalleryManagment"element={<VideoGalleryManagment/>}/>
            <Route path="shahidManagament" element={<ShahidManagament/>}/>
            <Route  path="warHistoryManagament" element={<WarHistoryManagement/>}/>
          </Route>
        </Routes>
        
      </AnimatePresence>
    </>
  );
};
