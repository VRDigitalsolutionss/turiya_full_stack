const Report = require("../model/Reports");

const addreports = (req, res) => {
    const createReport = new Report(req.body);

    createReport.save().then((response) => {
        res.status(201).json({
            success: true,
            message: "Report submitted successfully",
            data: response
        });
    }).catch((err) => {
        res.status(500).json(
            {
            success: false,
            message: "Failed to submit report",
            error: err.message
            }
        
        );
    })

};


const deleteReport = async (req, res) => {

    // =========================================================================
    try {
        const { id } = req.params; // Extract the ID from the route parameter
    
        const deletedreport = await Report.findByIdAndDelete(id);
    
        if (!deletedreport) {
          return res.status(404).json({ message: 'User query not found' });
        }
    
        res.status(200).json({
          message: 'report deleted successfully!',
          data: deletedreport,
        });
      } catch (error) {
        res.status(500).json({ message: 'Error deleting user query', error: error.message });
      }
}



const reports = (req, res) => {
    const reports = Report.find().then((data) => {
        res.status(200).json({
data
        })
    })
}



module.exports={addreports,deleteReport,reports}