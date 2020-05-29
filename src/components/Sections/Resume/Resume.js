import React from "react";
import TimelineData from '../../../assets/Data'
import TimelineItem from "./Timeline/TimelineItem";
import classes from './Resume.module.css'

const Resume = () => TimelineData.length > 0 && (
    <div className={classes.Resume} id="resume">
        {TimelineData.map((data, idx) =>(
            <TimelineItem data={data} key={idx}/>
        ))}
    </div>

)
export default Resume;