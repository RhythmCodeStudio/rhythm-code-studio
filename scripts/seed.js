const { db } = require("@vercel/postgres");
const { messages } = require("../app/lib/initial-data");

async function seedMessages() {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
     DROP TABLE IF EXISTS songs;
   `;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS messages (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL
      );
    `;
    console.log('Messages table created successfully');
    const insertMessagesData = await Promise.all(
      messages.map(async (message) => {
        return client.sql`
        INSERT INTO messages (first_name, last_name, email, message, date)
        VALUES (${message.first_name}, ${message.last_name}, ${message.email}, ${message.message}, ${message.date})
        `
      })
      
      );
      console.log('Messages data inserted successfully');
      return {
        createTable,
        insertMessagesData
      };
      
    } catch (error) {
      console.error("Error seeding messages:", error);
      throw error;
    }
};

async function seedAll() {
  const client = await db.connect();
  await seedMessages(client);
}

seedAll().catch((error) => {
  console.error("Error seeding data:", error);
});