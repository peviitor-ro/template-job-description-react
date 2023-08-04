import React from "react";
import "../App.css";
import BuildingIcon from "../assets/building.svg";
import BriefcaseIcon from "../assets/briefcase.svg";
import ClipboardIcon from "../assets/clipboard.svg";
import ClockIcon from "../assets/clock.svg";
import MoneyIcon from "../assets/money.svg";
import MapIcon from "../assets/map.svg";
import recruiter from "../assets/recruiter.png";

const JobHeaderElement = ({ icon, text }) => (
  <div className="main__subtitles__info__item">
    {icon}
    <p>{text}</p>
  </div>
);

const JobHeader = (props) => {
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
  } = props;

  return (
    <div className="main columnFlex">
      <div className="main__container columnFlex">
        <div className="main__titles">
          <h1 className="main__titles__title">{title}</h1>
          <div className="main__titles__details columnFlex">
            <p className="main__titles__employer">Angajator: {employer}</p>
            <p className="main__titles__departament">
              Departament: {departament}
            </p>
          </div>
        </div>
        <div className="main__subtitles">
          <div className="main__subtitles__info columnFlex">
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
          <button className="main__backBtn">Aplica</button>
        </div>
      </div>
    </div>
  );
};

const JobBody = (props) => {
  const {
    jobDescription,
    responsabilities,
    demands,
    oferings,
    generalInfo,
    aboutEmployer,
  } = props;

  return (
    <div className="jobBody columnFlex">
      <div className="jobDescription columnFlex">
        <h2 className="jobDescriptionHeader">Descrierea meseriei</h2>
        <p>{jobDescription}</p>
      </div>
      <div className="jobResponsabilities columnFlex ">
        <h2 className="jobDescriptionHeader under">Responsabilitati</h2>
        <ul className="listItems">
          {responsabilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
      <div className="jobDemands columnFlex ">
        <h2 className="jobDescriptionHeader under">Cerinte</h2>
        <ul className="listItems">
          {demands.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
      <div className="jobOferings columnFlex">
        <h2 className="jobDescriptionHeader">Ce oferim</h2>
        <ul className="listItems">
          {oferings.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
      <div className="jobGeneralInformation columnFlex ">
        <h2 className="jobDescriptionHeader under">
          Alte informatii (optional)
        </h2>
        <ul className="listItems">
          {generalInfo.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
      <hr></hr>
      <div className="aboutEmployer columnFlex">
        <div className="contactEmployer columnFlex">
          <p className="under employerP">Persoana de contact</p>
          {/* To replace img src={aboutEmployer.photo} */}
          <img src={recruiter} alt="" />
          <div>
            <p className="employerName">{aboutEmployer.name}</p>
            <p className="employerJob">{aboutEmployer.title}</p>
          </div>
        </div>
        <div className="generalInfo columnFlex">
          <p className="under employerP">Date de contact</p>
          <ul className="listItems">
            <li>Telefon: {aboutEmployer.phone}</li>
            <li> Fax: {aboutEmployer.fax}</li>
            <li> Email: {aboutEmployer.email} </li>
            <li>Adresa: {aboutEmployer.address}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

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
  } = props;

  return (
    <div className="job__test">
      <JobHeader {...props} />
      <JobBody {...props} />
    </div>
  );
};

export default Job;
