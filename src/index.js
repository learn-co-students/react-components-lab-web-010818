// Make sure to import React and ReactDOM
import React from "react";
import ReactDOM from 'react-dom'

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

const PASSENGERS = [
  "Agnes",
  "Muriel"
]

const PHRASES = [
  "You shouldn't look too far.",
  "Sometimes, the solution is right in front of you."
]

// Define these exported classes
export class OlderCoaster extends React.Component {
 render(){
  return React.createElement("div", {className: "oldercoaster"}, [
    React.createElement("p", {}, "Two grannies having the time of their life!"),
    React.createElement("p", {}, "Passengers:"),
    React.createElement("ul", {},[
      PASSENGERS.map( passenger => React.createElement("li", {}, passenger))
    ])
  ])
 }
}

export class InFrontOfYou extends React.Component {
  render(){
    return React.createElement("div", {}, [
      PHRASES.map( phrase => React.createElement("p", {}, phrase))
    ])
  }
}

export class ButcherShop extends React.Component {
  render(){
    return React.createElement("div", {className: "butcher-shop"}, [
        React.createElement("p", {}, "Hello! We have the following products for sale today:"),
        React.createElement("ul", {}, [
          BUTCHER_PRODUCTS.map( product => React.createElement("li", {}, product))
        ])
      ])
    }
  };

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('global')
);
