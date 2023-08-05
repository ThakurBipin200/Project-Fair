import React, { useEffect, useState } from "react";
import { ArrowRight } from "react-feather";
import { useNavigate } from "react-router-dom";

import Spinner from "../Spinner/Spinner";
import ProjectModal from "./ProjectModal/ProjectModal";

import designIcon from "../../assets/designer.svg";
import { getAllProjects } from "../../firebase";

import styles from "./Home.module.css";

function Home(props) {
  const navigate = useNavigate();
  const isAuthenticated = props.auth ? true : false;

  const [projectsLoaded, setProjectsLoaded] = useState(false);
  const [projects, setProjects] = useState([]);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [projectDetails, setProjectDetails] = useState({});

  const handleNextButtonClick = () => {
    if (isAuthenticated) navigate("/account");
    else navigate("/login");
  };

  const fetchAllProjects = async () => {
    const result = await getAllProjects();
    setProjectsLoaded(true);
    if (!result) {
      return;
    }

    const tempProjects = [];
    result.forEach((doc) => tempProjects.push({ ...doc.data(), pid: doc.id }));

    setProjects(tempProjects);
  };

  const handleProjectCardClick = (project) => {
    setShowProjectModal(true);
    setProjectDetails(project);
  };

  useEffect(() => {
    fetchAllProjects();
  }, []);

  return (
    <div className={styles.container}>
      {showProjectModal && (
        <ProjectModal
          onClose={() => setShowProjectModal(false)}
          details={projectDetails}
        />
      )}

      <div className={styles.header}>
        <div className={styles.left}>
          <p className={styles.heading}>Projects Fair</p>
          <p className={styles.subHeading}>
            One stop destination for all software development Projects
          </p>
          <button onClick={handleNextButtonClick}>
            {isAuthenticated ? "Manage your Projects" : "Get Started"}{" "}
            <ArrowRight />{" "}
          </button>
        </div>
        <div className={styles.right}>
          <img src={designIcon} alt="Projects" />
        </div>
      </div>
      <div className={styles.jumbotron}>
        <div>
          <div className="row row-header">
            <h1>Find all type of software projects</h1>
            <p>
              The Project Fair Website is an online platform designed to
              showcase and promote various projects. It provides a centralized
              space for individuals and teams to present their innovative ideas,
              research findings, and creative endeavors to a wider audience. The
              website features a user-friendly interface that allows project
              creators to create profiles, upload project details, and engage
              with visitors through interactive features. Visitors can explore a
              wide range of projects, filter them based on categories, and
              connect with project creators for further discussions. The Project
              Fair Website aims to foster collaboration, knowledge sharing, and
              networking among individuals passionate about research,
              technology, and creative projects.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <p className={styles.title}>All Projects</p>
        <div className={styles.projects}>
          {projectsLoaded ? (
            projects.length > 0 ? (
              projects.map((item) => (
                <div
                  className={styles.project}
                  key={item.pid}
                  onClick={() => handleProjectCardClick(item)}
                >
                  <div className={styles.image}>
                    <img
                      src={
                        item.thumbnail ||
                        "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png"
                      }
                      alt="Project thumbnail"
                    />
                  </div>
                  <p className={styles.title}>{item.title}</p>
                </div>
              ))
            ) : (
              <p>No projects found</p>
            )
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
