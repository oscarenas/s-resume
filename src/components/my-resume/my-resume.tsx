import { Component, State, h } from '@stencil/core';
import { Resume, HeaderProps, ProfileProps, Work, School, Skill, KeywordClass, Interest, FooterProps } from '../../interfaces/type';
import { getData } from '../../utils/utils';

@Component({
  tag: 'my-resume',
  styleUrl: 'my-resume.css',
  shadow: true,
})
export class MyResume {
  @State() resume: Resume;
  @State() header!: HeaderProps;
  @State() profile!: ProfileProps;
  @State() work!: Work[];
  @State() school!: School[];
  @State() skills!: Skill[];
  @State() personalItems: string[];
  @State() professionalItems: string[];
  @State() codeInfoItems: KeywordClass[];
  @State() interest: Interest[];
  @State() footer: FooterProps;

  componentWillLoad() {
    fetch('https://r35um3.s3.amazonaws.com/resume.json')
      .then((response: Response) => response.json())
      .then(response => {
        this.setData(response);
      });
  }

  private setData(data: Resume): void {
    this.header = getData.header(data.basics);
    this.profile = getData.profile(data.basics);
    this.work = data.work;
    this.school = data.education;
    this.skills = data.skills;
    this.personalItems = data.skills?.find(item => item.name == 'personal')?.keywords! as string[];
    this.professionalItems = data.skills?.find(item => item.name == 'professional')?.keywords! as string[];
    this.codeInfoItems = data.skills?.find(item => item.name == 'about programming')?.keywords! as KeywordClass[];
    this.interest = data.interests;
    this.footer = getData.footer(data.basics!);
  }

  render() {
    return (
      <div>
        <my-header name={this.header?.name!} email={this.header?.email} label={this.header?.label} website={this.header?.website} phone={this.header?.phone}></my-header>

        <my-profile summary={this.profile?.summary} image={this.profile?.image} location={this.profile?.location!} name={this.profile?.name}></my-profile>

        <my-experience work={this.work}></my-experience>

        <my-education school={this.school}></my-education>

        <my-skills personalItems={this.personalItems} professionalItems={this.professionalItems} codeInfoItems={this.codeInfoItems}></my-skills>

        <my-interest interest={this.interest}></my-interest>

        <my-footer github={this.footer?.github} linkedin={this.footer?.linkedin} email={this.footer?.email} phone={this.footer?.phone} name={this.footer?.name}></my-footer>
      </div>
    );
  }
}
