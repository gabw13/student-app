import React from "react";

const ClassInfo = (props) => {
  return (
    <section>
      <h2> Class Information</h2>
      <ul>
        <li> Name: Team Semi-formed-colons</li>
        <li>Number of members: {props.classSize}</li>
      </ul>
    </section>
  );
};

export default ClassInfo;
