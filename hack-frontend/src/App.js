// // parent page, houses *links*
// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./Pages/Dashboard";
// import Homepage from "./Pages/Homepage";
// //import Home from "./Pages/Homepage"; //this will be loginpage
// //import Home from "./Pages/Homepage"; //this will be signup page
// // import EVBenefits from "./Pages/EVBenefits";
// // import Terms from "./Pages/Terms";
// // import Charging from "./Pages/Charging";
// // import ShopEvs from "./Pages/ShopEvs";
// // import News from "./Pages/News";
// // import AboutUs from "./Pages/AboutUs";
// // import NavFootPage from "./Components/NavFootPages";

// function App() {
//   return (
//     <div className="App">
//       {/* paths to the actual pages end user would see */}
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<NavFootPage />}>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/Terms" element={<Terms />} />
//             <Route path="/Charging" element={<Charging />} />
//             <Route path="/ShopEvs" element={<ShopEvs />} />
//             <Route path="/News" element={<News />} />
//             <Route path="/AboutUs" element={<AboutUs />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./Pages/Dashboard";
import Homepage from "./Pages/Homepage";
import Form from "./Pages/Form.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Homepage Route */}
          <Route path="/" element={<Homepage />} />
          {/* Dashboard Route */}
          <Route path="/Form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
