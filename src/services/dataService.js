/* eslint-disable global-require */
export const contacts = [
	{
		id: 1,
		src: 'facebook-f',
		title: 'Facebook',
		style: {
			color: '#4267b2',
			cursor: 'pointer'
		},
		link: 'https://www.facebook.com/charmaine.stepaniuk'
	},
	{
		id: 2,
		src: 'linkedin',
		title: 'Linkedin',
		style: {
			color: '#0077B5',
			margin: '0 50px',
			cursor: 'pointer'
		},
		link: 'https://www.linkedin.com/in/charmaine-ayuban-979190a0'
	},
	{
		id: 3,
		src: 'twitter',
		title: 'Twitter',
		style: {
			color: '#1da1f2',
			cursor: 'pointer'
		},
		link: 'https://twitter.com/iamCHAMazing'
	}
]

export const expertise = [
	{
		id: 1,
		src: require('../assets/expertise/amazon.png'),
		text: 'Amazon Account Management',
		description: `Product research and listing. Supplier Sourcing. 
    Customer Service and Inventory management. Drives business reviews 
    and performs analysis to understand sales trends.
     Monitors information about client’s products and work with them to
      achieve data standards which will align with a 
     best-in-class customer experience.`
	},
	{
		id: 2,
		src: require('../assets/expertise/content_writing.jpg'),
		text: 'Web Design and Content Writing',
		description: `Logo design. Photo editing. Web design. Content Marketing. 
    I’ll help you craft relevant and strategic brand voice that will help your site rank flourish and succeed.`
	},
	{
		id: 3,
		src: require('../assets/expertise/dataanalysis.jpg'),
		text: 'Data Analysis and Management',
		description: `I’ll translate numbers, collect data, create PowerPoint presentation. 
    Whether it’s sales figures, market research or shipment costs, 
    I’ll find the best way to convey it to help you make better business decisions.`	
	},
	{
		id: 4,
		src: require('../assets/expertise/customer_service.jpg'),
		text: 'Customer Service',
		description: `Quality. Performance. Service. Customer Satisfaction. Reliability. Experience. 
		Having a reliable and friendly customer service will retain current customers and attract new ones.`
	},
	{
		id: 5,
		src: require('../assets/expertise/digitalmarketing.jpg'),
		text: 'Digital Marketing',
		description: `Every company thrives to succeed but not everyone is lucky to achieve it. 
    I aim to promote and connect your business to your target audience via digital channels which
     will help boost your sales and market.`
	},
	{
		id: 6,
		src: require('../assets/expertise/projectmanagement.jpg'),
		text: 'Project Management',
		description: `Team collaboration and process improvement are keys to achieve all 
    of the project goals within a specific time.`
	}
]

export const works = [
	{
		id: 1,
		logo: require('../assets/work.jpg'),
		title: 'Choice Property, Ltd.',
		description: 'Customer Care Specialist'
	},
	{
		id: 2,
		logo: require('../assets/work.jpg'),
		title: 'Rhythm Management Group',
		description: 'Some quick example text to build on the card title and make up the bulk of the cards content'
	},
	{
		id: 3,
		logo: require('../assets/work.jpg'),
		title: 'Convergys',
		description: 'Some quick example text to build on the card title and make up the bulk of the cards content'
	}
]
