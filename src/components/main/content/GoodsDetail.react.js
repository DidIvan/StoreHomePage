import React, {Component} from 'react';
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
    "title": 'Pump',
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
            "name": "supply",
            "value": 220,
            "measureName": 'volts',
            "measureCon": 'VAC'
        }, {
            "id": '2',
            "name": "pressure",
            "value": 10,
            "measureName": 'bar',
            "measureCon": 'bar'
        }, {
            "id": '3',
            "name": "power",
            "value": 0.06,
            "measureName": 'Watt',
            "measureCon": 'kW'
        }
    ]
}

class GoodsDetail extends Component {
    render() {
        var properties = goodsDetail.propertyValues.map((item)=> {
                return (
                    <li>{item.name} : {item.value} {item.measureCon}</li>
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
                        <div className="divider"></div>
                        <div className="row">
                            <div className="rating">
                            </div>
                            <a className="waves-effect waves-light btn green right">Заказать</a>
                        </div>
                        <div className="divider"></div>
                        <div className="row">
                            <div className="detail-property left">
                                <h5>Характеристики</h5>
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