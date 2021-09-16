import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo, isDark}) {
  return (
    <div className={isDark ? "card-box-dark" : "card-box"}>
      <div class="card">
        <div class="front">
          <img
            className="profile-pic-front"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN7lfwGY5oRempqimCHtdQJqQFNVp-lXP0Rg&usqp=CAU"
            alt="grandma"
          />
        </div>
        <div class="back">
          <div className="experience-text-details">
            <img
              className="profile-pic-back"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN7lfwGY5oRempqimCHtdQJqQFNVp-lXP0Rg&usqp=CAU"
              alt="grandma"
            />
            <h5
              className={
                isDark
                  ? "experience-text-role dark-mode-text"
                  : "experience-text-role"
              }
            >
              {cardInfo.role}
            </h5>
            <h5
              className={
                isDark
                  ? "experience-text-date dark-mode-text"
                  : "experience-text-date"
              }
            >
              {cardInfo.date}
            </h5>
            <p
              className={
                isDark
                  ? "subTitle experience-text-desc dark-mode-text"
                  : "experience-text-desc"
              }
            >
              {cardInfo.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
