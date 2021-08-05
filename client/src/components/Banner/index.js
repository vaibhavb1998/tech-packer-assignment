import { useContext } from "react";
import { TemplateContext } from "../TemplateContext";
import "./banner.css";

const Banner = () => {
  const {selectedTemplate} = useContext(TemplateContext);

  return (
    <div className="banner">
      {selectedTemplate && (
        <img
          src={`data:image/jpeg;base64,${selectedTemplate.imageBuffer}`}
          alt={selectedTemplate.title}
        />
      )}
    </div>
  );
};

export default Banner;
