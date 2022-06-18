export class User {
  value: any;

  constructor(
    public Id: number = <number>{},
    public FullName: string = <string>{},
    public UserName: string = <string>{},
    public Pass: string = <string>{},
    public Permission: number = <number>{}
  ) {}
}
