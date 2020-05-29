import React from "react";
import classes from'./TimelineItem.module.css'

const TimelineItem = ({data}) => (
        <div className={classes.TimelineItem}>
            <div className={classes.TimelineItemContent}>
            <span className={classes.tag} style={{background: data.category.color}}>
                {data.category.tag}
            </span>
                <time>{data.date}</time>
                <p>{data.company}</p>
                <p>{data.text}</p>
                {data.link && (
                    <a href={data.link.url}
                        target="_blank"
                        rel="noopener noreferrer">
                        {data.link.text}
                    </a>
                )}
                <span className={classes.circle}/>
            </div>
        </div>
)

export default TimelineItem