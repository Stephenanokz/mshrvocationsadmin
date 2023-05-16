import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { PostContextProvider } from "./context/postContext/PostContext";
import { QuoteContextProvider } from "./context/quoteContext/QuoteContext";
import { ApostolateContextProvider } from "./context/apostolateContext/ApostolateContext";
import { GalleryImageContextProvider } from "./context/galleryImageContext/GalleryImageContext";
import { CarouselImageContextProvider } from "./context/carouselImageContext/CarouselImageContext";
import {
  VocationVideoContext,
  VocationVideoContextProvider,
} from "./context/vocationVideoContext/VocationVideoContext";
import { ApostolateTypeContext, ApostolateTypeContextProvider } from "./context/apostolateTypeContext/ApostolateTypeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PostContextProvider>
        <QuoteContextProvider>
          <GalleryImageContextProvider>
            <CarouselImageContextProvider>
              <ApostolateContextProvider>
                <VocationVideoContextProvider>
                  <ApostolateTypeContextProvider>
                    <App />
                  </ApostolateTypeContextProvider>
                </VocationVideoContextProvider>
              </ApostolateContextProvider>
            </CarouselImageContextProvider>
          </GalleryImageContextProvider>
        </QuoteContextProvider>
      </PostContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);