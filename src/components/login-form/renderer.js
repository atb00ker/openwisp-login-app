import React from 'react'
import phoneIcon from './phone.png'
import facebookIcon from './facebook.svg'
import twitterIcon from './twitter.svg'
import './index.scss'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount() {
        const { match, organizations, setOrganization } = this.props
        setOrganization(match.params.organization, organizations)
    }
    componentDidUpdate(prevProps) {
        const { match, organizations, setOrganization } = this.props
        if (match.params.organization !== prevProps.match.params.organization ||
            organizations !== prevProps.organizations) {
            setOrganization(match.params.organization, organizations)
        }
    }
    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = () => {
        const { username, password } = this.state
        const { login, organization } = this.props
        if (username !== '' && password !== '' && organization.loginForm) {
            const data = {
                username: username,
                password: password
            }
            login(organization.loginForm.loginApi, data)
        }
    }
    render() {
        const { organization } = this.props
        return (
            <React.Fragment>
                <div className='login-form-container'>
                    <div className='login-form'>
                        <div className='login-field-group'>
                            <label htmlFor='email-input'>Username</label>
                            <input name="username" onChange={(e) => this.handleChange(e)} id='email-input' className='email-input input' placeholder='Enter your username' />
                        </div>
                        <div className='login-field-group'>
                            <label htmlFor='password-input'>Password</label>
                            <input type='password' name="password" onChange={(e) => this.handleChange(e)} id='password-input' className='password-input input' placeholder='Enter your password' />
                        </div>
                        <div className='login-field-group'>
                            {organization.loginForm ?
                                <div>
                                    By logging in, you accept the <a className='link' href={organization.loginForm.termsAndConditions}> terms and conditions</a> and the <a href={organization.loginForm.privacyPolicy} className='link'> privacy policy</a> of this WiFi service.
                                </div>
                                : null
                            }
                        </div>
                        <div className='login-field-group'>
                            <button onClick={this.handleSubmit} className='login-button'>Login</button>
                        </div>
                        <div className='login-field-group social-icons-container'>
                            {organization.loginForm ?
                                <>
                                    {organization.loginForm.facebook ?
                                        <a href={organization.loginForm.facebook}>
                                            <img src={facebookIcon} />
                                        </a>
                                        : null
                                    }
                                    {organization.loginForm.twitter ?
                                        <a href={organization.loginForm.twitter}>
                                            <img src={twitterIcon} />
                                        </a>
                                        : null
                                    }
                                    {organization.loginForm.helpDesk ?
                                        <a href={organization.loginForm.helpDesk}>
                                            <img src={phoneIcon} />
                                        </a>
                                        : null
                                    }
                                </>
                                : null
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}