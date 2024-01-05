import {useState} from 'react'

import ProjectContext from '../../context/ProjectContext'

const ProjectForm = () => {
  const [projectName, setProjectName] = useState('')
  const [projectDesc, setProjectDesc] = useState('')

  return (
    <ProjectContext.Consumer>
      {value => {
        const {projectsList, addproject} = value
        const projectSubmitted = e => {
          e.preventDefault()
          const id = projectsList.length
          const project = {
            id,
            projectName,
            projectDescription: projectDesc,
            ProjectLink: 'Project Link',
            ProjectImg: 'https://iili.io/J54fOmX.png',
          }
          addproject(project)
        }
        return (
          <div className="box2">
            <div className="formBox">
              <h2 className="formTitle">Add Project</h2>
              <div className="underline">--</div>
              <form onSubmit={projectSubmitted}>
                <label htmlFor="projectName">Project Name</label>
                <br />
                <input
                  value={projectName}
                  id="projectName"
                  type="text"
                  onChange={e => setProjectName(e.target.value)}
                />
                <br />
                <label htmlFor="projectLink">Project Link</label>
                <br />
                <input id="projectLink" type="text" />
                <br />
                <label htmlFor="description">Description</label>
                <br />
                <textArea
                  value={projectDesc}
                  id="description"
                  type="text"
                  onChange={e => setProjectDesc(e.target.value)}
                />
                <br />
                <button type="submit" className="addBtn">
                  Add
                </button>
              </form>
            </div>
          </div>
        )
      }}
    </ProjectContext.Consumer>
  )
}

export default ProjectForm
