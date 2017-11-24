import React from 'react';
import Modal from 'react-modal';

const DeleteModal = props => (
  <Modal
    isOpen={!!props.showDeleteModal}
    onRequestClose={props.handleCloseDeleteModal}
    onRemove={props.onRemove}
    contentLabel="Delete Expense"
    closeTimeoutMS={200}
    className="modal"
  >
    <p className="modal__body">Are you sure you want to delete this expense?</p>
    <button
      className="button"
      onClick={props.onRemove}>
      Delete
    </button>
    <div className="modal-divider" />
    <button
      className="button button--delete"
      onClick={props.handleCloseDeleteModal}>
      Cancel
    </button>
  </Modal>
);

export default DeleteModal;
