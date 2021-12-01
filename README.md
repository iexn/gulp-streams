#### 创建虚拟文件vinyl流（无实体文件使用）

无实体文件创建流，等同于有实体文件中的 `gulp.src`，返回结果相同

##### 使用方法

```js

// 创建空文件流
const SC = require('gulp-streams').createStreamsContainer();

// 向文件流中写入文件
// content: 文件内容，支持string或buffer类型
// filename：虚拟文件名，自定义
SC.add(content, filename);

// 获取文件流
SC.stream

// 判断是否为空文件流
SC.isEmpty()

```

其中，`SC.stream` 获取到的与 `gulp.src` 生成的内容相同，可以继续之后的 gulp 管道式操作，例如：

```
SC.stream
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
```

---

文献参考：

- 探究Gulp的Stream - https://segmentfault.com/a/1190000003770541
- Nodejs将Buffer转化成Stream - https://www.cnblogs.com/zhangjpn/p/7968005.html
- merge-stream - https://www.npmjs.com/package/merge-stream
- gulp进阶构建项目由浅入深 - https://www.cnblogs.com/tugenhua0707/p/5562548.html