import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/topbar/Topbar";
import Home from "./Pages/home/Home";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PostList from "./Pages/postList/PostList";
import QuoteList from "./Pages/quoteList/QuoteList";
import Post from "./Pages/post/Post";
import NewPost from "./Pages/newPost/NewPost";
import Login from "./Pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";
import Logout from "./Pages/logout/Logout";
import NewQuote from "./Pages/newQuote/NewQuote";
import Quote from "./Pages/quote/Quote";
import GalleryImageList from "./Pages/galleryImageList/GalleryImageList";
import NewGalleryImage from "./Pages/newGalleryImage/NewGalleryImage";
import GalleryImage from "./Pages/galleryImage/GalleryImage";
import CarouselImageList from "./Pages/carouselImageList/CarouselImageList";
import NewCarouselImage from "./Pages/newCarouselImage/NewCarouselImage";
import CarouselImage from "./Pages/carouselImage/CarouselImage";
import ApostolateList from "./Pages/apostolateList/ApostolateList";
import NewApostolate from "./Pages/newApostolate/NewApostolate";
import Apostolate from "./Pages/apostolate/Apostolate";
import VocationVideoList from "./Pages/VocationVideoList/VocationVideoList";
import NewVocationVideo from "./Pages/newVocationVideo/NewVocationVideo";
import VocationVideo from "./Pages/vocationVideo/VocationVideo";
import ApostolateTypeList from "./Pages/apostolateTypeList/ApostolateTypeList";
import ApostolateType from "./Pages/apostolateType/ApostolateType";
import NewApostolateType from "./Pages/newApostolateType/NewApostolateType";
import FaqList from "./Pages/faqList/FaqList";
import NewFaq from "./Pages/newFaq/NewFaq";
import Faq from "./Pages/faq/Faq";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
      </Routes>
      {user && <Topbar />}
      <div className={!user ? "container shrink" : "container"}>
        {user && <Sidebar />}
        <Routes>
          <Route
            exact
            path="/"
            element={!user ? <Navigate to="/login" /> : <Home />}
          />

          {user && (
            <>
              <Route exact path="/posts" element={<PostList />} />
              <Route exact path="/post/:postId" element={<Post />} />
              <Route exact path="/newpost" element={<NewPost />} />
              <Route exact path="/quotes" element={<QuoteList />} />
              <Route exact path="/quote/:quoteId" element={<Quote />} />
              <Route exact path="/newquote" element={<NewQuote />} />
              <Route exact path="/faqs" element={<FaqList />} />
              <Route exact path="/faq/:faqId" element={<Faq />} />
              <Route exact path="/newfaq" element={<NewFaq />} />
              <Route exact path="/apostolates" element={<ApostolateList />} />
              <Route
                exact
                path="/apostolate/:apostolateId"
                element={<Apostolate />}
              />
              <Route exact path="/newapostolate" element={<NewApostolate />} />
              <Route
                exact
                path="/apostolatetypes"
                element={<ApostolateTypeList />}
              />
              <Route
                exact
                path="/apostolatetype/:apostolatetypeId"
                element={<ApostolateType />}
              />
              <Route
                exact
                path="/newapostolatetype"
                element={<NewApostolateType />}
              />
              <Route
                exact
                path="/galleryimages"
                element={<GalleryImageList />}
              />
              <Route
                exact
                path="/galleryimage/:galleryimageId"
                element={<GalleryImage />}
              />
              <Route
                exact
                path="/newgalleryimage"
                element={<NewGalleryImage />}
              />
              <Route
                exact
                path="/carouselimages"
                element={<CarouselImageList />}
              />
              <Route
                exact
                path="/carouselimage/:carouselimageId"
                element={<CarouselImage />}
              />
              <Route
                exact
                path="/newcarouselimage"
                element={<NewCarouselImage />}
              />
              <Route
                exact
                path="/vocationvideos"
                element={<VocationVideoList />}
              />
              <Route
                exact
                path="/vocationvideo/:vocationvideoId"
                element={<VocationVideo />}
              />
              <Route
                exact
                path="/newvocationvideo"
                element={<NewVocationVideo />}
              />
              <Route exact path="/logout" element={<Logout />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
