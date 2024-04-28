import React, { useState, useEffect } from "react";
import './project.css'

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/users/Prav3nK/repos');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setProjects(data);
                setFilteredProjects(data); // Initialize filteredProjects with all projects
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProjects();
    }, []);

    // Function to handle search based on term
    const handleSearch = () => {
        const filtered = projects.filter(project => {
            return project.name.toLowerCase().includes(searchTerm.toLowerCase()) 
        });
        setFilteredProjects(filtered);
    };

    return (
        <section id='projects'>
            <h2 className="projectstitle">My Portfolio</h2>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {filteredProjects.length === 0 && (
                <p className="no-repo-msg">No repositories found.</p>
            )}
            <div className="projectList">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="projectItem">
                        <h3 className="projectName">{project.name}</h3>
                        <p className="projectDes">{project.description}</p>
                        <button className="projectBtn"><a href={project.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a></button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
