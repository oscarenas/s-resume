import { newE2EPage } from '@stencil/core/testing';

describe('my-education-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-education-item></my-education-item>');

    const element = await page.find('my-education-item');
    expect(element).toHaveClass('hydrated');
  });
});
