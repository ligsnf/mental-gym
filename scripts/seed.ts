import { createUser } from "@/db/queries/users";
import { createTask } from "@/db/queries/tasks";
import { createSession, endSession } from "@/db/queries/sessions";

async function main() {
  // const newUser = {
  //   email: "crispy@fries.most",
  //   password: "password123",
  // }
  // const res = await createUser(newUser.email, newUser.password);
  // console.log("insert user success", res);
  // process.exit();


  const res = await createTask("obama", "Review crispy fries");
  console.log("create task success", res);
  process.exit();

}


main();
