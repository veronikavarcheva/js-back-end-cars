// [V] initialize and configure Express app (initialize middleware (body parser))
// [V] initialize templating lib
// [V] create home controller
// [V] bind routing
// [] create layout
// create data service
// implement controllers

//импортваме си express, и това връща функция (която е factory function):
const express = require('express');
//импортваме си express-handlebars:
const hbs = require('express-handlebars');

const carsService = require('./services/cars');

const { about } = require('./controllers/about');
const { create } = require('./controllers/create');
const { details } = require('./controllers/details');
const { home } = require('./controllers/home');
const { notFound } = require('./controllers/notFound');
//като извикаме функцията, това ще ни инициализира инстанция на приложениято и я запазваме в променливатa аpp:
const app = express();

//добавяме енджина като 1.подаваме екзтенжъна, който ще се използва и 2.подаваме една ф-ция, която връща един обект, от който вземаме engine с .engine:
app.engine('hbs', hbs.create({
    extname: '.hbs'
}).engine);
//добавяме настройката, за да си спестим писане по-нататък, при рендерирането т.е.  да търси в папка view съответния шаблон без да трябва да пишем разширението '.hbs':
app.set('view engine', '.hbs')

//казвам на аpp, че ще ползваме urlencoded, това само променя библиотеката, която ще използваме за разкодиране:
app.use(express.urlencoded({extended: true}));
//вързваме статичните файлове към app:
app.use('/static', express.static('static'));
app.use(carsService());
//на наклонена ми изпълни home:
app.get('/', home);
app.get('/about', about);
app.get('/create', create);
app.get('/details/:id', details);

app.all('*', notFound);

//стартираме app-a:
app.listen(3000, () => console.log('Server started on port 3000'));