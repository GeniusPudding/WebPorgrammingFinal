import axios from 'axios'
import {BASE_URL, ADD_NEW_POST, GET_ALL_POSTS,GET_USER_POSTS, GET_TAG_POSTS, UPDATE_YOUR_POST,SUPPLY_POST,UPLOAD_IMAGE_ACTION,DELETE_IMAGE_ACTION} from '../common/APIpath'

const instance = axios.create({ baseURL: BASE_URL })
// const imageInstance = axios.create({ baseURL: BASE_URL,  headers: {'Content-Type': 'multipart/form-data' } })
// uploadImage through action in UI

export const addNewPost = async (newPost) => {  //
  console.log('addNewPostAxios',newPost)
  if(!newPost.fileList){
    newPost.fileList=[]
  }
  const {
    data: { addNewPostResult }//succeed or not
  } = await instance.post( ADD_NEW_POST, { newPostForm:  newPost } ).catch((err) => console.error(err));
  console.log('post return data:',addNewPostResult)
  return addNewPostResult
}
//TODO
export const getTag = async (tag,NTUID) => {
  console.log("get Tag Posts");
  const {
    data: { tagPosts }
  } = await instance.get( GET_TAG_POSTS, {tag:tag,NTUID:NTUID}).catch((err) => console.error(err));
  console.log("tagPosts:", tagPosts);
  return tagPosts
}
//TODO
export const getUserPost = async (NTUID) => {
  console.log("get user Posts");
  const {
    data: { userPostsResult }
  } = await instance.post( GET_USER_POSTS,  { NTUID: NTUID}).catch((err) => console.error(err));
  console.log("userPosts:", userPostsResult);
  return userPostsResult
}

//TODO
export const getAll = async (NTUID) => {
  console.log("getAllPosts");
  const {
    data: { allPosts }
  } = await instance.get( GET_ALL_POSTS, NTUID).catch((err) => console.error(err));
  console.log("allPosts:", allPosts);
  return allPosts
}

//TODO
export const updatePost = async (content) => {
    console.log('updatePost content:',content)
    const {
      data: { postResult }

    } = await instance.post(UPDATE_YOUR_POST, content)

    return postResult
}
  
//TODO
export const supply = async (postID) => {
  console.log("supply!!");
  const {
    data: { feedback }
  } = await instance.get( SUPPLY_POST,postID).catch((err) => console.error(err));
  console.log("supply feedback:", feedback);
  return feedback
}
/***************************************************** */

//TODO
// export const uploadImage = async (image) => {
//   console.log('uploadImage:',image)
//   await instance.post(UPLOAD_IMAGE_ACTION, image)
// }

//TODO
export const deleteImage = async (image) => {
  console.log('deleteImage:',image)
  await instance.delete(DELETE_IMAGE_ACTION, image)
}