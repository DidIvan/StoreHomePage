var React = require("react");

var Beactive = React.createClass({
    render: function () {
        return (
            <div>
                <section className="work_it">
                    <div className="row">
                        <div className="work_it_img">
                            <img src="../../img/content/shutterstock_2.jpg" alt="be active"/>
                            <div className="work_it_cub">
                                <span>03</span>
                            </div>
                        </div>
                        <div className="work_it_content">
                            <h2>work it</h2>
                            <p>Enjoy being a student athlete, the recruiting
                                process can be overwhelming, we want to
                                make this a enjoyable experience. </p>
                        </div>
                        
                    </div>
                </section>
            </div>
        )
    }
});

module.exports = Beactive;