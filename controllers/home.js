//тук директно ще експортирам един наименуван експорт, който кръщавам home:

module.exports = {
    async home(req, res){
        // console.log(req.query);
        const cars = await req.storage.getAll(req.query);
        // console.log(cars);

                res.render('index', {cars, title: 'Carbicle', query: req.query}); // след като оправим layout-a, маxame  ", {layout: false}" като втори параметър на функцията render()
                                             //подадения обект {} със свойство cars e Context-a, на който  можем да вземем само cars                  
    }
};
//layout-a оправяме като във папка views, създаваме папка layouts и в нея създаваме main.hbs в него копираме цялото съдържание от index.hbs, 
//kaто изтриваме всичко в тага <main> ...</main> и вътре поставяме {{{body}}};
//след това във всички останали .hbs файлове оставаме само съдържанието вътре в main тага;