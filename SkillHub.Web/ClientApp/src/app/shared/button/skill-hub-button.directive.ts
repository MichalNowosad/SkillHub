import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[skillHubButton]'
})
export class SkillHubButtonDirective implements OnInit {
  @Input() size: 'small' | 'medium' | 'large' | 'xlarge' = 'medium';
  @Input() type: 'primary' | 'secondary' | 'tertiary' = 'primary';

  constructor(private readonly renderer: Renderer2, private readonly hostElement: ElementRef) { }

  public ngOnInit(): void {
    this.renderer.addClass(this.hostElement.nativeElement, `skill-hub-button`);
    this.renderer.addClass(this.hostElement.nativeElement, `skill-hub-button--${this.size}`);
    this.renderer.addClass(this.hostElement.nativeElement, `skill-hub-button--${this.type}`);
  }
}
