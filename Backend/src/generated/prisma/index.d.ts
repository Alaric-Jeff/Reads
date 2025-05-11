
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model BookGenre
 * 
 */
export type BookGenre = $Result.DefaultSelection<Prisma.$BookGenrePayload>
/**
 * Model BookLibrary
 * 
 */
export type BookLibrary = $Result.DefaultSelection<Prisma.$BookLibraryPayload>
/**
 * Model BookShelf
 * 
 */
export type BookShelf = $Result.DefaultSelection<Prisma.$BookShelfPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Love
 * 
 */
export type Love = $Result.DefaultSelection<Prisma.$LovePayload>
/**
 * Model BookPage
 * 
 */
export type BookPage = $Result.DefaultSelection<Prisma.$BookPagePayload>
/**
 * Model Library
 * 
 */
export type Library = $Result.DefaultSelection<Prisma.$LibraryPayload>
/**
 * Model Shelf
 * 
 */
export type Shelf = $Result.DefaultSelection<Prisma.$ShelfPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Genres: {
  Horror: 'Horror',
  Comedy: 'Comedy',
  Romance: 'Romance',
  Fantasy: 'Fantasy',
  Psychological: 'Psychological',
  Thriller: 'Thriller'
};

export type Genres = (typeof Genres)[keyof typeof Genres]

}

export type Genres = $Enums.Genres

export const Genres: typeof $Enums.Genres

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookGenre`: Exposes CRUD operations for the **BookGenre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookGenres
    * const bookGenres = await prisma.bookGenre.findMany()
    * ```
    */
  get bookGenre(): Prisma.BookGenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookLibrary`: Exposes CRUD operations for the **BookLibrary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookLibraries
    * const bookLibraries = await prisma.bookLibrary.findMany()
    * ```
    */
  get bookLibrary(): Prisma.BookLibraryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookShelf`: Exposes CRUD operations for the **BookShelf** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookShelves
    * const bookShelves = await prisma.bookShelf.findMany()
    * ```
    */
  get bookShelf(): Prisma.BookShelfDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.love`: Exposes CRUD operations for the **Love** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Loves
    * const loves = await prisma.love.findMany()
    * ```
    */
  get love(): Prisma.LoveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookPage`: Exposes CRUD operations for the **BookPage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookPages
    * const bookPages = await prisma.bookPage.findMany()
    * ```
    */
  get bookPage(): Prisma.BookPageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.library`: Exposes CRUD operations for the **Library** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Libraries
    * const libraries = await prisma.library.findMany()
    * ```
    */
  get library(): Prisma.LibraryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shelf`: Exposes CRUD operations for the **Shelf** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shelves
    * const shelves = await prisma.shelf.findMany()
    * ```
    */
  get shelf(): Prisma.ShelfDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Book: 'Book',
    BookGenre: 'BookGenre',
    BookLibrary: 'BookLibrary',
    BookShelf: 'BookShelf',
    Comment: 'Comment',
    Love: 'Love',
    BookPage: 'BookPage',
    Library: 'Library',
    Shelf: 'Shelf'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "book" | "bookGenre" | "bookLibrary" | "bookShelf" | "comment" | "love" | "bookPage" | "library" | "shelf"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      BookGenre: {
        payload: Prisma.$BookGenrePayload<ExtArgs>
        fields: Prisma.BookGenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookGenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookGenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload>
          }
          findFirst: {
            args: Prisma.BookGenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookGenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload>
          }
          findMany: {
            args: Prisma.BookGenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload>[]
          }
          create: {
            args: Prisma.BookGenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload>
          }
          createMany: {
            args: Prisma.BookGenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookGenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload>[]
          }
          delete: {
            args: Prisma.BookGenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload>
          }
          update: {
            args: Prisma.BookGenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload>
          }
          deleteMany: {
            args: Prisma.BookGenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookGenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookGenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload>[]
          }
          upsert: {
            args: Prisma.BookGenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookGenrePayload>
          }
          aggregate: {
            args: Prisma.BookGenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookGenre>
          }
          groupBy: {
            args: Prisma.BookGenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookGenreCountArgs<ExtArgs>
            result: $Utils.Optional<BookGenreCountAggregateOutputType> | number
          }
        }
      }
      BookLibrary: {
        payload: Prisma.$BookLibraryPayload<ExtArgs>
        fields: Prisma.BookLibraryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookLibraryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookLibraryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookLibraryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookLibraryPayload>
          }
          findFirst: {
            args: Prisma.BookLibraryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookLibraryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookLibraryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookLibraryPayload>
          }
          findMany: {
            args: Prisma.BookLibraryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookLibraryPayload>[]
          }
          create: {
            args: Prisma.BookLibraryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookLibraryPayload>
          }
          createMany: {
            args: Prisma.BookLibraryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookLibraryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookLibraryPayload>[]
          }
          delete: {
            args: Prisma.BookLibraryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookLibraryPayload>
          }
          update: {
            args: Prisma.BookLibraryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookLibraryPayload>
          }
          deleteMany: {
            args: Prisma.BookLibraryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookLibraryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookLibraryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookLibraryPayload>[]
          }
          upsert: {
            args: Prisma.BookLibraryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookLibraryPayload>
          }
          aggregate: {
            args: Prisma.BookLibraryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookLibrary>
          }
          groupBy: {
            args: Prisma.BookLibraryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookLibraryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookLibraryCountArgs<ExtArgs>
            result: $Utils.Optional<BookLibraryCountAggregateOutputType> | number
          }
        }
      }
      BookShelf: {
        payload: Prisma.$BookShelfPayload<ExtArgs>
        fields: Prisma.BookShelfFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookShelfFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookShelfPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookShelfFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookShelfPayload>
          }
          findFirst: {
            args: Prisma.BookShelfFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookShelfPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookShelfFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookShelfPayload>
          }
          findMany: {
            args: Prisma.BookShelfFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookShelfPayload>[]
          }
          create: {
            args: Prisma.BookShelfCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookShelfPayload>
          }
          createMany: {
            args: Prisma.BookShelfCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookShelfCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookShelfPayload>[]
          }
          delete: {
            args: Prisma.BookShelfDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookShelfPayload>
          }
          update: {
            args: Prisma.BookShelfUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookShelfPayload>
          }
          deleteMany: {
            args: Prisma.BookShelfDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookShelfUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookShelfUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookShelfPayload>[]
          }
          upsert: {
            args: Prisma.BookShelfUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookShelfPayload>
          }
          aggregate: {
            args: Prisma.BookShelfAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookShelf>
          }
          groupBy: {
            args: Prisma.BookShelfGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookShelfGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookShelfCountArgs<ExtArgs>
            result: $Utils.Optional<BookShelfCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Love: {
        payload: Prisma.$LovePayload<ExtArgs>
        fields: Prisma.LoveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LovePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LovePayload>
          }
          findFirst: {
            args: Prisma.LoveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LovePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LovePayload>
          }
          findMany: {
            args: Prisma.LoveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LovePayload>[]
          }
          create: {
            args: Prisma.LoveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LovePayload>
          }
          createMany: {
            args: Prisma.LoveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LovePayload>[]
          }
          delete: {
            args: Prisma.LoveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LovePayload>
          }
          update: {
            args: Prisma.LoveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LovePayload>
          }
          deleteMany: {
            args: Prisma.LoveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LovePayload>[]
          }
          upsert: {
            args: Prisma.LoveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LovePayload>
          }
          aggregate: {
            args: Prisma.LoveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLove>
          }
          groupBy: {
            args: Prisma.LoveGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoveGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoveCountArgs<ExtArgs>
            result: $Utils.Optional<LoveCountAggregateOutputType> | number
          }
        }
      }
      BookPage: {
        payload: Prisma.$BookPagePayload<ExtArgs>
        fields: Prisma.BookPageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookPageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookPageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPagePayload>
          }
          findFirst: {
            args: Prisma.BookPageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookPageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPagePayload>
          }
          findMany: {
            args: Prisma.BookPageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPagePayload>[]
          }
          create: {
            args: Prisma.BookPageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPagePayload>
          }
          createMany: {
            args: Prisma.BookPageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookPageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPagePayload>[]
          }
          delete: {
            args: Prisma.BookPageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPagePayload>
          }
          update: {
            args: Prisma.BookPageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPagePayload>
          }
          deleteMany: {
            args: Prisma.BookPageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookPageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookPageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPagePayload>[]
          }
          upsert: {
            args: Prisma.BookPageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPagePayload>
          }
          aggregate: {
            args: Prisma.BookPageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookPage>
          }
          groupBy: {
            args: Prisma.BookPageGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookPageGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookPageCountArgs<ExtArgs>
            result: $Utils.Optional<BookPageCountAggregateOutputType> | number
          }
        }
      }
      Library: {
        payload: Prisma.$LibraryPayload<ExtArgs>
        fields: Prisma.LibraryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LibraryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LibraryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          findFirst: {
            args: Prisma.LibraryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LibraryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          findMany: {
            args: Prisma.LibraryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>[]
          }
          create: {
            args: Prisma.LibraryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          createMany: {
            args: Prisma.LibraryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LibraryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>[]
          }
          delete: {
            args: Prisma.LibraryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          update: {
            args: Prisma.LibraryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          deleteMany: {
            args: Prisma.LibraryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LibraryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LibraryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>[]
          }
          upsert: {
            args: Prisma.LibraryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          aggregate: {
            args: Prisma.LibraryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLibrary>
          }
          groupBy: {
            args: Prisma.LibraryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LibraryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LibraryCountArgs<ExtArgs>
            result: $Utils.Optional<LibraryCountAggregateOutputType> | number
          }
        }
      }
      Shelf: {
        payload: Prisma.$ShelfPayload<ExtArgs>
        fields: Prisma.ShelfFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShelfFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelfPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShelfFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelfPayload>
          }
          findFirst: {
            args: Prisma.ShelfFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelfPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShelfFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelfPayload>
          }
          findMany: {
            args: Prisma.ShelfFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelfPayload>[]
          }
          create: {
            args: Prisma.ShelfCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelfPayload>
          }
          createMany: {
            args: Prisma.ShelfCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShelfCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelfPayload>[]
          }
          delete: {
            args: Prisma.ShelfDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelfPayload>
          }
          update: {
            args: Prisma.ShelfUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelfPayload>
          }
          deleteMany: {
            args: Prisma.ShelfDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShelfUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShelfUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelfPayload>[]
          }
          upsert: {
            args: Prisma.ShelfUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShelfPayload>
          }
          aggregate: {
            args: Prisma.ShelfAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShelf>
          }
          groupBy: {
            args: Prisma.ShelfGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShelfGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShelfCountArgs<ExtArgs>
            result: $Utils.Optional<ShelfCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    book?: BookOmit
    bookGenre?: BookGenreOmit
    bookLibrary?: BookLibraryOmit
    bookShelf?: BookShelfOmit
    comment?: CommentOmit
    love?: LoveOmit
    bookPage?: BookPageOmit
    library?: LibraryOmit
    shelf?: ShelfOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    books: number
    loves: number
    comments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | UserCountOutputTypeCountBooksArgs
    loves?: boolean | UserCountOutputTypeCountLovesArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLovesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoveWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    pages: number
    genres: number
    loves: number
    comments: number
    libraries: number
    shelves: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pages?: boolean | BookCountOutputTypeCountPagesArgs
    genres?: boolean | BookCountOutputTypeCountGenresArgs
    loves?: boolean | BookCountOutputTypeCountLovesArgs
    comments?: boolean | BookCountOutputTypeCountCommentsArgs
    libraries?: boolean | BookCountOutputTypeCountLibrariesArgs
    shelves?: boolean | BookCountOutputTypeCountShelvesArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookPageWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookGenreWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountLovesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoveWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountLibrariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookLibraryWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountShelvesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookShelfWhereInput
  }


  /**
   * Count Type LibraryCountOutputType
   */

  export type LibraryCountOutputType = {
    books: number
    shelves: number
  }

  export type LibraryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | LibraryCountOutputTypeCountBooksArgs
    shelves?: boolean | LibraryCountOutputTypeCountShelvesArgs
  }

  // Custom InputTypes
  /**
   * LibraryCountOutputType without action
   */
  export type LibraryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryCountOutputType
     */
    select?: LibraryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LibraryCountOutputType without action
   */
  export type LibraryCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookLibraryWhereInput
  }

  /**
   * LibraryCountOutputType without action
   */
  export type LibraryCountOutputTypeCountShelvesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShelfWhereInput
  }


  /**
   * Count Type ShelfCountOutputType
   */

  export type ShelfCountOutputType = {
    books: number
  }

  export type ShelfCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | ShelfCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes
  /**
   * ShelfCountOutputType without action
   */
  export type ShelfCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShelfCountOutputType
     */
    select?: ShelfCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShelfCountOutputType without action
   */
  export type ShelfCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookShelfWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    username: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    username: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    username: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    username: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    books?: boolean | User$booksArgs<ExtArgs>
    library?: boolean | User$libraryArgs<ExtArgs>
    loves?: boolean | User$lovesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "username" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | User$booksArgs<ExtArgs>
    library?: boolean | User$libraryArgs<ExtArgs>
    loves?: boolean | User$lovesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      books: Prisma.$BookPayload<ExtArgs>[]
      library: Prisma.$LibraryPayload<ExtArgs> | null
      loves: Prisma.$LovePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      username: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends User$booksArgs<ExtArgs> = {}>(args?: Subset<T, User$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    library<T extends User$libraryArgs<ExtArgs> = {}>(args?: Subset<T, User$libraryArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    loves<T extends User$lovesArgs<ExtArgs> = {}>(args?: Subset<T, User$lovesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LovePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.books
   */
  export type User$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * User.library
   */
  export type User$libraryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    where?: LibraryWhereInput
  }

  /**
   * User.loves
   */
  export type User$lovesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Love
     */
    select?: LoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Love
     */
    omit?: LoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveInclude<ExtArgs> | null
    where?: LoveWhereInput
    orderBy?: LoveOrderByWithRelationInput | LoveOrderByWithRelationInput[]
    cursor?: LoveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoveScalarFieldEnum | LoveScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    userId: number | null
  }

  export type BookSumAggregateOutputType = {
    userId: number | null
  }

  export type BookMinAggregateOutputType = {
    id: string | null
    title: string | null
    userId: number | null
  }

  export type BookMaxAggregateOutputType = {
    id: string | null
    title: string | null
    userId: number | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    title: number
    userId: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    userId?: true
  }

  export type BookSumAggregateInputType = {
    userId?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    title?: true
    userId?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    title?: true
    userId?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    title?: true
    userId?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: string
    title: string
    userId: number
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    userId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    pages?: boolean | Book$pagesArgs<ExtArgs>
    genres?: boolean | Book$genresArgs<ExtArgs>
    loves?: boolean | Book$lovesArgs<ExtArgs>
    comments?: boolean | Book$commentsArgs<ExtArgs>
    libraries?: boolean | Book$librariesArgs<ExtArgs>
    shelves?: boolean | Book$shelvesArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    userId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    userId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    id?: boolean
    title?: boolean
    userId?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "userId", ExtArgs["result"]["book"]>
  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    pages?: boolean | Book$pagesArgs<ExtArgs>
    genres?: boolean | Book$genresArgs<ExtArgs>
    loves?: boolean | Book$lovesArgs<ExtArgs>
    comments?: boolean | Book$commentsArgs<ExtArgs>
    libraries?: boolean | Book$librariesArgs<ExtArgs>
    shelves?: boolean | Book$shelvesArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      pages: Prisma.$BookPagePayload<ExtArgs>[]
      genres: Prisma.$BookGenrePayload<ExtArgs>[]
      loves: Prisma.$LovePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      libraries: Prisma.$BookLibraryPayload<ExtArgs>[]
      shelves: Prisma.$BookShelfPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      userId: number
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pages<T extends Book$pagesArgs<ExtArgs> = {}>(args?: Subset<T, Book$pagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    genres<T extends Book$genresArgs<ExtArgs> = {}>(args?: Subset<T, Book$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    loves<T extends Book$lovesArgs<ExtArgs> = {}>(args?: Subset<T, Book$lovesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LovePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Book$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Book$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    libraries<T extends Book$librariesArgs<ExtArgs> = {}>(args?: Subset<T, Book$librariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookLibraryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shelves<T extends Book$shelvesArgs<ExtArgs> = {}>(args?: Subset<T, Book$shelvesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookShelfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Book model
   */
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'String'>
    readonly title: FieldRef<"Book", 'String'>
    readonly userId: FieldRef<"Book", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book updateManyAndReturn
   */
  export type BookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book.pages
   */
  export type Book$pagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPage
     */
    select?: BookPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookPage
     */
    omit?: BookPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookPageInclude<ExtArgs> | null
    where?: BookPageWhereInput
    orderBy?: BookPageOrderByWithRelationInput | BookPageOrderByWithRelationInput[]
    cursor?: BookPageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookPageScalarFieldEnum | BookPageScalarFieldEnum[]
  }

  /**
   * Book.genres
   */
  export type Book$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    where?: BookGenreWhereInput
    orderBy?: BookGenreOrderByWithRelationInput | BookGenreOrderByWithRelationInput[]
    cursor?: BookGenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookGenreScalarFieldEnum | BookGenreScalarFieldEnum[]
  }

  /**
   * Book.loves
   */
  export type Book$lovesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Love
     */
    select?: LoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Love
     */
    omit?: LoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveInclude<ExtArgs> | null
    where?: LoveWhereInput
    orderBy?: LoveOrderByWithRelationInput | LoveOrderByWithRelationInput[]
    cursor?: LoveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoveScalarFieldEnum | LoveScalarFieldEnum[]
  }

  /**
   * Book.comments
   */
  export type Book$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Book.libraries
   */
  export type Book$librariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookLibrary
     */
    select?: BookLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookLibrary
     */
    omit?: BookLibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookLibraryInclude<ExtArgs> | null
    where?: BookLibraryWhereInput
    orderBy?: BookLibraryOrderByWithRelationInput | BookLibraryOrderByWithRelationInput[]
    cursor?: BookLibraryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookLibraryScalarFieldEnum | BookLibraryScalarFieldEnum[]
  }

  /**
   * Book.shelves
   */
  export type Book$shelvesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookShelf
     */
    select?: BookShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookShelf
     */
    omit?: BookShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookShelfInclude<ExtArgs> | null
    where?: BookShelfWhereInput
    orderBy?: BookShelfOrderByWithRelationInput | BookShelfOrderByWithRelationInput[]
    cursor?: BookShelfWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookShelfScalarFieldEnum | BookShelfScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model BookGenre
   */

  export type AggregateBookGenre = {
    _count: BookGenreCountAggregateOutputType | null
    _avg: BookGenreAvgAggregateOutputType | null
    _sum: BookGenreSumAggregateOutputType | null
    _min: BookGenreMinAggregateOutputType | null
    _max: BookGenreMaxAggregateOutputType | null
  }

  export type BookGenreAvgAggregateOutputType = {
    id: number | null
  }

  export type BookGenreSumAggregateOutputType = {
    id: number | null
  }

  export type BookGenreMinAggregateOutputType = {
    id: number | null
    bookId: string | null
    genre: $Enums.Genres | null
    createdAt: Date | null
  }

  export type BookGenreMaxAggregateOutputType = {
    id: number | null
    bookId: string | null
    genre: $Enums.Genres | null
    createdAt: Date | null
  }

  export type BookGenreCountAggregateOutputType = {
    id: number
    bookId: number
    genre: number
    createdAt: number
    _all: number
  }


  export type BookGenreAvgAggregateInputType = {
    id?: true
  }

  export type BookGenreSumAggregateInputType = {
    id?: true
  }

  export type BookGenreMinAggregateInputType = {
    id?: true
    bookId?: true
    genre?: true
    createdAt?: true
  }

  export type BookGenreMaxAggregateInputType = {
    id?: true
    bookId?: true
    genre?: true
    createdAt?: true
  }

  export type BookGenreCountAggregateInputType = {
    id?: true
    bookId?: true
    genre?: true
    createdAt?: true
    _all?: true
  }

  export type BookGenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookGenre to aggregate.
     */
    where?: BookGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookGenres to fetch.
     */
    orderBy?: BookGenreOrderByWithRelationInput | BookGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookGenres
    **/
    _count?: true | BookGenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookGenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookGenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookGenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookGenreMaxAggregateInputType
  }

  export type GetBookGenreAggregateType<T extends BookGenreAggregateArgs> = {
        [P in keyof T & keyof AggregateBookGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookGenre[P]>
      : GetScalarType<T[P], AggregateBookGenre[P]>
  }




  export type BookGenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookGenreWhereInput
    orderBy?: BookGenreOrderByWithAggregationInput | BookGenreOrderByWithAggregationInput[]
    by: BookGenreScalarFieldEnum[] | BookGenreScalarFieldEnum
    having?: BookGenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookGenreCountAggregateInputType | true
    _avg?: BookGenreAvgAggregateInputType
    _sum?: BookGenreSumAggregateInputType
    _min?: BookGenreMinAggregateInputType
    _max?: BookGenreMaxAggregateInputType
  }

  export type BookGenreGroupByOutputType = {
    id: number
    bookId: string
    genre: $Enums.Genres
    createdAt: Date
    _count: BookGenreCountAggregateOutputType | null
    _avg: BookGenreAvgAggregateOutputType | null
    _sum: BookGenreSumAggregateOutputType | null
    _min: BookGenreMinAggregateOutputType | null
    _max: BookGenreMaxAggregateOutputType | null
  }

  type GetBookGenreGroupByPayload<T extends BookGenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGenreGroupByOutputType[P]>
            : GetScalarType<T[P], BookGenreGroupByOutputType[P]>
        }
      >
    >


  export type BookGenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    genre?: boolean
    createdAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookGenre"]>

  export type BookGenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    genre?: boolean
    createdAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookGenre"]>

  export type BookGenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    genre?: boolean
    createdAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookGenre"]>

  export type BookGenreSelectScalar = {
    id?: boolean
    bookId?: boolean
    genre?: boolean
    createdAt?: boolean
  }

  export type BookGenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookId" | "genre" | "createdAt", ExtArgs["result"]["bookGenre"]>
  export type BookGenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type BookGenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type BookGenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $BookGenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookGenre"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookId: string
      genre: $Enums.Genres
      createdAt: Date
    }, ExtArgs["result"]["bookGenre"]>
    composites: {}
  }

  type BookGenreGetPayload<S extends boolean | null | undefined | BookGenreDefaultArgs> = $Result.GetResult<Prisma.$BookGenrePayload, S>

  type BookGenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookGenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookGenreCountAggregateInputType | true
    }

  export interface BookGenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookGenre'], meta: { name: 'BookGenre' } }
    /**
     * Find zero or one BookGenre that matches the filter.
     * @param {BookGenreFindUniqueArgs} args - Arguments to find a BookGenre
     * @example
     * // Get one BookGenre
     * const bookGenre = await prisma.bookGenre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookGenreFindUniqueArgs>(args: SelectSubset<T, BookGenreFindUniqueArgs<ExtArgs>>): Prisma__BookGenreClient<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookGenre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookGenreFindUniqueOrThrowArgs} args - Arguments to find a BookGenre
     * @example
     * // Get one BookGenre
     * const bookGenre = await prisma.bookGenre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookGenreFindUniqueOrThrowArgs>(args: SelectSubset<T, BookGenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookGenreClient<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookGenre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGenreFindFirstArgs} args - Arguments to find a BookGenre
     * @example
     * // Get one BookGenre
     * const bookGenre = await prisma.bookGenre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookGenreFindFirstArgs>(args?: SelectSubset<T, BookGenreFindFirstArgs<ExtArgs>>): Prisma__BookGenreClient<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookGenre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGenreFindFirstOrThrowArgs} args - Arguments to find a BookGenre
     * @example
     * // Get one BookGenre
     * const bookGenre = await prisma.bookGenre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookGenreFindFirstOrThrowArgs>(args?: SelectSubset<T, BookGenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookGenreClient<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookGenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookGenres
     * const bookGenres = await prisma.bookGenre.findMany()
     * 
     * // Get first 10 BookGenres
     * const bookGenres = await prisma.bookGenre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookGenreWithIdOnly = await prisma.bookGenre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookGenreFindManyArgs>(args?: SelectSubset<T, BookGenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookGenre.
     * @param {BookGenreCreateArgs} args - Arguments to create a BookGenre.
     * @example
     * // Create one BookGenre
     * const BookGenre = await prisma.bookGenre.create({
     *   data: {
     *     // ... data to create a BookGenre
     *   }
     * })
     * 
     */
    create<T extends BookGenreCreateArgs>(args: SelectSubset<T, BookGenreCreateArgs<ExtArgs>>): Prisma__BookGenreClient<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookGenres.
     * @param {BookGenreCreateManyArgs} args - Arguments to create many BookGenres.
     * @example
     * // Create many BookGenres
     * const bookGenre = await prisma.bookGenre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookGenreCreateManyArgs>(args?: SelectSubset<T, BookGenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookGenres and returns the data saved in the database.
     * @param {BookGenreCreateManyAndReturnArgs} args - Arguments to create many BookGenres.
     * @example
     * // Create many BookGenres
     * const bookGenre = await prisma.bookGenre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookGenres and only return the `id`
     * const bookGenreWithIdOnly = await prisma.bookGenre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookGenreCreateManyAndReturnArgs>(args?: SelectSubset<T, BookGenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookGenre.
     * @param {BookGenreDeleteArgs} args - Arguments to delete one BookGenre.
     * @example
     * // Delete one BookGenre
     * const BookGenre = await prisma.bookGenre.delete({
     *   where: {
     *     // ... filter to delete one BookGenre
     *   }
     * })
     * 
     */
    delete<T extends BookGenreDeleteArgs>(args: SelectSubset<T, BookGenreDeleteArgs<ExtArgs>>): Prisma__BookGenreClient<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookGenre.
     * @param {BookGenreUpdateArgs} args - Arguments to update one BookGenre.
     * @example
     * // Update one BookGenre
     * const bookGenre = await prisma.bookGenre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookGenreUpdateArgs>(args: SelectSubset<T, BookGenreUpdateArgs<ExtArgs>>): Prisma__BookGenreClient<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookGenres.
     * @param {BookGenreDeleteManyArgs} args - Arguments to filter BookGenres to delete.
     * @example
     * // Delete a few BookGenres
     * const { count } = await prisma.bookGenre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookGenreDeleteManyArgs>(args?: SelectSubset<T, BookGenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookGenres
     * const bookGenre = await prisma.bookGenre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookGenreUpdateManyArgs>(args: SelectSubset<T, BookGenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookGenres and returns the data updated in the database.
     * @param {BookGenreUpdateManyAndReturnArgs} args - Arguments to update many BookGenres.
     * @example
     * // Update many BookGenres
     * const bookGenre = await prisma.bookGenre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookGenres and only return the `id`
     * const bookGenreWithIdOnly = await prisma.bookGenre.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookGenreUpdateManyAndReturnArgs>(args: SelectSubset<T, BookGenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookGenre.
     * @param {BookGenreUpsertArgs} args - Arguments to update or create a BookGenre.
     * @example
     * // Update or create a BookGenre
     * const bookGenre = await prisma.bookGenre.upsert({
     *   create: {
     *     // ... data to create a BookGenre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookGenre we want to update
     *   }
     * })
     */
    upsert<T extends BookGenreUpsertArgs>(args: SelectSubset<T, BookGenreUpsertArgs<ExtArgs>>): Prisma__BookGenreClient<$Result.GetResult<Prisma.$BookGenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGenreCountArgs} args - Arguments to filter BookGenres to count.
     * @example
     * // Count the number of BookGenres
     * const count = await prisma.bookGenre.count({
     *   where: {
     *     // ... the filter for the BookGenres we want to count
     *   }
     * })
    **/
    count<T extends BookGenreCountArgs>(
      args?: Subset<T, BookGenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookGenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookGenreAggregateArgs>(args: Subset<T, BookGenreAggregateArgs>): Prisma.PrismaPromise<GetBookGenreAggregateType<T>>

    /**
     * Group by BookGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookGenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGenreGroupByArgs['orderBy'] }
        : { orderBy?: BookGenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookGenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookGenre model
   */
  readonly fields: BookGenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookGenre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookGenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookGenre model
   */
  interface BookGenreFieldRefs {
    readonly id: FieldRef<"BookGenre", 'Int'>
    readonly bookId: FieldRef<"BookGenre", 'String'>
    readonly genre: FieldRef<"BookGenre", 'Genres'>
    readonly createdAt: FieldRef<"BookGenre", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookGenre findUnique
   */
  export type BookGenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * Filter, which BookGenre to fetch.
     */
    where: BookGenreWhereUniqueInput
  }

  /**
   * BookGenre findUniqueOrThrow
   */
  export type BookGenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * Filter, which BookGenre to fetch.
     */
    where: BookGenreWhereUniqueInput
  }

  /**
   * BookGenre findFirst
   */
  export type BookGenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * Filter, which BookGenre to fetch.
     */
    where?: BookGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookGenres to fetch.
     */
    orderBy?: BookGenreOrderByWithRelationInput | BookGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookGenres.
     */
    cursor?: BookGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookGenres.
     */
    distinct?: BookGenreScalarFieldEnum | BookGenreScalarFieldEnum[]
  }

  /**
   * BookGenre findFirstOrThrow
   */
  export type BookGenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * Filter, which BookGenre to fetch.
     */
    where?: BookGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookGenres to fetch.
     */
    orderBy?: BookGenreOrderByWithRelationInput | BookGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookGenres.
     */
    cursor?: BookGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookGenres.
     */
    distinct?: BookGenreScalarFieldEnum | BookGenreScalarFieldEnum[]
  }

  /**
   * BookGenre findMany
   */
  export type BookGenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * Filter, which BookGenres to fetch.
     */
    where?: BookGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookGenres to fetch.
     */
    orderBy?: BookGenreOrderByWithRelationInput | BookGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookGenres.
     */
    cursor?: BookGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookGenres.
     */
    skip?: number
    distinct?: BookGenreScalarFieldEnum | BookGenreScalarFieldEnum[]
  }

  /**
   * BookGenre create
   */
  export type BookGenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * The data needed to create a BookGenre.
     */
    data: XOR<BookGenreCreateInput, BookGenreUncheckedCreateInput>
  }

  /**
   * BookGenre createMany
   */
  export type BookGenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookGenres.
     */
    data: BookGenreCreateManyInput | BookGenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookGenre createManyAndReturn
   */
  export type BookGenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * The data used to create many BookGenres.
     */
    data: BookGenreCreateManyInput | BookGenreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookGenre update
   */
  export type BookGenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * The data needed to update a BookGenre.
     */
    data: XOR<BookGenreUpdateInput, BookGenreUncheckedUpdateInput>
    /**
     * Choose, which BookGenre to update.
     */
    where: BookGenreWhereUniqueInput
  }

  /**
   * BookGenre updateMany
   */
  export type BookGenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookGenres.
     */
    data: XOR<BookGenreUpdateManyMutationInput, BookGenreUncheckedUpdateManyInput>
    /**
     * Filter which BookGenres to update
     */
    where?: BookGenreWhereInput
    /**
     * Limit how many BookGenres to update.
     */
    limit?: number
  }

  /**
   * BookGenre updateManyAndReturn
   */
  export type BookGenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * The data used to update BookGenres.
     */
    data: XOR<BookGenreUpdateManyMutationInput, BookGenreUncheckedUpdateManyInput>
    /**
     * Filter which BookGenres to update
     */
    where?: BookGenreWhereInput
    /**
     * Limit how many BookGenres to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookGenre upsert
   */
  export type BookGenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * The filter to search for the BookGenre to update in case it exists.
     */
    where: BookGenreWhereUniqueInput
    /**
     * In case the BookGenre found by the `where` argument doesn't exist, create a new BookGenre with this data.
     */
    create: XOR<BookGenreCreateInput, BookGenreUncheckedCreateInput>
    /**
     * In case the BookGenre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookGenreUpdateInput, BookGenreUncheckedUpdateInput>
  }

  /**
   * BookGenre delete
   */
  export type BookGenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
    /**
     * Filter which BookGenre to delete.
     */
    where: BookGenreWhereUniqueInput
  }

  /**
   * BookGenre deleteMany
   */
  export type BookGenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookGenres to delete
     */
    where?: BookGenreWhereInput
    /**
     * Limit how many BookGenres to delete.
     */
    limit?: number
  }

  /**
   * BookGenre without action
   */
  export type BookGenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookGenre
     */
    select?: BookGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookGenre
     */
    omit?: BookGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookGenreInclude<ExtArgs> | null
  }


  /**
   * Model BookLibrary
   */

  export type AggregateBookLibrary = {
    _count: BookLibraryCountAggregateOutputType | null
    _avg: BookLibraryAvgAggregateOutputType | null
    _sum: BookLibrarySumAggregateOutputType | null
    _min: BookLibraryMinAggregateOutputType | null
    _max: BookLibraryMaxAggregateOutputType | null
  }

  export type BookLibraryAvgAggregateOutputType = {
    id: number | null
    libraryId: number | null
  }

  export type BookLibrarySumAggregateOutputType = {
    id: number | null
    libraryId: number | null
  }

  export type BookLibraryMinAggregateOutputType = {
    id: number | null
    bookId: string | null
    libraryId: number | null
    createdAt: Date | null
  }

  export type BookLibraryMaxAggregateOutputType = {
    id: number | null
    bookId: string | null
    libraryId: number | null
    createdAt: Date | null
  }

  export type BookLibraryCountAggregateOutputType = {
    id: number
    bookId: number
    libraryId: number
    createdAt: number
    _all: number
  }


  export type BookLibraryAvgAggregateInputType = {
    id?: true
    libraryId?: true
  }

  export type BookLibrarySumAggregateInputType = {
    id?: true
    libraryId?: true
  }

  export type BookLibraryMinAggregateInputType = {
    id?: true
    bookId?: true
    libraryId?: true
    createdAt?: true
  }

  export type BookLibraryMaxAggregateInputType = {
    id?: true
    bookId?: true
    libraryId?: true
    createdAt?: true
  }

  export type BookLibraryCountAggregateInputType = {
    id?: true
    bookId?: true
    libraryId?: true
    createdAt?: true
    _all?: true
  }

  export type BookLibraryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookLibrary to aggregate.
     */
    where?: BookLibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookLibraries to fetch.
     */
    orderBy?: BookLibraryOrderByWithRelationInput | BookLibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookLibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookLibraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookLibraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookLibraries
    **/
    _count?: true | BookLibraryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookLibraryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookLibrarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookLibraryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookLibraryMaxAggregateInputType
  }

  export type GetBookLibraryAggregateType<T extends BookLibraryAggregateArgs> = {
        [P in keyof T & keyof AggregateBookLibrary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookLibrary[P]>
      : GetScalarType<T[P], AggregateBookLibrary[P]>
  }




  export type BookLibraryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookLibraryWhereInput
    orderBy?: BookLibraryOrderByWithAggregationInput | BookLibraryOrderByWithAggregationInput[]
    by: BookLibraryScalarFieldEnum[] | BookLibraryScalarFieldEnum
    having?: BookLibraryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookLibraryCountAggregateInputType | true
    _avg?: BookLibraryAvgAggregateInputType
    _sum?: BookLibrarySumAggregateInputType
    _min?: BookLibraryMinAggregateInputType
    _max?: BookLibraryMaxAggregateInputType
  }

  export type BookLibraryGroupByOutputType = {
    id: number
    bookId: string
    libraryId: number
    createdAt: Date
    _count: BookLibraryCountAggregateOutputType | null
    _avg: BookLibraryAvgAggregateOutputType | null
    _sum: BookLibrarySumAggregateOutputType | null
    _min: BookLibraryMinAggregateOutputType | null
    _max: BookLibraryMaxAggregateOutputType | null
  }

  type GetBookLibraryGroupByPayload<T extends BookLibraryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookLibraryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookLibraryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookLibraryGroupByOutputType[P]>
            : GetScalarType<T[P], BookLibraryGroupByOutputType[P]>
        }
      >
    >


  export type BookLibrarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    libraryId?: boolean
    createdAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookLibrary"]>

  export type BookLibrarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    libraryId?: boolean
    createdAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookLibrary"]>

  export type BookLibrarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    libraryId?: boolean
    createdAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookLibrary"]>

  export type BookLibrarySelectScalar = {
    id?: boolean
    bookId?: boolean
    libraryId?: boolean
    createdAt?: boolean
  }

  export type BookLibraryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookId" | "libraryId" | "createdAt", ExtArgs["result"]["bookLibrary"]>
  export type BookLibraryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }
  export type BookLibraryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }
  export type BookLibraryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }

  export type $BookLibraryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookLibrary"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      library: Prisma.$LibraryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookId: string
      libraryId: number
      createdAt: Date
    }, ExtArgs["result"]["bookLibrary"]>
    composites: {}
  }

  type BookLibraryGetPayload<S extends boolean | null | undefined | BookLibraryDefaultArgs> = $Result.GetResult<Prisma.$BookLibraryPayload, S>

  type BookLibraryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookLibraryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookLibraryCountAggregateInputType | true
    }

  export interface BookLibraryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookLibrary'], meta: { name: 'BookLibrary' } }
    /**
     * Find zero or one BookLibrary that matches the filter.
     * @param {BookLibraryFindUniqueArgs} args - Arguments to find a BookLibrary
     * @example
     * // Get one BookLibrary
     * const bookLibrary = await prisma.bookLibrary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookLibraryFindUniqueArgs>(args: SelectSubset<T, BookLibraryFindUniqueArgs<ExtArgs>>): Prisma__BookLibraryClient<$Result.GetResult<Prisma.$BookLibraryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookLibrary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookLibraryFindUniqueOrThrowArgs} args - Arguments to find a BookLibrary
     * @example
     * // Get one BookLibrary
     * const bookLibrary = await prisma.bookLibrary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookLibraryFindUniqueOrThrowArgs>(args: SelectSubset<T, BookLibraryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookLibraryClient<$Result.GetResult<Prisma.$BookLibraryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookLibrary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookLibraryFindFirstArgs} args - Arguments to find a BookLibrary
     * @example
     * // Get one BookLibrary
     * const bookLibrary = await prisma.bookLibrary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookLibraryFindFirstArgs>(args?: SelectSubset<T, BookLibraryFindFirstArgs<ExtArgs>>): Prisma__BookLibraryClient<$Result.GetResult<Prisma.$BookLibraryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookLibrary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookLibraryFindFirstOrThrowArgs} args - Arguments to find a BookLibrary
     * @example
     * // Get one BookLibrary
     * const bookLibrary = await prisma.bookLibrary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookLibraryFindFirstOrThrowArgs>(args?: SelectSubset<T, BookLibraryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookLibraryClient<$Result.GetResult<Prisma.$BookLibraryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookLibraries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookLibraryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookLibraries
     * const bookLibraries = await prisma.bookLibrary.findMany()
     * 
     * // Get first 10 BookLibraries
     * const bookLibraries = await prisma.bookLibrary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookLibraryWithIdOnly = await prisma.bookLibrary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookLibraryFindManyArgs>(args?: SelectSubset<T, BookLibraryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookLibraryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookLibrary.
     * @param {BookLibraryCreateArgs} args - Arguments to create a BookLibrary.
     * @example
     * // Create one BookLibrary
     * const BookLibrary = await prisma.bookLibrary.create({
     *   data: {
     *     // ... data to create a BookLibrary
     *   }
     * })
     * 
     */
    create<T extends BookLibraryCreateArgs>(args: SelectSubset<T, BookLibraryCreateArgs<ExtArgs>>): Prisma__BookLibraryClient<$Result.GetResult<Prisma.$BookLibraryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookLibraries.
     * @param {BookLibraryCreateManyArgs} args - Arguments to create many BookLibraries.
     * @example
     * // Create many BookLibraries
     * const bookLibrary = await prisma.bookLibrary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookLibraryCreateManyArgs>(args?: SelectSubset<T, BookLibraryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookLibraries and returns the data saved in the database.
     * @param {BookLibraryCreateManyAndReturnArgs} args - Arguments to create many BookLibraries.
     * @example
     * // Create many BookLibraries
     * const bookLibrary = await prisma.bookLibrary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookLibraries and only return the `id`
     * const bookLibraryWithIdOnly = await prisma.bookLibrary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookLibraryCreateManyAndReturnArgs>(args?: SelectSubset<T, BookLibraryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookLibraryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookLibrary.
     * @param {BookLibraryDeleteArgs} args - Arguments to delete one BookLibrary.
     * @example
     * // Delete one BookLibrary
     * const BookLibrary = await prisma.bookLibrary.delete({
     *   where: {
     *     // ... filter to delete one BookLibrary
     *   }
     * })
     * 
     */
    delete<T extends BookLibraryDeleteArgs>(args: SelectSubset<T, BookLibraryDeleteArgs<ExtArgs>>): Prisma__BookLibraryClient<$Result.GetResult<Prisma.$BookLibraryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookLibrary.
     * @param {BookLibraryUpdateArgs} args - Arguments to update one BookLibrary.
     * @example
     * // Update one BookLibrary
     * const bookLibrary = await prisma.bookLibrary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookLibraryUpdateArgs>(args: SelectSubset<T, BookLibraryUpdateArgs<ExtArgs>>): Prisma__BookLibraryClient<$Result.GetResult<Prisma.$BookLibraryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookLibraries.
     * @param {BookLibraryDeleteManyArgs} args - Arguments to filter BookLibraries to delete.
     * @example
     * // Delete a few BookLibraries
     * const { count } = await prisma.bookLibrary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookLibraryDeleteManyArgs>(args?: SelectSubset<T, BookLibraryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookLibraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookLibraryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookLibraries
     * const bookLibrary = await prisma.bookLibrary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookLibraryUpdateManyArgs>(args: SelectSubset<T, BookLibraryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookLibraries and returns the data updated in the database.
     * @param {BookLibraryUpdateManyAndReturnArgs} args - Arguments to update many BookLibraries.
     * @example
     * // Update many BookLibraries
     * const bookLibrary = await prisma.bookLibrary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookLibraries and only return the `id`
     * const bookLibraryWithIdOnly = await prisma.bookLibrary.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookLibraryUpdateManyAndReturnArgs>(args: SelectSubset<T, BookLibraryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookLibraryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookLibrary.
     * @param {BookLibraryUpsertArgs} args - Arguments to update or create a BookLibrary.
     * @example
     * // Update or create a BookLibrary
     * const bookLibrary = await prisma.bookLibrary.upsert({
     *   create: {
     *     // ... data to create a BookLibrary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookLibrary we want to update
     *   }
     * })
     */
    upsert<T extends BookLibraryUpsertArgs>(args: SelectSubset<T, BookLibraryUpsertArgs<ExtArgs>>): Prisma__BookLibraryClient<$Result.GetResult<Prisma.$BookLibraryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookLibraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookLibraryCountArgs} args - Arguments to filter BookLibraries to count.
     * @example
     * // Count the number of BookLibraries
     * const count = await prisma.bookLibrary.count({
     *   where: {
     *     // ... the filter for the BookLibraries we want to count
     *   }
     * })
    **/
    count<T extends BookLibraryCountArgs>(
      args?: Subset<T, BookLibraryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookLibraryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookLibrary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookLibraryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookLibraryAggregateArgs>(args: Subset<T, BookLibraryAggregateArgs>): Prisma.PrismaPromise<GetBookLibraryAggregateType<T>>

    /**
     * Group by BookLibrary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookLibraryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookLibraryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookLibraryGroupByArgs['orderBy'] }
        : { orderBy?: BookLibraryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookLibraryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookLibraryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookLibrary model
   */
  readonly fields: BookLibraryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookLibrary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookLibraryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    library<T extends LibraryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LibraryDefaultArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookLibrary model
   */
  interface BookLibraryFieldRefs {
    readonly id: FieldRef<"BookLibrary", 'Int'>
    readonly bookId: FieldRef<"BookLibrary", 'String'>
    readonly libraryId: FieldRef<"BookLibrary", 'Int'>
    readonly createdAt: FieldRef<"BookLibrary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookLibrary findUnique
   */
  export type BookLibraryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookLibrary
     */
    select?: BookLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookLibrary
     */
    omit?: BookLibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookLibraryInclude<ExtArgs> | null
    /**
     * Filter, which BookLibrary to fetch.
     */
    where: BookLibraryWhereUniqueInput
  }

  /**
   * BookLibrary findUniqueOrThrow
   */
  export type BookLibraryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookLibrary
     */
    select?: BookLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookLibrary
     */
    omit?: BookLibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookLibraryInclude<ExtArgs> | null
    /**
     * Filter, which BookLibrary to fetch.
     */
    where: BookLibraryWhereUniqueInput
  }

  /**
   * BookLibrary findFirst
   */
  export type BookLibraryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookLibrary
     */
    select?: BookLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookLibrary
     */
    omit?: BookLibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookLibraryInclude<ExtArgs> | null
    /**
     * Filter, which BookLibrary to fetch.
     */
    where?: BookLibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookLibraries to fetch.
     */
    orderBy?: BookLibraryOrderByWithRelationInput | BookLibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookLibraries.
     */
    cursor?: BookLibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookLibraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookLibraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookLibraries.
     */
    distinct?: BookLibraryScalarFieldEnum | BookLibraryScalarFieldEnum[]
  }

  /**
   * BookLibrary findFirstOrThrow
   */
  export type BookLibraryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookLibrary
     */
    select?: BookLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookLibrary
     */
    omit?: BookLibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookLibraryInclude<ExtArgs> | null
    /**
     * Filter, which BookLibrary to fetch.
     */
    where?: BookLibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookLibraries to fetch.
     */
    orderBy?: BookLibraryOrderByWithRelationInput | BookLibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookLibraries.
     */
    cursor?: BookLibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookLibraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookLibraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookLibraries.
     */
    distinct?: BookLibraryScalarFieldEnum | BookLibraryScalarFieldEnum[]
  }

  /**
   * BookLibrary findMany
   */
  export type BookLibraryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookLibrary
     */
    select?: BookLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookLibrary
     */
    omit?: BookLibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookLibraryInclude<ExtArgs> | null
    /**
     * Filter, which BookLibraries to fetch.
     */
    where?: BookLibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookLibraries to fetch.
     */
    orderBy?: BookLibraryOrderByWithRelationInput | BookLibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookLibraries.
     */
    cursor?: BookLibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookLibraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookLibraries.
     */
    skip?: number
    distinct?: BookLibraryScalarFieldEnum | BookLibraryScalarFieldEnum[]
  }

  /**
   * BookLibrary create
   */
  export type BookLibraryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookLibrary
     */
    select?: BookLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookLibrary
     */
    omit?: BookLibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookLibraryInclude<ExtArgs> | null
    /**
     * The data needed to create a BookLibrary.
     */
    data: XOR<BookLibraryCreateInput, BookLibraryUncheckedCreateInput>
  }

  /**
   * BookLibrary createMany
   */
  export type BookLibraryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookLibraries.
     */
    data: BookLibraryCreateManyInput | BookLibraryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookLibrary createManyAndReturn
   */
  export type BookLibraryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookLibrary
     */
    select?: BookLibrarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookLibrary
     */
    omit?: BookLibraryOmit<ExtArgs> | null
    /**
     * The data used to create many BookLibraries.
     */
    data: BookLibraryCreateManyInput | BookLibraryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookLibraryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookLibrary update
   */
  export type BookLibraryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookLibrary
     */
    select?: BookLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookLibrary
     */
    omit?: BookLibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookLibraryInclude<ExtArgs> | null
    /**
     * The data needed to update a BookLibrary.
     */
    data: XOR<BookLibraryUpdateInput, BookLibraryUncheckedUpdateInput>
    /**
     * Choose, which BookLibrary to update.
     */
    where: BookLibraryWhereUniqueInput
  }

  /**
   * BookLibrary updateMany
   */
  export type BookLibraryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookLibraries.
     */
    data: XOR<BookLibraryUpdateManyMutationInput, BookLibraryUncheckedUpdateManyInput>
    /**
     * Filter which BookLibraries to update
     */
    where?: BookLibraryWhereInput
    /**
     * Limit how many BookLibraries to update.
     */
    limit?: number
  }

  /**
   * BookLibrary updateManyAndReturn
   */
  export type BookLibraryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookLibrary
     */
    select?: BookLibrarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookLibrary
     */
    omit?: BookLibraryOmit<ExtArgs> | null
    /**
     * The data used to update BookLibraries.
     */
    data: XOR<BookLibraryUpdateManyMutationInput, BookLibraryUncheckedUpdateManyInput>
    /**
     * Filter which BookLibraries to update
     */
    where?: BookLibraryWhereInput
    /**
     * Limit how many BookLibraries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookLibraryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookLibrary upsert
   */
  export type BookLibraryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookLibrary
     */
    select?: BookLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookLibrary
     */
    omit?: BookLibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookLibraryInclude<ExtArgs> | null
    /**
     * The filter to search for the BookLibrary to update in case it exists.
     */
    where: BookLibraryWhereUniqueInput
    /**
     * In case the BookLibrary found by the `where` argument doesn't exist, create a new BookLibrary with this data.
     */
    create: XOR<BookLibraryCreateInput, BookLibraryUncheckedCreateInput>
    /**
     * In case the BookLibrary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookLibraryUpdateInput, BookLibraryUncheckedUpdateInput>
  }

  /**
   * BookLibrary delete
   */
  export type BookLibraryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookLibrary
     */
    select?: BookLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookLibrary
     */
    omit?: BookLibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookLibraryInclude<ExtArgs> | null
    /**
     * Filter which BookLibrary to delete.
     */
    where: BookLibraryWhereUniqueInput
  }

  /**
   * BookLibrary deleteMany
   */
  export type BookLibraryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookLibraries to delete
     */
    where?: BookLibraryWhereInput
    /**
     * Limit how many BookLibraries to delete.
     */
    limit?: number
  }

  /**
   * BookLibrary without action
   */
  export type BookLibraryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookLibrary
     */
    select?: BookLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookLibrary
     */
    omit?: BookLibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookLibraryInclude<ExtArgs> | null
  }


  /**
   * Model BookShelf
   */

  export type AggregateBookShelf = {
    _count: BookShelfCountAggregateOutputType | null
    _avg: BookShelfAvgAggregateOutputType | null
    _sum: BookShelfSumAggregateOutputType | null
    _min: BookShelfMinAggregateOutputType | null
    _max: BookShelfMaxAggregateOutputType | null
  }

  export type BookShelfAvgAggregateOutputType = {
    id: number | null
    shelfId: number | null
  }

  export type BookShelfSumAggregateOutputType = {
    id: number | null
    shelfId: number | null
  }

  export type BookShelfMinAggregateOutputType = {
    id: number | null
    bookId: string | null
    shelfId: number | null
    createdAt: Date | null
  }

  export type BookShelfMaxAggregateOutputType = {
    id: number | null
    bookId: string | null
    shelfId: number | null
    createdAt: Date | null
  }

  export type BookShelfCountAggregateOutputType = {
    id: number
    bookId: number
    shelfId: number
    createdAt: number
    _all: number
  }


  export type BookShelfAvgAggregateInputType = {
    id?: true
    shelfId?: true
  }

  export type BookShelfSumAggregateInputType = {
    id?: true
    shelfId?: true
  }

  export type BookShelfMinAggregateInputType = {
    id?: true
    bookId?: true
    shelfId?: true
    createdAt?: true
  }

  export type BookShelfMaxAggregateInputType = {
    id?: true
    bookId?: true
    shelfId?: true
    createdAt?: true
  }

  export type BookShelfCountAggregateInputType = {
    id?: true
    bookId?: true
    shelfId?: true
    createdAt?: true
    _all?: true
  }

  export type BookShelfAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookShelf to aggregate.
     */
    where?: BookShelfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookShelves to fetch.
     */
    orderBy?: BookShelfOrderByWithRelationInput | BookShelfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookShelfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookShelves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookShelves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookShelves
    **/
    _count?: true | BookShelfCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookShelfAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookShelfSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookShelfMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookShelfMaxAggregateInputType
  }

  export type GetBookShelfAggregateType<T extends BookShelfAggregateArgs> = {
        [P in keyof T & keyof AggregateBookShelf]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookShelf[P]>
      : GetScalarType<T[P], AggregateBookShelf[P]>
  }




  export type BookShelfGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookShelfWhereInput
    orderBy?: BookShelfOrderByWithAggregationInput | BookShelfOrderByWithAggregationInput[]
    by: BookShelfScalarFieldEnum[] | BookShelfScalarFieldEnum
    having?: BookShelfScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookShelfCountAggregateInputType | true
    _avg?: BookShelfAvgAggregateInputType
    _sum?: BookShelfSumAggregateInputType
    _min?: BookShelfMinAggregateInputType
    _max?: BookShelfMaxAggregateInputType
  }

  export type BookShelfGroupByOutputType = {
    id: number
    bookId: string
    shelfId: number
    createdAt: Date
    _count: BookShelfCountAggregateOutputType | null
    _avg: BookShelfAvgAggregateOutputType | null
    _sum: BookShelfSumAggregateOutputType | null
    _min: BookShelfMinAggregateOutputType | null
    _max: BookShelfMaxAggregateOutputType | null
  }

  type GetBookShelfGroupByPayload<T extends BookShelfGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookShelfGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookShelfGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookShelfGroupByOutputType[P]>
            : GetScalarType<T[P], BookShelfGroupByOutputType[P]>
        }
      >
    >


  export type BookShelfSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    shelfId?: boolean
    createdAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    shelf?: boolean | ShelfDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookShelf"]>

  export type BookShelfSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    shelfId?: boolean
    createdAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    shelf?: boolean | ShelfDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookShelf"]>

  export type BookShelfSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    shelfId?: boolean
    createdAt?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    shelf?: boolean | ShelfDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookShelf"]>

  export type BookShelfSelectScalar = {
    id?: boolean
    bookId?: boolean
    shelfId?: boolean
    createdAt?: boolean
  }

  export type BookShelfOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookId" | "shelfId" | "createdAt", ExtArgs["result"]["bookShelf"]>
  export type BookShelfInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    shelf?: boolean | ShelfDefaultArgs<ExtArgs>
  }
  export type BookShelfIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    shelf?: boolean | ShelfDefaultArgs<ExtArgs>
  }
  export type BookShelfIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    shelf?: boolean | ShelfDefaultArgs<ExtArgs>
  }

  export type $BookShelfPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookShelf"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      shelf: Prisma.$ShelfPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookId: string
      shelfId: number
      createdAt: Date
    }, ExtArgs["result"]["bookShelf"]>
    composites: {}
  }

  type BookShelfGetPayload<S extends boolean | null | undefined | BookShelfDefaultArgs> = $Result.GetResult<Prisma.$BookShelfPayload, S>

  type BookShelfCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookShelfFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookShelfCountAggregateInputType | true
    }

  export interface BookShelfDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookShelf'], meta: { name: 'BookShelf' } }
    /**
     * Find zero or one BookShelf that matches the filter.
     * @param {BookShelfFindUniqueArgs} args - Arguments to find a BookShelf
     * @example
     * // Get one BookShelf
     * const bookShelf = await prisma.bookShelf.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookShelfFindUniqueArgs>(args: SelectSubset<T, BookShelfFindUniqueArgs<ExtArgs>>): Prisma__BookShelfClient<$Result.GetResult<Prisma.$BookShelfPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookShelf that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookShelfFindUniqueOrThrowArgs} args - Arguments to find a BookShelf
     * @example
     * // Get one BookShelf
     * const bookShelf = await prisma.bookShelf.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookShelfFindUniqueOrThrowArgs>(args: SelectSubset<T, BookShelfFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookShelfClient<$Result.GetResult<Prisma.$BookShelfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookShelf that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookShelfFindFirstArgs} args - Arguments to find a BookShelf
     * @example
     * // Get one BookShelf
     * const bookShelf = await prisma.bookShelf.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookShelfFindFirstArgs>(args?: SelectSubset<T, BookShelfFindFirstArgs<ExtArgs>>): Prisma__BookShelfClient<$Result.GetResult<Prisma.$BookShelfPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookShelf that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookShelfFindFirstOrThrowArgs} args - Arguments to find a BookShelf
     * @example
     * // Get one BookShelf
     * const bookShelf = await prisma.bookShelf.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookShelfFindFirstOrThrowArgs>(args?: SelectSubset<T, BookShelfFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookShelfClient<$Result.GetResult<Prisma.$BookShelfPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookShelves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookShelfFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookShelves
     * const bookShelves = await prisma.bookShelf.findMany()
     * 
     * // Get first 10 BookShelves
     * const bookShelves = await prisma.bookShelf.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookShelfWithIdOnly = await prisma.bookShelf.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookShelfFindManyArgs>(args?: SelectSubset<T, BookShelfFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookShelfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookShelf.
     * @param {BookShelfCreateArgs} args - Arguments to create a BookShelf.
     * @example
     * // Create one BookShelf
     * const BookShelf = await prisma.bookShelf.create({
     *   data: {
     *     // ... data to create a BookShelf
     *   }
     * })
     * 
     */
    create<T extends BookShelfCreateArgs>(args: SelectSubset<T, BookShelfCreateArgs<ExtArgs>>): Prisma__BookShelfClient<$Result.GetResult<Prisma.$BookShelfPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookShelves.
     * @param {BookShelfCreateManyArgs} args - Arguments to create many BookShelves.
     * @example
     * // Create many BookShelves
     * const bookShelf = await prisma.bookShelf.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookShelfCreateManyArgs>(args?: SelectSubset<T, BookShelfCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookShelves and returns the data saved in the database.
     * @param {BookShelfCreateManyAndReturnArgs} args - Arguments to create many BookShelves.
     * @example
     * // Create many BookShelves
     * const bookShelf = await prisma.bookShelf.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookShelves and only return the `id`
     * const bookShelfWithIdOnly = await prisma.bookShelf.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookShelfCreateManyAndReturnArgs>(args?: SelectSubset<T, BookShelfCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookShelfPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookShelf.
     * @param {BookShelfDeleteArgs} args - Arguments to delete one BookShelf.
     * @example
     * // Delete one BookShelf
     * const BookShelf = await prisma.bookShelf.delete({
     *   where: {
     *     // ... filter to delete one BookShelf
     *   }
     * })
     * 
     */
    delete<T extends BookShelfDeleteArgs>(args: SelectSubset<T, BookShelfDeleteArgs<ExtArgs>>): Prisma__BookShelfClient<$Result.GetResult<Prisma.$BookShelfPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookShelf.
     * @param {BookShelfUpdateArgs} args - Arguments to update one BookShelf.
     * @example
     * // Update one BookShelf
     * const bookShelf = await prisma.bookShelf.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookShelfUpdateArgs>(args: SelectSubset<T, BookShelfUpdateArgs<ExtArgs>>): Prisma__BookShelfClient<$Result.GetResult<Prisma.$BookShelfPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookShelves.
     * @param {BookShelfDeleteManyArgs} args - Arguments to filter BookShelves to delete.
     * @example
     * // Delete a few BookShelves
     * const { count } = await prisma.bookShelf.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookShelfDeleteManyArgs>(args?: SelectSubset<T, BookShelfDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookShelves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookShelfUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookShelves
     * const bookShelf = await prisma.bookShelf.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookShelfUpdateManyArgs>(args: SelectSubset<T, BookShelfUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookShelves and returns the data updated in the database.
     * @param {BookShelfUpdateManyAndReturnArgs} args - Arguments to update many BookShelves.
     * @example
     * // Update many BookShelves
     * const bookShelf = await prisma.bookShelf.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookShelves and only return the `id`
     * const bookShelfWithIdOnly = await prisma.bookShelf.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookShelfUpdateManyAndReturnArgs>(args: SelectSubset<T, BookShelfUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookShelfPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookShelf.
     * @param {BookShelfUpsertArgs} args - Arguments to update or create a BookShelf.
     * @example
     * // Update or create a BookShelf
     * const bookShelf = await prisma.bookShelf.upsert({
     *   create: {
     *     // ... data to create a BookShelf
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookShelf we want to update
     *   }
     * })
     */
    upsert<T extends BookShelfUpsertArgs>(args: SelectSubset<T, BookShelfUpsertArgs<ExtArgs>>): Prisma__BookShelfClient<$Result.GetResult<Prisma.$BookShelfPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookShelves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookShelfCountArgs} args - Arguments to filter BookShelves to count.
     * @example
     * // Count the number of BookShelves
     * const count = await prisma.bookShelf.count({
     *   where: {
     *     // ... the filter for the BookShelves we want to count
     *   }
     * })
    **/
    count<T extends BookShelfCountArgs>(
      args?: Subset<T, BookShelfCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookShelfCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookShelf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookShelfAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookShelfAggregateArgs>(args: Subset<T, BookShelfAggregateArgs>): Prisma.PrismaPromise<GetBookShelfAggregateType<T>>

    /**
     * Group by BookShelf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookShelfGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookShelfGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookShelfGroupByArgs['orderBy'] }
        : { orderBy?: BookShelfGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookShelfGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookShelfGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookShelf model
   */
  readonly fields: BookShelfFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookShelf.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookShelfClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shelf<T extends ShelfDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShelfDefaultArgs<ExtArgs>>): Prisma__ShelfClient<$Result.GetResult<Prisma.$ShelfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookShelf model
   */
  interface BookShelfFieldRefs {
    readonly id: FieldRef<"BookShelf", 'Int'>
    readonly bookId: FieldRef<"BookShelf", 'String'>
    readonly shelfId: FieldRef<"BookShelf", 'Int'>
    readonly createdAt: FieldRef<"BookShelf", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookShelf findUnique
   */
  export type BookShelfFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookShelf
     */
    select?: BookShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookShelf
     */
    omit?: BookShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookShelfInclude<ExtArgs> | null
    /**
     * Filter, which BookShelf to fetch.
     */
    where: BookShelfWhereUniqueInput
  }

  /**
   * BookShelf findUniqueOrThrow
   */
  export type BookShelfFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookShelf
     */
    select?: BookShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookShelf
     */
    omit?: BookShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookShelfInclude<ExtArgs> | null
    /**
     * Filter, which BookShelf to fetch.
     */
    where: BookShelfWhereUniqueInput
  }

  /**
   * BookShelf findFirst
   */
  export type BookShelfFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookShelf
     */
    select?: BookShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookShelf
     */
    omit?: BookShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookShelfInclude<ExtArgs> | null
    /**
     * Filter, which BookShelf to fetch.
     */
    where?: BookShelfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookShelves to fetch.
     */
    orderBy?: BookShelfOrderByWithRelationInput | BookShelfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookShelves.
     */
    cursor?: BookShelfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookShelves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookShelves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookShelves.
     */
    distinct?: BookShelfScalarFieldEnum | BookShelfScalarFieldEnum[]
  }

  /**
   * BookShelf findFirstOrThrow
   */
  export type BookShelfFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookShelf
     */
    select?: BookShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookShelf
     */
    omit?: BookShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookShelfInclude<ExtArgs> | null
    /**
     * Filter, which BookShelf to fetch.
     */
    where?: BookShelfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookShelves to fetch.
     */
    orderBy?: BookShelfOrderByWithRelationInput | BookShelfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookShelves.
     */
    cursor?: BookShelfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookShelves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookShelves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookShelves.
     */
    distinct?: BookShelfScalarFieldEnum | BookShelfScalarFieldEnum[]
  }

  /**
   * BookShelf findMany
   */
  export type BookShelfFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookShelf
     */
    select?: BookShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookShelf
     */
    omit?: BookShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookShelfInclude<ExtArgs> | null
    /**
     * Filter, which BookShelves to fetch.
     */
    where?: BookShelfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookShelves to fetch.
     */
    orderBy?: BookShelfOrderByWithRelationInput | BookShelfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookShelves.
     */
    cursor?: BookShelfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookShelves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookShelves.
     */
    skip?: number
    distinct?: BookShelfScalarFieldEnum | BookShelfScalarFieldEnum[]
  }

  /**
   * BookShelf create
   */
  export type BookShelfCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookShelf
     */
    select?: BookShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookShelf
     */
    omit?: BookShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookShelfInclude<ExtArgs> | null
    /**
     * The data needed to create a BookShelf.
     */
    data: XOR<BookShelfCreateInput, BookShelfUncheckedCreateInput>
  }

  /**
   * BookShelf createMany
   */
  export type BookShelfCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookShelves.
     */
    data: BookShelfCreateManyInput | BookShelfCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookShelf createManyAndReturn
   */
  export type BookShelfCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookShelf
     */
    select?: BookShelfSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookShelf
     */
    omit?: BookShelfOmit<ExtArgs> | null
    /**
     * The data used to create many BookShelves.
     */
    data: BookShelfCreateManyInput | BookShelfCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookShelfIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookShelf update
   */
  export type BookShelfUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookShelf
     */
    select?: BookShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookShelf
     */
    omit?: BookShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookShelfInclude<ExtArgs> | null
    /**
     * The data needed to update a BookShelf.
     */
    data: XOR<BookShelfUpdateInput, BookShelfUncheckedUpdateInput>
    /**
     * Choose, which BookShelf to update.
     */
    where: BookShelfWhereUniqueInput
  }

  /**
   * BookShelf updateMany
   */
  export type BookShelfUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookShelves.
     */
    data: XOR<BookShelfUpdateManyMutationInput, BookShelfUncheckedUpdateManyInput>
    /**
     * Filter which BookShelves to update
     */
    where?: BookShelfWhereInput
    /**
     * Limit how many BookShelves to update.
     */
    limit?: number
  }

  /**
   * BookShelf updateManyAndReturn
   */
  export type BookShelfUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookShelf
     */
    select?: BookShelfSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookShelf
     */
    omit?: BookShelfOmit<ExtArgs> | null
    /**
     * The data used to update BookShelves.
     */
    data: XOR<BookShelfUpdateManyMutationInput, BookShelfUncheckedUpdateManyInput>
    /**
     * Filter which BookShelves to update
     */
    where?: BookShelfWhereInput
    /**
     * Limit how many BookShelves to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookShelfIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookShelf upsert
   */
  export type BookShelfUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookShelf
     */
    select?: BookShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookShelf
     */
    omit?: BookShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookShelfInclude<ExtArgs> | null
    /**
     * The filter to search for the BookShelf to update in case it exists.
     */
    where: BookShelfWhereUniqueInput
    /**
     * In case the BookShelf found by the `where` argument doesn't exist, create a new BookShelf with this data.
     */
    create: XOR<BookShelfCreateInput, BookShelfUncheckedCreateInput>
    /**
     * In case the BookShelf was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookShelfUpdateInput, BookShelfUncheckedUpdateInput>
  }

  /**
   * BookShelf delete
   */
  export type BookShelfDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookShelf
     */
    select?: BookShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookShelf
     */
    omit?: BookShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookShelfInclude<ExtArgs> | null
    /**
     * Filter which BookShelf to delete.
     */
    where: BookShelfWhereUniqueInput
  }

  /**
   * BookShelf deleteMany
   */
  export type BookShelfDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookShelves to delete
     */
    where?: BookShelfWhereInput
    /**
     * Limit how many BookShelves to delete.
     */
    limit?: number
  }

  /**
   * BookShelf without action
   */
  export type BookShelfDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookShelf
     */
    select?: BookShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookShelf
     */
    omit?: BookShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookShelfInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    content: string | null
    userId: number | null
    bookId: string | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    content: string | null
    userId: number | null
    bookId: string | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    userId: number
    bookId: number
    createdAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    bookId?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    bookId?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    bookId?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    content: string
    userId: number
    bookId: string
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    userId?: boolean
    bookId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    userId?: boolean
    bookId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    userId?: boolean
    bookId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    userId?: boolean
    bookId?: boolean
    createdAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "userId" | "bookId" | "createdAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      userId: number
      bookId: string
      createdAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'Int'>
    readonly bookId: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Love
   */

  export type AggregateLove = {
    _count: LoveCountAggregateOutputType | null
    _avg: LoveAvgAggregateOutputType | null
    _sum: LoveSumAggregateOutputType | null
    _min: LoveMinAggregateOutputType | null
    _max: LoveMaxAggregateOutputType | null
  }

  export type LoveAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LoveSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LoveMinAggregateOutputType = {
    id: number | null
    userId: number | null
    bookId: string | null
    createdAt: Date | null
  }

  export type LoveMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    bookId: string | null
    createdAt: Date | null
  }

  export type LoveCountAggregateOutputType = {
    id: number
    userId: number
    bookId: number
    createdAt: number
    _all: number
  }


  export type LoveAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LoveSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LoveMinAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    createdAt?: true
  }

  export type LoveMaxAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    createdAt?: true
  }

  export type LoveCountAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    createdAt?: true
    _all?: true
  }

  export type LoveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Love to aggregate.
     */
    where?: LoveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loves to fetch.
     */
    orderBy?: LoveOrderByWithRelationInput | LoveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Loves
    **/
    _count?: true | LoveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoveMaxAggregateInputType
  }

  export type GetLoveAggregateType<T extends LoveAggregateArgs> = {
        [P in keyof T & keyof AggregateLove]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLove[P]>
      : GetScalarType<T[P], AggregateLove[P]>
  }




  export type LoveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoveWhereInput
    orderBy?: LoveOrderByWithAggregationInput | LoveOrderByWithAggregationInput[]
    by: LoveScalarFieldEnum[] | LoveScalarFieldEnum
    having?: LoveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoveCountAggregateInputType | true
    _avg?: LoveAvgAggregateInputType
    _sum?: LoveSumAggregateInputType
    _min?: LoveMinAggregateInputType
    _max?: LoveMaxAggregateInputType
  }

  export type LoveGroupByOutputType = {
    id: number
    userId: number
    bookId: string
    createdAt: Date
    _count: LoveCountAggregateOutputType | null
    _avg: LoveAvgAggregateOutputType | null
    _sum: LoveSumAggregateOutputType | null
    _min: LoveMinAggregateOutputType | null
    _max: LoveMaxAggregateOutputType | null
  }

  type GetLoveGroupByPayload<T extends LoveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoveGroupByOutputType[P]>
            : GetScalarType<T[P], LoveGroupByOutputType[P]>
        }
      >
    >


  export type LoveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["love"]>

  export type LoveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["love"]>

  export type LoveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["love"]>

  export type LoveSelectScalar = {
    id?: boolean
    userId?: boolean
    bookId?: boolean
    createdAt?: boolean
  }

  export type LoveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bookId" | "createdAt", ExtArgs["result"]["love"]>
  export type LoveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type LoveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type LoveIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $LovePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Love"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      bookId: string
      createdAt: Date
    }, ExtArgs["result"]["love"]>
    composites: {}
  }

  type LoveGetPayload<S extends boolean | null | undefined | LoveDefaultArgs> = $Result.GetResult<Prisma.$LovePayload, S>

  type LoveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoveCountAggregateInputType | true
    }

  export interface LoveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Love'], meta: { name: 'Love' } }
    /**
     * Find zero or one Love that matches the filter.
     * @param {LoveFindUniqueArgs} args - Arguments to find a Love
     * @example
     * // Get one Love
     * const love = await prisma.love.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoveFindUniqueArgs>(args: SelectSubset<T, LoveFindUniqueArgs<ExtArgs>>): Prisma__LoveClient<$Result.GetResult<Prisma.$LovePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Love that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoveFindUniqueOrThrowArgs} args - Arguments to find a Love
     * @example
     * // Get one Love
     * const love = await prisma.love.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoveFindUniqueOrThrowArgs>(args: SelectSubset<T, LoveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoveClient<$Result.GetResult<Prisma.$LovePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Love that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoveFindFirstArgs} args - Arguments to find a Love
     * @example
     * // Get one Love
     * const love = await prisma.love.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoveFindFirstArgs>(args?: SelectSubset<T, LoveFindFirstArgs<ExtArgs>>): Prisma__LoveClient<$Result.GetResult<Prisma.$LovePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Love that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoveFindFirstOrThrowArgs} args - Arguments to find a Love
     * @example
     * // Get one Love
     * const love = await prisma.love.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoveFindFirstOrThrowArgs>(args?: SelectSubset<T, LoveFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoveClient<$Result.GetResult<Prisma.$LovePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Loves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Loves
     * const loves = await prisma.love.findMany()
     * 
     * // Get first 10 Loves
     * const loves = await prisma.love.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loveWithIdOnly = await prisma.love.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoveFindManyArgs>(args?: SelectSubset<T, LoveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LovePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Love.
     * @param {LoveCreateArgs} args - Arguments to create a Love.
     * @example
     * // Create one Love
     * const Love = await prisma.love.create({
     *   data: {
     *     // ... data to create a Love
     *   }
     * })
     * 
     */
    create<T extends LoveCreateArgs>(args: SelectSubset<T, LoveCreateArgs<ExtArgs>>): Prisma__LoveClient<$Result.GetResult<Prisma.$LovePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Loves.
     * @param {LoveCreateManyArgs} args - Arguments to create many Loves.
     * @example
     * // Create many Loves
     * const love = await prisma.love.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoveCreateManyArgs>(args?: SelectSubset<T, LoveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Loves and returns the data saved in the database.
     * @param {LoveCreateManyAndReturnArgs} args - Arguments to create many Loves.
     * @example
     * // Create many Loves
     * const love = await prisma.love.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Loves and only return the `id`
     * const loveWithIdOnly = await prisma.love.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoveCreateManyAndReturnArgs>(args?: SelectSubset<T, LoveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LovePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Love.
     * @param {LoveDeleteArgs} args - Arguments to delete one Love.
     * @example
     * // Delete one Love
     * const Love = await prisma.love.delete({
     *   where: {
     *     // ... filter to delete one Love
     *   }
     * })
     * 
     */
    delete<T extends LoveDeleteArgs>(args: SelectSubset<T, LoveDeleteArgs<ExtArgs>>): Prisma__LoveClient<$Result.GetResult<Prisma.$LovePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Love.
     * @param {LoveUpdateArgs} args - Arguments to update one Love.
     * @example
     * // Update one Love
     * const love = await prisma.love.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoveUpdateArgs>(args: SelectSubset<T, LoveUpdateArgs<ExtArgs>>): Prisma__LoveClient<$Result.GetResult<Prisma.$LovePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Loves.
     * @param {LoveDeleteManyArgs} args - Arguments to filter Loves to delete.
     * @example
     * // Delete a few Loves
     * const { count } = await prisma.love.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoveDeleteManyArgs>(args?: SelectSubset<T, LoveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Loves
     * const love = await prisma.love.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoveUpdateManyArgs>(args: SelectSubset<T, LoveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Loves and returns the data updated in the database.
     * @param {LoveUpdateManyAndReturnArgs} args - Arguments to update many Loves.
     * @example
     * // Update many Loves
     * const love = await prisma.love.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Loves and only return the `id`
     * const loveWithIdOnly = await prisma.love.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LoveUpdateManyAndReturnArgs>(args: SelectSubset<T, LoveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LovePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Love.
     * @param {LoveUpsertArgs} args - Arguments to update or create a Love.
     * @example
     * // Update or create a Love
     * const love = await prisma.love.upsert({
     *   create: {
     *     // ... data to create a Love
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Love we want to update
     *   }
     * })
     */
    upsert<T extends LoveUpsertArgs>(args: SelectSubset<T, LoveUpsertArgs<ExtArgs>>): Prisma__LoveClient<$Result.GetResult<Prisma.$LovePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Loves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoveCountArgs} args - Arguments to filter Loves to count.
     * @example
     * // Count the number of Loves
     * const count = await prisma.love.count({
     *   where: {
     *     // ... the filter for the Loves we want to count
     *   }
     * })
    **/
    count<T extends LoveCountArgs>(
      args?: Subset<T, LoveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Love.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoveAggregateArgs>(args: Subset<T, LoveAggregateArgs>): Prisma.PrismaPromise<GetLoveAggregateType<T>>

    /**
     * Group by Love.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoveGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoveGroupByArgs['orderBy'] }
        : { orderBy?: LoveGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Love model
   */
  readonly fields: LoveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Love.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Love model
   */
  interface LoveFieldRefs {
    readonly id: FieldRef<"Love", 'Int'>
    readonly userId: FieldRef<"Love", 'Int'>
    readonly bookId: FieldRef<"Love", 'String'>
    readonly createdAt: FieldRef<"Love", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Love findUnique
   */
  export type LoveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Love
     */
    select?: LoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Love
     */
    omit?: LoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveInclude<ExtArgs> | null
    /**
     * Filter, which Love to fetch.
     */
    where: LoveWhereUniqueInput
  }

  /**
   * Love findUniqueOrThrow
   */
  export type LoveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Love
     */
    select?: LoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Love
     */
    omit?: LoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveInclude<ExtArgs> | null
    /**
     * Filter, which Love to fetch.
     */
    where: LoveWhereUniqueInput
  }

  /**
   * Love findFirst
   */
  export type LoveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Love
     */
    select?: LoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Love
     */
    omit?: LoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveInclude<ExtArgs> | null
    /**
     * Filter, which Love to fetch.
     */
    where?: LoveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loves to fetch.
     */
    orderBy?: LoveOrderByWithRelationInput | LoveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Loves.
     */
    cursor?: LoveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Loves.
     */
    distinct?: LoveScalarFieldEnum | LoveScalarFieldEnum[]
  }

  /**
   * Love findFirstOrThrow
   */
  export type LoveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Love
     */
    select?: LoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Love
     */
    omit?: LoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveInclude<ExtArgs> | null
    /**
     * Filter, which Love to fetch.
     */
    where?: LoveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loves to fetch.
     */
    orderBy?: LoveOrderByWithRelationInput | LoveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Loves.
     */
    cursor?: LoveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Loves.
     */
    distinct?: LoveScalarFieldEnum | LoveScalarFieldEnum[]
  }

  /**
   * Love findMany
   */
  export type LoveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Love
     */
    select?: LoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Love
     */
    omit?: LoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveInclude<ExtArgs> | null
    /**
     * Filter, which Loves to fetch.
     */
    where?: LoveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Loves to fetch.
     */
    orderBy?: LoveOrderByWithRelationInput | LoveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Loves.
     */
    cursor?: LoveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Loves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Loves.
     */
    skip?: number
    distinct?: LoveScalarFieldEnum | LoveScalarFieldEnum[]
  }

  /**
   * Love create
   */
  export type LoveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Love
     */
    select?: LoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Love
     */
    omit?: LoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveInclude<ExtArgs> | null
    /**
     * The data needed to create a Love.
     */
    data: XOR<LoveCreateInput, LoveUncheckedCreateInput>
  }

  /**
   * Love createMany
   */
  export type LoveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Loves.
     */
    data: LoveCreateManyInput | LoveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Love createManyAndReturn
   */
  export type LoveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Love
     */
    select?: LoveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Love
     */
    omit?: LoveOmit<ExtArgs> | null
    /**
     * The data used to create many Loves.
     */
    data: LoveCreateManyInput | LoveCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Love update
   */
  export type LoveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Love
     */
    select?: LoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Love
     */
    omit?: LoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveInclude<ExtArgs> | null
    /**
     * The data needed to update a Love.
     */
    data: XOR<LoveUpdateInput, LoveUncheckedUpdateInput>
    /**
     * Choose, which Love to update.
     */
    where: LoveWhereUniqueInput
  }

  /**
   * Love updateMany
   */
  export type LoveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Loves.
     */
    data: XOR<LoveUpdateManyMutationInput, LoveUncheckedUpdateManyInput>
    /**
     * Filter which Loves to update
     */
    where?: LoveWhereInput
    /**
     * Limit how many Loves to update.
     */
    limit?: number
  }

  /**
   * Love updateManyAndReturn
   */
  export type LoveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Love
     */
    select?: LoveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Love
     */
    omit?: LoveOmit<ExtArgs> | null
    /**
     * The data used to update Loves.
     */
    data: XOR<LoveUpdateManyMutationInput, LoveUncheckedUpdateManyInput>
    /**
     * Filter which Loves to update
     */
    where?: LoveWhereInput
    /**
     * Limit how many Loves to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Love upsert
   */
  export type LoveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Love
     */
    select?: LoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Love
     */
    omit?: LoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveInclude<ExtArgs> | null
    /**
     * The filter to search for the Love to update in case it exists.
     */
    where: LoveWhereUniqueInput
    /**
     * In case the Love found by the `where` argument doesn't exist, create a new Love with this data.
     */
    create: XOR<LoveCreateInput, LoveUncheckedCreateInput>
    /**
     * In case the Love was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoveUpdateInput, LoveUncheckedUpdateInput>
  }

  /**
   * Love delete
   */
  export type LoveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Love
     */
    select?: LoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Love
     */
    omit?: LoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveInclude<ExtArgs> | null
    /**
     * Filter which Love to delete.
     */
    where: LoveWhereUniqueInput
  }

  /**
   * Love deleteMany
   */
  export type LoveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Loves to delete
     */
    where?: LoveWhereInput
    /**
     * Limit how many Loves to delete.
     */
    limit?: number
  }

  /**
   * Love without action
   */
  export type LoveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Love
     */
    select?: LoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Love
     */
    omit?: LoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoveInclude<ExtArgs> | null
  }


  /**
   * Model BookPage
   */

  export type AggregateBookPage = {
    _count: BookPageCountAggregateOutputType | null
    _avg: BookPageAvgAggregateOutputType | null
    _sum: BookPageSumAggregateOutputType | null
    _min: BookPageMinAggregateOutputType | null
    _max: BookPageMaxAggregateOutputType | null
  }

  export type BookPageAvgAggregateOutputType = {
    page: number | null
  }

  export type BookPageSumAggregateOutputType = {
    page: number | null
  }

  export type BookPageMinAggregateOutputType = {
    id: string | null
    content: string | null
    page: number | null
    bookId: string | null
  }

  export type BookPageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    page: number | null
    bookId: string | null
  }

  export type BookPageCountAggregateOutputType = {
    id: number
    content: number
    page: number
    bookId: number
    _all: number
  }


  export type BookPageAvgAggregateInputType = {
    page?: true
  }

  export type BookPageSumAggregateInputType = {
    page?: true
  }

  export type BookPageMinAggregateInputType = {
    id?: true
    content?: true
    page?: true
    bookId?: true
  }

  export type BookPageMaxAggregateInputType = {
    id?: true
    content?: true
    page?: true
    bookId?: true
  }

  export type BookPageCountAggregateInputType = {
    id?: true
    content?: true
    page?: true
    bookId?: true
    _all?: true
  }

  export type BookPageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookPage to aggregate.
     */
    where?: BookPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookPages to fetch.
     */
    orderBy?: BookPageOrderByWithRelationInput | BookPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookPages
    **/
    _count?: true | BookPageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookPageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookPageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookPageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookPageMaxAggregateInputType
  }

  export type GetBookPageAggregateType<T extends BookPageAggregateArgs> = {
        [P in keyof T & keyof AggregateBookPage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookPage[P]>
      : GetScalarType<T[P], AggregateBookPage[P]>
  }




  export type BookPageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookPageWhereInput
    orderBy?: BookPageOrderByWithAggregationInput | BookPageOrderByWithAggregationInput[]
    by: BookPageScalarFieldEnum[] | BookPageScalarFieldEnum
    having?: BookPageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookPageCountAggregateInputType | true
    _avg?: BookPageAvgAggregateInputType
    _sum?: BookPageSumAggregateInputType
    _min?: BookPageMinAggregateInputType
    _max?: BookPageMaxAggregateInputType
  }

  export type BookPageGroupByOutputType = {
    id: string
    content: string | null
    page: number
    bookId: string
    _count: BookPageCountAggregateOutputType | null
    _avg: BookPageAvgAggregateOutputType | null
    _sum: BookPageSumAggregateOutputType | null
    _min: BookPageMinAggregateOutputType | null
    _max: BookPageMaxAggregateOutputType | null
  }

  type GetBookPageGroupByPayload<T extends BookPageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookPageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookPageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookPageGroupByOutputType[P]>
            : GetScalarType<T[P], BookPageGroupByOutputType[P]>
        }
      >
    >


  export type BookPageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    page?: boolean
    bookId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookPage"]>

  export type BookPageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    page?: boolean
    bookId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookPage"]>

  export type BookPageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    page?: boolean
    bookId?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookPage"]>

  export type BookPageSelectScalar = {
    id?: boolean
    content?: boolean
    page?: boolean
    bookId?: boolean
  }

  export type BookPageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "page" | "bookId", ExtArgs["result"]["bookPage"]>
  export type BookPageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type BookPageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type BookPageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $BookPagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookPage"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string | null
      page: number
      bookId: string
    }, ExtArgs["result"]["bookPage"]>
    composites: {}
  }

  type BookPageGetPayload<S extends boolean | null | undefined | BookPageDefaultArgs> = $Result.GetResult<Prisma.$BookPagePayload, S>

  type BookPageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookPageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookPageCountAggregateInputType | true
    }

  export interface BookPageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookPage'], meta: { name: 'BookPage' } }
    /**
     * Find zero or one BookPage that matches the filter.
     * @param {BookPageFindUniqueArgs} args - Arguments to find a BookPage
     * @example
     * // Get one BookPage
     * const bookPage = await prisma.bookPage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookPageFindUniqueArgs>(args: SelectSubset<T, BookPageFindUniqueArgs<ExtArgs>>): Prisma__BookPageClient<$Result.GetResult<Prisma.$BookPagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookPage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookPageFindUniqueOrThrowArgs} args - Arguments to find a BookPage
     * @example
     * // Get one BookPage
     * const bookPage = await prisma.bookPage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookPageFindUniqueOrThrowArgs>(args: SelectSubset<T, BookPageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookPageClient<$Result.GetResult<Prisma.$BookPagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookPage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookPageFindFirstArgs} args - Arguments to find a BookPage
     * @example
     * // Get one BookPage
     * const bookPage = await prisma.bookPage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookPageFindFirstArgs>(args?: SelectSubset<T, BookPageFindFirstArgs<ExtArgs>>): Prisma__BookPageClient<$Result.GetResult<Prisma.$BookPagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookPage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookPageFindFirstOrThrowArgs} args - Arguments to find a BookPage
     * @example
     * // Get one BookPage
     * const bookPage = await prisma.bookPage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookPageFindFirstOrThrowArgs>(args?: SelectSubset<T, BookPageFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookPageClient<$Result.GetResult<Prisma.$BookPagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookPages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookPageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookPages
     * const bookPages = await prisma.bookPage.findMany()
     * 
     * // Get first 10 BookPages
     * const bookPages = await prisma.bookPage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookPageWithIdOnly = await prisma.bookPage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookPageFindManyArgs>(args?: SelectSubset<T, BookPageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookPage.
     * @param {BookPageCreateArgs} args - Arguments to create a BookPage.
     * @example
     * // Create one BookPage
     * const BookPage = await prisma.bookPage.create({
     *   data: {
     *     // ... data to create a BookPage
     *   }
     * })
     * 
     */
    create<T extends BookPageCreateArgs>(args: SelectSubset<T, BookPageCreateArgs<ExtArgs>>): Prisma__BookPageClient<$Result.GetResult<Prisma.$BookPagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookPages.
     * @param {BookPageCreateManyArgs} args - Arguments to create many BookPages.
     * @example
     * // Create many BookPages
     * const bookPage = await prisma.bookPage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookPageCreateManyArgs>(args?: SelectSubset<T, BookPageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookPages and returns the data saved in the database.
     * @param {BookPageCreateManyAndReturnArgs} args - Arguments to create many BookPages.
     * @example
     * // Create many BookPages
     * const bookPage = await prisma.bookPage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookPages and only return the `id`
     * const bookPageWithIdOnly = await prisma.bookPage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookPageCreateManyAndReturnArgs>(args?: SelectSubset<T, BookPageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookPage.
     * @param {BookPageDeleteArgs} args - Arguments to delete one BookPage.
     * @example
     * // Delete one BookPage
     * const BookPage = await prisma.bookPage.delete({
     *   where: {
     *     // ... filter to delete one BookPage
     *   }
     * })
     * 
     */
    delete<T extends BookPageDeleteArgs>(args: SelectSubset<T, BookPageDeleteArgs<ExtArgs>>): Prisma__BookPageClient<$Result.GetResult<Prisma.$BookPagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookPage.
     * @param {BookPageUpdateArgs} args - Arguments to update one BookPage.
     * @example
     * // Update one BookPage
     * const bookPage = await prisma.bookPage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookPageUpdateArgs>(args: SelectSubset<T, BookPageUpdateArgs<ExtArgs>>): Prisma__BookPageClient<$Result.GetResult<Prisma.$BookPagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookPages.
     * @param {BookPageDeleteManyArgs} args - Arguments to filter BookPages to delete.
     * @example
     * // Delete a few BookPages
     * const { count } = await prisma.bookPage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookPageDeleteManyArgs>(args?: SelectSubset<T, BookPageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookPageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookPages
     * const bookPage = await prisma.bookPage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookPageUpdateManyArgs>(args: SelectSubset<T, BookPageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookPages and returns the data updated in the database.
     * @param {BookPageUpdateManyAndReturnArgs} args - Arguments to update many BookPages.
     * @example
     * // Update many BookPages
     * const bookPage = await prisma.bookPage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookPages and only return the `id`
     * const bookPageWithIdOnly = await prisma.bookPage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookPageUpdateManyAndReturnArgs>(args: SelectSubset<T, BookPageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookPage.
     * @param {BookPageUpsertArgs} args - Arguments to update or create a BookPage.
     * @example
     * // Update or create a BookPage
     * const bookPage = await prisma.bookPage.upsert({
     *   create: {
     *     // ... data to create a BookPage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookPage we want to update
     *   }
     * })
     */
    upsert<T extends BookPageUpsertArgs>(args: SelectSubset<T, BookPageUpsertArgs<ExtArgs>>): Prisma__BookPageClient<$Result.GetResult<Prisma.$BookPagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookPages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookPageCountArgs} args - Arguments to filter BookPages to count.
     * @example
     * // Count the number of BookPages
     * const count = await prisma.bookPage.count({
     *   where: {
     *     // ... the filter for the BookPages we want to count
     *   }
     * })
    **/
    count<T extends BookPageCountArgs>(
      args?: Subset<T, BookPageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookPageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookPageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookPageAggregateArgs>(args: Subset<T, BookPageAggregateArgs>): Prisma.PrismaPromise<GetBookPageAggregateType<T>>

    /**
     * Group by BookPage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookPageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookPageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookPageGroupByArgs['orderBy'] }
        : { orderBy?: BookPageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookPageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookPage model
   */
  readonly fields: BookPageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookPage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookPageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookPage model
   */
  interface BookPageFieldRefs {
    readonly id: FieldRef<"BookPage", 'String'>
    readonly content: FieldRef<"BookPage", 'String'>
    readonly page: FieldRef<"BookPage", 'Int'>
    readonly bookId: FieldRef<"BookPage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BookPage findUnique
   */
  export type BookPageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPage
     */
    select?: BookPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookPage
     */
    omit?: BookPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookPageInclude<ExtArgs> | null
    /**
     * Filter, which BookPage to fetch.
     */
    where: BookPageWhereUniqueInput
  }

  /**
   * BookPage findUniqueOrThrow
   */
  export type BookPageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPage
     */
    select?: BookPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookPage
     */
    omit?: BookPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookPageInclude<ExtArgs> | null
    /**
     * Filter, which BookPage to fetch.
     */
    where: BookPageWhereUniqueInput
  }

  /**
   * BookPage findFirst
   */
  export type BookPageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPage
     */
    select?: BookPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookPage
     */
    omit?: BookPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookPageInclude<ExtArgs> | null
    /**
     * Filter, which BookPage to fetch.
     */
    where?: BookPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookPages to fetch.
     */
    orderBy?: BookPageOrderByWithRelationInput | BookPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookPages.
     */
    cursor?: BookPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookPages.
     */
    distinct?: BookPageScalarFieldEnum | BookPageScalarFieldEnum[]
  }

  /**
   * BookPage findFirstOrThrow
   */
  export type BookPageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPage
     */
    select?: BookPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookPage
     */
    omit?: BookPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookPageInclude<ExtArgs> | null
    /**
     * Filter, which BookPage to fetch.
     */
    where?: BookPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookPages to fetch.
     */
    orderBy?: BookPageOrderByWithRelationInput | BookPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookPages.
     */
    cursor?: BookPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookPages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookPages.
     */
    distinct?: BookPageScalarFieldEnum | BookPageScalarFieldEnum[]
  }

  /**
   * BookPage findMany
   */
  export type BookPageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPage
     */
    select?: BookPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookPage
     */
    omit?: BookPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookPageInclude<ExtArgs> | null
    /**
     * Filter, which BookPages to fetch.
     */
    where?: BookPageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookPages to fetch.
     */
    orderBy?: BookPageOrderByWithRelationInput | BookPageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookPages.
     */
    cursor?: BookPageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookPages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookPages.
     */
    skip?: number
    distinct?: BookPageScalarFieldEnum | BookPageScalarFieldEnum[]
  }

  /**
   * BookPage create
   */
  export type BookPageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPage
     */
    select?: BookPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookPage
     */
    omit?: BookPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookPageInclude<ExtArgs> | null
    /**
     * The data needed to create a BookPage.
     */
    data: XOR<BookPageCreateInput, BookPageUncheckedCreateInput>
  }

  /**
   * BookPage createMany
   */
  export type BookPageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookPages.
     */
    data: BookPageCreateManyInput | BookPageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookPage createManyAndReturn
   */
  export type BookPageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPage
     */
    select?: BookPageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookPage
     */
    omit?: BookPageOmit<ExtArgs> | null
    /**
     * The data used to create many BookPages.
     */
    data: BookPageCreateManyInput | BookPageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookPageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookPage update
   */
  export type BookPageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPage
     */
    select?: BookPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookPage
     */
    omit?: BookPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookPageInclude<ExtArgs> | null
    /**
     * The data needed to update a BookPage.
     */
    data: XOR<BookPageUpdateInput, BookPageUncheckedUpdateInput>
    /**
     * Choose, which BookPage to update.
     */
    where: BookPageWhereUniqueInput
  }

  /**
   * BookPage updateMany
   */
  export type BookPageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookPages.
     */
    data: XOR<BookPageUpdateManyMutationInput, BookPageUncheckedUpdateManyInput>
    /**
     * Filter which BookPages to update
     */
    where?: BookPageWhereInput
    /**
     * Limit how many BookPages to update.
     */
    limit?: number
  }

  /**
   * BookPage updateManyAndReturn
   */
  export type BookPageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPage
     */
    select?: BookPageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookPage
     */
    omit?: BookPageOmit<ExtArgs> | null
    /**
     * The data used to update BookPages.
     */
    data: XOR<BookPageUpdateManyMutationInput, BookPageUncheckedUpdateManyInput>
    /**
     * Filter which BookPages to update
     */
    where?: BookPageWhereInput
    /**
     * Limit how many BookPages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookPageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookPage upsert
   */
  export type BookPageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPage
     */
    select?: BookPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookPage
     */
    omit?: BookPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookPageInclude<ExtArgs> | null
    /**
     * The filter to search for the BookPage to update in case it exists.
     */
    where: BookPageWhereUniqueInput
    /**
     * In case the BookPage found by the `where` argument doesn't exist, create a new BookPage with this data.
     */
    create: XOR<BookPageCreateInput, BookPageUncheckedCreateInput>
    /**
     * In case the BookPage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookPageUpdateInput, BookPageUncheckedUpdateInput>
  }

  /**
   * BookPage delete
   */
  export type BookPageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPage
     */
    select?: BookPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookPage
     */
    omit?: BookPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookPageInclude<ExtArgs> | null
    /**
     * Filter which BookPage to delete.
     */
    where: BookPageWhereUniqueInput
  }

  /**
   * BookPage deleteMany
   */
  export type BookPageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookPages to delete
     */
    where?: BookPageWhereInput
    /**
     * Limit how many BookPages to delete.
     */
    limit?: number
  }

  /**
   * BookPage without action
   */
  export type BookPageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookPage
     */
    select?: BookPageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookPage
     */
    omit?: BookPageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookPageInclude<ExtArgs> | null
  }


  /**
   * Model Library
   */

  export type AggregateLibrary = {
    _count: LibraryCountAggregateOutputType | null
    _avg: LibraryAvgAggregateOutputType | null
    _sum: LibrarySumAggregateOutputType | null
    _min: LibraryMinAggregateOutputType | null
    _max: LibraryMaxAggregateOutputType | null
  }

  export type LibraryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LibrarySumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LibraryMinAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LibraryMaxAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LibraryCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type LibraryAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LibrarySumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LibraryMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LibraryMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LibraryCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type LibraryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Library to aggregate.
     */
    where?: LibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libraries to fetch.
     */
    orderBy?: LibraryOrderByWithRelationInput | LibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Libraries
    **/
    _count?: true | LibraryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LibraryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LibrarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LibraryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LibraryMaxAggregateInputType
  }

  export type GetLibraryAggregateType<T extends LibraryAggregateArgs> = {
        [P in keyof T & keyof AggregateLibrary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibrary[P]>
      : GetScalarType<T[P], AggregateLibrary[P]>
  }




  export type LibraryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibraryWhereInput
    orderBy?: LibraryOrderByWithAggregationInput | LibraryOrderByWithAggregationInput[]
    by: LibraryScalarFieldEnum[] | LibraryScalarFieldEnum
    having?: LibraryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LibraryCountAggregateInputType | true
    _avg?: LibraryAvgAggregateInputType
    _sum?: LibrarySumAggregateInputType
    _min?: LibraryMinAggregateInputType
    _max?: LibraryMaxAggregateInputType
  }

  export type LibraryGroupByOutputType = {
    id: number
    userId: number
    _count: LibraryCountAggregateOutputType | null
    _avg: LibraryAvgAggregateOutputType | null
    _sum: LibrarySumAggregateOutputType | null
    _min: LibraryMinAggregateOutputType | null
    _max: LibraryMaxAggregateOutputType | null
  }

  type GetLibraryGroupByPayload<T extends LibraryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LibraryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LibraryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibraryGroupByOutputType[P]>
            : GetScalarType<T[P], LibraryGroupByOutputType[P]>
        }
      >
    >


  export type LibrarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    books?: boolean | Library$booksArgs<ExtArgs>
    shelves?: boolean | Library$shelvesArgs<ExtArgs>
    _count?: boolean | LibraryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["library"]>

  export type LibrarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["library"]>

  export type LibrarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["library"]>

  export type LibrarySelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type LibraryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId", ExtArgs["result"]["library"]>
  export type LibraryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    books?: boolean | Library$booksArgs<ExtArgs>
    shelves?: boolean | Library$shelvesArgs<ExtArgs>
    _count?: boolean | LibraryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LibraryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LibraryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LibraryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Library"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      books: Prisma.$BookLibraryPayload<ExtArgs>[]
      shelves: Prisma.$ShelfPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
    }, ExtArgs["result"]["library"]>
    composites: {}
  }

  type LibraryGetPayload<S extends boolean | null | undefined | LibraryDefaultArgs> = $Result.GetResult<Prisma.$LibraryPayload, S>

  type LibraryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LibraryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LibraryCountAggregateInputType | true
    }

  export interface LibraryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Library'], meta: { name: 'Library' } }
    /**
     * Find zero or one Library that matches the filter.
     * @param {LibraryFindUniqueArgs} args - Arguments to find a Library
     * @example
     * // Get one Library
     * const library = await prisma.library.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LibraryFindUniqueArgs>(args: SelectSubset<T, LibraryFindUniqueArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Library that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LibraryFindUniqueOrThrowArgs} args - Arguments to find a Library
     * @example
     * // Get one Library
     * const library = await prisma.library.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LibraryFindUniqueOrThrowArgs>(args: SelectSubset<T, LibraryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Library that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryFindFirstArgs} args - Arguments to find a Library
     * @example
     * // Get one Library
     * const library = await prisma.library.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LibraryFindFirstArgs>(args?: SelectSubset<T, LibraryFindFirstArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Library that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryFindFirstOrThrowArgs} args - Arguments to find a Library
     * @example
     * // Get one Library
     * const library = await prisma.library.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LibraryFindFirstOrThrowArgs>(args?: SelectSubset<T, LibraryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Libraries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Libraries
     * const libraries = await prisma.library.findMany()
     * 
     * // Get first 10 Libraries
     * const libraries = await prisma.library.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const libraryWithIdOnly = await prisma.library.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LibraryFindManyArgs>(args?: SelectSubset<T, LibraryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Library.
     * @param {LibraryCreateArgs} args - Arguments to create a Library.
     * @example
     * // Create one Library
     * const Library = await prisma.library.create({
     *   data: {
     *     // ... data to create a Library
     *   }
     * })
     * 
     */
    create<T extends LibraryCreateArgs>(args: SelectSubset<T, LibraryCreateArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Libraries.
     * @param {LibraryCreateManyArgs} args - Arguments to create many Libraries.
     * @example
     * // Create many Libraries
     * const library = await prisma.library.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LibraryCreateManyArgs>(args?: SelectSubset<T, LibraryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Libraries and returns the data saved in the database.
     * @param {LibraryCreateManyAndReturnArgs} args - Arguments to create many Libraries.
     * @example
     * // Create many Libraries
     * const library = await prisma.library.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Libraries and only return the `id`
     * const libraryWithIdOnly = await prisma.library.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LibraryCreateManyAndReturnArgs>(args?: SelectSubset<T, LibraryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Library.
     * @param {LibraryDeleteArgs} args - Arguments to delete one Library.
     * @example
     * // Delete one Library
     * const Library = await prisma.library.delete({
     *   where: {
     *     // ... filter to delete one Library
     *   }
     * })
     * 
     */
    delete<T extends LibraryDeleteArgs>(args: SelectSubset<T, LibraryDeleteArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Library.
     * @param {LibraryUpdateArgs} args - Arguments to update one Library.
     * @example
     * // Update one Library
     * const library = await prisma.library.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LibraryUpdateArgs>(args: SelectSubset<T, LibraryUpdateArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Libraries.
     * @param {LibraryDeleteManyArgs} args - Arguments to filter Libraries to delete.
     * @example
     * // Delete a few Libraries
     * const { count } = await prisma.library.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LibraryDeleteManyArgs>(args?: SelectSubset<T, LibraryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Libraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Libraries
     * const library = await prisma.library.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LibraryUpdateManyArgs>(args: SelectSubset<T, LibraryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Libraries and returns the data updated in the database.
     * @param {LibraryUpdateManyAndReturnArgs} args - Arguments to update many Libraries.
     * @example
     * // Update many Libraries
     * const library = await prisma.library.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Libraries and only return the `id`
     * const libraryWithIdOnly = await prisma.library.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LibraryUpdateManyAndReturnArgs>(args: SelectSubset<T, LibraryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Library.
     * @param {LibraryUpsertArgs} args - Arguments to update or create a Library.
     * @example
     * // Update or create a Library
     * const library = await prisma.library.upsert({
     *   create: {
     *     // ... data to create a Library
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Library we want to update
     *   }
     * })
     */
    upsert<T extends LibraryUpsertArgs>(args: SelectSubset<T, LibraryUpsertArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Libraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryCountArgs} args - Arguments to filter Libraries to count.
     * @example
     * // Count the number of Libraries
     * const count = await prisma.library.count({
     *   where: {
     *     // ... the filter for the Libraries we want to count
     *   }
     * })
    **/
    count<T extends LibraryCountArgs>(
      args?: Subset<T, LibraryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LibraryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Library.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LibraryAggregateArgs>(args: Subset<T, LibraryAggregateArgs>): Prisma.PrismaPromise<GetLibraryAggregateType<T>>

    /**
     * Group by Library.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LibraryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LibraryGroupByArgs['orderBy'] }
        : { orderBy?: LibraryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LibraryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibraryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Library model
   */
  readonly fields: LibraryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Library.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LibraryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    books<T extends Library$booksArgs<ExtArgs> = {}>(args?: Subset<T, Library$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookLibraryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shelves<T extends Library$shelvesArgs<ExtArgs> = {}>(args?: Subset<T, Library$shelvesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Library model
   */
  interface LibraryFieldRefs {
    readonly id: FieldRef<"Library", 'Int'>
    readonly userId: FieldRef<"Library", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Library findUnique
   */
  export type LibraryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter, which Library to fetch.
     */
    where: LibraryWhereUniqueInput
  }

  /**
   * Library findUniqueOrThrow
   */
  export type LibraryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter, which Library to fetch.
     */
    where: LibraryWhereUniqueInput
  }

  /**
   * Library findFirst
   */
  export type LibraryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter, which Library to fetch.
     */
    where?: LibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libraries to fetch.
     */
    orderBy?: LibraryOrderByWithRelationInput | LibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Libraries.
     */
    cursor?: LibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Libraries.
     */
    distinct?: LibraryScalarFieldEnum | LibraryScalarFieldEnum[]
  }

  /**
   * Library findFirstOrThrow
   */
  export type LibraryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter, which Library to fetch.
     */
    where?: LibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libraries to fetch.
     */
    orderBy?: LibraryOrderByWithRelationInput | LibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Libraries.
     */
    cursor?: LibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Libraries.
     */
    distinct?: LibraryScalarFieldEnum | LibraryScalarFieldEnum[]
  }

  /**
   * Library findMany
   */
  export type LibraryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter, which Libraries to fetch.
     */
    where?: LibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libraries to fetch.
     */
    orderBy?: LibraryOrderByWithRelationInput | LibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Libraries.
     */
    cursor?: LibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libraries.
     */
    skip?: number
    distinct?: LibraryScalarFieldEnum | LibraryScalarFieldEnum[]
  }

  /**
   * Library create
   */
  export type LibraryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * The data needed to create a Library.
     */
    data: XOR<LibraryCreateInput, LibraryUncheckedCreateInput>
  }

  /**
   * Library createMany
   */
  export type LibraryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Libraries.
     */
    data: LibraryCreateManyInput | LibraryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Library createManyAndReturn
   */
  export type LibraryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * The data used to create many Libraries.
     */
    data: LibraryCreateManyInput | LibraryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Library update
   */
  export type LibraryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * The data needed to update a Library.
     */
    data: XOR<LibraryUpdateInput, LibraryUncheckedUpdateInput>
    /**
     * Choose, which Library to update.
     */
    where: LibraryWhereUniqueInput
  }

  /**
   * Library updateMany
   */
  export type LibraryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Libraries.
     */
    data: XOR<LibraryUpdateManyMutationInput, LibraryUncheckedUpdateManyInput>
    /**
     * Filter which Libraries to update
     */
    where?: LibraryWhereInput
    /**
     * Limit how many Libraries to update.
     */
    limit?: number
  }

  /**
   * Library updateManyAndReturn
   */
  export type LibraryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * The data used to update Libraries.
     */
    data: XOR<LibraryUpdateManyMutationInput, LibraryUncheckedUpdateManyInput>
    /**
     * Filter which Libraries to update
     */
    where?: LibraryWhereInput
    /**
     * Limit how many Libraries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Library upsert
   */
  export type LibraryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * The filter to search for the Library to update in case it exists.
     */
    where: LibraryWhereUniqueInput
    /**
     * In case the Library found by the `where` argument doesn't exist, create a new Library with this data.
     */
    create: XOR<LibraryCreateInput, LibraryUncheckedCreateInput>
    /**
     * In case the Library was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LibraryUpdateInput, LibraryUncheckedUpdateInput>
  }

  /**
   * Library delete
   */
  export type LibraryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter which Library to delete.
     */
    where: LibraryWhereUniqueInput
  }

  /**
   * Library deleteMany
   */
  export type LibraryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Libraries to delete
     */
    where?: LibraryWhereInput
    /**
     * Limit how many Libraries to delete.
     */
    limit?: number
  }

  /**
   * Library.books
   */
  export type Library$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookLibrary
     */
    select?: BookLibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookLibrary
     */
    omit?: BookLibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookLibraryInclude<ExtArgs> | null
    where?: BookLibraryWhereInput
    orderBy?: BookLibraryOrderByWithRelationInput | BookLibraryOrderByWithRelationInput[]
    cursor?: BookLibraryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookLibraryScalarFieldEnum | BookLibraryScalarFieldEnum[]
  }

  /**
   * Library.shelves
   */
  export type Library$shelvesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelf
     */
    select?: ShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelf
     */
    omit?: ShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelfInclude<ExtArgs> | null
    where?: ShelfWhereInput
    orderBy?: ShelfOrderByWithRelationInput | ShelfOrderByWithRelationInput[]
    cursor?: ShelfWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShelfScalarFieldEnum | ShelfScalarFieldEnum[]
  }

  /**
   * Library without action
   */
  export type LibraryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
  }


  /**
   * Model Shelf
   */

  export type AggregateShelf = {
    _count: ShelfCountAggregateOutputType | null
    _avg: ShelfAvgAggregateOutputType | null
    _sum: ShelfSumAggregateOutputType | null
    _min: ShelfMinAggregateOutputType | null
    _max: ShelfMaxAggregateOutputType | null
  }

  export type ShelfAvgAggregateOutputType = {
    id: number | null
    totalBooks: number | null
    libraryId: number | null
  }

  export type ShelfSumAggregateOutputType = {
    id: number | null
    totalBooks: number | null
    libraryId: number | null
  }

  export type ShelfMinAggregateOutputType = {
    id: number | null
    name: string | null
    totalBooks: number | null
    libraryId: number | null
  }

  export type ShelfMaxAggregateOutputType = {
    id: number | null
    name: string | null
    totalBooks: number | null
    libraryId: number | null
  }

  export type ShelfCountAggregateOutputType = {
    id: number
    name: number
    totalBooks: number
    libraryId: number
    _all: number
  }


  export type ShelfAvgAggregateInputType = {
    id?: true
    totalBooks?: true
    libraryId?: true
  }

  export type ShelfSumAggregateInputType = {
    id?: true
    totalBooks?: true
    libraryId?: true
  }

  export type ShelfMinAggregateInputType = {
    id?: true
    name?: true
    totalBooks?: true
    libraryId?: true
  }

  export type ShelfMaxAggregateInputType = {
    id?: true
    name?: true
    totalBooks?: true
    libraryId?: true
  }

  export type ShelfCountAggregateInputType = {
    id?: true
    name?: true
    totalBooks?: true
    libraryId?: true
    _all?: true
  }

  export type ShelfAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shelf to aggregate.
     */
    where?: ShelfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shelves to fetch.
     */
    orderBy?: ShelfOrderByWithRelationInput | ShelfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShelfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shelves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shelves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shelves
    **/
    _count?: true | ShelfCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShelfAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShelfSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShelfMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShelfMaxAggregateInputType
  }

  export type GetShelfAggregateType<T extends ShelfAggregateArgs> = {
        [P in keyof T & keyof AggregateShelf]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShelf[P]>
      : GetScalarType<T[P], AggregateShelf[P]>
  }




  export type ShelfGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShelfWhereInput
    orderBy?: ShelfOrderByWithAggregationInput | ShelfOrderByWithAggregationInput[]
    by: ShelfScalarFieldEnum[] | ShelfScalarFieldEnum
    having?: ShelfScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShelfCountAggregateInputType | true
    _avg?: ShelfAvgAggregateInputType
    _sum?: ShelfSumAggregateInputType
    _min?: ShelfMinAggregateInputType
    _max?: ShelfMaxAggregateInputType
  }

  export type ShelfGroupByOutputType = {
    id: number
    name: string
    totalBooks: number
    libraryId: number
    _count: ShelfCountAggregateOutputType | null
    _avg: ShelfAvgAggregateOutputType | null
    _sum: ShelfSumAggregateOutputType | null
    _min: ShelfMinAggregateOutputType | null
    _max: ShelfMaxAggregateOutputType | null
  }

  type GetShelfGroupByPayload<T extends ShelfGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShelfGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShelfGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShelfGroupByOutputType[P]>
            : GetScalarType<T[P], ShelfGroupByOutputType[P]>
        }
      >
    >


  export type ShelfSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    totalBooks?: boolean
    libraryId?: boolean
    library?: boolean | LibraryDefaultArgs<ExtArgs>
    books?: boolean | Shelf$booksArgs<ExtArgs>
    _count?: boolean | ShelfCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shelf"]>

  export type ShelfSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    totalBooks?: boolean
    libraryId?: boolean
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shelf"]>

  export type ShelfSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    totalBooks?: boolean
    libraryId?: boolean
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shelf"]>

  export type ShelfSelectScalar = {
    id?: boolean
    name?: boolean
    totalBooks?: boolean
    libraryId?: boolean
  }

  export type ShelfOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "totalBooks" | "libraryId", ExtArgs["result"]["shelf"]>
  export type ShelfInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    library?: boolean | LibraryDefaultArgs<ExtArgs>
    books?: boolean | Shelf$booksArgs<ExtArgs>
    _count?: boolean | ShelfCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShelfIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }
  export type ShelfIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }

  export type $ShelfPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shelf"
    objects: {
      library: Prisma.$LibraryPayload<ExtArgs>
      books: Prisma.$BookShelfPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      totalBooks: number
      libraryId: number
    }, ExtArgs["result"]["shelf"]>
    composites: {}
  }

  type ShelfGetPayload<S extends boolean | null | undefined | ShelfDefaultArgs> = $Result.GetResult<Prisma.$ShelfPayload, S>

  type ShelfCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShelfFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShelfCountAggregateInputType | true
    }

  export interface ShelfDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shelf'], meta: { name: 'Shelf' } }
    /**
     * Find zero or one Shelf that matches the filter.
     * @param {ShelfFindUniqueArgs} args - Arguments to find a Shelf
     * @example
     * // Get one Shelf
     * const shelf = await prisma.shelf.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShelfFindUniqueArgs>(args: SelectSubset<T, ShelfFindUniqueArgs<ExtArgs>>): Prisma__ShelfClient<$Result.GetResult<Prisma.$ShelfPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shelf that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShelfFindUniqueOrThrowArgs} args - Arguments to find a Shelf
     * @example
     * // Get one Shelf
     * const shelf = await prisma.shelf.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShelfFindUniqueOrThrowArgs>(args: SelectSubset<T, ShelfFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShelfClient<$Result.GetResult<Prisma.$ShelfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shelf that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelfFindFirstArgs} args - Arguments to find a Shelf
     * @example
     * // Get one Shelf
     * const shelf = await prisma.shelf.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShelfFindFirstArgs>(args?: SelectSubset<T, ShelfFindFirstArgs<ExtArgs>>): Prisma__ShelfClient<$Result.GetResult<Prisma.$ShelfPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shelf that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelfFindFirstOrThrowArgs} args - Arguments to find a Shelf
     * @example
     * // Get one Shelf
     * const shelf = await prisma.shelf.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShelfFindFirstOrThrowArgs>(args?: SelectSubset<T, ShelfFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShelfClient<$Result.GetResult<Prisma.$ShelfPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shelves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelfFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shelves
     * const shelves = await prisma.shelf.findMany()
     * 
     * // Get first 10 Shelves
     * const shelves = await prisma.shelf.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shelfWithIdOnly = await prisma.shelf.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShelfFindManyArgs>(args?: SelectSubset<T, ShelfFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shelf.
     * @param {ShelfCreateArgs} args - Arguments to create a Shelf.
     * @example
     * // Create one Shelf
     * const Shelf = await prisma.shelf.create({
     *   data: {
     *     // ... data to create a Shelf
     *   }
     * })
     * 
     */
    create<T extends ShelfCreateArgs>(args: SelectSubset<T, ShelfCreateArgs<ExtArgs>>): Prisma__ShelfClient<$Result.GetResult<Prisma.$ShelfPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shelves.
     * @param {ShelfCreateManyArgs} args - Arguments to create many Shelves.
     * @example
     * // Create many Shelves
     * const shelf = await prisma.shelf.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShelfCreateManyArgs>(args?: SelectSubset<T, ShelfCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shelves and returns the data saved in the database.
     * @param {ShelfCreateManyAndReturnArgs} args - Arguments to create many Shelves.
     * @example
     * // Create many Shelves
     * const shelf = await prisma.shelf.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shelves and only return the `id`
     * const shelfWithIdOnly = await prisma.shelf.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShelfCreateManyAndReturnArgs>(args?: SelectSubset<T, ShelfCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelfPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shelf.
     * @param {ShelfDeleteArgs} args - Arguments to delete one Shelf.
     * @example
     * // Delete one Shelf
     * const Shelf = await prisma.shelf.delete({
     *   where: {
     *     // ... filter to delete one Shelf
     *   }
     * })
     * 
     */
    delete<T extends ShelfDeleteArgs>(args: SelectSubset<T, ShelfDeleteArgs<ExtArgs>>): Prisma__ShelfClient<$Result.GetResult<Prisma.$ShelfPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shelf.
     * @param {ShelfUpdateArgs} args - Arguments to update one Shelf.
     * @example
     * // Update one Shelf
     * const shelf = await prisma.shelf.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShelfUpdateArgs>(args: SelectSubset<T, ShelfUpdateArgs<ExtArgs>>): Prisma__ShelfClient<$Result.GetResult<Prisma.$ShelfPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shelves.
     * @param {ShelfDeleteManyArgs} args - Arguments to filter Shelves to delete.
     * @example
     * // Delete a few Shelves
     * const { count } = await prisma.shelf.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShelfDeleteManyArgs>(args?: SelectSubset<T, ShelfDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shelves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelfUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shelves
     * const shelf = await prisma.shelf.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShelfUpdateManyArgs>(args: SelectSubset<T, ShelfUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shelves and returns the data updated in the database.
     * @param {ShelfUpdateManyAndReturnArgs} args - Arguments to update many Shelves.
     * @example
     * // Update many Shelves
     * const shelf = await prisma.shelf.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shelves and only return the `id`
     * const shelfWithIdOnly = await prisma.shelf.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShelfUpdateManyAndReturnArgs>(args: SelectSubset<T, ShelfUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShelfPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shelf.
     * @param {ShelfUpsertArgs} args - Arguments to update or create a Shelf.
     * @example
     * // Update or create a Shelf
     * const shelf = await prisma.shelf.upsert({
     *   create: {
     *     // ... data to create a Shelf
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shelf we want to update
     *   }
     * })
     */
    upsert<T extends ShelfUpsertArgs>(args: SelectSubset<T, ShelfUpsertArgs<ExtArgs>>): Prisma__ShelfClient<$Result.GetResult<Prisma.$ShelfPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shelves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelfCountArgs} args - Arguments to filter Shelves to count.
     * @example
     * // Count the number of Shelves
     * const count = await prisma.shelf.count({
     *   where: {
     *     // ... the filter for the Shelves we want to count
     *   }
     * })
    **/
    count<T extends ShelfCountArgs>(
      args?: Subset<T, ShelfCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShelfCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shelf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelfAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShelfAggregateArgs>(args: Subset<T, ShelfAggregateArgs>): Prisma.PrismaPromise<GetShelfAggregateType<T>>

    /**
     * Group by Shelf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShelfGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShelfGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShelfGroupByArgs['orderBy'] }
        : { orderBy?: ShelfGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShelfGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShelfGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shelf model
   */
  readonly fields: ShelfFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shelf.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShelfClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    library<T extends LibraryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LibraryDefaultArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    books<T extends Shelf$booksArgs<ExtArgs> = {}>(args?: Subset<T, Shelf$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookShelfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shelf model
   */
  interface ShelfFieldRefs {
    readonly id: FieldRef<"Shelf", 'Int'>
    readonly name: FieldRef<"Shelf", 'String'>
    readonly totalBooks: FieldRef<"Shelf", 'Int'>
    readonly libraryId: FieldRef<"Shelf", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Shelf findUnique
   */
  export type ShelfFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelf
     */
    select?: ShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelf
     */
    omit?: ShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelfInclude<ExtArgs> | null
    /**
     * Filter, which Shelf to fetch.
     */
    where: ShelfWhereUniqueInput
  }

  /**
   * Shelf findUniqueOrThrow
   */
  export type ShelfFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelf
     */
    select?: ShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelf
     */
    omit?: ShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelfInclude<ExtArgs> | null
    /**
     * Filter, which Shelf to fetch.
     */
    where: ShelfWhereUniqueInput
  }

  /**
   * Shelf findFirst
   */
  export type ShelfFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelf
     */
    select?: ShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelf
     */
    omit?: ShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelfInclude<ExtArgs> | null
    /**
     * Filter, which Shelf to fetch.
     */
    where?: ShelfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shelves to fetch.
     */
    orderBy?: ShelfOrderByWithRelationInput | ShelfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shelves.
     */
    cursor?: ShelfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shelves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shelves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shelves.
     */
    distinct?: ShelfScalarFieldEnum | ShelfScalarFieldEnum[]
  }

  /**
   * Shelf findFirstOrThrow
   */
  export type ShelfFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelf
     */
    select?: ShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelf
     */
    omit?: ShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelfInclude<ExtArgs> | null
    /**
     * Filter, which Shelf to fetch.
     */
    where?: ShelfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shelves to fetch.
     */
    orderBy?: ShelfOrderByWithRelationInput | ShelfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shelves.
     */
    cursor?: ShelfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shelves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shelves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shelves.
     */
    distinct?: ShelfScalarFieldEnum | ShelfScalarFieldEnum[]
  }

  /**
   * Shelf findMany
   */
  export type ShelfFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelf
     */
    select?: ShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelf
     */
    omit?: ShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelfInclude<ExtArgs> | null
    /**
     * Filter, which Shelves to fetch.
     */
    where?: ShelfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shelves to fetch.
     */
    orderBy?: ShelfOrderByWithRelationInput | ShelfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shelves.
     */
    cursor?: ShelfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shelves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shelves.
     */
    skip?: number
    distinct?: ShelfScalarFieldEnum | ShelfScalarFieldEnum[]
  }

  /**
   * Shelf create
   */
  export type ShelfCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelf
     */
    select?: ShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelf
     */
    omit?: ShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelfInclude<ExtArgs> | null
    /**
     * The data needed to create a Shelf.
     */
    data: XOR<ShelfCreateInput, ShelfUncheckedCreateInput>
  }

  /**
   * Shelf createMany
   */
  export type ShelfCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shelves.
     */
    data: ShelfCreateManyInput | ShelfCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shelf createManyAndReturn
   */
  export type ShelfCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelf
     */
    select?: ShelfSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shelf
     */
    omit?: ShelfOmit<ExtArgs> | null
    /**
     * The data used to create many Shelves.
     */
    data: ShelfCreateManyInput | ShelfCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelfIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shelf update
   */
  export type ShelfUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelf
     */
    select?: ShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelf
     */
    omit?: ShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelfInclude<ExtArgs> | null
    /**
     * The data needed to update a Shelf.
     */
    data: XOR<ShelfUpdateInput, ShelfUncheckedUpdateInput>
    /**
     * Choose, which Shelf to update.
     */
    where: ShelfWhereUniqueInput
  }

  /**
   * Shelf updateMany
   */
  export type ShelfUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shelves.
     */
    data: XOR<ShelfUpdateManyMutationInput, ShelfUncheckedUpdateManyInput>
    /**
     * Filter which Shelves to update
     */
    where?: ShelfWhereInput
    /**
     * Limit how many Shelves to update.
     */
    limit?: number
  }

  /**
   * Shelf updateManyAndReturn
   */
  export type ShelfUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelf
     */
    select?: ShelfSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shelf
     */
    omit?: ShelfOmit<ExtArgs> | null
    /**
     * The data used to update Shelves.
     */
    data: XOR<ShelfUpdateManyMutationInput, ShelfUncheckedUpdateManyInput>
    /**
     * Filter which Shelves to update
     */
    where?: ShelfWhereInput
    /**
     * Limit how many Shelves to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelfIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shelf upsert
   */
  export type ShelfUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelf
     */
    select?: ShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelf
     */
    omit?: ShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelfInclude<ExtArgs> | null
    /**
     * The filter to search for the Shelf to update in case it exists.
     */
    where: ShelfWhereUniqueInput
    /**
     * In case the Shelf found by the `where` argument doesn't exist, create a new Shelf with this data.
     */
    create: XOR<ShelfCreateInput, ShelfUncheckedCreateInput>
    /**
     * In case the Shelf was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShelfUpdateInput, ShelfUncheckedUpdateInput>
  }

  /**
   * Shelf delete
   */
  export type ShelfDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelf
     */
    select?: ShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelf
     */
    omit?: ShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelfInclude<ExtArgs> | null
    /**
     * Filter which Shelf to delete.
     */
    where: ShelfWhereUniqueInput
  }

  /**
   * Shelf deleteMany
   */
  export type ShelfDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shelves to delete
     */
    where?: ShelfWhereInput
    /**
     * Limit how many Shelves to delete.
     */
    limit?: number
  }

  /**
   * Shelf.books
   */
  export type Shelf$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookShelf
     */
    select?: BookShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookShelf
     */
    omit?: BookShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookShelfInclude<ExtArgs> | null
    where?: BookShelfWhereInput
    orderBy?: BookShelfOrderByWithRelationInput | BookShelfOrderByWithRelationInput[]
    cursor?: BookShelfWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookShelfScalarFieldEnum | BookShelfScalarFieldEnum[]
  }

  /**
   * Shelf without action
   */
  export type ShelfDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shelf
     */
    select?: ShelfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shelf
     */
    omit?: ShelfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShelfInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    username: 'username',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    title: 'title',
    userId: 'userId'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const BookGenreScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    genre: 'genre',
    createdAt: 'createdAt'
  };

  export type BookGenreScalarFieldEnum = (typeof BookGenreScalarFieldEnum)[keyof typeof BookGenreScalarFieldEnum]


  export const BookLibraryScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    libraryId: 'libraryId',
    createdAt: 'createdAt'
  };

  export type BookLibraryScalarFieldEnum = (typeof BookLibraryScalarFieldEnum)[keyof typeof BookLibraryScalarFieldEnum]


  export const BookShelfScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    shelfId: 'shelfId',
    createdAt: 'createdAt'
  };

  export type BookShelfScalarFieldEnum = (typeof BookShelfScalarFieldEnum)[keyof typeof BookShelfScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    userId: 'userId',
    bookId: 'bookId',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const LoveScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bookId: 'bookId',
    createdAt: 'createdAt'
  };

  export type LoveScalarFieldEnum = (typeof LoveScalarFieldEnum)[keyof typeof LoveScalarFieldEnum]


  export const BookPageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    page: 'page',
    bookId: 'bookId'
  };

  export type BookPageScalarFieldEnum = (typeof BookPageScalarFieldEnum)[keyof typeof BookPageScalarFieldEnum]


  export const LibraryScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type LibraryScalarFieldEnum = (typeof LibraryScalarFieldEnum)[keyof typeof LibraryScalarFieldEnum]


  export const ShelfScalarFieldEnum: {
    id: 'id',
    name: 'name',
    totalBooks: 'totalBooks',
    libraryId: 'libraryId'
  };

  export type ShelfScalarFieldEnum = (typeof ShelfScalarFieldEnum)[keyof typeof ShelfScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Genres'
   */
  export type EnumGenresFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Genres'>
    


  /**
   * Reference to a field of type 'Genres[]'
   */
  export type ListEnumGenresFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Genres[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    books?: BookListRelationFilter
    library?: XOR<LibraryNullableScalarRelationFilter, LibraryWhereInput> | null
    loves?: LoveListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    books?: BookOrderByRelationAggregateInput
    library?: LibraryOrderByWithRelationInput
    loves?: LoveOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    books?: BookListRelationFilter
    library?: XOR<LibraryNullableScalarRelationFilter, LibraryWhereInput> | null
    loves?: LoveListRelationFilter
    comments?: CommentListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: StringFilter<"Book"> | string
    title?: StringFilter<"Book"> | string
    userId?: IntFilter<"Book"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    pages?: BookPageListRelationFilter
    genres?: BookGenreListRelationFilter
    loves?: LoveListRelationFilter
    comments?: CommentListRelationFilter
    libraries?: BookLibraryListRelationFilter
    shelves?: BookShelfListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    author?: UserOrderByWithRelationInput
    pages?: BookPageOrderByRelationAggregateInput
    genres?: BookGenreOrderByRelationAggregateInput
    loves?: LoveOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    libraries?: BookLibraryOrderByRelationAggregateInput
    shelves?: BookShelfOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    title?: StringFilter<"Book"> | string
    userId?: IntFilter<"Book"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    pages?: BookPageListRelationFilter
    genres?: BookGenreListRelationFilter
    loves?: LoveListRelationFilter
    comments?: CommentListRelationFilter
    libraries?: BookLibraryListRelationFilter
    shelves?: BookShelfListRelationFilter
  }, "id">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Book"> | string
    title?: StringWithAggregatesFilter<"Book"> | string
    userId?: IntWithAggregatesFilter<"Book"> | number
  }

  export type BookGenreWhereInput = {
    AND?: BookGenreWhereInput | BookGenreWhereInput[]
    OR?: BookGenreWhereInput[]
    NOT?: BookGenreWhereInput | BookGenreWhereInput[]
    id?: IntFilter<"BookGenre"> | number
    bookId?: StringFilter<"BookGenre"> | string
    genre?: EnumGenresFilter<"BookGenre"> | $Enums.Genres
    createdAt?: DateTimeFilter<"BookGenre"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type BookGenreOrderByWithRelationInput = {
    id?: SortOrder
    bookId?: SortOrder
    genre?: SortOrder
    createdAt?: SortOrder
    book?: BookOrderByWithRelationInput
  }

  export type BookGenreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    bookId_genre?: BookGenreBookIdGenreCompoundUniqueInput
    AND?: BookGenreWhereInput | BookGenreWhereInput[]
    OR?: BookGenreWhereInput[]
    NOT?: BookGenreWhereInput | BookGenreWhereInput[]
    bookId?: StringFilter<"BookGenre"> | string
    genre?: EnumGenresFilter<"BookGenre"> | $Enums.Genres
    createdAt?: DateTimeFilter<"BookGenre"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "id" | "bookId_genre">

  export type BookGenreOrderByWithAggregationInput = {
    id?: SortOrder
    bookId?: SortOrder
    genre?: SortOrder
    createdAt?: SortOrder
    _count?: BookGenreCountOrderByAggregateInput
    _avg?: BookGenreAvgOrderByAggregateInput
    _max?: BookGenreMaxOrderByAggregateInput
    _min?: BookGenreMinOrderByAggregateInput
    _sum?: BookGenreSumOrderByAggregateInput
  }

  export type BookGenreScalarWhereWithAggregatesInput = {
    AND?: BookGenreScalarWhereWithAggregatesInput | BookGenreScalarWhereWithAggregatesInput[]
    OR?: BookGenreScalarWhereWithAggregatesInput[]
    NOT?: BookGenreScalarWhereWithAggregatesInput | BookGenreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookGenre"> | number
    bookId?: StringWithAggregatesFilter<"BookGenre"> | string
    genre?: EnumGenresWithAggregatesFilter<"BookGenre"> | $Enums.Genres
    createdAt?: DateTimeWithAggregatesFilter<"BookGenre"> | Date | string
  }

  export type BookLibraryWhereInput = {
    AND?: BookLibraryWhereInput | BookLibraryWhereInput[]
    OR?: BookLibraryWhereInput[]
    NOT?: BookLibraryWhereInput | BookLibraryWhereInput[]
    id?: IntFilter<"BookLibrary"> | number
    bookId?: StringFilter<"BookLibrary"> | string
    libraryId?: IntFilter<"BookLibrary"> | number
    createdAt?: DateTimeFilter<"BookLibrary"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    library?: XOR<LibraryScalarRelationFilter, LibraryWhereInput>
  }

  export type BookLibraryOrderByWithRelationInput = {
    id?: SortOrder
    bookId?: SortOrder
    libraryId?: SortOrder
    createdAt?: SortOrder
    book?: BookOrderByWithRelationInput
    library?: LibraryOrderByWithRelationInput
  }

  export type BookLibraryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    bookId_libraryId?: BookLibraryBookIdLibraryIdCompoundUniqueInput
    AND?: BookLibraryWhereInput | BookLibraryWhereInput[]
    OR?: BookLibraryWhereInput[]
    NOT?: BookLibraryWhereInput | BookLibraryWhereInput[]
    bookId?: StringFilter<"BookLibrary"> | string
    libraryId?: IntFilter<"BookLibrary"> | number
    createdAt?: DateTimeFilter<"BookLibrary"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    library?: XOR<LibraryScalarRelationFilter, LibraryWhereInput>
  }, "id" | "bookId_libraryId">

  export type BookLibraryOrderByWithAggregationInput = {
    id?: SortOrder
    bookId?: SortOrder
    libraryId?: SortOrder
    createdAt?: SortOrder
    _count?: BookLibraryCountOrderByAggregateInput
    _avg?: BookLibraryAvgOrderByAggregateInput
    _max?: BookLibraryMaxOrderByAggregateInput
    _min?: BookLibraryMinOrderByAggregateInput
    _sum?: BookLibrarySumOrderByAggregateInput
  }

  export type BookLibraryScalarWhereWithAggregatesInput = {
    AND?: BookLibraryScalarWhereWithAggregatesInput | BookLibraryScalarWhereWithAggregatesInput[]
    OR?: BookLibraryScalarWhereWithAggregatesInput[]
    NOT?: BookLibraryScalarWhereWithAggregatesInput | BookLibraryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookLibrary"> | number
    bookId?: StringWithAggregatesFilter<"BookLibrary"> | string
    libraryId?: IntWithAggregatesFilter<"BookLibrary"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BookLibrary"> | Date | string
  }

  export type BookShelfWhereInput = {
    AND?: BookShelfWhereInput | BookShelfWhereInput[]
    OR?: BookShelfWhereInput[]
    NOT?: BookShelfWhereInput | BookShelfWhereInput[]
    id?: IntFilter<"BookShelf"> | number
    bookId?: StringFilter<"BookShelf"> | string
    shelfId?: IntFilter<"BookShelf"> | number
    createdAt?: DateTimeFilter<"BookShelf"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    shelf?: XOR<ShelfScalarRelationFilter, ShelfWhereInput>
  }

  export type BookShelfOrderByWithRelationInput = {
    id?: SortOrder
    bookId?: SortOrder
    shelfId?: SortOrder
    createdAt?: SortOrder
    book?: BookOrderByWithRelationInput
    shelf?: ShelfOrderByWithRelationInput
  }

  export type BookShelfWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    bookId_shelfId?: BookShelfBookIdShelfIdCompoundUniqueInput
    AND?: BookShelfWhereInput | BookShelfWhereInput[]
    OR?: BookShelfWhereInput[]
    NOT?: BookShelfWhereInput | BookShelfWhereInput[]
    bookId?: StringFilter<"BookShelf"> | string
    shelfId?: IntFilter<"BookShelf"> | number
    createdAt?: DateTimeFilter<"BookShelf"> | Date | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    shelf?: XOR<ShelfScalarRelationFilter, ShelfWhereInput>
  }, "id" | "bookId_shelfId">

  export type BookShelfOrderByWithAggregationInput = {
    id?: SortOrder
    bookId?: SortOrder
    shelfId?: SortOrder
    createdAt?: SortOrder
    _count?: BookShelfCountOrderByAggregateInput
    _avg?: BookShelfAvgOrderByAggregateInput
    _max?: BookShelfMaxOrderByAggregateInput
    _min?: BookShelfMinOrderByAggregateInput
    _sum?: BookShelfSumOrderByAggregateInput
  }

  export type BookShelfScalarWhereWithAggregatesInput = {
    AND?: BookShelfScalarWhereWithAggregatesInput | BookShelfScalarWhereWithAggregatesInput[]
    OR?: BookShelfScalarWhereWithAggregatesInput[]
    NOT?: BookShelfScalarWhereWithAggregatesInput | BookShelfScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookShelf"> | number
    bookId?: StringWithAggregatesFilter<"BookShelf"> | string
    shelfId?: IntWithAggregatesFilter<"BookShelf"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BookShelf"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    userId?: IntFilter<"Comment"> | number
    bookId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    book?: BookOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: StringFilter<"Comment"> | string
    userId?: IntFilter<"Comment"> | number
    bookId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    content?: StringWithAggregatesFilter<"Comment"> | string
    userId?: IntWithAggregatesFilter<"Comment"> | number
    bookId?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type LoveWhereInput = {
    AND?: LoveWhereInput | LoveWhereInput[]
    OR?: LoveWhereInput[]
    NOT?: LoveWhereInput | LoveWhereInput[]
    id?: IntFilter<"Love"> | number
    userId?: IntFilter<"Love"> | number
    bookId?: StringFilter<"Love"> | string
    createdAt?: DateTimeFilter<"Love"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type LoveOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    book?: BookOrderByWithRelationInput
  }

  export type LoveWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_bookId?: LoveUserIdBookIdCompoundUniqueInput
    AND?: LoveWhereInput | LoveWhereInput[]
    OR?: LoveWhereInput[]
    NOT?: LoveWhereInput | LoveWhereInput[]
    userId?: IntFilter<"Love"> | number
    bookId?: StringFilter<"Love"> | string
    createdAt?: DateTimeFilter<"Love"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "id" | "userId_bookId">

  export type LoveOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
    _count?: LoveCountOrderByAggregateInput
    _avg?: LoveAvgOrderByAggregateInput
    _max?: LoveMaxOrderByAggregateInput
    _min?: LoveMinOrderByAggregateInput
    _sum?: LoveSumOrderByAggregateInput
  }

  export type LoveScalarWhereWithAggregatesInput = {
    AND?: LoveScalarWhereWithAggregatesInput | LoveScalarWhereWithAggregatesInput[]
    OR?: LoveScalarWhereWithAggregatesInput[]
    NOT?: LoveScalarWhereWithAggregatesInput | LoveScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Love"> | number
    userId?: IntWithAggregatesFilter<"Love"> | number
    bookId?: StringWithAggregatesFilter<"Love"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Love"> | Date | string
  }

  export type BookPageWhereInput = {
    AND?: BookPageWhereInput | BookPageWhereInput[]
    OR?: BookPageWhereInput[]
    NOT?: BookPageWhereInput | BookPageWhereInput[]
    id?: StringFilter<"BookPage"> | string
    content?: StringNullableFilter<"BookPage"> | string | null
    page?: IntFilter<"BookPage"> | number
    bookId?: StringFilter<"BookPage"> | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type BookPageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrderInput | SortOrder
    page?: SortOrder
    bookId?: SortOrder
    book?: BookOrderByWithRelationInput
  }

  export type BookPageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookId_page?: BookPageBookIdPageCompoundUniqueInput
    AND?: BookPageWhereInput | BookPageWhereInput[]
    OR?: BookPageWhereInput[]
    NOT?: BookPageWhereInput | BookPageWhereInput[]
    content?: StringNullableFilter<"BookPage"> | string | null
    page?: IntFilter<"BookPage"> | number
    bookId?: StringFilter<"BookPage"> | string
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "id" | "bookId_page">

  export type BookPageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrderInput | SortOrder
    page?: SortOrder
    bookId?: SortOrder
    _count?: BookPageCountOrderByAggregateInput
    _avg?: BookPageAvgOrderByAggregateInput
    _max?: BookPageMaxOrderByAggregateInput
    _min?: BookPageMinOrderByAggregateInput
    _sum?: BookPageSumOrderByAggregateInput
  }

  export type BookPageScalarWhereWithAggregatesInput = {
    AND?: BookPageScalarWhereWithAggregatesInput | BookPageScalarWhereWithAggregatesInput[]
    OR?: BookPageScalarWhereWithAggregatesInput[]
    NOT?: BookPageScalarWhereWithAggregatesInput | BookPageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookPage"> | string
    content?: StringNullableWithAggregatesFilter<"BookPage"> | string | null
    page?: IntWithAggregatesFilter<"BookPage"> | number
    bookId?: StringWithAggregatesFilter<"BookPage"> | string
  }

  export type LibraryWhereInput = {
    AND?: LibraryWhereInput | LibraryWhereInput[]
    OR?: LibraryWhereInput[]
    NOT?: LibraryWhereInput | LibraryWhereInput[]
    id?: IntFilter<"Library"> | number
    userId?: IntFilter<"Library"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    books?: BookLibraryListRelationFilter
    shelves?: ShelfListRelationFilter
  }

  export type LibraryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    books?: BookLibraryOrderByRelationAggregateInput
    shelves?: ShelfOrderByRelationAggregateInput
  }

  export type LibraryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: LibraryWhereInput | LibraryWhereInput[]
    OR?: LibraryWhereInput[]
    NOT?: LibraryWhereInput | LibraryWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    books?: BookLibraryListRelationFilter
    shelves?: ShelfListRelationFilter
  }, "id" | "userId">

  export type LibraryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: LibraryCountOrderByAggregateInput
    _avg?: LibraryAvgOrderByAggregateInput
    _max?: LibraryMaxOrderByAggregateInput
    _min?: LibraryMinOrderByAggregateInput
    _sum?: LibrarySumOrderByAggregateInput
  }

  export type LibraryScalarWhereWithAggregatesInput = {
    AND?: LibraryScalarWhereWithAggregatesInput | LibraryScalarWhereWithAggregatesInput[]
    OR?: LibraryScalarWhereWithAggregatesInput[]
    NOT?: LibraryScalarWhereWithAggregatesInput | LibraryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Library"> | number
    userId?: IntWithAggregatesFilter<"Library"> | number
  }

  export type ShelfWhereInput = {
    AND?: ShelfWhereInput | ShelfWhereInput[]
    OR?: ShelfWhereInput[]
    NOT?: ShelfWhereInput | ShelfWhereInput[]
    id?: IntFilter<"Shelf"> | number
    name?: StringFilter<"Shelf"> | string
    totalBooks?: IntFilter<"Shelf"> | number
    libraryId?: IntFilter<"Shelf"> | number
    library?: XOR<LibraryScalarRelationFilter, LibraryWhereInput>
    books?: BookShelfListRelationFilter
  }

  export type ShelfOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    totalBooks?: SortOrder
    libraryId?: SortOrder
    library?: LibraryOrderByWithRelationInput
    books?: BookShelfOrderByRelationAggregateInput
  }

  export type ShelfWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ShelfWhereInput | ShelfWhereInput[]
    OR?: ShelfWhereInput[]
    NOT?: ShelfWhereInput | ShelfWhereInput[]
    name?: StringFilter<"Shelf"> | string
    totalBooks?: IntFilter<"Shelf"> | number
    libraryId?: IntFilter<"Shelf"> | number
    library?: XOR<LibraryScalarRelationFilter, LibraryWhereInput>
    books?: BookShelfListRelationFilter
  }, "id">

  export type ShelfOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    totalBooks?: SortOrder
    libraryId?: SortOrder
    _count?: ShelfCountOrderByAggregateInput
    _avg?: ShelfAvgOrderByAggregateInput
    _max?: ShelfMaxOrderByAggregateInput
    _min?: ShelfMinOrderByAggregateInput
    _sum?: ShelfSumOrderByAggregateInput
  }

  export type ShelfScalarWhereWithAggregatesInput = {
    AND?: ShelfScalarWhereWithAggregatesInput | ShelfScalarWhereWithAggregatesInput[]
    OR?: ShelfScalarWhereWithAggregatesInput[]
    NOT?: ShelfScalarWhereWithAggregatesInput | ShelfScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Shelf"> | number
    name?: StringWithAggregatesFilter<"Shelf"> | string
    totalBooks?: IntWithAggregatesFilter<"Shelf"> | number
    libraryId?: IntWithAggregatesFilter<"Shelf"> | number
  }

  export type UserCreateInput = {
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookCreateNestedManyWithoutAuthorInput
    library?: LibraryCreateNestedOneWithoutUserInput
    loves?: LoveCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutAuthorInput
    library?: LibraryUncheckedCreateNestedOneWithoutUserInput
    loves?: LoveUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutAuthorNestedInput
    library?: LibraryUpdateOneWithoutUserNestedInput
    loves?: LoveUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutAuthorNestedInput
    library?: LibraryUncheckedUpdateOneWithoutUserNestedInput
    loves?: LoveUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCreateInput = {
    id?: string
    title: string
    author: UserCreateNestedOneWithoutBooksInput
    pages?: BookPageCreateNestedManyWithoutBookInput
    genres?: BookGenreCreateNestedManyWithoutBookInput
    loves?: LoveCreateNestedManyWithoutBookInput
    comments?: CommentCreateNestedManyWithoutBookInput
    libraries?: BookLibraryCreateNestedManyWithoutBookInput
    shelves?: BookShelfCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id?: string
    title: string
    userId: number
    pages?: BookPageUncheckedCreateNestedManyWithoutBookInput
    genres?: BookGenreUncheckedCreateNestedManyWithoutBookInput
    loves?: LoveUncheckedCreateNestedManyWithoutBookInput
    comments?: CommentUncheckedCreateNestedManyWithoutBookInput
    libraries?: BookLibraryUncheckedCreateNestedManyWithoutBookInput
    shelves?: BookShelfUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutBooksNestedInput
    pages?: BookPageUpdateManyWithoutBookNestedInput
    genres?: BookGenreUpdateManyWithoutBookNestedInput
    loves?: LoveUpdateManyWithoutBookNestedInput
    comments?: CommentUpdateManyWithoutBookNestedInput
    libraries?: BookLibraryUpdateManyWithoutBookNestedInput
    shelves?: BookShelfUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    pages?: BookPageUncheckedUpdateManyWithoutBookNestedInput
    genres?: BookGenreUncheckedUpdateManyWithoutBookNestedInput
    loves?: LoveUncheckedUpdateManyWithoutBookNestedInput
    comments?: CommentUncheckedUpdateManyWithoutBookNestedInput
    libraries?: BookLibraryUncheckedUpdateManyWithoutBookNestedInput
    shelves?: BookShelfUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id?: string
    title: string
    userId: number
  }

  export type BookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type BookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type BookGenreCreateInput = {
    genre: $Enums.Genres
    createdAt?: Date | string
    book: BookCreateNestedOneWithoutGenresInput
  }

  export type BookGenreUncheckedCreateInput = {
    id?: number
    bookId: string
    genre: $Enums.Genres
    createdAt?: Date | string
  }

  export type BookGenreUpdateInput = {
    genre?: EnumGenresFieldUpdateOperationsInput | $Enums.Genres
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutGenresNestedInput
  }

  export type BookGenreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: StringFieldUpdateOperationsInput | string
    genre?: EnumGenresFieldUpdateOperationsInput | $Enums.Genres
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookGenreCreateManyInput = {
    id?: number
    bookId: string
    genre: $Enums.Genres
    createdAt?: Date | string
  }

  export type BookGenreUpdateManyMutationInput = {
    genre?: EnumGenresFieldUpdateOperationsInput | $Enums.Genres
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookGenreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: StringFieldUpdateOperationsInput | string
    genre?: EnumGenresFieldUpdateOperationsInput | $Enums.Genres
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookLibraryCreateInput = {
    createdAt?: Date | string
    book: BookCreateNestedOneWithoutLibrariesInput
    library: LibraryCreateNestedOneWithoutBooksInput
  }

  export type BookLibraryUncheckedCreateInput = {
    id?: number
    bookId: string
    libraryId: number
    createdAt?: Date | string
  }

  export type BookLibraryUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutLibrariesNestedInput
    library?: LibraryUpdateOneRequiredWithoutBooksNestedInput
  }

  export type BookLibraryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: StringFieldUpdateOperationsInput | string
    libraryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookLibraryCreateManyInput = {
    id?: number
    bookId: string
    libraryId: number
    createdAt?: Date | string
  }

  export type BookLibraryUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookLibraryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: StringFieldUpdateOperationsInput | string
    libraryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookShelfCreateInput = {
    createdAt?: Date | string
    book: BookCreateNestedOneWithoutShelvesInput
    shelf: ShelfCreateNestedOneWithoutBooksInput
  }

  export type BookShelfUncheckedCreateInput = {
    id?: number
    bookId: string
    shelfId: number
    createdAt?: Date | string
  }

  export type BookShelfUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutShelvesNestedInput
    shelf?: ShelfUpdateOneRequiredWithoutBooksNestedInput
  }

  export type BookShelfUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: StringFieldUpdateOperationsInput | string
    shelfId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookShelfCreateManyInput = {
    id?: number
    bookId: string
    shelfId: number
    createdAt?: Date | string
  }

  export type BookShelfUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookShelfUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: StringFieldUpdateOperationsInput | string
    shelfId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
    book: BookCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    content: string
    userId: number
    bookId: string
    createdAt?: Date | string
  }

  export type CommentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
    book?: BookUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    bookId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: number
    content: string
    userId: number
    bookId: string
    createdAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    bookId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoveCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLovesInput
    book: BookCreateNestedOneWithoutLovesInput
  }

  export type LoveUncheckedCreateInput = {
    id?: number
    userId: number
    bookId: string
    createdAt?: Date | string
  }

  export type LoveUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLovesNestedInput
    book?: BookUpdateOneRequiredWithoutLovesNestedInput
  }

  export type LoveUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bookId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoveCreateManyInput = {
    id?: number
    userId: number
    bookId: string
    createdAt?: Date | string
  }

  export type LoveUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoveUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bookId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookPageCreateInput = {
    id?: string
    content?: string | null
    page?: number
    book: BookCreateNestedOneWithoutPagesInput
  }

  export type BookPageUncheckedCreateInput = {
    id?: string
    content?: string | null
    page?: number
    bookId: string
  }

  export type BookPageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    page?: IntFieldUpdateOperationsInput | number
    book?: BookUpdateOneRequiredWithoutPagesNestedInput
  }

  export type BookPageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    page?: IntFieldUpdateOperationsInput | number
    bookId?: StringFieldUpdateOperationsInput | string
  }

  export type BookPageCreateManyInput = {
    id?: string
    content?: string | null
    page?: number
    bookId: string
  }

  export type BookPageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    page?: IntFieldUpdateOperationsInput | number
  }

  export type BookPageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    page?: IntFieldUpdateOperationsInput | number
    bookId?: StringFieldUpdateOperationsInput | string
  }

  export type LibraryCreateInput = {
    user: UserCreateNestedOneWithoutLibraryInput
    books?: BookLibraryCreateNestedManyWithoutLibraryInput
    shelves?: ShelfCreateNestedManyWithoutLibraryInput
  }

  export type LibraryUncheckedCreateInput = {
    id?: number
    userId: number
    books?: BookLibraryUncheckedCreateNestedManyWithoutLibraryInput
    shelves?: ShelfUncheckedCreateNestedManyWithoutLibraryInput
  }

  export type LibraryUpdateInput = {
    user?: UserUpdateOneRequiredWithoutLibraryNestedInput
    books?: BookLibraryUpdateManyWithoutLibraryNestedInput
    shelves?: ShelfUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    books?: BookLibraryUncheckedUpdateManyWithoutLibraryNestedInput
    shelves?: ShelfUncheckedUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryCreateManyInput = {
    id?: number
    userId: number
  }

  export type LibraryUpdateManyMutationInput = {

  }

  export type LibraryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ShelfCreateInput = {
    name?: string
    totalBooks?: number
    library: LibraryCreateNestedOneWithoutShelvesInput
    books?: BookShelfCreateNestedManyWithoutShelfInput
  }

  export type ShelfUncheckedCreateInput = {
    id?: number
    name?: string
    totalBooks?: number
    libraryId: number
    books?: BookShelfUncheckedCreateNestedManyWithoutShelfInput
  }

  export type ShelfUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    totalBooks?: IntFieldUpdateOperationsInput | number
    library?: LibraryUpdateOneRequiredWithoutShelvesNestedInput
    books?: BookShelfUpdateManyWithoutShelfNestedInput
  }

  export type ShelfUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalBooks?: IntFieldUpdateOperationsInput | number
    libraryId?: IntFieldUpdateOperationsInput | number
    books?: BookShelfUncheckedUpdateManyWithoutShelfNestedInput
  }

  export type ShelfCreateManyInput = {
    id?: number
    name?: string
    totalBooks?: number
    libraryId: number
  }

  export type ShelfUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    totalBooks?: IntFieldUpdateOperationsInput | number
  }

  export type ShelfUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalBooks?: IntFieldUpdateOperationsInput | number
    libraryId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BookListRelationFilter = {
    every?: BookWhereInput
    some?: BookWhereInput
    none?: BookWhereInput
  }

  export type LibraryNullableScalarRelationFilter = {
    is?: LibraryWhereInput | null
    isNot?: LibraryWhereInput | null
  }

  export type LoveListRelationFilter = {
    every?: LoveWhereInput
    some?: LoveWhereInput
    none?: LoveWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type BookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BookPageListRelationFilter = {
    every?: BookPageWhereInput
    some?: BookPageWhereInput
    none?: BookPageWhereInput
  }

  export type BookGenreListRelationFilter = {
    every?: BookGenreWhereInput
    some?: BookGenreWhereInput
    none?: BookGenreWhereInput
  }

  export type BookLibraryListRelationFilter = {
    every?: BookLibraryWhereInput
    some?: BookLibraryWhereInput
    none?: BookLibraryWhereInput
  }

  export type BookShelfListRelationFilter = {
    every?: BookShelfWhereInput
    some?: BookShelfWhereInput
    none?: BookShelfWhereInput
  }

  export type BookPageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookGenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookLibraryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookShelfOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type EnumGenresFilter<$PrismaModel = never> = {
    equals?: $Enums.Genres | EnumGenresFieldRefInput<$PrismaModel>
    in?: $Enums.Genres[] | ListEnumGenresFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genres[] | ListEnumGenresFieldRefInput<$PrismaModel>
    not?: NestedEnumGenresFilter<$PrismaModel> | $Enums.Genres
  }

  export type BookScalarRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type BookGenreBookIdGenreCompoundUniqueInput = {
    bookId: string
    genre: $Enums.Genres
  }

  export type BookGenreCountOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    genre?: SortOrder
    createdAt?: SortOrder
  }

  export type BookGenreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BookGenreMaxOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    genre?: SortOrder
    createdAt?: SortOrder
  }

  export type BookGenreMinOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    genre?: SortOrder
    createdAt?: SortOrder
  }

  export type BookGenreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumGenresWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genres | EnumGenresFieldRefInput<$PrismaModel>
    in?: $Enums.Genres[] | ListEnumGenresFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genres[] | ListEnumGenresFieldRefInput<$PrismaModel>
    not?: NestedEnumGenresWithAggregatesFilter<$PrismaModel> | $Enums.Genres
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenresFilter<$PrismaModel>
    _max?: NestedEnumGenresFilter<$PrismaModel>
  }

  export type LibraryScalarRelationFilter = {
    is?: LibraryWhereInput
    isNot?: LibraryWhereInput
  }

  export type BookLibraryBookIdLibraryIdCompoundUniqueInput = {
    bookId: string
    libraryId: number
  }

  export type BookLibraryCountOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    libraryId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookLibraryAvgOrderByAggregateInput = {
    id?: SortOrder
    libraryId?: SortOrder
  }

  export type BookLibraryMaxOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    libraryId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookLibraryMinOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    libraryId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookLibrarySumOrderByAggregateInput = {
    id?: SortOrder
    libraryId?: SortOrder
  }

  export type ShelfScalarRelationFilter = {
    is?: ShelfWhereInput
    isNot?: ShelfWhereInput
  }

  export type BookShelfBookIdShelfIdCompoundUniqueInput = {
    bookId: string
    shelfId: number
  }

  export type BookShelfCountOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    shelfId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookShelfAvgOrderByAggregateInput = {
    id?: SortOrder
    shelfId?: SortOrder
  }

  export type BookShelfMaxOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    shelfId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookShelfMinOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    shelfId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookShelfSumOrderByAggregateInput = {
    id?: SortOrder
    shelfId?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LoveUserIdBookIdCompoundUniqueInput = {
    userId: number
    bookId: string
  }

  export type LoveCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
  }

  export type LoveAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LoveMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
  }

  export type LoveMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
  }

  export type LoveSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookPageBookIdPageCompoundUniqueInput = {
    bookId: string
    page: number
  }

  export type BookPageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    page?: SortOrder
    bookId?: SortOrder
  }

  export type BookPageAvgOrderByAggregateInput = {
    page?: SortOrder
  }

  export type BookPageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    page?: SortOrder
    bookId?: SortOrder
  }

  export type BookPageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    page?: SortOrder
    bookId?: SortOrder
  }

  export type BookPageSumOrderByAggregateInput = {
    page?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ShelfListRelationFilter = {
    every?: ShelfWhereInput
    some?: ShelfWhereInput
    none?: ShelfWhereInput
  }

  export type ShelfOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LibraryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LibraryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LibraryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LibraryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LibrarySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ShelfCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalBooks?: SortOrder
    libraryId?: SortOrder
  }

  export type ShelfAvgOrderByAggregateInput = {
    id?: SortOrder
    totalBooks?: SortOrder
    libraryId?: SortOrder
  }

  export type ShelfMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalBooks?: SortOrder
    libraryId?: SortOrder
  }

  export type ShelfMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalBooks?: SortOrder
    libraryId?: SortOrder
  }

  export type ShelfSumOrderByAggregateInput = {
    id?: SortOrder
    totalBooks?: SortOrder
    libraryId?: SortOrder
  }

  export type BookCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type LibraryCreateNestedOneWithoutUserInput = {
    create?: XOR<LibraryCreateWithoutUserInput, LibraryUncheckedCreateWithoutUserInput>
    connectOrCreate?: LibraryCreateOrConnectWithoutUserInput
    connect?: LibraryWhereUniqueInput
  }

  export type LoveCreateNestedManyWithoutUserInput = {
    create?: XOR<LoveCreateWithoutUserInput, LoveUncheckedCreateWithoutUserInput> | LoveCreateWithoutUserInput[] | LoveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoveCreateOrConnectWithoutUserInput | LoveCreateOrConnectWithoutUserInput[]
    createMany?: LoveCreateManyUserInputEnvelope
    connect?: LoveWhereUniqueInput | LoveWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type LibraryUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<LibraryCreateWithoutUserInput, LibraryUncheckedCreateWithoutUserInput>
    connectOrCreate?: LibraryCreateOrConnectWithoutUserInput
    connect?: LibraryWhereUniqueInput
  }

  export type LoveUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LoveCreateWithoutUserInput, LoveUncheckedCreateWithoutUserInput> | LoveCreateWithoutUserInput[] | LoveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoveCreateOrConnectWithoutUserInput | LoveCreateOrConnectWithoutUserInput[]
    createMany?: LoveCreateManyUserInputEnvelope
    connect?: LoveWhereUniqueInput | LoveWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutAuthorInput | BookUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutAuthorInput | BookUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BookUpdateManyWithWhereWithoutAuthorInput | BookUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type LibraryUpdateOneWithoutUserNestedInput = {
    create?: XOR<LibraryCreateWithoutUserInput, LibraryUncheckedCreateWithoutUserInput>
    connectOrCreate?: LibraryCreateOrConnectWithoutUserInput
    upsert?: LibraryUpsertWithoutUserInput
    disconnect?: LibraryWhereInput | boolean
    delete?: LibraryWhereInput | boolean
    connect?: LibraryWhereUniqueInput
    update?: XOR<XOR<LibraryUpdateToOneWithWhereWithoutUserInput, LibraryUpdateWithoutUserInput>, LibraryUncheckedUpdateWithoutUserInput>
  }

  export type LoveUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoveCreateWithoutUserInput, LoveUncheckedCreateWithoutUserInput> | LoveCreateWithoutUserInput[] | LoveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoveCreateOrConnectWithoutUserInput | LoveCreateOrConnectWithoutUserInput[]
    upsert?: LoveUpsertWithWhereUniqueWithoutUserInput | LoveUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoveCreateManyUserInputEnvelope
    set?: LoveWhereUniqueInput | LoveWhereUniqueInput[]
    disconnect?: LoveWhereUniqueInput | LoveWhereUniqueInput[]
    delete?: LoveWhereUniqueInput | LoveWhereUniqueInput[]
    connect?: LoveWhereUniqueInput | LoveWhereUniqueInput[]
    update?: LoveUpdateWithWhereUniqueWithoutUserInput | LoveUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoveUpdateManyWithWhereWithoutUserInput | LoveUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoveScalarWhereInput | LoveScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput> | BookCreateWithoutAuthorInput[] | BookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: BookCreateOrConnectWithoutAuthorInput | BookCreateOrConnectWithoutAuthorInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutAuthorInput | BookUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: BookCreateManyAuthorInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutAuthorInput | BookUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: BookUpdateManyWithWhereWithoutAuthorInput | BookUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type LibraryUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<LibraryCreateWithoutUserInput, LibraryUncheckedCreateWithoutUserInput>
    connectOrCreate?: LibraryCreateOrConnectWithoutUserInput
    upsert?: LibraryUpsertWithoutUserInput
    disconnect?: LibraryWhereInput | boolean
    delete?: LibraryWhereInput | boolean
    connect?: LibraryWhereUniqueInput
    update?: XOR<XOR<LibraryUpdateToOneWithWhereWithoutUserInput, LibraryUpdateWithoutUserInput>, LibraryUncheckedUpdateWithoutUserInput>
  }

  export type LoveUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoveCreateWithoutUserInput, LoveUncheckedCreateWithoutUserInput> | LoveCreateWithoutUserInput[] | LoveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoveCreateOrConnectWithoutUserInput | LoveCreateOrConnectWithoutUserInput[]
    upsert?: LoveUpsertWithWhereUniqueWithoutUserInput | LoveUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoveCreateManyUserInputEnvelope
    set?: LoveWhereUniqueInput | LoveWhereUniqueInput[]
    disconnect?: LoveWhereUniqueInput | LoveWhereUniqueInput[]
    delete?: LoveWhereUniqueInput | LoveWhereUniqueInput[]
    connect?: LoveWhereUniqueInput | LoveWhereUniqueInput[]
    update?: LoveUpdateWithWhereUniqueWithoutUserInput | LoveUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoveUpdateManyWithWhereWithoutUserInput | LoveUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoveScalarWhereInput | LoveScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBooksInput = {
    create?: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBooksInput
    connect?: UserWhereUniqueInput
  }

  export type BookPageCreateNestedManyWithoutBookInput = {
    create?: XOR<BookPageCreateWithoutBookInput, BookPageUncheckedCreateWithoutBookInput> | BookPageCreateWithoutBookInput[] | BookPageUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookPageCreateOrConnectWithoutBookInput | BookPageCreateOrConnectWithoutBookInput[]
    createMany?: BookPageCreateManyBookInputEnvelope
    connect?: BookPageWhereUniqueInput | BookPageWhereUniqueInput[]
  }

  export type BookGenreCreateNestedManyWithoutBookInput = {
    create?: XOR<BookGenreCreateWithoutBookInput, BookGenreUncheckedCreateWithoutBookInput> | BookGenreCreateWithoutBookInput[] | BookGenreUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookGenreCreateOrConnectWithoutBookInput | BookGenreCreateOrConnectWithoutBookInput[]
    createMany?: BookGenreCreateManyBookInputEnvelope
    connect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
  }

  export type LoveCreateNestedManyWithoutBookInput = {
    create?: XOR<LoveCreateWithoutBookInput, LoveUncheckedCreateWithoutBookInput> | LoveCreateWithoutBookInput[] | LoveUncheckedCreateWithoutBookInput[]
    connectOrCreate?: LoveCreateOrConnectWithoutBookInput | LoveCreateOrConnectWithoutBookInput[]
    createMany?: LoveCreateManyBookInputEnvelope
    connect?: LoveWhereUniqueInput | LoveWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutBookInput = {
    create?: XOR<CommentCreateWithoutBookInput, CommentUncheckedCreateWithoutBookInput> | CommentCreateWithoutBookInput[] | CommentUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBookInput | CommentCreateOrConnectWithoutBookInput[]
    createMany?: CommentCreateManyBookInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type BookLibraryCreateNestedManyWithoutBookInput = {
    create?: XOR<BookLibraryCreateWithoutBookInput, BookLibraryUncheckedCreateWithoutBookInput> | BookLibraryCreateWithoutBookInput[] | BookLibraryUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookLibraryCreateOrConnectWithoutBookInput | BookLibraryCreateOrConnectWithoutBookInput[]
    createMany?: BookLibraryCreateManyBookInputEnvelope
    connect?: BookLibraryWhereUniqueInput | BookLibraryWhereUniqueInput[]
  }

  export type BookShelfCreateNestedManyWithoutBookInput = {
    create?: XOR<BookShelfCreateWithoutBookInput, BookShelfUncheckedCreateWithoutBookInput> | BookShelfCreateWithoutBookInput[] | BookShelfUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookShelfCreateOrConnectWithoutBookInput | BookShelfCreateOrConnectWithoutBookInput[]
    createMany?: BookShelfCreateManyBookInputEnvelope
    connect?: BookShelfWhereUniqueInput | BookShelfWhereUniqueInput[]
  }

  export type BookPageUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BookPageCreateWithoutBookInput, BookPageUncheckedCreateWithoutBookInput> | BookPageCreateWithoutBookInput[] | BookPageUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookPageCreateOrConnectWithoutBookInput | BookPageCreateOrConnectWithoutBookInput[]
    createMany?: BookPageCreateManyBookInputEnvelope
    connect?: BookPageWhereUniqueInput | BookPageWhereUniqueInput[]
  }

  export type BookGenreUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BookGenreCreateWithoutBookInput, BookGenreUncheckedCreateWithoutBookInput> | BookGenreCreateWithoutBookInput[] | BookGenreUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookGenreCreateOrConnectWithoutBookInput | BookGenreCreateOrConnectWithoutBookInput[]
    createMany?: BookGenreCreateManyBookInputEnvelope
    connect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
  }

  export type LoveUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<LoveCreateWithoutBookInput, LoveUncheckedCreateWithoutBookInput> | LoveCreateWithoutBookInput[] | LoveUncheckedCreateWithoutBookInput[]
    connectOrCreate?: LoveCreateOrConnectWithoutBookInput | LoveCreateOrConnectWithoutBookInput[]
    createMany?: LoveCreateManyBookInputEnvelope
    connect?: LoveWhereUniqueInput | LoveWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<CommentCreateWithoutBookInput, CommentUncheckedCreateWithoutBookInput> | CommentCreateWithoutBookInput[] | CommentUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBookInput | CommentCreateOrConnectWithoutBookInput[]
    createMany?: CommentCreateManyBookInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type BookLibraryUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BookLibraryCreateWithoutBookInput, BookLibraryUncheckedCreateWithoutBookInput> | BookLibraryCreateWithoutBookInput[] | BookLibraryUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookLibraryCreateOrConnectWithoutBookInput | BookLibraryCreateOrConnectWithoutBookInput[]
    createMany?: BookLibraryCreateManyBookInputEnvelope
    connect?: BookLibraryWhereUniqueInput | BookLibraryWhereUniqueInput[]
  }

  export type BookShelfUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BookShelfCreateWithoutBookInput, BookShelfUncheckedCreateWithoutBookInput> | BookShelfCreateWithoutBookInput[] | BookShelfUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookShelfCreateOrConnectWithoutBookInput | BookShelfCreateOrConnectWithoutBookInput[]
    createMany?: BookShelfCreateManyBookInputEnvelope
    connect?: BookShelfWhereUniqueInput | BookShelfWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBooksInput
    upsert?: UserUpsertWithoutBooksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBooksInput, UserUpdateWithoutBooksInput>, UserUncheckedUpdateWithoutBooksInput>
  }

  export type BookPageUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookPageCreateWithoutBookInput, BookPageUncheckedCreateWithoutBookInput> | BookPageCreateWithoutBookInput[] | BookPageUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookPageCreateOrConnectWithoutBookInput | BookPageCreateOrConnectWithoutBookInput[]
    upsert?: BookPageUpsertWithWhereUniqueWithoutBookInput | BookPageUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookPageCreateManyBookInputEnvelope
    set?: BookPageWhereUniqueInput | BookPageWhereUniqueInput[]
    disconnect?: BookPageWhereUniqueInput | BookPageWhereUniqueInput[]
    delete?: BookPageWhereUniqueInput | BookPageWhereUniqueInput[]
    connect?: BookPageWhereUniqueInput | BookPageWhereUniqueInput[]
    update?: BookPageUpdateWithWhereUniqueWithoutBookInput | BookPageUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookPageUpdateManyWithWhereWithoutBookInput | BookPageUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookPageScalarWhereInput | BookPageScalarWhereInput[]
  }

  export type BookGenreUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookGenreCreateWithoutBookInput, BookGenreUncheckedCreateWithoutBookInput> | BookGenreCreateWithoutBookInput[] | BookGenreUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookGenreCreateOrConnectWithoutBookInput | BookGenreCreateOrConnectWithoutBookInput[]
    upsert?: BookGenreUpsertWithWhereUniqueWithoutBookInput | BookGenreUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookGenreCreateManyBookInputEnvelope
    set?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    disconnect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    delete?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    connect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    update?: BookGenreUpdateWithWhereUniqueWithoutBookInput | BookGenreUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookGenreUpdateManyWithWhereWithoutBookInput | BookGenreUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookGenreScalarWhereInput | BookGenreScalarWhereInput[]
  }

  export type LoveUpdateManyWithoutBookNestedInput = {
    create?: XOR<LoveCreateWithoutBookInput, LoveUncheckedCreateWithoutBookInput> | LoveCreateWithoutBookInput[] | LoveUncheckedCreateWithoutBookInput[]
    connectOrCreate?: LoveCreateOrConnectWithoutBookInput | LoveCreateOrConnectWithoutBookInput[]
    upsert?: LoveUpsertWithWhereUniqueWithoutBookInput | LoveUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: LoveCreateManyBookInputEnvelope
    set?: LoveWhereUniqueInput | LoveWhereUniqueInput[]
    disconnect?: LoveWhereUniqueInput | LoveWhereUniqueInput[]
    delete?: LoveWhereUniqueInput | LoveWhereUniqueInput[]
    connect?: LoveWhereUniqueInput | LoveWhereUniqueInput[]
    update?: LoveUpdateWithWhereUniqueWithoutBookInput | LoveUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: LoveUpdateManyWithWhereWithoutBookInput | LoveUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: LoveScalarWhereInput | LoveScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutBookNestedInput = {
    create?: XOR<CommentCreateWithoutBookInput, CommentUncheckedCreateWithoutBookInput> | CommentCreateWithoutBookInput[] | CommentUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBookInput | CommentCreateOrConnectWithoutBookInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutBookInput | CommentUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: CommentCreateManyBookInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutBookInput | CommentUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutBookInput | CommentUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type BookLibraryUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookLibraryCreateWithoutBookInput, BookLibraryUncheckedCreateWithoutBookInput> | BookLibraryCreateWithoutBookInput[] | BookLibraryUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookLibraryCreateOrConnectWithoutBookInput | BookLibraryCreateOrConnectWithoutBookInput[]
    upsert?: BookLibraryUpsertWithWhereUniqueWithoutBookInput | BookLibraryUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookLibraryCreateManyBookInputEnvelope
    set?: BookLibraryWhereUniqueInput | BookLibraryWhereUniqueInput[]
    disconnect?: BookLibraryWhereUniqueInput | BookLibraryWhereUniqueInput[]
    delete?: BookLibraryWhereUniqueInput | BookLibraryWhereUniqueInput[]
    connect?: BookLibraryWhereUniqueInput | BookLibraryWhereUniqueInput[]
    update?: BookLibraryUpdateWithWhereUniqueWithoutBookInput | BookLibraryUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookLibraryUpdateManyWithWhereWithoutBookInput | BookLibraryUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookLibraryScalarWhereInput | BookLibraryScalarWhereInput[]
  }

  export type BookShelfUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookShelfCreateWithoutBookInput, BookShelfUncheckedCreateWithoutBookInput> | BookShelfCreateWithoutBookInput[] | BookShelfUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookShelfCreateOrConnectWithoutBookInput | BookShelfCreateOrConnectWithoutBookInput[]
    upsert?: BookShelfUpsertWithWhereUniqueWithoutBookInput | BookShelfUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookShelfCreateManyBookInputEnvelope
    set?: BookShelfWhereUniqueInput | BookShelfWhereUniqueInput[]
    disconnect?: BookShelfWhereUniqueInput | BookShelfWhereUniqueInput[]
    delete?: BookShelfWhereUniqueInput | BookShelfWhereUniqueInput[]
    connect?: BookShelfWhereUniqueInput | BookShelfWhereUniqueInput[]
    update?: BookShelfUpdateWithWhereUniqueWithoutBookInput | BookShelfUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookShelfUpdateManyWithWhereWithoutBookInput | BookShelfUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookShelfScalarWhereInput | BookShelfScalarWhereInput[]
  }

  export type BookPageUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookPageCreateWithoutBookInput, BookPageUncheckedCreateWithoutBookInput> | BookPageCreateWithoutBookInput[] | BookPageUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookPageCreateOrConnectWithoutBookInput | BookPageCreateOrConnectWithoutBookInput[]
    upsert?: BookPageUpsertWithWhereUniqueWithoutBookInput | BookPageUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookPageCreateManyBookInputEnvelope
    set?: BookPageWhereUniqueInput | BookPageWhereUniqueInput[]
    disconnect?: BookPageWhereUniqueInput | BookPageWhereUniqueInput[]
    delete?: BookPageWhereUniqueInput | BookPageWhereUniqueInput[]
    connect?: BookPageWhereUniqueInput | BookPageWhereUniqueInput[]
    update?: BookPageUpdateWithWhereUniqueWithoutBookInput | BookPageUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookPageUpdateManyWithWhereWithoutBookInput | BookPageUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookPageScalarWhereInput | BookPageScalarWhereInput[]
  }

  export type BookGenreUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookGenreCreateWithoutBookInput, BookGenreUncheckedCreateWithoutBookInput> | BookGenreCreateWithoutBookInput[] | BookGenreUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookGenreCreateOrConnectWithoutBookInput | BookGenreCreateOrConnectWithoutBookInput[]
    upsert?: BookGenreUpsertWithWhereUniqueWithoutBookInput | BookGenreUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookGenreCreateManyBookInputEnvelope
    set?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    disconnect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    delete?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    connect?: BookGenreWhereUniqueInput | BookGenreWhereUniqueInput[]
    update?: BookGenreUpdateWithWhereUniqueWithoutBookInput | BookGenreUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookGenreUpdateManyWithWhereWithoutBookInput | BookGenreUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookGenreScalarWhereInput | BookGenreScalarWhereInput[]
  }

  export type LoveUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<LoveCreateWithoutBookInput, LoveUncheckedCreateWithoutBookInput> | LoveCreateWithoutBookInput[] | LoveUncheckedCreateWithoutBookInput[]
    connectOrCreate?: LoveCreateOrConnectWithoutBookInput | LoveCreateOrConnectWithoutBookInput[]
    upsert?: LoveUpsertWithWhereUniqueWithoutBookInput | LoveUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: LoveCreateManyBookInputEnvelope
    set?: LoveWhereUniqueInput | LoveWhereUniqueInput[]
    disconnect?: LoveWhereUniqueInput | LoveWhereUniqueInput[]
    delete?: LoveWhereUniqueInput | LoveWhereUniqueInput[]
    connect?: LoveWhereUniqueInput | LoveWhereUniqueInput[]
    update?: LoveUpdateWithWhereUniqueWithoutBookInput | LoveUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: LoveUpdateManyWithWhereWithoutBookInput | LoveUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: LoveScalarWhereInput | LoveScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<CommentCreateWithoutBookInput, CommentUncheckedCreateWithoutBookInput> | CommentCreateWithoutBookInput[] | CommentUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBookInput | CommentCreateOrConnectWithoutBookInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutBookInput | CommentUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: CommentCreateManyBookInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutBookInput | CommentUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutBookInput | CommentUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type BookLibraryUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookLibraryCreateWithoutBookInput, BookLibraryUncheckedCreateWithoutBookInput> | BookLibraryCreateWithoutBookInput[] | BookLibraryUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookLibraryCreateOrConnectWithoutBookInput | BookLibraryCreateOrConnectWithoutBookInput[]
    upsert?: BookLibraryUpsertWithWhereUniqueWithoutBookInput | BookLibraryUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookLibraryCreateManyBookInputEnvelope
    set?: BookLibraryWhereUniqueInput | BookLibraryWhereUniqueInput[]
    disconnect?: BookLibraryWhereUniqueInput | BookLibraryWhereUniqueInput[]
    delete?: BookLibraryWhereUniqueInput | BookLibraryWhereUniqueInput[]
    connect?: BookLibraryWhereUniqueInput | BookLibraryWhereUniqueInput[]
    update?: BookLibraryUpdateWithWhereUniqueWithoutBookInput | BookLibraryUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookLibraryUpdateManyWithWhereWithoutBookInput | BookLibraryUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookLibraryScalarWhereInput | BookLibraryScalarWhereInput[]
  }

  export type BookShelfUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookShelfCreateWithoutBookInput, BookShelfUncheckedCreateWithoutBookInput> | BookShelfCreateWithoutBookInput[] | BookShelfUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookShelfCreateOrConnectWithoutBookInput | BookShelfCreateOrConnectWithoutBookInput[]
    upsert?: BookShelfUpsertWithWhereUniqueWithoutBookInput | BookShelfUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookShelfCreateManyBookInputEnvelope
    set?: BookShelfWhereUniqueInput | BookShelfWhereUniqueInput[]
    disconnect?: BookShelfWhereUniqueInput | BookShelfWhereUniqueInput[]
    delete?: BookShelfWhereUniqueInput | BookShelfWhereUniqueInput[]
    connect?: BookShelfWhereUniqueInput | BookShelfWhereUniqueInput[]
    update?: BookShelfUpdateWithWhereUniqueWithoutBookInput | BookShelfUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookShelfUpdateManyWithWhereWithoutBookInput | BookShelfUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookShelfScalarWhereInput | BookShelfScalarWhereInput[]
  }

  export type BookCreateNestedOneWithoutGenresInput = {
    create?: XOR<BookCreateWithoutGenresInput, BookUncheckedCreateWithoutGenresInput>
    connectOrCreate?: BookCreateOrConnectWithoutGenresInput
    connect?: BookWhereUniqueInput
  }

  export type EnumGenresFieldUpdateOperationsInput = {
    set?: $Enums.Genres
  }

  export type BookUpdateOneRequiredWithoutGenresNestedInput = {
    create?: XOR<BookCreateWithoutGenresInput, BookUncheckedCreateWithoutGenresInput>
    connectOrCreate?: BookCreateOrConnectWithoutGenresInput
    upsert?: BookUpsertWithoutGenresInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutGenresInput, BookUpdateWithoutGenresInput>, BookUncheckedUpdateWithoutGenresInput>
  }

  export type BookCreateNestedOneWithoutLibrariesInput = {
    create?: XOR<BookCreateWithoutLibrariesInput, BookUncheckedCreateWithoutLibrariesInput>
    connectOrCreate?: BookCreateOrConnectWithoutLibrariesInput
    connect?: BookWhereUniqueInput
  }

  export type LibraryCreateNestedOneWithoutBooksInput = {
    create?: XOR<LibraryCreateWithoutBooksInput, LibraryUncheckedCreateWithoutBooksInput>
    connectOrCreate?: LibraryCreateOrConnectWithoutBooksInput
    connect?: LibraryWhereUniqueInput
  }

  export type BookUpdateOneRequiredWithoutLibrariesNestedInput = {
    create?: XOR<BookCreateWithoutLibrariesInput, BookUncheckedCreateWithoutLibrariesInput>
    connectOrCreate?: BookCreateOrConnectWithoutLibrariesInput
    upsert?: BookUpsertWithoutLibrariesInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutLibrariesInput, BookUpdateWithoutLibrariesInput>, BookUncheckedUpdateWithoutLibrariesInput>
  }

  export type LibraryUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<LibraryCreateWithoutBooksInput, LibraryUncheckedCreateWithoutBooksInput>
    connectOrCreate?: LibraryCreateOrConnectWithoutBooksInput
    upsert?: LibraryUpsertWithoutBooksInput
    connect?: LibraryWhereUniqueInput
    update?: XOR<XOR<LibraryUpdateToOneWithWhereWithoutBooksInput, LibraryUpdateWithoutBooksInput>, LibraryUncheckedUpdateWithoutBooksInput>
  }

  export type BookCreateNestedOneWithoutShelvesInput = {
    create?: XOR<BookCreateWithoutShelvesInput, BookUncheckedCreateWithoutShelvesInput>
    connectOrCreate?: BookCreateOrConnectWithoutShelvesInput
    connect?: BookWhereUniqueInput
  }

  export type ShelfCreateNestedOneWithoutBooksInput = {
    create?: XOR<ShelfCreateWithoutBooksInput, ShelfUncheckedCreateWithoutBooksInput>
    connectOrCreate?: ShelfCreateOrConnectWithoutBooksInput
    connect?: ShelfWhereUniqueInput
  }

  export type BookUpdateOneRequiredWithoutShelvesNestedInput = {
    create?: XOR<BookCreateWithoutShelvesInput, BookUncheckedCreateWithoutShelvesInput>
    connectOrCreate?: BookCreateOrConnectWithoutShelvesInput
    upsert?: BookUpsertWithoutShelvesInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutShelvesInput, BookUpdateWithoutShelvesInput>, BookUncheckedUpdateWithoutShelvesInput>
  }

  export type ShelfUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<ShelfCreateWithoutBooksInput, ShelfUncheckedCreateWithoutBooksInput>
    connectOrCreate?: ShelfCreateOrConnectWithoutBooksInput
    upsert?: ShelfUpsertWithoutBooksInput
    connect?: ShelfWhereUniqueInput
    update?: XOR<XOR<ShelfUpdateToOneWithWhereWithoutBooksInput, ShelfUpdateWithoutBooksInput>, ShelfUncheckedUpdateWithoutBooksInput>
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type BookCreateNestedOneWithoutCommentsInput = {
    create?: XOR<BookCreateWithoutCommentsInput, BookUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BookCreateOrConnectWithoutCommentsInput
    connect?: BookWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type BookUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<BookCreateWithoutCommentsInput, BookUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BookCreateOrConnectWithoutCommentsInput
    upsert?: BookUpsertWithoutCommentsInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutCommentsInput, BookUpdateWithoutCommentsInput>, BookUncheckedUpdateWithoutCommentsInput>
  }

  export type UserCreateNestedOneWithoutLovesInput = {
    create?: XOR<UserCreateWithoutLovesInput, UserUncheckedCreateWithoutLovesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLovesInput
    connect?: UserWhereUniqueInput
  }

  export type BookCreateNestedOneWithoutLovesInput = {
    create?: XOR<BookCreateWithoutLovesInput, BookUncheckedCreateWithoutLovesInput>
    connectOrCreate?: BookCreateOrConnectWithoutLovesInput
    connect?: BookWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLovesNestedInput = {
    create?: XOR<UserCreateWithoutLovesInput, UserUncheckedCreateWithoutLovesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLovesInput
    upsert?: UserUpsertWithoutLovesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLovesInput, UserUpdateWithoutLovesInput>, UserUncheckedUpdateWithoutLovesInput>
  }

  export type BookUpdateOneRequiredWithoutLovesNestedInput = {
    create?: XOR<BookCreateWithoutLovesInput, BookUncheckedCreateWithoutLovesInput>
    connectOrCreate?: BookCreateOrConnectWithoutLovesInput
    upsert?: BookUpsertWithoutLovesInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutLovesInput, BookUpdateWithoutLovesInput>, BookUncheckedUpdateWithoutLovesInput>
  }

  export type BookCreateNestedOneWithoutPagesInput = {
    create?: XOR<BookCreateWithoutPagesInput, BookUncheckedCreateWithoutPagesInput>
    connectOrCreate?: BookCreateOrConnectWithoutPagesInput
    connect?: BookWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BookUpdateOneRequiredWithoutPagesNestedInput = {
    create?: XOR<BookCreateWithoutPagesInput, BookUncheckedCreateWithoutPagesInput>
    connectOrCreate?: BookCreateOrConnectWithoutPagesInput
    upsert?: BookUpsertWithoutPagesInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutPagesInput, BookUpdateWithoutPagesInput>, BookUncheckedUpdateWithoutPagesInput>
  }

  export type UserCreateNestedOneWithoutLibraryInput = {
    create?: XOR<UserCreateWithoutLibraryInput, UserUncheckedCreateWithoutLibraryInput>
    connectOrCreate?: UserCreateOrConnectWithoutLibraryInput
    connect?: UserWhereUniqueInput
  }

  export type BookLibraryCreateNestedManyWithoutLibraryInput = {
    create?: XOR<BookLibraryCreateWithoutLibraryInput, BookLibraryUncheckedCreateWithoutLibraryInput> | BookLibraryCreateWithoutLibraryInput[] | BookLibraryUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: BookLibraryCreateOrConnectWithoutLibraryInput | BookLibraryCreateOrConnectWithoutLibraryInput[]
    createMany?: BookLibraryCreateManyLibraryInputEnvelope
    connect?: BookLibraryWhereUniqueInput | BookLibraryWhereUniqueInput[]
  }

  export type ShelfCreateNestedManyWithoutLibraryInput = {
    create?: XOR<ShelfCreateWithoutLibraryInput, ShelfUncheckedCreateWithoutLibraryInput> | ShelfCreateWithoutLibraryInput[] | ShelfUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: ShelfCreateOrConnectWithoutLibraryInput | ShelfCreateOrConnectWithoutLibraryInput[]
    createMany?: ShelfCreateManyLibraryInputEnvelope
    connect?: ShelfWhereUniqueInput | ShelfWhereUniqueInput[]
  }

  export type BookLibraryUncheckedCreateNestedManyWithoutLibraryInput = {
    create?: XOR<BookLibraryCreateWithoutLibraryInput, BookLibraryUncheckedCreateWithoutLibraryInput> | BookLibraryCreateWithoutLibraryInput[] | BookLibraryUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: BookLibraryCreateOrConnectWithoutLibraryInput | BookLibraryCreateOrConnectWithoutLibraryInput[]
    createMany?: BookLibraryCreateManyLibraryInputEnvelope
    connect?: BookLibraryWhereUniqueInput | BookLibraryWhereUniqueInput[]
  }

  export type ShelfUncheckedCreateNestedManyWithoutLibraryInput = {
    create?: XOR<ShelfCreateWithoutLibraryInput, ShelfUncheckedCreateWithoutLibraryInput> | ShelfCreateWithoutLibraryInput[] | ShelfUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: ShelfCreateOrConnectWithoutLibraryInput | ShelfCreateOrConnectWithoutLibraryInput[]
    createMany?: ShelfCreateManyLibraryInputEnvelope
    connect?: ShelfWhereUniqueInput | ShelfWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutLibraryNestedInput = {
    create?: XOR<UserCreateWithoutLibraryInput, UserUncheckedCreateWithoutLibraryInput>
    connectOrCreate?: UserCreateOrConnectWithoutLibraryInput
    upsert?: UserUpsertWithoutLibraryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLibraryInput, UserUpdateWithoutLibraryInput>, UserUncheckedUpdateWithoutLibraryInput>
  }

  export type BookLibraryUpdateManyWithoutLibraryNestedInput = {
    create?: XOR<BookLibraryCreateWithoutLibraryInput, BookLibraryUncheckedCreateWithoutLibraryInput> | BookLibraryCreateWithoutLibraryInput[] | BookLibraryUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: BookLibraryCreateOrConnectWithoutLibraryInput | BookLibraryCreateOrConnectWithoutLibraryInput[]
    upsert?: BookLibraryUpsertWithWhereUniqueWithoutLibraryInput | BookLibraryUpsertWithWhereUniqueWithoutLibraryInput[]
    createMany?: BookLibraryCreateManyLibraryInputEnvelope
    set?: BookLibraryWhereUniqueInput | BookLibraryWhereUniqueInput[]
    disconnect?: BookLibraryWhereUniqueInput | BookLibraryWhereUniqueInput[]
    delete?: BookLibraryWhereUniqueInput | BookLibraryWhereUniqueInput[]
    connect?: BookLibraryWhereUniqueInput | BookLibraryWhereUniqueInput[]
    update?: BookLibraryUpdateWithWhereUniqueWithoutLibraryInput | BookLibraryUpdateWithWhereUniqueWithoutLibraryInput[]
    updateMany?: BookLibraryUpdateManyWithWhereWithoutLibraryInput | BookLibraryUpdateManyWithWhereWithoutLibraryInput[]
    deleteMany?: BookLibraryScalarWhereInput | BookLibraryScalarWhereInput[]
  }

  export type ShelfUpdateManyWithoutLibraryNestedInput = {
    create?: XOR<ShelfCreateWithoutLibraryInput, ShelfUncheckedCreateWithoutLibraryInput> | ShelfCreateWithoutLibraryInput[] | ShelfUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: ShelfCreateOrConnectWithoutLibraryInput | ShelfCreateOrConnectWithoutLibraryInput[]
    upsert?: ShelfUpsertWithWhereUniqueWithoutLibraryInput | ShelfUpsertWithWhereUniqueWithoutLibraryInput[]
    createMany?: ShelfCreateManyLibraryInputEnvelope
    set?: ShelfWhereUniqueInput | ShelfWhereUniqueInput[]
    disconnect?: ShelfWhereUniqueInput | ShelfWhereUniqueInput[]
    delete?: ShelfWhereUniqueInput | ShelfWhereUniqueInput[]
    connect?: ShelfWhereUniqueInput | ShelfWhereUniqueInput[]
    update?: ShelfUpdateWithWhereUniqueWithoutLibraryInput | ShelfUpdateWithWhereUniqueWithoutLibraryInput[]
    updateMany?: ShelfUpdateManyWithWhereWithoutLibraryInput | ShelfUpdateManyWithWhereWithoutLibraryInput[]
    deleteMany?: ShelfScalarWhereInput | ShelfScalarWhereInput[]
  }

  export type BookLibraryUncheckedUpdateManyWithoutLibraryNestedInput = {
    create?: XOR<BookLibraryCreateWithoutLibraryInput, BookLibraryUncheckedCreateWithoutLibraryInput> | BookLibraryCreateWithoutLibraryInput[] | BookLibraryUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: BookLibraryCreateOrConnectWithoutLibraryInput | BookLibraryCreateOrConnectWithoutLibraryInput[]
    upsert?: BookLibraryUpsertWithWhereUniqueWithoutLibraryInput | BookLibraryUpsertWithWhereUniqueWithoutLibraryInput[]
    createMany?: BookLibraryCreateManyLibraryInputEnvelope
    set?: BookLibraryWhereUniqueInput | BookLibraryWhereUniqueInput[]
    disconnect?: BookLibraryWhereUniqueInput | BookLibraryWhereUniqueInput[]
    delete?: BookLibraryWhereUniqueInput | BookLibraryWhereUniqueInput[]
    connect?: BookLibraryWhereUniqueInput | BookLibraryWhereUniqueInput[]
    update?: BookLibraryUpdateWithWhereUniqueWithoutLibraryInput | BookLibraryUpdateWithWhereUniqueWithoutLibraryInput[]
    updateMany?: BookLibraryUpdateManyWithWhereWithoutLibraryInput | BookLibraryUpdateManyWithWhereWithoutLibraryInput[]
    deleteMany?: BookLibraryScalarWhereInput | BookLibraryScalarWhereInput[]
  }

  export type ShelfUncheckedUpdateManyWithoutLibraryNestedInput = {
    create?: XOR<ShelfCreateWithoutLibraryInput, ShelfUncheckedCreateWithoutLibraryInput> | ShelfCreateWithoutLibraryInput[] | ShelfUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: ShelfCreateOrConnectWithoutLibraryInput | ShelfCreateOrConnectWithoutLibraryInput[]
    upsert?: ShelfUpsertWithWhereUniqueWithoutLibraryInput | ShelfUpsertWithWhereUniqueWithoutLibraryInput[]
    createMany?: ShelfCreateManyLibraryInputEnvelope
    set?: ShelfWhereUniqueInput | ShelfWhereUniqueInput[]
    disconnect?: ShelfWhereUniqueInput | ShelfWhereUniqueInput[]
    delete?: ShelfWhereUniqueInput | ShelfWhereUniqueInput[]
    connect?: ShelfWhereUniqueInput | ShelfWhereUniqueInput[]
    update?: ShelfUpdateWithWhereUniqueWithoutLibraryInput | ShelfUpdateWithWhereUniqueWithoutLibraryInput[]
    updateMany?: ShelfUpdateManyWithWhereWithoutLibraryInput | ShelfUpdateManyWithWhereWithoutLibraryInput[]
    deleteMany?: ShelfScalarWhereInput | ShelfScalarWhereInput[]
  }

  export type LibraryCreateNestedOneWithoutShelvesInput = {
    create?: XOR<LibraryCreateWithoutShelvesInput, LibraryUncheckedCreateWithoutShelvesInput>
    connectOrCreate?: LibraryCreateOrConnectWithoutShelvesInput
    connect?: LibraryWhereUniqueInput
  }

  export type BookShelfCreateNestedManyWithoutShelfInput = {
    create?: XOR<BookShelfCreateWithoutShelfInput, BookShelfUncheckedCreateWithoutShelfInput> | BookShelfCreateWithoutShelfInput[] | BookShelfUncheckedCreateWithoutShelfInput[]
    connectOrCreate?: BookShelfCreateOrConnectWithoutShelfInput | BookShelfCreateOrConnectWithoutShelfInput[]
    createMany?: BookShelfCreateManyShelfInputEnvelope
    connect?: BookShelfWhereUniqueInput | BookShelfWhereUniqueInput[]
  }

  export type BookShelfUncheckedCreateNestedManyWithoutShelfInput = {
    create?: XOR<BookShelfCreateWithoutShelfInput, BookShelfUncheckedCreateWithoutShelfInput> | BookShelfCreateWithoutShelfInput[] | BookShelfUncheckedCreateWithoutShelfInput[]
    connectOrCreate?: BookShelfCreateOrConnectWithoutShelfInput | BookShelfCreateOrConnectWithoutShelfInput[]
    createMany?: BookShelfCreateManyShelfInputEnvelope
    connect?: BookShelfWhereUniqueInput | BookShelfWhereUniqueInput[]
  }

  export type LibraryUpdateOneRequiredWithoutShelvesNestedInput = {
    create?: XOR<LibraryCreateWithoutShelvesInput, LibraryUncheckedCreateWithoutShelvesInput>
    connectOrCreate?: LibraryCreateOrConnectWithoutShelvesInput
    upsert?: LibraryUpsertWithoutShelvesInput
    connect?: LibraryWhereUniqueInput
    update?: XOR<XOR<LibraryUpdateToOneWithWhereWithoutShelvesInput, LibraryUpdateWithoutShelvesInput>, LibraryUncheckedUpdateWithoutShelvesInput>
  }

  export type BookShelfUpdateManyWithoutShelfNestedInput = {
    create?: XOR<BookShelfCreateWithoutShelfInput, BookShelfUncheckedCreateWithoutShelfInput> | BookShelfCreateWithoutShelfInput[] | BookShelfUncheckedCreateWithoutShelfInput[]
    connectOrCreate?: BookShelfCreateOrConnectWithoutShelfInput | BookShelfCreateOrConnectWithoutShelfInput[]
    upsert?: BookShelfUpsertWithWhereUniqueWithoutShelfInput | BookShelfUpsertWithWhereUniqueWithoutShelfInput[]
    createMany?: BookShelfCreateManyShelfInputEnvelope
    set?: BookShelfWhereUniqueInput | BookShelfWhereUniqueInput[]
    disconnect?: BookShelfWhereUniqueInput | BookShelfWhereUniqueInput[]
    delete?: BookShelfWhereUniqueInput | BookShelfWhereUniqueInput[]
    connect?: BookShelfWhereUniqueInput | BookShelfWhereUniqueInput[]
    update?: BookShelfUpdateWithWhereUniqueWithoutShelfInput | BookShelfUpdateWithWhereUniqueWithoutShelfInput[]
    updateMany?: BookShelfUpdateManyWithWhereWithoutShelfInput | BookShelfUpdateManyWithWhereWithoutShelfInput[]
    deleteMany?: BookShelfScalarWhereInput | BookShelfScalarWhereInput[]
  }

  export type BookShelfUncheckedUpdateManyWithoutShelfNestedInput = {
    create?: XOR<BookShelfCreateWithoutShelfInput, BookShelfUncheckedCreateWithoutShelfInput> | BookShelfCreateWithoutShelfInput[] | BookShelfUncheckedCreateWithoutShelfInput[]
    connectOrCreate?: BookShelfCreateOrConnectWithoutShelfInput | BookShelfCreateOrConnectWithoutShelfInput[]
    upsert?: BookShelfUpsertWithWhereUniqueWithoutShelfInput | BookShelfUpsertWithWhereUniqueWithoutShelfInput[]
    createMany?: BookShelfCreateManyShelfInputEnvelope
    set?: BookShelfWhereUniqueInput | BookShelfWhereUniqueInput[]
    disconnect?: BookShelfWhereUniqueInput | BookShelfWhereUniqueInput[]
    delete?: BookShelfWhereUniqueInput | BookShelfWhereUniqueInput[]
    connect?: BookShelfWhereUniqueInput | BookShelfWhereUniqueInput[]
    update?: BookShelfUpdateWithWhereUniqueWithoutShelfInput | BookShelfUpdateWithWhereUniqueWithoutShelfInput[]
    updateMany?: BookShelfUpdateManyWithWhereWithoutShelfInput | BookShelfUpdateManyWithWhereWithoutShelfInput[]
    deleteMany?: BookShelfScalarWhereInput | BookShelfScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumGenresFilter<$PrismaModel = never> = {
    equals?: $Enums.Genres | EnumGenresFieldRefInput<$PrismaModel>
    in?: $Enums.Genres[] | ListEnumGenresFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genres[] | ListEnumGenresFieldRefInput<$PrismaModel>
    not?: NestedEnumGenresFilter<$PrismaModel> | $Enums.Genres
  }

  export type NestedEnumGenresWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Genres | EnumGenresFieldRefInput<$PrismaModel>
    in?: $Enums.Genres[] | ListEnumGenresFieldRefInput<$PrismaModel>
    notIn?: $Enums.Genres[] | ListEnumGenresFieldRefInput<$PrismaModel>
    not?: NestedEnumGenresWithAggregatesFilter<$PrismaModel> | $Enums.Genres
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenresFilter<$PrismaModel>
    _max?: NestedEnumGenresFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BookCreateWithoutAuthorInput = {
    id?: string
    title: string
    pages?: BookPageCreateNestedManyWithoutBookInput
    genres?: BookGenreCreateNestedManyWithoutBookInput
    loves?: LoveCreateNestedManyWithoutBookInput
    comments?: CommentCreateNestedManyWithoutBookInput
    libraries?: BookLibraryCreateNestedManyWithoutBookInput
    shelves?: BookShelfCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    pages?: BookPageUncheckedCreateNestedManyWithoutBookInput
    genres?: BookGenreUncheckedCreateNestedManyWithoutBookInput
    loves?: LoveUncheckedCreateNestedManyWithoutBookInput
    comments?: CommentUncheckedCreateNestedManyWithoutBookInput
    libraries?: BookLibraryUncheckedCreateNestedManyWithoutBookInput
    shelves?: BookShelfUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutAuthorInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput>
  }

  export type BookCreateManyAuthorInputEnvelope = {
    data: BookCreateManyAuthorInput | BookCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type LibraryCreateWithoutUserInput = {
    books?: BookLibraryCreateNestedManyWithoutLibraryInput
    shelves?: ShelfCreateNestedManyWithoutLibraryInput
  }

  export type LibraryUncheckedCreateWithoutUserInput = {
    id?: number
    books?: BookLibraryUncheckedCreateNestedManyWithoutLibraryInput
    shelves?: ShelfUncheckedCreateNestedManyWithoutLibraryInput
  }

  export type LibraryCreateOrConnectWithoutUserInput = {
    where: LibraryWhereUniqueInput
    create: XOR<LibraryCreateWithoutUserInput, LibraryUncheckedCreateWithoutUserInput>
  }

  export type LoveCreateWithoutUserInput = {
    createdAt?: Date | string
    book: BookCreateNestedOneWithoutLovesInput
  }

  export type LoveUncheckedCreateWithoutUserInput = {
    id?: number
    bookId: string
    createdAt?: Date | string
  }

  export type LoveCreateOrConnectWithoutUserInput = {
    where: LoveWhereUniqueInput
    create: XOR<LoveCreateWithoutUserInput, LoveUncheckedCreateWithoutUserInput>
  }

  export type LoveCreateManyUserInputEnvelope = {
    data: LoveCreateManyUserInput | LoveCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    content: string
    createdAt?: Date | string
    book: BookCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: number
    content: string
    bookId: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutAuthorInput, BookUncheckedUpdateWithoutAuthorInput>
    create: XOR<BookCreateWithoutAuthorInput, BookUncheckedCreateWithoutAuthorInput>
  }

  export type BookUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutAuthorInput, BookUncheckedUpdateWithoutAuthorInput>
  }

  export type BookUpdateManyWithWhereWithoutAuthorInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutAuthorInput>
  }

  export type BookScalarWhereInput = {
    AND?: BookScalarWhereInput | BookScalarWhereInput[]
    OR?: BookScalarWhereInput[]
    NOT?: BookScalarWhereInput | BookScalarWhereInput[]
    id?: StringFilter<"Book"> | string
    title?: StringFilter<"Book"> | string
    userId?: IntFilter<"Book"> | number
  }

  export type LibraryUpsertWithoutUserInput = {
    update: XOR<LibraryUpdateWithoutUserInput, LibraryUncheckedUpdateWithoutUserInput>
    create: XOR<LibraryCreateWithoutUserInput, LibraryUncheckedCreateWithoutUserInput>
    where?: LibraryWhereInput
  }

  export type LibraryUpdateToOneWithWhereWithoutUserInput = {
    where?: LibraryWhereInput
    data: XOR<LibraryUpdateWithoutUserInput, LibraryUncheckedUpdateWithoutUserInput>
  }

  export type LibraryUpdateWithoutUserInput = {
    books?: BookLibraryUpdateManyWithoutLibraryNestedInput
    shelves?: ShelfUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    books?: BookLibraryUncheckedUpdateManyWithoutLibraryNestedInput
    shelves?: ShelfUncheckedUpdateManyWithoutLibraryNestedInput
  }

  export type LoveUpsertWithWhereUniqueWithoutUserInput = {
    where: LoveWhereUniqueInput
    update: XOR<LoveUpdateWithoutUserInput, LoveUncheckedUpdateWithoutUserInput>
    create: XOR<LoveCreateWithoutUserInput, LoveUncheckedCreateWithoutUserInput>
  }

  export type LoveUpdateWithWhereUniqueWithoutUserInput = {
    where: LoveWhereUniqueInput
    data: XOR<LoveUpdateWithoutUserInput, LoveUncheckedUpdateWithoutUserInput>
  }

  export type LoveUpdateManyWithWhereWithoutUserInput = {
    where: LoveScalarWhereInput
    data: XOR<LoveUpdateManyMutationInput, LoveUncheckedUpdateManyWithoutUserInput>
  }

  export type LoveScalarWhereInput = {
    AND?: LoveScalarWhereInput | LoveScalarWhereInput[]
    OR?: LoveScalarWhereInput[]
    NOT?: LoveScalarWhereInput | LoveScalarWhereInput[]
    id?: IntFilter<"Love"> | number
    userId?: IntFilter<"Love"> | number
    bookId?: StringFilter<"Love"> | string
    createdAt?: DateTimeFilter<"Love"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    userId?: IntFilter<"Comment"> | number
    bookId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type UserCreateWithoutBooksInput = {
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    library?: LibraryCreateNestedOneWithoutUserInput
    loves?: LoveCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBooksInput = {
    id?: number
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    library?: LibraryUncheckedCreateNestedOneWithoutUserInput
    loves?: LoveUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBooksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
  }

  export type BookPageCreateWithoutBookInput = {
    id?: string
    content?: string | null
    page?: number
  }

  export type BookPageUncheckedCreateWithoutBookInput = {
    id?: string
    content?: string | null
    page?: number
  }

  export type BookPageCreateOrConnectWithoutBookInput = {
    where: BookPageWhereUniqueInput
    create: XOR<BookPageCreateWithoutBookInput, BookPageUncheckedCreateWithoutBookInput>
  }

  export type BookPageCreateManyBookInputEnvelope = {
    data: BookPageCreateManyBookInput | BookPageCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type BookGenreCreateWithoutBookInput = {
    genre: $Enums.Genres
    createdAt?: Date | string
  }

  export type BookGenreUncheckedCreateWithoutBookInput = {
    id?: number
    genre: $Enums.Genres
    createdAt?: Date | string
  }

  export type BookGenreCreateOrConnectWithoutBookInput = {
    where: BookGenreWhereUniqueInput
    create: XOR<BookGenreCreateWithoutBookInput, BookGenreUncheckedCreateWithoutBookInput>
  }

  export type BookGenreCreateManyBookInputEnvelope = {
    data: BookGenreCreateManyBookInput | BookGenreCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type LoveCreateWithoutBookInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLovesInput
  }

  export type LoveUncheckedCreateWithoutBookInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type LoveCreateOrConnectWithoutBookInput = {
    where: LoveWhereUniqueInput
    create: XOR<LoveCreateWithoutBookInput, LoveUncheckedCreateWithoutBookInput>
  }

  export type LoveCreateManyBookInputEnvelope = {
    data: LoveCreateManyBookInput | LoveCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutBookInput = {
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutBookInput = {
    id?: number
    content: string
    userId: number
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutBookInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutBookInput, CommentUncheckedCreateWithoutBookInput>
  }

  export type CommentCreateManyBookInputEnvelope = {
    data: CommentCreateManyBookInput | CommentCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type BookLibraryCreateWithoutBookInput = {
    createdAt?: Date | string
    library: LibraryCreateNestedOneWithoutBooksInput
  }

  export type BookLibraryUncheckedCreateWithoutBookInput = {
    id?: number
    libraryId: number
    createdAt?: Date | string
  }

  export type BookLibraryCreateOrConnectWithoutBookInput = {
    where: BookLibraryWhereUniqueInput
    create: XOR<BookLibraryCreateWithoutBookInput, BookLibraryUncheckedCreateWithoutBookInput>
  }

  export type BookLibraryCreateManyBookInputEnvelope = {
    data: BookLibraryCreateManyBookInput | BookLibraryCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type BookShelfCreateWithoutBookInput = {
    createdAt?: Date | string
    shelf: ShelfCreateNestedOneWithoutBooksInput
  }

  export type BookShelfUncheckedCreateWithoutBookInput = {
    id?: number
    shelfId: number
    createdAt?: Date | string
  }

  export type BookShelfCreateOrConnectWithoutBookInput = {
    where: BookShelfWhereUniqueInput
    create: XOR<BookShelfCreateWithoutBookInput, BookShelfUncheckedCreateWithoutBookInput>
  }

  export type BookShelfCreateManyBookInputEnvelope = {
    data: BookShelfCreateManyBookInput | BookShelfCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBooksInput = {
    update: XOR<UserUpdateWithoutBooksInput, UserUncheckedUpdateWithoutBooksInput>
    create: XOR<UserCreateWithoutBooksInput, UserUncheckedCreateWithoutBooksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBooksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBooksInput, UserUncheckedUpdateWithoutBooksInput>
  }

  export type UserUpdateWithoutBooksInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    library?: LibraryUpdateOneWithoutUserNestedInput
    loves?: LoveUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    library?: LibraryUncheckedUpdateOneWithoutUserNestedInput
    loves?: LoveUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookPageUpsertWithWhereUniqueWithoutBookInput = {
    where: BookPageWhereUniqueInput
    update: XOR<BookPageUpdateWithoutBookInput, BookPageUncheckedUpdateWithoutBookInput>
    create: XOR<BookPageCreateWithoutBookInput, BookPageUncheckedCreateWithoutBookInput>
  }

  export type BookPageUpdateWithWhereUniqueWithoutBookInput = {
    where: BookPageWhereUniqueInput
    data: XOR<BookPageUpdateWithoutBookInput, BookPageUncheckedUpdateWithoutBookInput>
  }

  export type BookPageUpdateManyWithWhereWithoutBookInput = {
    where: BookPageScalarWhereInput
    data: XOR<BookPageUpdateManyMutationInput, BookPageUncheckedUpdateManyWithoutBookInput>
  }

  export type BookPageScalarWhereInput = {
    AND?: BookPageScalarWhereInput | BookPageScalarWhereInput[]
    OR?: BookPageScalarWhereInput[]
    NOT?: BookPageScalarWhereInput | BookPageScalarWhereInput[]
    id?: StringFilter<"BookPage"> | string
    content?: StringNullableFilter<"BookPage"> | string | null
    page?: IntFilter<"BookPage"> | number
    bookId?: StringFilter<"BookPage"> | string
  }

  export type BookGenreUpsertWithWhereUniqueWithoutBookInput = {
    where: BookGenreWhereUniqueInput
    update: XOR<BookGenreUpdateWithoutBookInput, BookGenreUncheckedUpdateWithoutBookInput>
    create: XOR<BookGenreCreateWithoutBookInput, BookGenreUncheckedCreateWithoutBookInput>
  }

  export type BookGenreUpdateWithWhereUniqueWithoutBookInput = {
    where: BookGenreWhereUniqueInput
    data: XOR<BookGenreUpdateWithoutBookInput, BookGenreUncheckedUpdateWithoutBookInput>
  }

  export type BookGenreUpdateManyWithWhereWithoutBookInput = {
    where: BookGenreScalarWhereInput
    data: XOR<BookGenreUpdateManyMutationInput, BookGenreUncheckedUpdateManyWithoutBookInput>
  }

  export type BookGenreScalarWhereInput = {
    AND?: BookGenreScalarWhereInput | BookGenreScalarWhereInput[]
    OR?: BookGenreScalarWhereInput[]
    NOT?: BookGenreScalarWhereInput | BookGenreScalarWhereInput[]
    id?: IntFilter<"BookGenre"> | number
    bookId?: StringFilter<"BookGenre"> | string
    genre?: EnumGenresFilter<"BookGenre"> | $Enums.Genres
    createdAt?: DateTimeFilter<"BookGenre"> | Date | string
  }

  export type LoveUpsertWithWhereUniqueWithoutBookInput = {
    where: LoveWhereUniqueInput
    update: XOR<LoveUpdateWithoutBookInput, LoveUncheckedUpdateWithoutBookInput>
    create: XOR<LoveCreateWithoutBookInput, LoveUncheckedCreateWithoutBookInput>
  }

  export type LoveUpdateWithWhereUniqueWithoutBookInput = {
    where: LoveWhereUniqueInput
    data: XOR<LoveUpdateWithoutBookInput, LoveUncheckedUpdateWithoutBookInput>
  }

  export type LoveUpdateManyWithWhereWithoutBookInput = {
    where: LoveScalarWhereInput
    data: XOR<LoveUpdateManyMutationInput, LoveUncheckedUpdateManyWithoutBookInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutBookInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutBookInput, CommentUncheckedUpdateWithoutBookInput>
    create: XOR<CommentCreateWithoutBookInput, CommentUncheckedCreateWithoutBookInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutBookInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutBookInput, CommentUncheckedUpdateWithoutBookInput>
  }

  export type CommentUpdateManyWithWhereWithoutBookInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutBookInput>
  }

  export type BookLibraryUpsertWithWhereUniqueWithoutBookInput = {
    where: BookLibraryWhereUniqueInput
    update: XOR<BookLibraryUpdateWithoutBookInput, BookLibraryUncheckedUpdateWithoutBookInput>
    create: XOR<BookLibraryCreateWithoutBookInput, BookLibraryUncheckedCreateWithoutBookInput>
  }

  export type BookLibraryUpdateWithWhereUniqueWithoutBookInput = {
    where: BookLibraryWhereUniqueInput
    data: XOR<BookLibraryUpdateWithoutBookInput, BookLibraryUncheckedUpdateWithoutBookInput>
  }

  export type BookLibraryUpdateManyWithWhereWithoutBookInput = {
    where: BookLibraryScalarWhereInput
    data: XOR<BookLibraryUpdateManyMutationInput, BookLibraryUncheckedUpdateManyWithoutBookInput>
  }

  export type BookLibraryScalarWhereInput = {
    AND?: BookLibraryScalarWhereInput | BookLibraryScalarWhereInput[]
    OR?: BookLibraryScalarWhereInput[]
    NOT?: BookLibraryScalarWhereInput | BookLibraryScalarWhereInput[]
    id?: IntFilter<"BookLibrary"> | number
    bookId?: StringFilter<"BookLibrary"> | string
    libraryId?: IntFilter<"BookLibrary"> | number
    createdAt?: DateTimeFilter<"BookLibrary"> | Date | string
  }

  export type BookShelfUpsertWithWhereUniqueWithoutBookInput = {
    where: BookShelfWhereUniqueInput
    update: XOR<BookShelfUpdateWithoutBookInput, BookShelfUncheckedUpdateWithoutBookInput>
    create: XOR<BookShelfCreateWithoutBookInput, BookShelfUncheckedCreateWithoutBookInput>
  }

  export type BookShelfUpdateWithWhereUniqueWithoutBookInput = {
    where: BookShelfWhereUniqueInput
    data: XOR<BookShelfUpdateWithoutBookInput, BookShelfUncheckedUpdateWithoutBookInput>
  }

  export type BookShelfUpdateManyWithWhereWithoutBookInput = {
    where: BookShelfScalarWhereInput
    data: XOR<BookShelfUpdateManyMutationInput, BookShelfUncheckedUpdateManyWithoutBookInput>
  }

  export type BookShelfScalarWhereInput = {
    AND?: BookShelfScalarWhereInput | BookShelfScalarWhereInput[]
    OR?: BookShelfScalarWhereInput[]
    NOT?: BookShelfScalarWhereInput | BookShelfScalarWhereInput[]
    id?: IntFilter<"BookShelf"> | number
    bookId?: StringFilter<"BookShelf"> | string
    shelfId?: IntFilter<"BookShelf"> | number
    createdAt?: DateTimeFilter<"BookShelf"> | Date | string
  }

  export type BookCreateWithoutGenresInput = {
    id?: string
    title: string
    author: UserCreateNestedOneWithoutBooksInput
    pages?: BookPageCreateNestedManyWithoutBookInput
    loves?: LoveCreateNestedManyWithoutBookInput
    comments?: CommentCreateNestedManyWithoutBookInput
    libraries?: BookLibraryCreateNestedManyWithoutBookInput
    shelves?: BookShelfCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutGenresInput = {
    id?: string
    title: string
    userId: number
    pages?: BookPageUncheckedCreateNestedManyWithoutBookInput
    loves?: LoveUncheckedCreateNestedManyWithoutBookInput
    comments?: CommentUncheckedCreateNestedManyWithoutBookInput
    libraries?: BookLibraryUncheckedCreateNestedManyWithoutBookInput
    shelves?: BookShelfUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutGenresInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutGenresInput, BookUncheckedCreateWithoutGenresInput>
  }

  export type BookUpsertWithoutGenresInput = {
    update: XOR<BookUpdateWithoutGenresInput, BookUncheckedUpdateWithoutGenresInput>
    create: XOR<BookCreateWithoutGenresInput, BookUncheckedCreateWithoutGenresInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutGenresInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutGenresInput, BookUncheckedUpdateWithoutGenresInput>
  }

  export type BookUpdateWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutBooksNestedInput
    pages?: BookPageUpdateManyWithoutBookNestedInput
    loves?: LoveUpdateManyWithoutBookNestedInput
    comments?: CommentUpdateManyWithoutBookNestedInput
    libraries?: BookLibraryUpdateManyWithoutBookNestedInput
    shelves?: BookShelfUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    pages?: BookPageUncheckedUpdateManyWithoutBookNestedInput
    loves?: LoveUncheckedUpdateManyWithoutBookNestedInput
    comments?: CommentUncheckedUpdateManyWithoutBookNestedInput
    libraries?: BookLibraryUncheckedUpdateManyWithoutBookNestedInput
    shelves?: BookShelfUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateWithoutLibrariesInput = {
    id?: string
    title: string
    author: UserCreateNestedOneWithoutBooksInput
    pages?: BookPageCreateNestedManyWithoutBookInput
    genres?: BookGenreCreateNestedManyWithoutBookInput
    loves?: LoveCreateNestedManyWithoutBookInput
    comments?: CommentCreateNestedManyWithoutBookInput
    shelves?: BookShelfCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutLibrariesInput = {
    id?: string
    title: string
    userId: number
    pages?: BookPageUncheckedCreateNestedManyWithoutBookInput
    genres?: BookGenreUncheckedCreateNestedManyWithoutBookInput
    loves?: LoveUncheckedCreateNestedManyWithoutBookInput
    comments?: CommentUncheckedCreateNestedManyWithoutBookInput
    shelves?: BookShelfUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutLibrariesInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutLibrariesInput, BookUncheckedCreateWithoutLibrariesInput>
  }

  export type LibraryCreateWithoutBooksInput = {
    user: UserCreateNestedOneWithoutLibraryInput
    shelves?: ShelfCreateNestedManyWithoutLibraryInput
  }

  export type LibraryUncheckedCreateWithoutBooksInput = {
    id?: number
    userId: number
    shelves?: ShelfUncheckedCreateNestedManyWithoutLibraryInput
  }

  export type LibraryCreateOrConnectWithoutBooksInput = {
    where: LibraryWhereUniqueInput
    create: XOR<LibraryCreateWithoutBooksInput, LibraryUncheckedCreateWithoutBooksInput>
  }

  export type BookUpsertWithoutLibrariesInput = {
    update: XOR<BookUpdateWithoutLibrariesInput, BookUncheckedUpdateWithoutLibrariesInput>
    create: XOR<BookCreateWithoutLibrariesInput, BookUncheckedCreateWithoutLibrariesInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutLibrariesInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutLibrariesInput, BookUncheckedUpdateWithoutLibrariesInput>
  }

  export type BookUpdateWithoutLibrariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutBooksNestedInput
    pages?: BookPageUpdateManyWithoutBookNestedInput
    genres?: BookGenreUpdateManyWithoutBookNestedInput
    loves?: LoveUpdateManyWithoutBookNestedInput
    comments?: CommentUpdateManyWithoutBookNestedInput
    shelves?: BookShelfUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutLibrariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    pages?: BookPageUncheckedUpdateManyWithoutBookNestedInput
    genres?: BookGenreUncheckedUpdateManyWithoutBookNestedInput
    loves?: LoveUncheckedUpdateManyWithoutBookNestedInput
    comments?: CommentUncheckedUpdateManyWithoutBookNestedInput
    shelves?: BookShelfUncheckedUpdateManyWithoutBookNestedInput
  }

  export type LibraryUpsertWithoutBooksInput = {
    update: XOR<LibraryUpdateWithoutBooksInput, LibraryUncheckedUpdateWithoutBooksInput>
    create: XOR<LibraryCreateWithoutBooksInput, LibraryUncheckedCreateWithoutBooksInput>
    where?: LibraryWhereInput
  }

  export type LibraryUpdateToOneWithWhereWithoutBooksInput = {
    where?: LibraryWhereInput
    data: XOR<LibraryUpdateWithoutBooksInput, LibraryUncheckedUpdateWithoutBooksInput>
  }

  export type LibraryUpdateWithoutBooksInput = {
    user?: UserUpdateOneRequiredWithoutLibraryNestedInput
    shelves?: ShelfUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    shelves?: ShelfUncheckedUpdateManyWithoutLibraryNestedInput
  }

  export type BookCreateWithoutShelvesInput = {
    id?: string
    title: string
    author: UserCreateNestedOneWithoutBooksInput
    pages?: BookPageCreateNestedManyWithoutBookInput
    genres?: BookGenreCreateNestedManyWithoutBookInput
    loves?: LoveCreateNestedManyWithoutBookInput
    comments?: CommentCreateNestedManyWithoutBookInput
    libraries?: BookLibraryCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutShelvesInput = {
    id?: string
    title: string
    userId: number
    pages?: BookPageUncheckedCreateNestedManyWithoutBookInput
    genres?: BookGenreUncheckedCreateNestedManyWithoutBookInput
    loves?: LoveUncheckedCreateNestedManyWithoutBookInput
    comments?: CommentUncheckedCreateNestedManyWithoutBookInput
    libraries?: BookLibraryUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutShelvesInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutShelvesInput, BookUncheckedCreateWithoutShelvesInput>
  }

  export type ShelfCreateWithoutBooksInput = {
    name?: string
    totalBooks?: number
    library: LibraryCreateNestedOneWithoutShelvesInput
  }

  export type ShelfUncheckedCreateWithoutBooksInput = {
    id?: number
    name?: string
    totalBooks?: number
    libraryId: number
  }

  export type ShelfCreateOrConnectWithoutBooksInput = {
    where: ShelfWhereUniqueInput
    create: XOR<ShelfCreateWithoutBooksInput, ShelfUncheckedCreateWithoutBooksInput>
  }

  export type BookUpsertWithoutShelvesInput = {
    update: XOR<BookUpdateWithoutShelvesInput, BookUncheckedUpdateWithoutShelvesInput>
    create: XOR<BookCreateWithoutShelvesInput, BookUncheckedCreateWithoutShelvesInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutShelvesInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutShelvesInput, BookUncheckedUpdateWithoutShelvesInput>
  }

  export type BookUpdateWithoutShelvesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutBooksNestedInput
    pages?: BookPageUpdateManyWithoutBookNestedInput
    genres?: BookGenreUpdateManyWithoutBookNestedInput
    loves?: LoveUpdateManyWithoutBookNestedInput
    comments?: CommentUpdateManyWithoutBookNestedInput
    libraries?: BookLibraryUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutShelvesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    pages?: BookPageUncheckedUpdateManyWithoutBookNestedInput
    genres?: BookGenreUncheckedUpdateManyWithoutBookNestedInput
    loves?: LoveUncheckedUpdateManyWithoutBookNestedInput
    comments?: CommentUncheckedUpdateManyWithoutBookNestedInput
    libraries?: BookLibraryUncheckedUpdateManyWithoutBookNestedInput
  }

  export type ShelfUpsertWithoutBooksInput = {
    update: XOR<ShelfUpdateWithoutBooksInput, ShelfUncheckedUpdateWithoutBooksInput>
    create: XOR<ShelfCreateWithoutBooksInput, ShelfUncheckedCreateWithoutBooksInput>
    where?: ShelfWhereInput
  }

  export type ShelfUpdateToOneWithWhereWithoutBooksInput = {
    where?: ShelfWhereInput
    data: XOR<ShelfUpdateWithoutBooksInput, ShelfUncheckedUpdateWithoutBooksInput>
  }

  export type ShelfUpdateWithoutBooksInput = {
    name?: StringFieldUpdateOperationsInput | string
    totalBooks?: IntFieldUpdateOperationsInput | number
    library?: LibraryUpdateOneRequiredWithoutShelvesNestedInput
  }

  export type ShelfUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalBooks?: IntFieldUpdateOperationsInput | number
    libraryId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutCommentsInput = {
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookCreateNestedManyWithoutAuthorInput
    library?: LibraryCreateNestedOneWithoutUserInput
    loves?: LoveCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: number
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutAuthorInput
    library?: LibraryUncheckedCreateNestedOneWithoutUserInput
    loves?: LoveUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type BookCreateWithoutCommentsInput = {
    id?: string
    title: string
    author: UserCreateNestedOneWithoutBooksInput
    pages?: BookPageCreateNestedManyWithoutBookInput
    genres?: BookGenreCreateNestedManyWithoutBookInput
    loves?: LoveCreateNestedManyWithoutBookInput
    libraries?: BookLibraryCreateNestedManyWithoutBookInput
    shelves?: BookShelfCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    userId: number
    pages?: BookPageUncheckedCreateNestedManyWithoutBookInput
    genres?: BookGenreUncheckedCreateNestedManyWithoutBookInput
    loves?: LoveUncheckedCreateNestedManyWithoutBookInput
    libraries?: BookLibraryUncheckedCreateNestedManyWithoutBookInput
    shelves?: BookShelfUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutCommentsInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutCommentsInput, BookUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutAuthorNestedInput
    library?: LibraryUpdateOneWithoutUserNestedInput
    loves?: LoveUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutAuthorNestedInput
    library?: LibraryUncheckedUpdateOneWithoutUserNestedInput
    loves?: LoveUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookUpsertWithoutCommentsInput = {
    update: XOR<BookUpdateWithoutCommentsInput, BookUncheckedUpdateWithoutCommentsInput>
    create: XOR<BookCreateWithoutCommentsInput, BookUncheckedCreateWithoutCommentsInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutCommentsInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutCommentsInput, BookUncheckedUpdateWithoutCommentsInput>
  }

  export type BookUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutBooksNestedInput
    pages?: BookPageUpdateManyWithoutBookNestedInput
    genres?: BookGenreUpdateManyWithoutBookNestedInput
    loves?: LoveUpdateManyWithoutBookNestedInput
    libraries?: BookLibraryUpdateManyWithoutBookNestedInput
    shelves?: BookShelfUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    pages?: BookPageUncheckedUpdateManyWithoutBookNestedInput
    genres?: BookGenreUncheckedUpdateManyWithoutBookNestedInput
    loves?: LoveUncheckedUpdateManyWithoutBookNestedInput
    libraries?: BookLibraryUncheckedUpdateManyWithoutBookNestedInput
    shelves?: BookShelfUncheckedUpdateManyWithoutBookNestedInput
  }

  export type UserCreateWithoutLovesInput = {
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookCreateNestedManyWithoutAuthorInput
    library?: LibraryCreateNestedOneWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLovesInput = {
    id?: number
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutAuthorInput
    library?: LibraryUncheckedCreateNestedOneWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLovesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLovesInput, UserUncheckedCreateWithoutLovesInput>
  }

  export type BookCreateWithoutLovesInput = {
    id?: string
    title: string
    author: UserCreateNestedOneWithoutBooksInput
    pages?: BookPageCreateNestedManyWithoutBookInput
    genres?: BookGenreCreateNestedManyWithoutBookInput
    comments?: CommentCreateNestedManyWithoutBookInput
    libraries?: BookLibraryCreateNestedManyWithoutBookInput
    shelves?: BookShelfCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutLovesInput = {
    id?: string
    title: string
    userId: number
    pages?: BookPageUncheckedCreateNestedManyWithoutBookInput
    genres?: BookGenreUncheckedCreateNestedManyWithoutBookInput
    comments?: CommentUncheckedCreateNestedManyWithoutBookInput
    libraries?: BookLibraryUncheckedCreateNestedManyWithoutBookInput
    shelves?: BookShelfUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutLovesInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutLovesInput, BookUncheckedCreateWithoutLovesInput>
  }

  export type UserUpsertWithoutLovesInput = {
    update: XOR<UserUpdateWithoutLovesInput, UserUncheckedUpdateWithoutLovesInput>
    create: XOR<UserCreateWithoutLovesInput, UserUncheckedCreateWithoutLovesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLovesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLovesInput, UserUncheckedUpdateWithoutLovesInput>
  }

  export type UserUpdateWithoutLovesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutAuthorNestedInput
    library?: LibraryUpdateOneWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLovesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutAuthorNestedInput
    library?: LibraryUncheckedUpdateOneWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookUpsertWithoutLovesInput = {
    update: XOR<BookUpdateWithoutLovesInput, BookUncheckedUpdateWithoutLovesInput>
    create: XOR<BookCreateWithoutLovesInput, BookUncheckedCreateWithoutLovesInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutLovesInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutLovesInput, BookUncheckedUpdateWithoutLovesInput>
  }

  export type BookUpdateWithoutLovesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutBooksNestedInput
    pages?: BookPageUpdateManyWithoutBookNestedInput
    genres?: BookGenreUpdateManyWithoutBookNestedInput
    comments?: CommentUpdateManyWithoutBookNestedInput
    libraries?: BookLibraryUpdateManyWithoutBookNestedInput
    shelves?: BookShelfUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutLovesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    pages?: BookPageUncheckedUpdateManyWithoutBookNestedInput
    genres?: BookGenreUncheckedUpdateManyWithoutBookNestedInput
    comments?: CommentUncheckedUpdateManyWithoutBookNestedInput
    libraries?: BookLibraryUncheckedUpdateManyWithoutBookNestedInput
    shelves?: BookShelfUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateWithoutPagesInput = {
    id?: string
    title: string
    author: UserCreateNestedOneWithoutBooksInput
    genres?: BookGenreCreateNestedManyWithoutBookInput
    loves?: LoveCreateNestedManyWithoutBookInput
    comments?: CommentCreateNestedManyWithoutBookInput
    libraries?: BookLibraryCreateNestedManyWithoutBookInput
    shelves?: BookShelfCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutPagesInput = {
    id?: string
    title: string
    userId: number
    genres?: BookGenreUncheckedCreateNestedManyWithoutBookInput
    loves?: LoveUncheckedCreateNestedManyWithoutBookInput
    comments?: CommentUncheckedCreateNestedManyWithoutBookInput
    libraries?: BookLibraryUncheckedCreateNestedManyWithoutBookInput
    shelves?: BookShelfUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutPagesInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutPagesInput, BookUncheckedCreateWithoutPagesInput>
  }

  export type BookUpsertWithoutPagesInput = {
    update: XOR<BookUpdateWithoutPagesInput, BookUncheckedUpdateWithoutPagesInput>
    create: XOR<BookCreateWithoutPagesInput, BookUncheckedCreateWithoutPagesInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutPagesInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutPagesInput, BookUncheckedUpdateWithoutPagesInput>
  }

  export type BookUpdateWithoutPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutBooksNestedInput
    genres?: BookGenreUpdateManyWithoutBookNestedInput
    loves?: LoveUpdateManyWithoutBookNestedInput
    comments?: CommentUpdateManyWithoutBookNestedInput
    libraries?: BookLibraryUpdateManyWithoutBookNestedInput
    shelves?: BookShelfUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    genres?: BookGenreUncheckedUpdateManyWithoutBookNestedInput
    loves?: LoveUncheckedUpdateManyWithoutBookNestedInput
    comments?: CommentUncheckedUpdateManyWithoutBookNestedInput
    libraries?: BookLibraryUncheckedUpdateManyWithoutBookNestedInput
    shelves?: BookShelfUncheckedUpdateManyWithoutBookNestedInput
  }

  export type UserCreateWithoutLibraryInput = {
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookCreateNestedManyWithoutAuthorInput
    loves?: LoveCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLibraryInput = {
    id?: number
    email: string
    password: string
    username: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: BookUncheckedCreateNestedManyWithoutAuthorInput
    loves?: LoveUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLibraryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLibraryInput, UserUncheckedCreateWithoutLibraryInput>
  }

  export type BookLibraryCreateWithoutLibraryInput = {
    createdAt?: Date | string
    book: BookCreateNestedOneWithoutLibrariesInput
  }

  export type BookLibraryUncheckedCreateWithoutLibraryInput = {
    id?: number
    bookId: string
    createdAt?: Date | string
  }

  export type BookLibraryCreateOrConnectWithoutLibraryInput = {
    where: BookLibraryWhereUniqueInput
    create: XOR<BookLibraryCreateWithoutLibraryInput, BookLibraryUncheckedCreateWithoutLibraryInput>
  }

  export type BookLibraryCreateManyLibraryInputEnvelope = {
    data: BookLibraryCreateManyLibraryInput | BookLibraryCreateManyLibraryInput[]
    skipDuplicates?: boolean
  }

  export type ShelfCreateWithoutLibraryInput = {
    name?: string
    totalBooks?: number
    books?: BookShelfCreateNestedManyWithoutShelfInput
  }

  export type ShelfUncheckedCreateWithoutLibraryInput = {
    id?: number
    name?: string
    totalBooks?: number
    books?: BookShelfUncheckedCreateNestedManyWithoutShelfInput
  }

  export type ShelfCreateOrConnectWithoutLibraryInput = {
    where: ShelfWhereUniqueInput
    create: XOR<ShelfCreateWithoutLibraryInput, ShelfUncheckedCreateWithoutLibraryInput>
  }

  export type ShelfCreateManyLibraryInputEnvelope = {
    data: ShelfCreateManyLibraryInput | ShelfCreateManyLibraryInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLibraryInput = {
    update: XOR<UserUpdateWithoutLibraryInput, UserUncheckedUpdateWithoutLibraryInput>
    create: XOR<UserCreateWithoutLibraryInput, UserUncheckedCreateWithoutLibraryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLibraryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLibraryInput, UserUncheckedUpdateWithoutLibraryInput>
  }

  export type UserUpdateWithoutLibraryInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUpdateManyWithoutAuthorNestedInput
    loves?: LoveUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLibraryInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: BookUncheckedUpdateManyWithoutAuthorNestedInput
    loves?: LoveUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookLibraryUpsertWithWhereUniqueWithoutLibraryInput = {
    where: BookLibraryWhereUniqueInput
    update: XOR<BookLibraryUpdateWithoutLibraryInput, BookLibraryUncheckedUpdateWithoutLibraryInput>
    create: XOR<BookLibraryCreateWithoutLibraryInput, BookLibraryUncheckedCreateWithoutLibraryInput>
  }

  export type BookLibraryUpdateWithWhereUniqueWithoutLibraryInput = {
    where: BookLibraryWhereUniqueInput
    data: XOR<BookLibraryUpdateWithoutLibraryInput, BookLibraryUncheckedUpdateWithoutLibraryInput>
  }

  export type BookLibraryUpdateManyWithWhereWithoutLibraryInput = {
    where: BookLibraryScalarWhereInput
    data: XOR<BookLibraryUpdateManyMutationInput, BookLibraryUncheckedUpdateManyWithoutLibraryInput>
  }

  export type ShelfUpsertWithWhereUniqueWithoutLibraryInput = {
    where: ShelfWhereUniqueInput
    update: XOR<ShelfUpdateWithoutLibraryInput, ShelfUncheckedUpdateWithoutLibraryInput>
    create: XOR<ShelfCreateWithoutLibraryInput, ShelfUncheckedCreateWithoutLibraryInput>
  }

  export type ShelfUpdateWithWhereUniqueWithoutLibraryInput = {
    where: ShelfWhereUniqueInput
    data: XOR<ShelfUpdateWithoutLibraryInput, ShelfUncheckedUpdateWithoutLibraryInput>
  }

  export type ShelfUpdateManyWithWhereWithoutLibraryInput = {
    where: ShelfScalarWhereInput
    data: XOR<ShelfUpdateManyMutationInput, ShelfUncheckedUpdateManyWithoutLibraryInput>
  }

  export type ShelfScalarWhereInput = {
    AND?: ShelfScalarWhereInput | ShelfScalarWhereInput[]
    OR?: ShelfScalarWhereInput[]
    NOT?: ShelfScalarWhereInput | ShelfScalarWhereInput[]
    id?: IntFilter<"Shelf"> | number
    name?: StringFilter<"Shelf"> | string
    totalBooks?: IntFilter<"Shelf"> | number
    libraryId?: IntFilter<"Shelf"> | number
  }

  export type LibraryCreateWithoutShelvesInput = {
    user: UserCreateNestedOneWithoutLibraryInput
    books?: BookLibraryCreateNestedManyWithoutLibraryInput
  }

  export type LibraryUncheckedCreateWithoutShelvesInput = {
    id?: number
    userId: number
    books?: BookLibraryUncheckedCreateNestedManyWithoutLibraryInput
  }

  export type LibraryCreateOrConnectWithoutShelvesInput = {
    where: LibraryWhereUniqueInput
    create: XOR<LibraryCreateWithoutShelvesInput, LibraryUncheckedCreateWithoutShelvesInput>
  }

  export type BookShelfCreateWithoutShelfInput = {
    createdAt?: Date | string
    book: BookCreateNestedOneWithoutShelvesInput
  }

  export type BookShelfUncheckedCreateWithoutShelfInput = {
    id?: number
    bookId: string
    createdAt?: Date | string
  }

  export type BookShelfCreateOrConnectWithoutShelfInput = {
    where: BookShelfWhereUniqueInput
    create: XOR<BookShelfCreateWithoutShelfInput, BookShelfUncheckedCreateWithoutShelfInput>
  }

  export type BookShelfCreateManyShelfInputEnvelope = {
    data: BookShelfCreateManyShelfInput | BookShelfCreateManyShelfInput[]
    skipDuplicates?: boolean
  }

  export type LibraryUpsertWithoutShelvesInput = {
    update: XOR<LibraryUpdateWithoutShelvesInput, LibraryUncheckedUpdateWithoutShelvesInput>
    create: XOR<LibraryCreateWithoutShelvesInput, LibraryUncheckedCreateWithoutShelvesInput>
    where?: LibraryWhereInput
  }

  export type LibraryUpdateToOneWithWhereWithoutShelvesInput = {
    where?: LibraryWhereInput
    data: XOR<LibraryUpdateWithoutShelvesInput, LibraryUncheckedUpdateWithoutShelvesInput>
  }

  export type LibraryUpdateWithoutShelvesInput = {
    user?: UserUpdateOneRequiredWithoutLibraryNestedInput
    books?: BookLibraryUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryUncheckedUpdateWithoutShelvesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    books?: BookLibraryUncheckedUpdateManyWithoutLibraryNestedInput
  }

  export type BookShelfUpsertWithWhereUniqueWithoutShelfInput = {
    where: BookShelfWhereUniqueInput
    update: XOR<BookShelfUpdateWithoutShelfInput, BookShelfUncheckedUpdateWithoutShelfInput>
    create: XOR<BookShelfCreateWithoutShelfInput, BookShelfUncheckedCreateWithoutShelfInput>
  }

  export type BookShelfUpdateWithWhereUniqueWithoutShelfInput = {
    where: BookShelfWhereUniqueInput
    data: XOR<BookShelfUpdateWithoutShelfInput, BookShelfUncheckedUpdateWithoutShelfInput>
  }

  export type BookShelfUpdateManyWithWhereWithoutShelfInput = {
    where: BookShelfScalarWhereInput
    data: XOR<BookShelfUpdateManyMutationInput, BookShelfUncheckedUpdateManyWithoutShelfInput>
  }

  export type BookCreateManyAuthorInput = {
    id?: string
    title: string
  }

  export type LoveCreateManyUserInput = {
    id?: number
    bookId: string
    createdAt?: Date | string
  }

  export type CommentCreateManyUserInput = {
    id?: number
    content: string
    bookId: string
    createdAt?: Date | string
  }

  export type BookUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pages?: BookPageUpdateManyWithoutBookNestedInput
    genres?: BookGenreUpdateManyWithoutBookNestedInput
    loves?: LoveUpdateManyWithoutBookNestedInput
    comments?: CommentUpdateManyWithoutBookNestedInput
    libraries?: BookLibraryUpdateManyWithoutBookNestedInput
    shelves?: BookShelfUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pages?: BookPageUncheckedUpdateManyWithoutBookNestedInput
    genres?: BookGenreUncheckedUpdateManyWithoutBookNestedInput
    loves?: LoveUncheckedUpdateManyWithoutBookNestedInput
    comments?: CommentUncheckedUpdateManyWithoutBookNestedInput
    libraries?: BookLibraryUncheckedUpdateManyWithoutBookNestedInput
    shelves?: BookShelfUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type LoveUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutLovesNestedInput
  }

  export type LoveUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoveUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookPageCreateManyBookInput = {
    id?: string
    content?: string | null
    page?: number
  }

  export type BookGenreCreateManyBookInput = {
    id?: number
    genre: $Enums.Genres
    createdAt?: Date | string
  }

  export type LoveCreateManyBookInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type CommentCreateManyBookInput = {
    id?: number
    content: string
    userId: number
    createdAt?: Date | string
  }

  export type BookLibraryCreateManyBookInput = {
    id?: number
    libraryId: number
    createdAt?: Date | string
  }

  export type BookShelfCreateManyBookInput = {
    id?: number
    shelfId: number
    createdAt?: Date | string
  }

  export type BookPageUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    page?: IntFieldUpdateOperationsInput | number
  }

  export type BookPageUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    page?: IntFieldUpdateOperationsInput | number
  }

  export type BookPageUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    page?: IntFieldUpdateOperationsInput | number
  }

  export type BookGenreUpdateWithoutBookInput = {
    genre?: EnumGenresFieldUpdateOperationsInput | $Enums.Genres
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookGenreUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    genre?: EnumGenresFieldUpdateOperationsInput | $Enums.Genres
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookGenreUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    genre?: EnumGenresFieldUpdateOperationsInput | $Enums.Genres
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoveUpdateWithoutBookInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLovesNestedInput
  }

  export type LoveUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoveUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutBookInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookLibraryUpdateWithoutBookInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    library?: LibraryUpdateOneRequiredWithoutBooksNestedInput
  }

  export type BookLibraryUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    libraryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookLibraryUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    libraryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookShelfUpdateWithoutBookInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shelf?: ShelfUpdateOneRequiredWithoutBooksNestedInput
  }

  export type BookShelfUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    shelfId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookShelfUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    shelfId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookLibraryCreateManyLibraryInput = {
    id?: number
    bookId: string
    createdAt?: Date | string
  }

  export type ShelfCreateManyLibraryInput = {
    id?: number
    name?: string
    totalBooks?: number
  }

  export type BookLibraryUpdateWithoutLibraryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutLibrariesNestedInput
  }

  export type BookLibraryUncheckedUpdateWithoutLibraryInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookLibraryUncheckedUpdateManyWithoutLibraryInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShelfUpdateWithoutLibraryInput = {
    name?: StringFieldUpdateOperationsInput | string
    totalBooks?: IntFieldUpdateOperationsInput | number
    books?: BookShelfUpdateManyWithoutShelfNestedInput
  }

  export type ShelfUncheckedUpdateWithoutLibraryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalBooks?: IntFieldUpdateOperationsInput | number
    books?: BookShelfUncheckedUpdateManyWithoutShelfNestedInput
  }

  export type ShelfUncheckedUpdateManyWithoutLibraryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalBooks?: IntFieldUpdateOperationsInput | number
  }

  export type BookShelfCreateManyShelfInput = {
    id?: number
    bookId: string
    createdAt?: Date | string
  }

  export type BookShelfUpdateWithoutShelfInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutShelvesNestedInput
  }

  export type BookShelfUncheckedUpdateWithoutShelfInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookShelfUncheckedUpdateManyWithoutShelfInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}