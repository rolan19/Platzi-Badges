import React from 'react';

import './styles/BadgeDetails.css';
import confLogo from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

function useIncreaseCount(max) {
   const [count, setCount] = React.useState(0);

   if (count > max) {
      setCount(0);
   }

   return [count, setCount];
}

function BadgeDetails(props) {
   const [count, setCount] = useIncreaseCount(4);
   const badge = props.badge;

   return (
      <div>
         <div className="BadgeDetails__hero">
            <div className="container">
               <div className="row">
                  <div className="col-6">
                     <img src={confLogo} alt="Logo de la conferencia" />
                  </div>
                  <div className="col-6 BadgeDetails__hero-attendant-name">
                     <h1>
                        {badge.firstName} {badge.lastName}
                     </h1>
                  </div>
               </div>
            </div>
         </div>

         <div className="container">
            <div className="row">
               <div className="col">
                  <Badge
                     firstName={badge.firstName || 'Names'}
                     lastName={badge.lastName || 'Apellido'}
                     email={badge.email}
                     jobTitle={badge.jobTitle || 'JobTitle'}
                     twitter={badge.twitter || 'twitter'}
                  />
               </div>
               <div className="col">
                  <h2>Actions</h2>
                  <div>
                     <button
                        onClick={() => setCount(count + 1)}
                        type="button"
                        className="btn btn-primary mr-4">
                        Incrementar {count}
                     </button>
                     <Link
                        className="btn btn-primary mb-3"
                        to={`/badges/${badge.id}/edit`}>
                        Edit
                     </Link>
                  </div>
                  <div>
                     <button
                        onClick={props.onOpenModal}
                        className="btn btn-danger">
                        Delete
                     </button>
                     <Modal
                        isOpen={props.modalIsOpen}
                        onClose={props.onCloseModal}>
                        <DeleteBadgeModal
                           onClose={props.onCloseModal}
                           onDeleteBadge={props.onDeleteBadge}
                        />
                     </Modal>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default BadgeDetails;
