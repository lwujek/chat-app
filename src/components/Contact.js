import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online : false
    };
  }

render() {
  return (
    <div className="Contact">
    <img className="avatar" src={this.props.avatar} alt={this.props.name}/>
    <div className ="status" onClick={event => {
            const newStatus = !this.state.online;
            this.setState({ online: newStatus });
          }} >
    <h4 className="name">{this.props.name}</h4>
    <div className = {this.state.online ? "status-online": "status-offline"} >
    <p className ="status-text">{this.state.online ? "Online": "Offline"}</p>
    </div>
    </div>
    </div>
  )
}
}


/*function Contact(props) {
  return (
    <div className="Contact">
    <img className="avatar" src={props.avatar} alt={props.name}/>
    <div className ="status">
    <h4 className="name">{props.name}</h4>
    <div className = {props.online ? "status-online": "status-offline"} >
    <p className ="status-text">{props.online ? "Online": "Offline"}</p>
    </div>
    </div>
    </div>
  );
}
*/

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};
export default Contact;



