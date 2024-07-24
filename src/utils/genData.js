import { faker } from "@faker-js/faker";

// Generate mock data
const generateMockData = () => {
  const columns = [
    { id: "1", ordinalNo: 1, title: "Name", type: "string" },
    { id: "2", ordinalNo: 2, title: "Age", type: "number" },
    { id: "3", ordinalNo: 3, title: "Active", type: "boolean" },
    {
      id: "4",
      ordinalNo: 4,
      title: "Role",
      type: "selection",
      options: ["Admin", "User", "Guest"],
    },
  ];

  const data = Array.from({ length: 10 }, () => ({
    id: faker.string.uuid(),
    1: faker.person.fullName(),
    2: faker.number.int({ min: 18, max: 65 }),
    3: faker.datatype.boolean(),
    4: faker.helpers.arrayElement(["Admin", "User", "Guest"]),
  }));

  return { columns, data };
};

export default generateMockData;
