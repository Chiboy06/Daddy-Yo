import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
    videos: defineTable({
        videoId: v.string(),
        userId: v.string()
    })
    .index("by_user_id",["userId"])
    .index("by_video_id",["videoId"])
    .index("by_user_id_and_video",["userId", "videoId"]),

    transcript: defineTable({
        videoId: v.string(),
        userId: v.string(),
        transcript: v.array(
            v.object({
                timestamp: v.number(),
                text: v.string()
            })
        ),
    })
    .index("by_video_id", ["videoId"])
    .index("by_user_id", ["userId"])
    .index("by_user_id_and_video",["userId", "videoId"]),

    images: defineTable({
        videoId: v.string(),
        userId: v.string(),
        storageId: v.id("_storage")
    })
    .index("by_video_id", ["videoId"])
    .index("by_user_id", ["userId"])
    .index("by_user_id_and_video", ["userId", "videoId"]),

    titles: defineTable({
        videoId: v.string(),
        userId: v.string(),
        title: v.string()
    })
    .index("by_video_id", ["videoId"])
    .index("by_user_id", ["userId"])
    .index("by_user_id_and_video", ["userId", "videoId"]),
})