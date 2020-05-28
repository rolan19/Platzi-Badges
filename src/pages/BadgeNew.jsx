import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';
import api from '../api';
import Loader from '../components/Loader';

class BadgeNew extends React.Component {
   state = {
      loading: false,
      error: null,
      form: {
         firstName: '',
         lastName: '',
         email: '',
         jobTitle: '',
         twitter: '',
      },
   };

   handleChange = (e) => {
      this.setState({
         form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
         },
      });
   };

   handleSubmit = async (e) => {
      e.preventDefault();
      this.setState({ loading: true, error: null });

      try {
         await api.badges.create(this.state.form);
         this.setState({ loading: false });

         this.props.history.push('/badges');
      } catch (error) {
         this.setState({ loading: false, error: error });
      }
   };

   render() {
      if (this.state.loading) {
         return <Loader />;
      }

      document.title = 'New Badge';

      return (
         <>
            <div className="BadgeNew__hero">
               <img
                  className="BadgeNew__hero-image img-fluid "
                  src={header}
                  alt="Logo"
               />
            </div>

            <div className="container">
               <div className="row">
                  <div className="col-6">
                     <Badge
                        firstName={this.state.form.firstName || 'Names'}
                        lastName={this.state.form.lastName || 'Apellido'}
                        email={this.state.form.email}
                        avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                        jobTitle={this.state.form.jobTitle || 'JobTitle'}
                        twitter={this.state.form.twitter || 'twitter'}
                     />
                  </div>
                  <div className="col-6">
                     <h1>New Attendant</h1>
                     <BadgeForm
                        dataChange={this.handleChange}
                        formValues={this.state.form}
                        dataSubmit={this.handleSubmit}
                        error={this.state.error}
                     />
                  </div>
               </div>
            </div>
         </>
      );
   }
}

export default BadgeNew;
