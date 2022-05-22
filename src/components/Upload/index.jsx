import React from "react";
import "./style.css";
import Cross from "../../assets/Cross.svg";
import UploadImg from "../../assets/UploadIMG.svg";
export default function Upload() {
  return (
    <main className="upload-main">
      <section className="upload">
        <div className="upload__top upload-container">
          <h1>Upload video</h1>
          <img src={Cross} alt="" className="top__icon-cross" />
        </div>
        <div className="upload-main-external">
          <div className="upload__main upload-container">
            <img src={UploadImg} alt="" className="main__upload-image" />
            <p className="main__drop-files">
              Drop your files here, or choose from your local storage
            </p>
            <p className="main__access">
              Access to your video will be restricted until the download process
              is complete.
            </p>
            <button className="button-standart">Upload</button>
          </div>
        </div>
        <div className="upload__footer upload-container">
          <div>
          <input type="checkbox" name="a" id="private-policy-check" />
          <label htmlFor="terms"></label>
          </div>
          <p className="footer__private-text">
            
            I agree with all this{" "}
            <a href="#" className="private-policy">
              legal shit
            </a>{" "}
            I need to know just to upload a video
          </p>
        </div>
      </section>
    </main>
  );
}
