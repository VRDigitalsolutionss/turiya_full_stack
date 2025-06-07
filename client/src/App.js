import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "sweetalert2/src/sweetalert2.scss";
import "./styles/comman.scss";
import "./styles/animate.scss";
import "./styles/modal.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Layout from "./components/layout";
import NoPage from "./pages/NoPage";
import BookingDetail from "./booking_details/BookingDetail";
import BilingDetails from "./billing_information/BilingDetails";
import Profile from "./user_profile/Profile";
import Login from "./auth/login/Login";
import Privacy_Policy from "./components/privacy_policy/Privacy_Policy";
import axios from "axios";
import { BASE_URL } from "./config";
import ThankYouPage from "./components/ThankYouPage";
import YogaTeacherTraining200HNew from './components/yoga_teacher_training/Index'
import VerifyEmail from "./auth/VerifyEmail";
import ResetPassword from "./auth/ResetPassword";
import SubCategory from "./components/SubCategoryPage";
import Category from "./components/CategoryPage";
import YogaTeacherTrainingBali from "./components/bali/YogaTeacherTrainingBali";


// Lazy load other components
const Home = lazy(() => import("./pages/Home"));
const OurStory = lazy(() => import("./components/about/OurStory"));
const Ourphilosophy = lazy(() => import("./components/about/Ourphilosophy"));
const CustomerTestimonials = lazy(() =>
  import("./components/testimonials/CustomerTestimonials")
);
const Contact = lazy(() => import("./components/contact/Index"));
const Team = lazy(() => import("./components/team/Team"));
const Blog = lazy(() => import("./components/turiya_blog/Index"));
const AllCourses = lazy(() => import("./components/all_courses/Index"));
const Yoga_retreat = lazy(() => import("./components/yoga_retreat/index"));
const Blog1 = lazy(() => import("./components/blog_detail/blog1/Index"));
const Blog2 = lazy(() => import("./components/blog_detail/blog2/Index"));
const Blog3 = lazy(() => import("./components/blog_detail/blog3/Index"));
const Blog4 = lazy(() => import("./components/blog_detail/blog4/Index"));
const Blog5 = lazy(() => import("./components/blog_detail/blog5/Index"));
const Register = lazy(() => import("./auth/register/Index"));
const ForgotPass = lazy(() => import("./auth/forgotpassword/Index"));
const BlogDetails = lazy(() =>
  import("./components/blog_detail/blog_details/BlogDetails")
);
const Imprint = lazy(() => import("./components/imprint/Index"));
const Term_Condition = lazy(() => import("./components/term_condition/Index"));
const Product = lazy(() => import("./components/product/Index"));
const ProductBilling = lazy(() => import("./components/product_billing/Index"));
// =======================

// const yogaTeacherTraining200H = lazy(() => import('./components/yoga_teacher_training/Index'));
const RISHIKESH = lazy(() => import('./components/rishikesh/Index'))
const YogaTeacherTraining200h = lazy(() => import('./components/200hyogateachertraining/Index'));
const YogateacherTrainingCourseIndia = lazy(() => import('./components/yoga_teacher_training_course_india/Index'));

const Demo = lazy(() => import('./components/demo/Index'));


function App() {
  const [module_categories_option, setModule_categories_option] = useState("");

  const [updateCartNumber, setUpdateCartNumber] = useState(false);



  const fetchmoduleCategories = () => {
    axios
      .get(BASE_URL + "/module_categories_latest")
      .then((response) => {
        console.log("response module_categories_latest", response);

        const data = response.data.data;
        setModule_categories_option(data);
      })
      .catch((error) => {
        console.log("Error fetching categories", error);
      });
  };

  useEffect(() => {
    fetchmoduleCategories();
  }, []);



  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path="/" element={<Layout 
          updateCartNumber={updateCartNumber}
          setUpdateCartNumber={setUpdateCartNumber}
        />}>
          <Route index element={<Home  
            updateCartNumber={updateCartNumber}
            setUpdateCartNumber={setUpdateCartNumber}
          />} />
          <Route path="unsere-Geschichte" element={<OurStory />} />
          <Route path="unsere-Philosophie" element={<Ourphilosophy />} />
          <Route path="kundenstimmen" element={<CustomerTestimonials />} />
          <Route path="team" element={<Team />} />
          <Route path="blog" element={<Blog />} />
          <Route path="kommende-kurse" element={<AllCourses />} />
          
          <Route path="yogateachertraining" element={<YogaTeacherTraining200HNew />} />
          <Route path="yoga-teacher-training-rishikesh" element={<RISHIKESH />} />

          <Route path="yoga_retreat" element={<Yoga_retreat />} />
          <Route path="course_booking/:id" element={<BookingDetail />} />
          <Route path="bilingDetails/:id" element={<BilingDetails />} />
          <Route path="thank-you" element={<ThankYouPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="impressum" element={<Privacy_Policy />} />
          <Route path="datenschutz" element={<Imprint />} />
          <Route path="term" element={<Term_Condition />} />
          <Route path="product" element={<Product />} />
          <Route path="product-billing" element={<ProductBilling />} />



          {/* ====================================================================== */}

          <Route path="blog1" element={<Blog1 />} />
          <Route path="blog2" element={<Blog2 />} />
          <Route path="blog3" element={<Blog3 />} />
          <Route path="blog4" element={<Blog4 />} />
          <Route path="blog5" element={<Blog5 />} />
          <Route path="blog-detail/:id" element={<BlogDetails />} />

          {/* ====================================================================== */}


          <Route path="200-hour-yoga-teacher-training" element={<YogaTeacherTraining200h />} />
          <Route path="yoga-teacher-training-course-india" element={<YogateacherTrainingCourseIndia />} />
          <Route path="yoga-teacher-training-bali" element={<YogaTeacherTrainingBali />} />



          {/* ============================================================================================== */}
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot_password" element={<ForgotPass />} />
          <Route path="contact" element={<Contact />} />
          <Route path="verify-email/:token" element={<VerifyEmail />} />
          <Route path="reset-password/:token" element={<ResetPassword />} />
          <Route path="*" element={<NoPage />} />


          <Route path="module/:slug" element={<SubCategory />} />
          <Route path="category/:slug" element={<Category />} />


        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
