import { Component, Host, Prop, h } from '@stencil/core';
import { Work } from '../../components';

@Component({
  tag: 'my-experience-item',
  styleUrl: 'my-experience-item.css',
  shadow: true,
})
export class MyExperienceItem {
  @Prop() item: Work;
  render() {
    return (
      <Host>
        <div class="flex flex-col md:flex-row mb-12" role="contentinfo" aria-label={name}>
          <div class="basis-full md:basis-1/3 mb-3">
            <div>
              <h3 class="text-lg work-date">
                <time dateTime={this.item.startDate} role="timer" aria-label={'start date: ' + this.item.startDate}>
                  {this.item.startDate}
                </time>
                -
                <time dateTime={this.item.endDate} aria-label={'end date: ' + this.item.endDate} role="timer">
                  {this.item.endDate}
                </time>
              </h3>
            </div>
            <div>
              <h3 class=" text-2xl font-medium text-gray-600">{this.item.name}</h3>
            </div>
          </div>
          <div class="basis-full">
            <details aria-label="position">
              <summary>
                <h4 class="text-xl md:text-2xl font-bold inline ml-1 md:ml-3">{this.item.position}</h4>
              </summary>
              <ul class=" text-lg list-disc mt-6 text-gray-600 leading-9 mx-6" aria-label="Functions">
                {this.item.summary.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </Host>
    );
  }
}
