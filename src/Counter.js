import React, {Component} from "react"; 
import "./Counter.css";
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: 0
        }
    }
            // jesli metoda jest zrobiona w ES5 to trzeba bindowac this. 
            // Jesli w ES6 to nie trzeba bo domyslnie widzi obiektkt (this)
            // this.incrementCounter = this.incrementCounter.bind(this)

        updateOrResetCounter = (updateOrReset) => {
            // console.log("Counter.updateOrResetCounter" + updateOrReset);

            if (updateOrReset == 0) {
                this.setState( {
                    counterValue: 0
                });
            } else {
                this.setState( (prevState) => {
                    return ({
                        counterValue: prevState.counterValue + 1
                    })
                });
            }
        }

    render() {
        return (
            <div className="counter"> 
            <Display currentValue={this.state.counterValue} />
            <ButtonsPanel  updateOrResetMethod={this.updateOrResetCounter} />
            </div>
        )
    }
}

// const Counter = () => {
//     return (
//         <div id="counter"> Licznik</div>
//     )
// }

export default Counter;