import Customerpanel from "./components/userpanel/customerpanel/Customerpanel";
import Favouritepanel from "./components/userpanel/favouritepanel/Favouritepanel";
import MainPanel from "./components/userpanel/mainpanel/MainPanel";
import Purchasepanel from "./components/userpanel/purchasepanel/Purchasepanel";
import Userdetail from "./components/userpanel/userdetail/Userdetail";
import Error404 from "./pages/404/Error404";
import Aboutus from "./pages/aboutus/Aboutus";
import Allcourse from "./pages/allcourse/Allcourse";
import Blog from "./pages/blog/Blog";
import Blogdetail from "./pages/Blogdetail/Blogdetail";
import ContactMe from "./pages/contactme/ContactMe";
import Course from "./pages/course/Course";
import CourseDetail from "./pages/CourseDetail/CourseDetail";
import Coursevideo from "./pages/coursevideo/Coursevideo";
import Faq from "./pages/faq/Faq";
import Home from "./pages/Home/Home";
import Instructor from "./pages/instructor/Instructor";
import Instructordetail from "./pages/instructordetail/Instructordetail";
import Shopbasket from "./pages/Shopbasket/Shopbasket";
import Signup from "./pages/signup/Signup";
import UserPanel from "./pages/userpanel/UserPanel";
import PrivateRoutes from "./PrivateRoutes";

let routes=[
    {path:'/',element:<Home />},
    {path:'/signup',element:<Signup />},
    {
        path:'/',element:<PrivateRoutes />,children:[
            {path:'/shop' , element:<Shopbasket />},
            {path:'userpanel/',element:<UserPanel />,children:[
                {path:'main',element:<MainPanel />},
                {path:'customer',element:<Customerpanel />},
                {path:'purchase',element:<Purchasepanel />},
                {path:'favourite',element:<Favouritepanel />},
                {path:'user',element:<Userdetail />},
                ]}
        ]
    },
    {path:'/allcourse/:courseid' , element:<Course />},
    {path:'/coursevideo',element:<Coursevideo />},
    {path:'/allcourse/:courseid/:coursedetail' , element:<CourseDetail />},
    {path:'/allcourse',element: <Allcourse /> },
    {path:'/blog',element:<Blog />},
    {path:'/blog/:blogdetail',element:<Blogdetail />},
    {path:'/instructor',element:<Instructor />},
    {path:'/contact',element:<ContactMe />},
    {path:'/aboutus',element:<Aboutus />},
    {path:'*',element:<Error404 />},
    {path:'/instructordetail', element:<Instructordetail />},
    {path:'/faq',element:<Faq />},
]

export default routes