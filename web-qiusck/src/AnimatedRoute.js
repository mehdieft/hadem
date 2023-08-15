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

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Index />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/shohada" element={<Shohada />} />
          <Route path="/nedajaMissions" element={<NedajaMissions />} />
          <Route path="/login" element={<Login/>}   />
          <Route path="*" exact={true} element={<NotFound />} />
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
        
      </AnimatePresence>
    </>
  );
};
