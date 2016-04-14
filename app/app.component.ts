import {Component} from 'angular2/core';


export class Hero {
    id: number;
    name: string;
}


@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1><h2>{{hero.name}}</h2>'
})

export class AppComponent { 
	public title = "Tour of Heros";
	public hero:Hero = {
        id : 1,
        name : 'Windstorm'
    };
}

