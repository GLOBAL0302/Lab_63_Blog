export interface UserInput{
  title:string,
  description:string,
  dateTime:string
}

export interface ApiPosts{
  [id:string]:UserInput
}

export interface Post extends UserInput{
  id:string
}