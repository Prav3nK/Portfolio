import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <div className="header">
        <h1>Praveen Kumar</h1>
        <p>Software Developer</p>
        <hr />
      </div>
      <div className="summary resume-section">
        <h2>Summary</h2>
        <p className="summary_p">I am a passionate and skilled software developer with experience in front-end and back-end development. I have expertise in technologies such as JavaScript, React, Node.js, and more.</p>
      </div>
      <div className="experience resume-section">
        <h2>Experience</h2>
        <div className="job">
          <h3>Software Engineer</h3>
          <p className="exp_p">ABC Company | January 2020 - Present</p>
          <div className="section-content">
            <ul>
              <li>Developed and maintained web applications using React and Node.js.</li>
              <li>Collaborated with team members to design and implement new features.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="education resume-section">
        <h2>Education</h2>
        <div className="school">
          <h4>Masters of information Technologies</h4>
          <p>-Queensland Unniveristy of Technologies <br/> Still pursuing</p>
        </div>
        <div className="school">
          <h4>Bachelor of Computer Science and Engineering</h4>
          <p>-Kururshetra Unniveristy <br/> Graduated May 2019</p>
        </div>
      </div>
      <div className="skills resume-section">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>HTML5/CSS3</li>
          <li>Git/GitHub</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
