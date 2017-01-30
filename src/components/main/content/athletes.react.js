var React = require("react");

var Athletes = React.createClass({
    render: function () {
        return (
            <div>
                <section className="athletes">
                    <div className="athletes_img">
                        <img src="../../img/content/footballer.png" alt="football player"/>
                    </div>

                    <div className="athletes_row1">
                        <div className="athletes_right">
                            <h2>Athletes</h2>
                            <div className="connection">
                                <span>01</span>
                                <h3>connection</h3>
                                <p>Connect with coaches directly, you can ping coaches to view profile.</p>
                            </div>
                        </div>
                    </div>
                    <div className="athletes_row2">
                        <div className="athletes_right">
                            <div className="collaboration">
                                <span>02</span>
                                <h3>collaboration</h3>
                                <p>Work with other student athletes to increase visibility. When you share and like
                                    other players videos it will increase your visibility as a player.
                                    This is the team work aspect to Surface 1.</p>
                            </div>
                        </div>
                    </div>
                    <div className="athletes_row3">
                        <div className="athletes_right">
                            <div className="growth">
                                <span>03</span>
                                <h3>growth</h3>
                                <p>Resources and tools for you to get better as a student Athelte.
                                    Access to training classes, tutor sessions, etc </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
});

module.exports = Athletes;