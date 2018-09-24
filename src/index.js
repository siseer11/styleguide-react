import React from 'react';
import ReactDOM from 'react-dom';
import {CommentCard} from './components/CommentCard';
import {GBCard10} from './components/GBCard10';
import {GBCard11} from './components/GBCard11';
import {Button} from "./components/Button";
import "./style/gb-style.css";
import "./style/styleguide-presentation.css";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Globuzzer Components</h1>
                <h3>Buttons</h3>
                <Button link="#" classes="gb-btn gb-btn-small gb-btn-primary">Button</Button>
                <Button link="#" classes="gb-btn gb-btn-small gb-btn-white">Button</Button>
                <h3>GB-Card-11</h3>
                <GBCard11
                    backgroundImg="https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=981026b7c3ee99d54e0811e984995340"
                    title="Astronauts could land on Red Planet by 2039" time="20m ago" category="Science"
                    source="SPACE.com"/>
                <hr/>
                <h3>GB-Card-10</h3>
                <GBCard10
                    backgroundImg="https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=981026b7c3ee99d54e0811e984995340"
                    title="Arctic sea ice extent hits record low for winter maximum" time="20m ago"
                    category="Science" source="SPACE.com"/>
                <hr/>
                <h3>Comment-cards</h3>
                <CommentCard authorName="Mike Taylor"
                             authorPic="https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=6dd9dc582c677370d110940fda65b992"
                             content="Such a massive change in such a short time is extremely unusual." numHearts={10}
                             date="Apr 3" time="1:22pm"/>
                <CommentCard authorName="John Doe"
                             authorPic="https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=6dd9dc582c677370d110940fda65b992"
                             content="Hello! I'm writing a random comment!" numHearts={5}
                             date="Apr 15"
                             time="4:37pm"/>
                <CommentCard authorName="Sam Smith"
                             authorPic="https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=6dd9dc582c677370d110940fda65b992"
                             content="I'm responding to a random comment!" numHearts={4}
                             date="Apr 15"
                             time="4:38pm"/>
                <CommentCard authorName="Sandra White"
                             authorPic="https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=6dd9dc582c677370d110940fda65b992"
                             content="Hi, just adding some stuff." numHearts={8} date="Apr 15"
                             time="4:38pm"/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
