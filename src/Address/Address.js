import React, {Component} from 'react';
import styles from '../Address/Address.module.css';
//import PropTypes from 'prop-types';
//import { render } from '@testing-library/react';
import App from '../App/App';


class Address extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            ipAddress:''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        alert("Unijeli ste adresu: " + this.state.ipAddress);
      }
    
    handleChange = (event) => {
        this.setState({ipAddress: event.target.value});
    }

    render(){

        let header = '';
        if (this.state.ipAddress) {
        header = <h1 className = {styles.ipWrite}> {this.state.ipAddress}</h1>;
        } else {
        header = '';
        }
        return(
            <div className={styles.ipForm}>
                
                <form onSubmit={this.handleSubmit}>
                    {header}
                    <p>Enter IP address:</p>
                    <input
                    type="text"
                    onChange={this.handleChange}
                    />
                </form>
                <App ip = {this.state.ipAddress}/>
            </div>
        );
    }

    

}
export default Address;