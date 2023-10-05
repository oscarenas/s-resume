import { newE2EPage } from '@stencil/core/testing';

describe('my-education', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-education></my-education>');

    const element = await page.find('my-education');
    expect(element).toHaveClass('hydrated');
  });
});
