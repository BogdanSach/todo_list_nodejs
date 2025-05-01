//Підключаємо залежність express
var express = require('express');
//Викликаємо express
var app = express();
//Налаштовуємо маршрут root(/) URL-адреси
//Відображаємо index.ejs і додані завдання
app.get("/", function (req, res) {
    res.render("index", { task: task });
});

//Налаштовуємо обробник шаблонів
app.set("view engine", "ejs");

app.post('/addnewtask', function (req, res) {
    res.render('index')
});

//Налаштовуємо сервер для прослуховування порту 3000
app.listen(3000, function () {
    console.log("Сервер працює на порту 3000!");
});
//Підключаємо залежність body-parser
var bodyParser = require("body-parser");

//Вмикаємо body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//Визначаємо початковий масив доданих завдань
var task = ["Опанувати JavaScript", "Опанувати Node.js"];
//Визначаємо маршрут публікації для додавання нового завдання
//в масив доданих завдань
app.post("/addnewtask", function (req, res) {
    var newTask = req.body.newtask;
    //Додаємо нове завдання з маршруту публікації в масив доданих завдань
    task.push(newTask);
    //Повертаємося до маршруту root(/)
    res.redirect("/");
});
