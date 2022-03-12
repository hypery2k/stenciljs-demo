import { newE2EPage } from '@stencil/core/testing';

describe('awesome-counter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<awesome-counter></awesome-counter>');

    const element = await page.find('awesome-counter');
    expect(element).toHaveClass('hydrated');
  });
});
