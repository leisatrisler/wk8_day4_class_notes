import { v4 as uuidv4 } from 'uuid';
import { GridUnit } from './types';
import Canvas from './Canvas';

export default class Component {

    constructor(
        private _id: string = uuidv4(),
        private _width: GridUnit = 2,
        private _height: GridUnit = 2,
        private _locationTop: GridUnit = 1,
        private _locationLeft: GridUnit = 1,
        private _content: string = "<div></div>",
        private _canvas?: Canvas | undefined
    ){}

    public get canvas(): Canvas | undefined {
        return this._canvas;
    }
    public set canvas(value: Canvas | undefined) {
        this._canvas = value;
    }
    public get content(): string {
        return this._content;
    }
    public set content(value: string) {
        this._content = value;
    }
    public get locationLeft(): GridUnit {
        return this._locationLeft;
    }
    public set locationLeft(value: GridUnit) {
        this._locationLeft = value;
    }
    public get locationTop(): GridUnit {
        return this._locationTop;
    }
    public set locationTop(value: GridUnit) {
        this._locationTop = value;
    }
    public get height(): GridUnit {
        return this._height;
    }
    public set height(value: GridUnit) {
        this._height = value;
    }
    public get width(): GridUnit {
        return this._width;
    }
    public set width(value: GridUnit) {
        this._width = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
}