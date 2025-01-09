"use client";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { BsSliders } from "react-icons/bs";

import { Button } from "@/components/button/Button";
import { ThemeColorVariant } from "@/components/home/HomeSection";
import { PostPreview } from "@/components/postPreview/PostPreview";
import { PostPreviewHorizontal } from "@/components/postPreview/PostPreviewHorizontal";
import { CheckBoxCategory } from "@/components/search/CheckBoxCategory";
import { CheckBoxTag } from "@/components/search/CheckBoxTag";
import { DetailSearchModalFrame } from "@/components/search/DetailSearchModalFrame";
import { SearchInput } from "@/components/search/SearchInput";
import { Category } from "@/interfaces/category";
import { Post } from "@/interfaces/post";
import { Tag } from "@/interfaces/tag";

type Props = {
  posts: Post[];
};

export default function ArticleSearcher({ posts }: Props) {
  const textVariants: { [key in Category]: ThemeColorVariant } = {
    Tech: "blue",
    DevDiary: "green",
    LifeStyle: "orange",
  };

  const searchParams = useSearchParams();
  const searchCategory = searchParams.get("category");
  const searchTag = searchParams.get("tag");

  const [searchQueryTags, setSearchQueryTags] = useState<Tag[] | null>(
    searchTag ? [searchTag as Tag] : null
  );

  const [searchQueryText, setSearchQueryText] = useState<string | null>(null);

  const [searchQueryCategory, setSearchQueryCategory] = useState<
    Category[] | null
  >(searchCategory ? [searchCategory as Category] : null);

  const [isDetailSearchModalOpen, setIsDetailSearchModalOpen] = useState(false);

  const tags = Array.from(new Set(posts.map((post) => post.tags).flat()));

  const categories = Array.from(
    new Set(posts.map((post) => post.category).flat())
  );

  const handleChangeQueryText = (e: string) => {
    setSearchQueryText(e);
  };

  const handleClickCategory = (category: Category) => {
    setSearchQueryCategory((prevCategory) => {
      if (prevCategory === null) {
        return [category];
      } else {
        if (
          !prevCategory.some(
            (existingCategory) => existingCategory === category
          )
        ) {
          return [...prevCategory, category];
        } else {
          return prevCategory.filter(
            (existingCategory) => existingCategory !== category
          );
        }
      }
    });
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

  const searchResultsByQueryCategory = useMemo(() => {
    if (searchQueryCategory === null || searchQueryCategory.length === 0) {
      return searchResultsByQueryText;
    } else {
      return searchResultsByQueryText.filter((post) =>
        searchQueryCategory.includes(post.category)
      );
    }
  }, [searchQueryCategory, searchResultsByQueryText]);

  const handleClickDetailButton = () => {
    setIsDetailSearchModalOpen(true);
  };

  const handleClickDetailSearchModalClose = () => {
    setIsDetailSearchModalOpen(false);
  };

  const handleClickDeleteAllTagButton = () => {
    setSearchQueryTags(null);
  };

  const handleClickDeleteAllCategoryButton = () => {
    setSearchQueryCategory(null);
  };

  return (
    <div>
      {isDetailSearchModalOpen && (
        <DetailSearchModalFrame
          handleClickClose={handleClickDetailSearchModalClose}
          handleClickDeleteAllCategoryButton={
            handleClickDeleteAllCategoryButton
          }
          searchQueryCategory={searchQueryCategory}
        >
          <div className="hidden md:flex justify-between px-4">
            {categories.map((category) => (
              <CheckBoxCategory
                key={category}
                category={category}
                isChecked={searchQueryCategory?.includes(category) ?? false}
                onClick={handleClickCategory}
                className="mr-2 mb-2"
              />
            ))}
          </div>
          <div className="flex flex-col px-4 mt-4 md:hidden">
            {categories.map((category) => (
              <CheckBoxCategory
                key={category + "mobile"}
                category={category}
                isChecked={searchQueryCategory?.includes(category) ?? false}
                onClick={handleClickCategory}
                className="mb-6 w-full"
              />
            ))}
          </div>
        </DetailSearchModalFrame>
      )}
      <div className="mt-24 px-8 md:mt-36 md:px-40">
        <div className="text-center text-2xl md:text-3xl tracking-widest font-medium">
          記事を検索する
        </div>
        <div className="text-center text-gray-400 tracking-widest md:mt-2">
          SEARCH
        </div>
        <div className="my-6 relative flex md:my-10 md:mx-40">
          <button type="button" onClick={handleClickDetailButton}>
            <BsSliders
              className={`absolute top-[9px] text-2xl text-gray-500 cursor-pointer ${
                searchQueryCategory === null || searchQueryCategory.length === 0
                  ? ""
                  : "!text-blue-600"
              }`}
            />
          </button>
          <SearchInput
            className="ml-10 w-full"
            onChange={handleChangeQueryText}
          />
        </div>
        <div className="md:ml-10 mb-4 flex">
          <div className="hidden md:flex w-36 min-w-36 flex-col">
            <span>タグで絞り込む:</span>
            <Button
              onClick={handleClickDeleteAllTagButton}
              className={`mt-2 ${
                searchQueryTags == null || searchQueryTags.length == 0
                  ? "border-gray-400 text-gray-400"
                  : "border-black"
              }`}
              disabled={searchQueryTags == null || searchQueryTags.length == 0}
            >
              タグを全解除
            </Button>
          </div>
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <CheckBoxTag
                className="mx-2 mb-2 md:mx-10 md:mb-4"
                key={tag}
                tag={tag}
                isChecked={searchQueryTags?.includes(tag) ?? false}
                onClick={handleClickTag}
              />
            ))}
            <Button
              onClick={handleClickDeleteAllTagButton}
              className={`mb-2 text-sm md:hidden ${
                searchQueryTags == null || searchQueryTags.length == 0
                  ? "border-gray-400 text-gray-400"
                  : "border-black"
              }`}
              disabled={searchQueryTags == null || searchQueryTags.length == 0}
            >
              タグを全解除
            </Button>
          </div>
        </div>
        <div className="my-10 grid grid-cols-1 md:grid-cols-3 md:gap-x-16 lg:gap-x-12 gap-y-4">
          {searchResultsByQueryCategory.map((post) => (
            <div key={post.slug}>
              <PostPreview
                className="hidden md:block"
                themeColorVariant={textVariants[post.category]}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                tags={post.tags}
                slug={post.slug}
                excerpt={post.excerpt}
              />
              <PostPreviewHorizontal
                className="rounded-md md:hidden"
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                tags={post.tags}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
