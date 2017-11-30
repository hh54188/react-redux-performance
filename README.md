```
npm install --registry=https://registry.npm.taobao.org
```

## TO TEST

* `[].map`
* `Object.assign`
* `mapStateToProps`

## 方法论

http://somebody32.github.io/high-performance-redux/
https://benchling.engineering/a-deep-dive-into-react-perf-debugging-fd2063f5a667

## 使用 Timing API 检测瓶颈在哪里

https://reactjs.org/docs/perf.html
https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-chrome-performance-tab
https://building.calibreapp.com/debugging-react-performance-with-react-16-and-chrome-devtools-c90698a522ad
https://developer.mozilla.org/en-US/docs/Web/API/User_Timing_API
https://www.html5rocks.com/en/tutorials/webperformance/usertiming/

## 目标

https://developers.google.com/web/updates/2017/06/user-centric-performance-metrics

重要：衡量性能的重要指标
https://developers.google.com/web/fundamentals/performance/rail

I tested my app, and it loads in X.XX seconds.

The problem with this statement is not that it's false, it's that it
misrepresents reality. **Load times will vary dramatically from user to user**,
depending on their device capabilities and network conditions.

The other reason "my site loads in X.XX seconds" is a myth is that load is not a
single moment in time— **it's an experience that no one metric can fully
capture** . There are multiple moments during the load experience that can
affect whether a user perceives it as "fast", and if you just focus on one you
might miss bad experiences that happen during the rest of the time.

A second example of a performance myth is that **performance is only a concern
at load time.**

traditional performance metrics like load time or DOMContentLoaded time are
extremely unreliable since when they occur may or may not correspond to when the
user thinks the app is loaded.

### First paint and first contentful paint

* FP（First Paint ） marks the point when the browser renders anything that is
  visually different from what was on the screen prior to navigation.
* FCP（First Content Paint ） is the point when the browser renders the first
  bit of content from the DOM,

### First meaningful paint and hero element timing（FMP ）

These "most important parts" of a web page are often referred to as hero
elements.

### Long tasks

The long tasks API identifies any task longer than 50 milliseconds as
potentially problematic, and it exposes those tasks to the app developer. The 50
millisecond time was chosen so applications could meet the RAIL guidelines of
responding to user input within 100 ms.

### Time to interactive

The metric Time to interactive (TTI) marks the point at which your application
is both visually rendered and capable of reliably responding to user input.

| The Experience            | The Metric                                         |
| ------------------------- | -------------------------------------------------- |
| Is it happening?          | First Paint (FP) / First Contentful                |
| Paint (FCP) Is it useful? | First Meaningful Paint (FMP) / Hero Element Timing |
| Is it usable?             | Time to Interactive (TTI)                          |
| Is it delightful?         | Long Tasks (technically the absence of long tasks) |

如何检测输入的延迟 用现在时间减去事件的时间，如果大于 100ms 的时候就应该汇报
