"use client";
import { DetailSearchModalFrame } from "@/components/search/DetailSearchModalFrame";
import { PostPreview } from "@/components/postPreview/PostPreview";
import { ThemeColorVariant } from "@/components/home/HomeSection";
import { CheckBoxTag } from "@/components/search/CheckBoxTag";
import { SearchInput } from "@/components/search/SearchInput";
import { Category } from "@/interfaces/category";
import { Post } from "@/interfaces/post";
import { Tag } from "@/interfaces/tag";
import { useMemo, useState } from "react";
import { BsSliders } from "react-icons/bs";
import { CheckBoxCategory } from "@/components/search/CheckBoxCategory";
import { useSearchParams } from "next/navigation";

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

  console.log(searchQueryCategory);

  return (
    <div>
      {isDetailSearchModalOpen && (
        <DetailSearchModalFrame
          handleClickClose={handleClickDetailSearchModalClose}
          categories={categories}
        >
          <div className="flex justify-between px-4">
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
        </DetailSearchModalFrame>
      )}
      <div className="mt-36 px-40">
        <div className="text-center text-3xl tracking-widest font-medium">
          記事を検索する
        </div>
        <div className="text-center text-gray-400 tracking-widest mt-2">
          SEARCH
        </div>
        <div className="relative flex my-10 mx-40">
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
        <div className="ml-10 mb-4">
          タグで絞り込む:
          {tags.map((tag) => (
            <CheckBoxTag
              className="m-10"
              key={tag}
              tag={tag}
              isChecked={searchQueryTags?.includes(tag) ?? false}
              onClick={handleClickTag}
            />
          ))}
        </div>
        <div className="my-10 grid grid-cols-3 md:grid-cols-3 md:gap-x-16 lg:gap-x-12 gap-y-4">
          {searchResultsByQueryCategory.map((post) => (
            <PostPreview
              themeColorVariant={textVariants[post.category]}
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
      </div>
    </div>
  );
}
