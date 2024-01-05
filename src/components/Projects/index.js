import './index.css'
import {RiInstagramFill} from 'react-icons/ri'
import {FaLinkedin} from 'react-icons/fa'
import {IoMdMail} from 'react-icons/io'

import ProjectCard from '../ProjectCard'
import ProjectContext from '../../context/ProjectContext'
import Header from '../Header'

const Projects = () => (
  <ProjectContext.Consumer>
    {value => {
      const {projectsList} = value
      return (
        <div className="route2">
          <Header />
          <div className="responsive">
            <h2 className="projectsPageTitle">Projects</h2>
            <div className="">--</div>

            {projectsList.map(eachItem => (
              <ProjectCard projectDetails={eachItem} key={eachItem.id} />
            ))}
          </div>

          <div>
            <div>
              <RiInstagramFill className="icon" />
              <FaLinkedin className="icon" />
              <IoMdMail className="icon" />
            </div>
            <p className="copyright">Copyright © 2024. All rights reserved</p>
          </div>
          <img
            src="https://iili.io/J5LuC79.png"
            alt="Footer"
            className="footer"
          />
        </div>
      )
    }}
  </ProjectContext.Consumer>
)
export default Projects
