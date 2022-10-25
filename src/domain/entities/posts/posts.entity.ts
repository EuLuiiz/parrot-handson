export interface IPostsEntity {
    iduser: number,
    idpost?: number,
    content: string,
    createdAt?:Date,
    updatedAt?:Date
}