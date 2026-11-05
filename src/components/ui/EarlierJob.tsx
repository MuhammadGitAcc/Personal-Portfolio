import { useId, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import type { Job, Language } from "../../types";
import Tag from "./Tag";

type EarlierJobProps = {
  job: Job;
  language: Language;
};

const EarlierJob = ({ job, language }: EarlierJobProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm">
      <h4>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 p-4 text-start"
        >
          <span className="min-w-0">
            <span className="block font-semibold">{job.role[language]}</span>
            <span className="mt-1 flex flex-wrap gap-x-3 text-sm">
              <span className="text-primary dark:text-primary-light">{job.company[language]}</span>
              <span className="text-gray-600 dark:text-gray-300">{job.duration[language]}</span>
            </span>
          </span>
          <FaChevronDown
            aria-hidden="true"
            className={`flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </h4>

      {isOpen && (
        <div id={panelId} className="px-4 pb-4">
          <p className="mb-4 text-gray-600 dark:text-gray-300">{job.description[language]}</p>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EarlierJob;
