import React, {Component} from "react";


class ButtonsPanel extends Component {
    updateOrReset = (update) => {
        this.props.updateOrResetMethod(update);
            // console.log("ButtonsPanel.updateOrReset" + update);
    }

    render() {
        return(
            <div className="buttonsPanel">
            <button onClick={() =>this.updateOrReset(1)}> Zwiększ o 1</button>
            <button onClick={() =>this.updateOrReset(0)}> Resetuj licznik</button>
            </div>
        )
    }
}

export default ButtonsPanel;