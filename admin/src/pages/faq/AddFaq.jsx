import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";
import axios from 'axios';
import { BASE_URL,BASE_URL_IMAGE } from "../../config";


const AddFaqCategories = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const [courses, setCourses] = useState([
    {
      id: 1,
      question: "Wie sieht mein Tag aus?",
      answer:
        "Unser Kurs dauert 60 Stunden in 6 Tagen, daher absolvieren wir ungefähr 10 Stunden pro Tag gemäß den Standards der Yoga-Allianz. Von diesen sind ungefähr 4 Stunden pro Tag für Yoga-Praxis geplant. Keine Sorge, der Kurs ist durchdacht, damit der Körper nicht überfordert wird und ein großer Teil der Senior-Yoga-Praxis nicht anstrengend wird - obwohl wir mit herausfordernden und straffenden Muskeln arbeiten können. Denk daran: Der Kurs in Yoga Alliance dauert 60 Minuten. Innerhalb dieses Kurses dürfen wir 10 Minuten Pause einlegen!",
      isActive: true,
    },
    {
      id: 2,
      question: "Ablauf Beispiel",
      answer:
        "Beispiel für einen täglichen Fahrplan\n\n8h - 10h Yogapraxis (Asana, Pranayama und/oder Meditation)\n30 Minuten Pause\n10:30 - 12:30 Uhr: Theorie (Anatomie & Physiologie)\n1h Mittagspause\n13:30 - 15:30 Uhr Training: Techniken und Hilfsmittel\n15:30 - 16:30 Uhr Unterrichtsmethodik\n30 Minuten Pause\n17h - 19h Übung",
      isActive: true,
    },
    {
      id: 3,
      question: "Was werde ich in der Senior Yoga Lehrer Ausbildung lernen?",
      answer:
        "Du lernst die wesentlichen Bestandteile eines Senior Yoga Kurses kennen und wirst dessen Unterschiede zu einer normalen geistlichen Klassenübung verstehen. Du wirst auch die Grundlagen der Unterrichtsplanung für Senioren-Yoga verstehen, dabei auf Bewegungseinschränkungen achten und eine geeignete Methode zum sicheren und effektiven Anpassen von Yogapraktiken üben und integrieren. Auf diese Weise lernen und trainieren wir, was wichtige Voraussetzungen verwendet, um eine erfüllende Senior Yoga-Praxis zu unterstützen – unter Verwendung von Stühlen, Polstern, Blöcken, Gurten usw.\nNeben dem Training in einer bestimmten Methode und dem Erlernen des Umgangs mit bestimmten Ressourcen ist es wichtig, die Bedingungen im Auge zu behalten, die möglicherweise nicht so direkt sichtbar sind, aber für den Umgang mit dieser bestimmten Gruppe von entscheidender Bedeutung sind. Mit anderen Worten, unsere Theorienfilme haben die Schüler, die Grundlagen der Anatomie und Physiologie des Alterns zu verstehen und die genauen Veränderungen zu erkennen. Es werden wichtige Informationen zu den häufigsten Gesundheitsproblemen im Zusammenhang mit dem Alter und verschiedenen Yoga-Praktiken mit diesen behandelt - Herzproblemen, Osteoporose, Arthritis usw. Indikationen, Kontraindikationen und Vorsichtsmaßnahmen sind daher sehr wichtige Bestandteile dieses Trainings.\nAls Teil nicht nur der traditionellen Perspektive, sondern auch der medizinisch fundierten Evidenz dürfen wir nicht vergessen, dass die Hilfe subtiler Praktiken wie Pranayama und Meditation zur Aufrechterhaltung eines allgemeinen Wohlbefindens auch ins Programm aufgenommen werden.",
      isActive: true,
    },
    {
      id: 4,
      question: "Was sind die Teilnahmevoraussetzungen?",
      answer:
        "Teilnahmevoraussetzungen: Mindestens 18 Jahre. Es wird empfohlen, mindestens das Modul 1 als erster Yogalehrer-Ausbildung zu nehmen. Wenn du einen anerkannten Kurs für eine 200-stündige Yogalehrer-Ausbildung verfügst, sollte dies ausreichen, um das Programm vollständig in Anspruch zu nehmen.\nDie Yogalehrer Ausbildung ist für alle körperlichen Konditionsstufen geeignet. Wenn du dich wegen einer besonderen Situation unsicher fühlst, wende dich einfach an uns!",
      isActive: true,
    },
    {
      id: 6,
      question: "Bekomme ich ein Zertifikat? Welches?",
      answer:
        "Wenn du NICHT an der 500-stündigen Yogalehrer-Ausbildung teilnimmst\nNach erfolgreichem Abschluss dieses Kurses erhältst du ein Senior Yoga-Ausbildung Zertifikat. Wir sind eine zertifizierte Schule der Yoga Alliance und dieser Kurs wird auch im Rahmen unserer 500h Yogalehrer-Ausbildung angeboten.\nWenn du diesen Kurs im Rahmen unserer 500h Yogalehrer-Ausbildung absolvierst, erhältst du ein Yoga Alliance zertifiziertes Senior Yoga-Zertifikat.\nZu diesem Zeitpunkt hast du bereits den Abschluss nach Modul 1 und der nächsten 200-stündige Yogalehrer-Ausbildung durch Yoga Alliance-Diplom absolviert. Danach bist du berechtigt, die 300-stündige Yogalehrer-Ausbildung abzuschließen und das Modul 3, Modul 4 und Modul 5 abzuschließen.\nDer Seniorenkurs ist Teil der 500 Stunden Ausbildung und wird mit 60 Stunden, die dem Senior Yoga Kurs 60% abschließt, erfolgreich beendet hast, erhältst du das 300-Stunden-Zertifikat und kannst dich als Senior Yoga-Lehrer qualifizieren. Danke daran, dass die bei Turiya Yoga einer Brief durchführen, indem du den Kurs machst, was genau fehlt.",
      isActive: true,
    },
    {
      id: 7,
      question: "Bekomme ich ein Zertifikat? Welches?",
      answer:
        "Wenn du NICHT an der 500-stündigen Yogalehrer-Ausbildung teilnimmst\nNach erfolgreichem Abschluss dieses Kurses erhältst du ein Senior Yoga-Ausbildung Zertifikat. Wir sind eine zertifizierte Schule der Yoga Alliance und dieser Kurs wird auch im Rahmen unserer 500h Yogalehrer-Ausbildung angeboten.\nWenn du diesen Kurs im Rahmen unserer 500h Yogalehrer-Ausbildung absolvierst, erhältst du ein Yoga Alliance zertifiziertes Senior Yoga-Zertifikat.\nZu diesem Zeitpunkt hast du bereits den Abschluss nach Modul 1 und der nächsten 200-stündige Yogalehrer-Ausbildung durch Yoga Alliance-Diplom absolviert. Danach bist du berechtigt, die 300-stündige Yogalehrer-Ausbildung abzuschließen und das Modul 3, Modul 4 und Modul 5 abzuschließen.\nDer Seniorenkurs ist Teil der 500 Stunden Ausbildung und wird mit 60 Stunden, die dem Senior Yoga Kurs 60% abschließt, erfolgreich beendet hast, erhältst du das 300-Stunden-Zertifikat und kannst dich als Senior Yoga-Lehrer qualifizieren. Danke daran, dass die bei Turiya Yoga einer Brief durchführen, indem du den Kurs machst, was genau fehlt.",
      isActive: true,
    },
    {
      id: 8,
      question: "Bekomme ich ein Zertifikat? Welches?",
      answer:
        "Wenn du NICHT an der 500-stündigen Yogalehrer-Ausbildung teilnimmst\nNach erfolgreichem Abschluss dieses Kurses erhältst du ein Senior Yoga-Ausbildung Zertifikat. Wir sind eine zertifizierte Schule der Yoga Alliance und dieser Kurs wird auch im Rahmen unserer 500h Yogalehrer-Ausbildung angeboten.\nWenn du diesen Kurs im Rahmen unserer 500h Yogalehrer-Ausbildung absolvierst, erhältst du ein Yoga Alliance zertifiziertes Senior Yoga-Zertifikat.\nZu diesem Zeitpunkt hast du bereits den Abschluss nach Modul 1 und der nächsten 200-stündige Yogalehrer-Ausbildung durch Yoga Alliance-Diplom absolviert. Danach bist du berechtigt, die 300-stündige Yogalehrer-Ausbildung abzuschließen und das Modul 3, Modul 4 und Modul 5 abzuschließen.\nDer Seniorenkurs ist Teil der 500 Stunden Ausbildung und wird mit 60 Stunden, die dem Senior Yoga Kurs 60% abschließt, erfolgreich beendet hast, erhältst du das 300-Stunden-Zertifikat und kannst dich als Senior Yoga-Lehrer qualifizieren. Danke daran, dass die bei Turiya Yoga einer Brief durchführen, indem du den Kurs machst, was genau fehlt.",
      isActive: true,
    },
  ]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Function to toggle the active status
  // const toggleActive = (id) => {
  //   setCourses((prevCourses) =>
  //     prevCourses.map((course) =>
  //       course.id === id ? { ...course, isActive: !course.isActive } : course
  //     )
  //   );
  // };
  const fetchData = () => {
    axios.get(BASE_URL + '/faq').then((response) => {
   
      console.log(" faq response", response);
      if (response.status === 200) {
        setCourses(response.data.data)
      } else {
        alert("something went wrong")
      }
    
    }).catch((error) => {
      console.log(error);
    })
  }
  

  useEffect(() => {
    fetchData();
  },[]);


  
  const toggleActive = (id) => {
    // setCourses((prevCourses) =>
    //   prevCourses.map((course) =>
    //     course.id === id ? { ...course, isActive: !course.isActive } : course
    //   )
    // );

    if (id) {
      axios
    .put(
      BASE_URL + `/toggle_faq/${id}`
    )
    .then((response) => {
      console.log("response toggle", response.data.data);
      // setGalleries(response.data.data);
      fetchData();
    })
    .catch((err) => {
      console.log("Error: toggle", err);
    });
    } else {
      console.log("id not found")
}


  };

  const deleteModule = (id) => {
    setShowDeleteModal(true);
    setDeleteItemId(id);
  };

  // Delete category
  const handleDeleteConfirm = () => {
    setCourses((prevList) =>
      prevList.filter((item) => item.id !== deleteItemId)
    );

    // setGalleries(galleries.filter((item) => item.id !== deleteItemId));
    // setBlogs((prevUsers) => prevUsers.filter((user) => user.id !== deleteItemId)); // Filter out the user with matching id
    if (deleteItemId) {
      axios
    .delete(
      BASE_URL + `/delete_faq/${deleteItemId}`,
    )
    .then((response) => {
      console.log("delete response", response);
  
      fetchData();


      setShowDeleteModal(false); // Close the modal
      setDeleteItemId("");

    })
    .catch((err) => {
      console.log("Error:", err);
    });
    } else {
      console.log("id not found")
    }
  };

  function removeHTMLTags(content) {
    return content.replace(/<\/?[^>]+(>|$)/g, ""); // Regex to remove HTML tags
}

// Example usage
const stringWithTags = "<p>edited</p>";
const cleanedString = removeHTMLTags(stringWithTags);
console.log(cleanedString); // Output: edited

  
  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = courses.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(courses.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };



  return (
    <div className="container-fluid mt-3">
      <div className="card p-4 shadow-sm" style={{ border: "none" }}>
        <div className="d-flex justify-content-between mb-3 bg-light py-3 px-3">
          <h4> Faq </h4>
          <Link to="/manage_faq" className="btn btn-success">
            Add New Faq
          </Link>
        </div>

        <table
          className="table table-striped"
          style={{ border: "1px solid #ddd6d6" }}>
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th> question</th>

              <th> Answer</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentCourses.map((course, index) => (
              <tr key={course._id}>
                <td>{indexOfFirstItem + index + 1}</td>

                <td
                  className="text-truncate"
                  style={{
                    maxWidth: "300px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}>
                  {removeHTMLTags(course.question)}
                </td>
                <td
                  className="text-truncate"
                  style={{
                    maxWidth: "400px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}>
                  { removeHTMLTags(course.answer)}
                </td>
                {/* <td>
  <button
    onClick={() => toggleActive(course.id)}
    className={`btn ${course.action === "Active" ? "btn-warning" : "btn-secondary"}`}
  >
    {course.action === "Active" ? "Active" : "Inactive"}
  </button>
  <Link
    to="/manage_addFAQ"
    className="btn btn-primary me-2 ms-2"
  >
    Edit
  </Link>

  <button
    className="btn btn-danger"
    onClick={() => deleteModule(course.id)}
  >
    Delete
  </button>
</td> */}

                {/* ================================================================ */}

                <td>
                  <button
                    onClick={() => toggleActive(course._id)}
                    className={`btn ${course.status === "active" ? "btn-warning" : "btn-secondary"}`}>
                   {course.status}
                  </button>


                  <Link
                  to={`/manage_faq/${course._id}`}
                    className="btn btn-primary me-2 ms-2">
                    Edit
                  </Link>


                 

                  <button
                    className="btn btn-danger"
                    onClick={() => deleteModule(course._id)}>
                    Delete
                  </button>
                </td>

                {/* ================================================================================== */}
              </tr>
            ))}
          </tbody>
        </table>

        {showDeleteModal && (
          <div
            id="modalOverlay"
            className="hiddenOverlayContainer"
            style={{ display: "block" }}>
            <div className="customDialogBox">
              <div
                className="row "
                style={{
                  backgroundColor: "light",
                  padding: "15px",
                  borderBottom: "1px solid #7f7f7f",
                  paddingBottom: "6px",
                }}>
                <div className="col-sm-6 d-flex justify-content-start">
                  <h4 className="modal_header">
                    <RiDeleteBin6Fill className="me-3" />
                    Confirmation
                  </h4>
                </div>
                <div className="col-sm-6 d-flex justify-content-end">
                  {/* <span className="exitButtonTrigger" onClick={closeDialogBox}>
          ×
        </span> */}
                  <span
                    className="exitButtonTrigger"
                    onClick={() => setShowDeleteModal(false)}>
                    ×
                  </span>
                </div>
              </div>

              <div className="text-start pt-3">
                <ul className="modal_contact_details">
                  <li>Are you sure you want to delete this item ?</li>
                </ul>
                <hr />
              </div>
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-danger me-3"
                  onClick={handleDeleteConfirm}>
                  Delete
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowDeleteModal(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="pagination d-flex justify-content-end">
          <button
            onClick={handlePrevPage}
            className="btn btn-secondary page-item me-2"
            disabled={currentPage === 1}>
            Prev
          </button>
          <span className="btn btn-success current-page">
            Page {currentPage}
          </span>
          <button
            onClick={handleNextPage}
            className="btn btn-primary page-item ms-2"
            disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFaqCategories;
