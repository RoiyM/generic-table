import { faker } from "@faker-js/faker";

// Generate mock data
const generateMockData = (length) => {
  const columns = [
    { id: "name", ordinalNo: 1, title: "Name", type: "string" },
    { id: "age", ordinalNo: 2, title: "Age", type: "number" },
    { id: "isActive", ordinalNo: 3, title: "Active", type: "boolean" },
    {
      id: "role",
      ordinalNo: 4,
      title: "Role",
      type: "selection",
      options: ["Admin", "User", "Guest"],
    },
  ];

  const data = Array.from({ length: length }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    age: faker.number.int({ min: 18, max: 65 }),
    isActive: faker.datatype.boolean(),
    role: faker.helpers.arrayElement(["Admin", "User", "Guest"]),
  }));

  return { columns, data };
};

export default generateMockData;
