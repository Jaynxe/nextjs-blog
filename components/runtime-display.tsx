"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const launchTime = dayjs("2024-08-27T11:14:00");

export default function RuntimeDisplay() {
  const [runtime, setRuntime] = useState("");

  useEffect(() => {
    const updateRuntime = () => {
      const now = dayjs();
      const diff = dayjs.duration(now.diff(launchTime));

      const totalDays = Math.floor(diff.asDays());
      const hours = diff.hours();
      const minutes = diff.minutes();
      const seconds = diff.seconds();

      setRuntime(
        `本站已运行: ${totalDays}天${hours}小时${minutes}分${seconds}秒`
      );
    };

    // 初次调用
    updateRuntime();

    // 每秒更新一次
    const intervalId = setInterval(updateRuntime, 1000);

    // 清理定时器
    return () => clearInterval(intervalId);
  }, []);

  return <p>{runtime}</p>;
}
