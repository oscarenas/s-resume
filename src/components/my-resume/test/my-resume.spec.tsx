import { newSpecPage } from '@stencil/core/testing';
import { MyResume } from '../my-resume';

describe('my-resume', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyResume],
      html: `<my-resume></my-resume>`,
    });
    expect(page.root).toEqualHtml(`
      <my-resume>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-resume>
    `);
  });
});
