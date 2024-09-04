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

      // 格式化为 年月日时分秒
      setRuntime(
        `${diff.years()} 年 ${diff.months()} 月 ${diff.days()} 日 ${diff.hours()} 时 ${diff.minutes()} 分 ${diff.seconds()} 秒`
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
