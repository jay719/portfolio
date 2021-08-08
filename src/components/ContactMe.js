import React from 'react'

export default function Resume () {

    return (
        <div className="Resume">
            <h2>Experience</h2>
            <div className="experience">
                <h3>Quality Analyst, Quantum Metric || July 2021-</h3>
                <li></li>
                <li></li>
                <li></li>

                <h3>Service Engineer, Tek Experts || August 2019 - October 2020</h3>
                <li>Selected to lead Jedi Mentorship program for each engineer vertical, progressing to Service Engineer 3.</li>
                <li> Facilitated and provided insightful feedback for a pilot shadowing program that grew to a global program. </li>
                <li>Interacted with end users and other technical personnel to identify and correct issues regarding Azure SQL Databases, Azure Active Record, and Azure Virtual Machines.</li>
                <li> Supported peers by resolving sensitive customer problems with large lapse of time in communication.</li>
                <li>Maintained continuous, consistent,and professional communication with customers, peers, and team.</li>

                <h3>Custodian, Jan Pro Cleaning || February 2018 - August 2019</h3>
                <li>Responsible for leading 2 cleaning crews and 3 work sites.</li>
                <li>Implemented new cleaning processes and strategies to reduce necessary man-hours by 5 hours per week.</li>
                <li>Checked alarms, locked entrances, and looked for any safety hazards in and around multiple buildings.</li>
                
            </div>
            
            <div className="education">
            
                <aside>
                <h2>Education</h2>
                <h3>Flatiron School, Denver, CO October 2020 - January 2021</h3>
                <p>Full-Stack Web Development, Ruby on Rails and JavaScript program.</p>
                <h3>Pikes Peak Community College, Colorado Springs, CO August 2014 - May 2020</h3>
                <p>Associate of General Sciences-(Classes through CSU Pueblo) Mathematics and Science</p>
                </aside>
                <aside className="skills">
                    <h2>Skills</h2>
                    <li>Technical: Ruby, Rails, SQL, PostgreSQL, Javascript, React.js, React Native, Vue.js, Azure VM’s & Azure SQL Databases</li>
                </aside>
            </div>
            
            
        </div>
    )
}