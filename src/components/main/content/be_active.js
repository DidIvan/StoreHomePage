var React = require("react");

var Beactive = React.createClass({
    render: function () {
        return (
            <div>
                <section className="be_active">
                    <div className="row">
                        <div className="be_active_img">
                            <img src="../../img/content/shutterstock_1.jpg" alt="be active"/>
                            <div className="be_active_cub">
                                <span>01</span>
                            </div>
                        </div>
                        <div className="be_active_content">
                            <h2>be active</h2>
                            <p>Post videos with your skills. Like and follow others to be more popular.</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
});

module.exports = Beactive;