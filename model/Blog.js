import mongoose from "mongoose";
const { Schema, SchemaTypes, model } = mongoose;

/*
//Schema WITH NOT require fields
const blogSchema = new Schema({
    title: String,
    slug: String,
    published: Boolean,
    author: String,
    content: String,
    tags: [String],
    createdAt: Date, 
    updateAt: Date,
    comments: [{
        user: String,
        content: String,
        votes: Number,
    }]
});
*/

//Schema WITH require fields
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        //automatically set to lowercase
        lowercase: true,
    },
    published: {
        type: Boolean,
        default: false,
    },
    author: {
        type: SchemaTypes.ObjectId,
        ref: 'User',
        required: true,
    },
    content: String,
    tags: [String],
    createdAt: {
        type: Date,
        default: () => Date.now(), 
        immutable: true,
    },
    updateAt: Date,
    comments: [{
        user: {
            type: SchemaTypes.ObjectId,
            ref: 'User', 
            required: true,
        },
        content: String,
        votes: Number,
    }]
});

blogSchema.pre('save', function(next){
    this.updateAt = Date.now();
    next();
});

const Blog = model("Blog", blogSchema);
export default Blog;








