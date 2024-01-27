import { Component } from "react";
import { v4 as uuid } from "uuid";

import "./App.css";

const listOfProjects = [
  {
    id: 1,
    projectName: "NxtTrendZ",
    description:
      "Created a modern e-commerce experience with a design inspired by Amazon and Flipkart.",
    projectLink: "https://adinxttrendz.ccbp.tech/login",
    imageUrl: "./nxttrendz.jpg",
  },
  {
    id: 2,
    projectName: "Emoji Game",
    description: "Built an engaging, emoji-based memory challenge for players.",
    projectLink: "https://adipemojigame.ccbp.tech/",
    imageUrl: "./emoji.jpg",
  },
  {
    id: 3,
    projectName: "Todo Application",
    description:
      "A robust task tracking system with CRUD capabilities, crafted to simplify task",
    projectLink: "https://adiptodolist.ccbp.tech/",
    imageUrl: "./tasks.jpg",
  },
];

class App extends Component {
  state = {
    projectsList: listOfProjects,
    description: "",
    projectName: "",
    projectLink: "",
  };

  onChangeProjectName = (e) => {
    this.setState({ projectName: e.target.value });
  };

  onChangeProjectLink = (e) => {
    this.setState({ projectLink: e.target.value });
  };

  onChangeDescription = (e) => {
    this.setState({ description: e.target.value });
  };

  addProject = (event) => {
    event.preventDefault();
    const { projectName, projectLink, description } = this.state;
    const newProject = {
      id: uuid(),
      projectName,
      projectLink,
      description,
      imageUrl: "./new-project.jpg",
    };
    this.setState((prevState) => ({
      projectsList: [...prevState.projectsList, newProject],
    }));
    this.setState({ projectName: "", projectLink: "", description: "" });
  };

  render() {
    const { projectName, projectLink, description, projectsList } = this.state;
    console.log(projectsList);
    return (
      <div className="portfolio-container">
        <div className="navbar-container">
          <h5 className="portfolio-name">Penumarthi Adinarayana</h5>
          <ul className="nav-items-container">
            <li className="nav-item">
              <a href="#about" className="nav-item">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-item">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#contacts" className="nav-item">
                Contacts
              </a>
            </li>
          </ul>
        </div>
        <div className="about-container" id="about">
          <p className="role">Full Stack Developer</p>
          <h2 className="introduction">
            Hello, my name is Adinarayana Penumarthi
          </h2>
          <p className="about">
            I am from Tanuku, AndhraPradesh.I did my B.Tech(EEE) in 2013 from
            Gudlavalleru Engineering College.From Jun 2013 – Aug 2022 worked as
            Electrical Engineer in Shilpa Medicare Ltd.,Since i have interest in
            coding,i started learning MERN Stack through NXT WAVE disruptive
            technologies. I have done some frontend projects using React.js
            those are list below in projects section.
          </p>
          <div className="btn-container">
            <button type="button" className="pro-btn">
              <a href="#projects" className="pro-btn">
                Projects
              </a>
            </button>
            <button type="button" className="linkedin-btn">
              Linkedin
            </button>
          </div>
        </div>
        <div className="add-projects-container">
          <h2 className="add-project-heading">Add Project</h2>
          <hr className="hr-line" />
          <form className="add-project-form" onSubmit={this.addProject}>
            <label htmlFor="project-name" className="label">
              Project Name
            </label>
            <input
              id="project-name"
              type="text"
              value={projectName}
              onChange={this.onChangeProjectName}
              className="input-box"
            />
            <label htmlFor="project-link" className="label">
              Project Link
            </label>
            <input
              id="project-link"
              type="text"
              value={projectLink}
              onChange={this.onChangeProjectLink}
              className="input-box"
            />
            <label htmlFor="description" className="label">
              Description
            </label>
            <textarea
              type="text"
              id="description"
              value={description}
              onChange={this.onChangeDescription}
              className="text-box"
            />
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
        </div>
        <img src="./Vector.jpg" alt="vector" className="vector-image" />
        <div className="projects-container" id="projects">
          <h2 className="add-project-heading">Projects</h2>
          <hr className="hr-line" />
          <ul className="project-list-container">
            {projectsList.map((item, index) => (
              <li className="each-project-card" key={item.id}>
                <img
                  src={item.imageUrl}
                  alt={item.projectName}
                  className="project-dp"
                  style={{ order: index % 2 === 0 ? 2 : 0 }}
                />
                <div className="project-details-container">
                  <h1 className="project-title">{item.projectName}</h1>

                  <p className="project-desc">{item.description}</p>
                  <button type="button" className="view-btn">
                    <a
                      href={item.projectLink}
                      target="_blank"
                      rel="noreferrer"
                      className="view"
                    >
                      View Project
                    </a>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-container" id="contacts">
          <div className="icons-container">
            <img
              src="./instagram-logo-fill.jpg"
              alt="instagram"
              className="icon"
            />
            <img src="./linkedin.jpg" alt="linkedin" className="icon" />
            <img src="./envelope-fill.jpg" alt="envelope" className="icon" />
          </div>
          <p className="copy-right">Copyright © 2024. All rights reserved</p>
        </div>
        <img src="./Vector.jpg" alt="vector" className="vector-image" />
      </div>
    );
  }
}

export default App;
