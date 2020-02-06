import React, { Component } from 'react';

import Wrapper from '../../components/Wrapper/Wrapper';

class HomePage extends Component {
  render() {
    return (
      <Wrapper>
        <main>
          <div class="wrapper">
            <section class="instruction">
              <h2>Досить зволікати, настав час шукати!</h2>
              <div class="instructions">
                <div class="item">
                  <h3>1</h3>
                  <p>
                    Зареєструйтеся
                    <br />
                    на сайті
                  </p>
                </div>
                <div class="item">
                  <h3>2</h3>
                  <p>
                    Подайте
                    <br />
                    оголошення
                  </p>
                </div>
                <div class="item">
                  <h3>3</h3>
                  <p>Поверніть улюбленця додому :)</p>
                </div>
              </div>
              <hr />
            </section>
            <section class="last-adverts">
              <h2>Вони шукають своїх господарів</h2>
              <h3>Останні оголошення</h3>
              <div class="adverts">
                <div class="item">
                  <img src="./img/animals/cat1.jpg" alt="animal" />
                  <button>Переглянути</button>
                </div>
                <div class="item">
                  <img src="./img/animals/dog2.jpg" alt="animal" />
                  <button>Переглянути</button>
                </div>
                <div class="item">
                  <img src="./img/animals/cat3.jpg" alt="animal" />
                  <button>Переглянути</button>
                </div>
                <div class="item">
                  <img src="./img/animals/dog1.jpg" alt="animal" />
                  <button>Переглянути</button>
                </div>
                <div class="item">
                  <img src="./img/animals/cat1.jpg" alt="animal" />
                  <button>Переглянути</button>
                </div>
                <div class="item">
                  <img src="./img/animals/dog2.jpg" alt="animal" />
                  <button>Переглянути</button>
                </div>
                <div class="item">
                  <img src="./img/animals/cat3.jpg" alt="animal" />
                  <button>Переглянути</button>
                </div>
                <div class="item">
                  <img src="./img/animals/dog1.jpg" alt="animal" />
                  <button>Переглянути</button>
                </div>
                <div class="item">
                  <img src="./img/animals/cat3.jpg" alt="animal" />
                  <button>Переглянути</button>
                </div>
                <div class="item">
                  <img src="./img/animals/dog1.jpg" alt="animal" />
                  <button>Переглянути</button>
                </div>
                <div class="item">
                  <img src="./img/animals/cat3.jpg" alt="animal" />
                  <button>Переглянути</button>
                </div>
                <div class="item">
                  <img src="./img/animals/dog1.jpg" alt="animal" />
                  <button>Переглянути</button>
                </div>
              </div>
              <hr />
            </section>
            <section class="collar">
              <h2>GPS-нашийник</h2>
              <h3>Зручно. Швидко. Надійно.</h3>
              <div class="collar-description">
                <img src="" alt="" />
                <p>Pet</p>
              </div>
              <hr />
            </section>
          </div>
        </main>
      </Wrapper>
    );
  }
}

export default HomePage;
