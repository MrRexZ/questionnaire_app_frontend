import React, {Component} from 'react';
import {QuestionnaireList} from './QuestionnaireList'
import {PlayQuestion} from "./PlayQuestion";
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {QuestionEnd} from "./QuestionEnd";
import {Home} from './Home'


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/questionnaire">Open Questionnaire List</Link>
                        </li>
                    </ul>
                    <hr/>

                    <Route exact path="/" component={Home} />
                    <Route path="/questionnaire" component={QuestionnaireList}/>
                    <Route path="/playQuestion/:questionId" component={PlayQuestion}/>
                    <Route path="/finishQuestion" component={QuestionEnd}/>
                </div>
            </Router>
        );

    }
}

export default App;
