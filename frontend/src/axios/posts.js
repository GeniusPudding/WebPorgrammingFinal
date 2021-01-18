import axios from 'axios'
import {BASE_URL, ADD_NEW_POST, GET_ALL_POSTS, GET_TAG_POSTS, UPDATE_YOUR_POST} from '../common/APIpath'

const instance = axios.create({ baseURL: BASE_URL })
const imageInstance = axios.create({ baseURL: BASE_URL,  headers: {'Content-Type': 'multipart/form-data' } })



export const addNewPost = async (newPost) => {  //content:{NTU_ID, password}
  console.log('addNewPostAxios',newPost)
  const {
    data: { addNewPostResult }//succeed or not
  } = await imageInstance.post( ADD_NEW_POST, newPost ).catch((err) => console.error(err));
  console.log('post return data:',addNewPostResult)
  return addNewPostResult
}
//TODO
export const getTag = async (tag) => {
  console.log("get Tag Posts");
  const {
    data: { tagPosts }
  } = await instance.get( GET_TAG_POSTS, tag).catch((err) => console.error(err));
  console.log("tagPosts", tagPosts);
  return tagPosts
}

//TODO
export const getAll = async () => {
  console.log("getAllPosts");
  const {
    data: { allPosts }
  } = await instance.get( GET_ALL_POSTS).catch((err) => console.error(err));
  console.log("allPosts", allPosts);
  return allPosts
}

//TODO
export const updatePost = async (content) => {
    console.log('updatePost content:',content)
    const {
      data: { postResult }
    } = await instance.post({UPDATE_YOUR_POST, content})
    return postResult
}
  
  