import React, { Component } from 'react'
import monolith from "../../../data/monolith.png"
import monolith_2 from "../../../data/iso.jpg"
import "./Monolith.css"

export default class Monolith extends Component {
    state = {
        mouseX:0,
        mouseY:0,
    }
    componentDidMount(){
        window.addEventListener("mousemove", this.mouseMove)
    }
    componentWillUnmount(){
        window.removeEventListener("mousemove", this.mouseMove)
    }

    sensitivity = 20

    mouseMove = e =>{
        let mouseX = -(window.innerWidth/1.3 - e.pageX)/this.sensitivity
        let mouseY = (window.innerHeight/1.5 - e.pageY)/this.sensitivity
        this.setState({
            mouseX,
            mouseY
        })
    }

    transform = () =>{
        const {mouseX, mouseY} = this.state
        let style;

        style = {
            transform:`translateX(${mouseX}px) translateY(${mouseY}px)`
        }

        return style
    }
    render() {
        return (
            <div className="monolith-container">
                <div className="monolith-card"> 

                    <div className="monolith-jacket">
                        <img src={monolith} className="monolith-image" alt="album-jacket"/>
                        <img src={monolith_2} className="monolith-background" style={this.transform()} alt="album-background"/>
                    </div>      
                    
                    <div className="monolith-info">
                        <h1 className="monolith-header">first album: monolith</h1>
                        <div className="monolith-link"><a href="https://www.itunes.com" target="_blank" rel="noopener noreferrer">itunes</a></div>
                        <div className="monolith-link"><a href="https://www.itunes.com" target="_blank" rel="noopener noreferrer">spotify</a></div>
                        <div className="monolith-link"><a href="https://soundcloud.com/official-hyuen" target="_blank" rel="noopener noreferrer">soundcloud</a></div>
                        <div className="monolith-text">
                           sneak peek (Ego)
                        </div>
                        <div className="monolith-link-preview">
                            <iframe className="monolith-ego" src="https://www.youtube.com/embed/eSId8lrb2nI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="ego"</iframe>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
