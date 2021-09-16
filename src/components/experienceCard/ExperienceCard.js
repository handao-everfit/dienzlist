import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo, isDark}) {
  return (
    <div className={isDark ? "card-box-dark" : "card-box"}>
      <div class="cardBox">
        <div class="card">
          <div class="front">
            <h3>Card One</h3>
            <p>Hover to flip</p>
            <strong>&#x21bb;</strong>
          </div>
          <div class="back">
            <h3>Back Side One</h3>
            <p>Content in card one</p>
          </div>
        </div>
      </div>

      <div className="experience-text-details">
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
              : " experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
      </div>
    </div>
  );
}
