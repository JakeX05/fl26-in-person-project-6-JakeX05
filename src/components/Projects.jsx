// Projects owns the active filter string; the displayed list is derived.
import { useState } from 'react'

const projects = [
  { id: 1, title: 'E-Commerce Platform', category: 'fullstack', description: 'An online store built with React and Node.js.' },
  { id: 2, title: 'Weather Dashboard', category: 'frontend', description: 'A responsive dashboard with location search and forecasts.' },
  { id: 3, title: 'Task Management App', category: 'webapp', description: 'A productivity app for organizing tasks and deadlines.' },
  { id: 4, title: 'Creative Portfolio', category: 'design', description: 'A responsive portfolio with an interactive gallery.' },
]
const filters = [
  { category: 'all', label: 'All Projects' },
  { category: 'frontend', label: 'Frontend' },
  { category: 'fullstack', label: 'Full-Stack' },
  { category: 'design', label: 'Design' },
  { category: 'webapp', label: 'Web App' },
]

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="filter-buttons">
          {filters.map(filter => (
            <button type="button" key={filter.category} className={`filter-btn ${activeFilter === filter.category ? 'active' : ''}`} aria-pressed={activeFilter === filter.category} onClick={() => setActiveFilter(filter.category)}>{filter.label}</button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <article className="project-card" key={project.id}>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{filters.find(filter => filter.category === project.category).label}</span>
                </div>
                <p className="project-description">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
