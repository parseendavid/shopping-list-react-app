import React, {Component} from 'react';
import NavigationBar from "./nav";
import {SignUp_User} from "../actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        const formData = {"username":this.refs.username.values,
                          "email":this.refs.email.value,
                          "password":this.refs.password.value };
        this.props.register_user(formData);
    }

    render() {
        return (
            <div>
                <NavigationBar text="login" icon="input" link="/login"/>
                <div className="badge">
                    <div className="small_form container">
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <input ref="username"
                                       type="text"
                                       placeholder="Username"
                                       pattern="^[a-zA-Z0-9_]*$"
                                       title="Must not contain special characters"
                                       required/>
                                <input ref="email"
                                       type="email"
                                       placeholder="Email"
                                       required/>
                                <input ref="password"
                                       type="password"
                                       placeholder="password"
                                       minLength="6"
                                       required/>
                                <button className={"waves-effect waves-light btn light-blue right"}
                                        type="submit">
                                    SIGN UP
                                </button>
                                <button className={"waves-effect waves-light btn grey left"}
                                        type="reset">
                                    RESET
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
        }
    }
SignUp.propTypes = {
    token: PropTypes.string,
    register_user: PropTypes.func.isRequired,
    dispatch: PropTypes.object
};
function mapStateToProps(state) {
    return {
        state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        register_user: bindActionCreators(SignUp_User, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

 