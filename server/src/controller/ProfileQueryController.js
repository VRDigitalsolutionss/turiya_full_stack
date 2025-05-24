const ProfileQuery = require("../model/ProfileQuery");

const add_ProfileQuery = (req,res) => {
  const profile_query = new ProfileQuery(req.body);

  profile_query
    .save()
    .then((profleData) => {
      res.status(201).json({
        success: true,
        message: "Profile query submitted successfully",
        data: profleData,
      });
    })
    .catch((error) => {
      res.status(400).json({
        success: false,
        message: "error",
        error: error,
      });
    });
};


const get_profile_query = (req,res) => {
    ProfileQuery.find()
     .then((queries) => {
        res.status(200).json({
          success: true,
          message: "Fetched all profile queries",
          data: queries,
        });
      })
     .catch((error) => {
        res.status(500).json({
          success: false,
          message: "Error fetching profile queries",
          error: error,
        });
      });
}


module.exports = {add_ProfileQuery,get_profile_query};
