import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from '../routes';

export default class MenuExampleInverted extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
      <Link route="/">
        <a className="item">
            Home
        </a>
        </Link>

        <Link route="/showUser">
          <a className="item">
              My Account
          </a>
          </Link>

          <Link route="/incentive">
            <a className="item">
                Incentive
            </a>
            </Link>

            <Link route="/industrial">
              <a className="item">
                  Industrial Data
              </a>
              </Link>

              <Link route="/admin">
                <a className="item">
                    Admin
                </a>
                </Link>


      </Menu>
    )
  }
}
