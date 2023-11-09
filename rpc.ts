export interface User {
  id: number;
  name: string;
}

export interface Post {
  id: number;
  author: User;
  body: string;
  timestamp: number;
  comments: Comment[];
}

export interface Comment {
  id: number;
  author: User;
  body: string;
  timestamp: number;
}

export interface CreatePostRequest {
  body: string;
}

export interface CreatePostResponse {}

export interface CreateCommentRequest {
  postId: number;
  body: string;
}
export interface CreateCommentResponse {}

export interface ReadPostRequest {
  postId: number;
}
export interface ReadPostResponse {
  post: Post;
}

export interface ReadRandomPostRequest {
  post: Post;
}
export interface ReadRandomPostResponse {}

export interface UpdateProfileRequest {
  name: string;
}
export interface UpdateProfileResponse {}

export interface ReadProfileRequest {}
export interface ReadProfileResponse {}

export interface Preview {
  id: number;
  body: string;
  timestamp: number;
}
export interface ReadPreviewRequest {}
export interface ReadPreviewResponse {
  posts: Preview[];
  comments: Preview[];
}

export interface IRpc {
  createPost: (req: CreatePostRequest) => CreatePostResponse; // promise부분 없는이유 ?
  createComment: (req: CreateCommentRequest) => CreateCommentResponse;
  readPost: (req: ReadPostRequest) => ReadPostResponse;
  readRandomPost: (req: ReadRandomPostRequest) => ReadRandomPostResponse;
  readProfile: (req: ReadProfileRequest) => ReadProfileResponse;
  updateProfile: (req: UpdateProfileRequest) => UpdateProfileResponse;
  readPreview: (req: ReadPreviewRequest) => ReadPreviewResponse;
}


// 타입변환 test
// const r = 0 as any as IRpc; // any로 타입추론 포기후 IRpc로 변환
// const res = r.createPost({body: "hello"}); // error없음 : 타입추론 잘 됨


// 리턴타입만 promise로 감싸주는방법
// F를 함수로 제한 generic type
// 인자의 갯수나 타입, 리턴타입 알수가 없음 -> any
// conditional type. 함수가 아닌경우 never반환
// 이미 F를 AnyFunction을 통해서 함수로 제한해놨는데 또 조건을 거는 이유? 
// -> infer키워드를 통해서 F의 인자와 리턴값의 타입을 추론하기 위해서
type AnyFunction = (...args: any) => any;
type PromiseReturn<F extends AnyFunction> = F extends (
    ...args: infer A
    ) => infer R 
    ? (...args: A) => Promise<R> 
    : never;  

// test
// type t1 = PromiseReturn<string>; // error
// type t2 = PromiseReturn<() => string>;
// type t3 = PromiseReturn<(a: number, b: string, c: boolean) => string>;

// index signature와 keyof를 통해서 PromiseRpc가 가지는 properties가 IRpc와 같다는걸 명시. 
// 각 프로퍼티 이름은 해당 IRpc의 해당이름으로 설정
// PromiseRpc는 IRpc와 같은 타입이다. 
export type PromiseRpc = {
  [k in keyof IRpc]: PromiseReturn<IRpc[k]>;
};


// type a = IRpc["createComment"];


export type RpcFunctionRequest<T extends keyof IRpc> = Parameters<IRpc[T]>[0];
export type RpcFunctionResponse<T extends keyof IRpc> = Parameters<IRpc[T]>;

export type RpcRequest<T extends keyof IRpc> = {
  name: T,
  request: RpcFunctionRequest<T>;
}
export type RpcResponse<T extends keyof IRpc> = {
  error?: RpcError;
  response: RpcFunctionResponse<T>;
}

export type RpcError = string;

