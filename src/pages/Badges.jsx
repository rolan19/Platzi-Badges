import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import Loader from '../components/Loader';

import api from '../api';

class Badges extends React.Component {
   state = {
      loading: true,
      error: null,
      data: undefined,
   };

   componentDidMount() {
      this.fetchData();

      this.intervalId = setInterval(this.fetchData, 5000);

      document.title = 'Lista de Badges';
   }

   componentWillUnmount() {
      clearInterval(this.intervalId);
   }

   fetchData = async () => {
      this.setState({ loading: true, error: null });

      try {
         const data = await api.badges.list();
         this.setState({ loading: false, data: data });
      } catch (error) {
         this.setState({ loading: false, error: error });
      }
   };

   render() {
      if (this.state.loading === true && !this.state.data) {
         return <Loader />;
      }

      if (this.state.error) {
         return `Error: ${this.state.error.message}`;
      }

      return (
         <React.Fragment>
            <div className="Badges">
               <div className="Badges__hero">
                  <div className="Badges__container">
                     <img
                        className="Badges_conf-logo"
                        src={confLogo}
                        alt="Conf Logo"
                     />
                  </div>
               </div>
            </div>

            <div className="Badges__container">
               <div className="Badges__buttons">
                  <Link to="/badges/new" className="btn btn-primary">
                     New Badge
                  </Link>
               </div>

               <div className="Badges__list">
                  <div className="Badges__container">
                     <BadgesList badges={this.state.data} />
                     {this.state.loading && 'Loading...'}
                  </div>
               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default Badges;

// PRACTICA DEL CICLO DE VIDA

/*constructor(props) {
      super(props);
      console.log('1. constructor()');
      this.state = {
         data: [],
      };
   }*/

/*render() {
   console.log('2. render()');
}*/

/*componentDidMount() {
      console.log('3/4. componentDidMount()');

      this.timeoutId = setTimeout(() => {
         this.setState({
            data: [
               {
                  id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
                  firstName: 'Freda',
                  lastName: 'Grady',
                  email: 'Leann_Berge@gmail.com',
                  jobTitle: 'Legacy Brand Director',
                  twitter: 'FredaGrady22221-7573',
                  avatarUrl:
                     'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
               },
               {
                  id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
                  firstName: 'Major',
                  lastName: 'Rodriguez',
                  email: 'Ilene66@hotmail.com',
                  jobTitle: 'Human Research Architect',
                  twitter: 'MajorRodriguez61545',
                  avatarUrl:
                     'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
               },
            ],
         });
      }, 3000);
   }*/

/*componentDidUpdate(prevProps, prevState) {
      console.log('5. componentDidUpdate()');
      console.log({
         prevProps: prevProps,
         prevState: prevState,
      });
      console.log({
         props: this.props,
         state: this.state,
      });
   }*/

/*componentWillUnmount() {
      console.log('6. componentWillUnmount()');
      clearTimeout(this.timeoutId);
   }*/
