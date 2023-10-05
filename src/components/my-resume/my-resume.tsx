import { Component, State, h } from '@stencil/core';
import { Resume, HeaderProps, ProfileProps, Work } from '../../interfaces/type';
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
  }

  render() {
    return (
      <div>
        <my-header name={this.header?.name!} email={this.header?.email} label={this.header?.label} website={this.header?.website} phone={this.header?.phone}></my-header>

        <my-profile summary={this.profile?.summary} image={this.profile?.image} location={this.profile?.location!} name={this.profile?.name}></my-profile>

        <my-experience work={this.work}></my-experience>
      </div>
    );
  }
}
