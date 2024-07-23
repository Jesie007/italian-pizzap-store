import CreateUser from "../features/user/CreateUser";
import SliderBanner from "./SliderBanner";

function Home() {
  
  return ( 
  <div>
    <div className="w-full h-screen overflow-hidden">
      <SliderBanner />

      <CreateUser />
    </div>
   
  </div>
  )
}

export default Home;
