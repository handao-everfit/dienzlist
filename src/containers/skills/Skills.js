import React, {useContext} from "react";
import "./Skills.scss";
import {illustration} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="about">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              Câu chuyện của Điên'z List
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              Lấy cảm hứng từ "Dean's list" - Danh sách sinh viên ưu tú được
              đánh giá dựa trên phương diện học thuật ở Mỹ. Dean's list phiên
              bản Việt Nam nay đã xuất hiện với cái tên "Điên'z List" - Danh
              sách những cá nhân ưu tú có ảnh hưởng tích cực đến cột sống của
              gen Z trên nhiều lĩnh vực khác nhau.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
