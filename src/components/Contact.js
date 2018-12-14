import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col } from 'reactstrap'
import { contacts } from '../services/dataService'

export default function Contact() {
	const redirectToSocialMedia = link => window.open(link, '_blank')
	return (
		<Container fluid className="pb-4">
			<Row className="text-center">
				<Col md={{ size: 12 }}>
					{contacts.map(i => (
						<FontAwesomeIcon
							icon={['fab', i.src]}
							size="3x"
							style={i.style}
							title={i.title}
							onClick={() => redirectToSocialMedia(i.link)}
							key={i.id}
						/>
					))}
				</Col>
			</Row>
		</Container>
	)
}
