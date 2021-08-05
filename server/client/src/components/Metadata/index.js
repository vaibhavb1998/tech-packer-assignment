import { useContext } from "react";
import { TemplateContext } from "../TemplateContext";
import "./metadata.css";

const Metadata = () => {
  const { selectedTemplate } = useContext(TemplateContext);

  return (
    <div className="metadata">
      {selectedTemplate && (
        <div>
          <hr />

          <div className="meta-item">
            <span className="title">title</span> {selectedTemplate.title}
          </div>

          <hr />

          <div className="meta-item">
            <span className="title">description</span>{" "}
            {selectedTemplate.description}
          </div>

          <hr />

          <div className="meta-item">
            <span className="title">cost</span> {selectedTemplate.cost}
          </div>

          <hr />

          <div className="meta-item">
            <span className="title">id#</span> {selectedTemplate.id}
          </div>

          <hr />

          <div className="meta-item">
            <span className="title">thumbnail file</span>{" "}
            {selectedTemplate.thumbnail}
          </div>

          <hr />

          <div className="meta-item">
            <span className="title">large image file</span>{" "}
            {selectedTemplate.image}
          </div>

          <hr />
        </div>
      )}
    </div>
  );
};

export default Metadata;
