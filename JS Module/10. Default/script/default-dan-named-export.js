export const title = "Default and Named Export"; // named export

const content = "Content belajar JS Module";
const author = "Kenny Ken";
const year = 2023;
const module = "JS Module";

export { content } // named export
export default { author, year, module }; // deafult export
// export default { content, author, year, module };