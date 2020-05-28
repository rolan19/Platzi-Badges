import React from 'react';

const DeleteBadgeModal = (props) => {
   return (
      <div className="DeleteBadgeModal">
         <h1>Estas seguro?</h1>
         <p>Estas apunto de borrar este badge.</p>

         <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">
            Delete
         </button>
         <button onClick={props.onClose} className="btn btn-primary">
            Cancel
         </button>
      </div>
   );
};

export default DeleteBadgeModal;
