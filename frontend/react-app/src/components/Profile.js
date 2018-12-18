import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 left-bar">
                            <h3 className="text-center">Олег Степанюк</h3>
                            <img src="img/ava.jpg" alt=""/><br/>
                            <p className="user-rank">Адміністратор</p>
                            <p className="user-code">Код: #76f8kg</p>
                            <Link to="#">Редагувати</Link>
                            <Link to="#">Додати</Link>
                            <Link to="#">Повідомлення</Link>
                            <Link to="#">Вихід</Link>
                        </div>
                        <div className="col-md-10 right-bar">
                            <h2 className="text-center">Мої улюбленці</h2>
                            <div>
                                <h3>Мурик</h3>
                                <img src="img/cat1.jpg" alt=""/>
                                <b>Опис:</b>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nemo, doloribus sed illo, repudiandae fugit itaque non cum atque aperiam similique velit enim soluta necessitatibus libero reiciendis ducimus delectus rem.</p>
                                <b className="user-code">Статус: Вдома</b> <br/>
                                <b>Телефон: +38 050 72 49 612</b>
                                <div className="clear"></div>
                            </div>
                            <div>
                                <h3>Барс</h3>
                                <img src="img/dog1.jpg" alt=""/>
                                <b>Опис:</b>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nemo, doloribus sed illo, repudiandae fugit itaque non cum atque aperiam similique velit enim soluta necessitatibus libero reiciendis ducimus delectus rem.</p>
                                <b className="user-rank">Статус: Зник</b> <br/>
                                <b>Телефон: +38 050 72 49 612</b>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Profile;
