import { Produto } from "./models";
import { User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
    try {
        connectToDb();
        const produtos = await Produto.find()
        return produtos

    } catch (err) {
        console.log(err)
        throw new Error('Error ao buscar os produtos')
    }
}

export const getPost = async (slug: string) => {
    try {
        connectToDb();
        const produto = await Produto.findOne({ slug })
        return produto

    } catch (err) {
        console.log(err)
        throw new Error('Error ao buscar o produto')
    }
}

export const getUser = async (id: string) => {
    noStore();//usado para impedir o cache
    try {
        connectToDb();
        const user = await User.findById(id)
        return user

    } catch (err) {
        console.log(err)
        throw new Error('Error ao buscar o usuário')
    }
}
export const getUsers = async () => {
    try {
        connectToDb();
        const users = await User.find()
        return users

    } catch (err) {
        console.log(err)
        throw new Error('Error ao buscar o usuário')
    }
}