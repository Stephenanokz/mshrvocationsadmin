import React, { useState } from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import CollectionsIcon from "@mui/icons-material/Collections";
import BurstModeIcon from "@mui/icons-material/BurstMode";
import BusinessIcon from "@mui/icons-material/Business";
import ClassIcon from "@mui/icons-material/Class";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState("home");

  const handleClick = (item) => {
    setActive(item);
  };

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <span className="h-rule"></span>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li
                className={
                  active === "home"
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
                onClick={() => handleClick("home")}
              >
                <HomeIcon className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/apostolates" className="link">
              <li
                className={
                  active === "apostolates"
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
                onClick={() => handleClick("apostolates")}
              >
                <BusinessIcon className="sidebarIcon" />
                Apostolates
              </li>
            </Link>
            <Link to="/apostolatetypes" className="link">
              <li
                className={
                  active === "apostolateTypes"
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
                onClick={() => handleClick("apostolateTypes")}
              >
                <ClassIcon className="sidebarIcon" />
                Apostolate Categories
              </li>
            </Link>
            <Link to="/carouselimages" className="link">
              <li
                className={
                  active === "carouselImages"
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
                onClick={() => handleClick("carouselImages")}
              >
                <BurstModeIcon className="sidebarIcon" />
                Carousel Images
              </li>
            </Link>
            <Link to="/galleryimages" className="link">
              <li
                className={
                  active === "galleryImages"
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
                onClick={() => handleClick("galleryImages")}
              >
                <CollectionsIcon className="sidebarIcon" />
                Gallery Images
              </li>
            </Link>
            <Link to="/faqs" className="link">
              <li
                className={
                  active === "faqs"
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
                onClick={() => handleClick("faqs")}
              >
                <ContactSupportIcon className="sidebarIcon" />
                FAQs
              </li>
            </Link>
            <Link to="/posts" className="link">
              <li
                className={
                  active === "posts"
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
                onClick={() => handleClick("posts")}
              >
                <NewspaperIcon className="sidebarIcon" />
                Posts
              </li>
            </Link>
            <Link to="/quotes" className="link">
              <li
                className={
                  active === "quotes"
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
                onClick={() => handleClick("quotes")}
              >
                <FormatQuoteIcon className="sidebarIcon" />
                Quotes
              </li>
            </Link>
            <Link to="/vocationvideos" className="link">
              <li
                className={
                  active === "vocationVideos"
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
                onClick={() => handleClick("vocationVideos")}
              >
                <VideoCameraBackIcon className="sidebarIcon" />
                Vocation Videos
              </li>
            </Link>
            <Link to="/logout" className="link">
              <li
                className={
                  active === "logout"
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
                onClick={() => handleClick("logout")}
              >
                <LogoutIcon className="sidebarIcon" />
                Logout
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
