import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";

// connection settings are in the "ormconfig.json" file
createConnection()
  .then(async connection => {
    console.log("Inserting a new User into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.firstName = "Saw";

    await connection.manager.save(user);

    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database ...");
    const users = connection.manager.find(User);
    console.log("Loaded users: ", users);
  })
  .catch(error => console.log("Error: ", error));
