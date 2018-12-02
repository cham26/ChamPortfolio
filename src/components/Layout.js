import React, { Component } from 'react'
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
      <SectionTitle title="EXPERTISE" description="Skills I am good at but not limited to." id="expertise-section"/>
      <Expertise />
      <SectionTitle title="WORK" description="Companies and People I worked with." id="work-section"/>
      <WorkExperience/>
      <SectionTitle title="FIND ME" description="Available to talk and collaborate about work." id="findme-section"/>
      <Contact />
      <Legal/>
    </div>
    );
  }
}

