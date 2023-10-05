import { Component, Host, Prop, h } from '@stencil/core';
import { KeywordClass } from '../../interfaces/type';

@Component({
  tag: 'my-skills',
  styleUrl: 'my-skills.css',
  shadow: true,
})
export class MySkills {
  @Prop() personalItems: string[];
  @Prop() professionalItems: string[];
  @Prop() codeInfoItems: KeywordClass[];

  render() {
    return (
      <Host>
        <section class=" mx-5 mb-12 text-lg" role="region" aria-label="Skills" id="skills">
          <div class="flex flex-col md:flex-row" role="complementary">
            <div class="basis-full md:basis-1/4 lg:1/3">
              <div class="inline-flex flex-row text-xl font-semibold md:flex-col md:border-b-4 md:border-gray-700 md:pb-3 mb-1">
                <h3 class="mr-2">Skills</h3>
              </div>
            </div>

            <div class="basis-full">
              <div class="flex flex-col md:flex-row ">
                <div class="basis-1/2 mb-6  md:mr-12" role="contentinfo" aria-label="Personal Skills">
                  {/* BORDER DIVIDER */}
                  <div class="flex flex-row">
                    <div class="basis-1/3">
                      <div class="border-t-4 border-gray-600 h-12"></div>
                    </div>
                    <div class="basis-full">
                      <div class="border-t-4 border-amber-400 h-12"></div>
                    </div>
                  </div>
                  <h4 class="text-xl font-semibold mb-3 text-gray-700">Personal</h4>
                  <ul class="list-none leading-9">
                    {this.personalItems?.map((item: string, index: number) => (
                      <li key={index}>
                        <div class="flex flex-row">
                          <div class="grow">{item}</div>
                          <div>
                            <img src="https://resume-oscarenas.web.app/icons/check.svg" width="16" height="16" alt="Approved" />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div class="basis-1/2 mb-6" role="contentinfo" aria-label="Professional Skills">
                  {/* BORDER DIVIDER */}
                  <div class="flex flex-row">
                    <div class="basis-1/3">
                      <div class="border-t-4 border-gray-600 h-12"></div>
                    </div>
                    <div class="basis-full">
                      <div class="border-t-4 border-amber-400 h-12"></div>
                    </div>
                  </div>
                  <h4 class="text-xl font-semibold mb-3 text-gray-700">Professional</h4>

                  <ul class="list-none leading-9">
                    {this.professionalItems?.map((item: string, index: number) => (
                      <li key={index}>
                        <div class="flex flex-row">
                          <div class="grow">{item}</div>
                          <div>
                            <img src="https://resume-oscarenas.web.app/icons/check.svg" width="16" height="16" alt="Approved" />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div class="flex flex-col md:flex-row" role="contentinfo" aria-label="Coding">
                <div class="basis-full">
                  <my-skill-item codeList={this.codeInfoItems}></my-skill-item>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Host>
    );
  }
}
