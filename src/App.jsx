import { Image} from "@chakra-ui/react";
import { Route, Routes} from "react-router-dom";
import * as API from "./services/launches";
import logo from "./assets/logo-spacex.png";
import { LaunchList } from "./components/LaunchList";
import {LaunchDetails} from "./components/LaunchDetails";
import { RocketDetails } from "./components/RocketDetails";


export function App() {
  
  
  return (
    <>
      <Image m={4} src={logo} width={300} />
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="launch/:launchId" element={<LaunchDetails />} />
        <Route path="rockets/:rocketId" element={<RocketDetails />} />
      </Routes>
    </>
    
  );
}

