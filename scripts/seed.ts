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

//   const res = await createTask("crispy@fries.most", "Review crispy fries");
//   console.log("create task success", res);

  // const start = new Date();
  // await createSession(7, 1, start);

  const end = new Date();
  await endSession(9, end);
  process.exit();

}


main();
