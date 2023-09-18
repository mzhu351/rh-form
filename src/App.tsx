import { HashRouter, Route, Routes } from "react-router-dom";

import { Home, Question } from "./routes";

export const App = () => {
	return (
		<div className="App">
			<HashRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/questions" element={<Question />} />
					<Route path="questions/:id" element={<Question />} />
				</Routes>
			</HashRouter>
		</div>
	);
};
