import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import {
	STEPS_MAP,
	QUESTIONS_MAP as questionMap,
	testVersion,
	useQuestions,
} from "../shared";

export const Introduction = () => {
	const navigate = useNavigate();
	const { questions } = useQuestions(STEPS_MAP[testVersion], questionMap);

	return (
		<Container style={{ minWidth: "400px" }}>
			<Row>
				<Col>
					<h3 style={{ margin: "60px 0", textAlign: "center" }}>
						Welcome to Survey
					</h3>
				</Col>
			</Row>
			<Row>
				<Stack className="col-md-5 mx-auto" style={{ maxWidth: "300px" }}>
					<Button
						variant="primary"
						type="button"
						onClick={() => navigate(`/questions/${questions[0].id}`)}
					>
						Get started
					</Button>
				</Stack>
			</Row>
		</Container>
	);
};
