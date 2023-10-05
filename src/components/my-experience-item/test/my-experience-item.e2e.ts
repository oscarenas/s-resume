import { newE2EPage } from '@stencil/core/testing';

describe('my-experience-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-experience-item></my-experience-item>');

    const element = await page.find('my-experience-item');
    expect(element).toHaveClass('hydrated');
  });
});
