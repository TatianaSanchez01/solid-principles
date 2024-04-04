/**
 * Los modulos de alto nivel no deben depender de modulos de bajo nivel
 * Ambos deben depender de abstracciones.
 * Las abstracciones no deben depender de concreciones.
 * Los detalles deben depender de abstracciones
 *
 * Los componentes más importantes son aquellos centrados en resolver el problema
 * subyacente al negocio, es decir, la capa de domio
 *
 * Las menos importantes son los que están próximos a la infraestructura,
 * es decir, aquellos relacionados con la UI, la persistencia, la comunicación
 * con API externas, etc
 *
 * Depender de abstracciones
 * Uno de los motivos mas importantes por el cual las reglas de negocio o capa
 * de dominio deben depender de estas y no de concreciones es que aumenta su
 * tolerancia al cambio
 *
 * Por qué obtenemos este beneficio?
 * Cada cambio en un componente abstracto implica un cambio en su implementación
 * Por el contrario, los cambios en las implementaciones concretas, la mayoría
 * de las veces, no requiren cambios en las interfaces que implementa
 *
 * Inyeccion de dependencias
 * Dependencia en programación, significa que un módulo o componente requiere de
 * otro para poder realizar su trabajo
 * En algun momento nuestro programa o aplicacion llegará a estar formado por muchos
 * módulos. Cuando esto pase, es cuando debemos usar inyección de dependencias
 */

import { Post, PostService } from "./05-dependency-b";
import {
  JsonDataBaseService,
  LocalDataBaseService,
  WebApiPostService,
} from "./05-dependency-c";

// Main
(async () => {
  //   const provider = new LocalDataBaseService();
  //   const provider = new JsonDataBaseService();
  const provider = new WebApiPostService();

  const postService = new PostService(provider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
