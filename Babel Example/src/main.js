import { toUpper } from "./transform";

class Hello {
  static world() {
    console.log(toUpper("Hello World!"));
  }
}

Hello.world();
