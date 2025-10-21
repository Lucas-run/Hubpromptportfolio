export type Assistant = {
  id: string;
  name: string;
  desc?: string;
  func?: string;
};

export type Area = {
  id: string;
  title: string;
  assistants: Assistant[];
};
