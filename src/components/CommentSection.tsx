
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ProductRating } from "@/components/ProductRating";
import { formatDistanceToNow } from "date-fns";

interface Comment {
  id: string;
  user: {
    id: string;
    name: string;
    avatar?: string;
    rating: number;
    verified: boolean;
  };
  content: string;
  createdAt: string;
}

interface CommentSectionProps {
  productId: string;
  comments: Comment[];
}

export function CommentSection({ productId, comments: initialComments }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState("");
  
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim()) return;
    
    // In a real application, this would be an API call
    const comment: Comment = {
      id: `comment-${Date.now()}`,
      user: {
        id: "current-user",
        name: "You",
        rating: 4.5,
        verified: true,
      },
      content: newComment,
      createdAt: new Date().toISOString(),
    };
    
    setComments([comment, ...comments]);
    setNewComment("");
  };
  
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Comments ({comments.length})</h3>
      
      <form onSubmit={handleCommentSubmit} className="space-y-4">
        <Textarea
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="min-h-[100px]"
        />
        <Button type="submit" disabled={!newComment.trim()}>
          Post Comment
        </Button>
      </form>
      
      <div className="space-y-6 mt-8">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="flex gap-4 pb-6 border-b last:border-0">
              <Avatar className="h-10 w-10">
                <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
                <AvatarFallback>
                  {comment.user.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{comment.user.name}</span>
                  <ProductRating rating={comment.user.rating} />
                  <span className="text-xs text-muted-foreground">
                    {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                  </span>
                </div>
                
                <p className="text-sm text-foreground">{comment.content}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <p>No comments yet. Be the first to comment!</p>
          </div>
        )}
      </div>
    </div>
  );
}
