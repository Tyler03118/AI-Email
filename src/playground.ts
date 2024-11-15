import { db } from "@/server/db"

await db.user.create({
    data: {
        emailAddress: "test@cc.com",
        firstName: "Test",
        lastName: "User",
    }
})