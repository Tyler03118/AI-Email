// /api/clerk/webhook

import { db } from "@/server/db"
import { log } from "console"

export const POST = async (req: Request) => {
    const { data } = await req.json()
    console.log("Clerk data received: ", data)

    // use the data to update your user in your database
    const emailAddress = data.email_addresses[0].email_address
    const firstName = data.first_name
    const lastName = data.last_name
    const imageUrl = data.image_url
    const id = data.id

    await db.user.create({
        data: {
            id: id,
            emailAddress: emailAddress,
            firstName: firstName,
            lastName: lastName,
            imageUrl: imageUrl
        }
    })

    console.log("User created in database")

    return new Response("Webhook Received", { status: 200 })

}