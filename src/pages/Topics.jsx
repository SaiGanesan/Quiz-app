// src/pages/Topics.jsx
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "../styles/Topics.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const allTopics = [
  { id: 1, title: "Python", icon: "bi-filetype-py" },
  { id: 2, title: "Java", icon: "bi-cup-hot" },
  { id: 3, title: "Reactjs", icon: "bi-filetype-jsx" },
  { id: 4, title: "Angular", icon: "bi-diagram-3" },
  { id: 5, title: "MongoDB", icon: "bi-database" },
  { id: 6, title: "Spring Boot", icon: "bi-leaf" },
  { id: 7, title: "Nodejs", icon: "bi-cpu" },
  { id: 8, title: "Expressjs", icon: "bi-usb-symbol" },
  { id: 9, title: "Django", icon: "bi-filetype-py" },
  { id: 10, title: "MySQL", icon: "bi-database-check" },
  { id: 11, title: "PostgreSQL", icon: "bi-database" },
  { id: 12, title: "HTML", icon: "bi-filetype-html" },
  { id: 13, title: "CSS", icon: "bi-filetype-css" },
  { id: 14, title: "JavaScriptes6", icon: "bi-filetype-js" },
  { id: 15, title: "TypeScript", icon: "bi-filetype-tsx" },
  { id: 16, title: "GitGitHub", icon: "bi-github" },
];

const Topics = () => {
  const { name } = useContext(UserContext);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const topicsPerPage = 12;

  // 🔽 Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredTopics = allTopics.filter((topic) =>
    topic.title.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLast = currentPage * topicsPerPage;
  const indexOfFirst = indexOfLast - topicsPerPage;
  const currentTopics = filteredTopics.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredTopics.length / topicsPerPage);

  const handleSelectTopic = (topic) => {
    navigate(`/quiz/${topic.title.toLowerCase().replace(/\s/g, "")}`);
  };

  return (
    <div className="topics-container">
      {/* Decorative Characters */}
      <img src="/sabito.png" alt="Sabito" className="corner-image left" />
      <img src="/giu.png" alt="Giyu" className="corner-image right" />

      {/* Header Section */}
      <div className="topics-header">
        <h1 className="topics-title">Welcome, {name || "Dev"} 👋</h1>
        <input
          type="text"
          className="search-input"
          placeholder="Search topics..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      <p className="topics-subtitle">Choose your quiz domain:</p>

      {/* Topics Grid */}
      <div className="topics-grid">
        {currentTopics.map((topic) => (
          <div
            key={topic.id}
            className="topic-card"
            onClick={() => handleSelectTopic(topic)}
          >
            <i className={`bi ${topic.icon} topic-icon`}></i>
            <span>{topic.title}</span>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Topics;
