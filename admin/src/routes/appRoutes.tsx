import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DefaultPage from "../pages/dashboard/DefaultPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import AnalyticsPage from "../pages/dashboard/AnalyticsPage";
import SaasPage from "../pages/dashboard/SaasPage";
import ComponentPageLayout from "../pages/component/ComponentPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AlertPage from "../pages/component/AlertPage";
import ButtonPage from "../pages/component/ButtonPage";
import InstallationPage from "../pages/installation/InstallationPage";
import DocumentationPage from "../pages/documentation/DocumentationPage";
import Overview from "../pages/overview/Overview";
import Turiya_Yoga from "../pages/component/Turiya_Yoga";
import Testimonial from '../pages/documentation/Testimonial'
import Gallery from '../pages/documentation/Gallery'
import Blog from '../pages/documentation/Blog'
import VideoTestimonial from '../pages/documentation/VideoTestimonial';
import CourseCategories from '../pages/courses/Course_Categories';
import Courses from "../pages/courses/Courses";
import ModulSubCategories from "../pages/courses/ModulSubCategories";
import AddModule from "../pages/courses/AddModule";
import CreateCourseWebpage from "../pages/courses/create_course_webpage/CreateCourseWebpage";
import Create_Module_webpage from "../pages/courses/create_Module_webpage/Create_Module_webpage";
import AddFaq from "../pages/faq/AddFaq";
import AddFaqCategories from "../pages/faq/AddFaqCategories";
import Contact from "../pages/contact/Contact";
import Reports from "../pages/report/Reports";
import Query from "../pages/user_query/Query";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <Overview />,
    state: "Dashboard"
  },
  {
    path: "/installation",
    element: <InstallationPage />,
    state: "installation",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <FileDownloadOutlinedIcon />
    }
  },
  {
    path: "/dashboard",
    element: <DashboardPageLayout />,
    state: "dashboard",
    sidebarProps: {
      displayText: "sales",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "dashboard.index"
      },
      {
        path: "/dashboard/default",
        element: <DefaultPage />,
        state: "dashboard.default",
        sidebarProps: {
          displayText: "Customers"
        },
      },
      {
        path: "/dashboard/analytics",
        element: <AnalyticsPage />,
        state: "dashboard.analytics",
        sidebarProps: {
          displayText: "Subscriber Emails"
        }
      },
      {
        path: "/dashboard/saas",
        element: <SaasPage />,
        state: "dashboard.saas",
        sidebarProps: {
          displayText: "Invoice"
        }
      }
    ]
  },
  {
    path: "/component",
    element: <ComponentPageLayout />,
    state: "component",
    sidebarProps: {
      displayText: "Manage About us ",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/component/alert",
        element: <AlertPage />,
        state: "component.alert",
        sidebarProps: {
          displayText: " Unsere Geschichte"
        },
      },
      {
        path: "/component/button",
        element: <ButtonPage />,
        state: "component.button",
        sidebarProps: {
          displayText: "Unsere Philosophie"
        }
      },
      {
        path: "/component/turiya_yoga",
        element: <Turiya_Yoga />,
        state: "component.turiya_yoga",
        sidebarProps: {
          displayText: "Kundenstimmen"
        }
      }
    ]
  },
  {
    path: "/documentation",
    element: <DocumentationPage />,
    state: "documentation",
    sidebarProps: {
      displayText: "Global Components",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/documentation/gallery",
        element: <Gallery />,
        state: "documentation.gallery",
        sidebarProps: {
          displayText: "Gallery"
        },
      },
      {
        path: "/documentation/testimonial",
        element: <Testimonial />,
        state: "documentation.testimonial",
        sidebarProps: {
          displayText: "Testimonial"
        }
      },
      {
        path: "/documentation/blog",
        element: <Blog />,
        state: "documentation.blog",
        sidebarProps: {
          displayText: "Blog"
        }
      },
      {
        path: "/documentation/video_testimonial",
      element: <VideoTestimonial/>,
        state: "documentation.video_testimonial",
        sidebarProps: {
          displayText: "Video Testimonial"
        }
      }
    ]
  },
  {
    path: "/courses",
    element: <Courses />,
    state: "courses",
    sidebarProps: {
      displayText: "Course & Modules",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        path: "/courses/course_Categories",
        element: <CourseCategories />,
        state: "courses.course_Categories",
        sidebarProps: {
          displayText: "Course Categories"
        },
      },
      {
        path: "/courses/modulSubCategories",
        element: <ModulSubCategories />,
        state: "courses.modulSubCategories",
        sidebarProps: {
          displayText: "Modul Sub Categories"
        }
      },
      {
        path: "/courses/addModule",
        element: <AddModule />,
        state: "courses.addModule",
        sidebarProps: {
          displayText: "Add Module"
        }
      },
    ]
  },
  {
    path: "/create_course_webpage",
    element: <CreateCourseWebpage />,
    state: "create_course_webpage",
    sidebarProps: {
      displayText: "Create Course webpage",
      icon: <FormatListBulletedOutlinedIcon />
    }
  },
  {
    path: "/create_module_webpage",
    element: <Create_Module_webpage />,
    state: "create_module_webpage",
    sidebarProps: {
      displayText: "Create Module webpage",
      icon: <FormatListBulletedOutlinedIcon />
    }
  },
  {
    path: "/faq",
    element: <DashboardPageLayout />,
    state: "faq",
    sidebarProps: {
      displayText: "Manage FAQ",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "faq.index"
      },
      {
        path: "/faq/add_faq_categories",
        element: <AddFaqCategories />,
        state: "faq.default",
        sidebarProps: {
          displayText: "Add FAQ Categories"
        },
      },
      {
        path: "/faq/add_faq",
        element: <AddFaq />,
        state: "faq.add_faq",
        sidebarProps: {
          displayText: "Add FAQ"
        }
      }
    ]
  },
  {
    path: "/contact",
    element: <Contact />,
    state: "contact",
    sidebarProps: {
      displayText: "Contact Us Page",
      icon: <FormatListBulletedOutlinedIcon />
    }
  },

  {
    path: "/reports",
    element: <Reports />,
    state: "reports",
    sidebarProps: {
      displayText: "Reports",
      icon: <FormatListBulletedOutlinedIcon />
    }
  },
  {
    path: "/query",
    element: <Query />,
    state: "userquery",
    sidebarProps: {
      displayText: "User Query",
      icon: <FormatListBulletedOutlinedIcon />
    }
  },
];

export default appRoutes;