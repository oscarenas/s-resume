import { newSpecPage } from '@stencil/core/testing';
import { MyEducationItem } from '../my-education-item';

describe('my-education-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyEducationItem],
      html: `<my-education-item></my-education-item>`,
    });
    expect(page.root).toEqualHtml(`
      <my-education-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-education-item>
    `);
  });
});
