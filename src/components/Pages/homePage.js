import React, {Component} from 'react';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hText: '', 
            ex1: Array.from('learning ReactJS       '), 
            ex2: Array.from('looking for a job       '), 
            counter: 0, 
            full: false, 
            no: false
        };
    }
    componentDidMount() {
        this.writer = setInterval( () => 
            this.state.full ? this.delete() : this.write()
        , 100);
    }
    componentWillUnmount() {
        clearInterval(this.writer);
    }

    write() {
        let tempWord = this.state.hText;
        this.state.no ? tempWord += this.state.ex2[this.state.counter] : tempWord += this.state.ex1[this.state.counter];
        this.setState({
            hText: tempWord
        });
        if(this.state.ex1.length ===  this.state.hText.length) this.setState({ full: true}) 
        else {
            this.setState({ 
                counter: this.state.counter+1
            });
        }
    }
    delete() {
        this.setState({
            hText: this.state.hText.slice(0, -1)
        });
        if(this.state.hText === '') this.setState({ full: false, counter: 0, no: !this.state.no });
    }

    render(){
        return (
            <div class='homeContainer'>
                <div class='container position-relative'>
                    <h1 style={{paddingTop: '20%', color: 'rgb(48,48,48)', margin: '0'}}>Cemil Aydıngöz</h1>
                    <h4 class='pt-2 pl-2' style={{color: 'rgb(48,48,48)'}} >I am <span style={{color: 'IndianRed'}}>{this.state.hText} |</span></h4>
                </div>
            </div>
        )
    }
}
export default HomePage;
