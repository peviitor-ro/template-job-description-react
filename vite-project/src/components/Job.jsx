import React from "react";
import "../App.css";
import BuildingIcon from "../assets/building.svg";
import BriefcaseIcon from "../assets/briefcase.svg";
import ClipboardIcon from "../assets/clipboard.svg";
import ClockIcon from "../assets/clock.svg";
import MoneyIcon from "../assets/money.svg";
import MapIcon from "../assets/map.svg";
import recruiter from "../assets/recruiter.png";
import Button from "./Button";

const JobHeaderElement = ({ icon, text }) => (
  <div className="item">
    {icon}
    <p>{text}</p>
  </div>
);

const Job = (props) => {
  const {
    title,
    employer,
    departament,
    location,
    workingHours,
    experience,
    jobType,
    postedAt,
    salary,
    jobDescription,
    responsabilities,
    demands,
    oferings,
    generalInfo,
    aboutEmployer,
  } = props;

  return (
    <div className="jd__container">
      <div className="jd__header">
        <div className="jd__main">
          <div className="titles">
            <h1 className="title">{title}</h1>
            <div className="title__details">
              <p className="employer">Angajator: {employer}</p>
              <p className="departament">Departament: {departament}</p>
            </div>
          </div>
          <div className="subtitles">
            <div className="info">
              <JobHeaderElement
                icon={<img src={MapIcon} alt="" />}
                text={location}
              />
              <JobHeaderElement
                icon={<img src={BriefcaseIcon} alt="" />}
                text={workingHours}
              />
              <JobHeaderElement
                icon={<img src={BuildingIcon} alt="" />}
                text={jobType}
              />
              <JobHeaderElement
                icon={<img src={ClipboardIcon} alt="" />}
                text={experience}
              />
              <JobHeaderElement
                icon={<img src={ClockIcon} alt="" />}
                text={`Postat la ${postedAt}`}
              />
              <JobHeaderElement
                icon={<img src={MoneyIcon} alt="" />}
                text={`Interval salarizare neta: ${salary}`}
              />
            </div>

            <Button text="Aplica" />
          </div>
        </div>
      </div>
      <div className="jd__body">
        <div className="description">
          <h2 className="description__header">Descrierea meseriei</h2>
          <p>{jobDescription}</p>
        </div>
        <div className="responsabilities">
          <h2 className="description__header under">Responsabilitati</h2>
          <ul className="list">
            {responsabilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>
        <div className="demands">
          <h2 className="description__header under">Cerinte</h2>
          <ul className="list">
            {demands.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>
        <div className="offerings">
          <h2 className="description__header">Ce oferim</h2>
          <ul className="list">
            {oferings.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>
        <div className="general__info">
          <h2 className="description__header under">
            Alte informatii (optional)
          </h2>
          <ul className="list">
            {generalInfo.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>
        <hr></hr>
        <div className="about">
          <div className="contact">
            <p className="contact__name under">Persoana de contact</p>
            {/* To replace img src={aboutEmployer.photo} */}
            <img src={recruiter} alt="" />
            <div>
              <p className="contact__person">{aboutEmployer.name}</p>
              <p className="contact__role">{aboutEmployer.title}</p>
            </div>
          </div>
          <div className="general__info">
            <p className="contact__name under">Date de contact</p>
            <ul className="list">
              <li>Telefon: {aboutEmployer.phone}</li>
              <li> Fax: {aboutEmployer.fax}</li>
              <li> Email: {aboutEmployer.email} </li>
              <li>Adresa: {aboutEmployer.address}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="jd__apply">
        <Button text="Aplica" />
      </div>
    </div>
  );
};

export default Job;
