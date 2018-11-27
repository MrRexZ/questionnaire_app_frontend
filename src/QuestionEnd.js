import React, {Component} from 'react'

export class QuestionEnd extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        const dialog_list = this.props.location.state.dialogResponse
        return (
            <div>
                <div>You've finished the question! The entire dialog are the following:<br/>
                        {dialog_list.map((dialog, index) => (
                            <div key={index}>
                                <br/>

                                <b>
                                {index % 2 === 0 ? "Server: " : "Player: "}
                                </b>
                                {dialog}
                            </div>

                        ))}
                </div>
            </div>
        );
    }
}