import mongoose from "mongoose";
import Blog from "./model/Blog.js";
import User from "./model/User.js";

mongoose.connect("mongodb+srv://myFirstMongoDB:tempero321@cluster0.gpcubho.mongodb.net/?retryWrites=true&w=majority");

const user = await User.create({
    name: "Jesse Hall",
    email: "jesse@email.com",
});
console.log(user)


//Creat a new blog post object
const article = await Blog.create({
    title: 'Awesome Post!',
    slug: 'awesome-post',
    author: "Jesse Hall",
    content: 'This is the best post ever',
    tags: ['featured', 'announcement'],
});

article.title = "The most Awesomest Post!!";
await article.save();

console.log(article);


/*  //Find a single blog post
const firstArticle = await Blog.findOne({});
console.log(firstArticle);*/

/*  //Find by BlogId
const query = await Blog.findById
("63b335fc976bf2ad9cce76c5", "title slug content ").exec();
console.log(query);*/

/* //Delete Method
const deletemeth = await Blog.deleteOne({ title: "Awesome Post!" })
console.log(deletemeth)*/

/* //Method returns either null or the object id
const methoexist = await Blog.exists({author: "Jesse Hall" })
console.log(methoexist)*/

/*// The equivalent 'where()' method 
const blogWhere0 = await Blog.where("author").equals("Jesse Hall");
console.log(blogWhere0)

// 
const blogWhere1 = await Blog.where("author").equals("Jesse Hall").select("title author");
console.log(blogWhere1)
*/





































