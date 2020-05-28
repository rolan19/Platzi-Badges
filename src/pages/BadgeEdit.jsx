import React from 'react';

import './styles/BadgeEdit.css';
import header from '../images/platziconf-logo.svg';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';
import api from '../api';
import Loader from '../components/Loader';

class BadgeEdit extends React.Component {
   state = {
      loading: true,
      error: null,
      form: {
         firstName: '',
         lastName: '',
         email: '',
         jobTitle: '',
         twitter: '',
      },
   };

   componentDidMount() {
      this.fetchData();
   }

   fetchData = async () => {
      this.setState({ loading: true, error: null });

      try {
         const data = await api.badges.read(this.props.match.params.badgeId);

         this.setState({ loading: false, form: data });
      } catch (error) {
         this.setState({ loading: true, error: error });
      }
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
         await api.badges.update(
            this.props.match.params.badgeId,
            this.state.form
         );
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

      return (
         <>
            <div className="BadgeEdit__hero">
               <img
                  className="BadgeEdit__hero-image img-fluid "
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
                     <h1>Edit Attendant</h1>
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

export default BadgeEdit;
