import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MainLayout from "./components/layout/MainLayout";
import { routes } from "./routes";
import "./styles/comman.scss";
import Add_About_Form from "./pages/add_about_form/Index";
import Edit_About_Form from "./pages/add_about_form/Index";
import EditGallery from "./pages/documentation/EditGalllary";
import ManageTestimonial from "./pages/documentation/ManageTestimonial";
import EditTestimonial from "./pages/documentation/ManageTestimonial";
import EditBlog from "./pages/documentation/HandleBlog";
import Course_Categories from "./pages/courses/Course_Categories";
import ManageVideoTestimonial from "./pages/documentation/ManageVideoTestimonial";
import ManageCategories from "./pages/courses/ManageCategories";
import ManageModuleSubcategories from "./pages/courses/ManageModulSubCategories";
import ManageAddModule from "./pages/courses/ManageAddModule";
import AddRoom from "./pages/courses/add_room/AddRoom";
import ManageRoomModule from "./pages/courses/add_room/ManageRoomModule";
import MealOffer from "./pages/courses/meal_offer/MealOffer";
import ManageMealOffer from "./pages/courses/meal_offer/ManageMealOffer";
import ManageCourseWebpage from "./pages/courses/create_course_webpage/ManageCourseWebpage";
import SectionAdd from "./pages/courses/create_course_webpage/SectionAdd";
import ManageModuleWebPage from "./pages/courses/create_Module_webpage/ManageModuleWebPage";
import ManageFaqCategories from "./pages/faq/ManageFaqCategories";
import ManageAddFAQ from "./pages/faq/ManageAddFAQ";
import "./styles/animate.scss";
import "./styles/modal.scss";
import ManageContact from "./pages/contact/ManageContact";
import Login from "./auth/Login";
import { useEffect } from "react";
import Forgot_password from "./auth/Forgot_password";
import Logout from "./auth/Logout";
import ResetPassword from "./auth/ResetPassword";
import OurStory from "./pages/our_story/OurStory";
import ManageOurStory from "./pages/our_story/ManageOurStory";
import ManageOurPhilosphy from "./pages/our_philoshpy/ManageOurPhilosphy";
import OurPhilosphy from "./pages/our_philoshpy/OurPhilosphy";
import Turiya_Yoga from "./pages/component/Turiya_Yoga";
import ManageTuriyaYogaTeam from "./pages/component/ManageTuriyaYogaTeam";

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // useEffect(() => {
  //   if (token) {
  //     navigate("/");
  //   } else {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot_password" element={<Forgot_password />} />
      <Route path="/reset_password" element={<ResetPassword />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/" element={<MainLayout />}>
        {routes}
        <Route path="/add_form" element={<Add_About_Form />} />
        <Route path="/edit_form/:id" element={<ManageTuriyaYogaTeam />} />
        <Route path="/add_our_story" element={<OurStory />} />
        <Route path="/edit_our_story/:id" element={<ManageOurStory />} />
        <Route path="/add_our_philosphy" element={<OurPhilosphy />} />
        <Route path="/manage_our_philosphy" element={<ManageOurPhilosphy />} />
        <Route
          path="/edit_our_philosphy/:id"
          element={<ManageOurPhilosphy />}
        />
        <Route
          path="/manage_turiya_yoga_team"
          element={<ManageTuriyaYogaTeam />}
        />
        <Route
          path="/edit_turiya_yoga_team/:id"
          element={<ManageTuriyaYogaTeam />}
        />
        <Route path="/add_blog" element={<EditBlog />} />
        <Route path="/edit_blog/:id" element={<EditBlog />} />
        <Route path="/add_gallery" element={<EditGallery />} />
        <Route path="/edit_gallery/:id" element={<EditGallery />} />
        <Route path="/manage_testimonial" element={<ManageTestimonial />} />
        <Route path="/add_testimoial" element={<EditTestimonial />} />
        <Route path="/edit_testimonial/:id" element={<EditTestimonial />} />
        <Route
          path="/manageVideoTestimonial"
          element={<ManageVideoTestimonial />}
        />
        <Route
          path="/edit_video_testimonial/:id"
          element={<ManageVideoTestimonial />}
        />
        <Route path="/manage_Categories" element={<ManageCategories />} />
        <Route path="/manage_Categories/:id" element={<ManageCategories />} />
        <Route
          path="/manage_module_subcategories"
          element={<ManageModuleSubcategories />}
        />
        {/* ============= */}
        <Route
          path="/manage_module_subcategories/:id"
          element={<ManageModuleSubcategories />}
        />
        <Route path="/manage_addmodule" element={<ManageAddModule />} />
        <Route path="/manage_addmodule/:id" element={<ManageAddModule />} />
        <Route path="/add_room" element={<AddRoom />} />
        <Route path="/add_room/:id" element={<AddRoom />} />
        <Route path="/manage_roomModule/:id" element={<ManageRoomModule />} />
        <Route path="/mealOffer" element={<MealOffer />} />
        <Route path="/mealOffer/:id" element={<MealOffer />} />
        <Route path="/manage_meal_offer/:id" element={<ManageMealOffer />} />
        <Route
          path="/manage_course_webpage"
          element={<ManageCourseWebpage />}
        />
        <Route
          path="/manage_course_webpage/:id"
          element={<ManageCourseWebpage />}
        />
        <Route
          path="/manage_module_webpage/:id"
          element={<ManageModuleWebPage />}
        />
        <Route
          path="/manage_module_webpage"
          element={<ManageModuleWebPage />}
        />
        <Route path="/manage_addFAQ" element={<ManageAddFAQ />} />
        <Route
          path="/manage_faq_categories"
          element={<ManageFaqCategories />}
        />
        <Route
          path="/manage_faq_categories/:id"
          element={<ManageFaqCategories />}
        />
        <Route path="/manage_faq" element={<ManageAddFAQ />} />
        <Route path="/manage_faq/:id" element={<ManageAddFAQ />} />
        <Route path="/manage_contact" element={<ManageContact />} />
        <Route path="/manage_contact/:id" element={<ManageContact />} />

        {/* <Route path="/manage_course_webpage" element={< ManageCourseWebpage/>}/> */}
        {/*  <Route path="/edit_testimonial" element={<EditTestimonial />}/>  */}

        {/* <Route path="/edit_blog" element={<EditBlog/>}/> */}
      </Route>
    </Routes>
  );
}

export default App;
