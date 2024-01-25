// Simple oven
class Oven {
    constructor(maxTemperature) {
        this._maxTemperature = this._validateTemperature(maxTemperature);
    }

    get maxTemperature() {
        return this._maxTemperature;
    }

    set maxTemperature(value) {
        this._maxTemperature = this._validateTemperature(value);
    }

    _validateTemperature(value) {
        return Math.min(value, 15);
    }
}

const oven1 = new Oven(12);
console.log('Максимальная температура печи 1:', oven1.maxTemperature);

const oven2 = new Oven(20);
console.log('Максимальная температура печи 2:', oven2.maxTemperature);

// Improved oven
class ImprovedOven extends Oven {
    constructor(maxTemperature) {
        super(maxTemperature);
        this._currentTemperature = 0;
        this._heatingInterval = null;
        this._coolingInterval = null;
    }

    _notify(message) {
        console.log(message);
    }

    _heat() {
        this._currentTemperature++;
        this._notify(`Температура печи: ${this._currentTemperature}`);

        if (this._currentTemperature === this.maxTemperature) {
            this._notify('Печь достигла максимальной температуры. Полный нагрев.');
            this.turnOff();
        }
    }

    _cool() {
        this._currentTemperature--;

        this._notify(`Температура печи: ${this._currentTemperature}`);
        if (this._currentTemperature === 0) {
            this._notify('Печь остыла.');
            clearInterval(this._coolingInterval);
        }
    }

    turnOn() {
        this._notify('Печь включена. Начало работы.');

        this._heatingInterval = setInterval(() => this._heat(), 500);
    }

    turnOff() {
        this._notify('Печь выключена.');

        clearInterval(this._heatingInterval);

        this._coolingInterval = setInterval(() => this._cool(), 500);
    }
}

// Создаем экземпляр класса ImprovedOven
const myImprovedOven = new ImprovedOven(10);

// Выводим в консоль максимальную температуру
console.log('Максимальная температура печи:', myImprovedOven.maxTemperature);

// Вызываем метод включения
myImprovedOven.turnOn();

// импорт модуля
const checkForJavaScript = require('./checkJavaScript');

// Вызываем функцию с примером строки
const result = checkForJavaScript('Привет Javascript');

// Выводим результат в консоль
console.log(result);
