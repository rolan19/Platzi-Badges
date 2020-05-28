import React from 'react';

class BadgeForm extends React.Component {
   // state = {
   // firstName: '',
   // lastName: '',
   // email: '',
   // jobTitle: '',
   // twitter: '',
   // };

   // handleChange = (e) => {
   //    // console.log({ name: e.target.name, value: e.target.value });
   //    this.setState({
   //       [e.target.name]: e.target.value,
   //    });
   // };

   handleClick = (e) => {
      // console.log('Me jecute');
   };

   // handleSubmit = (e) => {
   //    e.preventDefault();
   //    console.log('Eviando los datos...');
   //    console.log(this.state);
   // };

   render() {
      return (
         <div>
            <form onSubmit={this.props.dataSubmit}>
               <div className="form-group">
                  <label htmlFor="">First Name</label>
                  <input
                     onChange={this.props.dataChange}
                     className="form-control"
                     type="text"
                     name="firstName"
                     value={this.props.formValues.firstName}
                  />
               </div>

               <div className="form-group">
                  <label htmlFor="">Last Name</label>
                  <input
                     onChange={this.props.dataChange}
                     className="form-control"
                     type="text"
                     name="lastName"
                     value={this.props.formValues.lastName}
                  />
               </div>

               <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input
                     onChange={this.props.dataChange}
                     className="form-control"
                     type="email"
                     name="email"
                     value={this.props.formValues.email}
                  />
               </div>

               <div className="form-group">
                  <label htmlFor="">Job Title</label>
                  <input
                     onChange={this.props.dataChange}
                     className="form-control"
                     type="text"
                     name="jobTitle"
                     value={this.props.formValues.jobTitle}
                  />
               </div>
               <div className="form-group">
                  <label htmlFor="">Twitter</label>
                  <input
                     onChange={this.props.dataChange}
                     className="form-control"
                     type="text"
                     name="twitter"
                     value={this.props.formValues.twitter}
                  />
               </div>
               <button onClick={this.handleClick} className="btn btn-primary">
                  Save
               </button>

               {this.props.error && (
                  <p className="text-danger">{this.props.error.message}</p>
               )}
            </form>
         </div>
      );
   }
}
export default BadgeForm;
