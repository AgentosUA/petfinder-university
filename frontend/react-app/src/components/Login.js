import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 min-block">
                            <h2 class="text-center">Авторизація</h2>
                            <form action="" method="post" class="reg-form">
                                <input type="text" placeholder="Логін" required=""/><br/>
                                <input type="password" placeholder="Пароль" required=""/><br/>
                                <div class="f-left">
                                    <Link to="">Забули пароль?</Link><br/>
                                </div>
                                <button class="f-right">Увійти</button>
                            </form>
                            <h2 class="text-center">Реєстрація</h2>
                            <form action="" method="post" class="reg-form">
                                <input type="text" placeholder="Логін" required=""/><br/>
                                <input type="password" placeholder="Пароль" required=""/><br/>
                                <input type="password" placeholder="Повторіть Пароль" required=""/><br/>
                                <input type="password" placeholder="Email" required=""/><br/>
                                <button class="f-right">Реєстрація</button>
                            </form>
                        </div>
                    </div>
	            </div>
            </div>
        );
    }
}
export default Login;