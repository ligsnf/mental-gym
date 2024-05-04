import { createUser } from "@/db/queries/users";
import { createTask } from "@/db/queries/tasks";

async function main() {
  // const newUser = {
  //   email: "crispy@fries.most",
  //   password: "password123",
  // }
  // const res = await createUser(newUser.email, newUser.password);
  // console.log("insert user success", res);
  // process.exit();

  const res = await createTask(7, "Review crispy fries");
  console.log("create task success", res);
  process.exit();
}

main();
