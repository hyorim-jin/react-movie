import { HashRouter, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="movie/:id" element={<Detail />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</HashRouter>
	);
}

export default App;