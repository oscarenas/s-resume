import { newSpecPage } from '@stencil/core/testing';
import { MyInterest } from '../my-interest';

describe('my-interest', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyInterest],
      html: `<my-interest></my-interest>`,
    });
    expect(page.root).toEqualHtml(`
      <my-interest>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-interest>
    `);
  });
});
