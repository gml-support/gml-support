"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

exports.thirdfunctions = {
    //Plugin: MaizeMusic
    //Author: Mage 松仁玉米
    //Website: http://www.magecorn.com
    mm_init: {
        description: '[Function] (MaizeMusic Plugin)',
        signature: '(path)'
    },

    //Plugin: FoxWriting
    //Author: NoisyFox
    //Website: https://noisyfox.io
    fw_add_font: {
        description: '[Function] (FoxWriting Plugin)',
        signature: '(name, size, bold, italic, stroke)'
    },

    //Plugin: FoxWinShave
    //Author: NoisyFox
    //Website: https://noisyfox.io
    NF_WS_Init: {
        description: '[Function] (FoxWinShave Plugin)'
    },
    NF_WS_ShaveWindow: {
        description: '[Function] (FoxWinShave Plugin)',
        signature: '(sprite, subimage, x, y)'
    },
    NF_WS_ShaveWindowAlpha: {
        description: '[Function] (FoxWinShave Plugin)',
        signature: '(sprite, subimage, x, y, alpha)'
    },
    NF_WS_ResetWindow: {
        description: '[Function] (FoxWinShave Plugin)'
    },
    NF_WS_Free: {
        description: '[Function] (FoxWinShave Plugin)'
    },
};