import { createUser } from "@/db/queries/users";

async function main() {
  const newUser = {
    email: "crispy@fries.most",
    password: "password123",
  }
  const res = await createUser(newUser.email, newUser.password);
  console.log("insert user success", res);
  process.exit();
}

main();
