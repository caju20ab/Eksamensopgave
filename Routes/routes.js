const userRoutes = require ('./users')

const appRouter = (app, fs) => {
    // Jeg har tilføjet en default route, som kan håndtere empty routes at the base API url
    app.get('/', (req, res) => {
      res.send('Åhhhderlæ');
    });
  
    // run our user route module here to complete the wire up
    userRoutes(app, fs);
  };

module.exports = appRouter;