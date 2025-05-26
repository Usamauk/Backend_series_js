import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

import { Schema } from "mongoose";
const videoSchema = new Schema(
    {
        videofile : {
            type : String, //cloudnary url
            required : true
        },
        thumbnail : {
            type : string ,  // cloudnary url
            requird : true,
        },
        title : {
            type : string ,  
            requird : true,
        },
        description : {
            type : string ,  
            requird : true,
        },
        duration : {
            type : Number ,  // cloudnary url
            requird : true,
        },
        views : {
            type: Number,
            default : 0
        },
        isPublished : {
            type : boolean,
            default : true
        },
        owner : {
            type : Schema.Types.ObjectId,
            ref : "User"
        }


    }, 

    {
        timestamps : true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)
export const video = mongoose.model('video', videoSchema);