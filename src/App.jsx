import Navbar from "./components/navbar";
import Menu from "./components/cakes-card";
import CakeSizes from "./views/cake-sizes";
import CustomCakes from "./views/custom-cakes";
import Delivery from "./views/delivery";
import ContactWs from "./views/contact-ws";
import ContactGmail from "./views/contact-gmail";
import Footer from "./components/footer";
import FirtsView from "./views/firts-view";
import AboutUs from "./views/about-us";

export default function App(){
 return(
  <main>
    <Navbar />
    <FirtsView />
    <Menu />
    <CustomCakes />
    <CakeSizes />
    <Delivery />
    <AboutUs />
    <ContactWs />
    <ContactGmail />
    <Footer />
  </main>
 )
}