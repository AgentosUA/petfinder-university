import React, { Component } from 'react';


class Advert extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-center">Подати оголошення</h2>
                            <div className="col-md-12 min-block">
                                <form action="/pets" method="POST" className="reg-form">
                                    <input type="text" placeholder="Ім'я" required="" /><br/>
                                    <input type="text" placeholder="Ім'я" required="" /><br/>
                                    <div>Тип тварини</div>
                                    <select>
                                        <option value="all-animal">Всі</option>
                                        <option value="cat">Коти</option>
                                        <option value="dog">Собаки</option>
                                        <option value="other">Інші тварини</option>
                                    </select>
                                    <div>Статус</div>
                                    <select>
                                        <option value="all-animal">Всі</option>
                                        <option value="saab">Зниклі</option>
                                        <option value="fiat">Знайдені</option>
                                    </select>
                                    <textarea rows="4" cols="50"></textarea>
                                    <input type="file" className="f-left"/>Завантажте зображення
                                    <input type="submit" className="f-right" value="Подати оголошення"></input>
                                </form>               
                            </div>
                        </div>
                    </div>	
                </div>
            </div>
        );
    }
}

export default Advert;