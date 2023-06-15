import { Canvas, CircleContainer, Component, RightLeaningContainer } from './Widget';


const canvas = new Canvas(document.body);
canvas.state = {className: 'Kekambas', firstName: 'Kevin'}

const myWidget = new Component();
canvas.addWidget(myWidget);

const rightWidget = new Component();
rightWidget.shape = new RightLeaningContainer();
rightWidget.locationLeft = 6;
rightWidget.locationTop = 6;
rightWidget.shape.zIndex = 99;
rightWidget.content = '<h1>My name is {{ firstName }}</h1>'
canvas.addWidget(rightWidget);

const circleWidget = new Component();
circleWidget.shape = new CircleContainer();
circleWidget.locationTop = 1;
circleWidget.locationLeft = 5;
circleWidget.width = 4;
circleWidget.height = 4;
circleWidget.content = '<h4>Hello {{ className }}</h4>'
canvas.addWidget(circleWidget);

canvas.state = {firstName: 'Brian'};

