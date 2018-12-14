import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { css } from 'emotion'
import { expertise } from '../services/dataService'
import BaseImage from './Base/BaseImage'

const style = css`
  .descriptionStyle {
    font-family: verdana;
    text-align: justify;
    font-size: 14px;
  }
  .expertiseTitleStyle {
    font-family: helvetica;
    font-size: 25px;
    color: lightcoral;
  }
`

export default function Expertise() {
	return (
		<Container fluid className={style}>
			{expertise.map(i => (
				<Row className="py-2" key={i.id}>
					<Col md={{ size: 6, offset: 1 }}>
						<BaseImage
							imageSrc={i.src}
							cssClasses={['img-fluid']}
							style={{
								maxWidth: '750px'
							}}
						/>
					</Col>
					<Col md={{ size: 4 }}>
						<b className="expertiseTitleStyle">{i.text}</b>
						<hr />
						<p className="descriptionStyle">{i.description}</p>
					</Col>
				</Row>
			))}
		</Container>
	)
}
