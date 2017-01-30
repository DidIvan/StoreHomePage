var React = require("react");

var Players = React.createClass({
    render: function () {
        return (
            <div>
                <section className="players">
                    <div className="players_img">
                        <img src="../../img/content/basketballer.png" alt="basketball player"/>
                    </div>
                    <div className="players_row1">
                        <div className="players_right">
                            <h2>Players</h2>
                            <div className="connection">
                                <span>01</span>
                                <h3>connection</h3>
                                <p>Connect with talented athlete directly, you can watch their
                                    skills through video showreels directly from Surface 1.</p>
                            </div>
                        </div>
                    </div>
                    <div className="players_row2">
                        <div className="players_right">
                            <div className="collaboration">
                                <span>02</span>
                                <h3>collaboration</h3>
                                <p>Work with recruiter to increase your chances of finding
                                    talented athlete.</p>
                            </div>
                        </div>
                    </div>
                    <div className="players_row3">
                        <div className="players_right">
                            <div className="growth">
                                <span>03</span>
                                <h3>growth</h3>
                                <p>Save your time, recruit proper athletes for your team.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
});

module.exports = Players;