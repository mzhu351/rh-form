import { MultiStepForm } from "./components";

function App() {
	return (
		<div
			style={{
				position: "relative",
				background: "white",
				border: "2px solid LightGray",
				padding: "2rem 1rem",
				margin: "1rem",
				borderRadius: ".5rem",
				fontFamily: "Arial",
				maxWidth: "max-content",
			}}
		>
			<MultiStepForm />
		</div>
	);
}

export default App;
