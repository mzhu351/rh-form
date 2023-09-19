import { HashRouter, Route, Routes } from "react-router-dom";

import { Introduction, Question, Completed } from "./routes";

export const App = () => {
	return (
		<div className="App">
			<HashRouter>
				<Routes>
					<Route path="/" element={<Introduction />} />
					<Route path="/completed" element={<Completed />} />
					<Route path="questions/:id" element={<Question />} />
					<Route path="*" element={<div>Page not found</div>} />
				</Routes>
			</HashRouter>
		</div>
	);
};
