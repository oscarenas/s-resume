import { newSpecPage } from '@stencil/core/testing';
import { MyEducation } from '../my-education';

describe('my-education', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyEducation],
      html: `<my-education></my-education>`,
    });
    expect(page.root).toEqualHtml(`
      <my-education>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-education>
    `);
  });
});
