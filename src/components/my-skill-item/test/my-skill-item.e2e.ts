import { newE2EPage } from '@stencil/core/testing';

describe('my-skill-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-skill-item></my-skill-item>');

    const element = await page.find('my-skill-item');
    expect(element).toHaveClass('hydrated');
  });
});
