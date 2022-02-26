//  tag::stencil-component[]
import { Component, h, Prop } from '@stencil/core';
//  end::stencil-component[]
import { format } from '../../utils/utils';
//  tag::stencil-component[]
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  //  end::stencil-component[]
  shadow: true,
  //  tag::stencil-component[]
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;
  //  end::stencil-component[]
  private getText(): string {
    return format(this.first, this.middle, this.last);
  }
  //  tag::stencil-component[]
  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
