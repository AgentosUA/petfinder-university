import React, { Component } from 'react';


class Search extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 search-result">
                            <article>
                                <h3>Мурик</h3>
                                <img src="img/cat1.jpg" alt=""/>
                                <b>Опис:</b>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nemo, doloribus sed illo, repudiandae fugit itaque non cum atque aperiam similique velit enim soluta necessitatibus libero reiciendis ducimus delectus rem.</p>
                                Статус: <b class="user-found">Знайдений</b> <br/>
                                <b>Телефон: +38 050 72 49 612</b> <br/>
                                Код: <b>#9nf4g5</b><br/>
                                <a href="profile.html"><button class="detailed-btn">Переглянути</button></a>
                                <div class="clear"></div>
                            </article>
                            <article>
                                <h3>Барс</h3>
                                <img src="img/dog1.jpg" alt=""/>
                                <b>Опис:</b>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nemo, doloribus sed illo, repudiandae fugit itaque non cum atque aperiam similique velit enim soluta necessitatibus libero reiciendis ducimus delectus rem.</p>
                                Статус: <b class="user-rank">Зник</b> <br/>
                                <b>Телефон: +38 050 72 49 612</b> <br/>
                                <b>Код: #63guk5</b><br/>
                                <a href="profile.html"><button class="detailed-btn">Переглянути</button></a>
                                <div class="clear"></div>
                            </article>
                        </div>
                        <div class="col-md-4">
                            <h2 class="text-center">Фільтр:</h2>
                            <form action="" method="POST" class="filter-search">
                                <div>Тип тварини</div>
                                <select name="animal-type">
                                    <option value="all-animal">Всі</option>
                                    <option value="saab">Коти</option>
                                    <option value="fiat">Собаки</option>
                                    <option value="audi">Інші тварини</option>
                                </select>
                                <div>Статус</div>
                                <select name="animal-color">
                                    <option value="all-animal">Всі</option>
                                    <option value="saab">Зниклі</option>
                                    <option value="fiat">Знайдені</option>
                                </select>
                                <div>Порода тварини</div>
                                <select name="animal-breed">
                                    <option value="all-animal">Всі</option>
                                    <option value="saab">Породисті</option>
                                    <option value="fiat">Вуличні</option>
                                </select>
                                <div>Колір хутра</div>
                                <select name="animal-color">
                                    <option value="all-animal">Всі</option>
                                    <option value="saab">Сірій</option>
                                    <option value="fiat">Рижий</option>
                                    <option value="audi">Білий</option>
                                    <option value="audi">Чорний</option>
                                    <option value="saab">Інший</option>
                                </select>
                                <button>Застосувати</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Search;