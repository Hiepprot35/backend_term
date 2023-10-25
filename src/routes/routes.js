const TermRoutes=require('../routes/TermRoute')
function routes(app) {
    
    app.use('/api', TermRoutes)


   
};
module.exports= routes