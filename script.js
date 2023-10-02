let name = window.prompt("Введите ваш ник")
let age = window.prompt("Введите ваш возраст")
let ip = window.prompt("Введите ваш айпи адрес")
alert("Привет " + name + " Тебе " + age + "  Твой айпи адресс " + ip)
let myAdmin = confirm("Ты человек?")
if (myAdmin)
{
    alert("Привет посетитель! " + name)
}
else
{
    window.close()
}