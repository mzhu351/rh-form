import { Container, Row, Col } from "react-bootstrap";

import { useSession } from "../shared";

export const Completed = () => {
	const { value } = useSession("test1");

	return (
		<Container style={{ maxWidth: "600px" }}>
			<Row>
				<Col>
					<h3 style={{ margin: "60px 0", textAlign: "center" }}>
						Here is your submitted information
					</h3>
				</Col>
			</Row>
			<Row>
				<Col>
					<pre>{JSON.stringify(value, null, 2)}</pre>
				</Col>
			</Row>
		</Container>
	);
};
