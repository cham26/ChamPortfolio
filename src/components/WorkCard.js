import React from 'react'
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle
} from 'reactstrap'

const cardStyle = {
	maxWidth: '65%'
}

export default function WorkCard(props) {
	const { logo, description, title } = props
	return (
		<div>
			<Card style={cardStyle} className="mx-auto my-2">
				<CardImg top src={logo} className="img-fluid" alt="Card image cap" />
				<CardBody>
					<CardTitle>{title}</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText>{description}</CardText>
				</CardBody>
			</Card>
		</div>
	)
}
