/**
 * Establece que las entidades de software (clases, módulos, metodos, etc)
 * deben estar arbiertas para la extensión, pero cerradas para la modificación
 *
 * También se puede lograr mediante el uso de herencia o mediante patrones de
 * diseño de composición como el patrón de estrategia
 */

import { PhotosService, PostService, TodoService } from "./02-open-close-b";
import { HttpClient } from "./02-open-close-c";

(async () => {
  const http = new HttpClient();

  const todoService = new TodoService(http);
  const postService = new PostService(http);
  const photosService = new PhotosService(http);

  const todos = await todoService.getTodoItems();
  const posts = await postService.getPosts();
  const photos = await photosService.getPhotos();

  console.log({ todos, posts, photos });
})();

/**
 *  Detectar violaciones de OPC
 *    1- Cambios normalmente afectan nuestra clase o módulo
 *    2- Cuando una clase o módulo afecta muchas capas. 
 *       (Presentación, almacenamiento, etc)
 */
