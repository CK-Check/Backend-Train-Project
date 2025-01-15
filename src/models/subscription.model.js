import mongoose, { Schema } from "mongoose";

const subscrpitionSchema = new Schema(
    {
        subscriber: {
            type: Schema.Types.ObjectId, // one who is subscribing
            ref: "User"
        },
        channel: {
            type: Schema.Types.ObjectId, // one to whom to subscribe
            ref: "User"
        }
    },
    {
        timestamps: true
    }
);


export const Subscription = mongoose.model("Subscription", subscrpitionSchema)