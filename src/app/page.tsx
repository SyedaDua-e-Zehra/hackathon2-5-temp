import Image from "next/image";
import BlueHeader from "./components/blue-header";
import Carausel from "./components/caraousel";
import Editors from "./components/editorspick";
import GreenDiv from "./components/green-div";
import Lastdiv from "./components/lastdiv";
import Navbar from "./components/navbar";
import ProductCard from "./components/products-card";
import Whitediv from "./components/white-dic";
import Footer1 from "./components/footer1";

export default function Home(){
  return(
    <div className="overflow-hidden">
      <BlueHeader/>
      <Navbar/>
      <Carausel/>
      <Editors/>
      <ProductCard/>
      <GreenDiv/>
      <Whitediv/>
      <Lastdiv/>
      <Footer1/>
           
    </div>
  )
}
