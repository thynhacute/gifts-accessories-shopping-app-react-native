const accounts = [
  {
    id: "1",
    name: "Nguyễn Hoàng Tân",
    gmail: "hahino24@gmail.com",
    account: "hahino",
    password: "1",
  },
  {
    id: "2",
    name: "Mai Hoàng Tâm",
    gmail: "hoangtam@gmail.com",
    account: "hoangtam",
    password: "1",
  },
  {
    id: "3",
    name: "Hoàng Nhã Thy",
    gmail: "nhathy@gmail.com",
    account: "nhathy",
    password: "1",
  },
  {
    id: "4",
    name: "Nguyễn Viết Thịnh",
    gmail: "vietthinh@gmail.com",
    account: "vietthinh",
    password: "1",
  },
  {
    id: "5",
    name: "Hoang Tan",
    gmail: "hahino123@gmail.com",
    account: "hahino123",
    password: "1",
  },
  {
    id: "5",
    name: "Hoang Tan",
    gmail: "haha",
    account: "hahino123",
    password: "1",
  },
];

let nextId = 6;

function createAccount(name, gmail, account, password) {
  const newAccount = {
    id: String(nextId++),
    name,
    gmail,
    account,
    password,
  };
  accounts.push(newAccount);
}

export { accounts, createAccount };
