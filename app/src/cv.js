import React from 'react';
import Utils from './utils.js';
import './css/cv.css';

class Education extends React.Component {
    render() {
        return super.render();
    }
}

class WorkExperience extends React.Component {
    render() {
        return <div class={"entry"}>
            <span className={"title"}>{this.props.title}</span><br/>
            <span><b>From:</b> {this.props.from_date}</span><span><b>&nbsp;&nbsp;&nbsp;&nbsp;To:</b> {this.props.to_date}</span><br/>
            <span><b>Main Tools & Technologies: </b>{this.props.tech}</span><br/>
            <span><b>Duties: </b></span><br/>{this.props.duties}
            <span><b>Notable achievements: </b></span><br/>{this.props.achievements}
        </div>
    }
}

class SkillsNConferences {

}

class CVContent extends React.Component {
    render() {
        return <div id="content-inner1">
            <h1>Work Experience: </h1>
            {this.job3()}
            {this.job2()}
            {this.job1()}
        </div>;
    }

    job3() {
        let duties = <ul>
            <li>Help the team with a large variety of technical and design related issues.</li>
            <li>Review the design & the code for new products released.</li>
            <li>Continue with the development duties.</li>
        </ul>;

        let achievements = <ul>
            <li>Design & Develop the driver core that simplifies developing a new driver greatly.</li>
            <li>Design an interface to allow File Storage drivers interact with certain parsers (Avro, JSON, XML)
                ultimately
                allowing them to be used as standard SQL drivers.
            </li>
            <li>Implement the Apache Kafka integration for Data Sync that allows it to be used as a destination, this
                opened
                up a lot of use cases where APIs could be read in Apache Kafka streams.
            </li>
        </ul>;

        return <WorkExperience from_date={"01/02/2016"} to_date={"10/05/2019"} tech={"Java, C#, JDBC, ODBC, SQL92"}
                                duties={duties} achievements={achievements}
                                title={"Software developer at CData Software (Albania)"}/>;
    }

    job2() {
        let duties = <ul>
            <li>Work on developing and maintaining an application (namely Data Sync) that caches/copies data from popular sources (Salesforce, QuickBooks Online) into relational databases (SQL Server, MySQL).</li>
            <li>Develop ADO, JDBC drivers for a various of different sources, these drivers allow API's to be accessed with standard SQL92 syntax.</li>
            <li>Actively work on fixing customer bugs & issues.</li>
        </ul>;

        let achievements = <ul>
            <li>Develop the Google Spanner (Cloud relational database, driver developed using Google Protobuffers protocol) and the Amazon Athena driver achieving faster reads than competition.</li>
            <li>Develop the Couchbase driver (Fully NoSQL with a very large feature support), with SQL to N1QL conversions as well as advanced JSON metadata support (child tables, object/array flattening, etc..).</li>
            <li>Bring Data Sync to work unimpaired with a large variety of different destinations including but not limited to: Derby, SQLite, SQL Server, Oracle DB, PostgreSQL and more.</li>
        </ul>;

        return <WorkExperience from_date={"10/05/2019"} to_date={"Present"} tech={"Java, C#, JDBC, ODBC, SQL92"}
                                duties={duties} achievements={achievements}
                                title={"Senior development supervisor at CData Software (Albania)"}/>
    }

    job1() {
        return <div class={"entry"}>
            <span className={"title"}>Teacher assistant at Epoka University (Albania) </span><br/>
            <span><b>From:</b>02/02/2014</span><span><b>&nbsp;&nbsp;&nbsp;&nbsp;To:</b>15/06/2014</span><br/>
            <span><b>Duties: </b></span><br/>Help with the Data structures and Algorithms course. Check programming assignments, generate programming course material, instruct lab lessons.
        </div>;
    }
}

export default CVContent;