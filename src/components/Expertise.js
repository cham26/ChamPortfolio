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
	img {
		width: 500px;
		height: 430px;
	}
	.expertiseTitleStyle {
		font-family: helvetica;
		font-size: 25px;
		color: lightcoral;
	}
	.hvrbox,
	.hvrbox * {
		box-sizing: border-box;
	}
	.hvrbox {
		position: relative;
		display: inline-block;
		overflow: hidden;
		max-width: 100%;
		height: auto;
	}
	.hvrbox img {
		max-width: 100%;
	}
	.hvrbox .hvrbox-layer_bottom {
		display: block;
	}
	.hvrbox .hvrbox-layer_top {
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		color: #fff;
		padding: 15px;
		-moz-transition: all 0.4s ease-in-out 0s;
		-webkit-transition: all 0.4s ease-in-out 0s;
		-ms-transition: all 0.4s ease-in-out 0s;
		transition: all 0.4s ease-in-out 0s;
	}
	.hvrbox:hover .hvrbox-layer_top,
	.hvrbox.active .hvrbox-layer_top {
		opacity: 1;
	}
	.hvrbox .hvrbox-text {
		text-align: center;
		font-size: 18px;
		display: inline-block;
		position: absolute;
		top: 50%;
		left: 50%;
		-moz-transform: translate(-50%, -50%);
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
	.hvrbox .hvrbox-text_mobile {
		font-size: 15px;
		border-top: 1px solid rgb(179, 179, 179);
		/foroldbrowsers/border-top: 1px solid rgba(179, 179, 179, 0.7);
		margin-top: 5px;
		padding-top: 2px;
		display: none;
	}
	.hvrbox.active .hvrbox-text_mobile {
		display: block;
	}
`

export default function Expertise() {
	return (
		<Container fluid className={style}>
			<Row className="py-2 text-center">
				{expertise.map(i => (
					<Col lg={{ size: 4 }} md={{ size: 6 }} key={i.id} className="pb-5">
						<div className="hvrbox">
							<BaseImage
								imageSrc={i.src}
								cssClasses={['hvrbox-layer_bottom']}
								style={{
									maxWidth: '750px'
								}}
							/>
							<div className="hvrbox-layer_top">
								<div className="hvrbox-text">
									<strong> {i.text}</strong>
									<hr />
									{i.description}
								</div>
							</div>
						</div>
					</Col>
				))}
			</Row>
		</Container>
	)
}
