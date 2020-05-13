declare interface IQuestionAndAnswerWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  MenuFieldLabel: string;
  JSFieldLabel: string;
  CSSFieldLabel: string;
  htmlFieldLabel: string;
}

declare module "QuestionAndAnswerWebPartStrings" {
  const strings: IQuestionAndAnswerWebPartStrings;
  export = strings;
}
