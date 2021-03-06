@Directive({
    selector: '[myHoverList]',
    host:{
        '(mouseenter)': 'hello()'
    }
})
export class HoverListDirective{
    @Output() testing : EventEmitter = new EventEmitter();
    @Input() testOne : string = "HELLO";
    @Input() testTwo : string;

    constructor(template : TemplateRef, renderer : Renderer){}
}