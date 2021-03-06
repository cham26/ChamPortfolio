import React, { Component } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Layout from './components/Layout'

library.add(fas, far, fab)
class App extends Component {
	render() {
		return <Layout />
	}
}

export default App
