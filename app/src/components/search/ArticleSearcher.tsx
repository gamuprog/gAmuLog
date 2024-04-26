"use client";
import { PostPreview } from "@/components/PostPreview";
import { SearchInput } from "@/components/search/SearchInput";
import { Post } from "@/interfaces/post";
import { Tag } from "@/interfaces/tag";
import { useMemo, useState } from "react";

type Props = {
  posts: Post[];
};

export default function ArticleSearcher({ posts }: Props) {
  const [searchQueryTags, setSearchQueryTags] = useState<Tag[] | null>(null);

  const [searchQueryText, setSearchQueryText] = useState<string | null>(null);

  const tmpTags = posts.map((post) => post.tags).flat();

  const tags = Array.from(new Set(tmpTags));

  const handleChangeQueryText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQueryText(e.target.value);
  };

  const handleClickTag = (tag: Tag) => {
    setSearchQueryTags((prevTags) => {
      if (prevTags === null) {
        return [tag];
      } else {
        if (!prevTags.some((existingTag) => existingTag === tag)) {
          return [...prevTags, tag];
        } else {
          return prevTags.filter((existingTag) => existingTag !== tag);
        }
      }
    });
  };

  const searchResults = useMemo(() => {
    if (searchQueryTags === null || searchQueryTags.length === 0) {
      return posts;
    } else {
      return posts.filter((post) =>
        post.tags.some((tag) => searchQueryTags.includes(tag))
      );
    }
  }, [searchQueryTags, posts]);

  const searchResultsByQueryText = useMemo(() => {
    if (searchQueryText === null || searchQueryText === "") {
      return searchResults;
    } else {
      return searchResults.filter((post) =>
        post.title.toLowerCase().includes(searchQueryText.toLowerCase())
      );
    }
  }, [searchQueryText, searchResults]);

  console.log(searchQueryTags);
  console.log(searchQueryText);

  return (
    <>
      <SearchInput className="m-10" onChange={handleChangeQueryText} />
      {tags.map((tag) => (
        <div key={tag}>
          <button onClick={() => handleClickTag(tag)}>{tag}</button>
        </div>
      ))}
      <div className="mt-10 flex">
        {searchResultsByQueryText.map((post) => (
          <PostPreview
            themeColorVariant="red"
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            tags={post.tags}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </>
  );
}
