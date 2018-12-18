import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="text-center">Зникла домашня тварина?</h2>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-4 col-2">	
                                    <div class="instruction">
                                        <h3>1</h3>
                                        <p>Зареєструйтесь на сайті</p>
                                    </div>
                                </div>
                                <div class="col-md-4 col-2">
                                    <div class="instruction">
                                        <h3>2</h3>
                                        <p>Подайте оголошення</p>
                                    </div>
                                </div>
                                <div class="col-md-4 col-8">
                                    <div class="instruction">
                                        <h3>3</h3>
                                        <p>Поверніть улюбленця додому :)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <hr/>
                            <h2 class="text-center">Вони шукають своїх господарів</h2>
                            <h3 class="text-center">Не будь байдужим, допоможи знайти власника!</h3>
                            <div class="last-lost">
                                <a href="profile.html"><div class="item">
                                    <img src="img/cat1.jpg" alt=""/>
                                    <h3>Кежик</h3>
                                    <p>Зник: 24.04.2017</p>
                                    <p>Тел.: 050 72 49 612</p>
                                    <p>Опис: Грайливий, має короткі лапи</p>
                                </div></a>
                                <a href="profile.html"><div class="item">
                                    <img src="img/dog1.jpg" alt=""/>
                                    <h3>Кежик</h3>
                                    <p>Зник: 24.04.2017</p>
                                    <p>Тел.: 050 72 49 612</p>
                                    <p>Опис: Грайливий, має короткі лапи</p>
                                </div></a>
                                <a href="profile.html"><div class="item">
                                    <img src="img/crol1.jpg" alt=""/>
                                    <h3>Кежик</h3>
                                    <p>Зник: 24.04.2017</p>
                                    <p>Тел.: 050 72 49 612</p>
                                    <p>Опис: Грайливий, має короткі лапи</p>
                                </div></a>
                                <a href="profile.html"><div class="item">
                                    <img src="img/cat2.jpg" alt=""/>
                                    <h3>Кежик</h3>
                                    <p>Зник: 24.04.2017</p>
                                    <p>Тел.: 050 72 49 612</p>
                                    <p>Опис: Грайливий, має короткі лапи</p>
                                </div></a>
                                <a href="profile.html"><div class="item">
                                    <img src="img/dog2.jpg" alt=""/>
                                    <h3>Кежик</h3>
                                    <p>Зник: 24.04.2017</p>
                                    <p>Тел.: 050 72 49 612</p>
                                    <p>Опис: Грайливий, має короткі лапи</p>
                                </div></a>
                                <a href="profile.html"><div class="item">
                                    <img src="img/dog3.jpg" alt=""/>
                                    <h3>Кежик</h3>
                                    <p>Зник: 24.04.2017</p>
                                    <p>Тел.: 050 72 49 612</p>
                                    <p>Опис: Грайливий, має короткі лапи</p>
                                </div></a>
                                <a href="profile.html"><div class="item">
                                    <img src="img/perrot1.jpg" alt=""/>
                                    <h3>Кежик</h3>
                                    <p>Зник: 24.04.2017</p>
                                    <p>Тел.: 050 72 49 612</p>
                                    <p>Опис: Грайливий, має короткі лапи</p>
                                </div></a>
                                <a href="profile.html"><div class="item">
                                    <img src="img/cat3.jpg" alt=""/>
                                    <h3>Кежик</h3>
                                    <p>Зник: 24.04.2017</p>
                                    <p>Тел.: 050 72 49 612</p>
                                    <p>Опис: Грайливий, має короткі лапи</p>
                                </div></a>
                            </div>
                            <hr/>
                            <div class="contact-info">
                                <h2 class="text-center">Виникли запитання?</h2>
                                <form class="reg-form" action="post">
                                    <input type="text" placeholder="ПІБ" required=""/> <br/>
                                    <input type="mail" placeholder="Email" required=""/>
                                    <textarea placeholder="Ваше запитання..." required=""></textarea>
                                    <button class="f-right">Надіслати</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>	
        );
    }
}

export default Home;