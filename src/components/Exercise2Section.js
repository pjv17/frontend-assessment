import React from "react";
import "./styles/Exercise2Section.scss";
import getDataJson from "./assets/json/data.json";
import Accordion from "react-bootstrap/Accordion";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Exercise2Section = () => {
  const MobileResults = [];
  const DesktopResults = [];
  let AccordionCounter = 1;
  getDataJson.forEach((data) => {
    MobileResults.push(
      <Accordion.Item eventKey={"event-" + AccordionCounter}>
        <Accordion.Header>
          <h2>{data.title}</h2>
        </Accordion.Header>
        <Accordion.Body>
          <div
            className="accordion-content"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </Accordion.Body>
      </Accordion.Item>
    );
    AccordionCounter++;
  });
  let TabCounter = 1;
  getDataJson.forEach((data) => {
    DesktopResults.push(
      <Tab eventKey={"event-" + TabCounter} title={<h2>{data.title}</h2>}>
        <div
          className="tab-inner-content"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </Tab>
    );
    TabCounter++;
  });

  const question = ("b" + "a" + +"a" + "a").toLowerCase();
  return (
    <div className="container py-5">
      <div className="display-desktop d-none d-sm-block">
        <Tabs defaultActiveKey="event-1" id="exercise-2-tabs">
          {DesktopResults}
        </Tabs>
      </div>
      <div className="display-mobile d-sm-none">
        <Accordion defaultActiveKey="event-1">{MobileResults}</Accordion>
      </div>

      <div className="bonus-question mt-5 py-5">
        <h2>Bonus Points:</h2>
        <p>
          Explain why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is
          banana.
        </p>
        <p>
          <strong>Output:</strong> {question}
        </p>
        <p>
          <strong>Answer:</strong> It is because using plus means concatenation
          if the value is string b + a + (+ 'a' is = NaN) + a then convert
          string to lowercse that's why the output is banana.
        </p>
      </div>
    </div>
  );
};
export default Exercise2Section;
