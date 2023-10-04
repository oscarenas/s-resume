import { newE2EPage } from '@stencil/core/testing';

describe('my-resume', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-resume></my-resume>');

    const element = await page.find('my-resume');
    expect(element).toHaveClass('hydrated');
  });
});
