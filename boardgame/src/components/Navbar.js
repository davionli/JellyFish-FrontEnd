import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";

class Navbar extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <div>
                <MDBNavbar color="#283593 indigo darken-3" dark expand="md">
                    <MDBNavbarBrand>
                        <strong className="white-text title">Board Games With "Friends"</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav right>
                            <MDBNavItem active>
                                <MDBNavLink to="/"><i class="fas fa-home"></i>Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/dashboard"><i class="fas fa-chess-rook"></i>My Game</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/find-game"><i class="fas fa-chess-knight"></i>Find A Game</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#!"><i class="far fa-newspaper"></i>News</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="#!"><i class="far fa-address-card"></i>Profile</MDBNavLink>
                            </MDBNavItem>
                            {/* <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <span className="mr-2">Dropdown</span>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem> */}
                        </MDBNavbarNav>
                        {/* <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBFormInline waves>
                                    <div className="md-form my-0">
                                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                                    </div>
                                </MDBFormInline>
                            </MDBNavItem>
                        </MDBNavbarNav> */}
                    </MDBCollapse>
                </MDBNavbar>
            </div>
        );
    }
}

export default Navbar;