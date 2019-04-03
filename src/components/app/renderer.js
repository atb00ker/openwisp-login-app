import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import LoginForm from '../login-form'
import Header from '../header'
import './index.scss'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.props.parseOrganizations()
    }

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Route
                        path='/:organization'
                        render={props => (
                            <Header {...props} />
                        )}
                    />
                    <Route
                        path='/:organization'
                        render={props => (
                            <LoginForm {...props} />
                        )}
                    />
                </BrowserRouter>
            </React.Fragment>
        )
    }
}