'use client'
import Giscus from '@giscus/react';
import { useTheme } from "next-themes";

export default function GiscusComponent() {
  const { theme } = useTheme();

  return (
    <Giscus
      id="comments"
      repo="Jaynxe/nextjs-blog"
      repoId="R_kgDOMoPurw"
      category="Announcements"
      categoryId="DIC_kwDOMoPur84CpB5X"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      // 动态设置主题
      theme={theme === "dark" ? "dark" : "light"} 
      lang="zh-CN"
      loading="lazy"
    />
  );
}