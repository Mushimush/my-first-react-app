/* eslint-disable react/prop-types */
import React from "react";

const Overview = (props) => {
    const { tasks } = props;

    return (
        <ul>
            {tasks.map((task) => {
                return <li key={tasks.id}>{task.text}</li>;
            })}
        </ul>
    );
};

export default Overview;