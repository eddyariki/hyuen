import React, { Component } from 'react'
import "./Home.css"
import ThreeDCard from '../ThreeDCard/ThreeDCard'

export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <ThreeDCard />
            </div>
        )
    }
}
