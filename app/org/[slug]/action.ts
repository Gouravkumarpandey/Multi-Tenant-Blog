'use server';

import { CreateBlogType, blogTable} from "@/db/schema";
import { db } from "@/db";

export const createBlog = async (payload: CreateBlogType) => {
   const result = await db.insert(blogTable).values(payload);
   return result;
};