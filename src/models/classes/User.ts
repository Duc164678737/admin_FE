import { JsonClass } from "models/types";

class User {
  name: string;
  email: string;
  password: string;

  constructor(data?: JsonClass<User>) {
    this.name = data?.name || "";
    this.email = data?.email || "";
    this.password = data?.password || "";
  }
}

export default User;
