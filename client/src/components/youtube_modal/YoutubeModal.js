import React from "react";

function YouTubeModal({ isOpen, onCloseModal }) {
  if (!isOpen) return null; // Do not render modal if isOpen is false

  return (
    <div className="youtube_video">
      <div
        className="modal fade show"
        style={{ display: "block" }}
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                onClick={onCloseModal}
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <iframe
                id="youtube-video"
                width={560}
                height={315}
                src="https://www.youtube.com/embed/z6z4-bnDhws"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* Overlay to close modal by clicking outside */}
      <div className="modal-backdrop fade show" onClick={onCloseModal}></div>
    </div>
  );
}

export default YouTubeModal;
