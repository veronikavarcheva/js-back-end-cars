const fs = require('fs/promises'); // директно импортираме promise версията на fs модула;

const filePath = './services/data.json';

async function read() {
    try {
        const file = await fs.readFile(filePath);
        return JSON.parse(file);
    } catch (err) {
        console.error('Database read error');
        console.log(err);
        process.exit(1); //така убиваме приложението при грешка
    }
}

async function write(data) {
    try {
        await fs.writeFile(filePath, JSON.stringify(data));
    } catch {
        console.error('Database write error');
        console.log(err);
        process.exit(1); //така убиваме приложението при грешка
    }
}

async function getAll() {
    const data = await read();
    return Object.entries(data)
    .map(([id, v]) => Object.assign({}, { id }, v));
}

async function getById(id) {
    const data = await read();
    const car = data[id];
    if(car) {
        return Object.assign({}, {id}, car);
    } else {
        return undefined;
    }
    
}

module.exports = () => (req, res, next) => {
    req.storage = {
        getAll, 
        getById
    };
    next();
}