import { newE2EPage } from '@stencil/core/testing';

describe('my-experience', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-experience></my-experience>');

    const element = await page.find('my-experience');
    expect(element).toHaveClass('hydrated');
  });
});
