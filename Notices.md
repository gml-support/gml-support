# No.1

The following functions are temporarily not added:

New in GameMaker 8.1:

draw_self() This command is exactly the same as draw_sprite_ext() except it will use the instances own variables to draw itself (x,y, scale, angle etc.) This provides the same action as if the instance was draw without a script.

get_function_address('function_name') Returns the address of a GameMaker function. This can be passed to DLL's so the can call directly into GameMaker.

以下为用法在8.0翻译文档中不完整的函数：

display_reset(AA) Resets the display settings to the ones when the program was started, and also allow you to change the current level of Full Screen Anti-Aliasing being used. Available levels are 0,2,4 and 8. GameMaker start up with 0.

display_aa This read-only variable will report the various levels of AA that a users machine can display. It will do this by setting bits for the different levels, so for only 2xAA, this will report 2, for 2x and 4x availablility it will report 6. For 8 and 4 it will report 12. For all 3 levels (2,4 and 8) it will report 14. To allow a user to set AA, use something like the code shown below.. 

if( display_aa&2 ) display_reset(2);

在游戏绘制——高级绘制函数中的函数（这些函数将在后续版本中添加）：

sprite_get_texture(spr,subimg) 返回纹理id对应于精灵子图。

background_get_texture(back) 返回纹理id对应于背景。

EN:.gmk and .gm81 file is GameMaker 8.1 project file! 
The file can not be edited by the text editor!
This is just to distinguish the GameMaker version.

zh_CN:.gmk和.gm81文件是GameMaker 8.1的项目文件。
这些文件无法被文本编辑器编辑。
在这里仅仅只是为了区分版本。

# Func

[Function]
[Variable]
[Constant]