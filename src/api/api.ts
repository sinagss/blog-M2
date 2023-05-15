/**
 * This is a module that exports functions to fetch data from a JSONPlaceholder API.
 * @returns These are functions that make API requests to retrieve data from a JSONPlaceholder API.
 * Each function returns a promise that resolves to the data retrieved from the API endpoint. The data
 * is returned in JSON format.
 */
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * This function retrieves data from a server endpoint for posts and returns it as a JSON object.
 * @returns The `getPosts` function is returning a Promise that resolves to the data retrieved from the
 * API endpoint at `BASE_URL + "/posts"`. The data is in JSON format and is obtained using the `fetch`
 * API and then parsed using the `json` method.
 */
export async function getPosts() {
  const response = await fetch(BASE_URL + "/posts");
  const data = await response.json();
  return data;
}

/**
 * This function retrieves comments from a specified URL and returns them as a JSON object.
 * @returns The `getComments()` function is returning a Promise that resolves to the JSON data
 * retrieved from the specified URL endpoint `/comments`.
 */
export async function getComments() {
  const response = await fetch(BASE_URL + "/comments");
  return await response.json();
}

/**
 * This function retrieves a list of albums from a specified URL.
 * @returns The `getAlbums` function is returning a promise that resolves to the JSON data retrieved
 * from the `/albums` endpoint of the `BASE_URL`.
 */
export async function getAlbums() {
  const response = await fetch(BASE_URL + "/albums");
  return await response.json();
}

/**
 * This function retrieves photos from a specified URL using the fetch API and returns them as a JSON
 * object.
 * @returns The `getPhotos` function is returning a promise that resolves to the JSON data retrieved
 * from the specified URL endpoint `/photos`.
 */
export async function getPhotos() {
  const response = await fetch(BASE_URL + "/photos");
  return await response.json();
}

/**
 * This function retrieves a list of todos from a server using an asynchronous HTTP request.
 * @returns The `getTodos` function is returning a promise that resolves to the JSON data retrieved
 * from the specified URL endpoint.
 */
export async function getTodos() {
  const response = await fetch(BASE_URL + "/todos");
  return await response.json();
}

/**
 * This function retrieves a list of users from a specified URL.
 * @returns The `getUsers` function is returning a promise that resolves to the JSON data retrieved
 * from the specified URL endpoint.
 */
export async function getUsers() {
  try {
    const response = await fetch(BASE_URL + "/users");
    return await response.json();
  } catch (error) {
    return error;
  }
}

/**
 * This function retrieves a post from a specified URL using the post ID.
 * @param postId - postId is a parameter that represents the unique identifier of a specific post. It
 * is used in the URL to fetch the data of a particular post from the API.
 * @returns The `getPost` function is returning a Promise that resolves to the JSON representation of a
 * single post with the specified `postId`.
 */
export async function getPost(postId: number) {
  const response = await fetch(BASE_URL + `/posts/${postId}`);
  return await response.json();
}

/**
 * This function filters user posts based on a given user ID using the JSONPlaceholder API.
 * @param userId - The `userId` parameter is a number that represents the ID of a user whose posts we
 * want to filter. This function fetches data from the JSONPlaceholder API and returns an array of
 * posts that belong to the specified user.
 * @returns a Promise that resolves to an array of posts from the JSONPlaceholder API that belong to
 * the user with the specified userId.
 */
export async function filterUserPosts(userId: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  return await response.json();
}
