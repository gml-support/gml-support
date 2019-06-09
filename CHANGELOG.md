## 1.7.1

 - 修复依赖扩展

## 1.7.0

作者高三了，要去准备高考了，滚去复习前发布最后一个更新，在毕业前将不会积极更新插件，如果发现 BUG 请在 GitHub 发布 issue，整理后将会统一修复（如果我有空闲时间的话）。

 - (Beta)添加部分语法提示帮助内容（可以不用翻文档啦。虽然目前的情况你还是要翻文档）
 - 加入文档选择器（使插件符合 VSCode 规范）

I am going to prepare for the college entrance examination, this is the last update before the start of the school curriculum, and I will not actively update the extension. if you find a bug, please report an issue, I will fix (If I have free time).

 - (Beta)Add some grammar hints help.
 - Add Document selector.(Make the extension conform to the Visual Studio Code specification)

## 1.6.2

 - Fix `var/enum` bounding.#12 (@jabsatz)
 - Add `.vscodeignore`.
 - 修复 `var/enum` 高亮错误。#12 (@jabsatz)
 - 添加 `.vscodeignore`。

## 1.6.1

 - Fix some spelling errors for other locales.

## 1.6.0

 - 改进 GML 语法提示显示，现在通过 JSON 读取 GML 语法信息以支持多语言，可前往 Transifex 查看翻译进度或[帮助翻译](https://www.transifex.com/liaronce-production/gml-support)，模板将稍后上传。
 - 修复部分语法高亮。
 - 修复部分函数提示错误。
 - 删除历史版本中遗留的过时代码。
 - 从插件中移除第三方 GM 插件高亮、提示等支持，现已将该功能独立为一款插件，将在本插件发布更新后发布该插件，[仓库地址](https://github.com/gml-support/gml-support-thirdparty)。
 - Improved GML syntax hint display, now read GML syntax information via JSON to support multiple languages. Now you can go to `Transifex` to view translation progress or [help translate](https://www.transifex.com/liaronce-production/gml-support), templates will be uploaded later.
 - Fix some syntax highlighting.
 - Fix some functions' wrong parameters.
 - Remove old completions. (Legacy code in history).
 - Remove third-party GameMaker plug-in highlights, prompts, and other support from the extension. This feature has been turned into an extension that will be released after the plugin is upgraded. [Repository](https://github.com/gml-support/gml-support-thirdparty)

## 1.5.0

 - 添加 GML 语言可用性
 - 添加 `#region` 和 `var` 定义的变量的高亮 （不完整）
 - 修改分类
 - 从插件中移除 `slevesque.shader` 依赖
 - Add `GM Language Availability`
 - Add `#region` and `var` defined variables highlighted (incomplete)
 - Change categories
 - Remove `slevesque.shader` dependencies from this extension.
 

## 1.4.4

 - 修改部分错误的信息
 - 修复 `collision_point` 错误的提示
 - Modify the wrong introduction
 - Fix `collision_point` wrong parameters

## 1.4.3

 - 整理函数信息
 - 翻译了一点点。。。。。。（现已提供翻译模板，可切换到 template 分支查看）
 - Sort out some function information
 - Translation template is now available, switch to `template` branch view

## 1.4.2

 - 添加遗漏的两处（剩下 19 处不知道为什么找不到）
 - 添加基本的 JSDoc 支持（代码片段）
 - 添加更多关于 `GMS` 配置文件的标识（**注意：手动修改 `GMX` 文件可能会导致项目无法正常使用，请谨慎修改**）
 - 整理了一下相关文件
 - Add two missing places ( The remaining 19 can't be found, I don't know why )
 - Add basic JSDoc support ( Snippet )
 - Add more identities for the `GMS` configuration file( **Note: Modifying the `GMX` file manually may cause the project to not work properly. Please modify it carefully.** )
 - Sort out related documents

## 1.4.1

 - 增强语法提示（目前大约有 21 个函数未进行处理，将在后续版本中加入）
 - 重新加入本地化支持（暂无函数信息，现可贡献函数信息）
 - Enhanced grammar hints (approximately 21 functions are currently unprocessed and will be added in subsequent versions)
 - Rejoin localization support (no function information available, now you can contribute on the project home page)

## 1.4.0

经过了三个 Pre-release 后，这个正式版本终于可以使用了，虽然仍有一些不足，但至少这个版本稳定了嘛。

 - 实现了 `Language Server`
 - 精简了大量无用代码
 - `GMS` 和 `GMS2` 内基本函数基本补全，`GM8.1` 大量常用函数也已补全
 - 添加了第三方插件支持，现可在项目内的 `src/gml/gmlThirdparty.js` 贡献，具体支持列表可前往项目网站[查看](https://gmlsupport.liaronce.win/#/zh-cn/Thirdparty)。

After three pre-release, the official version finally available, although there are some deficiencies, but at least this version of the stable thing.

- Implemented `Language Server`
- Streamlined a lot of useless code
- The basic functions in `GMS` and `GMS2` are almost complete, and a large number of commonly used functions in `GM8.1` have also been completed
- Added third-party plug-in support, specific support list can go to the project site to [view](https://gmlsupport.liaronce.win/#/Thirdparty).

## 1.3.8

 - 插件内移除自定义语法高亮支持（因为插件更新后会导致自定义高亮失效），我制作了一个新的插件以继续支持自定义高亮。[更多信息](https://gmlsupport.liaronce.win/#/zh-cn/OwnSyntax)
 - Remove custom syntax highlighting support in the extension (extension's update will lead to custom highlighting failure), I made a new extension to continue to support custom highlighting.[More info](https://gmlsupport.liaronce.win/#/OwnSyntax)

## 1.3.7

- 进行少量精简，下个版本将使用新的方式实现代码补全，现在可以访问插件项目中试用。
- A small amount of streamlining, the next version will use the new way to achieve code completion, you can now access the extension project trial.

## 1.3.6

 - 支持添加自定义高亮了（测试中）
 - Support for adding custom syntax highlighting (Testing)

## 1.3.5

 - 完善 `GM8.1` 和 `GMS` 的代码补全。
 - Improve the `GM8.1` and `GMS` snippet.

## 1.3.4

 - 完善 `GMS` 的代码补全。
 - Improve the `GMS` snippet.
 - 换了个图标。
 - Change icon.

## 1.3.3

 - 从该版本开始，移除函数信息，[详情](https://gmlsupport.liaronce.win/#/zh-cn/QA)
 - From this version, remove the function info, [Details](https://gmlsupport.liaronce.win/#/QA)
 - 添加 `GMLive` 高亮支持,[详情](https://gmlsupport.liaronce.win/#/zh-cn/QA)。
 - Add `GMLive` syntaxes support, [Details](https://gmlsupport.liaronce.win/#/QA).

## 1.3.2

 - 添加插件依赖以支持 Shader 语法。
 - Add extensionDependencies to support shader.

## 1.3.1

 - 完善 `GMS` 的代码补全和代码高亮
 - Improve the `GMS` snippet and syntax.

## 1.3.0

 - `GMS` 下的代码补全已制作完毕！  
 - `GMS` snippet code completion is finished!

## 1.2.2

 - \#4 修复了 `GMS2` 代码高亮问题。  
 - \#4 Fix the string highlighting issue.

## 1.2.1

 - 久违的更新，让大家久等了。  
 由于学习缘故，很难及时提供更新，我感到很抱歉。
 - 加入 `GMS2` 的代码片段，此处非常感谢 @laspencer91。
 （不过下个版本的需要挤出时间更新了啊，我得旷课了。/(ㄒoㄒ)/~~）  
 - Long-running update, so that everyone waiting.
   I am sorry for the difficulty in providing timely updates due to my study.  
 - Join the `GMS2` snippet, thanks @ laspencer91 here.
  (However, the next version of the need to squeeze out the time updated ah, I have to truancy./(ㄒoㄒ)/~~)

## 1.2.0

 - 添加`.gmx`，`.yy`，`.yyp`文件高亮支持。
 - 添加GameMaker Studio 2语法高亮支持。（不完整）
 - Add `.gmx`,` .yy`, `.yyp` file highlight support.
 - Add GameMaker Studio 2 syntax highlight support.(incomplete)

## 1.1.1

 - 添加MaizeMusic插件高亮+代码补全（中国开发者限定）

## 1.1.0

 - 添加“游戏绘制”部分代码补全【该功能依靠代码片段(snippets文件夹下)里的辣鸡代码实现，所以没有错误提醒等一系列高端功能】  
 - Adding "Draw" section of code completion.

## 1.0.2

 - Add a snippet(GameMaker Style)  
 - 加入代码片段（GameMaker风格）  

## 1.0.1

 - Fix screenshot.

## 1.0.0

 - Initial release