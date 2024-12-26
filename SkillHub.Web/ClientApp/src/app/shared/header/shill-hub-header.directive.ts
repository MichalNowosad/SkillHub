import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[skillHubHeader]'
})
export class HeaderDirective implements OnInit {
  @Input() size: 'small' | 'medium' | 'large' | 'xlarge' = 'medium';

  constructor(private readonly renderer: Renderer2, private readonly hostElement: ElementRef) { }

  public ngOnInit(): void {
    this.renderer.addClass(this.hostElement.nativeElement, `skill-hub-header`);
    this.renderer.addClass(this.hostElement.nativeElement, `skill-hub-header--${this.size}`);
  }
}
