import React from "react";
import Header from "./Header";

const Progress = () => {
  return (
    <div>
      <Header />
      <form className="ui form">
        <div className="field">
          <label htmlFor="name-field">Task Name</label>
          <input type="text" id="name-field" placeholder="Task Name" />
        </div>

        <div className="field">
          <label>Start Date</label>
          <input type="date" id="start-field" placeholder="Start Date" />
        </div>

        <div className="field">
          <label>End Date</label>
          <input type="date" id="end-field" placeholder="End Date" />
        </div>

        <div className="field">
          <div className="ui checkbox">
            <label htmlFor="">Set Reminder</label>
            <input type="checkbox" name="Reminder" id="checkbox" />
          </div>
        </div>
        <input type="submit" className="fluid ui button" value="Submit" />
      </form>
    </div>
  );
};
export default Progress;
