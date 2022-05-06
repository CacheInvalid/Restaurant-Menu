const nedb = require('nedb');
class Menu 
{
    constructor(dbFilePath) 
    {
        if (dbFilePath) 
        {
            this.db = new nedb({ filename: dbFilePath, autoload: true });
            console.log('DB connected to ' + dbFilePath);
        } else 
        {
            this.db = new nedb();
        }
    }
    init()
     {
        this.db.insert
        ({
            name: 'American Style Bacon Burger',
            description: 'You get a nice extra salty, but not salty in a bad way, taste addition to the burger mixed with the cheesy meltiness mixed in and you have a taste treat you cant deny',
            ingredients: 'Bacon, Cheese and Salt',
            allergy: 'This burger is not reccomended for anyone with Lactose issues',
            price: '25.99'
        });
        //for later debugging
        console.log('db entry food inserted');
        this.db.insert
        ({
            name: 'Scottish Style Bacon Burger ',
            description: 'You get a nice extra salty, it also comes with a nice spicy taste that is perfect for those that love an extra kick',
            ingredients: 'Bacon, Cheese, Chili Peppers and Salt',
            allergy: 'This burger is not reccomended for anyone with Lactose issues',
            price: '25.99'
        });
        //for later debugging
        console.log('db entry food inserted');
    }

    //a function to return all entries from the database
    getAllEntries()
    {
        //return a Promise object, which can be resolved or rejected
        return new Promise((resolve, reject) => {
            //use the find() function of the database to get the data,
            //error first callback function, err for error, entries for data
            this.db.find({}, function(err, entries) {
                //if error occurs reject Promise
                if (err) {
                    reject(err);
                //if no error resolve the promise & return the data
                } else {
                    resolve(entries);
                    //to see what the returned data looks like
                    console.log('function all() returns: ', entries);
                }
            })
        })
    }  

    addEntry(name, description, ingredients, allergy) {
        var entry = {
                name: name,
                description: description,
                ingredients: ingredients,
                allergy: allergy,
                price: char().toISOString().split('T')[0]
                }
        console.log('entry created', entry);
        this.db.insert(entry, function(err, doc) {
                if (err) {
                    console.log('Error inserting document', name);
                    } else {
                    console.log('document inserted into the database', doc);
                }
        }) 
     }       
}

//make the module visible outside
module.exports = Menu;