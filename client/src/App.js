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
import YogaTeacherTrainingBali from "./components/bali/YogaTeacherTrainingBali";
import YogaTeacherTraining200HNew from './components/yoga_teacher_training/Index'
import VerifyEmail from "./auth/VerifyEmail";
import ResetPassword from "./auth/ResetPassword";


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
const YogaTeacher = lazy(() => import("./components/yoga_teacher/Index"));
const YogaTraningGoa = lazy(() =>
  import("./components/teacher_training_goa/index")
);
const YogaTraningMallorca = lazy(() =>
  import("./components/yoga_teacher_training_Mallorca/YogaTraningMallorca")
);
const YogaTraningSampurna = lazy(() =>
  import("./components/yoga_training_Sampurna/index")
);
const YogaTraningHimalaya = lazy(() =>
  import("./components/yoga_training_Himalaya/index")
);
const Yin_YogaTraning = lazy(() => import("./components/yin_yoga/YinYoga"));
const Senior_yogaTraning = lazy(() =>
  import("./components/senior_yoga/Senior_Yoga")
);
const Block_yogaTraning = lazy(() =>
  import("./components/block_training/Index")
);
const Block_yogamodule1 = lazy(() =>
  import("./components/yoga_training_module/module1/Index2")
);
// const Block_yogamodule2= lazy(() => import('./components/yoga_training_module/module2/Index'));
const Block_yogamodule2 = lazy(() =>
  import("./components/yoga_training_module/module2/Index2")
);
const Block_yogamodule3 = lazy(() =>
  import("./components/yoga_training_module/module3/Index2")
);
const Block_yogamodule4 = lazy(() =>
  import("./components/yoga_training_module/module4/Index")
);
const Block_yogamodule5 = lazy(() =>
  import("./components/yoga_training_module/module5/Index")
);
const YogaTraningHybrid = lazy(() =>
  import("./components/hybrid_yoga_training/Index")
);
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


const Berlin = lazy(() => import("./components/berlin/Index"));
const Hamburg = lazy(() => import('./components/hamburg/Index'));
const YOGALEHRERAUSBILDUNGCOLOGNE = lazy(() => import('./components/cologne/Clogne'))
const Munchen = lazy(() => import('./components/munchen/Munchen'));
const Stuttgart = lazy(() => import('./components/Stuttgart/Stuttgart'));
// const yogaTeacherTraining200H = lazy(() => import('./components/yoga_teacher_training/Index'));
const RISHIKESH = lazy(() => import('./components/rishikesh/Index'))
const YogaTeacherTraining200h = lazy(() => import('./components/200hyogateachertraining/Index'));
const YogateacherTrainingCourseIndia = lazy(() => import('./components/yoga_teacher_training_course_india/Index'));

const Demo = lazy(() => import('./components/demo/Index'));


function App() {
  const [module_categories_option, setModule_categories_option] = useState("");



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
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="unsere-Geschichtetory" element={<OurStory />} />
          <Route path="unsere-Philosophie" element={<Ourphilosophy />} />
          <Route path="kundenstimmen" element={<CustomerTestimonials />} />
          <Route path="team" element={<Team />} />
          <Route path="blog" element={<Blog />} />
          <Route path="kommende-kurse" element={<AllCourses />} />
          <Route path="yogalehrer-ausbildung-200h" element={<YogaTeacher />} />
          <Route path="yogalehrer-ausbildung-goa-indien"



            element={<YogaTraningGoa />} />
          <Route path="200h-yogalehrer-ausbildung-mallorca"



            element={<YogaTraningMallorca />} />
          <Route path="yoga-teacher-training-bali" element={<YogaTeacherTrainingBali />} />
          <Route path="yogalehrer-ausbildung-200h" element={<YogaTeacher />} />
          <Route path="yogateachertraining" element={<YogaTeacherTraining200HNew />} />
          <Route path="yoga-teacher-training-rishikesh" element={<RISHIKESH />} />


          <Route path="yogalehrer-ausbildung-in-sampurna-seminarhaus"



            element={<YogaTraningSampurna />} />
          <Route path="yogalehrer-ausbildung-himalaya-indien"




            element={<YogaTraningHimalaya />} />
          <Route path="yin-yoga" element={<Yin_YogaTraning />} />
          <Route path="senioren-yoga" element={<Senior_yogaTraning />} />
          <Route path="blockausbildung-im-ueberblick" element={<Block_yogaTraning />} />
          <Route path="yogalehrer-ausbildung-100h"



            element={<Block_yogamodule1 />} />
          <Route path="yogalehrer-ausbildung-module-200h"




            element={<Block_yogamodule2 />} />
          <Route path="yogalehrer-ausbildung-300h"


            element={<Block_yogamodule3 />} />
          <Route path="yogalehrer-ausbildung-400h"


            element={<Block_yogamodule4 />} />
          <Route path="yogalehrer-ausbildung-500h"


            element={<Block_yogamodule5 />} />
          <Route path="hybride-yogalehrer-ausbildung" element={<YogaTraningHybrid />} />
          <Route path="yoga_retreat" element={<Yoga_retreat />} />
          <Route path="course_booking/:id" element={<BookingDetail />} />
          <Route path="bilingDetails/:id" element={<BilingDetails />} />
          <Route path="thank-you" element={<ThankYouPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="privacy_policy" element={<Privacy_Policy />} />
          <Route path="imprint" element={<Imprint />} />
          <Route path="term" element={<Term_Condition />} />
          <Route path="product" element={<Product />} />
          <Route path="product-billing" element={<ProductBilling />} />
          <Route path="demo" element={<Demo />} />



          {/* ====================================================================== */}

          <Route path="blog1" element={<Blog1 />} />
          <Route path="blog2" element={<Blog2 />} />
          <Route path="blog3" element={<Blog3 />} />
          <Route path="blog4" element={<Blog4 />} />
          <Route path="blog5" element={<Blog5 />} />
          <Route path="blog-detail/:id" element={<BlogDetails />} />

          {/* ====================================================================== */}


          <Route path="/200h-aya-yogalehrer-ausbildung" element={<YogaTeacher />} />

          <Route path="/200h-aya-yogalehrer-ausbildung-sampurna-seminarhaus" element={<YogaTraningSampurna />} />

          <Route path="/200h-aya-yogalehrer-ausbildung-goa-indien" element={<YogaTraningGoa />} />

          <Route path="/200h-aya-yogalehrer-ausbildung-i-mallorca" element={<YogaTraningMallorca />} />

          <Route path="/yogalehrerausbildung-himalaya-indien" element={<YogaTraningHimalaya />} />

          <Route path="/blockausbildung-ueberblick" element={<Block_yogaTraning />} />

          <Route path="100h-yoga-ausbildung-modul-1" element={<Block_yogamodule1 />} />

          <Route path="200h-yoga-ausbildung-modul-2" element={<Block_yogamodule2 />} />

          <Route path="300h-yoga-ausbildung-modul-3" element={<Block_yogamodule3 />} />

          <Route path="400h-yoga-ausbildung-modul-4" element={<Block_yogamodule4 />} />

          <Route path="500h-yoga-ausbildung-modul-5" element={<Block_yogamodule5 />} />


          <Route path="YOGALEHRERAUSBILDUNG-BERLIN" element={<Berlin />} />
          <Route path="YOGALEHRERAUSBILDUNG-HAMBURG" element={<Hamburg />} />
          <Route path="YOGALEHRERAUSBILDUNG-COLOGNE" element={<YOGALEHRERAUSBILDUNGCOLOGNE />} />
          <Route path="munchen-yoga-ausbildung" element={<Munchen />} />
          <Route path="Yogalehrer-Ausbildungen-Stuttgart" element={<Stuttgart />} />
          <Route path="200-hour-yoga-teacher-training" element={<YogaTeacherTraining200h />} />
          <Route path="yoga-teacher-training-course-india" element={<YogateacherTrainingCourseIndia />} />



          {/* ============================================================================================== */}
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot_password" element={<ForgotPass />} />
          <Route path="contact" element={<Contact />} />
          <Route path="verify-email/:token" element={<VerifyEmail />} />
          <Route path="reset-password/:token" element={<ResetPassword />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
