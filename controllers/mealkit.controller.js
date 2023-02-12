const MealkitService = require("../services/MealkitService");

module.exports = class Mealkit{
    
    static async apiAllMealkitList(req, res, next) {
        try {
            // const allMealkit = await MealkitService.getAllMealkit();
            // if (!allMealkit) {
            //   res.status(404).json("MealKit not found.")
            // }
            console.log("hello")
            let allData = await MealkitService.getAllMealkit();
            console.log("t1",alldata);
            allData = allData || [];
            // const session = req.session;
            // if (session.userid !== undefined && session.userid !== null && session.role === '1') {
                // res.render('loadData', { layout: 'main', listExists: true, isLoggedIn: true, firstName: session.firstName, role: true, allData: allData });
                res.render('index', { layout: "main", title: 'Express-one changed', mealkits: allData });
            // } else {
            //     res.redirect('/login');
            // }

            //res.json(allMealkit);
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }
}