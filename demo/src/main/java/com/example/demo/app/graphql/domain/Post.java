package com.example.demo.app.graphql.domain;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Post {

  @Id
  private String id;
  private String body;
  private LocalDateTime createdAt;
  private String username;
  private int likeCount;
  private int commentCount;

  @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
  private Set<Like> likes = new HashSet<>();
  @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
  private Set<Comment> comments = new HashSet<>();


  public Post() {
    this.likeCount = likes.size();
    this.commentCount = comments.size();
  }

  public Post(String body, String username) {
    this.id = UUID.randomUUID().toString();
    this.likeCount = likes.size();
    this.createdAt = LocalDateTime.now();
    this.body = body;
    this.username = username;
    this.likeCount = likes.size();
    this.commentCount = comments.size();
  }

  public Post(String body, String username, Set<Like> likes, Set<Comment> comments) {
    this.id = UUID.randomUUID().toString();
    this.likes.addAll(likes);
    this.comments.addAll(comments);
    this.likeCount = likes.size();
    this.createdAt = LocalDateTime.now();
    this.body = body;
    this.username = username;
    recalculateCounts();
  }

  public void recalculateCounts() {
    this.likeCount = likes.size();
    this.commentCount = comments.size();
  }

  public Like like(String username) {
    Like like = new Like(username);
    if (!likes.removeIf(l -> l.getUsername().equals(username))) {
      likes.add(like);
    }
    recalculateCounts();
    return like;
  }

  public Comment addComment(String username, String body) {
    Comment comment = new Comment(username, body);
    comments.add(comment);
    recalculateCounts();
    return comment;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getBody() {
    return body;
  }

  public void setBody(String body) {
    this.body = body;
  }

  public LocalDateTime getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(LocalDateTime createdAt) {
    this.createdAt = createdAt;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public int getLikeCount() {
    return likeCount;
  }

  public void setLikeCount(int likeCount) {
    this.likeCount = likeCount;
  }

  public Set<Like> getLikes() {
    return likes;
  }

  public void setLikes(Set<Like> likes) {
    this.likes = likes;
  }

  public Set<Comment> getComments() {
    return comments;
  }

  public void setComments(Set<Comment> comments) {
    this.comments = comments;
  }

  public int getCommentCount() {
    return commentCount;
  }

  public void setCommentCount(int commentCount) {
    this.commentCount = commentCount;
  }
}
