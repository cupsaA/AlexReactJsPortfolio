import React from "react";
import TimelineData from '../../../assets/Data'
import TimelineItem from "./Timeline/TimelineItem";
import classes from './Resume.module.css'
import TechnologyStack from './TechnologyStack/TechnologyStack'

const Resume = () => TimelineData.length > 0 && (
    <div>
        <div className={classes.Resume} id="resume">
            {TimelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx}/>
            ))}
            <br/>
        </div>
        <div className={classes.Stacks}>
            <TechnologyStack/>
        </div>
    </div>
);
export default Resume;