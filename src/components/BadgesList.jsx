import React from 'react';

import './styles/BadgesList.css';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';

function useSearchBadges(badges) {
   const [query, setQuery] = React.useState('');
   const [filterBadges, setFilterBadges] = React.useState(badges);

   React.useMemo(() => {
      const results = badges.filter(function (badge) {
         return `${badge.firstName} ${badge.lastName}`
            .toLowerCase()
            .includes(query.toLowerCase());
      });

      setFilterBadges(results);
   }, [badges, query]);

   return { query, setQuery, filterBadges };
}

function BadgesList(props) {
   const badges = props.badges;

   const { query, setQuery, filterBadges } = useSearchBadges(badges);

   if (filterBadges.length === 0) {
      return (
         <div>
            <div className="form-group">
               <label>Filter Badges</label>
               <input
                  type="search"
                  className="form-control"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
               />
            </div>
            <h3>No encontramos ningún Badge</h3>
            <Link className="btn btn-primary" to="/badges/new">
               Crea un nuevo Badge
            </Link>
         </div>
      );
   }
   return (
      <div className="BadgesList">
         <div className="form-group">
            <label>Filter Badges</label>
            <input
               type="search"
               className="form-control"
               value={query}
               onChange={(e) => setQuery(e.target.value)}
            />
         </div>
         <ul className="list-unstyled">
            {filterBadges.map((badge) => {
               return (
                  <li key={badge.id}>
                     <Link
                        className="text-reset text-decoration-none"
                        to={`/badges/${badge.id}`}>
                        <div className="BadgesListItem">
                           <Gravatar
                              email={badge.email}
                              alt="avatar"
                              className="BadgesListItem__avatar"
                           />
                           <div>
                              <p>
                                 <strong>
                                    {badge.firstName} {badge.lastName}
                                 </strong>
                              </p>
                              <p>@{badge.twitter}</p>
                              <p>{badge.jobTitle}</p>
                           </div>
                        </div>
                     </Link>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}

export default BadgesList;
