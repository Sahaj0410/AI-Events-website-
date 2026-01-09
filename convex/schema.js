import {defineSchema,defineTable} from 'convex/server'
import { v} from 'convex/values'
import { sl } from 'date-fns/locale/sl'
import { register } from 'next/dist/next-devtools/userspace/pages/pages-dev-overlay-setup'


export default defineSchema({
    // Users Table
    users:defineTable({
        name: v.string(),
        tokenIdentifier: v.string(), //clerk user id for authentication
        email: v.string(),
        imageUrl: v.optional(v.string()),

        //Onboarding
        hasCompletedOnboarding : v.boolean(),

        location:v.optional(
            v.object({
                city:v.string(),
                state:v.optional(v.string()),
                country: v.string()
            })
        ),

        interests: v.optional(v.array(v.string())), //minimum 3 interests

        // Organizer tracking (User Subscription)
         freeEventsCreated: v.number(), //Track free event limit (1 free event per user)

         //timestamps
         createdAt: v.number(),
         updatedAt: v.number()
    }).index("by_token",["tokenIdentifier"]),


   // Events Table

   events:defineTable({
        title: v.string(),
        description: v.string(),
        slug: v.string(), //unique event identifier for url

        // Event Organizer
        organizerId: v.id("users"),
        organizerName : v.string(),

        // Event Details
        category: v.string(),
        tags: v.array(v.string()),

        // Event Date & Time
        startDate: v.number(),
        endDate: v.number(),
        timeZone: v.string(),

        // Event Location
        locationType:v.union(v.literal("physical"),v.literal("online")),
        venue: v.optional(v.string()),
        address: v.optional(v.string()),
        city: v.string(),
        state: v.optional(v.string()),

        // Capacity & Ticketing
        capacity:v.number(),
        ticketType:v.union(v.literal("free"),v.literal("paid")),
        ticketPrice:v.optional(v.number()),
        registrationCount:v.number(),

        //Customization
        coverImage:v.optional(v.string()),
        themeColor:v.optional(v.string()),

        //timestamps
        createdAt: v.number(),
        updatedAt: v.number()

   })
   .index("by_organizer",["organizerId"])
   .index("by_category",["category"])
   .index("by_start_date",["startDate"])
   .index("by_slug",["slug"])
   .searchIndex("search_title",{searchField:"title"}),

   // Registrations Table
   registrations:defineTable({
        eventId: v.id("events"),
        userId: v.id("users"),

        //Attendee info
        attendeeName: v.string(),
        attendeeEmail: v.string(),

        //QR Code for Check-in
        qrCode: v.string(),

        //Check-in 
        checkedIn : v.boolean(),
        checkedInAt : v.optional(v.number()),

        //Status 
        status: v.union(v.literal("confirmed"),v.literal("cancelled")),

        registeredAt: v.number()
   })
   .index("by_event",["eventId"])
   .index("by_user",["userId"])
   .index("by_event_user",["eventId","userId"])
   .index("by_qr_code",["qrCode"])
})