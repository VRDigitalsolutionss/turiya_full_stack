import React, { useEffect } from "react";
import TableComponent from "../table/Index";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const data = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    heading: `Heading ${i + 1} - 	THE TURKISH PHILOSOPHY`,
    subHeading: `Subheading ${
      i + 1
    } - Our philosophy as a yoga training academy`,
  }));

  return (
    //   <div className="container mt-5 shadow-sm p-4" style={{backgroundColor:"rgb(214 224 233)"}}>
    //       <div className="row">

    //           <div className="col-sm-12">

    //   {/* Pass the data as a prop to TableComponent */}

    //           </div>
    //       </div>

    //   </div>

    <TableComponent data={data} />
  );
};

export default Index;
