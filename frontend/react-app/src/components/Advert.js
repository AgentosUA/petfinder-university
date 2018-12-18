import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Advert extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-center">Подати оголошення</h2>
                            <div className="col-md-12 min-block">
                                <form action="" method="POST" className="reg-form">
                                    <input type="text" placeholder="Ім'я" required="" /><br/>
                                    <input type="date" placeholder="Дата" required="" /><br/>
                                    <div>Тип тварини</div>
                                    <select>
                                        <option value="all-animal">Всі</option>
                                        <option value="saab">Коти</option>
                                        <option value="fiat">Собаки</option>
                                        <option value="audi">Інші тварини</option>
                                    </select>
                                    <div>Статус</div>
                                    <select>
                                        <option value="all-animal">Всі</option>
                                        <option value="saab">Зниклі</option>
                                        <option value="fiat">Знайдені</option>
                                    </select>
                                    <div>Порода тварини</div>
                                    <select>
                                        <option value="all-animal">Всі</option>
                                        <option value="saab">Породисті</option>
                                        <option value="fiat">Вуличні</option>
                                    </select>
                                    <div>Колір хутра</div>
                                    <select>
                                        <option value="all-animal">Всі</option>
                                        <option value="saab">Сірій</option>
                                        <option value="fiat">Рижий</option>
                                        <option value="audi">Білий</option>
                                        <option value="audi">Чорний</option>
                                        <option value="saab">Інший</option>
                                    </select><br/><br/>
                                    <textarea rows="4" cols="50"></textarea>
                                    <input type="file" className="f-left"/>Завантажте зображення
                                    <button className="f-right">Подати оголошення</button>
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