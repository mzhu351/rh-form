import { Container, Row, Col } from "react-bootstrap";

import { useSession } from "../shared";

export const Completed = () => {
	const { value } = useSession("test1");

	return (
		<Container style={{ minWidth: "400px" }}>
			<Row>
				<Col>
					<h3 style={{ margin: "60px 0", textAlign: "center" }}>
						Here is your result
					</h3>
				</Col>
			</Row>
			<Row>
				<Col>{JSON.stringify(value, null, 2)}</Col>
			</Row>
		</Container>
	);
};
