import React, { Component } from 'react';

class Pets extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            name: [],
            count: []
        }
    }

    componentDidMount() {
        fetch('/pets')
        .then(res => res.json())
        .then(pets => this.setState({name: pets.pets[0].name}, () => console.log('Pets fetched...', pets.pets[0].name)));
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 search-result">
                        <h2>Знайдено: {this.state.count}</h2>
                            <article>
                                <h3>Age: {this.state.name}</h3>
                                <img src="" alt="" />
                                <b>Опис:</b>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nemo, doloribus sed illo, repudiandae fugit itaque non cum atque aperiam similique velit enim soluta necessitatibus libero reiciendis ducimus delectus rem.</p>
                                Статус: <b className="user-found">Знайдений</b> <br />
                                <b>Телефон: +38 050 72 49 612</b> <br />
                                Код: <b>#9nf4g5</b><br />
                                <a href="profile.html"><button className="detailed-btn">Переглянути</button></a>
                                <div className="clear"></div>
                            </article>
                        </div>
                        <div className="col-md-4">
                            <h2 className="text-center">Фільтр:</h2>
                            <form action="" method="POST" className="filter-search">
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
export default Pets;