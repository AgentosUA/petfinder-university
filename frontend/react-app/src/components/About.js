import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="text-center">Про нас</h2>
                        <img src="img/moc.jpg" alt="" width="420" />
                        <p><b>Pet Finder</b> - це студентський проект, мета якого створити веб-сайт для розміщення оголошень про зниклих тварин. На сайті буде можливість пошуку тварини за фільтрами(порода, колір, вік і т.д.), а також за ID-кодом, який буде прив'язаний до профілю господаря.</p>
                        <h3>Розробники</h3>
                        <ul class="just">
                            <li>Денис (Mentor)</li>
                            <li>Степанюк Олег (Team leader)</li>
                            <li>Шум Володимир (Front end)</li>
                            <li>Мацевко Олександр (Back end)</li>
                        </ul>			
                    </div>
                </div>
            </div>
        );
    }
}

export default About;