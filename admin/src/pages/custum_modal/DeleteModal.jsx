// // App.js
// import React, { useState } from "react";
// import Modal from "./Modal";
// import './delete_module.scss'

// const DeleteModal = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div className="app">
//       <button onClick={openModal}>Open Modal</button>

//       <Modal isOpen={isModalOpen} onClose={closeModal}>
//         <h2>Custom Modal Content</h2>
//         <p>This is your custom modal content.</p>
//       </Modal>
//     </div>
//   );
// };

// export default DeleteModal;


// ==================================================================================


// DeleteModal.js
import React from "react";
import Modal from "./Modal";
import './delete_module.scss';

const DeleteModal = ({ isModalOpen, openModal, closeModal }) => {
  return (
    <div className="delete-modal">
      {/* The button here is optional; you can trigger the modal from the parent */}
      <button onClick={openModal}>Open Modal</button>

      {/* Modal component */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Custom Modal Content</h2>
        <p>This is your custom modal content for delete operation.</p>
      </Modal>
    </div>
  );
};

export default DeleteModal;
