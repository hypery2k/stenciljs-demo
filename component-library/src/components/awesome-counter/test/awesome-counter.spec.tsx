import { newSpecPage } from '@stencil/core/testing';
import { AwesomeCounter } from '../awesome-counter';

describe('awesome-counter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AwesomeCounter],
      html: `<awesome-counter></awesome-counter>`,
    });
    expect(page.root).toEqualHtml(`
      <awesome-counter>
        <mock:shadow-root>
          <div>
             <button type="button">
               +
             </button>
             <span>
               1
             </span>
             <button type="button">
               -
             </button>
          </div>
        </mock:shadow-root>
      </awesome-counter>
    `);
  });
});
