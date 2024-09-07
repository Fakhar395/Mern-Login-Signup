import { Route, Routes, Navigate } from "react-router-dom";
// import Main from "./components/Main";

import Signup from "./components/Signup";
import Login from "./components/Login";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/GlobalStyle"
import Contact from  "./components/Contact"
import Head from  "./components/Sections/Header"
import GoToTop from "./components/Sections/GoToTop";
import About from "./components/about"

import Herosection from  "./components/Sections/HeroSection"
import Footer from  "./components/Sections/Footer"



function App() {
	const user = localStorage.getItem("token");

	const theme = {
		colors: {
		  heading: "rgb(24 24 29)",
		  text: "rgb(24 24 29)",
		  white: "#fff",
		  black: " #212529",
		  helper: "#8490ff",
		  bg: "rgb(249 249 255)",
		  footer_bg: "#0a1435",
		  btn: "rgb(98 84 243)",
		  border: "rgba(98, 84, 243, 0.5)",
		  hr: "#ffffff",
		  gradient:
			"linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
		  shadow:
			"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
		  shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
		},
		media: { mobile: "768px", tab: "998px" },
	  };   
	   /*  */

	return (

		<ThemeProvider theme={theme}>
			
			 <GoToTop />
		<Routes>
			
			{user && <Route path="/" exact element={ <> <GlobalStyle /> <Head  /> ,<Herosection  />,<Footer/> </>} />}
			<Route path="/contact" element={<> <GlobalStyle />,<Head/>,<Contact /> </>} />
			
			<Route path="/service" exact element={<> <GlobalStyle /> <Head  /> <Footer/> </>} />
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/about" exact element={<> <GlobalStyle /> <Head  />  <Herosection  />,<Footer/> </>} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>

		</ThemeProvider>
	);
}

export default App;
