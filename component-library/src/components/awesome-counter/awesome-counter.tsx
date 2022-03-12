import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'awesome-counter',
  styleUrl: 'awesome-counter.css',
  shadow: true,
})
// tag::stencil-component[]
export class AwesomeCounter {
  @Prop() start: number = 1;
  @Prop() max: number = 100;
  @Prop() min: number = 0;
  @Prop() step: number = 1;

  @State() value: number;

  @Event() counterUpdate: EventEmitter;

  componentWillLoad() {
    this.value = this.start;
  }

  increment() {
    const newValue = this.value + this.step;
    this.value = newValue > this.max ? this.max : newValue;
    this.counterUpdate.emit(this.value);
  }

  decrement() {
    const newValue = this.value - this.step;
    this.value = newValue < this.min ? this.min : newValue;
    this.counterUpdate.emit(this.value);
  }

  render() {
    return (
      <div>
        <button type="button" onClick={() => this.increment()}>
          +
        </button>
        <span>{this.value}</span>
        <button type="button" onClick={() => this.decrement()}>
          -
        </button>
      </div>
    );
  }
}
// end::stencil-component[]