import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-education-item',
  styleUrl: 'my-education-item.css',
  shadow: true,
})
export class MyEducationItem {
  render() {
    return (
      <Host>
        <div class="flex flex-col md:flex-row mb-12" role="contentinfo">
          <div class="basis-full md:basis-1/3 mb-3">
            <div class="date">
              <p class=" text-lg">
                <time role="timer">
                  <slot name="startDate" />
                </time>{' '}
                -{' '}
                <time role="timer">
                  <slot name="endDate" />
                </time>
              </p>
            </div>
            <div>
              <h3 class=" text-2xl font-medium text-gray-600 institution">
                <slot name="institution" />
              </h3>
            </div>
          </div>
          <div class="basis-full">
            <div>
              <h4 class=" text-2xl font-bold capitalize study-type">
                <slot name="studyType" />
              </h4>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
