import { HashRouter, Route, Routes } from "react-router-dom";

import { Home, FormContainer as Form, Question } from "./routes";

export const App = () => {
	return (
		<div className="App">
			<HashRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/form" element={<Form />} />
					<Route path="form/:id" element={<Question />} />
				</Routes>
			</HashRouter>
		</div>
	);
};
