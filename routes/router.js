const router = require("express").Router();

const pool = require("../db/psql");

// GET all
router.get("/", (request, response, next) => {
  pool.query("SELECT * FROM monsters ORDER BY id ASC", (err, res) => {
    if (err) return next(err);
    response.json(res.rows);
  });
});

//GET something
router.get("/:id", (request, response, next) => {
  const { id } = request.params;
  pool.query("SELECT * FROM monsters WHERE id=$1", [id], (err, res) => {
    if (err) return next(err);
    response.json(res.rows);
  });
});

//Add something
router.post("/", (request, response, next) => {
  const { name, personality } = request.body;
  pool.query(
    "INSERT INTO monsters(name, personality) VALUES($1, $2)",
    [name, personality],
    (err, res) => {
      if (err) return next(err);
      response.json({ msg: "succcess" });
    }
  );
});

//update
router.put("/:id", (request, response, next) => {
  const { id } = request.params;
  const keys = ["name", "personality"];

  const fields = [];

  //if bracket syntax it will check for a string or string name .. if .key will check for an individual key
  keys.forEach((key) => {
    if (request.body[key]) fields.push(key);
  });

  //field that wanted to update to the string
  fields.forEach((field, index) => {
    pool.query(
      `UPDATE monsters SET ${field}=($1) WHERE id=($2)`,
      [request.body[field], id],
      (err, res) => {
        if (err) return next(err);

        if (index === fields.length - 1) response.json({ msg: "success" });
      }
    );
  });
});


//delete id
router.delete("/:id", (request, response, next) => {
  const { id } = request.params;

  pool.query("DELETE FROM monsters WHERE id=$1", [id], (err, res) => {
    if (err) return next(err);
    response.json({ msg: "sucess" });
  });
});



//join method in the database
// router.get('/conditions',xxxxxxxsamething){
//     'SELECT * FROM lives JOIN habitats ON habitats.name =lives.habitats'
// }


module.exports = router;
