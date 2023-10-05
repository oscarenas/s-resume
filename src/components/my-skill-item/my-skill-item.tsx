import { Component, Prop, h } from '@stencil/core';
import { KeywordClass } from '../../interfaces/type';

@Component({
  tag: 'my-skill-item',
  styleUrl: 'my-skill-item.css',
  shadow: true,
})
export class MySkillItem {
  @Prop() codeList: KeywordClass[];
  render() {
    return (
      <div>
        {/* BORDER DIVIDER */}
        <div class="flex flex-row md:mr-12">
          <div class="basis-1/3">
            <div class="border-t-4 border-gray-600 h-12"></div>
          </div>
          <div class="basis-full">
            <div class="border-t-4 border-amber-400 h-12"></div>
          </div>
        </div>
        <h3 class="text-xl font-semibold mb-6 capitalize text-gray-700">About programming</h3>
        <div class="grid grid-cols-3 md:grid-cols-4 gap-4 text-center" role="contentinfo" aria-label="About Programming">
          {/* {listItems} */}
          {this.codeList?.map((skill, index) => (
            <div key={index} class="flex flex-col justify-center items-center mx-5 mb-9" role="contentinfo" aria-label={skill.name}>
              <div>
                <img src={skill.logo} width="92" height="92" alt={'logo ' + skill.name} />
              </div>
              <h4 class="text-base md:text-lg font-semibold capitalize text-gray-600">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
