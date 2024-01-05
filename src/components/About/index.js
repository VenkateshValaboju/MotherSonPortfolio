import './index.css'
import {Link} from 'react-router-dom'
import ProjectForm from '../ProjectForm'
import Header from '../Header'

const About = () => (
  <div className="bg">
    <Header />
    <div className="box1">
      <h1 className="role">UI/UX Designer</h1>
      <div>
        <h1 className="greetings">Hello, my name is Madelyn Torff</h1>
        <p className="body">
          Short text with details about you, what you do or your professional
          career. You can add more information on the about page.
        </p>
        <Link to="/projects">
          <button type="button" className="projectsButton">
            Projects
          </button>
        </Link>

        <button type="button" className="LinkedInButton">
          LinkedIn
        </button>
      </div>
    </div>
    <ProjectForm />
    <div>
      <img className="footer" src="https://iili.io/J5LuC79.png" alt="Footer" />
    </div>
  </div>
)

export default About
