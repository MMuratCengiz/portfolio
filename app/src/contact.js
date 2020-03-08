import React from 'react';


// ---- CONTENT START ----
let content =
    <div id="content-inner3">
        <h2>Contact Me:</h2>
        <div className={"entry"}>
            <p>
                For any professional or non-professional reasons, reach out to me at: <br/><br/>

                <b>Phone: </b> 00355674820194 <br/>
                <b>Email: </b> cengizm9@gmail.com <br/>
                <b>LinkedIn: </b> <a href={"linkedin.com/in/murat-cengiz-639bbaa9/"}>/murat-cengiz-639bbaa9/</a>
            </p>
        </div>
    </div>
;
// ---- CONTENT END ----


class ContactContent extends React.Component {
    render() {
        return content;
    }
}

export default ContactContent;