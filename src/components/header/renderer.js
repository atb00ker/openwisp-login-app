import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

export default class App extends React.Component {
    render() {
        const { organization, organizations } = this.props
        const links = organization.header ? organization.header.rightSection.links : []
        return (
            <React.Fragment>
                <div className='header-container'>
                    <div className='header'>
                        <div className='header-section header-section-left'>
                        </div>
                        <div className='header-section header-section-right'>
                            {links.map((link, key) =>
                                <a href={link.url} key={key} className='header-link'>
                                    {link.text}
                                </a>
                            )}
                        </div>
                    </div>
                    <div className='sub-header'>
                        <div>Other organizations</div>
                        <div>
                            {organizations.map((org, key) =>
                                <Link key={key} to={`/${org.slug}`} className='link'>{org.name}</Link>
                            )}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}