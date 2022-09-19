import { ReactNode } from "react"

export type User = {
    [x: string]: string | undefined
    id: number
    name: string
    photo: string
}

export type Post={
    id: number
    image: string
    content: string
    user: User
    userId: Number
    likes: Likes[]
    comments: Comments[]
}


export type Likes={
    id: number
    postId: number
    userId: number 
}

export type Comments={
    [x: string]: ReactNode
    id: number
    content: string
    postId:number
    userId: number
    user: User
    }