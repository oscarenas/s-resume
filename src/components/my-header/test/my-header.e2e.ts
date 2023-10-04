import { newE2EPage } from '@stencil/core/testing';

describe('my-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-header></my-header>');

    const element = await page.find('my-header');
    expect(element).toHaveClass('hydrated');
  });
});
