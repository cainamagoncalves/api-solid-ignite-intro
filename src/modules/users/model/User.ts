import { v4 as uuidV4 } from "uuid";

class User {
  id: string;

  name: string;

  admin: boolean;

  email: string;

  created_at: Date;

  updated_at: Date;

  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props);
    this.id = id ?? uuidV4();
  }
}

export { User };
