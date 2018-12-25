import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

const cardStyle = {
	maxWidth: '65%'
}
const cardBody = {
	borderTop: '1px solid rgba(0, 0, 0, 0.125)'
}

export default function WorkCard(props) {
	const { logo, description, title, position } = props
	return (
		<div>
			<Card style={cardStyle} className="mx-auto my-2">
				<CardImg top src={logo} className="img-fluid" alt="Card image cap" />
				<CardBody style={cardBody}>
					<CardTitle>{title}</CardTitle>
					<CardSubtitle>{position}</CardSubtitle>
					<CardText>{description}</CardText>
				</CardBody>
			</Card>
		</div>
	)
}
