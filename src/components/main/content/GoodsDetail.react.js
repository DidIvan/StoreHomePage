import React, {Component} from 'react';
import Button from '../../../matuicomp/button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../../../css/components-style/goodsDetail.css';
const DEFAULT_PICTURE1 = '../../../../public/img/default/no_photo.png';

var pictureConverter1 = function (picture) {
    if (picture) {
        return picture;
    }
    return DEFAULT_PICTURE1;
}

var goodsDetail = {
    "id": '1',
    "title": 'Shirts',
    "picture": 'img/default/no_photo.png',
    "description": 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur cum cumque' +
    ' deserunt enim exercitationem explicabo minima molestiae nam neque nisi perspiciatis praesentium,' +
    ' quae quos similique sint sit sunt tempore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur cum cumque' +
    ' deserunt enim exercitationem explicabo minima molestiae nam neque nisi perspiciatis praesentium,' +
    ' quae quos similique sint sit sunt tempore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur cum cumque' +
    ' deserunt enim exercitationem explicabo minima molestiae nam neque nisi perspiciatis praesentium,' +
    ' quae quos similique sint sit sunt tempore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur cum cumque' +
    ' deserunt enim exercitationem explicabo minima molestiae nam neque nisi perspiciatis praesentium,' +
    ' quae quos similique sint sit sunt tempore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur cum cumque' +
    ' deserunt enim exercitationem explicabo minima molestiae nam neque nisi perspiciatis praesentium,' +
    ' quae quos similique sint sit sunt tempore.',
    "price": '150',
    "propertyValues": [
        {
            "id": '1',
            "concept": "Casual",
            "composition": "Cotton 100%",
            "color": "black",
            "size": 'XS'
        }
    ]
}

class GoodsDetail extends Component {
    render() {
        var properties = goodsDetail.propertyValues.map((item)=> {
                return (
                    <div>
                        <h4>CONCEPT</h4>
                        <li>{item.concept}</li>
                        <h4>COMPOSITION</h4>
                        <li>{item.composition}</li>
                        <h4>COLOR</h4>
                        <li>{item.color}</li>
                        <h4>SIZE</h4>
                        <li>{item.size}</li>
                    </div>

                );
            }
        );
        return (
            <div className="goods-detail">
                <div className="row">
                    <div className="card-panel">
                        <div className="title-detail">
                            <h5>{goodsDetail.title}</h5>
                        </div>

                        <div className="row">
                            <div className="card-image">
                                <a href="#">
                                    <img src={pictureConverter1(goodsDetail.picture)}/></a>
                            </div>
                            <div className="description">
                                {goodsDetail.description}
                            </div>
                        </div>
                        <div className="row buttons_row">
                            <div className="rating">
                            </div>
                            <MuiThemeProvider className="button_order">
                                <Button className="button_order" label="Заказать"/>
                            </MuiThemeProvider>
                        </div>
                        <div className="row">
                            <div className="detail-property left">
                                <h3>Details</h3>
                                <ul>{properties}</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
;

export default GoodsDetail;