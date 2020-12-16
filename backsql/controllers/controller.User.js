const dbConnection = require("../config/dbConnection");
const connection = dbConnection();

const controllerUser = {
  home: (req, res) => {
    const { name, email, phone, career } = req.body;

    if (career.indexOf("Ingeniería") === 0) {
      connection.query(
        "INSERT INTO engineering SET?",
        {
          name,
          email,
          phone,
          career,
        },
        (err, data, fields) => {
          if (err) {
            res.status(404).send({
              status: "error",
              err,
            });
          }
          console.log(fields);
          res.status(200).send({
            status: "success",
          });
        }
      );
    } else if (career.indexOf("Técnico") === 0) {
      connection
        .query("INSERT INTO technical SET?", {
          name,
          email,
          phone,
          career,
        },
        (err, row, fields) => {
          if (err) {
            res.status(404).send({
              status: "error",
              err,
            });
          }
          console.log(fields);
          res.status(200).send({
            status: "success",
          });
        })
        
    } else {
      connection
        .query("INSERT INTO admission SET?", {
          name,
          email,
          phone,
          career,
        },
        (err, data, fields) => {
          if (err) {
            res.status(404).send({
              status: "error",
              err,
            });
          }
          res.status(200).send({
            status: "success",
          });
        })
    }
  },
  
  admissionGet: (req, res) => {

    connection.query("SELECT * FROM admission", (err, users)=>{
      if(err){
        res.status(404).send({
          status: "error",
          err,
        });
      }
      res.status(200).send({
        status: "success",
        users,
      });
    })
  },

  engineeringGet: (req, res) => {
    connection.query("SELECT * FROM engineering", (err, users)=>{
      if(err){
        res.status(404).send({
          status: "error",
          err,
        });
      }
      res.status(200).send({
        status: "success",
        users,
      });
    })
  },

  technicalGet: (req, res) => {
    connection.query("SELECT * FROM technical", (err, users)=>{
      if(err){
        res.status(404).send({
          status: "error",
          err,
        });
      }
      res.status(200).send({
        status: "success",
        users,
      });
    })
  },
};

module.exports = controllerUser;
