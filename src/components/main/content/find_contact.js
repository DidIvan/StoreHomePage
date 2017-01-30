var React = require("react");

var Find_contact = React.createClass({
    render: function () {
        return (
            <div>
                <section className="find_contact">
                    <div className="row">
                        <div className="find_contact_img">
                            <img src="../../img/content/bigstock-Football-players-and-coach-dis-49690757.jpg" alt="find contact"/>
                            <div className="find_contact_cub">
                                <span>02</span>
                            </div>
                        </div>
                        <div className="find_contact_content">
                            <h2>find contact</h2>
                            <p>Contact others to find right coach
                                or athlete you are looking for. </p>
                        </div>
                        
                    </div>
                </section>
            </div>
        )
    }
});

module.exports = Find_contact;