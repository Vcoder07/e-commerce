const Mealkit = require("../models/Mealkit");
var ObjectId = require('mongodb').ObjectId;

module.exports = class MealkitService {
    static async getAllMealkit() {
        try {
             console.log("Hello 1")   
            //let test = await Mealkit.create({title: 'title 1', body: 'body 2', article_image: 'article_image 1',  date: 'date 12' });
            const allMealkit = await Mealkit.find().lean(); // lean is a format. 
            return allMealkit;
        } catch (error) {
            console.log(`Could not fetch mealkit ${error}`)
        }
    }
};




// app.js --> routes --> controller --> services --> models --> retuyrn service --> return to controller --> return to the routes --> routes back to the main request. 