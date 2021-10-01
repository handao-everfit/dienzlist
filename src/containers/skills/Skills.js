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
              {`\tLấy cảm hứng từ "Dean's list" – danh sách sinh viên ưu tú được đánh giá dựa trên phương diện học thuật ở Mỹ. Điên'z List, podcast những cá nhân có tầm ảnh hướng tích cực với thế hệ gen Z đã lộ diện.\n\n\tĐiên'z List muốn mang đến định nghĩa về sự thành công nhưng không hoàn thiện đến mọi người. Đưa ra một góc nhìn tích cực về thế hệ gen Z, Điên'z list muốn xóa đi những định kiến về khoảng cách thế hệ với một quan niệm “điên mới là gen Z".\n\n\tNếu bạn là gen Z, quan tâm đến gen Z và muốn nghe những câu chuyện điên khùng không giống ai. Đừng chần chừ, hãy tìm đến Điên'z list podcast, chúng mình sẽ điên cùng bạn.`}
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
