export interface User {
  id: number;
  name: string;
}

export interface Post {
  id: number;
  author: User;
  body: string;
  timestamp: number;
  comments: Comment[]
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

export interface CreatePostResponse {

}

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