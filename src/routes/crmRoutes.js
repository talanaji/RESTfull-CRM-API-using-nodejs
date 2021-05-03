const routes = (app) => {
  app
    .route("/contact")
    .get(
      (req, res, next) => {
        console.log(`Request from ${req.originalUrl}`);
        console.log(`Request type ${req.method}`);
        next();
      },
      (req, res, next) => {
        res.send("GET request");
      }
    )
    .post((req, res) => res.send("POST request"));

  app
    .route("/contact/:contactID")
    .put((req, res) => res.send("PUT request"))
    .delete((req, res) => res.send("DELETE request"));
};
export default routes;
