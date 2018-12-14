import React from 'react'

const sectionTitleStyle = {
	fontFamily: 'fantasy',
	fontSize: '40px'
}

const descriptionStyle = {
	fontFamily: 'georgia',
	fontStyle: 'oblique',
	fontSize: '16px'
}

export default props => {
	const { title, description, id } = props
	return (
		<div className="text-center py-5" id={id}>
			<h2 style={sectionTitleStyle}>{title}</h2>
			<hr width="30%" />
			<span style={descriptionStyle}>{description}</span>
		</div>
	)
}
