import axios from "../ultis/axios";

function loadUserData(queryOption) {
  let res = [
    {
      id: "1",
      username: "admin",
      password: "123",
      name: "Trần Thị Át Minh",
      address: "Việt Nam",
      email: "admin123@gmail.com",
      phone: "0123456789",
      gender: "0",
      role: "0",
      avatarLink:
        "https://scontent.fsgn6-1.fna.fbcdn.net/v/t1.0-9/65157726_1754210804724094_6195285364345667584_n.jpg?_nc_cat=109&_nc_ohc=6jwRIYbdh7gAQm9juh7xTJokMnN4yHJvpiKKT0emThbmsntElfkyqeQ4Q&_nc_ht=scontent.fsgn6-1.fna&oh=9370e7e8bee033b7b83c91cc259a2ef4&oe=5E73293D",
      status: "1",
      accType: "0",
      id_social: "0",
    },
    {
      id: "2",
      username: "admin",
      password: "123",
      name: "Trần Văn A",
      address: "Việt Nam",
      email: "admin123@gmail.com",
      phone: "0123456789",
      gender: "0",
      role: "0",
      avatarLink: "",
      status: "1",
      accType: "0",
      id_social: "0",
    },
    {
      id: "3",
      username: "admin",
      password: "123",
      name: "Nguyễn Thị B",
      address: "Việt Nam",
      email: "admin123@gmail.com",
      phone: "0123456789",
      gender: "0",
      role: "0",
      avatarLink: "",
      status: "1",
      accType: "0",
      id_social: "0",
    },
  ];
  return res;
}

export { loadUserData };
