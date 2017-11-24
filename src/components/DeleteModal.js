import React from 'react';
import Modal from 'react-modal';

const DeleteModal = props => (
  <Modal
    isOpen={props.showDeleteModal}
    onRequestClose={props.onRemoveCancel}
    contentLabel="Delete Expense"
    closeTimeoutMS={200}
    className="modal"
  >
    <p className="modal__body">Are you sure you want to delete this expense?</p>
    <div>
      <button
        className="button"
        onClick={props.onRemoveConfirm}>
        Delete
      </button>
      <div className="modal-divider" />
      <button
        className="button button--delete"
        onClick={props.onRemoveCancel}>
        Cancel
      </button>
    </div>

  </Modal>
);

export default DeleteModal;
