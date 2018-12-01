import React, { Component } from 'react'
import logo from '../logo.svg';
import WorkExperience from './WorkExperience'
import Expertise from './Expertise'
import Bio from './Bio'
import SectionTitle from '../common/SectionTitle'
import Contact from './Contact'
import Welcome from './Welcome'
import Navigation from './Navigation'
import Legal from './Legal'
export default class Layout extends Component {
  render() {
    return (
      <div>
      <Navigation/>
      <Welcome/>
      <Bio/>
      <SectionTitle title="Expetise" description="Things I do" id="expertise-section"/>
      <Expertise />
      <SectionTitle title="Work" description="Work I do" id="work-section"/>
      <WorkExperience/>
      <SectionTitle title="Find Me" id="findme-section"/>
      <Contact />
      <Legal/>
    </div>
    );
  }
}

