# Pet Finder Project

<p align="center">
  <img src="https://i.imgur.com/wKrFJcK.png" width="150" title="hover text">
</p>
<b>Pet Finder Project</b> - це студентський проект, мета якого є реалізувати централізовану базу даних оголошень про зниклих тварин.
Проект включає у собі REST API, React App, а також GPS-нашийник на базі Arduino.
<hr>
<b>Pet Finder Project</b> - is a student project whose main purpose is to implement a centralized database of missing animals.
The project includes the REST API, React App, and an Arduino-based GPS collar

<hr>

## .env File

- DB_URL=адресаКластеруПісляПаролюAtlas
- DB_USER=користувачБД
- DB_PASSWORD=парольБД
- secretTokenKey=КлючДляJWT
- PORT=порт

## Особливості | Features

- Розміщення оголошень про зниклих / знайдених тварин | Posting of missing / found animals
- Пошук по GPS-нашийнику | Search by GPS Collar
- Пошук по фільтру (тип тварини, стать, коли зник, т.д.) | Search by filter (animal type, gender, when it disappeared, etc.)

## Список технологій | Technology Stack

### Backend:

- NodeJS
- Express
- MongoDB

### Frontend:

- React
- SASS
- HTML5 (template)
- CSS3 (template)

### Нашийник | Collar:

- Arduino
- GPS Module (NEO-7M GPS NEO7MV2)
- C

### Розробники | Developers

- Oleg Stepaniuk (Software) - REST API, React App
- Andriy Koper (Hardware) - Collar
- Denis Stoliarchuk (Mentor)
- Vova Shevchyk (Mentor)
