import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const TemplateContext = createContext();

export const TemplateProvider = (props) => {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  useEffect(() => {
    fetchTemplates();
  }, []);

  useEffect(() => {
    templates.length && setSelectedTemplate(templates[0]);
  }, [templates]);

  const fetchTemplates = async () => {
    const {
      data: { templates },
    } = await axios.get(`${BACKEND_URL}/api/templates`);

    setTemplates(templates);
  };

  return (
    <TemplateContext.Provider
      value={{ templates, selectedTemplate, setSelectedTemplate }}
    >
      {props.children}
    </TemplateContext.Provider>
  );
};
