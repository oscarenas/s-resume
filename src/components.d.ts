/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Interest, KeywordClass, LocationInfo, School, Work } from "./interfaces/type";
import { Work as Work1 } from "./components";
export { Interest, KeywordClass, LocationInfo, School, Work } from "./interfaces/type";
export { Work as Work1 } from "./components";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyEducation {
        "school": School[];
    }
    interface MyEducationItem {
    }
    interface MyExperience {
        "work": Work[];
    }
    interface MyExperienceItem {
        "item": Work1;
    }
    interface MyHeader {
        "email": string;
        "label": string;
        "name": string;
        "phone": string;
        "website": string;
    }
    interface MyInterest {
        "interest": Interest[];
    }
    interface MyProfile {
        "image": string;
        "location": LocationInfo;
        "name": string;
        "summary": string;
    }
    interface MyResume {
    }
    interface MySkillItem {
        "codeList": KeywordClass[];
    }
    interface MySkills {
        "codeInfoItems": KeywordClass[];
        "personalItems": string[];
        "professionalItems": string[];
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyEducationElement extends Components.MyEducation, HTMLStencilElement {
    }
    var HTMLMyEducationElement: {
        prototype: HTMLMyEducationElement;
        new (): HTMLMyEducationElement;
    };
    interface HTMLMyEducationItemElement extends Components.MyEducationItem, HTMLStencilElement {
    }
    var HTMLMyEducationItemElement: {
        prototype: HTMLMyEducationItemElement;
        new (): HTMLMyEducationItemElement;
    };
    interface HTMLMyExperienceElement extends Components.MyExperience, HTMLStencilElement {
    }
    var HTMLMyExperienceElement: {
        prototype: HTMLMyExperienceElement;
        new (): HTMLMyExperienceElement;
    };
    interface HTMLMyExperienceItemElement extends Components.MyExperienceItem, HTMLStencilElement {
    }
    var HTMLMyExperienceItemElement: {
        prototype: HTMLMyExperienceItemElement;
        new (): HTMLMyExperienceItemElement;
    };
    interface HTMLMyHeaderElement extends Components.MyHeader, HTMLStencilElement {
    }
    var HTMLMyHeaderElement: {
        prototype: HTMLMyHeaderElement;
        new (): HTMLMyHeaderElement;
    };
    interface HTMLMyInterestElement extends Components.MyInterest, HTMLStencilElement {
    }
    var HTMLMyInterestElement: {
        prototype: HTMLMyInterestElement;
        new (): HTMLMyInterestElement;
    };
    interface HTMLMyProfileElement extends Components.MyProfile, HTMLStencilElement {
    }
    var HTMLMyProfileElement: {
        prototype: HTMLMyProfileElement;
        new (): HTMLMyProfileElement;
    };
    interface HTMLMyResumeElement extends Components.MyResume, HTMLStencilElement {
    }
    var HTMLMyResumeElement: {
        prototype: HTMLMyResumeElement;
        new (): HTMLMyResumeElement;
    };
    interface HTMLMySkillItemElement extends Components.MySkillItem, HTMLStencilElement {
    }
    var HTMLMySkillItemElement: {
        prototype: HTMLMySkillItemElement;
        new (): HTMLMySkillItemElement;
    };
    interface HTMLMySkillsElement extends Components.MySkills, HTMLStencilElement {
    }
    var HTMLMySkillsElement: {
        prototype: HTMLMySkillsElement;
        new (): HTMLMySkillsElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "my-education": HTMLMyEducationElement;
        "my-education-item": HTMLMyEducationItemElement;
        "my-experience": HTMLMyExperienceElement;
        "my-experience-item": HTMLMyExperienceItemElement;
        "my-header": HTMLMyHeaderElement;
        "my-interest": HTMLMyInterestElement;
        "my-profile": HTMLMyProfileElement;
        "my-resume": HTMLMyResumeElement;
        "my-skill-item": HTMLMySkillItemElement;
        "my-skills": HTMLMySkillsElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyEducation {
        "school"?: School[];
    }
    interface MyEducationItem {
    }
    interface MyExperience {
        "work"?: Work[];
    }
    interface MyExperienceItem {
        "item"?: Work1;
    }
    interface MyHeader {
        "email"?: string;
        "label"?: string;
        "name"?: string;
        "phone"?: string;
        "website"?: string;
    }
    interface MyInterest {
        "interest"?: Interest[];
    }
    interface MyProfile {
        "image"?: string;
        "location"?: LocationInfo;
        "name"?: string;
        "summary"?: string;
    }
    interface MyResume {
    }
    interface MySkillItem {
        "codeList"?: KeywordClass[];
    }
    interface MySkills {
        "codeInfoItems"?: KeywordClass[];
        "personalItems"?: string[];
        "professionalItems"?: string[];
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "my-education": MyEducation;
        "my-education-item": MyEducationItem;
        "my-experience": MyExperience;
        "my-experience-item": MyExperienceItem;
        "my-header": MyHeader;
        "my-interest": MyInterest;
        "my-profile": MyProfile;
        "my-resume": MyResume;
        "my-skill-item": MySkillItem;
        "my-skills": MySkills;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-education": LocalJSX.MyEducation & JSXBase.HTMLAttributes<HTMLMyEducationElement>;
            "my-education-item": LocalJSX.MyEducationItem & JSXBase.HTMLAttributes<HTMLMyEducationItemElement>;
            "my-experience": LocalJSX.MyExperience & JSXBase.HTMLAttributes<HTMLMyExperienceElement>;
            "my-experience-item": LocalJSX.MyExperienceItem & JSXBase.HTMLAttributes<HTMLMyExperienceItemElement>;
            "my-header": LocalJSX.MyHeader & JSXBase.HTMLAttributes<HTMLMyHeaderElement>;
            "my-interest": LocalJSX.MyInterest & JSXBase.HTMLAttributes<HTMLMyInterestElement>;
            "my-profile": LocalJSX.MyProfile & JSXBase.HTMLAttributes<HTMLMyProfileElement>;
            "my-resume": LocalJSX.MyResume & JSXBase.HTMLAttributes<HTMLMyResumeElement>;
            "my-skill-item": LocalJSX.MySkillItem & JSXBase.HTMLAttributes<HTMLMySkillItemElement>;
            "my-skills": LocalJSX.MySkills & JSXBase.HTMLAttributes<HTMLMySkillsElement>;
        }
    }
}
