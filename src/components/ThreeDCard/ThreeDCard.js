import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PhoneThreeDCard from './PhoneThreeDCard'
import './ThreeDCard.css'
import './ThreeDCardMedia.css'
import "../../fonts/Athelas-Regular.ttf"

export default class ThreeDCard extends Component {
    state = {
        didMount: false,
        mouseX:0, 
        mouseY:0,
        current_media:0
    }
    //Higher = lower sensitivity
    sensitivity = [45,15]


    cardContainerRef = React.createRef()

    componentDidMount(){
        window.addEventListener("mousemove",this.mouseMove)
        window.addEventListener("resize", this.resize)
        let cm = this.getCurrentMedia()
        this.setState({
            didMount:true,
            current_media:cm
        })
    }
    componentWillUnmount(){
        window.removeEventListener("mousemove", this.mouseMove)
        window.removeEventListener("resize", this.resize)
    }

    getCurrentMedia(){
        let current_media=1
        if(window.innerWidth <=1690){
            current_media = 0.85
        }
        if(window.innerWidth <= 1200){
            current_media = 0.6
        }
        if(window.innerWidth <= 930){
            current_media = 0
        }
        return current_media
    }
    resize = e =>{
        let cm = this.getCurrentMedia()
        this.setState({
            current_media : cm
        })
    }
    mouseMove = e =>{
        let mouseX = -(window.innerWidth/1.3 - e.pageX)/this.sensitivity[0]
        let mouseY = (window.innerHeight/1.5 - e.pageY)/this.sensitivity[1]
        // if(this.state.didMount){
        //     this.cardContainerRef.current.style.transform =  `rotateY(${mouseX}deg) rotateX(${mouseY}deg)`
        // }
        this.setState({
            mouseX,
            mouseY
        })
    }

    // handleLink = () =>{
    //     history.push("/")
    // }

    transform = (x=null, y=null, z=null) =>{
        const {mouseX, mouseY} = this.state
        let style;
        if(x|y|z){
            style = {
                transform:`rotateY(${mouseX}deg) rotateX(${mouseY}deg) translateX(${x}px) translateY(${y}px) translateZ(${z}px)`
            }
        }else{
            style = {
                transform:`rotateY(${mouseX}deg) rotateX(${mouseY}deg)`
            }
        }
        return style
    }


    render() {
        const {current_media} = this.state
        if(current_media !==0){
            return  (
                <div style={{overflow:"hidden"}} >
                    <div className="card-container">
                        <div className="links l2" style={this.transform(0,0,5)}/>
                        <div className="links l2" style={this.transform(0,0,15)}/>
                        <div className="links l2" style={this.transform(0,0,25)}/>

                        <div className="card c3" style={this.transform(200*current_media,100*current_media,25)}/>
                        <div className="card c3" style={this.transform(200*current_media,100*current_media,5)}/>
                        <div className="card c3" style={this.transform(200*current_media,100*current_media,45)}>
                            <Link to="albums/monolith" className="albums-text">monolith</Link>
                        </div>
                        

                        <div className="card c4" style={this.transform(400*current_media,0,-50)}>
                            <a href="mailto:webmaster@example.com" className="contacts-text">contact</a>
                        </div>

                        <div className="card c2" style={this.transform(0,0,-150)}>

                        </div>

                        <div className="card c2" style={this.transform(0,0,-100)}>
                    
                        </div>

                        <div className="card c2" style={this.transform(0,0,-50)}>

                        </div>
                        <div className="card" style={this.transform()}>
                            <div className="text">
                                hyuen
                            </div>
                        </div>
                        <div className="links" style={this.transform(0,0,20)} >
                            <a className="insta" href="https://instagram.com/hyuen.official" target="_blank" rel="noopener noreferrer">
                                <svg className="svgLogo" viewBox="0 0 256 256" version="1.1"  preserveAspectRatio="xMidYMid">
                                    <g>
                                        <path className="svgLogoPath" d="M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z" fill="#0A0A08"></path>
                                    </g>   
                                </svg>
                            </a>
                            <a className="twitter" href="https://twitter.com/hyuen_" target="_blank" rel="noopener noreferrer">
                                <svg className="svgLogo" viewBox="0 0 256 209" version="1.1"  preserveAspectRatio="xMidYMid">
                                    <g>
                                        <path className="svgLogoPath" d="M256,25.4500259 C246.580841,29.6272672 236.458451,32.4504868 225.834156,33.7202333 C236.678503,27.2198053 245.00583,16.9269929 248.927437,4.66307685 C238.779765,10.6812633 227.539325,15.0523376 215.57599,17.408298 C205.994835,7.2006971 192.34506,0.822 177.239197,0.822 C148.232605,0.822 124.716076,24.3375931 124.716076,53.3423116 C124.716076,57.4586875 125.181462,61.4673784 126.076652,65.3112644 C82.4258385,63.1210453 43.7257252,42.211429 17.821398,10.4359288 C13.3005011,18.1929938 10.710443,27.2151234 10.710443,36.8402889 C10.710443,55.061526 19.9835254,71.1374907 34.0762135,80.5557137 C25.4660961,80.2832239 17.3681846,77.9207088 10.2862577,73.9869292 C10.2825122,74.2060448 10.2825122,74.4260967 10.2825122,74.647085 C10.2825122,100.094453 28.3867003,121.322443 52.413563,126.14673 C48.0059695,127.347184 43.3661509,127.988612 38.5755734,127.988612 C35.1914554,127.988612 31.9009766,127.659938 28.694773,127.046602 C35.3777973,147.913145 54.7742053,163.097665 77.7569918,163.52185 C59.7820257,177.607983 37.1354036,186.004604 12.5289147,186.004604 C8.28987161,186.004604 4.10888474,185.75646 0,185.271409 C23.2431033,200.173139 50.8507261,208.867532 80.5109185,208.867532 C177.116529,208.867532 229.943977,128.836982 229.943977,59.4326002 C229.943977,57.1552968 229.893412,54.8901664 229.792282,52.6381454 C240.053257,45.2331635 248.958338,35.9825545 256,25.4500259" fill="#55acee"></path>
                                    </g>   
                                </svg>
                            </a>
                        </div>
                    
                    </div>

                </div>
            )}else{
                return (
                    <div><PhoneThreeDCard/></div>
                )
            }
    }
}
