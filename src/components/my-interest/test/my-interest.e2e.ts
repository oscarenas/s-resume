import { newE2EPage } from '@stencil/core/testing';

describe('my-interest', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-interest></my-interest>');

    const element = await page.find('my-interest');
    expect(element).toHaveClass('hydrated');
  });
});
