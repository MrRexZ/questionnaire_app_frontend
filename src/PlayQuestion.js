import React, {Component} from 'react';
import axios from 'axios'

export class PlayQuestion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            question: {},
            selectedAnsId: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmitClick = this.onSubmitClick.bind(this)
    }

    componentDidMount() {
        this.getNextQuestion()
    }

    getNextQuestion() {
        axios.get("http://localhost:8000/getQuestion/" + this.props.match.params.questionId, {withCredentials: true})
            .then(res => {
                console.log(res)
                this.setState({
                    question: res.data
                })
            })
    }

    handleChange(e) {
        this.setState({
            selectedAnsId: e.target.value
        })
    }

    answerQuestion() {
        const data = {"a_id": this.state.selectedAnsId, "questionnaire_id": this.props.match.params.questionId}
        console.log(data)
        axios.post("http://localhost:8000/answerQuestion", data, {withCredentials : true})
            .then(res => {
                console.log(res)
                //this.getNextQuestion()
            })
    }

    onSubmitClick(e) {
        e.preventDefault()
        this.answerQuestion()
    }

    render() {
        const {question} = this.state
        const answers = question['answers']
        const questionTitle = question['q_name']
        if (typeof answers === 'undefined') {
            return null
        }
        return (<div>
            <form>
                <label>{questionTitle}</label>
                {
                    answers.map(answer => (
                        <label className="radio" key={answer.ans_id}>
                            <input type="radio"
                                   name="answerRadioInput"
                                   onChange={this.handleChange}
                                   value={answer.ans_id}
                                   checked={this.state.selectedAnsId === answer.ans_id}
                            />
                            {answer.ans_name}
                        </label>
                    ))
                }
                <input type="submit" value="Submit" onClick={this.onSubmitClick}/>
            </form>
        </div>);
    }
}