import React from 'react'
import { PlaygroundWrapper } from '../../Playground/PlaygroundWrapper';
import { Head } from 'react-static'
import basicExample from './basic.example';

export default () =>
<React.Fragment>
    <Head>
        <title>Bacon.js playground and examples</title>
    </Head>
    <div className="PageBlock">
        <h1>Bacon.js Playground</h1>

        <blockquote>A small functional reactive programming lib for JavaScript. Turns your event spaghetti into clean and declarative feng shui bacon, by switching from imperative to functional. </blockquote>

        <p>
            To visualize the observables we developed a small API. Provided <code>api/v0.3</code> package has a function <code>baconObserver(title: string): f(Event)</code>, that you can call to create a <a href="https://baconjs.github.io/api2.html#observable-subscribe" target="_blank">subscribe function</a>, which will display its state on the time chart in the right part of the screen.
        </p>
    </div>

    <br />
    <PlaygroundWrapper code={ basicExample } height={ 200 }/>
    <br />

    <div className="PageBlock">
        <div>
            <h2>External links</h2>
            <ul>
                <li><b><a href="https://baconjs.github.io/" target="_blank">baconjs.github.io</a></b> — Official Bacon.Js page</li>
            </ul>
        </div>
    </div>
</React.Fragment>