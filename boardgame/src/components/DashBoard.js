import React from 'react';
import { MDBBadge, MDBContainer } from "mdbreact";
import GameCard from "./GameCard";
import CreateModal from './CreateModal';

export default function DashBoard() {
    return (
        <div>
            <div>
                <h1><MDBBadge color="primary">My</MDBBadge> Upcoming Game</h1>
                <div className="d-flex flex-row">
                    <GameCard />
                    <GameCard />
                    <GameCard />
                </div>
            </div>
            <div>
                <h1><MDBBadge color="primary">My</MDBBadge> Hosted Game  <CreateModal /></h1>
                <div className="d-flex flex-row">
                    <GameCard />
                    <GameCard />
                    <GameCard />
                </div>
            </div>
        </div>
    )
}
