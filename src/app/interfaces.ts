export interface ICard {
  counter: number;
  arr: number[];
  onPush?: boolean;
  cards?: ICard[];
}

export interface IUser {
  name: string;
}
