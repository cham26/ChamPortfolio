import React from 'react'
import { create } from 'react-test-renderer'
import Bio from '../components/Bio'

test('snapshot', () => {
	// Tests if html changed used for finished components
	// to update it run with -u argmunet
	const c = create(<Bio />)
	expect(c.toJSON()).toMatchSnapshot()
})
