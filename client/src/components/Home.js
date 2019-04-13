import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center">Зникла домашня тварина?</h2>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-2">	
                                    <div className="instruction">
                                        <h3>1</h3>
                                        <p>Зареєструйтесь на сайті</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-2">
                                    <div className="instruction">
                                        <h3>2</h3>
                                        <p>Подайте оголошення</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-8">
                                    <div className="instruction">
                                        <h3>3</h3>
                                        <p>Поверніть улюбленця додому :)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <hr/>
                            <h2 className="text-center">Вони шукають своїх господарів</h2>
                            <h3 className="text-center">Не будь байдужим, допоможи знайти власника!</h3>
                            <div className="last-lost">
                                <a href="profile.html"><div className="item">
                                    <img src="img/cat1.jpg" alt=""/>
                                    <h3>Кежик</h3>
                                    <p>Зник: 24.04.2017</p>
                                    <p>Тел.: 050 72 49 612</p>
                                    <p>Опис: Грайливий, має короткі лапи</p>
                                </div></a>
                                <a href="profile.html"><div className="item">
                                    <img src="img/dog1.jpg" alt=""/>
                                    <h3>Кежик</h3>
                                    <p>Зник: 24.04.2017</p>
                                    <p>Тел.: 050 72 49 612</p>
                                    <p>Опис: Грайливий, має короткі лапи</p>
                                </div></a>
                                <a href="profile.html"><div className="item">
                                    <img src="img/crol1.jpg" alt=""/>
                                    <h3>Кежик</h3>
                                    <p>Зник: 24.04.2017</p>
                                    <p>Тел.: 050 72 49 612</p>
                                    <p>Опис: Грайливий, має короткі лапи</p>
                                </div></a>
                                <a href="profile.html"><div className="item">
                                    <img src="img/cat2.jpg" alt=""/>
                                    <h3>Кежик</h3>
                                    <p>Зник: 24.04.2017</p>
                                    <p>Тел.: 050 72 49 612</p>
                                    <p>Опис: Грайливий, має короткі лапи</p>
                                </div></a>
                                <a href="profile.html"><div className="item">
                                    <img src="img/dog2.jpg" alt=""/>
                                    <h3>Кежик</h3>
                                    <p>Зник: 24.04.2017</p>
                                    <p>Тел.: 050 72 49 612</p>
                                    <p>Опис: Грайливий, має короткі лапи</p>
                                </div></a>
                                <a href="profile.html"><div className="item">
                                    <img src="img/dog3.jpg" alt=""/>
                                    <h3>Кежик</h3>
                                    <p>Зник: 24.04.2017</p>
                                    <p>Тел.: 050 72 49 612</p>
                                    <p>Опис: Грайливий, має короткі лапи</p>
                                </div></a>
                                <a href="profile.html"><div className="item">
                                    <img src="img/perrot1.jpg" alt=""/>
                                    <h3>Кежик</h3>
                                    <p>Зник: 24.04.2017</p>
                                    <p>Тел.: 050 72 49 612</p>
                                    <p>Опис: Грайливий, має короткі лапи</p>
                                </div></a>
                                <a href="profile.html"><div className="item">
                                    <img src="img/cat3.jpg" alt=""/>
                                    <h3>Кежик</h3>
                                    <p>Зник: 24.04.2017</p>
                                    <p>Тел.: 050 72 49 612</p>
                                    <p>Опис: Грайливий, має короткі лапи</p>
                                </div></a>
                            </div>
                            <hr/>
                            <div className="contact-info">
                                <h2 className="text-center">Виникли запитання?</h2>
                                <form className="reg-form" action="post">
                                    <input type="text" placeholder="ПІБ" required=""/> <br/>
                                    <input type="mail" placeholder="Email" required=""/>
                                    <textarea placeholder="Ваше запитання..." required=""></textarea>
                                    <button className="f-right">Надіслати</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>	
        );
    }
}

export default Home;