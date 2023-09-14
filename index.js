const { Command } = require("commander");

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.table(allContacts);
      break;

    case "get":
      const contact = await contacts.getContactById(id);
      console.log(contact);
      break;

    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "update":
      const updateContact = await contacts.updateContact(
        id,
        name,
        email,
        phone
      );
      console.log(updateContact);
      break;

    case "remove":
      const deleteContact = await contacts.removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

invokeAction(argv);

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({
//   action: "add",
//   name: "Radio",
//   email: "radio@radio.com",
//   phone: "0987778899",
// });

// invokeAction({
//   action: "update",
//   id: "n_GfobyZR8l8wo8Fk67uP",
//   name: "Radio-TV",
//   email: "radio@radio.com",
//   phone: "0987778899",
// });

// invokeAction({ action: "remove", id: "n_GfobyZR8l8wo8Fk67uP" });
