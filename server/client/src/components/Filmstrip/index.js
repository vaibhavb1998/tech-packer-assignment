import { useContext, useState } from "react";
import { TemplateContext } from "../TemplateContext";
import "./filmstrip.css";

import previous from "../../assets/previous.png";
import next from "../../assets/next.png";

const Filmstrip = () => {
  const { templates, selectedTemplate, setSelectedTemplate } =
    useContext(TemplateContext);

  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [index, setIndex] = useState(0);
  const trackWidth = 720;

  return (
    <div className="filmstrip">
      <div className="carousel-container">
        <div className="carousel-inner">
          <div
            className="track"
            style={{ transform: `translateX(-${trackWidth * index}px)` }}
          >
            {templates &&
              templates.map((template) => (
                <div
                  key={template.id}
                  className="card-container"
                  onClick={() => {
                    setSelectedTemplate(template);
                  }}
                >
                  <div
                    className={`card ${
                      selectedTemplate && selectedTemplate.id === template.id
                        ? "active"
                        : ""
                    }`}
                  >
                    <div className="img">
                      <img
                        src={`data:image/jpeg;base64,${template.thumbnailBuffer}`}
                        alt={template.id}
                        className="thumbnail"
                      />
                    </div>
                    <div className="info">
                      <span>{template.id}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <button
        className="prev"
        disabled={isPrevDisabled}
        onClick={() => {
          setIndex(index - 1);

          setIsNextDisabled(false);

          if (!(index - 1)) {
            setIsPrevDisabled(true);
          }
        }}
      >
        <img src={previous} alt="navigate left" />
      </button>
      <button
        className="next"
        disabled={isNextDisabled}
        onClick={() => {
          setIndex(index + 1);

          setIsPrevDisabled(false);

          if (trackWidth * 2 - index * trackWidth < trackWidth) {
            setIsNextDisabled(true);
          }
        }}
      >
        <img src={next} alt="navigate right" />
      </button>
    </div>
  );
};

export default Filmstrip;
